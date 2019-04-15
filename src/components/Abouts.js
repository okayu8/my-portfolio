import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Abouts extends Component {
    render() {
        return (
            <Motion defaultStyle={{ x: 1000 }} style={{ x: spring(0, { stiffness: 80, damping: 17 }) }}>
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
                                北海道出身のWebプログラマーです。
                            </p>
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}