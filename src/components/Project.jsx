import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default class Project extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-content">
                        <h6 className="card-panel  accent-3"><strong>Project</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Spring Boot Ecommerce</td>
                                    <td>Jan 2019</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">View</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>O-Shop React </td>
                                    <td>Jan 2020</td>
                                    <td>
                                        <a href="#" className="btn blue lighten-2">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>PHP Web</td>
                                    <td>Jan 2020</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">View</Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

