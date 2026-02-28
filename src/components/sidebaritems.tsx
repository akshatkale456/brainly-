import type { ReactElement } from "react";
import type { SidebarItemProps } from "../types/type";



export const SidebarItem = ({ title, icon }: SidebarItemProps) => {
    return (
        <div className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-gray-700">
            {icon && <div className="text-gray-500">{icon}</div>}
            <span className="font-medium">{title}</span>
        </div>
    );
};
