// Getting from HTML
const menu = document.querySelector('#showMenu')
const promotions = document.querySelector('#showPromotions')

// Buttons show menu
const showAll = document.querySelector('#showAll')
const showSnacks = document.querySelector('#showSnacks')
const showCombos = document.querySelector('#showCombos')
const showPortions = document.querySelector('#showPortions')
const showDrinks = document.querySelector('#showDrinks')

// Functions
const clearItems = type => {
    if (type === 'normal')
        menu.innerHTML = ''
    else
        promotions.innerHTML = ''
}

const removeClasses = () => {
    showAll.classList.remove('active')
    showSnacks.classList.remove('active')
    showCombos.classList.remove('active')
    showPortions.classList.remove('active')
    showDrinks.classList.remove('active')
}

const checkIfHaveItem = items => {
    if (items === '')
        menu.innerHTML = '<p>Nenhum produto encontrado!</p>'
    else
        menu.innerHTML = items
}

const addItemToArray = prod => {
    let price = prod.price.toFixed(2).toString().replace('.', ',')
    
    // Usar URL completa se estiver no objeto, caso contrário usar caminho local
    let imageUrl = prod.img.startsWith('http') ? prod.img : `./img/${prod.img}`;

    // Adicionando o item
    return `
        <div class="card">
            <div>
                <div class="cardImg">
                    <img src="${imageUrl}" alt="Imagem de um(a) ${prod.name}">
                </div>
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div>
                <p class="price">R$ <span>${price}</span></p>
                <button class="btn" onclick="addToCart(${prod.id})">
                    <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                </button>
            </div>
        </div>`
}

const showProducts = type => {
    let items = '' // Inicializando items aqui para evitar sobreposição de dados
    clearItems('normal')

    if (type === 0) {
        products.forEach(prod => {
            if (prod.lastPrice === 0)
                items += addItemToArray(prod)
        })
    } else {
        products.forEach(prod => {
            if (prod.type === type && prod.lastPrice === 0)
                items += addItemToArray(prod)
        })
    }

    checkIfHaveItem(items)
    removeClasses()

    // Atualizando classes de botão ativo
    switch (type) {
        case 0: showAll.classList.add('active'); break;
        case 1: showSnacks.classList.add('active'); break;
        case 2: showCombos.classList.add('active'); break;
        case 3: showPortions.classList.add('active'); break;
        case 4: showDrinks.classList.add('active'); break;
    }
}

const allPromotions = () => {
    let items = '' // Inicializando items aqui também
    clearItems('promotions')

    products.forEach(prod => {
        if (prod.lastPrice && prod.lastPrice != 0) {
            let price = prod.price.toFixed(2).toString().replace('.', ',')
            let lastPrice = prod.lastPrice.toFixed(2).toString().replace('.', ',')

            let imageUrl = prod.img.startsWith('http') ? prod.img : `./img/${prod.img}`

            items += `
            <div class="card">
                <div>
                    <div class="cardImg">
                        <img src="${imageUrl}" alt="Imagem de um(a) ${prod.name}">
                    </div>
                    <h4>${prod.name}</h4>
                    <p>${prod.description}</p>
                </div>
                <div>
                    <p class="lastPrice">R$ <span>${lastPrice}</span></p>
                    <p class="price">R$ <span>${price}</span></p>
                    <button class="btn" onclick="addToCart(${prod.id})">
                        <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                    </button>
                </div>
            </div>`
        }
    })

    if (items === '')
        promotions.innerHTML = '<p>Nenhuma promoção hoje, tente novamente amanhã! =(</p>'
    else
        promotions.innerHTML = items
}

// Capturing button clicks
showAll.addEventListener('click', function () { showProducts(0) })
showSnacks.addEventListener('click', function () { showProducts(1) })
showCombos.addEventListener('click', function () { showProducts(2) })
showPortions.addEventListener('click', function () { showProducts(3) })
showDrinks.addEventListener('click', function () { showProducts(4) })

// Initial load
showProducts(0)
allPromotions()
