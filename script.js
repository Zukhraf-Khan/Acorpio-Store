// --- Product Data ---
// In a real app, this would come from a database or API
const products = [
    {
        id: 1,
        name: "Ultra-Slim Laptop Sleeve 15.6",
        category: "laptops",
        price: 29.99,
        rating: 4,
        image: "https://www.vhv.rs/dpng/d/427-4277293_computer-mouse-png-transparent-png.png"
    },
    {
        id: 2,
        name: "Wireless Mouse for Laptop",
        category: "laptops",
        price: 19.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    },
    {
        id: 3,
        name: "Universal Laptop Charger 65W",
        category: "laptops",
        price: 35.50,
        rating: 4,
        image: "https://w7.pngwing.com/pngs/886/766/png-transparent-laptop-dell-battery-charger-ac-adapter-laptop-power-adapter-computer-adapter-laptop-thumbnail.png"
    },
    {
        id: 4,
        name: "Anti-Scratch Phone Case (Black)",
        category: "mobiles",
        price: 15.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Tempered Glass Screen Protector",
        category: "mobiles",
        price: 9.99,
        rating: 4,
        image: "https://png.pngtree.com/png-clipart/20250601/original/pngtree-smartphone-with-screen-protector-installation-mobile-device-protection-tempered-glass-transparent-png-image_21105230.png"
    },
    {
        id: 6,
        name: "Fast Charging USB-C Cable",
        category: "mobiles",
        price: 12.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 7,
        name: "Leather Laptop Bag",
        category: "laptops",
        price: 59.99,
        rating: 5,
        image: "https://png.pngtree.com/png-vector/20240522/ourlarge/pngtree-classic-black-leather-laptop-bag-png-image_12500579.png"
    },
    {
        id: 8,
        name: "Mobile Stand Adjustable",
        category: "mobiles",
        price: 18.50,
        rating: 3,
        image: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_2aLOZQMx2W6WgVSzxUaX0EfCHv7ofe6tlTNJJFva.png"
    },
    {
     id: 9,
        name: " Power Bank Phone Stock",
        category: "mobiles",
        price: 3149,
        rating: 4,
        image:"https://media.istockphoto.com/id/1409737619/photo/a-mobile-phone-being-charged-using-a-power-bank-is-on-the-table.jpg?s=612x612&w=0&k=20&c=Z8T2cLqSCItTo3UwbeL-Lx8N4gyjMH7QUvxd_XVuQlU="
    },
    {
     id: 10,
        name: "Laptop Back Covers",
        category: "laptops",
        price: 500,
        rating: 4,
        image:"https://img.drz.lazcdn.com/static/pk/p/3d8811530f7f9ab408d43acb6ca6ce4e.jpg_720x720q80.jpg"
    },
    {
     id: 11,
        name: " Best Headphones 2026",
        category: "mobiles",
        price: 2000,
        rating: 4,
        image:"https://cdn.mos.cms.futurecdn.net/HMCWShKerkfeNQmYYhE3p7.jpg"
    },
    {
     id: 12,
        name: " Mobile Holder",
        category: "mobiles",
        price: 300,
        rating: 4,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa8caCCWUpuOyfP86Op0j_COuD5BAuQt2vA&s"
    },
    {
     id: 13,
        name: " Phone Cases",
        category: "mobiles",
        price: 300,
        rating: 4,
        image:"https://pinkpops.pk/cdn/shop/products/WhatsAppImage2022-05-26at4.31.50PM_1024x1024.jpg?v=1653567384"
    },
    {
     id: 14,
        name: " Waterproof Phone Case",
        category: "mobiles",
        price: 599,
        rating: 4,
        image:"https://5.imimg.com/data5/SELLER/Default/2024/11/465131976/YG/AY/DB/218264904/waterproof-mobile-cover-250x250.jpg"
    },
    {
     id: 15,
        name: " Mobile Popsocket",
        category: "mobiles",
        price: 399,
        rating: 4,
        image:"https://id-test-11.slatic.net/original/0efd547ace09a39f47fbaf902d41c819.png"
    },
    


];


// --- Variables ---
let cartCount = 0;
const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartCountElement = document.getElementById('cart-count');
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// --- Functions ---

// 1. Function to generate star rating HTML
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// 2. Function to render products to the DOM
function renderProducts(category = 'all') {
    // Clear existing products
    productGrid.innerHTML = '';

    // Filter products based on category
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    // Loop through products and create HTML
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="rating">
                    ${getStarRating(product.rating)}
                </div>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                </div>
                <button class="add-to-cart" onclick="addToCart()">
                    Add to Cart
                </button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// 3. Function to handle adding to cart
function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Simple animation for feedback
    cartCountElement.style.transform = "scale(1.5)";
    cartCountElement.style.color = "#febd69";
    setTimeout(() => {
        cartCountElement.style.transform = "scale(1)";
        cartCountElement.style.color = "white";
    }, 200);
    
    alert("Item added to cart!");
}

// --- Event Listeners ---

// 1. Filter Button Clicks
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Render products based on category
        const category = button.getAttribute('data-category');
        renderProducts(category);
    });
});

// 2. Mobile Menu Toggle
if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        if (navLinks.style.display === "flex") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "60px";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.background = "#131921";
            navLinks.style.padding = "20px";
        }
    });
}

// --- Initialization ---
// Render all products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});