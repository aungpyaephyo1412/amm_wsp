import axios from "axios";
import {useEffect, useState} from "react";

const Index = () => {
    const url = "https://jsonplaceholder.typicode.com/todos"
    const [todo,setTodo] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(res=>{
                console.log(res.data)
                setTodo(res.data)
            })
            .catch(error=>{
                console.log(error.message)
            })
    }, []);
    return (
        <div>
            <div className='container mx-auto p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {
                    todo?.map(todo=>(
                        <div key={todo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">{todo.title}</h5>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Index;
