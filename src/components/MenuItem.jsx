function MenuItem ({name, description, price,}) {
    return(
        <div className = "menuItem">
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
        </div>
    );
}

export default MenuItem;