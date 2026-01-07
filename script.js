// slider logic

var img = document.getElementById("1");
var currentImg = 1;
if (img) {
  img.style.display = "block";
}

function playing() {
  if (img) img.style.display = "none";
  currentImg++;
  if (currentImg > 4) {
    currentImg = 1;
  }
  img = document.getElementById(currentImg.toString());
  if (img) img.style.display = "block";
}

var interval;
(function play() {
  interval = setInterval(playing, 2000);
})();

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

if (nextBtn)
  nextBtn.addEventListener("click", () => {
    if (img) img.style.display = "none";
    currentImg++;
    if (currentImg > 4) {
      currentImg = 1;
    }
    img = document.getElementById(currentImg.toString());
    img.style.display = "block";
  });

if (prevBtn)
  prevBtn.addEventListener("click", () => {
    if (img) img.style.display = "none";
    currentImg--;
    if (currentImg <= 0) {
      currentImg = 4;
    }
    img = document.getElementById(currentImg.toString());
    img.style.display = "block";
  });



// Products listing logic

let products = [
  {
    name: "T-Shirt",
    price: 250,
    quantity: 40,
    size: "M",
    category: "Clothing",
    url: "",
  },
  {
    name: "Jeans",
    price: 600,
    quantity: 25,
    size: 32,
    category: "Clothing",
    url: "",
  },
  {
    name: "Running Shoes",
    price: 1200,
    quantity: 15,
    size: 42,
    category: "Footwear",
    url: "",
  },
  {
    name: "Hoodie",
    price: 750,
    quantity: 18,
    size: "L",
    category: "Clothing",
    url: "",
  },
  {
    name: "Wireless Mouse",
    price: 300,
    quantity: 50,
    size: "Standard",
    category: "Electronics",
    url: "",
  },
  {
    name: "Keyboard",
    price: 550,
    quantity: 30,
    size: "Full",
    category: "Electronics",
    url: "",
  },
  {
    name: "Laptop Backpack",
    price: 650,
    quantity: 20,
    size: "L",
    category: "Accessories",
    url: "",
  },
  {
    name: "Water Bottle",
    price: 120,
    quantity: 60,
    size: "1L",
    category: "Home",
    url: "",
  },
  {
    name: "Notebook",
    price: 45,
    quantity: 100,
    size: "A4",
    category: "Accessories",
    url: "",
  },
  {
    name: "Headphones",
    price: 900,
    quantity: 22,
    size: "Over-Ear",
    category: "Electronics",
    url: "",
  },
];
let productsContainer = document.getElementById("products");
function listAllProducts(products) {
  if(productsContainer)
  productsContainer.innerHTML = "";  

  for (let i in products) {
    let product = document.createElement("div");
    product.classList.add("product");

    let img = document.createElement("img");
    img.setAttribute("src", "image/img1.jpg");
    img.setAttribute("width", "500px");
    img.setAttribute("hieght", "750px");
    img.style.margin = "0 0 20px 0";
    product.appendChild(img);

    let newContent = document.createElement("div");
    newContent.textContent = `${products[i].name}`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.textContent = `Price: ${products[i].price}$`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.classList.add("filter-form");
    newContent.style.justifyContent = "space-between";
    newContent.style.width = "450px";
    newContent.style.margin = "50px 0 0 0";

    let addBtn = document.createElement("button");
    let viewBtn = document.createElement("button");

    addBtn.classList.add("filter-btn");
    viewBtn.classList.add("filter-btn");
    addBtn.textContent = "+";
    viewBtn.textContent = "view";

    addBtn.addEventListener('click',function(){
      addToCart(i);
    });
    viewBtn.addEventListener('click',function(){
      window.open('product.html?index='+i,'_blank');
    });

    newContent.appendChild(addBtn);
    newContent.appendChild(viewBtn);

    product.appendChild(newContent);
    if (productsContainer) productsContainer.appendChild(product);
  }
}

