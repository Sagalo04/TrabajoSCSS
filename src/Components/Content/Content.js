import React from 'react';
import Mid from './mid/Mid';
import Bottom from './bottom/Bottom';
import Top from './top/Top';

function Content(props) {
    return (
        <div>
            <Top />
            <Mid />
            <Bottom />
        </div>

    );
}

export default Content;