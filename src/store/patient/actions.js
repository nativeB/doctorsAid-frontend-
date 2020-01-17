/* eslint-disable no-unused-vars */
/* eslint-disable no-console */	
	
import Vue from 'vue';
export const login = ({ state, dispatch,commit},data)=>{
  return Vue.axios.post('/patient/login',data)
  .then(res=>{
    const {data} = res;
    if(data.success){
    commit('setPatient',res.data.admin)

return data    
}else return false
  })
  .catch(e=>{
    console.log(e);
  })
}
export const signup = ({ state, dispatch,commit},data)=>{
  return Vue.axios.post('/patient/signup',data)
        .then(res=>{
            const {data}=res;
            if(data.success){
                return data
            }else{
                return false
            }
        })
}
export const getIssues = ({ state, dispatch,commit},data)=>{
  return Vue.axios.post('/patient/signup',data)
        .then(res=>{
            const {data}=res;
            if(data.success){
                commit('setIssues',data)
                return data
            }else{
                return false
            }
        })
}
export const getProfile = ({ state, dispatch,commit})=>{
  return Vue.axios.post('/patient')
        .then(res=>{
            const {data}=res;
            if(data.success){
                commit('setPatient',data)
                return data
            }else{
                return false
            }
        })
}
export const createIssue = ({ state, dispatch,commit},data)=>{
  return Vue.axios.post('/patient/signup',data)
        .then(res=>{
            const {data}=res;
            if(data.success){
                return data
            }else{
                return false
            }
        })
}