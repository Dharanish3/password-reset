import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const useLogout = () => {
   const navigate = useNavigate()
    
    return  () => {
        toast.success('Log Out Successfully');
        sessionStorage.clear();
        navigate('/')
        
    }
};

export default useLogout