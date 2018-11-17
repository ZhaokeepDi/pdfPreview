import React from "react";
import "./css/login.css"
import com from "./js/common.js"
import axios from "axios"
let url={
    login:com.head+"login",
    regest:com.head+"regist"
}
let style={
    box:{width:'100%',height:'100%',background:'plum'} 
}
export default class Login extends React.Component{
    constructor(props){
        super(props)
    }
   render(){
       return(
        <div style={style.box}>
            <button>返回</button>
            账号：<input type="text" id="username" placeholder="请输入账号"></input>
            密码：<input type="password" id="password" placeholder="请输入16个字符内的密码"></input>
            <button onClick={this.login.bind(this)}>登录</button>
        </div>
       )
   } 
   login(){
    let username=com.get("#username").value
    let password=com.get("#password").value
    axios({
        method: 'post',
        url: url.login,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        },
        params:{username,password},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   componentWillMount(){
       console.log(this.props)
       console.log(this.props.location.id)
       console.log(this.props.match.params.id)
   }
}