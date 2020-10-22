/*
 * @Author: your name
 * @Date: 2020-10-22 20:02:45
 * @LastEditTime: 2020-10-22 20:24:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-project\src\redux\reducer.ts
 */
import { combineReducers, Reducer } from 'redux'
import { getUser } from '../utils/auth'
import { SET_HEAD_TITLE, GET_USER_INFO, REMOVE_USER } from './action-types'
import { ActionType } from './action'
import { LoginUser } from '../utils/auth'

const headTitle:Reducer<string,ActionType<string>> = (state='',action) => {
    switch (action.type) {
        case SET_HEAD_TITLE:
          return action.data
        default:
          return state    
    }
}

const initUser = getUser()
const user:Reducer<LoginUser,ActionType<typeof initUser>> = (
    state = initUser,
    action
) => {
    switch (action.type) {
        case GET_USER_INFO:
          return action.data
        case REMOVE_USER:
          return action.data
        default:
          return state
      }
}

const rootReducer = combineReducers({
    headTitle,
    user
})

export default rootReducer

//获得rootReducer的返回类型
export type RootState = ReturnType<typeof rootReducer>