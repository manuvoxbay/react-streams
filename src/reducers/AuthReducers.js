const DEFAULT = {
    signIn:null
}
export default (state = DEFAULT, action) => {
    switch (action.type)
    {
        case "SIGN_IN":
        return {...state,signIn:true}
        case "SIGN_OUT":
        return {...state,signIn:false}
        default:
        return state;
    }
}