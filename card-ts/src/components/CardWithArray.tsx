
interface CardWithArrayProps{
    data:string[]
}

function CardWithArray({ data }: CardWithArrayProps) {
    return (
        <div className="card">
            <h2>Card With Array Component</h2>  
            {data.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default CardWithArray;