function listAll(){
  listAllProducts(products);
}
listAll();
// list products by category
function listProducts(cat) {
  productsContainer.innerHTML = "";
  for (let i in products) {
    if(products[i].category !=cat)continue;

    let product = document.createElement("div");
    product.classList.add("product");

    let img = document.createElement("img");
    img.setAttribute("src", "image/img1.jpg");
    img.setAttribute("width", "500px");
    img.setAttribute("hieght", "750px");
    img.style.margin = "0 0 20px 0";
    product.appendChild(img);

    let newContent = document.createElement("div");
    newContent.textContent = `${products[i].name}`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.textContent = `Price: ${products[i].price}$`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.classList.add("filter-form");
    newContent.style.justifyContent = "space-between";
    newContent.style.width = "450px";
    newContent.style.margin = "50px 0 0 0";

    let addBtn = document.createElement("button");
    let viewBtn = document.createElement("button");

    addBtn.classList.add("filter-btn");
    viewBtn.classList.add("filter-btn");
    addBtn.textContent = "+";
    viewBtn.textContent = "view";

    addBtn.addEventListener('click',function(){
      addToCart(i);
    });
    viewBtn.addEventListener('click',function(){
      window.open('product.html?index='+i,'_blank');
    });

    newContent.appendChild(addBtn);
    newContent.appendChild(viewBtn);

    product.appendChild(newContent);
    if (productsContainer) productsContainer.appendChild(product);
  }
}

function filterByPrice(productsList, price){
  if(!price)return productsList;
  return productsList.filter(product => product.price == price);
}
function filterBySize(productsList, size){
  if(!size)return productsList;
  return productsList.filter(product => product.size == size);
}
function filter(price, size){
  let filteredProducts = products.slice();
  filteredProducts = filterByPrice(filteredProducts, price);
  filteredProducts = filterBySize(filteredProducts, size);

  listAllProducts(filteredProducts);
}

let filterForm = document.getElementById("filter-form");
if(filterForm){
  filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let price = document.getElementById('filter-price').value;
    let size = document.getElementById('filter-size').value;
    filter(price, size);
  }
  );
}
// User logic

// Load users from localStorage or initialize empty array
let users = []; /* { username, password } */
try {
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) users = JSON.parse(storedUsers);
} catch (e) {
  users = [];
}



let cartItems = []; //{userIndex, productIndex, quantity}
try {
  const storedCartItems = localStorage.getItem('cartItems');
  if(storedCartItems) cartItems = JSON.parse(storedCartItems);
} catch(e) {
  cartItems = [];
}

let currentUser; /* {userIndex, username} */

try{
  const storedCurrentUser = localStorage.getItem('currentUser');
  currentUser = JSON.parse(storedCurrentUser);
} catch(e){
  currentUser = undefined;
}




//               Authentication logic               //

const signupForm = document.getElementById("signup-form");

if (signupForm) {
  
  let signup_username = document.getElementById("signup-username");
  let confirm_password = document.getElementById("confirm-password");
  let signup_password = document.getElementById("signup-password");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Check if passwords match
    if (signup_password.value !== confirm_password.value) {
      alert("Passwords do not match!");
      return;
    }

    // reload users
    try {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) users = JSON.parse(storedUsers);
    } catch (e) {
      console.log('failed to load users');
      users = [];
    }

    for (let i of users) {
      if (i.username == signup_username.value) {
        alert("the username already exist");
        return;
      }
    }
    

    users.push({
      username: signup_username.value,
      password: signup_password.value,
    });
    // Save users to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
  });
}

// Login page behavior (only run when login form is present)
const loginForm = document.getElementById("login-form");
if (loginForm) {
  let login_username = document.getElementById("login-username");
  let login_password = document.getElementById("login-password");

  // Reload users 
  try {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) users = JSON.parse(storedUsers);
  } catch (e) {
    console.log('failed to load users');
    users = [];
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i in users) {
      if (
        users[i].username == login_username.value &&
        users[i].password == login_password.value
      ) {
        currentUser = {
          userIndex: i,
          username: users[i].username,
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = "home.html";
        return;
      }
    }
    alert("wrong username or password");
  });
}

function logout(){
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}



//          Cart items listing            //

try {
  const storedCartItems = localStorage.getItem('cartItems');
  cartItems = JSON.parse(storedCartItems);
} catch(e){
  cartItems = []; //{userIndex, productIndex, quantity}
}

