
# arkhSlider 📸🎉

Welcome to **arkhSlider**! A simple, customizable, and responsive image slider for your website.

## Features ✨

- **Responsive Design** 📱💻
- **Infinite Loop** ♾️
- **Autoplay** ⏯️
- **Navigation Arrows** ⬅️➡️
- **Dots for Navigation** 🔵⚪
- **Mobile Configuration** 📲
- **Draggable Slides** 🖱️
- **Scroll Slider Navigation** 🖱️📜
- **Hover Stop** 🖱️✋

## Installation 📥

Download the `arkh-slider.js` file and include it in your project:

```html
<script src="path/to/arkh-slider.js"></script>
```

Or CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/Lucasarkh/arkh-slider/arkh-slider.js"></script>
```

CDN Minified: 
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/Lucasarkh/arkh-slider/arkh-slider.min.js"></script>
```

## Usage 🚀

Create a target element in your HTML where the slider will be applied:

```html
<div class="target">
  <!-- Your slides here -->
</div>
```

Then initialize the slider in your JavaScript:

```javascript
function arkhSlider() {
  return {
    target: ".target",
    itensToShow: 3,
    interval: 2000,
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: true,
    draggable: true,
    scrollSlider: true,
    stopOnHover: true,
    nav: ".nav",
    navShow: 3,
    mobile: {
      itensToShow: 1,
      interval: 3000,
      infinite: false,
      autoplay: true,
      arrows: true,
      dots: true,
      draggable: true,
      scrollSlider: true,
      stopOnHover: true,
      nav: ".nav",
      navShow: 3,
    },
  };
}
```

## Configuration Options ⚙️

You can customize the slider by modifying the `arkhSlider` function parameters:

- `target`: CSS selector for the slider container.
- `itensToShow`: Number of items to show in the slider.
- `interval`: Time interval for autoplay (in milliseconds).
- `infinite`: Enable or disable infinite loop.
- `autoplay`: Enable or disable autoplay.
- `arrows`: Show or hide navigation arrows.
- `dots`: Show or hide navigation dots.
- `draggable`: Enable or disable draggable slides.
- `scrollSlider`: Enable or disable scroll navigation.
- `stopOnHover`: Enable or disable stopping autoplay on hover.
- `nav`: CSS selector for navigation thumbnails.
- `navShow`: Number of navigation thumbnails to show.
- `mobile`: Configuration for mobile viewports.

## Example 💡

```html
<div class="target">
  <div><img src="image1.jpg" alt="Image 1" /></div>
  <div><img src="image2.jpg" alt="Image 2" /></div>
  <div><img src="image3.jpg" alt="Image 3" /></div>
  <div><img src="image4.jpg" alt="Image 4" /></div>
</div>
<div class="nav">
  <!-- Navigation thumbnails will be added here -->
</div>
```

```javascript
function arkhSlider() {
  return {
    target: ".target",
    itensToShow: 3,
    interval: 2000,
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: true,
    draggable: true,
    scrollSlider: true,
    stopOnHover: true,
    nav: ".nav",
    navShow: 3,
    mobile: {
      itensToShow: 1,
      interval: 3000,
      infinite: false,
      autoplay: true,
      arrows: true,
      dots: true,
      draggable: true,
      scrollSlider: true,
      stopOnHover: true,
      nav: ".nav",
      navShow: 3,
    },
  };
}
```

## Contribution 🤝

Feel free to contribute to this project by submitting issues or pull requests.

## License 📄

This project is licensed under the MIT License.

---

Happy Sliding! 😃🎢
