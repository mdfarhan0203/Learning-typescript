import Card from './components/Card.tsx'
import CardWithArray from './components/CardWithArray.tsx'
import TaskShow from './components/TaskShow.tsx'
import UserProfile from './components/UserProfile.tsx'


export interface User {
  username: string,
  age: number,
  isAdmin: boolean
}


function App() {

  const fruitList: string[] = [
    "apple",
    "mango",
    "banana"
  ]


  interface ImageProps { 
    src: string, 
    height: number,
     width: number 
  }


  function Image({ src, height, width }:ImageProps) {
    return <img src={src} height={height} width={width} />
  }

  const userData: User = { username: "mohan lal", age: 45, isAdmin: true }

  return (
    <>
      <div>
        <Card
          name="Emily Johnson"
          position="Software Engineer"
          email="johnson.emily@example.com"
        />
        <CardWithArray fruitList={fruitList} />
        <UserProfile user={userData} />

        <TaskShow title="my first task" completed={false} />
        <Image src="das" height={40} width={40} />
      </div>
    </>
  )
}

export default App
