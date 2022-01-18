import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const denid = !!token;

    return denid ? children : navigate('/');
}