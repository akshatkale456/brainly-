import { SidebarItem } from "./sidebaritems";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ForumIcon from '@mui/icons-material/Forum';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="bg-white fixed z-50 top-0 left-0 h-screen shadow-2xl w-48 overflow-hidden flex flex-col pt-6">
            <Link to={"/youtube"}> <SidebarItem title="YouTube" icon={<YouTubeIcon sx={{ color: '#FF0000' }} />} /></Link>
            <Link to={"/twitter"}><SidebarItem title="Twitter" icon={<TwitterIcon sx={{ color: '#1DA1F2' }} />} /></Link>
            <Link to={"/chat"}><SidebarItem title="Chat meeting" icon={<ForumIcon sx={{ color: '#4CAF50' }} />} /></Link>
            <Link to={"/todo"}><SidebarItem title="Todo" icon={<CheckCircleOutlineIcon sx={{ color: '#FF9800' }} />} /></Link>
            <Link to={"/pdf"}><SidebarItem title="PDF" icon={<PictureAsPdfIcon sx={{ color: '#E53935' }} />} /></Link>
        </div>
    );
};
