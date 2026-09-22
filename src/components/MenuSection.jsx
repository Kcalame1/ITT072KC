import MenuItem from "./MenuItem";

function MenuSection({title, children}) {
    return(
        <section className = "menuSection">
            <h2>{title}</h2>

            {children}
        </section>
    );
}

export default MenuSection;