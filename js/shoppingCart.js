// Getting from HTML
const showItems = document.querySelector('#showItems') // Left
// Right
const showAllItemsValue = document.querySelector('#showAllItemsValue')
const showTotal = document.querySelector('#showTotal')
const btnGenerateOrder = document.querySelector('#generateOrder')
const qrCodeContainer = document.querySelector('#qrCodeContainer')

// Get
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Items
let cart
let itemsToShow
let allItemsValue

// Functions
const generateCart = () => {
    const cartItems = getCart()

    cart = []
    allItemsValue = 0

    cartItems.forEach(prod => {
        const item = products.find(element => element.id === prod.id)
        item.qtd = prod.qtd

        allItemsValue += item.price * item.qtd
        cart.push(item)
    })

    return cart
}

const addItemToItemsToShow = prod => {
    const price = (prod.price * prod.qtd).toFixed(2).toString().replace('.', ',');

    // Usa diretamente a URL completa do produto
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
    <hr>`;
};

const addItem = id => {
    const cartItems = getCart()
    const newCartItems = []

    cartItems.forEach(item => {
        if (item.id === id)
            newCartItems.push({ id: item.id, qtd: item.qtd + 1 })
        else
            newCartItems.push({ id: item.id, qtd: item.qtd })
    })

    setCart(newCartItems)
    init()
}

const remItem = id => {
    const cartItems = getCart()
    const newCartItems = []

    cartItems.forEach(item => {
        if (item.id === id && item.qtd > 1)
            newCartItems.push({ id: item.id, qtd: item.qtd - 1 })
        else if (item.id === id && item.qtd <= 1)
            itemRemovedNotification.showToast()
        else
            newCartItems.push({ id: item.id, qtd: item.qtd })
    })

    setCart(newCartItems)
    init()
}

const init = () => {
    const generatedCart = generateCart()
    generatedCart.length > 0 && generatedCart.sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0)

    itemsToShow = ''
    showItems.innerHTML = ''

    if (generatedCart.length > 0)
        generatedCart.forEach(data => addItemToItemsToShow(data));
    else
        itemsToShow = '<p>Você ainda não adicionou itens no carrinho.</p>'

    showOnPage()
}

const showOnPage = () => {
    showItems.innerHTML = itemsToShow

    // Exibir apenas o valor total
    showAllItemsValue.innerHTML = 'R$ ' + allItemsValue.toFixed(2).toString().replace('.', ',')
    showTotal.innerHTML = 'R$ ' + allItemsValue.toFixed(2).toString().replace('.', ',')
}

const generateOrder = () => {
    const generatedCart = generateCart()
    const totalValue = allItemsValue

    if (generatedCart.length === 0) {
        return noItemsInCart.showToast()
    }

    let cartMessage = 'oi Gostaria de encomendar: \n'

    generatedCart.forEach(item => {
        cartMessage += `- ${item.qtd}x ${item.name}\n`
    })

    cartMessage += `\n\nTotal: R$ ${totalValue.toFixed(2).toString().replace('.', ',')}`

    // Número do WhatsApp da loja (adicione o número aqui)
    const whatsappNumber = '5592991103230'; // Exemplo de número com o código do país

    // Cria o link para o WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(cartMessage)}`;

    // Redireciona o usuário para o WhatsApp
    window.open(whatsappLink, '_blank');

    // Simulação de chave de pagamento (substitua com a chave real se estiver disponível)
    const paymentKey = Math.random().toString(36).substring(2, 15).toUpperCase();

    // Gera o QR code com o total e a chave de pagamento
    generateQRCode(totalValue.toFixed(2), paymentKey);
}

// Notifications
const itemRemovedNotification = Toastify({
    text: "Produto removido do carrinho de compras.",
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
        background: "#FF7F0A",
        boxShadow: "0 0 160px 0 #0008"
    }
})

const noItemsInCart = Toastify({
    text: "Não é possível gerar pedido sem ter item no carrinho.",
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
        background: "#FF7F0A",
        boxShadow: "0 0 160px 0 #0008"
    }
})

btnGenerateOrder.addEventListener('click', generateOrder)

init()
