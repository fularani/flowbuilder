import React from 'react';

function Video(props) {
    return (
      <div>  
        <a href={props.item.url} 
        rel="noopener noreferrer" 
        target="_blank">{props.item.title}</a>
        - Author: {props.item.author.name}  
      </div>
    );
}

export default Video;
