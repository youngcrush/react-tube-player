import React from 'react';
import StyledToolbar from './index.style'
import NightMode from './NightMode';


const Toolbar = ({nightModeCallback, nightMode}) => {
    return(
        <StyledToolbar id='video-toolbar'>
            <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
        </StyledToolbar>
    )
}
export default Toolbar;