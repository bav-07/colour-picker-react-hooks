import { useState, useEffect } from "react"
import ColourPickerComponent from "../components/ColourPickerComponent";

const ColourPickerContainer = () => {
 
    const [red, setRed] = useState(50);
    const [green, setGreen] = useState(50);
    const [blue, setBlue] = useState(50);

    const [RGB, setRGB] = useState("");

    // The function inside the useEffect is invoked EVERY TIME any element inside the provided array is changed
    useEffect(() => {

        let red255 = Math.ceil(red * 2.55);
        let green255 = Math.ceil(green * 2.55);
        let blue255 = Math.ceil(blue * 2.55);

        setRGB(`rgb(${red255},${green255},${blue255})`)

    }, [red, green, blue])

    // const RGB = (`rgb(${Math.ceil(red * 2.55)}, ${Math.ceil(green * 2.55)}, ${Math.ceil(blue * 2.55)})`);

    return(
        <>
            <ColourPickerComponent
                red={red}
                green={green}
                blue={blue}
                setRed={setRed}
                setGreen={setGreen}
                setBlue={setBlue}
            />
            <h2 style={{backgroundColor: RGB}}> {RGB} </h2>
        </>
    );

}

export default ColourPickerContainer;