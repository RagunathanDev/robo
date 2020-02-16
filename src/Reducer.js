import {
    CHANGE,
    ROBOT_FAILED,
    ROBOT_SUCCESS,
    ROBOT_REQUEST
} from './Constant';

const initialStateSearch={
    searchfield :''
}

export const serachRobots = (state=initialStateSearch ,action={} )=>{
  switch(action.type){
    case (CHANGE) :
        return(Object.assign({},state,{searchfield: action.payload}));
     default:
         return state;   
  }
        
}

const initialStateRobot={
    robo:[],
    isPending:false,
    error:''
  

}

export const requestRobot=(state=initialStateRobot ,action={})=>{
    switch(action.type){
        case (ROBOT_REQUEST):
            return (Object.assign({},state, {isPending:true}));
        case (ROBOT_SUCCESS):
            return (Object.assign({},state,{robo :action.payload ,isPending:false}));
        case (ROBOT_FAILED):
            return(Object.assign({},state,{error:action.payload,isPending:false}));
        default:
            return state;
    }
}