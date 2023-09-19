import React from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const Todo = () => {
    const {query} = useRouter();
    const {id} = query;
    const getTodobyId = async (id)=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return res.data;
    }
    const {data:todo,isLoading,isSuccess} = useQuery({
        queryKey:['get','todo',id],
        queryFn:() => getTodobyId(id),
        enabled:!!id
    })
    return (
        <div>
            {id}
            {
                isSuccess && <li>{todo.title}</li>
            }
        </div>
    );
};

export default Todo;
