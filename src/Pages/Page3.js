import React from 'react';
import {LineChart, ToolTip, PieChart} from 'react-easy-chart';

export class Page3 extends React.Component {
    mouseOverHandler(d, e) {
        this.setState({showToolTip: true, top: e.y, left: e.x, value: d.value, key: d.data.key});
    }

    mouseMoveHandler(e) {
        if (this.state.showToolTip) {
            this.setState({top: e.y, left: e.x});
        }
    }

    mouseOutHandler() {
        this.setState({showToolTip: false});
    }

    createTooltip() {
        if (this.state.showToolTip) {
            return (
                <ToolTip top={this.state.top} left={this.state.left}>
                    The value of {this.state.key}
                    is {this.state.value}
                </ToolTip>
            );
        }
        return false;
    }
    render() {
        return <div>
            <LineChart
                yType={'text'}
                xType={'text'}
                axes
                margin={{
                top: 0,
                right: 0,
                bottom: 100,
                left: 100
            }}
                yDomainRange={['Allot', 'Middle', 'Less']}
                interpolate={'cardinal'}
                width={350}
                height={250}
                data={[
                [
                    {
                        x: 'Mon',
                        y: 'Little'
                    }, {
                        x: 'Tue',
                        y: 'Perfect'
                    }, {
                        x: 'Wed',
                        y: 'Allot'
                    }, {
                        x: 'Thu',
                        y: 'Little'
                    }, {
                        x: 'Fri',
                        y: 'Perfect'
                    }
                ]
            ]}/>
            <PieChart
                data={[
                {
                    key: 'A',
                    value: 100,
                    color: '#aaac84'
                }, {
                    key: 'B',
                    value: 200,
                    color: '#dce7c5'
                }, {
                    key: 'C',
                    value: 50,
                    color: '#e3a51a'
                }
            ]}
                innerHoleSize={200}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this
                .mouseOutHandler
                .bind(this)}
                mouseMoveHandler={this
                .mouseMoveHandler
                .bind(this)}
                padding={10}
                styles={this.styles}/>
        </div>
    }
}