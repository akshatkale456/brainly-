import { Avatar, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { Modal } from "./modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alerttdot } from "./alertdot";

const notification = false;

interface DashnavProps {
   toggleSidebar: () => void;
}

export const Dashnav = ({ toggleSidebar }: DashnavProps) => {
   const [open, setClose] = useState(false);
   const [profilePic, setProfilePic] = useState<string | null>(null);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchUser = async () => {
         try {
            const token = localStorage.getItem("Authorization");
            if (!token) return;
            const res = await axios.get("http://localhost:3000/api/me", {
               headers: {
                  Authorization: token
               }
            });
            if (res.data?.user?.profilePic) {
               setProfilePic(`http://localhost:3000${res.data.user.profilePic}`);
            }
         } catch (e) {
            console.error("Failed to fetch user profile", e);
         }
      };
      fetchUser();
   }, []);

   return (
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-neutral-main text-white">
         <div className="flex h-16 items-center px-4 md:px-6">
            <button onClick={toggleSidebar} className="mr-4 text-zinc-400 hover:text-white transition-colors cursor-pointer">
               <MenuIcon />
            </button>
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
               <span>Dashboard</span>
            </div>

            <div className="hidden md:flex items-center bg-neutral-main border border-zinc-800 rounded-xl h-10 flex-1 max-w-xl mx-auto px-3 shadow-sm transition-colors focus-within:border-zinc-700 focus-within:bg-zinc-800">
               <SearchIcon className="text-zinc-400" />
               <input
                  type="search"
                  placeholder="Search..."
                  className="bg-transparent border-0 outline-none w-full ml-2 text-white placeholder-zinc-500"
               />
            </div>

            <div className="flex items-center gap-4 ml-auto">
               <button onClick={() => setClose(true)} className="px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-secondary transition-colors shadow-sm">
                  <AddIcon fontSize="small" />
                  <span className="hidden sm:block">Add content</span>
               </button>
               {open && <Modal setclose={setClose} />}

               <div onClick={() => navigate('/notifications')} className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-neutral-700 transition-colors cursor-pointer text-zinc-300 hover:text-white">
                  <NotificationsNoneIcon />
                  <Alerttdot variants="red" pulse={true} className="absolute top-2 right-2 flex" />
               </div>

               <div className="cursor-pointer ml-2" onClick={() => navigate('/profile')}>
                  <Avatar src={profilePic || undefined} sx={{ width: 36, height: 36, bgcolor: '#A855F7' }} />
               </div>
            </div>

         </div>
      </header>
   );
};
