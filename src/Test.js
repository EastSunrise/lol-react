import React, {Component} from "react";
import 'isomorphic-fetch';

export default class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    async componentDidMount() {
        let summoner = await (await fetch('http://localhost:8090/lol/summoner?name=Gllory')).json();
        console.log(summoner.score);
        this.setState({summoner})
    }

    render() {
        return (
            <div>
                <h1>League of Legends</h1>
                <h2>{this.state.score}</h2>
            </div>
        )
    }
}