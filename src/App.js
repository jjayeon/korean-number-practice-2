import React, { Component } from "react";

import * as My from "./Components.js";
import * as Util from "./Util.js";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: "sino", // can be sino, native
            diff: "easy", // can be easy, hard
            soln: 0,
            question: "",
            value: "",
            message: "",
        };

        this.inputChange = this.inputChange.bind(this);
        this.languageChange = this.languageChange.bind(this);
        this.difficultyChange = this.difficultyChange.bind(this);
    }

    componentDidMount() {
        this.reload();
    }

    reload(diff = this.state.diff, lang = this.state.lang) {
        const max = diff === "easy" ? 10 : 100,
            a = Util.randNum(1, max),
            b = Util.randNum(1, max),
            worda = Util.makeWord(a, lang),
            wordb = Util.makeWord(b, lang);

        this.setState({
            soln: a + b,
            question: `${worda} + ${wordb}`,
            message: Util.niceThing(),
            value: "",
        });
    }

    inputChange(e) {
        if (parseInt(e.target.value) === this.state.soln) {
            this.reload();
        } else {
            this.setState({ value: e.target.value });
        }
    }

    languageChange(e) {
        this.setState({ lang: e.target.value });
        this.reload(this.state.diff, e.target.value);
    }

    difficultyChange(e) {
        this.setState({ diff: e.target.value });
        this.reload(e.target.value, this.state.lang);
    }

    render() {
        return (
            <div>
                <h1>Korean Number Practice!</h1>
                <My.Language
                    onChange={this.languageChange}
                    value={this.state.lang}
                />
                <My.Difficulty
                    onChange={this.difficultyChange}
                    value={this.state.diff}
                />
                <My.Question text={this.state.question} />
                <My.Input
                    onChange={this.inputChange}
                    value={this.state.value}
                />
                <My.Message text={this.state.message} />
            </div>
        );
    }
}
