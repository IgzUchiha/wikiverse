import React from "react";

export function SinglePage ({data, setData}){
    return (
        <>
         <h3>{data.title}</h3>
         {/* <h3>{data.author}</h3> */}
         <h3>{data.content}</h3>
        </>
    )
}