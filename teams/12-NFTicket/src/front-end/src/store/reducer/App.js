import {setTokenKey,setUsernameKey,setBottomstatusKey,setShowmodalKey,setShowmodaltwoKey,setAccountokmodalKey} from "../Type";

const app = {
    token:"",
    username:"",
    bottomstatus:false,
    showmodal:false,
    showmodaltwo:false,
    showaccountok:false
}

//Reducer
const configReducer = function(state = app,action){
    console.log("reducerreducerreducerreducerreducer")
    console.log(action)
    switch(action.type){
        //token
        case setTokenKey:{
            return {
                ...state,
                token:action.value,
            }
        }
        //username
        case setUsernameKey:{
            return {
                ...state,
                username:action.value,
            }
        }
        //Bottomstatus
        case setBottomstatusKey:{
            return {
                ...state,
                bottomstatus:action.value,
            }
        }
        //Account Modal
        case setShowmodalKey:{
            return {
                ...state,
                showmodal:action.value,
            }
        }
        //Account Modal Two
        case setShowmodaltwoKey:{
            return {
                ...state,
                showmodaltwo:action.value,
            }
        }
        //Create Account OK
        case setAccountokmodalKey:{
            return {
                ...state,
                showaccountok:action.value,
            }
        }

        default:
            return state;
    }
}

export default configReducer;