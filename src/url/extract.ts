export const extract = ( url: string ): string|null =>{
     const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
     const match  =  url.match(regex)
     if( match){
         return match[1] 
     }
     else{
         return null
     }
     console.log(match)

}

export const extractTweetId = (url: string):string | undefined => {

  const regex = /(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/;
  
  const match = url.match(regex);
  if(match){
    return match[1]
  }
  else{
     return undefined
  }
}
