import React from 'react'
import withLink from '../hoc/withLink'
import StyleditemsList from './ItemsList.style'
import Item from './Item'


const ItemWithLink = withLink(Item)
const Items = ({videos, active}) => {
    return(
        <StyleditemsList>
            {videos.map(video=>(
                <ItemWithLink 
                    key={video.id} 
                    video={video} 
                    active={video.id === active.id ? true: false}
                    played={video.played}/>
            ))}
        </StyleditemsList>
    )
}

export default Items