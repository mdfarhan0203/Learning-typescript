import { type User } from '../App.tsx'

interface UserProfileProps {
    user: User
}


function UserProfile({ user }: UserProfileProps) {
    const { username, age, isAdmin } = user
    return (
        <div>
            <p>Helllo {username}</p>
            <p>My Age is : {age}</p>
            <p>{isAdmin ? "Yes, I am an admin." : "No, I am not an admin."}</p>



        </div>
    )
}



export default UserProfile;