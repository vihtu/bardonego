// Getting from HTML
const showItems = document.querySelector('#showItems') // Left
// Right
const showAllItemsValue = document.querySelector('#showAllItemsValue')
const showDelivery = document.querySelector('#showDelivery')
const showTotal = document.querySelector('#showTotal')
const btnGenerateOrder = document.querySelector('#generateOrder')
const qrCodeContainer = document.querySelector('#qrCodeContainer')

// Get cart items from localStorage
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set cart items in localStorage
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Items
let cart
let itemsToShow = '' // Initialize as empty string
let allItemsValue = 0 // Initialize as 0
let deliveryValue = 0 // Set delivery as zero

// Generate Cart
const generateCart = () => {
    const cartItems = getCart()
    cart = []
    allItemsValue = 0 // Reset to ensure no accumulation between runs

    cartItems.forEach(prod => {
        const item = products.find(element => element.id === prod.id) // Ensure item exists in products
        if (item) {
            item.qtd = prod.qtd
            allItemsValue += item.price * item.qtd // Accumulate total
            cart.push(item)
        }
    })

    return cart
}

// Add item to itemsToShow for displaying in the HTML
const addItemToItemsToShow = prod => {
    const price = (prod.price * prod.qtd).toFixed(2).replace('.', ',')
    itemsToShow += `
    <div class="item">
        <img src="${prod.img}" alt="Imagem de um(a) ${prod.name}">
        <div>
            <p class="title">${prod.name}</p>
            <p>${prod.description}</p>
            <div class="bottom">
                <div class="counter">
                    <button onclick="remItem(${prod.id})">-</button>
                    <input type="text" value="${prod.qtd}" disabled>
                    <button onclick="addItem(${prod.id})">+</button>
                </div>
                <p class="price">R$ <span>${price}</span></p>
            </div>
        </div>
    </div>
    <hr>`
}

// Add item to cart and update display
const addItem = id => {
    const cartItems = getCart()
    const newCartItems = cartItems.map(item => {
        return item.id === id ? { id: item.id, qtd: item.qtd + 1 } : item
    })

    setCart(newCartItems)
    init()
}

// Remove item from cart and update display
const remItem = id => {
    const cartItems = getCart()
    const newCartItems = cartItems.reduce((acc, item) => {
        if (item.id === id && item.qtd > 1) {
            acc.push({ id: item.id, qtd: item.qtd - 1 })
        } else if (item.id !== id) {
            acc.push(item)
        }
        return acc
    }, [])

    setCart(newCartItems)
    init()
}

// Initialize cart display
const init = () => {
    const generatedCart = generateCart()
    generatedCart.sort((a, b) => (a.type < b.type ? -1 : a.type > b.type ? 1 : 0))

    itemsToShow = ''
    showItems.innerHTML = ''

    if (generatedCart.length > 0) {
        generatedCart.forEach(data => addItemToItemsToShow(data))
    } else {
        itemsToShow = '<p>Você ainda não adicionou itens no carrinho.</p>'
    }

    showOnPage()
}

// Display updated values on the page
const showOnPage = () => {
    showItems.innerHTML = itemsToShow

    // Display values in the HTML elements
    const totalValue = allItemsValue // Only allItemsValue
    showAllItemsValue.innerHTML = 'R$ ' + allItemsValue.toFixed(2).replace('.', ',')
    showDelivery.innerHTML = '+ R$ 0,00' // Delivery is fixed as 0
    showTotal.innerHTML = 'R$ ' + totalValue.toFixed(2).replace('.', ',')
}

// Generate order for WhatsApp
const generateOrder = () => {
    const generatedCart = generateCart()
    const finalTotal = allItemsValue

    if (generatedCart.length === 0) {
        return noItemsInCart.showToast()
    }

    let cartMessage = 'Boa noite! Gostaria de encomendar: \n'
    generatedCart.forEach(item => {
        cartMessage += `- ${item.qtd}x ${item.name}\n`
    })

    cartMessage += '\nVou retirar no local.'
    cartMessage += `\n\nTotal: R$ ${finalTotal.toFixed(2).replace('.', ',')}`

    const whatsappNumber = '5592985214323'
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(cartMessage)}`
    window.open(whatsappLink, '_blank')

    fetch('/generate_order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cart: generatedCart,
            total: finalTotal.toFixed(2),
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
    })
    .catch(error => {
        console.error('Erro:', error)
    })
}

// Notifications
const itemRemovedNotification = Toastify({
    text: "Produto removido do carrinho de compras.",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: { background: "#FF7F0A", boxShadow: "0 0 160px 0 #0008" }
})

const noItemsInCart = Toastify({
    text: "Não é possível gerar pedido sem ter item no carrinho.",
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: { background: "#FF7F0A", boxShadow: "0 0 160px 0 #0008" }
})

// Event listener for order generation
btnGenerateOrder.addEventListener('click', generateOrder)

init()
