import Vue from 'vue'
export const setPatient = (state,data)=>{
    if(data.token)
    localStorage.setItem('token',data.token)
    return state.patient=data

}
export const setIssues = (state,data)=>{
    return state.issues=data
}
export const setIssue = (state,data)=>{
    return state.issues.push(data)
}
export const updateIssue = (state,data)=>{
    const index = state.issues.findIndex(issue=>{return issue._id===data._id})
    if(index!==-1){
        Vue.set(state.issues,index,data)
    }
    return 
}