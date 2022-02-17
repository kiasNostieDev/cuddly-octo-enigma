import { combineReducers } from 'redux'
import loginreducer from './login'
import regreducer from './register'

const allReducers = combineReducers({
    log: loginreducer,
    reg: regreducer
})

export default allReducers