import React from 'react';
import { StyledVideo, StyledVideoWrapper } from './Video.style';
import ReactPlayer from 'react-player';

const Video = ({autoplay, active, endCallback, progressCallback}) => {
    return(
        <StyledVideo>
            <StyledVideoWrapper>
                <ReactPlayer 
                    width="100%" 
                    height="100%" 
                    style={{position: "absolute", top: "0"}}
                    playing = {autoplay}
                    controls = {true}
                    url = {active.video}
                    onEnded={endCallback}
				    onProgress={progressCallback}
                />
            </StyledVideoWrapper>
        </StyledVideo>
    )
}

export default Video;