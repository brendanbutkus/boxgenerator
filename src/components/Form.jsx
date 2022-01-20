import React, {useState} from 'react';
import Box from './Box';


const Form = (props) => {

    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState("");
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newBox = {
            color: color,
        }
        setBoxes([...boxes, newBox]);
        setColor("");

    }

    const colorHandler = (event) => {
        setColor(event.target.value)
    }
    
    
    
    return (
        <div className="App w-50 mx-auto">
            <form onSubmit={onSubmitHandler}>
                <div className="row mb-5">
                    <div className='col'>
                        <label htmlFor="color">Color</label>
                        <input type="text" value={color} className='form-control' onChange={colorHandler} />
                    </div>
                    <div>
                        <input type="submit" className="btn btn-success" />
                    </div>
                </div>
    
            </form>
    
            <Box boxes={boxes}/>
    
        </div>
    )
}

export default Form;