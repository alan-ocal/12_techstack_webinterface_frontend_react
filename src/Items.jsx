function Items() {
    const items = [
        {title: "Cabbage",isFruit: false, id: 1 },
        {title: "Garlic",isFruit: false, id: 2 },
        {title: "Apple",isFruit: true, id: 3 },
    ];

    const listItems = items.map(item =>
        <li key={item.id}
        style={{color:item.isFruit ? "red" : "green"}}>
            {item.title}</li>
    );

    // render the listItems array as an unordered list (<ul>) to the DOM in the component's return statement.
    return (
          <ul>{listItems}</ul>
           )
}
export default Items