export const getAdmin = (state)=>{
    return state.admin;
}
export const getIssues = (state)=>{
    return state.issues;
}

export const getIssuesStatsByStatus = (state)=>(status)=>{
    // eslint-disable-next-line no-console

    return state.issues
                    .map(patient=> patient.issues)
                    .map(issues => issues.filter(issue=> { 
                        if(status !=='all')
                        return issue.status===status
                        else
                        return issue.status
                    }))
                    .reduce((agg,issue)=>{
                       
                        return issue.length+agg
                    },0);
}