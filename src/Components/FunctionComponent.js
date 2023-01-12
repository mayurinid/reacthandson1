import  React, {useState } from "react";
function FunctionComponent(){
    const [show,setshow]=useState(false);
    const showhide=()=>{
        if(show===true){
            setshow(false)
        }else{setshow(true)}
    }
    return(
        <div>
        <div className="App1">
        <button className="btn" onClick={showhide}>To See Styling in Function Component</button>
        </div>
        {show && (<div className="FC">
        <h2>This is Created Using Functional Component</h2>
        <p>This is Done Using External CSS</p>
        <p style={{color:"blue"}}>This is Done Using Inline CSS</p>
        </div>)}
        </div>
    )
}

export default FunctionComponent;