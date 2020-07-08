import React,{useState} from 'react';


function Room() {
    let [isLit,setLit] = useState(false);
    let [age,increaseAge]=useState(35)
    function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit);
    
    }
    // const incrementAge= function(){
    //     console.log(" IncrementAge Button Clicked");
    //     increaseAge(age++);
    
    // }

    // const incrementAge= ()=>{
    //     console.log(" incrementAge Button Clicked");
    //     increaseAge(age++);
    
    // }
    return (
      <div>
        This Room is : {isLit? "lit" : "dark"}
        <button onClick={updateLit}>Toogle light</button>

        <br/>
        The age is :{age}
        <button onClick={()=>{
            console.log("Increase Age button clicket")
            increaseAge(++age)
        }}>Increase Age</button>
        
      </div>
    );
  }

  export default Room;