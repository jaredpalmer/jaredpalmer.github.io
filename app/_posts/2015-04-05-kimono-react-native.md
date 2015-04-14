---
layout: post
title:  "Kimono + React Native"
subtitle: "Design + Development + DevOps"
image: "/img/KimonoReact.jpg"
image-alt: "Kimono and React Native"
video: ""
thumbnail-img: "/img/KimonoReact.jpg"
date:   2015-04-05
tags:
 - Website
 - App
 - Development
---




When Facebook released React Native two weeks ago, I immediately wanted to build an iOS app for one of my side projects Contextus. I had watched all the videos, read all the posts, and was anxious to see what all the fuss was about. There was just one problem: I hadn't quite finished the API for Contextus and didn't want to set up a new staging server and sandbox. How could I get live data from the site to the app with the least amount of effort? The answer: [Kimono](http://kimonolabs.com).

###About Kimono
Kimono is a browser extension that turns websites into API's using web scraping. It is fantastic for generating specialized RSS feeds, data mashups and manipulation, time series analysis, and setting up webhooks. I often use it to spice up Framer.js prototypes and projects like this.

###About Contextus
Contextus is a project that tracks and ranks the most shared news stories on the Internet in real time. At any moment, Contextus gives you a macroscopic view of the news cycle.

In this post, I am going to walk you through building a simple iOS news reader with [React Native](http://facebook.github.io/react-native/) and a browser extension called [Kimono](http://kimonolabs.com).  



###The Game Plan
Using browser extension called [Kimono](http://kimonolabs.com), we will generate an new API for Contextus.com. For each story, we will scrape the image, title, url, author, the number of times it has been shared, and the time it was posted. Then we'll build an iOS app with React Native that will display the top stories in a nice list. We'll add some functionality too; when a user taps on a story, the app will open up the link in a `WebView`. From this `WebView`, the user should be able to share the story using native iOS components.

Here's what it will look like when we're done.


<ul class="list-inline list-unstyled" style="margin:0 auto; padding:1rem 0;">
  <li><img class="screenshot" src="/img/ContextusScreenshot.png" alt="Contextus Screenshot iOS"></li>
  <li><img class="screenshot" src="/img/ContextusScreenshot3.png" alt="Contextus Screenshot iOS"></li>
</ul>


##Kimono

###Install the extension
First, install the Kimono Chrome extension from [kimonolabs.com](http://kimonolabs.com). Then navigate to the webpage you want to extract data from (in our case [contextus.com](http://contextus.com)), and then click on the Kimono Chrome extension "K" icon. Next select the data you wish to extract (e.g. title, source information, # of shares, time of post, and image for each story). If you are new to Kimono or need help with this step, keep reading, otherwise skip to the React Native section.

###Extract some content
After you click on the "K" icon your window should look like this.

<img class="post-img--big" src="/img/KimonoScreenshotInit.png" alt="Use Kimono on Contextus">

Rename "property 1" to "title" in the field on the top left of the screen.  Then click on all the title elements you see on the page. Each time you click on an element, Kimono recognizes similar fields and suggests them to you. If Kimono is uncertain, it will ask you to accept of reject an element — if this happens, just click on the check mark to accept the suggestions into the selection. If you have done everything properly, your screen should now look something like this.

<img class="post-img--big border" src="/img/kimono-step-1.gif" alt="Use Kimono on Contextus">

Hit the grey “+” icon to add another property to your API and select the corresponding elements on the page. Rinse and repeat until you’ve created all the properties of interest (I am going to name mine: title, source, shares, time, and image).

<img class="post-img--big border" src="/img/kimono-step-2.gif" alt="Select more elements with Kimono">

At this point, our API is 90% complete. Since Contextus has infinite scroll, click the little infinity icon on the top bar. If the site you're scraping has paginated data, click the book icon instead, and then a pagination link. Both tell Kimono's crawler how to look for more rows of data.

<img class="post-img--big border" src="/img/kimono-step-2.1.gif" alt="Set up Infinite Scroll with Kimono">

Lets check our work. Click on the Data View icon on the top right. In the simple tab, change the name of `collection1` to `stories`.

<img class="post-img--big border" src="/img/kimono-step-3.gif" alt="Rename Kimono API Collection">

Next, click on the '<>' and marvel at the glory of your JSON string. You'll notice that Kimono picked up the link to each of the stories in `title` element. Sweet.


Everything looks peachy, so press the done button in the top right. Give your new API a name and some tags. Set the API to crawl every 15 minutes. Follow the link to the API.

This is your API's dashboard. You can explore the data, set up webhooks, and do tons of other things. Click on the `API Docs` tab and copy the API’s endpoint to your clipboard. We will use this in our React Native app to fetch live data.

<img class="post-img--big" src="/img/kimono-step-4.png" alt="Kimono API dashboard">

And that's it. With a Kimono's Chrome extension and around 30 clicks, we created a simple secure API.


##React Native

Two weeks ago, Facebook officially open-sourced [React Native](http://facebook.github.io/react-native/), a library that lets developers write native iOS (and soon Android) apps with JavaScript. You may have heard of other JavaScript-to-native projects like [PhoneGap](http://phonegap.com/) and [Cordova](https://cordova.apache.org/), but React Native is very different. As [Colin Eberhardt](http://www.raywenderlich.com/99473/introducing-react-native-building-apps-JavaScript) writes:

> With React Native your application logic is written and runs in JavaScript, whereas your application UI is fully native; therefore you have none of the compromises typically associated with HTML5 UI.
>
> React introduces a novel, radical and highly functional approach to constructing user interfaces. In brief, the application UI is simply expressed as a function of the current application state.


##Because Facebook said so.

I could spend the next few paragraphs going through the technical reasons that React Native is great, but I'm not. Read this and this. Instead, I'd like to make a different argument.

Facebook wants to dictate how developers build apps start to finish. From Origami, React, Flux, Relay, HHVM, Buck, ComponentKit...the list goes on and on. The recent open source push is not altruistic, but rather an HR play. More open source now means less training later. In other words, some of you reading this article right now already work for Facebook, they just haven't paid you yet. Gulp.

Additionally, when Facebook releases an open source project you know that it has been battle tested. React Native, for example, is used in the Facebook Groups app, Facebook Ads Manager, the f8 Conference app. That being said, not everything Facebook open sources is for everyone. Some stuff is just overkill for the average one man band. React Native is not one of those things though.

Pitched as "learn once, write anywhere," React and React Native solve an HR problem. It allows Facebook to teach their developers one framework that works pretty much the same way across web, iOS, and Android. That is a pretty compelling value proposition.




###Stop
Before we get started, I strongly recommend checking out this [primer on React.js](https://github.com/mikechau/react-primer-draft). Also check out the resources below.

####Introduction to React.js:
- [React.js Primer](https://github.com/mikechau/react-primer-draft)
- [React for Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/)

####React.js Tutorials
- [Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)
- [Build A Real-Time Twitter Stream with Node and React.js](https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js)

####Introduction to React Native
- [React.js Conf 2015 Keynote: Introducing React Native](https://www.youtube.com/watch?v=KVZ-P-ZI6W4)
- [React.js Conf 2015 Keynote: Deep Dive Into React Native](https://www.youtube.com/watch?v=7rDsRXj9-cU)
- [React Native Website](http://facebook.github.io/react-native/)
- [React Native GitHub Repo](https://github.com/facebook/react-native)

####React Native Tutorials
- [List of React Native Tutorials](https://github.com/jondot/awesome-react-native#articles)

####Support
- [Reactiflux Slack Group](http://www.reactiflux.com/)
- [@reactjs](http://twitter.com/reactjs)

I recommend asking questions in the #reactnative channel inside the Reactiflux Slack Group. There is a bot that If you are really really confused, you can always try tweeting [@reactjs](http://twitter.com/reactjs) with your questions. The React team at Facebook is really great about responding.

###Install React Native
If it is not already installed, [download XCode](https://developer.apple.com/xcode/downloads/) from the Mac App Store. It's a big file.


Install [Homebrew](http://brew.sh/) using the instructions on the Homebrew website, and then Node.js by opening a new terminal window and entering:

{% highlight bash linenos %}
brew install node
{% endhighlight %}

Next use [Homebrew](http://brew.sh/) to install Facebook [Watchman](https://facebook.github.io/watchman/) and Facebook [Flow](http://flowtype.org/). Watchman watches for file changes. Flow is a static type checker for JavaScript that Facebook champions. Flow is optional.

{% highlight bash linenos %}
brew install watchman
brew install flow
{% endhighlight %}

Install the React Native command line interface (CLI) from `npm`.

{% highlight bash linenos %}
npm install -g react-native-cli
{% endhighlight %}

###Create a new project

Navigate to your working directory in terminal and create a new React Native project called 'Contextus' like so. 

{% highlight bash linenos %}
react-native init Contextus
cd Contextus
npm start
{% endhighlight %}

Open `Contextus.xcodeproj` and hit run in Xcode (also select an iPhone 5 or 6 simulator for the device target). Use cmd+R to reload the simulator.

Open `index.ios.js` in your text editor of choice.

**Note:** In this tutorial I am going to use ES6 JSX syntax because...well...your worth it. On a technical note, React Native ships with several JavaScript transforms from that make life easier. You can check out the full list [here](http://facebook.github.io/react-native/docs/javascript-environment.html#content).

###Destructure the component array
[Destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the React array to make it easier to reference. This is fancy of way of saying, "list all the components you require." `AppRegistry`, `StyleSheet`, `Text`, and `View` were listed initially listed, but we won't need all them in this file. Delete `Text` and `View`, but add `NavigatorIOS` to the list.

{% highlight actionscript linenos %}
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;
{% endhighlight %}

`NavigatorIOS` will act as our app's router and ultimately handle switching between our list of top stories and a `WebView`.

Now delete everything below this destructuring assignment.

###Create a new component
Create a new ES6 class and have it extend `React.Component`. Define a `render()` method that returns a `<NavigatorIOS/>` component.  Give `NavigatorIOS` an `initialroute` in order to instantiate it.

{% highlight actionscript linenos %}
class Contextus extends React.Component{
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={% raw  %}{{
          component: StoryList,
          title: 'Contextus'}}{% endraw %}
        tintColor='#5298FC'
      />
    );
  }
}
{% endhighlight %}
`initialRoute` points to a component called `StoryList` (which we will create momentarily). I also gave it a `title` and `tintColor`.


###Add some style
One of the best parts of React Native is that you can style native UI elements using [CSS-Layout](https://speakerdeck.com/vjeux/react-css-in-js) (a reimplementation of flexbox and box model using pure JavaScript). Now is a good time to brush up on your flexbox if you need to. I like [Chris Coyier's Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and/or refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_flexbox_to_lay_out_web_applications) if necessary. Add the following to bottom of the file.

{% highlight actionscript linenos %}
var styles = StyleSheet.create({
  container:{
    flex:1
  }
});
{% endhighlight %}
We are almost done with our first React component. However, we need to register our application so that xCode can properly bundle the app and run it. Add this at the bottom of your file:

{% highlight actionscript linenos %}
AppRegistry.registerComponent('Contextus', () => Contextus);
{% endhighlight %}




###Create a ListView
Create a new file in the same directory as `index.ios.js` called `StoryList.js` and add the following to the top of file.

{% highlight actionscript linenos %}

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;
{% endhighlight %}
`ActivityIndicatorIOS` is a loading spinner we'll use on start up. `TouchableHighlight` we let us trigger actions and modify UI when users tap on a story.

###Define initial state
Now create a new class called `StoryList` that extends `React.Component`. We'll use a `constructor()` method to define our component's initial state. Note that this is the ES6 equivalent to `getInitialState` in the React Docs. Add the following just after destructuring assignment.
{% highlight actionscript linenos %}

class StoryList extends React.Component{
  constructor(){
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  }
}
{% endhighlight %}
This is the most confusing part of the application. We initialize a `dataSource` for our `ListView` component and also provide a `rowHasChanged` method which tells the `ListView` if it needs to re-render a row because the source data has changed. See the [docs](http://facebook.github.io/react-native/docs/listview.html#datasource) for examples. We also create a variable `loaded` which we'll use to trigger a special loading view while we fetch data.

### Fetching data from Kimono
We want to get the data from our Kimono API right after the `StoryList` component has finished loading. In a React component's lifecycle, `componentDidMount` is "a function of React components that React will call exactly once, just after the component has been loaded." This is the perfect time and place to `fetchData`. Add the following right after the `contructor`.

{% highlight actionscript linenos %}
componentDidMount() {
  this.fetchData();
}
{% endhighlight %}

Now create the `fetchData` method we just called.

{% highlight actionscript linenos %}
// 'Promises, and they still feel oh so
//  wasted on myself..'
// [♪ Dubstep ♪]
fetchData() {
  fetch('http://bit.ly/1ObqJSi')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          responseData.results.stories),
        loaded: true
      });
    }).done();
}
{% endhighlight %}

Instead of a normal XHR request, we use the new `fetch()` function to access our Kimono API. If successful, we handle the result using a Promise chain. Remember to always finish a chain with `.done()`.

Although it seems much more complicated, **a React component is simply a state machine.** When we call `this.setState()` after fetching the data, we update the `ListView`'s `dataSource` (cloning over each row). React then uses that `rowHasChanged` function we put in the `constructor` to figure out what UI to re-render to reflect the state change.

###Rendering the list

Now create a `render()` method underneath `fetchData()`.
{% highlight actionscript linenos %}
render(){
  return (
    <ListView
      dataSource = {this.state.dataSource}
      renderRow = {(story) => <Text>{story.title.text}</Text>}
      style = {styles.listView}
    />
  );
}
{% endhighlight %}
We supply our `ListView` with our `dataSource` and simple `renderRow` function to test our data.

Add the following export statement to the bottom of the `StoryList.js` file.

{% highlight actionscript linenos %}
module.exports = StoryList;
{% endhighlight %}

Then open up `index.ios.js` and add this require statement just after the one for React.
{% highlight actionscript linenos %}
var StoryList = require('./StoryList');
{% endhighlight %}

If you check your simulator, you should have something like this.


Now go back to `StoryList.js` and replace the `renderRow` line in the `ListView` to call a `renderStory(story)` method. Once `renderStory` changes the execution flow, the `this` reference becomes the global object which is `undefined` in strict mode. Usually, we'd set 'self=this'  or use a `.bind` method. However, since we are using ES6, we can use an arrow function `=>` to maintain scope. We then pass in a `story` argument as a row identifier.

{% highlight actionscript linenos %}
renderRow = {(story) => this.renderStory(story)}
{% endhighlight %}

###Render the stories
Now it's finally time to render each story. Drop this into your file.

{% highlight actionscript linenos %}
renderStory(story){
  return (
      <View style={styles.container}>
        <Image
          source={% raw %}{{uri: story.image.src}}{% endraw %}
          style={styles.thumbnail}
        />
      </View>
  );
}
{% endhighlight %}

Your screen should look like this.

Now let's add the title and source info. Add the following just under the `Image` component.

{% highlight actionscript linenos %}
<View style={styles.storyInfo}>
  <Text style={styles.storyTitle}>
    {story.title.text}
  </Text>
  <Text style={styles.storyMeta}>
    {story.source.text} {story.shares} • {story.time}
  </Text>
</View>
{% endhighlight %}

You should now see something like this. Try scrolling! It should work!


###Pass properties to the WebView
Create a method called `openLink(story)`. Remember the `Navigator` component we made in the beginning? We are now going to use it to switch views. We will pass each story's `url` to a component called `StoryWebView` via the `navigatory` property array.
{% highlight actionscript linenos %}
openLink(story) {
      this.props.navigator.push({
        title:  story.title.text,
        component: StoryWebView,
        passProps: {url: story.title.href  },
        tintColor: '#5298FC',
      }
}
{% endhighlight %}

###Add a WebView
Create a new file in the same directory called `StoryWebView.js`. Add the following destructuring assignment to the top of the file and styles.

{% highlight actionscript linenos %}
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  WebView,
  ActivityIndicatorIOS,
  ActionSheetIOS
} = React;
{% endhighlight %}

Add in the styles while you're at it.

{% highlight actionscript linenos %}
var styles = StyleSheet.create({
  container:{
    flex:1,
  },
  loadingView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
{% endhighlight %}

Create a react component called `StoryWebView`. Make it render the url we passed it through the `props` array.
{% highlight actionscript linenos %}
class StoryWebView extends React.Component{
render(){
  return(
    <WebView
      url={this.props.url}
      renderLoading={this.renderLoading}
      startInLoadingState={true}
      />
  );
}
{% endhighlight %}
Just below `render()` make a `renderLoading()` method that returns and `ActivityIndicatorIOS` wrapped in a `View` component. This is the loading spinner. While not strictly necessary, it makes a huge difference on UX.
{% highlight actionscript linenos %}
renderLoading() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicatorIOS
        color='#5298FC'
        size='large'/>
    </View>
  );
}
{% endhighlight %}

Finally add an export statement at the bottom of the file.
{% highlight actionscript linenos %}
module.exports = StoryWebView;
{% endhighlight %}

###Trigger the WebView

So we need a way to call `openLink()` from our `StoryList`. Open up `StoryList.js` and add the wrap our current the our `View` from `renderStory` with a `<TouchableHighlight>`. `renderStory()` should now look like this.
{% highlight actionscript linenos %}
renderStory(story){
  return (
    <TouchableHighlight
      onPress={() => this.openLink(story)}
      underlayColor='#eeeeee'
      activeOpacity='.8'>
      <View style={styles.container}>
        <Image
          source={{uri: story.image.src}}
          style={styles.thumbnail}
        />
        <View style={styles.storyInfo}>
            <Text style={styles.storyTitle}>{story.title.text}</Text>
            <Text style={styles.storyMeta}>
                {story.source.text}
                {story.shares} • {story.time}</Text>
          </View>
      </View>
    </TouchableHighlight>
  );
}
{% endhighlight %}
We use `onPress={() => this.openLink(story)}` to call `openLink` on the correct row when the use taps on it. You can now run your app. The only left to do now is add sharing capability.

###Sharing is caring
In `StoryList.js` create a `share(link)` method. Nothing special here, I just copied it from the docs.

{% highlight actionscript linenos %}
share(link){
  ActionSheetIOS.showShareActionSheetWithOptions({url: link, },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text})
    }
  );
}
{% endhighlight %}

Now add two lines to your `openLink` method:
{% highlight actionscript linenos %}
rightButtonTitle: 'Share',
onRightButtonPress: () => this.share(story.title.href)
{% endhighlight %}

And there you have it.

##Wrapping things up

###Helpful links:
-[Running on your device](http://facebook.github.io/react-native/docs/runningondevice.html#content)

###Where to go from here

###Keep going
