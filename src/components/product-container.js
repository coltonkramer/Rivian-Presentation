import React,{useState,useEffect} from 'react';


const Gear = () => {
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('../data/gear.json')
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.table(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
    return (
      <div >
       
      </div>
    );
}

// Step 3: Export your component
export default Gear;