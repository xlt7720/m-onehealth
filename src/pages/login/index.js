import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as user from '../../store/user/action-type';
import * as api from '../../api/index';
import './index.css'

class Login extends PureComponent {
	constructor(props){
    super(props);
    this.state = {
			loginForm: {}
	  }
	  const { loginForm } = this.props;
	  this.state.loginForm = loginForm;
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
	

  handleChangeName(e){  	
		const loginForm = {
			username: e.target.value,
			password: this.state.loginForm.password
		}
		this.setState({ loginForm: loginForm });
	}

	handleChangePassword(e){
		const loginForm = {
			username: this.state.loginForm.username,
			password: e.target.value
		}
		this.setState({ loginForm: loginForm });
	}

	render() {		
		return (		
			<div>
			  <table style={{border: '0'}}>
	        <tbody><tr>
	            <td>
	              <div id="login">
	                <header id="header">
	                  <p style={{fontSize: '24px', color: '#53B467'}}>活动管理系统</p>
	                </header>
	                <section>
	                   <div className="login">
	                      <form ref="loginForm" style={{width: '60px'}}>
		                      <label>
												    账号:
												    <input type="text" value={this.state.loginForm.username} onChange={this.handleChangeName} placeholder="请输入账号"/>
												  </label>
												  <label>
												    密码:
												    <input type="password" value={this.state.loginForm.password} onChange={this.handleChangePassword} placeholder="请输入账号"/>
												  </label>
	                      </form>
	                      <div className="login"><button onClick={this.props.submitLoginFn.bind(this)}>登录</button></div>
	                  </div>
	              </section>
	           </div>
	          </td>
	        </tr></tbody>
	      </table>
	    </div>
    )
	}	
}

const mapState = (state) => ({
	loginForm: state.userInfo.loginInfo
});

const mapDispatch = (dispatch) => ({
	submitLoginFn(){
		let isValidate, alertText
    if (!this.state.loginForm.username) {
      alertText = '请输入用户名'
      isValidate = true
    } else if (!this.state.loginForm.password){
      alertText = '请输入密码'
      isValidate = true
    }
    if (isValidate) {
      // this.setState({ alertText })
      return
    }
    console.log(api)
   //  api.default.all.login(this.state.loginForm).then(res => {
	  //   if (res.data.status == 200) {
	  //   	this.props.history.push('/home')
	  //   } else {
	  //   }
	  // }).catch(err => {});
    // let res = await API.accountLogin(this.state.loginForm)
    // if (res.tip) {
    //   dispatch(user.saveUserInfo(this.state.loginForm))
    // 	this.props.history.push('/home')
    // }		
	}
});

export default connect(mapState, mapDispatch)(Login);