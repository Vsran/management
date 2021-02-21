import React, { Component } from 'react';
import Gantt from '../../../components/location';

const data = {
    data: [
        { id: 1, text: 'Task #1', start_date: '10-01-2021', duration: 3, progress: 0.6},
        { id: 2, text: 'Task #2', start_date: '18-01-2021', duration: 3, progress: 0.4}
    ],
    links: [
        {id: 1, source: 1, target: 2, type: '0'}
    ]
}

export default class TaskChart extends Component {
    render() {
        return (
            <div>
                <div>库存</div>
                <div className="gantt-container">
                    <Gantt tasks={data}/>
                </div>
            </div>
        )
    }
}