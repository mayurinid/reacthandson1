import  React, {useState } from "react";
const ClassComponent=()=>{
    const [show2,setshow2]=useState(false);
    const showhide1=()=>{
        if(show2===true){
            setshow2(false)
        }else{setshow2(true)}
    }
    return(
    <div>
        <div className="App2">
        <button className="btn1" onClick={showhide1}>To See Styling in Class Component</button>
        </div>
        {show2 && (<div className="CC">
        <h2>This is Created Using Class Component </h2>
        <p>This is Done Using External CSS</p>
        <p style={{color:"blue"}}>This is Done Using Inline CSS</p>
        </div>)}
        </div>
    )
    }

export default ClassComponent;