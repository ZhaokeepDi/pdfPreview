import React, { Component } from 'react';
import './App.css';
import asyncComponent from './componse/js/bundle';
import {
  Link, Route,Switch
} from "react-router-dom"
let obj={
  oo:1,
  ss:23
}
let styles={
  heightLigh:{color:"red",background:"white"}
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Link to="/index/login/hhhhh" style={styles.heightLigh}>登录</Link>
      <Link to="/index/com" style={styles.heightLigh}>第二组件</Link>      
      <a href="/index/login/:id">hhhhhhhhhhhhh</a>      
      {/* <Redirect from="/index" to="/index/com/:hhh" />网站指向重置 */}
      {/* <Com name="jjjjj" obj={obj} toChildrenNews={this.toChildrenNews}></Com> */}
      <Switch>{/*规定其中的路由只显示一个*/}
        <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/>{/*默认显示*/}
        <Route exact path="/index/com" component={asyncComponent(() => import("./componse/con2.js"))}/>
        <Route exact path="/index/login/:id" component={asyncComponent(()=>import("./componse/login.js"))}/>
      </Switch>
      </div>
    );
  }
  componentWillMount(){
    // this.props.history.push({pathname:"/login",id:8888})
    // this.props.history.push("/login/这是通配符传参")
  }
  toChildrenNews(news){
    alert(news)
  }
}
export default App;
