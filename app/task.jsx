import React from 'react';

class TaskList extends React.Component {
  render() {
    let taskNodes = this.props.tasks.map((task) => {
      return (
        <Task task={task} key={task.id} />
      );
    });

    return (
      <div className="taskList">
        {taskNodes}
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: React.PropTypes.object.isRequired,
}

class Task extends React.Component {
  render() {
    const className = 'task task-' + this.props.task.id;

    return (
      <div className={className}>
        <h2>{this.props.task.name}</h2>
      </div>
    );
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
}

export { TaskList, Task };
