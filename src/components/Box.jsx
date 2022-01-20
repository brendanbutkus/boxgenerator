import React from 'react';
// why do we use span here??

const Box = (props) => {
    const {boxes} = props;

    return(
        <div className="parent">
            {
                boxes.map((box, i) => {
                    return (
                    <div className="box" key={i} style={{backgroundColor: box.color}}/>
                    )
                })
    
            }
        </div>
    
    

    )
}

export default Box;