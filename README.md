# React Scroll Parallax

Provides a React component and single passive scroll listener to add **vertical** scrolling based offsets to elements based on their position in the viewport. Works with universal (server-side rendered) React apps.

[View on NPM](https://www.npmjs.com/package/react-scroll-parallax)

## Examples

🔗 [CodePen Parallax](https://codepen.io/jscottsmith/pen/eREbwz)

🔗 [Example Site](https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-example/)

🔗 [Parallax Testing](https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-test/)

## Install

```
npm i react-scroll-parallax --save
```

## Usage

Wrap your component tree that will contain `<Parallax />` components with the `<ParallaxProvider />`. For example:

```jsx
...
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
    render() {
        return (
            <ParallaxProvider>
                <StuffWithParallax />
            </ParallaxProvider>
        );
    }
}

```

Import the `Parallax` component...

```javascript
import { Parallax } from 'react-scroll-parallax';
```

... then use it like so:

```jsx
<Parallax
    className="custom-class"
    offsetYMax={20}
    offsetYMin={-20}
    slowerScrollRate
    tag="figure"
>
    <img src="/image" />
</Parallax>
```

**NOTE:** Scroll state and positions of elements on the page are cached for performance reasons. This means that if the page height changes (perhaps from images loading) after `<Parallax />` components are mounted the controller won't properly determine when the elements are in view. To correct this you can call the `parallaxController.update()` method from any child component of the `<ParallaxProvider />` via `context`. More details on how here: [Parallax Controller Context](#parallax-controller-context).

## Parallax Component Props

The following are all props that can be passed to the React `<Parallax />` component:

**`className`**

- type: `String`

Optionally pass additional class names to be added to the outer parallax element.

**`disabled`**

- type: `Boolean`
- default: `false`

Determines if the component will have parallax offsets applied. If `true` parallax styles are completely removed from the element and it is no longer updated.

**`offsetXMax`**

- type: `Number` or `String`
- default: `0`

Maximum **x** offset in `%` or `px`. If no unit is passed percent is assumed. Percent is based on the elements width.

**`offsetXMin`**

- type: `Number` or `String`
- default: `0`

Minimum **x** offset in `%` or `px`. If no unit is passed percent is assumed. Percent is based on the elements width.

**`offsetYMax`**

- type: `Number` or `String`
- default: `0`

Maximum **y** offset in `%` or `px`. If no unit is passed percent is assumed. Percent is based on the elements height.

**`offsetYMin`**

- type: `Number` or `String`
- default: `0`

Minimum **y** offset in `%` or `px`. If no unit is passed percent is assumed. Percent is based on the elements height.

**`slowerScrollRate`**

- type: `Boolean`
- default `false`

Determines whether the scroll rate of the parallax component will move faster or slower than the default rate of scroll.

**`tag`**

- type: `String`
- default `div`

Optionally pass a tag name to be applied to the outer most parallax element. For example: `<Parallax tag="figure" />`.

## Parallax Controller Context

Access the Parallax Controller via [React context](https://facebook.github.io/react/docs/context.html) in any components rendered within a `<ParallaxProvider />` by defining the `contextTypes` like so:

```jsx
class Foo extends Component {

    static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
    };

    doSomething() {
        // do stuff with this.context.parallaxController
    }

    ...
```

or for stateless functional components like:

```jsx
const Bar = (props, context) => (

    // do stuff with context.parallaxController

    ...
);

Bar.contextTypes = {
    parallaxController: PropTypes.object.isRequired,
};

```

### Available Methods

Access the following methods on `parallaxController` via context:

**`update()`**

Updates all cached attributes for parallax elements then updates their positions.

**`destroy()`**

Removes window scroll and resize listeners then resets all styles applied to parallax elements.

## Browser Support

React scroll parallax should support the last two versions of all major browsers and has been tested on desktop Chrome, Firefox, Safari and Edge, as well as the following: iOS 9, iOS 10, Android 4 and IE11. If you encounter any errors for browsers that should be supported please post an issue.

## Optimizations to Reduce Jank

React Scroll Parallax uses a single [passive scroll listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners) (dependent on browser support) with the minimal amount of work done on the scroll event to prevent [jank](http://jankfree.org/) (calculations that cause layout, reflow and paint are cached initially and only updated when layout changes). Request animation frame is then used to decouple the scroll handler and further reduce jank. All offsets are applied with 3D transforms to utilize the GPU and prevent paints. If you have ideas to further optimize scrolling please PR or post an issue.

**PSA**

It's 2017 and you probably shouldn't be building parallax sites—but if you do (like I did) and you use this package try and use it responsibly. Keeping images small and optimized, reducing the number of moving elements in view and on the page, and disabling scroll effects on mobile devices should keep scrolling smooth.
