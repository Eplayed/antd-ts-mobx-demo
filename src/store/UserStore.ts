/*
 * @Author: zyj
 * @Date: 2020-11-26 14:20:22
 * @LastEditors: zyj
 * @LastEditTime: 2020-11-26 14:54:42
 * @Description: file content
 * @FilePath: /antd-ts-mobx-demo/src/store/UserStore.ts
 */
import { action, observable } from 'mobx';
export default class UserStore {
    @observable public loading: boolean = false;
    @observable public loginSuccess: boolean = false;

    //登陆
    @action
    public loginAction() {
        this.loading = true;
        setTimeout(() => {
            this.loginSuccess = true;
            this.loading = false;
            sessionStorage.setItem('token', 'logingedddd');
        }, 1000);
    }

    //退出
    @action
    public loginOutAction() {
        this.loginSuccess = false;
        sessionStorage.setItem('token', '');
    }
}
