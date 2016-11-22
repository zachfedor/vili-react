'use strict';

import React from 'react';
import uuid from 'uuid';
import { TaskList } from './task.jsx';


// http://redux.js.org/docs/basics/ExampleTodoList.html

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: uuid.v4(),
          name: 'do laundry',
        }, {
          id: uuid.v4(),
          name: 'finish vili',
        }, {
          id: uuid.v4(),
          name: 'un pomodoro',
        },
      ],
    };
  }

  // loadTasks() {
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({ tasks: data });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // }

  componentDidMount() {
    // this.loadTasks();
    // setInterval(this.loadTasks, 2000);
  }

  render() {
    return (
      <div className="timerWrapper">
        timer:

        <TimerControls />

        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}


class TimerControls extends React.Component {
  render() {
    return (
      <div className="timerControls">
        <button type="button">Start</button>
        <button type="button">Stop</button>
      </div>
    );
  }
}

export { TimerWrapper, TimerControls };
