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
        this.state = {
            open: false,
            lang: "jp"
        };
    };

    changeLanguage() {
        this.setState({ lang: this.state.lang === "jp" ? "en" : "jp" });
    };

    render() {
        const lang = this.state.lang === "jp" ? "JP" : "EN"

        return (
            <div className="App">
                <BrowserRouter>
                    <header className="App-header">
                        <div className="change-language">
                            <a onClick={() => this.changeLanguage()} >
                                {lang}
                            </a>
                        </div>
                        <nav className="nav-bar">
                            <ul>
                                <li>
                                    <Link to='/my-portfolio/' className="nav-link">
                                        TOP
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-portfolio/abouts' className="nav-link">
                                        ABOUTS
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-portfolio/skills' className="nav-link">
                                        SKILLS
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-portfolio/works' className="nav-link">
                                        WORKS
                                    </Link>
                                </li>
                            </ul>

                        </nav>
                    </header>

                    <Route exact path='/my-portfolio' component={Top} />
                    <Route path='/my-portfolio/abouts' render={() => <Abouts lang={this.state.lang} />} />
                    <Route path='/my-portfolio/skills' component={Skills} />
                    <Route path='/my-portfolio/works' component={Works} />

                </BrowserRouter>

            </div>
        );
    }
}

