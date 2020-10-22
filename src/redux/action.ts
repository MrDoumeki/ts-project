/*
 * @Author: your name
 * @Date: 2020-10-22 19:17:19
 * @LastEditTime: 2020-10-22 22:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-project\src\redux\action.ts
 */
import {Action,Dispatch} from 'redux'
import {SET_HEAD_TITLE,GET_USER_INFO,REMOVE_USER} from './action-types'
import { LoginUser } from './../utils/auth';


//ActionType为any类型，由string类型和any类型的数据组成
export type ActionType<T = any> = Action<string> & {data:T}

export function setHeadTitle(headTitle:string):ActionType<string> {
    return {
        type:SET_HEAD_TITLE,
        data:headTitle
    }
}

export function getUserInfo(user:LoginUser):ActionType<LoginUser> {
    return {
        type:GET_USER_INFO,
        data:user
    }
}

export function logout():ActionType<LoginUser> {
    // removeUser()
    return {
        type:REMOVE_USER,
        data:{} as LoginUser
    }
}



//登陆的异步action，cb接受回调
export function login(
    form:{username:string;password:string},
    cb:() => void
){
    //异步操作，需要中间件
    return async (dispatch:Dispatch) => {
        // const res = await reqLogin(form)
        // if(res) {
        //     const user = res.data
        //     setUser(user)
        //     dispatch(getUserInfo(user))
        // }else{
        //     cb && cb()
        // }
    }
}