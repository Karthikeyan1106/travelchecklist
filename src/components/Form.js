import { useState } from "react";

function Form({handleForm}) {
    const [input, SetInput] = useState("");
    const [select, SetSelect] = useState(1);

    
    function handleAddItems(obj) {
        handleForm(obj)
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        if (!input) return;
        const obj = {
            id: Date.now(),
            quantity: select,
            description: input,
            packed:false
        }
        handleAddItems(obj)
        SetInput("");
        SetSelect(1);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip/travel?</h3>
            <select name="dropdown" id="selection" value={select} onChange={(e)=>SetSelect(+e.target.value)}>
                {Array.from({length:20}, (_,index) => {
                    return <option key={index + 1} value={index + 1}>{index + 1}</option>
                })}
            </select>
            <input type="text" placeholder="Add your list here" value={input} onChange={(e)=>SetInput(e.target.value)} />
            <button>ADD</button>
        </form>
    )
}

export default Form
