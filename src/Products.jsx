function Products() {
    const products = ['React Beginner', 'React Intermediate', 'React Advanced']

    const listProducts = products.map((product) => (
        <li key={product}>{product}</li>
    ))

    return (
        <div>
            <h2>Products</h2>
            <ul>{listProducts}</ul>
        </div>
    )
}

export default Products