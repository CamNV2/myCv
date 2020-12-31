import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-content">
                        <h6 className="card-panel  darken-1"><strong>PROPRESSIONAL SKILL</strong></h6>
                        <div className="row mt-top">
                            <div className='col s6'>
                                <p>Html</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '89%' }}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Css</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>JavaScript</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Jquery</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Java</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Ruby</p>
                                <div className="progress grey lighten-1">
                                    <div className="determinate blue" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