function addToCart(productIndex){
  console.log("trying to load cartItems"  );
    try {
      const storedCartItems = localStorage.getItem('cartItems');
      cartItems = [];
      if(storedCartItems) cartItems = JSON.parse(storedCartItems);
    } catch(e) {
    }
  for(let i in cartItems){
    if(cartItems[i].userIndex == currentUser.userIndex){
      if(cartItems[i].productIndex == productIndex){
        cartItems[i].quantity = 1 + cartItems[i].quantity;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return;
      }
    }
  }
    cartItems.push({
      userIndex : currentUser.userIndex, 
      'productIndex': productIndex,
      quantity: 1
    });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


//------------- list in cart --------------//

let cart_Container = document.getElementById("cartItemsBlock");
if (cart_Container) {
  cart_Container.innerHTML = '';
  // Load cart items from localStorage
  try {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) cartItems = JSON.parse(storedCartItems);
  } catch (e) {
    cartItems = [];
  }
  // Load current user
  try {
    const storedCurrentUser = localStorage.getItem('currentUser');
    if (storedCurrentUser) currentUser = JSON.parse(storedCurrentUser);
  } catch (e) {
    currentUser = undefined;
  }
  // Render cart items for current user
  let hasItems = false;
  if (cartItems && currentUser) {
    let total =0;
    for (let i of cartItems) {
      if (i.userIndex == currentUser.userIndex) {
        hasItems = true;
        let product = document.createElement("div");
        product.classList.add("product-cart");
        product.innerHTML = `<span>${products[i.productIndex].name}</span>  <span>Quantity: ${i.quantity}</span> <span>Price: ${products[i.productIndex].price*i.quantity}</span>`;
        cart_Container.appendChild(product);
        total += products[i.productIndex].price*i.quantity;
      }
    }
   let totalContainer =  document.getElementById('cartTotalBlock');
   if(totalContainer) totalContainer.textContent = `Total: ${total}$`
  }
  if (!hasItems) {
    cart_Container.innerHTML = '<div style="text-align:center;color:#888;">Your cart is empty.</div>';
  }
} else {
  console.log('failed to load cart items container');
}

//--------------- checkout & clear buttons -------------//

function clearCart(){
  try {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) cartItems = JSON.parse(storedCartItems);
  } catch (e) {
    cartItems = [];
  }
  for(let i in cartItems){
    if(cartItems[i].userIndex == currentUser.userIndex){
      cartItems[i] = {
        userIndex : undefined,
        productIndex: undefined,
        quantity: undefined
      };
    }
  }
  localStorage.setItem('cartItems',JSON.stringify(cartItems));
  window.location.href = 'cart.html';
}


function checkout(){
  let counter =0;
  try {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) cartItems = JSON.parse(storedCartItems);
  } catch (e) {
    cartItems = [];
  }
  for(let i in cartItems){
    if(cartItems[i].userIndex == currentUser.userIndex){
      cartItems[i] = {
        userIndex : undefined,
        productIndex: undefined,
        quantity: undefined
      };
      counter++;
    }
  }
  if(counter!=0){
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    let totalContainer =  document.getElementById('cartTotalBlock');
   if(totalContainer) totalContainer.textContent = `Total: ${0.00}$`
    cart_Container.innerHTML = `
      <div class="checkout-message">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been successfully placed.</p>
      </div>
    `
  }
}



//--------------- product.html view -------------//

let productContainer = document.getElementById("product-view");

function viewProduct(index) {
    if(productContainer)
    productContainer.innerHTML = "";
    let product = document.createElement("div");
    product.classList.add("product");

    let img = document.createElement("img");
    img.setAttribute("src", "image/img1.jpg");
    img.setAttribute("width", "500px");
    img.setAttribute("hieght", "750px");
    img.style.margin = "0 0 20px 0";
    product.appendChild(img);

    let newContent = document.createElement("div");
    newContent.textContent = `${products[index].name}`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.textContent = `Price: ${products[index].price}$`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.textContent = `Category: ${products[index].category}`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.textContent = `Quantity: ${products[index].quantity}`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.textContent = `Size: ${products[index].size}`;
    product.appendChild(newContent);

    newContent = document.createElement("div");
    newContent.classList.add("filter-form");
    newContent.style.justifyContent = "space-between";
    newContent.style.width = "450px";
    newContent.style.margin = "50px 0 0 0";

    let addBtn = document.createElement("button");

    addBtn.classList.add("filter-btn");
    addBtn.textContent = "+";
    addBtn.style.width = "100%";
    addBtn.addEventListener('click',function(){
      addToCart(index);
    });
    newContent.appendChild(addBtn);

    product.appendChild(newContent);
    if (productContainer) productContainer.appendChild(product);
  
}

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
const productIndex = getQueryParam('index');
if (productIndex !== null) {
  viewProduct(Number(productIndex));
}