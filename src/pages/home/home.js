import React, { Component } from 'react';
import FrontMainBlock from '../../components/front-main-block/front-main-block';

class HomePage extends Component {

    static path = '/';

    render() {
        return (
            <div className="page">
                <FrontMainBlock />
            </div>
        );
    }
}

export default HomePage;