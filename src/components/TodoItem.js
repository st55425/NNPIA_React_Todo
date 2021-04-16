
export default function TodoItem({item, onClickHandler}) {

    return (
        <div className="border d-flex flex-row itemContainer mx-auto">
            <p className="item">{item.name}</p>
            {!item.completed && <button className="btn btn-danger" onClick={() => onClickHandler(item)}>Complete</button>}
            {item.completed && <button className="btn btn-secondary" onClick={() => onClickHandler(item)}>Revert</button>}
        </div>
    )
}