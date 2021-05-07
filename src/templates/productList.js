import data from "../data/data.json";
console.log(data);

const productList = () =>{
    const template = `

    
        <section class="departments">
        ${
            data.map(department =>`
            <section class="department">
                <div class="department__header">
                    <img src="/src/img/${department.name}.jpg" class="department__header-image" alt="department-${department.name}"></img>
                    <h3>${department.name}</h3>
                </div>
           

                <div class="department__body">
                    ${
                        department.products.map(product => `
                            <article>
                                <h3>${product.productName}</h3>
                                <p>Price: $${product.price}</p>
                                <p>${product.description}</p>
                            </article>
                        
                        `).join('')
                    }
                </div>
            </section>
            
            `
        ).join('')
        }
        </section>`
    
    

    return template;
}

export default productList;