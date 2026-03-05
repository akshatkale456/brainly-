import { Modal } from "../components/modal";
import { useState } from "react";

export const Dashboard = () => {
   const[open ,setclose]=useState(true)  
   return (
      <div className="p-6">
         {open&&<Modal open={open} setclose={setclose}/>}
         <h1 className="text-2xl font-bold">Dashboard</h1>
         <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
      </div>
   );
};