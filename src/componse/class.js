import React from 'react'
 
let style={
  firstSty:{background:'red',color:'white',margin:'20px'}
}
export default class Clafirst extends React.Component{
    constructor(props){
        super(props)
        this.state={name:"balabala"}
    }
    render(){
        return(
            <div id="ssssss" onClick={this.handleBtnClick.bind(this,888,99)}>
            
               <h1 style={style.firstSty}>
                父组件传递的数据{this.props.name}
               </h1> 
               <h1>状态的组件名称{this.state.name}</h1>
               <h1>状态——年龄{this.state.yers}</h1>
               <button onClick={ this.handleBtnClick }>事件中this的处理</button>
            </div>
        )
    }
    componentWillMount(){
        this.setState({
            yers:50
        })
        alert("hhhhhhhhhh")
    }
    handleBtnClick(arg1, arg2) {
        alert(arg1,arg2)
        this.setState({
          msg: '点击事件修改state的值' + arg1 + arg2
        })
      }
      
}
