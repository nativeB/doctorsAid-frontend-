/* eslint-disable no-unused-vars */
/* eslint-disable no-console */	
	
import Vue from 'vue';
export const login = ({ state, dispatch,commit},data)=>{
  return Vue.axios.post('/admin/login',data)
  .then(res=>{
    const {data} = res;
    if(data.success){
    commit('setAdmin',res.data.admin)
  return data  
  }else return false
  })
  .catch(e=>{
    console.log(e);
  })
}
export const signup = ({ state, dispatch,commit},data)=>{
  return Vue.axios.post('/admin/signup',data)
  .then(res=>{
    const {data}=res;
    if(data.success){
        return data
    }else{
        return false
    }
})
}