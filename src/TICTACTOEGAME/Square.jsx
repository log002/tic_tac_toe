import React from 'react';

const Sqaure = (props) => {
    return (
        <div 
        onClick={props.onClick} 
        style={{border:'1px solid', height:'120px', width:'100vw', display: 'flex', justifyContent: 'center', alignItems:'center'}}
        className="sqaure">
            <h5>{props.val}</h5>
        </div>
    );
};

export default Sqaure;