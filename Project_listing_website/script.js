// 1. Data Database (4 Categories x 10 Products = 40 Total)
const inventory = {
    "Electronics": [
       { name: "MacBook Air M2", seller: "Apple", price: 999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500" },
        { name: "Sony WH-1000XM5", seller: "Sony", price: 348, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
        { name: "iPhone 15 Pro", seller: "Apple", price: 1099, img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500" },
        { name: "Logitech G Pro Mouse", seller: "Logitech", price: 129, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
        { name: "Mechanical Keyboard", seller: "Keychron", price: 90, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" },
        { name: "Samsung Galaxy Watch", seller: "Samsung", price: 299, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
        { name: "Canon EOS R5", seller: "Canon", price: 3899, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
        { name: "JBL Flip 6 Speaker", seller: "JBL", price: 120, img: "https://images.unsplash.com/photo-1589003020619-47a6a11ba9d2?w=500" },
        { name: "Dell UltraSharp 27", seller: "Dell", price: 450, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
        { name: "DJI Mini 4 Pro", seller: "DJI", price: 759, img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500" }
    ],
    "Furniture": [
        { name: "Velvet Green Sofa", seller: "West Elm", price: 1200, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" },
        { name: "Oak Dining Table", seller: "IKEA", price: 450, img: "https://images.unsplash.com/photo-1577145946469-1951ca62bc79?w=500" },
        { name: "Ergonomic Office Chair", seller: "Steelcase", price: 850, img: "https://images.unsplash.com/photo-1505797149-43b007662973?w=500" },
        { name: "Minimalist Bed Frame", seller: "Zinus", price: 320, img: "https://images.unsplash.com/photo-1505693419148-403bb0bd7e82?w=500" },
        { name: "Modern Floor Lamp", seller: "Target", price: 55, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
        { name: "Floating Bookshelf", seller: "Wayfair", price: 150, img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500" },
        { name: "Mid-Century Nightstand", seller: "Amazon", price: 75, img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500" },
        { name: "Glass Coffee Table", seller: "IKEA", price: 110, img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500" },
        { name: "Lounge Bean Bag", seller: "Fatboy", price: 165, img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500" },
        { name: "Industrial Bar Stool", seller: "Ashley", price: 95, img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500" }
    ],
    "Clothing": [
        { name: "Classic Denim Jacket", seller: "Levi's", price: 95, img: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500" },
        { name: "Air Max Sneakers", seller: "Nike", price: 145, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
        { name: "Premium Cotton Tee", seller: "Uniqlo", price: 20, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
        { name: "Yellow Raincoat", seller: "Timberland", price: 110, img: "https://images.unsplash.com/photo-1520639889457-41481f33777d?w=500" },
        { name: "Puffer Winter Jacket", seller: "North Face", price: 280, img: "https://images.unsplash.com/photo-1539533377285-b31ee2e42487?w=500" },
        { name: "Floral Summer Dress", seller: "Zara", price: 55, img: "https://images.unsplash.com/photo-1572804013307-59c8ffb311b2?w=500" },
        { name: "Patterned Scarf", seller: "Burberry", price: 350, img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500" },
        { name: "Retro Sunglasses", seller: "Ray-Ban", price: 175, img: "https://images.unsplash.com/photo-1511499767390-90342f567217?w=500" },
        { name: "Vintage Baseball Cap", seller: "Adidas", price: 30, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500" },
        { name: "Knitted Wool Sweater", seller: "H&M", price: 45, img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500" }
    ],
    "Groceries": [
        { name: "Pure Organic Honey", seller: "Nature's Way", price: 14, img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500" },
        { name: "Fresh Milk", seller: "DairyPure", price: 5, img: "https://images.unsplash.com/photo-1563636619-e910f01859ec?w=500" },
        { name: "Farm Strawberries", seller: "LocalFarm", price: 7, img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
        { name: "Artisan Sourdough", seller: "WildBakes", price: 9, img: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=500" },
        { name: "Italian Olive Oil", seller: "Filippo", price: 25, img: "https://images.unsplash.com/photo-1474979266404-7eaacbacf82a?w=500" },
        { name: "Hass Avocados", seller: "Haas", price: 8, img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500" },
        { name: "Dark Roast Coffee", seller: "Peet's", price: 18, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500" },
        { name: "Belgian Chocolate", seller: "Godiva", price: 12, img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500" },
        { name: "Greek Style Yogurt", seller: "Fage", price: 6, img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500" },
        { name: "Matcha Green Tea", seller: "Encha", price: 22, img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500" }
    ]
};

// 2. State Variables
let currentCategory = "Electronics";
let productIndex = 0;

/**
 * Renders the single product card based on the current state.
 */
function renderProduct() {
    const displayContainer = document.getElementById('product-display');
    const product = inventory[currentCategory][productIndex];
    
    // Injecting HTML into the display container
    displayContainer.innerHTML = `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <h2>${product.name}</h2>
            <p class="brand-name">Brand: ${product.seller}</p>
            <p class="price-tag">$${product.price.toLocaleString()}</p>
            <button class="buy-now-btn" onclick="alert('Item added to cart!')">Add to Cart</button>
        </div>
    `;
    
    // Updating the visual counter
    document.getElementById('counter').innerText = `Item ${productIndex + 1} of 10 in ${currentCategory}`;
}

/**
 * Moves to the next or previous product in the current category.
 * @param {number} direction - Either 1 (next) or -1 (previous).
 */
function changeProduct(direction) {
    const currentList = inventory[currentCategory];
    // Mathematical modulo to handle negative wraps correctly
    productIndex = (productIndex + direction + currentList.length) % currentList.length;
    renderProduct();
}

/**
 * Switches the active category and resets the product index.
 * @param {string} catName - Name of the category to load.
 * @param {HTMLElement} element - The button element that was clicked.
 */
function setCategory(catName, element) {
    currentCategory = catName;
    productIndex = 0; // Always start at the first item of a new category
    
    // UI Update: Toggle the 'active' class on tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    
    renderProduct();
}

// 3. Initial Execution
// This runs as soon as the page loads to show the first item.
window.onload = renderProduct;