function Products() {
  const products = ['React Beginner', 'React Intermediate', 'React Advanced']

  /* generate listProducts array based on the values of  products array.
     using the map() method to `iterate over` the products array and */
  const listProducts = products.map((product) => (
    /*  create a list of <li> elements for each product.
    product.toString() converts the product value into a string for the key.
    pass in this function to the map() method */


    /*provide a key attribute for our <li> elements
    A key is a special string attribute that helps React identify which items have changed, are added, or are removed.
    Most often, we can use the item's ID as the key. */
    // <li key={product.toString()}>{product}</li>
    <li key={product}>{product}</li>
  ))

  // render the listProducts array as an unordered list (<ul>) to the DOM in the component's return statement.
  return (
    <div>
      <h2>Products</h2>
      <ul>{listProducts}</ul>
    </div>
  )
}

export default Products