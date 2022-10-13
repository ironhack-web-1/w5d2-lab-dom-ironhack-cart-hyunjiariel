// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML; //.textContent
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.getElementsByClassName('subtotal').innerHTML = subtotal;

  //subtotal.createProduct() = subtotal;

  return subtotal;

  //const price = document.getElementsByClassName("price").innerHTML;//extracting values
  //const quantity = document.getElementsByClassName("quantity").innerHTML;
  //... your code goes here
}

//until here

/*for (let i = 0; i < 7; ++i) { //in order to not repeat each step put it in a for loop
  const step = await obtainInstruction("broccoli", i); //to add value of await inside 
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`; */

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  console.log('Calculate Prices clicked!');
  // end of test

  // ITERATION 2
  function calculateAll() {
    // ...
  }
  // ITERATION 3
  return updateSubtotal();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  <table>
    <tbody></tbody>
    <tfoot>
      <tr class="create-product">
        <td>
          <input type="text" placeholder="Product Name" />
        </td>
        <td>
          <input type="number" min="0" value="0" placeholder="Product Price" />
        </td>
        <td></td>
        <td></td>
        <td>
          <button id="create" class="btn">
            Create Product
          </button>
        </td>
      </tr>
    </tfoot>
  </table>;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
