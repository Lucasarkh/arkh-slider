const selector = () => document.querySelector(arkhSlider().target);
function createSlider() {
  const e = arkhSlider();
  let t = { ...e };
  const n = () => {
      (t = window.matchMedia("(max-width: 767px)").matches ? { ...e, ...e.mobile } : { ...e }), c();
    },
    l = document.querySelector(arkhSlider().target);
  if (!l) return;
  const s = l.style;
  s.position = "relative";
  const r = Array.from(l.children).filter((e) => !["prev", "next", "dots"].some((t) => e.classList.contains(t)));
  let o,
    a = 0,
    i = !1,
    d = 0;
  const c = () => {
    const { itensToShow: e, interval: n, infinite: c, autoplay: h, arrows: y, dots: u } = t;
    if (((l.innerHTML = ""), r.forEach((e) => l.appendChild(e)), y)) {
      const t = createButton("❯", "absolute", "10px", "50%", "right"),
        n = createButton("❮", "absolute", "10px", "50%", "left");
      l.appendChild(t),
        l.appendChild(n),
        t.addEventListener("click", () => {
          (c || a + e < r.length) && ((a = (a + 1) % r.length), g());
        }),
        n.addEventListener("click", () => {
          (c || a > 0) && ((a = (a - 1 + r.length) % r.length), g());
        });
    }
    let p = [];
    if (u) {
      const e = document.createElement("div");
      e.classList.add("dots"),
        (e.style.position = "absolute"),
        (e.style.bottom = "10px"),
        (e.style.left = "50%"),
        (e.style.transform = "translateX(-50%)"),
        (p = r.map((t, n) => {
          const l = document.createElement("span");
          return (
            (l.style.display = "inline-block"),
            (l.style.width = "10px"),
            (l.style.height = "10px"),
            (l.style.borderRadius = "50%"),
            (l.style.margin = "0 5px"),
            (l.style.cursor = "pointer"),
            (l.style.backgroundColor = "rgba(255, 255, 255, 0.5)"),
            l.addEventListener("click", () => {
              (a = n), g();
            }),
            e.appendChild(l),
            l
          );
        })),
        l.appendChild(e);
    }
    (s.display = "flex"),
      (s.overflow = "hidden"),
      (s.width = "100%"),
      r.forEach((t, n) => {
        const l = t.style;
        (l.maxWidth = 100 / e + "%"), (l.padding = "4px");
        t.querySelectorAll("img").forEach((e) => {
          (e.style.width = "100%"),
            e.addEventListener("mousedown", (e) => {
              e.preventDefault();
            });
        }),
          n >= e && (t.style.display = "none");
      });
    const g = () => {
        r.forEach((e, t) => {
          (e.style.display = "none"), (e.style.order = (t - a + r.length) % r.length);
        });
        for (let t = 0; t < e; t++) {
          let e = a + t;
          c && (e = (a + t) % r.length), (r[e].style.display = "flex"), (r[e].style.order = t);
        }
        f();
      },
      f = () => {
        p.length > 0 &&
          p.forEach((e, t) => {
            e.style.backgroundColor = t === a ? "rgba(0, 0, 0, 0.5)" : "rgba(151, 151, 151, 0.5)";
          });
      };
    n > 0 &&
      h &&
      (o && clearInterval(o),
      (o = setInterval(() => {
        (c || a + e < r.length) && ((a = (a + 1) % r.length), g(), !c && a + e >= r.length && clearInterval(o));
      }, n)));
    const m = (e) => {
        (i = !0),
          (d = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX),
          l.classList.add("grabbing"),
          r.forEach((e) => {
            e.style.cursor = "pointer";
          });
      },
      v = (t) => {
        if (i) {
          r.forEach((e) => {
            e.style.cursor = "grabbing";
          });
          const n = (t.type.includes("mouse") ? t.pageX : t.touches[0].clientX) - d;
          Math.abs(n) > 50 &&
            (n < 0 && (c || a + e < r.length)
              ? (a = (a + 1) % r.length)
              : n > 0 && (c || a > 0) && (a = (a - 1 + r.length) % r.length),
            g(),
            (i = !1));
        }
      },
      E = () => {
        (i = !1),
          l.classList.remove("grabbing"),
          r.forEach((e) => {
            e.style.cursor = "pointer";
          });
      };
    l.addEventListener("mousedown", m),
      l.addEventListener("touchstart", m),
      l.addEventListener("mousemove", v),
      l.addEventListener("touchmove", v),
      l.addEventListener("mouseup", E),
      l.addEventListener("touchend", E),
      l.addEventListener("mouseleave", () => {
        i && E();
      }),
      l.querySelectorAll("a").forEach((e) => {
        e.addEventListener("click", (e) => {
          i && e.preventDefault();
        });
      }),
      g();
  };
  n(), window.addEventListener("resize", n);
}
function createButton(e, t, n, l, s) {
  const r = document.createElement("div");
  return (
    (r.innerText = e),
    (r.style.position = t),
    (r.style[s] = n),
    (r.style.top = l),
    (r.style.height = "24px"),
    (r.style.width = "24px"),
    (r.style.display = "flex"),
    (r.style.alignItems = "center"),
    (r.style.justifyContent = "center"),
    (r.style.borderRadius = "50%"),
    (r.style.cursor = "pointer"),
    (r.style.fontSize = "20px"),
    (r.style.fontWeight = "bold"),
    (r.style.userSelect = "none"),
    (r.style.color = "#808080"),
    r
  );
}
createSlider();
