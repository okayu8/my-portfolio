import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Abouts extends Component {
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
                                <a className="sub-title">Abouts</a>
                            </h2>
                        </div>
                        <div className="content">
                            <p>
                                {this.props.lang === "jp" ? jp.text1 : en.text1}
                            </p>
                            <p>
                                {this.props.lang === "jp" ? jp.text2 : en.text2}
                            </p>
                            <p>
                                {this.props.lang === "jp" ? jp.text3 : en.text3}
                            </p>
                            <p>
                                {this.props.lang === "jp" ? jp.text4 : en.text4}
                            </p>
                            <p>
                                {this.props.lang === "jp" ? jp.text5 : en.text5}
                            </p>
                            <p>
                                {this.props.lang === "jp" ? jp.text6 : en.text6}
                            </p>
                            <div className="sub-panel">
                                <h3 className="content-sub-title">Contact</h3>
                                <p style={{ marginBottom: 12 }}>Mail : hitugaya12@gmail.com</p>
                                <a style={{ color: "rgb(255, 115, 0)", fontSize: 20, }}
                                    target="_blank"
                                    href="https://github.com/okayu8">GitHub</a>
                            </div>
                        </div>

                    </div>
                }
            </Motion>
        )
    }
}

const jp = {
    text1: "北海道出身のWebエンジニアです。",
    text2: "PHP(Laravel, Phalcon)やC#(ASP.net Core)でのバックエンド開発を中心に、React.jsでのフロントエンド開発やブロックチェーン(トークン)の開発なども行なっております。",
    text3: "趣味でGo, Pythonなどの言語を勉強しています。",
    text4: "「開発効率はチームメンバーのモチベーション次第」と考えており、メンバーと気持ちよくコミュニケーションを取る事を大切にしています。",
    text5: "できるだけ見やすく、理解のしやすいコードを書く事を心がけています。",
    text6: "好きなエディターはVisualStudioCode, Vimです。",
}

const en = {
    text1: "I am a web engineer from Hokkaido, Japan.",
    text2: "I focus on backend development with PHP (Laravel, Phalcon) and C#(ASP.net Core), and also do frontend development in React.js and development of BlockChain (token).",
    text3: "My hobbies are studying languages such as Go and Python.",
    text4: "I believe that \"development efficiency depends on the motivation of team members\" and I believe it is important to communicate with members comfortably.",
    text5: "I also try to write code that is as easy to read and understand as possible.",
    text6: "My favorite editor is VisualStudioCode, Vim.",
}