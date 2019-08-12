# Additional Info & Notes

### Component Lifecycle

* Every component instance follows a cycle: It's mounded onto the DOM (Document Object Model), updated with changes in data, and it's unmounted from the DOM.

### REACT Lifecycle Methods

* Built-in methods that get called at each point in the life cycle.

* Hooks that run code at key times in a components life cycle.

* Gives you the ability to control what happens when a component mounts, updates and then unmounts.

#### Understanding the timer logic:
https://teamtreehouse.com/community/having-trouble-understanding-logic

### Understanding componentWillUnmount()
https://reactjs.org/docs/react-component.html#componentwillunmount

In Stopwatch.js componentWillUnmount is invoked just before a component instance is unmounted and destroyed so you can use it to clear anything that needs to be cleared when a component is removed from the DOM. Inside the method, clear the interval by calling the JavaScript clearInterval method, clearInterval cancels any timed repeating actions created by calling setInterval. Pass the interval ID to clear with this.intervalID. 

Now, we've safely cleaned up the intervals set in componentDidMount.

As soon as the Stopwatch component mounts, the interval is set,repeatedly calling tick(), And if for some reason the Stopwatch no longer needs to be rendered, the componentWillUnmount method will clear the interval so that it's no longer ticking away and taking up memory.

Quoted from video: [https://teamtreehouse.com/library/prevent-memory-leaks-with-componentwillunmount]

Source: https://teamtreehouse.com