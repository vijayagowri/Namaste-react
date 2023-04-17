import { useState} from 'react';
Profile =()=>{
    [count, setCount] = useState(0);
    [count1, setCount1] = useState(1);
return(<>
    <h1>Profile functional component</h1>
    <div>
        count:  {count}
     
    </div>
    <div>  count1:  {count1}</div>
    <button onClick={()=>{
        setCount(++count);
        setCount1(7)
    }}>Count</button>
    </>
)
}
export default Profile