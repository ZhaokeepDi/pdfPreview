import React from 'react';
function FirstComponent(props){
    return(
        <div>
            这是第二个组件
            <h1>
                 这是传递过来的参数{props.name}
                 这是传递过来的参数{props.obj.ss}
            </h1>
        </div>
       
    )
}
export default FirstComponent