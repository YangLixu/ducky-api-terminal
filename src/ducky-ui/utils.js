/*
 * @Author: Ducky
 * @Date: 2020-05-28 21:45:41
 * @LastEditTime: 2020-05-31 23:03:32
 * @LastEditors: Ducky
 * @Description: 
 * @FilePath: /ducky-api-terminal/src/ducky-ui/utils.js
 * @
 */ 
import Vue from 'vue'
import lodash from 'lodash'
const utils={
    /**
     * 
     * @param {Object} obj object
     * @param {String} name key name
     * @param {Object} val value
     */
    setProperty(obj,name,val){
        Vue.set(obj,name,val)
    },
    /**
     * 
     * @param {Array} objArr a array of object that contains `obj`,`name`,`val` properties
     */
    setProperties(objArr){
        if (objArr && Array.isArray(objArr)) {
            objArr.forEach(item=>{
                Vue.set(item.obj,item.name,item.val)
            })
        }
    },
    deepClone(obj){
        return lodash.cloneDeep(obj)
    }
}

export default utils
