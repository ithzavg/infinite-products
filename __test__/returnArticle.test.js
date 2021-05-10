import '../src/index';


describe("Function that expect two parameters" , () =>{
    const expected= `
    
    <div class="article-products">
             
                 
    <article>
        <h3>Tasty Cotton Shirt</h3>
        <p>Price: $441.00</p>
        <p>Tools</p>
    </article>



    <article>
        <h3>Intelligent Granite Computer</h3>
        <p>Price: $173.00</p>
        <p>Books</p>
    </article>



    <article>
        <h3>Sleek Concrete Sausages</h3>
        <p>Price: $463.00</p>
        <p>Health</p>
    </article>



    <article>
        <h3>Generic Wooden Cheese</h3>
        <p>Price: $790.00</p>
        <p>Health</p>
    </article>



    <article>
        <h3>Handcrafted Steel Sausages</h3>
        <p>Price: $9.00</p>
        <p>Garden</p>
    </article>


</div>
    `

    test("this should expect two number parameters", () => {
        expect(article(0,5)).toBe(expected);
    })
})