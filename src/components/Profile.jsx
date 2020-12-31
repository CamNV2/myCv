import React, { Component } from 'react';
import ImgProfile from '../images/admin.jpg';
import { HashLink as Link } from "react-router-hash-link";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className='activator' src={ImgProfile} />


                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Nguyen Van Cam</span>
                        <p>Java Back-End Web Developer</p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Follow Me
                        </span>
                        <p className="flex-container">
                            <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
                            <i className="fab fa-google-plus-g grey-text text-darken-4 social-style"></i>
                            <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
                            <i className="fab fa-google-plus-g grey-text text-darken-4 social-style"></i>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;
