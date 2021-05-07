const faker = require('faker');
const fs = require('fs');

function generateProducts(){
    
    let productsDatos =[];
    let departments = ["Kids", "Beauty", "Home", "Grocery", "Clothing"];

    for(let i of departments){
        
        const department = {}
        department.name = i;
        department.products = [];
   
        for(let id = 1; id <= 200; id++){
            const productData = {}
            productData.id = id,
            productData.productName = faker.commerce.productName(),
            productData.price=faker.commerce.price(),
            productData.description=faker.commerce.department()

            department.products.push(productData)
            
        }
    
    productsDatos.push(department);     
    }
    
    return productsDatos
}

const generateData = generateProducts();

fs.writeFileSync('data.json',JSON.stringify(generateData,null,"\t"));