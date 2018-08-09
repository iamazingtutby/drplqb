import React, { Component } from 'react';

class FrontMainBlock extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid frontMainBlock">
                <div className="container">
                    <p className="sitename">
                        DrupalCube.com
                    </p>
                    <p className="display-4 subtitle">
                        Drupal-based web solutions
                        <span>
                            from intelligent, responsible and friendly developers
                        </span>
                    </p>
                    <p className="description">
                        We bring the best from open source world to your enterprise-level web solution.
                        Our drupal development company provides you full stack services, maintenance and support.
                        We are experts in Drupal related technologies and we are fans of technologies.
                    </p>

                    <div className="to-bottom">
                        <button className="btn">To bottom</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontMainBlock;
