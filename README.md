# for-love-element
A fun little web component that brings some love to your page

All you need is love, love for the web. You can express your love for your pages with this little component.

## Basic usage

```sh
npm install --save-dev for-love-element
```

```html
<for-love>
  Add anything you want here
</for-love>
```

**You have already created some love on your page!**

## Customization

Some basic customization can be crated by using CSS custom properties (a.k.a CSS variables)

| CSS Custom Property     | Description                                              | Type or example                                           | Default       |
|-------------------------|----------------------------------------------------------|-----------------------------------------------------------|---------------|
| `--fl-heart-color`      | Color of the hearts (unless multicolor option is active) | any `<color>`                                             | `#F8C8DC`     |
| `--fl-heart-size`       | Size of the heart                                        | `20px`, `5vw`, `10ch`, ...                                | `3vw`         |
| `--fl-sway`             | The amount swaying from left to right                    | `<integer>`                                               | `5`           |
| `--fl-iteration`        | The amount of times the animation should play            | positive `<integer>` or `infinite`                        | `infinite`    |
| `--fl-ease`             | Easing of the animation                                  | `ease-in`, `linear`, `cubic-bezier(.17,.67,.83,.67)`, ... | `ease-in-out` |



## Options

There are 3 options available

| Attribute  | Behaviour                                                                               |
|------------|-----------------------------------------------------------------------------------------|
| amount     | Specify the amount of hearts being shown                                                |
| multicolor | Set a bunch of multi color hearts <br/>(overrides the default color setting)            |
| contained  | Use it for non-full page hearts where the parent element is set to `position: relative` |

Example of the options usage:
```html
<for-love amount="10" multicolor contained>
    Add anything you want here
</for-love>
```

## Examples
I might set up a page with examples later on. For now, you can check out these CodePen links:

* [Basic example](https://codepen.io/utilitybend/pen/poYJZzr)
* [Multicolor example](https://codepen.io/utilitybend/pen/RwdPBwb)
* [Contained example](https://codepen.io/utilitybend/pen/dyrojbL)