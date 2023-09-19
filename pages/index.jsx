import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const Index = () => {
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
    return (
        <div>
          Hello World
            <div>
                {
                    isSuccess && todos.map(todo=>{
                        return <li key={todo.id}>{todo.id} - {todo.title}</li>
                    })
                }
            </div>
        </div>
    );
};

export default Index;
