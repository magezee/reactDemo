// index.js
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

console.log(store.getState())
render(
        
    <Provider store={store}>
        <Router>
            {/* component，path为固定属性不可更改,即路由为'/'时渲染App组件，和不写明path效果一样 */} 
            <Route component={App} path='/'/>  
        </Router>
    </Provider>,   
    
    document.querySelector('#root')
)