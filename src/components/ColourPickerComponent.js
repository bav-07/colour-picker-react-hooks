const ColourPickerComponent = ({
    red, green, blue, setRed, setGreen, setBlue
}) => {

    // const handleSetRed = (event) => {
    //     setRed(event.target.value);
    // }

    // const handleSetGreen = (event) => {
    //     setGreen(event.target.value);
    // }

    // const handleSetBlue = (event) => {
    //     setBlue(event.target.value);
    // }

    return(
        <>
            <label htmlFor="red">Red</label>
            <input type="range" id="red" onChange={(e) => setRed(e.target.value)}></input>
            <p>Red: {red}%</p>
            
            <label htmlFor="green">Green</label>
            <input type="range" id="green" onChange={(e) => setGreen(e.target.value)}></input>
            <p>Green: {green}%</p>

            <label htmlFor="blue">Blue</label>
            <input type="range" id="blue" onChange={(e) => setBlue(e.target.value)}></input>
            <p>Blue: {blue}%</p>
        </>
    )
}

export default ColourPickerComponent;