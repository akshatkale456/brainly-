import  type{ ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }: { children: ReactNode }) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return <>{children}</>;
};
