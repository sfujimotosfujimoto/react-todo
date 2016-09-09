import React from 'react';

class Todo extends React.Component {
  render() {
    let {id, text, completed} = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed}/>
        {text}
      </div>
    );
  }
}
export default Todo;
