const selector = () => document.querySelector(arkhSlider().target);
function applyReload() {
  localStorage.getItem("hasReloaded") ? localStorage.removeItem("hasReloaded") : (localStorage.setItem("hasReloaded", "true"), window.location.reload());
}
function createSlider() {
  const e = arkhSlider();
  let t = { ...e };
  const l = () => {
      (t = window.matchMedia("(max-width: 767px)").matches ? { ...e, ...e.mobile } : { ...e }), applyReload(), d();
    },
    n = document.querySelector(arkhSlider().target),
    r = n.style;
  r.position = "relative";
  const o = Array.from(n.children).filter((e) => !["prev", "next", "dots"].some((t) => e.classList.contains(t)));
  let s,
    a = 0,
    i = !1,
    c = 0;
  const d = () => {
    const { itensToShow: e, interval: l, infinite: d, autoplay: h, arrows: p, dots: y, draggable: u, stopOnHover: g, nav: f, navShow: m, scrollSlider: v } = t;
    if (((n.innerHTML = ""), o.forEach((e) => n.appendChild(e)), p)) {
      const t = createButton("❯", "absolute", "10px", "50%", "right"),
        l = createButton("❮", "absolute", "10px", "50%", "left");
      n.appendChild(t),
        n.appendChild(l),
        t.addEventListener("click", () => {
          (d || a + e < o.length) && ((a = (a + 1) % o.length), E());
        }),
        l.addEventListener("click", () => {
          (d || a > 0) && ((a = (a - 1 + o.length) % o.length), E());
        });
    }
    let b = [];
    if (y) {
      const e = document.createElement("div");
      e.classList.add("dots"),
        (e.style.position = "absolute"),
        (e.style.bottom = "10px"),
        (e.style.left = "50%"),
        (e.style.transform = "translateX(-50%)"),
        (b = o.map((t, l) => {
          const n = document.createElement("span");
          return (
            (n.style.display = "inline-block"),
            (n.style.width = "10px"),
            (n.style.height = "10px"),
            (n.style.borderRadius = "50%"),
            (n.style.margin = "0 5px"),
            (n.style.cursor = "pointer"),
            (n.style.backgroundColor = "rgba(255, 255, 255, 0.5)"),
            (n.style.transition = "all 0.3s ease"),
            n.addEventListener("click", () => {
              (a = l), E();
            }),
            e.appendChild(n),
            n
          );
        })),
        n.appendChild(e);
    }
    (r.display = "flex"),
      (r.overflow = "hidden"),
      (r.width = "100%"),
      (r.height = "auto"),
      o.forEach((t, l) => {
        const n = t.style;
        (n.width = "100%"), (n.maxWidth = 100 / e + "%"), window.innerWidth > 768 && (n.padding = "4px");
        t.querySelectorAll("img").forEach((e) => {
          (e.style.width = "100%"),
            (e.style.objectFit = "cover"),
            e.addEventListener("mousedown", (e) => {
              e.preventDefault();
            });
        }),
          l >= e && (t.style.display = "none");
      });
    const E = () => {
      o.forEach((e, t) => {
        (e.style.display = "none"), (e.style.order = (t - a + o.length) % o.length);
      });
      for (let t = 0; t < e; t++) {
        let e = a + t;
        d && (e = (a + t) % o.length), (o[e].style.display = "flex"), (o[e].style.order = t);
      }
      w(), L();
    };
    v &&
      n.addEventListener("wheel", () => {
        event.preventDefault(), (a = event.deltaY > 0 ? (a - 1 + o.length) % o.length : (a + 1) % o.length), E();
      });
    const x = document.querySelector(f);
    if (x) {
      (x.style.overflow = "scroll"), (x.style.height = n.offsetHeight + "px"), (x.style.paddingTop = "2px");
      const e = document.createElement("style");
      (e.textContent = "\n          .scroll-bar::-webkit-scrollbar {\n            height: 4px;\n            width: 4px;\n          }\n          .scroll-bar::-webkit-scrollbar-thumb {\n            background-color: rgba(0, 0, 0, 0.5);\n            border-radius: 10px;\n          }\n        "),
        document.head.appendChild(e),
        x.classList.add("scroll-bar"),
        x.addEventListener("wheel", () => {
          event.preventDefault(), event.deltaY > 0 ? ((x.scrollLeft += 150), (x.scrollTop += 150)) : ((x.scrollLeft -= 150), (x.scrollTop -= 150));
        }),
        o.forEach((e, t) => {
          e.querySelector("img").src;
          const l = document.createElement("img");
          (l.style.padding = "2px"),
            (l.src = e.querySelector("img").src),
            l.addEventListener("click", () => {
              (a = t), E();
            }),
            x.appendChild(l);
        });
      const t = Array.from(x.children);
      for (let e = 0; e < t.length; e++) x.style.flexDirection, (t[e].style.height = 90 / m + "%"), (t[e].style.borderRadius = "8px");
      x.style.display = "flex";
    }
    const w = () => {
        b.length > 0 &&
          b.forEach((e, t) => {
            (e.style.backgroundColor = t === a ? "rgba(0, 0, 0, 0.5)" : "rgba(151, 151, 151, 0.5)"), (e.style.width = t === a ? "24px" : "10px"), (e.style.borderRadius = t === a ? "5px" : "50%");
          });
      },
      L = () => {
        Array.from(x.children).forEach((e, t) => {
          e.style.backgroundColor = t === a ? "rgba(151, 151, 151, 0.5)" : "transparent";
        });
      };
    function S(e, t, l) {
      e.addEventListener(t, l);
    }
    if (
      (l > 0 &&
        h &&
        (s && clearInterval(s),
        (s = setInterval(() => {
          if (d || a + e < o.length) {
            (a = (a + 1) % o.length), E(), !d && a + e >= o.length && clearInterval(s);
            Array.from(x.children).forEach((e) => {
              e.addEventListener("click", () => {
                s && clearInterval(s);
              }),
                o.forEach((e) => {
                  e.addEventListener("click", () => {
                    s && clearInterval(s);
                  });
                });
            });
          }
        }, l)),
        g &&
          (n.addEventListener("mouseover", () => {
            s && clearInterval(s);
          }),
          n.addEventListener("mouseout", () => {
            s && clearInterval(s),
              (s = setInterval(() => {
                (d || a + e < o.length) && ((a = (a + 1) % o.length), E(), !d && a + e >= o.length && clearInterval(s));
              }, l));
          }))),
      u)
    ) {
      const t = (e) => {
          (i = !0),
            (c = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX),
            o.forEach((e) => {
              e.style.cursor = "grabbing";
            });
        },
        l = (t) => {
          if (i) {
            o.forEach((e) => {});
            const l = (t.type.includes("mouse") ? t.pageX : t.touches[0].clientX) - c;
            Math.abs(l) > 100 && (l < 0 && (d || a + e < o.length) ? (a = (a + 1) % o.length) : l > 0 && (d || a > 0) && (a = (a - 1 + o.length) % o.length), (i = !1), E());
          }
        },
        r = () => {
          o.forEach((e) => {
            e.style.cursor = "pointer";
          }),
            (i = !1);
        };
      n.querySelectorAll("a").forEach((e) => {
        e.addEventListener("click", (e) => {
          i && e.preventDefault();
        });
      }),
        S(n, "mousedown", t),
        S(n, "touchstart", t),
        S(n, "mousemove", l),
        S(n, "touchmove", l),
        S(n, "mouseup", r),
        S(n, "touchend", r),
        n.addEventListener("mouseleave", () => {
          i && r();
        });
    }
    E();
  };
  l(), window.addEventListener("resize", l);
}
function createButton(e, t, l, n, r) {
  const o = document.createElement("div");
  return (o.innerText = e), (o.style.position = t), (o.style[r] = l), (o.style.top = n), (o.style.height = "24px"), (o.style.width = "24px"), (o.style.display = "flex"), (o.style.alignItems = "center"), (o.style.justifyContent = "center"), (o.style.borderRadius = "50%"), (o.style.cursor = "pointer"), (o.style.fontSize = "20px"), (o.style.fontWeight = "bold"), (o.style.userSelect = "none"), (o.style.color = "#808080"), o;
}
createSlider();
