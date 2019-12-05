import React, {Component} from "react";
import 'isomorphic-fetch';
import {Button} from "react-bootstrap";

export default class Hello extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 0
        }
    }

    componentDidMount = async () => {
        let summoner = await (await fetch('http://localhost:8090/lol/summoner?name=Gllory')).json();
        this.setState({
            score: summoner.score
        })
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>League of Legends</h1>
                <Button>{this.state.score}</Button>
            </div>
        )
    }
}