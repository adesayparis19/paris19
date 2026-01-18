// Charger et afficher les coffee shops dynamiquement
async function loadAllCoffeeShops() {
    try {
        // Liste des fichiers coffee shops
        const shopFiles = [
            'oh-my-cappuccino',
            'koko-coffee-shop',
            'buna-bet-cafe-366',
            'noa-cafe',
            'mardi',
            'epicentre-coffee-shop',
            'koni-coffee',
            'bambin-coffee-shop'
        ];
        
        const shops = [];
        
        // Charger chaque fichier
        for (const file of shopFiles) {
            try {
                const response = await fetch(`/data/coffee-shops/${file}.json`);
                const shop = await response.json();
                shops.push(shop);
            } catch (err) {
                console.log(`Fichier ${file} non trouvé, ignoré`);
            }
        }
        
        // Séparer par section
        const shops19e = shops.filter(s => s.section === '19e');
        const shopsProx = shops.filter(s => s.section === 'proximite');
        
        // Afficher
        renderShops('main-shops', shops19e);
        if (shopsProx.length > 0) {
            renderShops('prox-shops', shopsProx);
        }
        
    } catch (error) {
        console.error('Erreur chargement:', error);
    }
}

function renderShops(containerId, shops) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = shops.map(shop => `
        <article class="shop-card">
            <div class="shop-image">☕</div>
            <div class="shop-content">
                <div class="shop-header">
                    <h2 class="shop-name">${shop.name}</h2>
                    <p class="shop-neighborhood">${shop.neighborhood}</p>
                </div>
                <div class="shop-tags">
                    ${shop.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <p class="shop-description">${shop.description}</p>
                <div class="shop-details">
                    <div class="detail-item">
                        <span class="detail-label">Adresse</span>
                        <span class="detail-value">${shop.address}</span>
                    </div>
                    ${shop.metro ? `<div class="detail-item"><span class="detail-label">Métro</span><span class="detail-value">${shop.metro}</span></div>` : ''}
                    ${shop.hours ? `<div class="detail-item"><span class="detail-label">Horaires</span><span class="detail-value">${shop.hours}</span></div>` : ''}
                    ${shop.ambiance ? `<div class="detail-item"><span class="detail-label">Ambiance</span><span class="detail-value">${shop.ambiance}</span></div>` : ''}
                </div>
            </div>
        </article>
    `).join('');
}

// Lancer au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllCoffeeShops);
} else {
    loadAllCoffeeShops();
}
