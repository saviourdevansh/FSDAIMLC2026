const div = document.getElementById('container');
const button = document.getElementById('btn');

async function display() {

    try {

        div.innerHTML='<h2>Data is loading....</h2>';

        const serverdata=await fetch(
            'https://fakestoreapi.com/products'
        );

        const jsonData=await serverdata.json();

        console.log(jsonData);

        div.innerHTML = `
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </table>
        `;

        const table=div.querySelector('table');

        jsonData.forEach(product => {

            table.innerHTML += `
                <tr>
                    <td>${product.id}</td>

                    <td>${product.title}</td>

                    <td>$${product.price}</td>

                    <td>${product.category}</td>

                    <td>${product.rating.rate}</td>

                    <td>
                        <img 
                            src="${product.image}" 
                            width="100"
                        >
                    </td>

                    <td>
                        <button onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </td>
                </tr>
            `;
        });

    } 
    catch (error) {

        console.log(error);

        div.innerHTML=`<h2>Something went wrong!</h2>`;
    }
}

function addToCart(id) {
    console.log("Product added to cart:", id);
}

button.addEventListener('click', display);