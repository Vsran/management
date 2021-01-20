import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './gant.scss';

export default class Gantt extends Component {
    componentDidMount() {
        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        gantt.parse(tasks);
    }

    render() {
        return(
            <div ref={(input) => { this.ganttContainer = input }}></div>
        )
    }
}