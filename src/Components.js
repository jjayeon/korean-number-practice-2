import React from "react";
import PropTypes from "prop-types";

export function Question(props) {
    return <div id="q">{props.text}</div>;
}
Question.propTypes = {
    text: PropTypes.string.isRequired,
};

export function Message(props) {
    return <div id="m">{props.text}</div>;
}
Message.propTypes = {
    text: PropTypes.string.isRequired,
};

export function Input(props) {
    return <input type="text" onChange={props.onChange} value={props.value} />;
}
Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export function Language(props) {
    return (
        <form id="l">
            <label>
                Sino-Korean
                <input
                    type="radio"
                    value="sino"
                    checked={props.value === "sino"}
                    onChange={props.onChange}
                />
            </label>
            <label>
                Native
                <input
                    type="radio"
                    value="native"
                    checked={props.value === "native"}
                    onChange={props.onChange}
                />
            </label>
        </form>
    );
}
Language.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export function Difficulty(props) {
    return (
        <form id="d">
            <label>
                Easy
                <input
                    type="radio"
                    value="easy"
                    checked={props.value === "easy"}
                    onChange={props.onChange}
                />
            </label>
            <label>
                Hard
                <input
                    type="radio"
                    value="hard"
                    checked={props.value === "hard"}
                    onChange={props.onChange}
                />
            </label>
        </form>
    );
}
Difficulty.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
