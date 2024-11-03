// Getting from HTML
const cartNotify = document.querySelector('.cartNotify')

// Get
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Functions
const addToCart = id => {
    const cart = getCart()
    let wasModified = false

    // Verifica se o item já está no carrinho, caso sim, incrementa a quantidade
    cart.forEach(item => {
        if (item.id === id) {
            item.qtd += 1
            wasModified = true
        }
    })

    // Se o item não estava no carrinho, adiciona ele com quantidade 1
    if (!wasModified) {
        cart.push({ id: id, qtd: 1 })
    }

    // Salva o carrinho atualizado no localStorage
    setCart(cart)
    
    // Mostra notificação de produto adicionado
    notification.showToast()
    
    // Atualiza a notificação do carrinho
    showingNotifications()
}

// Função para exibir a quantidade de itens no ícone do carrinho
const showingNotifications = () => {
    const cart = getCart()
    
    // Calcula a quantidade total de itens no carrinho
    const totalItems = cart.reduce((acc, item) => acc + item.qtd, 0)

    // Se houver itens no carrinho, mostra a quantidade
    if (totalItems > 0) {
        cartNotify.style.display = 'block'
        cartNotify.textContent = totalItems // Exibe o número de itens
    } else {
        cartNotify.style.display = 'none' // Esconde se o carrinho estiver vazio
    }
}

// Notifications
const notification = Toastify({
    text: "Produto adicionado ao carrinho de compras.",
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

// Inicializa a notificação ao carregar a página
showingNotifications()
