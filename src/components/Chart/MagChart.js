import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import { Typography, makeStyles, Container, Paper} from '@material-ui/core';

import './styles.css'

let JsonDroneStatus= []

const socketUrl = 'ws://localhost:8000/ws-drone'
const ws = new WebSocket(socketUrl)
ws.onopen = () => {
  console.log('connected')
}
ws.onmessage = (e) => {
    const droneStatusData = e.data
    JsonDroneStatus = JSON.parse(JSON.parse(droneStatusData))
    return JsonDroneStatus
}

class MagChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            options: {
                colors : ['#b84644'],
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                bar: {
                    horizontal: false,
                    s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                    e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                    borderRadius: 0,
                    columnWidth: '70%',
                    barHeight: '70%',
                    distributed: false,
                    rangeBarOverlap: true,
                    rangeBarGroupRows: false,
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 0,
                            color: undefined
                        }],
                        backgroundBarColors: [],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 0,
                    },
                    dataLabels: {
                        position: 'top',
                        maxItems: 100,
                        hideOverflowingLabels: true,
                    }
                },
                chart: {
                id: "basic-bar"
                },
                xaxis: {
                categories: ['drone1','drone2','drone3','drone4','drone5']
                },
                yaxis :{
                    min : 0,
                    max : 0.8
                }
            },
            options2: {
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 250
                    }
                },
                bar: {
                    horizontal: false,
                    s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                    e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                    borderRadius: 0,
                    columnWidth: '70%',
                    barHeight: '70%',
                    distributed: false,
                    rangeBarOverlap: true,
                    rangeBarGroupRows: false,
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 0,
                            color: undefined
                        }],
                        backgroundBarColors: [],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 0,
                    },
                    dataLabels: {
                        position: 'top',
                        maxItems: 100,
                        hideOverflowingLabels: true,
                    }
                },
                chart: {
                id: "basic-bar"
                },
                xaxis: {
                categories: ['drone1','drone2','drone3','drone4','drone5']
                },
                yaxis :{
                    min : 0,
                    max : 100
                }
            },
            series: [
                {
                name: "series-1",
                data: [0.2, 0.8, 0.45, 0.20, 0.60]
                }
            ],
            series2 : [
                {
                    name: "series-2",
                    data: [19, 68, 75, 30, 90]
                }
            ]
        };
    }


    render() {
        return (
            <div className='chartContainer'>
                <Paper className="mixed-chart mag">
                    <Typography
                    variant='h4'>
                        Mag Chart
                    </Typography>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="500"
                        height="300px"
                    />
                </Paper>
                <Paper className="mixed-chart battery">
                    <Typography
                    variant='h4'>
                        Battery Level
                    </Typography>
                    <Chart
                        options={this.state.options2}
                        series={this.state.series2}
                        type="line"
                        width="500"
                        height="300"
                    />
                </Paper>
                <Paper className="mixed-chart battery">
                    <Typography
                    variant='h4'>
                        GPS STATUS
                    </Typography>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        width="500"
                        height="300"
                    />
                </Paper>
            </div>
        );
    }
}

export default MagChart;