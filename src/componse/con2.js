import React from 'react';
function FirstComponent(props){
    return(
        <div>
            
            <h1>
            这是第二个组件
            </h1>
            {/* <button onClick={props.toChildrenNews.bind(null,"我是参数")}>调用父组件的函数</button> */}
        </div>
    )
}
export default FirstComponent