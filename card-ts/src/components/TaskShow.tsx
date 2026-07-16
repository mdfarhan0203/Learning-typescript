


interface  TaskShowProps{
    title:string,
    completed:boolean
}

function TaskShow({ title, completed }:TaskShowProps) {
    return (
        <div>
            <p>{title} - {completed ? "Done" : "Need to complete"}</p>
        </div>
    )
}

export default TaskShow;