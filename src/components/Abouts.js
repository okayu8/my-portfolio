import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Abouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "jp",
        };
    };

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
                                Abouts
                            </h2>
                        </div>
                        <div className="content">
                            <p>
                                {this.props.lang === "jp" ? jp.text1 : en.text1}
                            </p>
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}

const jp = {
    text1: "北海道出身のWebエンジニアです。",
}

const en = {
    text1: "I am a web engineer from Hokkaido, Japan.",
}