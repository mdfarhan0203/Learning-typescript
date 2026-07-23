import ColorPicker from "./ColorPicker";

function App() {
  const colors: string[] = ["red", "green", "blue"]

  const handlerColorChanges = (color: string) => {
    document.body.style.background = color

  }

  return (
    <div>
      <h1>Color Picker </h1>
      <ColorPicker colors={colors} handlerColorChanges={handlerColorChanges} />
    </div>
  )
}


export default App;