import * as user from './action-type';
import { fromJS } from 'immutable';
let defaultState = {
  menus: [{
    ID: 1,
    Name: '绿瘦慈善公益H5活动',
    componentName: 'activity',
    Children: [{
      ID: 11,
      Name: '活动统计',
      componentName: '/main/activityCount'
    }, {
      ID: 22,
      Name: '活动说明',
      componentName: '/main/activityDesc'
    }
    ]
  }],
  loginInfo: {
    username: '123',
    password: ''
  }
}

// 用户消息
export const userInfo = (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SAVE_USERINFO:
      localStorage.setItem("login_loginInfo", JSON.stringify(action.loginInfo));
      return state.merge({
        loginInfo: fromJS(action.loginInfo)
      });
    case user.RESET_USERINFO:
      localStorage.removeItem("login_loginInfo");
      window.location.href = "/";
      return state.merge({
        loginInfo: {
            username: '',
            password: ''
          }
      });
    default:
      return state
  }
}