const selector = () => document.querySelector(arkhSlider().target);

function createSlider() {
  const baseConfig = arkhSlider();
  let config = { ...baseConfig };

  const applyMobileConfig = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      config = { ...baseConfig, ...baseConfig.mobile };
    } else {
      config = { ...baseConfig };
    }
    updateSliderConfig();
  };

  const targetElement = selector();

  if (!targetElement) {
    console.error("Target element not found");
    return;
  }

  const targetStyle = targetElement.style;
  targetStyle.position = "relative";

  const children = Array.from(targetElement.children).filter((child) => {
    return !["prev", "next", "dots"].some((className) => child.classList.contains(className));
  });

  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let intervalId;

  const updateSliderConfig = () => {
    const { itensToShow, interval, infinite, autoplay, arrows, dots } = config;

    targetElement.innerHTML = "";
    children.forEach((child) => targetElement.appendChild(child));

    if (arrows) {
      const nextButton = createButton("❯", "absolute", "10px", "50%", "right");
      const prevButton = createButton("❮", "absolute", "10px", "50%", "left");

      targetElement.appendChild(nextButton);
      targetElement.appendChild(prevButton);

      nextButton.addEventListener("click", () => {
        if (infinite || currentIndex + itensToShow < children.length) {
          currentIndex = (currentIndex + 1) % children.length;
          updateSlider();
        }
      });

      prevButton.addEventListener("click", () => {
        if (infinite || currentIndex > 0) {
          currentIndex = (currentIndex - 1 + children.length) % children.length;
          updateSlider();
        }
      });
    }

    let dotElements = [];
    if (dots) {
      const dotsContainer = document.createElement("div");
      dotsContainer.classList.add("dots");
      dotsContainer.style.position = "absolute";
      dotsContainer.style.bottom = "10px";
      dotsContainer.style.left = "50%";
      dotsContainer.style.transform = "translateX(-50%)";

      dotElements = children.map((_, index) => {
        const dot = document.createElement("span");
        dot.style.display = "inline-block";
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.borderRadius = "50%";
        dot.style.margin = "0 5px";
        dot.style.cursor = "pointer";
        dot.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

        dot.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
        });

        dotsContainer.appendChild(dot);
        return dot;
      });

      targetElement.appendChild(dotsContainer);
    }

    targetStyle.display = "flex";
    targetStyle.overflow = "hidden";
    targetStyle.width = "100%";

    children.forEach((child, index) => {
      const childStyle = child.style;
      childStyle.minWidth = `${100 / itensToShow}%`;
      childStyle.padding = "4px";
      const images = child.querySelectorAll("img");
      images.forEach((image) => {
        image.style.width = "100%";
        image.addEventListener("mousedown", (event) => {
          event.preventDefault();
        });
      });

      if (index >= itensToShow) {
        child.style.display = "none";
      }
    });

    const updateSlider = () => {
      children.forEach((child, index) => {
        child.style.display = "none";
        child.style.order = (index - currentIndex + children.length) % children.length;
      });

      for (let i = 0; i < itensToShow; i++) {
        let showIndex = currentIndex + i;
        if (infinite) {
          showIndex = (currentIndex + i) % children.length;
        }
        children[showIndex].style.display = "flex";
        children[showIndex].style.order = i;
      }

      highlightDot();
    };

    const highlightDot = () => {
      if (dotElements.length > 0) {
        dotElements.forEach((dot, index) => {
          dot.style.backgroundColor = index === currentIndex ? "rgba(0, 0, 0, 0.5)" : "rgba(151, 151, 151, 0.5)";
        });
      }
    };

    if (interval > 0 && autoplay) {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (infinite || currentIndex + itensToShow < children.length) {
          currentIndex = (currentIndex + 1) % children.length;
          updateSlider();
          if (!infinite && currentIndex + itensToShow >= children.length) {
            clearInterval(intervalId);
          }
        }
      }, interval);
    }

    const startDragging = (event) => {
      isDragging = true;
      startX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
      targetElement.classList.add("grabbing");

      children.forEach((child) => {
        child.style.cursor = "pointer";
      });
    };

    const dragging = (event) => {
      if (isDragging) {
        children.forEach((child) => {
          child.style.cursor = "grabbing";
        });
        const currentPosition = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        const movedBy = currentPosition - startX;

        if (Math.abs(movedBy) > 50) {
          if (movedBy < 0 && (infinite || currentIndex + itensToShow < children.length)) {
            currentIndex = (currentIndex + 1) % children.length;
          } else if (movedBy > 0 && (infinite || currentIndex > 0)) {
            currentIndex = (currentIndex - 1 + children.length) % children.length;
          }
          updateSlider();
          isDragging = false;
        }
      }
    };

    const stopDragging = () => {
      isDragging = false;
      targetElement.classList.remove("grabbing");
      children.forEach((child) => {
        child.style.cursor = "pointer";
      });
    };

    targetElement.addEventListener("mousedown", startDragging);
    targetElement.addEventListener("touchstart", startDragging);
    targetElement.addEventListener("mousemove", dragging);
    targetElement.addEventListener("touchmove", dragging);
    targetElement.addEventListener("mouseup", stopDragging);
    targetElement.addEventListener("touchend", stopDragging);
    targetElement.addEventListener("mouseleave", () => {
      if (isDragging) stopDragging();
    });

    targetElement.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (isDragging) {
          event.preventDefault();
        }
      });
    });

    updateSlider();
  };

  applyMobileConfig();
  window.addEventListener("resize", applyMobileConfig);
}

function createButton(text, position, rightOrLeft, top, direction) {
  const button = document.createElement("div");
  button.innerText = text;
  button.style.position = position;
  button.style[direction] = rightOrLeft;
  button.style.top = top;
  button.style.height = "24px";
  button.style.width = "24px";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.borderRadius = "50%";
  button.style.cursor = "pointer";
  button.style.fontSize = "20px";
  button.style.fontWeight = "bold";
  button.style.userSelect = "none";
  button.style.color = "#808080";

  return button;
}

createSlider();
