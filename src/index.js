import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import store from './store'
import * as serviceWorker from './serviceWorker';
// import './style/base.scss'


const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(Route)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
