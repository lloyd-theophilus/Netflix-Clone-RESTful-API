import  './listitem.scss'
import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from '@material-ui/icons';
import React, { useState } from "react";

export default function ListItem(index) {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = 'https://www.youtube.com/watch?v=_b0OtCchjTw'
    return (
        <div>
            <div className="listItem" 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>

            <img src="/Capua.jpg" alt=""/>

            {isHovered &&(
                <> 
                 <video src = {trailer} autoPlay={true} loop/>
       
            <div className="iteminfo">
                <div className="icons">
                    <PlayArrow className='icon'/>
                    <Add  className='icon'/>
                    <ThumbUpAltOutlined  className='icon'/>
                    <ThumbDownOutlined  className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 24 mins</span>
                    <span className='limit'>+16</span> 
                    <span>2021</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum magni alias animi commodi. Incidunt?
                </div>
                <div className="genre">Action</div>
            </div></>
             )}
            </div>
        </div>
    )
}
