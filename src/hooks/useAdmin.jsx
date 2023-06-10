import { useQueries } from '@tanstack/react-query';
import useAuth from './useAuth';
import { useEffect, useState } from 'react';
const useAdmin =()=>{
    const {user} = useAuth();
    const {data: isAdmin, isLoading: isAdminLoading}=useQueries({
        queryKey:['isAdmin',user?.email],
        queryFn: async ()=>{
           const [data, setData]=useState([]);
            useEffect(()=>{
                fetch(`https://assignment-server-12-tau.vercel.app/users/admin/${user?.email}`)
                .then(res =>res.json())
                .then(data=>{
                    console.log(data);
                    setData(data);
                })
            },[])
            return res.data.admin;
        }
    })
    return [isAdmin,isAdminLoading]
}
export default useAdmin;