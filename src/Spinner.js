import React from "react";

const Spinner = props => {
    return (
        <div className="ui active transition visible dimmer">
            <div className="content">
                <div className="ui inverted text loader">{props.message}</div>
            </div>
        </div>
    );
};

// defaults the props if none given
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;