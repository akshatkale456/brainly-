  import React, {  type ReactNode } from "react";
  export interface Card {
  string: string,
  title?: string,
  stock: number,
  img: ReactNode
}
 export interface Button{
     text?: string,
     onClick?:()=>void
     icon?:ReactNode ,
     variant :"big"|"small"}
     
  export interface SidebarItemProps {
    title: string;
    icon?: ReactNode;
} 
export interface socialcard{
   title : string 
   type: "youtube"|"twitter"
   read:boolean
   link: string
}  
export interface Modl{
  setclose:React.Dispatch<React.SetStateAction<boolean>>
  
   
} 
 export interface card {
  type:string,
  title:string,
  read:boolean,
  link:string
  id:number
}
export interface  cardGlobalState {
  card:card[]
  addcard:(newCard: card)=>void
  deletcard:(id: number)=>void
   
}
export  interface mediumcard{
   heading:string 
   content?: string 
   icon:ReactNode
   variant:"large"|"medium"|"small"|"notification"
   time?:string
   isNew?:boolean
}
