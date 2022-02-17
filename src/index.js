import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Reg from './Reg'
import { createStore } from 'redux'
import allReducers from './reducers/'
import { Provider } from 'react-redux'
 
const store = createStore(allReducers)

ReactDOM.render(
  <Router>
    <div>
      <Provider store={store}>
        <Routes>
          <Route exact path='/' element={<App/>} />
          <Route path='register' element={<Reg/>}/>
        </Routes>
      </Provider>
    </div>
  </Router>,
  document.getElementById('root')
);

