import { authAtom } from "@/store/atoms/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";


export const ProtectedRoute = () => {
    const user = useRecoilValue(authAtom);
    return user ? <Outlet /> : <Navigate to="/signin"/>
}
