import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import githubImage from '../images/icons8-github-32.png'

export default class Top extends Component {
    handleToGithub() {
        window.open('https://github.com/okayu8')
    }
    render() {
        return (
            <div>
                <h1>
                    Yutaro Kataoka's<br />PORTFOLIO
                </h1>
                <h2 className="after-title">
                    Web Engineer
                </h2>
                {/* <a><img src={githubImage} /></a> */}
                <Motion defaultStyle={{ x: -800 }} style={{ x: spring(window.innerWidth / 3, { stiffness: 160, damping: 90 }) }}>
                    {({ x }) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className="demo0">
                            <button className="demo0-block" style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                                border: 0,
                            }} onClick={() => { this.handleToGithub() }}><img style={{ width: 25, height: 25 }} src={githubImage} /></button>
                        </div>
                    }
                </Motion>
            </div>

        )
    }
}