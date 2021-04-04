import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";

function Question(props) {
    return <div id="q">{props.text}</div>;
}
Question.propTypes = {
    text: PropTypes.string,
};

function Message(props) {
    return <div id="m">{props.text}</div>;
}
Message.propTypes = {
    text: PropTypes.string,
};

function Input(props) {
    return (
        <input type="text" onChange={props.handleChange} value={props.value} />
    );
}
Input.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.string,
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: "nat",
            diff: 1, // 0 is easy, 1 is hard
            soln: 0,
            question: "When you're ready, enter 0 into the text box.",
            value: "",
            message: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    reload() {
        const randNum = (() => () => {
            return Math.floor(
                1 + ((this.state.diff === 1 ? 100 : 10) - 1) * Math.random()
            );
        })();
        const makeWord = (() => {
            /* eslint-disable */
            // prettier-ignore
            const numWords = this.state.lang === "sino"
                  ? ["공", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구",]
                  : ["공", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉",];
            // prettier-ignore
            const numWords10 = this.state.lang === "sino"
                  ? ["십", "이십", "삼십", "사십", "오십", "육십", "칠십", "팔십", "구십",]
                  : ["열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔",];
            /* eslint-enable */
            return (num) => {
                let tens = Math.floor(num / 10),
                    ones = num % 10,
                    out = "";
                if (tens > 0) {
                    out += numWords10[tens - 1];
                }
                out += numWords[ones];
                return out;
            };
        })();

        let a = randNum(),
            b = randNum(),
            worda = makeWord(a),
            wordb = makeWord(b);

        this.setState({
            soln: a + b,
            question: `${worda} + ${wordb}`,
            message: this.niceThing(),
            value: "",
        });
    }

    handleChange(e) {
        if (parseInt(e.target.value) === this.state.soln) {
            this.reload();
        } else {
            this.setState({ value: e.target.value });
        }
    }

    niceThing() {
        // prettier-ignore
        let niceThings = ["wow!", "nice!", "good job!", "좋아!", "대박!", "와아!", "impressive!", "sexy!", "incredible!", "nice nice!", "ez!", "진짜!",];
        // Some nice things to say to the user.
        return niceThings[Math.floor(niceThings.length * Math.random())];
    }

    render() {
        return (
            <div>
                <h1>Korean Number Practice!</h1>
                <Question text={this.state.question} />
                <Input
                    handleChange={this.handleChange}
                    value={this.state.value}
                />
                <Message text={this.state.message} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
