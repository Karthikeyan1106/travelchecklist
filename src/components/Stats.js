function Stats({ items }) {
    if(!items.length) return <p className="stats">Start adding some items to your list💼</p>
    const numItems = items.length;
    const packed = items.filter((i) => i.packed).length;
    const perc = Math.round(packed / numItems * 100);
    return (
        <footer className="stats">
            <em>
                {perc === 100 ? "You got everything packed! Ready to go✈️" : `You have ${numItems} items on your list , and you already packed ${packed}(${perc}%).` }
                
            </em>
        </footer>
    )
}

export default Stats
