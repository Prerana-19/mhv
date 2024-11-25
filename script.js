const products = [{
    id: 1,
    name: "Mysore Silk Saree",
    price: 49.99,
    img: "https://images.jdmagicbox.com/quickquotes/images_main/-5y01sopd.jpg",
    description: "Traditional Mysore Silk ."
},
{
    id: 2,
    name: "Saturn Saree",
    price: 39.99,
    img: "https://kreationbykj.in/cdn/shop/files/PMP06550.jpg?v=1707154774&width=533",
    description: "The Saturn Saree in wine satin features a stone-studded border, perfect for sunny days."
},
{
    id: 3,
    name: "Cotton Saree",
    price: 29.99,
    img: "https://m.theblockart.com/ImageStorage/BA2028112022072201506180.jpeg",
    description: "A Cotton Saree is lightweight, breathable, and perfect for everyday wear."
},
{
    id: 4,
    name: "Tissue Silk Saree",
    price: 89.99,
    img: "https://assets.panashindia.com/media/catalog/product/cache/1/small_image/306x427/9df78eab33525d08d6e5fb8d27136e95/6/7/6747sr10-jodha-84010.jpg",
    description: "A *Tissue Silk Saree* is lightweight with a soft sheen, ideal for festive occasions."
},
{
    id: 5,
    name: "Satin Silk Saree",
    price: 39.99,
    img: "https://staticm247.kalkifashion.com/media/catalog/product/y/e/yellow_printed_satin_saree_with_embroidered_detail_and_unsti-sg182296_8_.jpg",
    description: "A satin silk saree is a smooth, glossy, and elegant blend of satin and silk."
},
{
    id: 6,
    name: "Half Saree",
    price: 59.99,
    img: "https://anayadesignerstudio.com/cdn/shop/files/halfsaree1.webp?v=1714631940&width=1946",
    description: "A half saree is a traditional outfit with a skirt, blouse, and draped dupatta."
},
{
    id: 7,
    name: "Designer Saree",
    price: 49.99,
    img: "https://mysilklove.com/cdn/shop/products/Mslb3_053d4524-cc80-4f8a-9630-3f572fe22212.jpg?v=1664974521&width=1000",
    description: "A designer saree is a stylish, intricately designed saree with unique patterns and embellishments."
},
{
    id: 8,
    name: "kanjeevaram Silk",
    price: 79.99,
    img: "https://www.studio149fashion.com/cdn/shop/files/Untitleddesign_22.png?v=1717481109",
    description: "Kanjeevaram silk is a luxurious, handwoven fabric known for its rich texture and vibrant colors."
},
{
    id: 9,
    name: "Pastel Jhumka",
    price: 24.99,
    img: "https://baublelove.in/cdn/shop/files/DSC09361-_1.jpg?v=1705051849&width=2048",
    description: "Pastel jhumkas are delicate earrings with soft pastel hues and intricate designs."
},
{
    id: 10,
    name: "Afgani Jhumka",
    price: 34.99,
    img: "https://images.meesho.com/images/products/316791308/vvmgc_512.webp",
    description: "Afgani jhumkas are bold, intricately designed earrings inspired by Afghan jewelry."
},
{
    id: 11,
    name: "Combo Jewellery",
    price: 59.99,
    img: "https://assets0.mirraw.com/images/12935445/IMG_9205_copy_long_webp.webp?1730375673",
    description: "Combo jewelry is a coordinated set of matching earrings, necklaces, and bracelets."
},
{
    id: 12,
    name: "Oxidised Jewellery Set",
    price: 39.99,
    img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/12361312/2022/8/6/ae055ea7-6e08-45a7-916e-d4f7be3788951659770103954PriyaasiOxidisedSilver-PlatedGermanSilverJewellerySet2.jpg",
    description: "An oxidised jewellery set features dark, antique-style pieces with a vintage finish."
}
];

const productList = document.getElementById("shop");
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalAddToCart = document.getElementById("modal-add-to-cart");
const closeModal = document.getElementById("close-modal");

const cartModal = document.getElementById("cart-modal");
const cartButton = document.getElementById("cart-button");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = [];
let cartCount = 0;

// Render products
products.forEach(product => {
    const productHTML = `
        <article class="product-item">
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="btn" onclick="viewDetails(${product.id})">View Details</button>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </article>
    `;
    productList.innerHTML += productHTML;
});

// View details function
function viewDetails(id) {
    const product = products.find(product => product.id === id);
    modalTitle.textContent = product.name;
    modalImage.src = product.img;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    modalDescription.textContent = product.description;
    modal.classList.remove("hidden");
    modal.classList.add("visible");
}

// Add to cart function
function addToCart(id) {
    const product = products.find(product => product.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Update cart display
function updateCart() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").textContent = cartCount;

    cartItems.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartItems.innerHTML += `
            <li>
                ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
            </li>
        `;
    });

    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Open cart modal
cartButton.addEventListener("click", () => {
    cartModal.classList.remove("hidden");
    cartModal.classList.add("visible");
});

// Close cart modal
closeCart.addEventListener("click", () => {
    cartModal.classList.add("hidden");
    cartModal.classList.remove("visible");
});

// Close product modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
});

