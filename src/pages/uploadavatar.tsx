import { useRef, useState } from "react"
import axios from "axios"

export const  Uploadavatar = ()=>{
    const token = localStorage.getItem("Authorization")
    console.log("Authorization")
    const avatarref = useRef<HTMLInputElement>(null)
    const [error,seterror] = useState(" ")
    async function uploadavatar(){
const selectedfile = avatarref.current?.files?.[0]

if( selectedfile === undefined){
    return seterror("it is empty")
}
if (
     selectedfile.type === "image/webp" ||
            selectedfile.type === "image/heic" ||
            selectedfile.type === "image/gif"
){
    return seterror("this is not correct format ")
}
const formData = new FormData();
  formData.append("avatar", selectedfile);

      await axios.post("http://localhost:3000/api/upload-pic",formData,{
headers:{
    authorization:token

}
     })
 

    }
    return <div>
        
         <input ref = {avatarref}  type = "file" placeholder="upload here"/> 
         <button onClick={uploadavatar}>upload </button>
         
    </div>
}