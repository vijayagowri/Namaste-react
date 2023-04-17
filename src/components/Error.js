import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    const { status, statusText } = err;
    
    return (
        <>
        <h1>Oops!</h1>
        <h2>Requested page does not exist</h2>
        </>
    )
}

export default Error;