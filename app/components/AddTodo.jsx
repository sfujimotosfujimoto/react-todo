import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export class AddTodo extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if(todoText.length>0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" ref="todoText" placeholder="Enter a todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddTodo);
