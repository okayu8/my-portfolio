import React, { Component } from 'react';
import './App.css';
import { Motion, spring } from 'react-motion';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Top from './components/Top'
import Abouts from './components/Abouts'
import Skills from './components/Skills'
import Works from './components/Works'
import Burger from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/dist/styles.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            lang: "jp",
        };
    };

    changeLanguage() {
        this.setState({ lang: this.state.lang === "jp" ? "en" : "jp" });
    };

    pushMenu() {
        this.setState({ open: this.state.open === true ? false : true })
    }

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
                        <Burger className="nav-mobile" isOpen={this.state.open} onClick={() => { this.pushMenu() }} />
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
                    <Motion defaultStyle={{ x: -1000 }} style={{ x: spring(this.state.open ? 0 : -1000, { stiffness: 80, damping: 17 }) }}>
                        {({ x }) =>
                            <nav className="mobile-menu" style={{
                                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                transform: `translate3d(${x}px, 0, 0)`,
                                border: 0,
                            }}>
                                <ul>
                                    <li>
                                        <Link to='/my-portfolio/' className="nav-link" onClick={() => { this.pushMenu() }}>
                                            TOP
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to='/my-portfolio/abouts' className="nav-link" onClick={() => { this.pushMenu() }}>
                                            ABOUTS
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to='/my-portfolio/skills' className="nav-link" onClick={() => { this.pushMenu() }}>
                                            SKILLS
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to='/my-portfolio/works' className="nav-link" onClick={() => { this.pushMenu() }}>
                                            WORKS
                                            </Link>
                                    </li>
                                </ul>
                            </nav>
                        }
                    </Motion>



                    <Route exact path='/my-portfolio' component={Top} />
                    <Route path='/my-portfolio/abouts' render={() => <Abouts lang={this.state.lang} />} />
                    <Route path='/my-portfolio/skills' component={Skills} />
                    <Route path='/my-portfolio/works' component={Works} />

                </BrowserRouter>


            </div>
        );
    }
}

