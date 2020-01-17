export const setPatient = (state,data)=>{
    if(data.token)
    localStorage.setItem('token',data.token)
    return state.patient=data

}
export const setIssues = (state,data)=>{
    return state.issues=data
}