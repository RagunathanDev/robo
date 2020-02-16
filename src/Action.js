import {
    CHANGE,
    ROBOT_FAILED,
    ROBOT_SUCCESS,
    ROBOT_REQUEST
} from './Constant';
export const setSerachfield = (text)=>({
    type : CHANGE,
    payload : text
})

export const requestRobots = ()=>(dispatch)=>{
    dispatch({type:ROBOT_REQUEST});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data =>dispatch( { type: ROBOT_SUCCESS , payload: data } ) )
    .catch(error =>dispatch( { type: ROBOT_FAILED, payload: error } ))
    
}