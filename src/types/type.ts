  import React, {  type ReactNode } from "react";
  export interface Card {

  string: string,
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