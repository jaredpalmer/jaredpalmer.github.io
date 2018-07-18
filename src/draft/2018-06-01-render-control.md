---
title: Give me render control, or give me death!
path: /blog/render-control
date: "2018-06-01"
description: Give me render control, or give me death!
image: 
draft: true
---

<span class="dropcap">L</span>ately I'm seeing a lot of people jump on the [render props](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) train. That’s cool. However, I’m also seeing some really bad abstractions on GitHub in some very popular component libraries/design systems. I’ve been struggling to articulate this concept, but after some conversations among our team we’ve come up with some new (but not actually new) terms.

## The "Behavioral" Component

Move all of your logic and behavior, especially the imperative stuff, into a render prop that renders children as a function of state, props, and whatever helpers you've built. If you are really nice, you’ll allow this component to be both controlled and uncontrolled.

Examples:

- [react-toggled](https://github.com/kentcdodds/react-toggled) by Kent C. Dodds [(@kentcdodds)](https://twitter.com/kentcdodds)
- [react-fns](https://github.com/jaredpalmer/react-fns) by Me [(@jaredpalmer)](https://twitter.com/kentcdodds)

Opinion: Prefer `React.Context` and components over so called "prop getters". Prop getters look gross with all the spreading. Or...you can expose both, maybe build the components with the getters, and tell me to shut up.

## The Presentational Component(s)

This is your dumb presentational component. It has styles. It is coupled to you css-in-js library du jour. It's easily testable. It can have state, but probably shouldn’t.

_Pro Tip: Stop using `boolean` props. Prefer strings, or even better, use constant string enums in TypeScript!_

```js
import * as React from 'react';

export default class About extends React.Component {
  render() {
    return <div>About</div>;
  }
}
import * as React from 'react';

export default class About extends React.Component {
  render() {
    return <div>About</div>;
  }
}
```

## The Composed Component(s)

Finally make a component that composes the last 2. Export all 3 of them!. You’ll thank me later.

## Why 3?

The composition of the behavioral render prop presentation should cover the 80% of use cases. However, you are inevitably going to end up needing a different presentation component because you are inevitably going to mess up your initial abstraction. Or, you may realize the behavior render prop can be recycled elsewhere. Congrats since you decoupled them, you can create new composed components for edge cases. Separation of concerns amirite? Anyways, don’t be an ass an couple your awesome accessible component to your weekly css-in-js library. Give your team some escape hatches, but ship the thing with the battery pack included.

Please think about this next time you take away render control from your teammates. If you find yourself doing this, cut the cake, and abstract differently.

```js
import * as React from 'react';

export default class About extends React.Component {
  render() {
    return <div>About</div>;
  }
}
```
