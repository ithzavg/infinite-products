import "./styles/styles.scss";
import data from "./data/data.json";


let containerArt = document.getElementById('product-container');

export function article(start, end){
    const view = `
        <div class="article-products">
        ${
            data[0].products.slice(start,end).map((product) => `
            
                <article>
                    <h3>${product.productName}</h3>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                </article>
            
            `).join('')
        }
        </div>

    `
    return view;
}


let start = 0;
let end = 5;



export function loadElements(start, end){
    for(let i=0; i<3; i++){
        containerArt.innerHTML += article(start, end);
    
        start = start + 5;
        end = end + 5;
    }
}

loadElements(start, end);



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        if(entry.intersectionRatio > 0){
            setTimeout(() => {
                start = 10;
                end = 15;
                loadElements(start, end);
                start = start + 5;
                end = end + 5;
            }, 1000);
        }
    })
});

observer.observe(document.querySelector("#triggerScroll"));


