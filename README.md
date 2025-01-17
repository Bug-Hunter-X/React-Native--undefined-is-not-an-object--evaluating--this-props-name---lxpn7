# React Native: undefined is not an object (evaluating 'this.props.name')

This repository demonstrates a common error in React Native applications where accessing component props or state before the component has mounted results in an `undefined is not an object (evaluating 'this.props.name')` error.  The error is explained, and a solution is provided using the `componentDidMount` lifecycle method.