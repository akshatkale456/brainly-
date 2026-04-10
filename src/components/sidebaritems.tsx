import type { ReactElement } from "react";
import type { SidebarItemProps } from "../types/type";

export const SidebarItem = ({ title, icon }: SidebarItemProps) => {
    return (
        <div className="flex items-center gap-4 px-6 py-3 hover:bg-zinc-800 cursor-pointer transition-colors duration-200 text-zinc-300 hover:text-white">
            {icon && <div className="text-zinc-400">{icon}</div>}
            <span className="font-medium">{title}</span>
        </div>
    );
};
