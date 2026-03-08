import { Avatar, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { Sidebaar } from "../assets/icon";
import { Sidebar } from "../components/sidebar"
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Modal } from "./modal";

const notification = false;
export const Dashnav = () => {
   const [sidebar, setSidebar] = useState(false);
   const [open, setClose] = useState(false);

   function toggleSidebar() {
      setSidebar(!sidebar);
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
            <div className="flex items-center justify-between w-full h-full gap-4">

               <div onClick={toggleSidebar} className="cursor-pointer flex-shrink-0 p-1 rounded-full hover:bg-gray-200 transition-colors">
                  <Sidebaar />
               </div>

               <div className="hidden md:flex items-center bg-white rounded-xl h-10 flex-1 max-w-xl shadow-sm px-3">
                  <SearchIcon className="text-gray-500" />
                  <input
                     type="search"
                     placeholder="Search..."
                     className="bg-transparent border-0 outline-none w-full ml-2 text-gray-700 placeholder-gray-400"
                  />
               </div>

               <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-auto">
                  <button onClick={() => setClose(true)} className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl flex items-center gap-1 sm:gap-2 text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 hover:shadow-md transition-all duration-200 cursor-pointer">
                     <AddIcon fontSize="small" />
                     <span className="hidden sm:block">Add content</span>
                  </button>
                  {open && <Modal setclose={setClose} />}

                  <div className="relative flex items-center cursor-pointer p-1 rounded-full hover:bg-gray-200 transition-colors">
                     <div className="relative inline-flex">
                        <NotificationsNoneIcon fontSize="medium" className="text-gray-700" />
                        {notification && <div className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs text-white font-bold border-2 border-white">
                           1
                        </div>}
                     </div>
                  </div>

                  <div className="cursor-pointer ml-1 sm:ml-2">
                     <Avatar sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }} />
                  </div>
               </div>

            </div>
         </Paper>
         <AnimatePresence>
         {sidebar && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" onClick={toggleSidebar}>
            <Sidebar />
         </div>}
         </AnimatePresence>


      </div>
   );
};