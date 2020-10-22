/*
 * @Author: your name
 * @Date: 2020-10-22 20:29:31
 * @LastEditTime: 2020-10-22 20:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-project\src\redux\store.ts
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'

export default createStore(
    reducers,
    applyMiddleware(thunk)
)
