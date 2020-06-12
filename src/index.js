import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    // this was replaced by below by @Babel conversion
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {lat: null, errorMessage: ''};
    // }

    // this call replaced (equivalent) to the full constructor above bc @Babel
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('My component was just updated - it rendered!')
    //     console.log(prevProps);
    //     console.log(prevState);
    // }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    }

    // Rect says we have to define render!!
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));