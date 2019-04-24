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
                            <div className="box" style={{ maxWidth: 800 }}>
                                <a href="/my-portfolio/" target="_blank">
                                    <p style={{ fontWeight: "bold" }}>Yutaro Kataoka's PORTFOLIO</p>
                                    <img className="works-iamge" src={my_portfolio}></img>
                                </a>
                                <p>{this.props.lang === "jp" ? jp.text1 : en.text1}</p>
                                <p>JaveSctipt&nbsp;/&nbsp;React.js&nbsp;/&nbsp;HTML&nbsp;/&nbsp;CSS&nbsp;/&nbsp;GitHub Pages</p>
                                <p>source&nbsp;:&nbsp;
                                    <a style={{ color: "rgb(255, 115, 0)" }}
                                        target="_blank"
                                        href="https://github.com/okayu8/my-portfolio">https://github.com/okayu8/my-portfolio</a></p>
                            </div>

                        </div>
                    </div>
                }
            </Motion>
        )
    }
}

const jp = {
    text1: "自身のポートフォリオサイトです。",
}

const en = {
    text1: "My own portfolio site.",

}