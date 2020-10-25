/*
 * @Author: your name
 * @Date: 2020-10-25 22:04:04
 * @LastEditTime: 2020-10-25 22:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-project\src\config\menuList.ts
 * 
 */

 export interface menuItem{
     key:string,
     title:string
 }


export const menuList:menuItem[] = [
    {
        key:'/layout/home',
        title:'首页'
    },
    {
        key:'/layout/mine',
        title:'我的'
    },
    {
        key:'',
        title:'未开发'
    },
    {
        key:'',
        title:'会员中心'
    }
]