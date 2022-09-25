import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./TeamNameAutoComplete.scss";

class AutoComplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: props.selectedTeamName
        };
    }

    onChange = e => {
        const { suggestions } = this.props;
        const {setSelectedTeamName} = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setSelectedTeamName(e.currentTarget.value);
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        const {setSelectedTeamName} = this.props;
        setSelectedTeamName(e.currentTarget.innerText);
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
        const {setSelectedTeamName} = this.props;

        if (e.keyCode === 13) {
            setSelectedTeamName(filteredSuggestions[activeSuggestion]);
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        let {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;
        userInput = this.props.selectedTeamName;
        const teamsButtonText = this.props.teamsButtonText
        let suggestionsListComponent;
        if (showSuggestions && userInput && (teamsButtonText==="Apply")) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="teams-suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    <p>{suggestion}</p>
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        }
        return (
            <Fragment>
                <div>
                    <input
                        placeholder={"Name of team or player"}
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        className={"teams-auto-complete-input"}
                    />
                    {suggestionsListComponent}
                </div>
            </Fragment>
        );
    }
}

export default AutoComplete;