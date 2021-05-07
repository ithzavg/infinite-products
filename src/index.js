import "./styles/styles.scss";
import productList from "./templates/productList";

let products = document.getElementById('main');
products.innerHTML = productList();