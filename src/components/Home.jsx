import React, { Component } from 'react'
import About from './About';
import Skill from './Skill';
import Experiences from './Experiences';
import Education from './Education';
import Project from './Project';
import Navbar from './Navbar';
import Profile from './Profile';

class Home extends Component {
    render() {
        return (
            <div>
                <section>
                    <Navbar />
                    <div className='container'>
                        <div className='row'>
                            <div className='col s12 m4 l3'>
                                <Profile />

                            </div>
                            <div className='col s12 m8 l9'>
                                <About />
                                <Skill />
                                <Experiences />
                                <Education />
                                <Project />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home;