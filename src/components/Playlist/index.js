import React from 'react';
import StyledWrapper from './index.style'
import Header from './Header';
import Items from './ItemsList';
import Toolbar from '../Toolbar';

const Wrapper = ({videos, active, nightMode, nightModeCallback}) => {
    return(
        <StyledWrapper>
            <Toolbar 
                nightModeCallback = {nightModeCallback}
                nightMode = {nightMode}
            />
            <Header active={active} total={videos.length} nightMode={nightMode} />
            <Items  videos={videos} active={active} />
        </StyledWrapper>
    )
}

export default Wrapper