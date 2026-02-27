import {useState}from 'react'
 
export function useCounter(){
    const [ value , setvalue] = useState(0);
    function increasecount(){
        setvalue((c:any)=>c+1)
    }
    return{increasecount,value};}