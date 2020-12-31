import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="gey-text">
                            I am a fresh graduate student of University of Education.
                            Specialized in information technology. I spent 3 years on java programming . I always dream of becoming a good engineer in the future.
                        </p>
                    </div>
                    <div className="card-action">
                        <h6 ><strong>PERSONAL INFO</strong></h6>
                        <div className="row mt">
                            <div className="col s12 m6 16 x16">
                                <p><strong className="text-accent-4">Adress: </strong>Quang Ngai</p>
                                <p><strong className="text-accent-4">Email: </strong>Camnguyen2603@gmail.com</p>
                                <p><strong className=" text-accent-4">Phone: </strong>0332067167</p>
                            </div>
                            <div className="s12 m6 l6 xl6">
                                <p><strong >Main Language: </strong>Viet Nam </p>
                                <p><strong >Second Language: </strong>English</p>
                                <p><strong >Third Language: </strong>Japan</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
