
interface CardWithArrayProps{
    fruitList:string[]
}

function CardWithArray({ fruitList }: CardWithArrayProps) {
    return (
        <div className="card">
            <h2>Card With Array Component</h2>  
            {fruitList.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default CardWithArray;