export const getPatient = (state)=>{
    return state.patient;
}
export const getIssues = (state)=>{
    return state.issues;
}
export const getIssuesByStatus = (state)=>(status)=>{
    return state.issues.filter(issue=>{return status===issue.status})
}