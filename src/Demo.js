import React from 'react';
import { Motion, spring } from 'react-motion';

export default class Demo extends React.Component {


    render() {
        return (
            <div>
                <Motion defaultStyle={{ x: -160 }} style={{ x: spring(window.innerWidth / 3 - 160, { stiffness: 200, damping: 100 }) }}>
                    {({ x }) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className="demo0">
                            <button className="demo0-block" style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                                border: 0,
                            }} >About</button>
                        </div>
                    }
                </Motion>
                <Motion defaultStyle={{ x: -80 }} style={{ x: spring(window.innerWidth / 3 - 80, { stiffness: 200, damping: 100 }) }}>
                    {({ x }) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className="demo0">
                            <button className="demo0-block" style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                                border: 0,
                            }} >Skills</button>
                        </div>
                    }
                </Motion>
                <Motion defaultStyle={{ x: 0 }} style={{ x: spring(window.innerWidth / 3, { stiffness: 200, damping: 100 }) }}>
                    {({ x }) =>
                        // children is a callback which should accept the current value of
                        // `style`
                        <div className="demo0">
                            <button className="demo0-block" style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                                border: 0,
                            }} >Works</button>
                        </div>
                    }
                </Motion>
            </div>
        );
    };
}
