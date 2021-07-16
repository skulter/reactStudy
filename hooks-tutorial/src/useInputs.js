import { useReducer } from "react";

function reducer(state, action){
    console.log(action.name +' : '+ action.value );
    return {
        ...state,
        [action.name] : action.value
    };
}
export default function useInputs(initialForm){
    
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onchange = e =>{
        dispatch(e.target);
    };
    return [state, onchange];
}