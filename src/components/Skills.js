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
import mysqlicon from '../images/svgs/icons8-mysql-logo-filled.svg';
// import sqlservericon from '../images/svgs/icons8-sql-240.svg';
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
                                <img className="skill-icon" src={azureicon} width="50" height="50"></img>
                                <img src={azureicon} width="50" height="50"></img>
                                <img src={azureicon} width="50" height="50"></img>
                                <img src={azureicon} width="50" height="50"></img>
                                <img src={azureicon} width="50" height="50"></img>
                                <img src={azureicon} width="50" height="50"></img>
                                <img src={azureicon} width="50" height="50"></img>
                            </div>
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}