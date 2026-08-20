import { Search as SearchIcon, Bell as NotificationsNoneIcon, Plus as AddIcon, Menu as MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Modal } from "./modal";
import { useNavigate } from "react-router-dom";
import { Alerttdot } from "./alertdot";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BACKEND_URL, API_URL } from "../config";

interface DashnavProps {
   toggleSidebar: () => void;
}

export const Dashnav = ({ toggleSidebar }: DashnavProps) => {
   const [open, setClose] = useState(false);
   const navigate = useNavigate();

   return (
      <header className="sticky top-0 z-40 w-full bg-surface-0/90 backdrop-blur-md text-on-surface">
         <div className="flex h-16 items-center px-4 md:px-6">
            <Button variant="ghost" size="icon-sm" onClick={toggleSidebar} className="mr-3 text-zinc-400 hover:text-white transition-colors cursor-pointer h-9 w-9">
               <MenuIcon className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight headline-lg-mobile text-lg">
               <span>Dashboard</span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
               <div className="hidden md:flex items-center relative w-64 mr-2">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 pointer-events-none" />
                  <Input
                     type="search"
                     placeholder="Search..."
                     className="pl-9 h-9 text-sm bg-surface-1 border-ui-border focus-visible:ring-secondary w-full rounded-full"
                  />
               </div>

               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                   <Button onClick={() => setClose(true)} className="btn-primary h-9 px-5 rounded-full shadow-md cursor-pointer flex items-center gap-2">
                      <AddIcon className="w-4 h-4" />
                      <span className="hidden sm:block">Add Content</span>
                   </Button>
               </motion.div>
               {open && <Modal onClose={setClose} />}

               <div onClick={() => navigate('/notifications')} className="relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-surface-2 transition-colors cursor-pointer text-zinc-300 hover:text-white">
                  <NotificationsNoneIcon className="w-5 h-5" />
                  <Alerttdot variants="red" pulse={true} className="absolute top-1 right-1 flex" />
               </div>
            </div>
         </div>
      </header>
   );
};
