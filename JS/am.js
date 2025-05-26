const products = [
    {
        title: "Kindle Paperwhite – (previous generation)",
        currentPrice: 84.99,
        listPrice: 159.99,
        averagePrice: 135.99,
        dealType: "Best Price",
         image: "/images/ki.jpg",
        viewLink: "#"
    },
    {
        title: "Apple Pencil (2nd Generation)",
        currentPrice: 99.99,
        listPrice: 129.00,
        averagePrice: 121.19,
        dealType: "Good Deal",
        image: "/images/aaappp.jpg",
        viewLink: "#"
    },
    {
        title: "Beats Solo3 Wireless On-Ear Headphones - Apple W1 Chip",
        currentPrice: 149.99,
        listPrice: 199.95,
        averagePrice: 179.99,
        dealType: "Good Deal",
        image: "/images/hed.png",
        viewLink: "#"
    },
    {
        title: "Western Digital 1TB WD Blue SN550 NVMe SSD",
        currentPrice: 89.99,
        listPrice: 129.99,
        averagePrice: 109.99,
        dealType: "Best Price",
        image: "/images/ssd.png",
        viewLink: "#"
    },
    {
        title: "Epson Home Cinema LS1100 3LCD Ultra HD Projector",
        currentPrice: 1499.00,
        listPrice: 1999.00,
        averagePrice: 1899.10,
        dealType: "Good Deal",
        image: "/images/ep.png",
        viewLink: "#"
    }
];



function displayProducts(productsToShow) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <span class="deal-tag">${product.dealType}</span>
            <div class="product-image-container">
                <img src="${product.image}" 
                     alt="${product.title}" 
                     class="product-image"
                     onerror="this.src='https://via.placeholder.com/320?text=Product+Image'">
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.currentPrice.toFixed(2)}</div>
            <div class="price-info">
                List price: $${product.listPrice.toFixed(2)}<br>
                Average price: $${product.averagePrice.toFixed(2)}
            </div>
            ${product.viewLink ? `<a href="${product.viewLink}" class="view-link">Click here to view this product at Amazon</a>` : ''}
            <button class="buy-button">Buy Now</button>
        `;
        container.appendChild(productCard);
    });
}


function filterProducts(type, event) {
    document.querySelectorAll('.filter-tabs button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    if (type === 'deals') {
        displayProducts(products.filter(p => p.dealType === "Good Deal"));
    } else {
        displayProducts(products);
    }
}


window.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    document.getElementById('all-products').addEventListener('click', (e) => {
        filterProducts('all', e);
    });
    document.getElementById('deals-only').addEventListener('click', (e) => {
        filterProducts('deals', e);
    });
});
