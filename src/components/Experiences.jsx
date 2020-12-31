import React, { Component } from 'react'

export default class Experiences extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-content">
                        <h6 className="card-panel  darken-1"><strong>EXPEROEMCES</strong></h6>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="green accent-4 white-text">
                                    jan<strong>2016</strong> - March<strong>2017</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 x18">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Java Dev</strong>
                                    </h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                            </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="blue lighten-2 white-text">
                                    jan<strong>2018</strong> - March<strong>2020</strong>
                                </p>
                            </div>
                            <div className="col s12 m8 l8 x18">
                                <blockquote className="no-pad">
                                    <h6 className="no-pad mt-bottom">
                                        <strong>Ruby DEVELOPER</strong>
                                    </h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                            </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
