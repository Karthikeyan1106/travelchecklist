import { useState } from "react"

function PackingList({ initialItems, handleButton, handleToggle, handleClearlist }) {
    
    const [sort, setSort] = useState('input');
    let sortedArray = [...initialItems];
    let sor;
    console.log(sor);

if (sort === 'input') sor = initialItems;

    if (sort === 'packed') {
        sor = sortedArray.sort((a,b)=>a.packed-b.packed)
    }

    if (sort === 'description') {
        sor = sortedArray.sort((a,b)=>a.description.localeCompare(b.description))
    }

    

    function handleSort(value) {
        setSort(value);
        console.log(value);
    }
    return (
        <div className="list">
        <ul>
                {sortedArray.map((item) => <Item item={item} key={item.id} handleButton={handleButton} handleToggle={handleToggle} />)}
            </ul>
            {initialItems.length ? (<div className="actions">
                <select value={sort} onChange={(e) => handleSort(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
                <button onClick={handleClearlist}>Clear list</button>
            </div>): null}
            </div>
    )
}

function Item({item,handleButton,handleToggle}) {
    return (
        <li>
            <input type="checkbox" value={item.packed} name="check" id="inp" onChange={()=>handleToggle(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button onClick={()=>handleButton(item.id)}>❌</button>
            </li>         
    )
}

export default PackingList
