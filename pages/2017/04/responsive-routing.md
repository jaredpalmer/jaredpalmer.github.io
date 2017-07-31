---
title: Responsive Routing
date: "2017-04-03T22:12:03.284Z"
readNext: "/my-second-post/"
path: "/2017/04/responsive-routing"
---

With the release of React Router 4, routing is no longer limited by a single static route config file. Routes are _just_ components. And that means we can bring them into and out existance like every other part of our applications. This is particularly useful for responsive sites. 

To demonstrate this technique, we are going to rebuild twitter.com's and mobile.twitter.com's settings views.

Imagine we want to have a classic two-column view on desktop with a sidebar and our forms, but on mobile we want to have a native-style master detail.

```js
import React from 'react'
import Switch from 'react-router-dom/Switch'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'
import Media from 'react-media'
import load from 'utils/loader'

const Settings = ({ user }) => (
  <div>
    <Route path="/settings" render={props => (
      <Media query="(max-width: 50rem)">
        {(match) => match 
          ? <AppBar title="Settings" back="/" />
          : <Redirect to="/settings/account" />
        <Media> 
      )} 
    />
    <SettingsNav>
      {makeSidebarLinks(user).map((el,i) => (   
        <SettingsNavLink key={`navLink--${i}`} to={el.to} />
      ))}
    </SettingsNav>
    <Switch>
      <Route exact path="/settings/account" component={EditAccount} />
      <Route exact path="/settings/profile" component={EditProfile} />
      <Route exact path="/settings/password" component={EditPassword} />
    </Switch>
  </div>
);

export default Settings
```