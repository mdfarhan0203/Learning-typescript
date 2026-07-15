
interface CardProps{
    name:string,
    position:string,
    email:string
}

// 1)Solution
// function Card({ name, position, email }:{name:string,position:string,email:string}){


// 2) Solution 2 
//  interace 


// interface CardProps{
//     name:string,
//     position:string,
//     email:string
// }

function Card({ name, position, email }:CardProps){
    return (
        <div className="card ">
            <h2>Card Component</h2>
            <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image" height="200" width="300" />
            <p>{name}</p>
            <p>{position}</p>
            <p>{email}</p>
        </div>
    )
}



export default Card;