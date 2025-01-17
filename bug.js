This error occurs when you try to access a component's state or props before it has been mounted.  This often happens inside a lifecycle method like `constructor` or when directly using a prop or state variable in a function that gets called too early.

```javascript
// Incorrect:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name); // Error: this.props.name might be undefined
  }
  render() {
    return <Text>{this.props.name}</Text>;
  }
}
```