import React from 'react';
import Taiwan from './../images/Taiwan.jpg';
import styles from './MainSection.module.css';

export default function MainSection() {
    return (
        <div className={ styles.container }>
            <img src={Taiwan} alt="Taiwan"/>
            <div className={ styles.header }><h2>Taiwanissa tapahtuu</h2></div>
            <div className={ styles.footer }><p>Ulkomaat 19:11</p></div>
        </div>
    )
}