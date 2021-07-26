import React from "react";
const RenderPropSample = ({children}) =>{
    return <div>결과 : { children(5)}</div>;
};

export default RenderPropSample;
