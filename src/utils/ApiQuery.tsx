import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./Axios";
 const Https='http://localhost:5000'
 

// const Https='https://my-akfa-28baeea2951f.herokuapp.com'
export const useGet = (keys:[string], url:string) => {
    return useQuery(keys, ()=>instance.get(`${Https+url}`).then(resp=>resp.data)  )
}

export const usePost=(url:string)=>{
    return useMutation((data:any)=>instance.post(`${Https+url}`,data))
}
export const useDelete=(url:string)=>{
    return useMutation((id:string)=>instance.delete(`${Https+url}/${id}`))
}
export const useUpdate=(url:string)=>{
    return useMutation((data:any)=>instance.put(`${Https+url}`,data))
}
