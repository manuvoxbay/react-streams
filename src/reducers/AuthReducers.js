const DEFAULT = {
    signIn:null,
    user_id:null
}
export default (state = DEFAULT, action) => {
    switch (action.type)
    {
        case "SIGN_IN":
            return {...state,signIn:true,user_id:action.payload}
        case "SIGN_OUT":
            return {...state,signIn:false,user_id:null}
        default:
        return state;
    }
}