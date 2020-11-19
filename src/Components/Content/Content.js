import React from 'react';
import Styles from './Content.module.scss'
import Mid from './mid/Mid';
import Bottom from './bottom/Bottom';
import Top from './top/Top';

function Content(props) {
    return (
        <div className={Styles.content}>
            <Top />
            <Mid />
            <Bottom />
        </div>

    );
}

export default Content;