import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";

function App() {

    const initialData = [
        {
            id:1,
            name: "Koupit mléko",
            completed: false
        },
        {
            id:2,
            name: "Dokončit cvičení",
            completed: false
        },
        {
            id:3,
            name: "Vsadit sportku",
            completed: false
        }
    ]

    const [data, setData] = useState(initialData)
    const [lastId, setLastId] = useState(4);

    return (
        <div className="App">
            <TodoForm data={data} setData={setData} lastId={lastId} setLastId={setLastId}/>
            <h1>Nesplněné úkoly</h1>
            <TodoList data={data} completed={false} setData={setData}/>
            <h1>Splněné úkoly</h1>
            <TodoList data={data} completed={true} setData={setData}/>
            <Footer/>
        </div>
    );
}

export default App;
