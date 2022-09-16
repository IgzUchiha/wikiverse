import React from "react";

export function SinglePage ({data, setData}){

    const day = new Date(data.createdAt).getUTCDate();
    const month = new Date(data.createdAt).getUTCMonth();
    const year = new Date(data.createdAt).getUTCFullYear();
    console.log(data)
    return (
        <>
         <h3>{data.title}</h3>
         <h3>{data.author.name}</h3>
         <h3>{data.content}</h3>
         <h3>{`${month + 1}/${day}/${year}`}</h3>
        <h3>{data.tags.map((tag, idx) => <div key={idx}>{tag.name}</div>)}</h3>
         

        </>
    )
}