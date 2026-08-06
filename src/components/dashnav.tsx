import { Search as SearchIcon, Bell as NotificationsNoneIcon, Plus as AddIcon, Menu as MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Modal } from "./modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alerttdot } from "./alertdot";
import { Loading } from "./loading";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BACKEND_URL, API_URL } from "../config";

interface DashnavProps {
   toggleSidebar: () => void;
}

export const Dashnav = ({ toggleSidebar }: DashnavProps) => {
   const [open, setClose] = useState(false);
   const [profilepic, setProfilePic] = useState<string | null>(null);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchUser = async () => {
         try {
            const token = localStorage.getItem("Authorization");
            if (!token) {
               setProfilePic("");
               return;
            }
            const res = await axios.get(`${API_URL}/me`, {
               headers: {
                  Authorization: token
               }
            });
            if (res.data?.User?.url) {
               setProfilePic(`${BACKEND_URL}${res.data.User.url}`);
            } else {
               setProfilePic("");
            }
         } catch (e) {
            console.error("Failed to fetch user profile", e);
            setProfilePic("");
         }
      };
      fetchUser();
   }, []);

   if (profilepic === null) return <div><Loading /></div>;

   return (
      <header className="sticky top-0 z-40 w-full border-b border-ui-border bg-surface-0/90 backdrop-blur-md text-on-surface">
         <div className="flex h-16 items-center px-4 md:px-6">
            <Button variant="ghost" size="icon-sm" onClick={toggleSidebar} className="mr-3 text-zinc-400 hover:text-white transition-colors cursor-pointer h-9 w-9">
               <MenuIcon className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight headline-lg-mobile text-lg">
               <span>Dashboard</span>
            </div>

            <div className="hidden md:flex items-center relative flex-1 max-w-xl mx-auto px-4">
               <SearchIcon className="absolute left-7 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 pointer-events-none" />
               <Input
                  type="search"
                  placeholder="Search across all technical knowledge bases..."
                  className="pl-10 h-10 bg-surface-1 border-ui-border focus-visible:ring-secondary w-full"
               />
            </div>

            <div className="flex items-center gap-3 ml-auto">
               <Button onClick={() => setClose(true)} className="btn-primary h-10 px-4 shadow-md cursor-pointer flex items-center gap-2">
                  <AddIcon className="w-4 h-4" />
                  <span className="hidden sm:block">Add Content</span>
               </Button>
               {open && <Modal onClose={setClose} />}

               <div onClick={() => navigate('/notifications')} className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-2 transition-colors cursor-pointer text-zinc-300 hover:text-white">
                  <NotificationsNoneIcon className="w-5 h-5" />
                  <Alerttdot variants="red" pulse={true} className="absolute top-2 right-2 flex" />
               </div>

               <div onClick={() => navigate('/uploadavatar')} className="cursor-pointer ml-1" title="Change Avatar">
                  <div className="w-9 h-9 rounded-full bg-secondary/80 border border-ui-border overflow-hidden flex items-center justify-center text-white font-bold text-sm shadow-sm hover:ring-2 hover:ring-secondary transition-all">
                     {profilepic ? <img src={profilepic} alt="Profile" className="w-full h-full object-cover" /> : "U"}
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};
