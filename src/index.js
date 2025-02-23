import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co. </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="omato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
      {/* *****premiere methode pour rendre simpliment******* */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}

      {/* ***************2eme methode pour rendre avec "&&" ********************* */}
      {/* 1ercas */}
      {/* const pizzas = pizzaData;  au debut de le fnction*/}
      {/* {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* 2er cas ** */}

      {/* {numPizzas >0 && (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        )} */}

      {/* ***************troisième methode pour rendre avec "ternaire" ********************* */}
      {numPizzas > 0 ? (
        // Deuxième avec pour parent fragement React(<> </>)
        <>
          <p>
            Authentic italian pizza. 6 creative dishes to choose from. All from
            our stone , all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> We still working on menu, please come back later </p>
      )}
    </main>
  );
}

// au lieu d'utiliser les props mettre le nom exacte du props à la place de props.
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
      {/* D'autres methodes pour rendre du jsx */}
      {/* explication: si isOpne est true, il exécute aussi la suite ou son binome et alternativement*/}

      {/* **********************************************************1er Methode */}
      {/* {isOpen && (
        <div className="oder">
          <p>
            We're open until until {closeHour}:00. Come visit us or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      )} */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        // les deux points : indique ce qu'il doit rendre dans le alternatif.
        <p>
          We're happy to open between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
// fonction de retour footer séparé du footer

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// My Taskes  
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App();
