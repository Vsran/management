import React, { Component } from 'react';
import Gantt from './components/gantt';

const data = {
  data: [
    {
      id: 1,
      text: 'Task #1',
      start_date: '15-12-2020',
      duration: 3,
      progress: 0.6,
    },
    {
      id: 2,
      text: 'Task #2',
      start_date: '18-12-2019',
      duration: 3,
      progress: 0.4,
    },
  ],
  links: [{ id: 1, source: 1, target: 2, type: '0' }],
};

class Chart extends Component {
  render() {
    return (
      <div>
        <div className="gantt-container">
          <Gantt tasks={data} />
        </div>
      </div>
    );
  }
}

export default Chart;
