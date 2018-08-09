import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

class App extends Component {

    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';



    render() {
        return (
            <div className="App">
                <Header />
                    <div className="pages">
                        { this.props.children }
                    </div>
                <Footer />
            </div>
        );
    }
}

export default App;
