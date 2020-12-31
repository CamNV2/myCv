import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

class Education extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-content">
                        <h6 className="card-panel  accent-3"><strong>EDUCATION</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web develoment</td>
                                    <td>Jan 2021</td>
                                    <td>
                                        <Link to="#" className="btn orange darken-2">View</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Free Code Camp Javascript</td>
                                    <td>Jan 2020</td>
                                    <td>
                                        <a href="https://www.freecodecamp.org/certification/nguyenvancam/javascript-algorithms-and-data-structures" className="btn green accent-4">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Java CodeLearn</td>
                                    <td>Jan 2020</td>
                                    <td>
                                        <Link to="#" className="btn blue lighten-2">View</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>React CodeX</td>
                                    <td>Jan 2019</td>
                                    <td>
                                        <Link to="#" className="btn blue darken-1">View</Link>
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
export default Education;
