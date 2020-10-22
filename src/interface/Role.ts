/*
 * @Author: your name
 * @Date: 2020-10-22 19:42:08
 * @LastEditTime: 2020-10-22 20:07:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-ts-project\src\interface\Role.ts
 */
export interface IRoleListItem {
    _id:string
    name:string
    create_time:string
    auth_time:string
    auth_name:string
    menus:string[]
}