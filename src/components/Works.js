import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import my_portfolio from '../images/my-portfolio.png';

export default class Works extends Component {
    render() {
        return (
            <Motion defaultStyle={{ x: -1000 }} style={{ x: spring(0, { stiffness: 80, damping: 17 }) }}>
                {({ x }) =>
                    <div className="panel" style={{
                        WebkitTransform: `translate3d(${x}px, 0, 0)`,
                        transform: `translate3d(${x}px, 0, 0)`,
                        border: 0,
                    }}>
                        <div className="panel-title">
                            <h2 style={{ opacity: 1 }}>
                                <a className="sub-title">Works</a>
                            </h2>
                            <div className="box">
                                <a href="/my-portfolio/" target="blank">
                                    <p style={{ fontWeight: "bold" }}>Yutaro Kataoka's PORTFOLIO</p>
                                    <img className="works-iamge" src={my_portfolio}></img>
                                </a>


                            </div>
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}