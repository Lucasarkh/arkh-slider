# ArkhSlider 📸🎉

Welcome to **ArkhSlider**! A simple, customizable, and responsive image slider for your website.

## Features ✨

- **Responsive Design** 📱💻
- **Infinite Loop** ♾️
- **Autoplay** ⏯️
- **Navigation Arrows** ⬅️➡️
- **Dots for Navigation** 🔵⚪
- **Mobile Configuration** 📲

## Installation 📥

Download the `arkhSlider.js` file and include it in your project:

```html
<script src="path/to/arkhSlider.js"></script>
```



```html
  <script type="module" src="https://cdn.jsdelivr.net/gh/Lucasarkh/arkh-slider/script.js"></script>
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
    mobile: {
      itensToShow: 1,
      interval: 3000,
      infinite: false,
      autoplay: true,
      arrows: true,
      dots: true,
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
- `mobile`: Configuration for mobile viewports.

## Example 💡

```html
<div class="target">
  <div><img src="image1.jpg" alt="Image 1" /></div>
  <div><img src="image2.jpg" alt="Image 2" /></div>
  <div><img src="image3.jpg" alt="Image 3" /></div>
  <div><img src="image4.jpg" alt="Image 4" /></div>
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
        mobile: {
          itensToShow: 1,
          interval: 3000,
          infinite: false,
          autoplay: true,
          arrows: true,
          dots: true,
        },
      }
    };
```

## Contribution 🤝

Feel free to contribute to this project by submitting issues or pull requests.

## License 📄

This project is licensed under the MIT License.

---

Happy Sliding! 😃🎢
