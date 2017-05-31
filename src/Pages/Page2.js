import React from 'react';

export default class Page2 extends React.Component {
    state = { result: null };
    async componentDidMount(){
        const { factorial } = await import('../Math');
        this.setState({
            result: factorial(20)
        });
    }
    render(){
        return <div>20 factorial is {this.state.result || <div>loading...</div>} </div>
    }
}