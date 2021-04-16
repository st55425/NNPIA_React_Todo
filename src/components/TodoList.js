import TodoItem from "./TodoItem";


export default function TodoList({data, completed, setData}) {

    const clickHandler = function (item){
       item.completed = item.completed === false;
        const newData = [...data]
        setData(newData)
    }

    const noToComplete = data.filter( item => item.completed === completed).length <= 0 && completed === false
    const noCompleted = data.filter( item => item.completed === completed).length <= 0 && completed === true

    return(
        <div className="col justify-content-center">
            {noToComplete  && <p>Výborně, nemáte žádné úkoly ke splnění</p>}
            {noCompleted  && <p>Nemáte žádné splněné úkoly</p>}
            {data.filter(item => item.completed === completed).map(item => <TodoItem key={item.id} item={item} onClickHandler={clickHandler}/>)}
        </div>
    )
}