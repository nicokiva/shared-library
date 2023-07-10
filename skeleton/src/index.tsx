import { render } from "react-dom";
import { Grid } from "./lib";

const products = [
  { url: 'https://www.fravega.com/p/celular-samsung-galaxy-a13-128gb-negro-781977/', image: 'https://images.fravega.com/f300/c93187b609899f51b11399d511cc117a.jpg', name: 'Celular Samsung Galaxy A13 128GB Negro', originalPrice: 80999, currentPrice: 74999, tags: ['Llega GRATIS mañana', '¡Retiralo YA!'] },
  { url: 'https://www.fravega.com/p/celular-samsung-galaxy-a04e-64gb-copper-782049/', image: 'https://images.fravega.com/f300/75a9178fa9b4b25a76fd68c91dd7ff95.jpg', name: 'Celular Samsung Galaxy A04e 64GB Copper', currentPrice: 53999, tags: ['Llega GRATIS mañana', '¡Retiralo YA!'] },
  { url: 'https://www.fravega.com/p/celular-samsung-galaxy-a04e-64gb-copper-782049/', image: 'https://images.fravega.com/f300/75a9178fa9b4b25a76fd68c91dd7ff95.jpg', name: 'Celular Samsung Galaxy A04e 64GB Copper', currentPrice: 53999, tags: ['Llega GRATIS mañana', '¡Retiralo YA!'] },
  { url: 'https://www.fravega.com/p/celular-samsung-galaxy-a04e-64gb-copper-782049/', image: 'https://images.fravega.com/f300/75a9178fa9b4b25a76fd68c91dd7ff95.jpg', name: 'Celular Samsung Galaxy A04e 64GB Copper', currentPrice: 53999, tags: ['Llega GRATIS mañana', '¡Retiralo YA!'] },
  { url: 'https://www.fravega.com/p/celular-samsung-galaxy-a04e-64gb-copper-782049/', image: 'https://images.fravega.com/f300/75a9178fa9b4b25a76fd68c91dd7ff95.jpg', name: 'Celular Samsung Galaxy A04e 64GB Copper', currentPrice: 53999, tags: ['Llega GRATIS mañana', '¡Retiralo YA!'] }
]

const App = () => (
  <div style={{ margin: "15px auto" }}>
    <Grid list={products} />
  </div>
);

render(<App />, document.getElementById("root"));