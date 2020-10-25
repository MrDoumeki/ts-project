import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react'
import './index.less'
import { Carousel,  Card,  Row, Col } from 'antd';



class Home extends Component {
    private getOption1 = () => {
        return {
            title: {
                text: '分类占比',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
            },

            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    radius: [20, 110],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        { value: 10, name: 'rose1' },
                        { value: 5, name: 'rose2' },
                        { value: 15, name: 'rose3' },
                        { value: 25, name: 'rose4' },
                        { value: 20, name: 'rose5' },
                        { value: 35, name: 'rose6' },
                        { value: 30, name: 'rose7' },
                        { value: 40, name: 'rose8' }
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    data: [
                        { value: 10, name: 'rose1' },
                        { value: 5, name: 'rose2' },
                        { value: 15, name: 'rose3' },
                        { value: 25, name: 'rose4' },
                        { value: 20, name: 'rose5' },
                        { value: 35, name: 'rose6' },
                        { value: 30, name: 'rose7' },
                        { value: 40, name: 'rose8' }
                    ]
                }
            ]

        }
    }

    private getOption2 = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        }
    }

    render() {

        return (
            <div className="home">
                <div className="home-carousel">
                    <Carousel autoplay>
                        <div>
                            <img src="https://wx4.sinaimg.cn/mw690/006sdOrFgy1gk1vkyormej31c40pu4qq.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://wx4.sinaimg.cn/mw690/006sdOrFgy1gk1vl0k83vj31c40oqu0x.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://wx1.sinaimg.cn/mw690/006sdOrFgy1gk1vl3n8ifj318f0oku0x.jpg" alt="" />
                        </div>
                        <div>
                            <img src="https://wx1.sinaimg.cn/mw690/006sdOrFgy1gk1vlgqjltj318f0nvx6p.jpg" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="home-type">
                    <Card title="Card title" bordered={false} style={{width:'23%'}}>
                        Card content
                     </Card>
                    <Card title="Card title" bordered={false} style={{width:'23%'}}>
                        Card content
                     </Card>
                    <Card title="Card title" bordered={false} style={{width:'23%'}}>
                        Card content
                     </Card>
                    <Card title="Card title" bordered={false} style={{width:'23%'}}>
                        Card content
                     </Card>
                </div>
                <div className="home-charts">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card title="tag分类" bordered={false}>
                                <ReactEcharts option={this.getOption1()} style={{ height: 600 }}></ReactEcharts>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="话题上升榜" bordered={false}>
                                <ReactEcharts option={this.getOption2()} style={{ height: 600 }}></ReactEcharts>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home