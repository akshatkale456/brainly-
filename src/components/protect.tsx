import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Protected = ({ children }: { children: ReactNode }) => {
    const isAuthenticated = Cookies.get("isAuthenticated");

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return <>{children}</>;
};
