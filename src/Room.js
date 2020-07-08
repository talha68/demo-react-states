import React,{useState} from 'react';
import './Room.css';


function Room() {
    let [isLit,setLit] = useState(false);
    let [temprature,increasedecreasetemp]=useState(72)
    // function updateLit(){
    //     console.log("Button Clicked");
    //     setLit(!isLit);
    
    // }
    // const incrementAge= function(){
    //     console.log(" IncrementAge Button Clicked");
    //     increaseAge(age++);
    
    // }

    // const incrementAge= ()=>{
    //     console.log(" incrementAge Button Clicked");
    //     increaseAge(age++);
    
    // }
    return (
      <div className={`room ${isLit?"lit":"dark"}`}>
        This Room is : {isLit? "lit" : "dark"}
        <button onClick={()=>{setLit(isLit?isLit:!isLit)}}>ON</button>
        <button onClick={()=>{setLit(isLit?!isLit:isLit)}}>OFF</button>
        <br/>
        The Temprature is :{temprature}
        <button onClick={()=>{
            console.log("Increase Age button clicket")
            increasedecreasetemp(++temprature)
        }}>+</button>
        <button onClick={()=>{
            console.log("Increase Age button clicket")
            increasedecreasetemp(--temprature)
        }}>-</button>
        
      </div>
    );
  }

  export default Room;