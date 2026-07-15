import Card from './components/Card.tsx'
import CardWithArray from './components/CardWithArray.tsx'
import UserProfile from './components/UserProfile.tsx'


export interface User {
  username: string,
  age: number,
  isAdmin: boolean
}
function App() {


  const data = [
    "apple",
    "mango",
    "banana"
  ]


  const userData: User = { username: "mohan lal", age: 45, isAdmin: false }

  return (
    <>
      <div>
        <Card
          name="Emily Johnson"
          position="Software Engineer"
          email="johnson.emily@example.com"
        />
        <CardWithArray data={data} />
        <UserProfile user={userData} />
      </div>
    </>
  )
}

export default App
