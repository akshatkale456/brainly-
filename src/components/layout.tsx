import { Outlet } from "react-router-dom";
import { Dashnav } from "./dashnav";

export const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Dashnav />
             {/* The Outlet renders the child routes inside the layout  */}
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};
