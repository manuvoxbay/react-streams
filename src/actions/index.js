
import api_config from '../api_config';
import history from '../history';

export const signIn = (user_id) =>
{
    return {type:"SIGN_IN",payload:user_id}
}

export const signOut = () =>
{
    return {type:"SIGN_OUT"}
}

export const StreamLister = () =>async dispatch =>
{
    const response = await api_config('/stream/list');
    dispatch({type:"LIST_STREAMS",payload:response.data});
}
export const StreamAdd = (input) => async (dispatch,getState) =>
{
    let userId = getState().AuthReducers.user_id;
    const response = await api_config.post('stream/create',{...input,userId});
    dispatch({type:"ADD_STREAM",payload:response.data});
    history.push('/');
}

export const fetchStream = (id) => async dispatch =>
{
    const response = await api_config.get(`/stream/${id}`)
    dispatch({type:"FETCH_STREAM",payload:response.data});
}

export const updateStream = (formValues, streamId) => async dispatch =>
{
    const response = await api_config.patch(`/stream/update/${streamId}`,formValues);
    // console.log(response.data);
    dispatch({type:"UPDATE_STREAM",payload:response.data})
    history.push('/');
}

export const deleteStream = (id) => async dispatch =>
{
    await api_config.delete(`/stream/delete/${id}`);
    dispatch({type:"DELETE_STREAM",payload:id});
    history.push('/');
}