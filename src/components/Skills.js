import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
//programming
import phpicon from '../images/svgs/icons8-php-logo-filled.svg';
import csicon from '../images/svgs/icons8-c-sharp-logo-filled.svg';
import aspicon from '../images/svgs/prog-aspnet.svg';
import reacticon from '../images/svgs/icons8-react-native.svg';
import jsicon from '../images/svgs/icons8-javascript-filled.svg';
import pyicon from '../images/svgs/icons8-python-filled.svg';
import goicon from '../images/svgs/icons8-golang-filled.svg';
import javaicon from '../images/svgs/icons8-java.svg';
import htmlicon from '../images/svgs/html5-01.svg';
import cssicon from '../images/svgs/css3-01.svg';
//infrastracture
import azureicon from '../images/svgs/icons8-azure.svg';
import awsicon from '../images/svgs/icons8-amazon-web-services.svg';
import neoicon from '../images/svgs/icons8-neo-cryptocurrency-filled.svg';
import winservericon from '../images/svgs/icons8-windows8-filled.svg';
//tools
import giticon from '../images/svgs/icons8-git-filled.svg';
import dockericon from '../images/svgs/icons8-docker-filled.svg';
import slackicon from '../images/svgs/icons8-slack-new.svg';
import trelloicon from '../images/svgs/icons8-trello-filled.svg';
import webhookicon from '../images/svgs/icons8-webhook-filled.svg';
import discordicon from '../images/svgs/icons8-discord.svg';
//os
import macicon from '../images/svgs/os-apple-dark.svg';
import winicon from '../images/svgs/icons8-windows8-filled.svg';
import linuxicon from '../images/svgs/os-linux_1_.svg';

export default class Skills extends Component {
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
                                <a className="sub-title">Skills</a>
                            </h2>
                            <div className="content">
                                <div className="sub-panel">
                                    <h3 className="content-sub-title">Programming</h3>
                                    <div className="sub-content">
                                        <div className="box">
                                            <img className="skill-icon" src={phpicon} width="50" height="50"></img>
                                            <span className="skill-name">PHP</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={csicon} width="50" height="50"></img>
                                            <span className="skill-name">C#</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={aspicon} width="50" height="50"></img>
                                            <span className="skill-name">ASP.net</span>
                                            <span className="skill-name">Core</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={reacticon} width="50" height="50"></img>
                                            <span className="skill-name">React.js</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={jsicon} width="50" height="50"></img>
                                            <span className="skill-name">JavaScript</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={htmlicon} width="50" height="50"></img>
                                            <span className="skill-name">HTML5</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={cssicon} width="50" height="50"></img>
                                            <span className="skill-name">CSS3</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={goicon} width="50" height="50"></img>
                                            <span className="skill-name">golang</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={pyicon} width="50" height="50"></img>
                                            <span className="skill-name">Python3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-panel">
                                    <h3 className="content-sub-title">Infrastracture</h3>
                                    <div className="sub-content">
                                        <div className="box">
                                            <img className="skill-icon" src={azureicon} width="50" height="50"></img>
                                            <span className="skill-name">Azure</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={awsicon} width="50" height="50"></img>
                                            <span className="skill-name">AWS</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={winservericon} width="50" height="50"></img>
                                            <span className="skill-name">Windows</span>
                                            <span className="skill-name">Server</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={neoicon} width="50" height="50"></img>
                                            <span className="skill-name">NEO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-panel">
                                    <h3 className="content-sub-title">Tools</h3>
                                    <div className="sub-content">
                                        <div className="box">
                                            <img className="skill-icon" src={giticon} width="50" height="50"></img>
                                            <span className="skill-name">Git</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={dockericon} width="50" height="50"></img>
                                            <span className="skill-name">Docker</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={slackicon} width="50" height="50"></img>
                                            <span className="skill-name">Slack</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={trelloicon} width="50" height="50"></img>
                                            <span className="skill-name">Trello</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={webhookicon} width="50" height="50"></img>
                                            <span className="skill-name">webhook</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={discordicon} width="50" height="50"></img>
                                            <span className="skill-name">Discord</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-panel">
                                    <h3 className="content-sub-title">OS</h3>
                                    <div className="sub-content">
                                        <div className="box">
                                            <img className="skill-icon" src={macicon} width="50" height="50"></img>
                                            <span className="skill-name">Mac</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={winicon} width="50" height="50"></img>
                                            <span className="skill-name">Windows</span>
                                        </div>
                                        <div className="box">
                                            <img className="skill-icon" src={linuxicon} width="50" height="50"></img>
                                            <span className="skill-name">Linux</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}