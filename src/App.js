import React, { Component } from 'react';
import './App.css';
// import { spring, StaggeredMotion } from 'react-motion';
import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Demo />
          <h1>
            Yutaro Kataoka's<br />PORTFOLIO
          </h1>
          {/* <StaggeredMotion
            defaultStyles={[{ h: 0 }, { h: 0 }, { h: 0 }]}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? { h: spring(100) }
                : { h: spring(prevInterpolatedStyles[i - 1].h) }
            })}>
            {interpolatingStyles =>
              <div>
                {interpolatingStyles.map((style, i) =>
                  <div key={i} style={{ border: '1px solid', height: style.h }} />)
                }
              </div>
            }
          </StaggeredMotion> */}
        </header>
      </div>
    );
  }
}

export default App;
