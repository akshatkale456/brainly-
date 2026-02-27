import { Avatar, IconButton, InputBase, Paper, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Sidebaar } from "../assets/icon";
import { Sidebar } from "../components/sidebar"
import { useState } from "react";


let notification = false
export const Dashnav = () => {
   const [sidebar, setsidebar] = useState(false)
   function togglesidebar() {
      setsidebar(!sidebar)
   }
   return (
      <div>

         <Paper elevation={9} sx={{
            backgroundColor: "#EEEEEE",
            height: "60px",
            display: "flex",
            alignItems: "center",
            paddingX: "16px"
         }}>
            <div className="flex items-center justify-between w-full h-full">

               <div onClick={togglesidebar} className="cursor-pointer flex-shrink-0">
                  <Sidebaar />
               </div>

               <div className="hidden md:flex items-center bg-white rounded-xl h-10 flex-1 max-w-xl mx-4 shadow-sm px-3">
                  <SearchIcon className="text-gray-500" />
                  <input
                     type="search"
                     placeholder="hello hiii"
                     className="bg-transparent border-0 outline-none w-full ml-2 text-gray-700 placeholder-gray-400"
                  />
               </div>

               <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
                  <div className="relative flex items-center cursor-pointer">
                     <div className="relative inline-flex">
                        <NotificationsNoneIcon fontSize="large" className="text-gray-700" />
                        {notification && <div className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs text-white font-bold border-2 border-white">
                           1
                        </div>}
                     </div>
                  </div>
                  <div className="cursor-pointer">
                     <Avatar sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }} />
                  </div>
               </div>

            </div>
         </Paper>
         {sidebar && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" onClick={togglesidebar}>
            <Sidebar />
         </div>}


      </div>
   );
};