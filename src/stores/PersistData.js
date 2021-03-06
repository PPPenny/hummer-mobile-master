/**
 * 用于将需要的数据保存到本地存储如，LocalStorage
 */
import {reaction} from 'mobx';

class PersistData{
    /**
     * 设置对某个Store下的某个字段进行监听，如果该字段有变化就存储到LocalStorage
     * @param {*需要存储的字段名称} name 
     * @param {*字段所在的Store的名称} store 
     */
    set(name,store){
        reaction(
            ()=>store[name],
            data=>{
                if(typeof data==="undefined"){
                    const type=typeof data;
                   data=  type ==='string' ||type==='number' ?data:JSON.stringify(data);
                    window.localStorage.setItem(store.constructor.name+"_"+ name,data);
                }else{
                    window.localStorage.removeItem(store.constructor.name+"_"+ name,data);
                } 
            }
        )

    }
    /**
     * 
     * @param {*字段名} name 
     * @param {*Store名} store 
     */
    get(name,store){
        return window.localStorage.getItem(store.constructor.name+"_"+ name);
    }
}
export default  PersistData;