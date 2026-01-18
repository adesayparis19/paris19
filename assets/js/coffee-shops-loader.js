// Script pour charger dynamiquement les coffee shops depuis le fichier JSON

async function loadCoffeeShops() {
    try {
        // Charger le fichier JSON
        const response = await fetch('/data/coffee-shops.json');
        const data = await response.json();
        
        // Séparer les coffee shops du 19e et ceux à proximité
        const shops19e = data.coffeeShops.filter(shop => shop.section === '19e');
        const shopsProximite = data.coffeeShops.filter(shop => shop.section === 'proximite');
        
        // Générer le HTML pour les coffee shops du 19e
        const mainContainer = document.getElementById('coffee-shops-container');
        if (mainContainer) {
            mainContainer.innerHTML = shops19e.map(shop => generateShopCard(shop)).join('');
        }
        
        // Générer le HTML pour les coffee shops à proximité
        const proximiteContainer = document.getElementById('proximite-container');
        if (proximiteContainer && shopsProximite.length > 0) {
            proximiteContainer.innerHTML = shopsProximite.map(shop => generateShopCard(shop)).join('');
        }
        
    } catch (error) {
        console.error('Erreur lors du chargement des coffee shops:', error);
    }
}

function generateShopCard(shop) {
    const priorityStars = '⭐'.repeat(shop.priority);
    const tags = shop.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <article class="shop-card">
            <div class="shop-image">☕</div>
            <div class="shop-content">
                <div class="shop-header">
                    <h2 class="shop-name">${shop.name}</h2>
                    <p class="shop-neighborhood">${shop.neighborhood}</p>
                </div>
                <div class="shop-tags">
                    ${tags}
                    <span class="tag priority">${priorityStars}</span>
                </div>
                <p class="shop-description">
                    ${shop.description}
                </p>
                <div class="shop-details">
                    <div class="detail-item">
                        <span class="detail-label">Adresse</span>
                        <span class="detail-value">${shop.address}</span>
                    </div>
                    ${shop.metro ? `
                    <div class="detail-item">
                        <span class="detail-label">Métro</span>
                        <span class="detail-value">${shop.metro}</span>
                    </div>
                    ` : ''}
                    ${shop.hours ? `
                    <div class="detail-item">
                        <span class="detail-label">Horaires</span>
                        <span class="detail-value">${shop.hours}</span>
                    </div>
                    ` : ''}
                    ${shop.ambiance ? `
                    <div class="detail-item">
                        <span class="detail-label">Ambiance</span>
                        <span class="detail-value">${shop.ambiance}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
        </article>
    `;
}

// Charger les coffee shops au chargement de la page
document.addEventListener('DOMContentLoaded', loadCoffeeShops);
