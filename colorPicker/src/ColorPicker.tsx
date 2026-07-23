


interface ColorPickerProps {
    colors: string[],
    handlerColorChanges: (color: string) => void
}

function ColorPicker({ colors, handlerColorChanges }: ColorPickerProps) {

    // const renderDatePicker = colors.map(color => {
    //     return <button key={color} onClick={() => handlerColorChanges(color)}>{color}</button>
    // })

    return (
        <div>
            <h2>Color Picker</h2>
            {/* {renderDatePicker} */}

        
            {colors.map(color=>{
                return <button key={color} onClick={()=>handlerColorChanges(color)}>{color}</button>
            })}

        </div>
    )
}


export default ColorPicker;