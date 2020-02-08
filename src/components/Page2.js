import React from "react";

const Page2 = ({match,history}) =>
    <div>
        <h1>Page2 {match.params.message}</h1>
        <button onClick={() => {history.push("/page1")}}>
            Page 1
        </button>
    </div>


export default Page2