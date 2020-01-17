export const serialise = (e)=>{
    const formData = new FormData(e);
    let jsonObject = {};
    for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
    }
    return jsonObject;
}
export const resolveUserDesig=(e)=>{
    return e==='adminsignup'||e==='adminlogin'?'Admin':'User'
}