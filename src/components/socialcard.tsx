import { extract } from "../url/extract"
import { extractTweetId } from "../url/extract"
import type { socialcard } from "../types/type"
import { useState } from "react";

import { Tweet } from 'react-tweet';
import { Twitter } from "../pages/twitter"
let youtube:string|null = null
let twitter:string|undefined= undefined 


export const Socialcard = ({ type ,title, read,link}:socialcard)=>{
  // const[id , setid] = useState<string>()
  // const [string,setstring] = useState<string>()
  let youtube:string|null = null
let twitter:string|undefined= undefined 


  if ( type === "youtube"){
   youtube =   extract(link)
  }
   else if( type === "twitter"){
    twitter=  extractTweetId(link)
  }
  else{
     console.log( " invalid link ")
  }
  
     

    return <div>
        {type == "youtube"&&
          (<iframe
         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        src={`https://www.youtube.com/embed/${youtube}`}
         title={"jajljjsdljfj"}
         frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />)}
{ type=== "twitter"&&twitter!== undefined && <Tweet id={twitter} />}

    </div>
}