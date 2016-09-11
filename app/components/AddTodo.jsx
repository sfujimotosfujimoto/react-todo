import React from 'react';

class AddTodo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let {onAddTodo} = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.length>0) {
      this.refs.todoText.value = '';
      onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" ref="todoText" placeholder="Enter a todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
