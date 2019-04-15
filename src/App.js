import React, { Component } from 'react';
import './App.css';
import { Motion, spring } from 'react-motion';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Top from './components/Top'
import Abouts from './components/Abouts'
import Skills from './components/Skills'
import Works from './components/Works'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <Link to='/my-portfolio/'>
              <Motion defaultStyle={{ x: -240 }} style={{ x: spring(window.innerWidth / 4 - 240, { stiffness: 140, damping: 100 }) }}>
                {({ x }) =>
                  // children is a callback which should accept the current value of
                  // `style`
                  <div className="demo0">
                    <button className="demo0-block" style={{
                      WebkitTransform: `translate3d(${x}px, 0, 0)`,
                      transform: `translate3d(${x}px, 0, 0)`,
                      border: 0,
                    }} >Top</button>
                  </div>
                }
              </Motion>
            </Link>

            <Link to='/my-portfolio/abouts'>
              <Motion defaultStyle={{ x: -160 }} style={{ x: spring(window.innerWidth / 4 - 160, { stiffness: 160, damping: 90 }) }}>
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
            </Link>

            <Link to='/my-portfolio/skills'>
              <Motion defaultStyle={{ x: -80 }} style={{ x: spring(window.innerWidth / 4 - 80, { stiffness: 180, damping: 80 }) }}>
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
            </Link>

            <Link to='/my-portfolio/works'>
              <Motion defaultStyle={{ x: 0 }} style={{ x: spring(window.innerWidth / 4, { stiffness: 200, damping: 70 }) }}>
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
            </Link>
          </header>

          <Route exact path='/my-portfolio' component={Top} />
          <Route path='/my-portfolio/abouts' component={Abouts} />
          <Route path='/my-portfolio/skills' component={Skills} />
          <Route path='/my-portfolio/works' component={Works} />

        </BrowserRouter>

      </div>
    );
  }
}

