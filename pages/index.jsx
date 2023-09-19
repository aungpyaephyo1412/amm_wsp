import axios from "axios";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Link from "next/link";

const Index = () => {
    const query = useQueryClient();
    const getAllTodo = async ()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        return res.data;
    }
    const {
        data:todos,
        isLoading,
        isError,
        isSuccess
    } = useQuery({ queryKey: ['get','todos'], queryFn: getAllTodo })
    console.log(isLoading,isError,isSuccess)
    const createTodo =async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            return res.data;
    }
    const {mutate} = useMutation({
        mutationKey:['post',"todos"],
        mutationFn:createTodo
    })
    // mutate({},{
    //     onSuccess:async ()=>{
    //         await query.invalidateQueries({
    //             queryKey:["get","todos"]
    //         })
    //     }
    // })
    return (
        <div>
          Hello World
            <div>
                {
                    isLoading && <div>Loading......</div>
                }
                {
                    isSuccess && todos.map(todo=>{
                        return <Link className='block' href={`/${todo.id}`} key={todo.id}>{todo.id} - {todo.title}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default Index;
