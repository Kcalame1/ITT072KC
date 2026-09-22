import Header from "./components/Header.jsx"
import Footer from "./components/footer.jsx"
import MenuSection from "./components/MenuSection.jsx"
import MenuItem from "./components/MenuItem.jsx"
import IntroSection from "./components/IntroSection.jsx"
import "./App.css"

function App() {
  return(
    <>
    <Header />

    <main>

      <IntroSection />

      <MenuSection title = "Entrees" >
        <MenuItem
          name = "Cheeseburger"
          description = "Beef patty, lettuc, tomato, onion, with our special sauce."
          price = "10.99"
        />
        <MenuItem
          name = "Chicken Tenders"
          description = "Four crispy chicken tenders with your choice of sauce."
          price = "8.99"
        />
        <MenuItem
          name = "Chicken Sandwich"
          description = "Grilled chicken, lettuce, tomato, and mayo."
          price = "10.99"
        />
      </MenuSection>

      <MenuSection title = "Sides" >
        <MenuItem
          name = "French Fries"
          description = "Fries seasoned with our homemade seasoning"
          price = "2.99"
        />
        <MenuItem
          name = "Cheese Curds"
          description = "Crispy breading filled with stringy mozzarella."
          price = "4.99"
        />
        <MenuItem
          name = "Side Salad"
          description = "Lettuce, tomato, cucumber, with your choice of dressing."
          price = "4.99"
        />
      </MenuSection>

      <MenuSection title = "Drinks" >
        <MenuItem
          name = "Lemonade"
          description = "From our freshly squeezed lemons."
          price = "2.99"
        />
        <MenuItem
          name = "Soda"
          description = "Pepsi products."
          price = "2.99"
        />
        <MenuItem
          name = "Iced Tea"
          description = "Sweet or unsweet."
          price = "2.99"
        />
      </MenuSection>

    </main>

    <Footer />
    </>
  );
}

export default App;