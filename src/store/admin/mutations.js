import Vue from  'vue';
export const setAdmin = (state,data)=>{
    // eslint-disable-next-line no-console
    console.log(data)
    if(data.token)
    localStorage.setItem('token',data.token)
    return state.admin=data

}
export const setIssues = (state,data)=>{
    return state.issues=data
}
export const updateIssue = (state,data)=>{
    //a pain but ill have to go o(n2)
    for(let i =0;i<state.issues.length;i++){
        const issues = state.issues[i].issues
        for(let j =0; j< issues.length;j++){
            if(issues[j]._id===data._id){
                Vue.set(state.issues[i].issues,j,data)
            }
        }
    }
}