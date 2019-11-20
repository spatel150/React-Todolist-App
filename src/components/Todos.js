import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}
// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.array.isRequired
}

export default Todos;

// When you map, you are looping over the obejct and displaying the obejct each time a loop occurs.
// this.props.todos.map((todo) => (
//  <h3> {todo.title} </h3>    
// ))
// todo={todo} will be passed into TodoItem as a prop
// Add a key when we map through a list. Each child in an array should have a unique key prop
// PropTypes are the validation for what properties certain components have



