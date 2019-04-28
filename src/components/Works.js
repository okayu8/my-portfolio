import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import my_portfolio from '../images/my-portfolio.png';
import ramen from '../images/ramen.png';
import todo from '../images/todo.png';

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
                            <div className="content">
                                <div className="work-box" style={{ maxWidth: 800 }}>
                                    <a href="/my-portfolio/" target="_blank">
                                        <p style={{ fontWeight: "bold" }}>Yutaro Kataoka's PORTFOLIO</p>
                                        <img className="works-iamge" src={my_portfolio}></img>
                                    </a>
                                    <p>{this.props.lang === "jp" ? jp.text1 : en.text1}</p>
                                    <p>JaveSctipt / React.js / HTML / CSS / GitHub Pages</p>
                                    <p>Source Code&nbsp;:&nbsp;
                                    <a style={{ color: "rgb(255, 115, 0)" }}
                                            target="_blank"
                                            href="https://github.com/okayu8/my-portfolio">GitHub</a></p>
                                </div>
                                <div className="work-box" style={{ maxWidth: 800 }}>
                                    <a href="https://sapporo-ramen.herokuapp.com/" target="_blank">
                                        <p style={{ fontWeight: "bold" }}>Quick Todo</p>
                                        <img className="works-iamge" src={todo}></img>
                                    </a>
                                    <p>{this.props.lang === "jp" ? jp.text3 : en.text3}</p>
                                    <p>{this.props.lang === "jp" ? jp.text4 : en.text4}</p>
                                    <p>PHP / Laravel / JavaScript / React.js / HTML / CSS / BootStrap / MySQL / Heroku</p>
                                    <p>Source Code&nbsp;:&nbsp;
                                    <a style={{ color: "rgb(255, 115, 0)" }}
                                            target="_blank"
                                            href="https://laravel-react-example.herokuapp.com/">GitHub</a></p>
                                </div>
                                <div className="work-box" style={{ maxWidth: 800 }}>
                                    <a href="https://sapporo-ramen.herokuapp.com/" target="_blank">
                                        <p style={{ fontWeight: "bold" }}>Where is the 拉麺</p>
                                        <img className="works-iamge" src={ramen}></img>
                                    </a>
                                    <p>{this.props.lang === "jp" ? jp.text2 : en.text2}</p>
                                    <p>Python / Flask / HTML / BootStrap / Azure Custom Vision / Heroku</p>
                                    <p>Source Code&nbsp;:&nbsp;
                                    <a style={{ color: "rgb(255, 115, 0)" }}
                                            target="_blank"
                                            href="https://github.com/okayu8/ramen-sapporo">GitHub</a></p>
                                </div>
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
    text2: "札幌のラーメンの画像をアップロードするとどこのラーメン屋さんか当ててくれます。",
    text3: "SPAで作られたシンプルなTODOアプリです。",
    text4: "実装した機能：TODO作成機能、TODO編集機能、TODO削除機能、TODO完了機能、ログイン機能、日付ソート機能、検索機能、ページング機能",
}

const en = {
    text1: "My own portfolio site.",
    text2: "This app will guess which ramen shop if you upload images of ramen in Sapporo.",
    text3: "This is a simple TODO application made by SPA.",
    text4: "Features : create new, edit, delete, done, login user, sort by date, search, paging",
}