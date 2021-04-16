import {useState} from "react";

export default function TodoForm({data, setData, lastId, setLastId}) {


    const [todo, setTodo] = useState("");

    let newTodo = {
        id: lastId,
        name: todo,
        completed: false
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        if (todo.length >0){
            setLastId(lastId+1);
            const newData = [...data]
            newData.push(newTodo)
            setData(newData)
            setTodo("")
        }
    }
    return(
        <div>
            <br/>
            <h1>Přidání úkolu</h1>
            <form onSubmit={onSubmitHandler}>
                <input  required={true} type={"text"} value={todo} onChange={e => setTodo(e.target.value)} placeholder="Enter new TODO"/>
                <button className="btn-sm btn-primary" type={"submit"}>Add</button>
            </form>
        </div>
    )
}