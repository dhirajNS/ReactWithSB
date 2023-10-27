import { act } from "react-dom/test-utils";

const inititalState=0;
const changeTheNumber=(state=inititalState,action)=>{
    switch (action.type){
        case "INCREMENT":return state+1;
        case "DECREMENT":return state-1;
        default: return state;
    }
}

export default changeTheNumber;