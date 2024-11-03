// Types:
// 1 = Snack limpeza
// 2 = Combos biscoito
// 3 = Portions congelados
// 4 = Drinks bebida






const products = [

    {
        id: 103,
        type: 4,
        name: 'bohemia',
        description: 'bohemia lata',
        price: 5.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202310101325_5bs9ls6wut4.jpg?imwidth=256  '
    },
    {
        id: 104,
        type: 4,
        name: 'brama',
        description: 'brama lata.',
        price: 5.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202311031735_ikq2koijty.jpg?imwidth=256'
    },
    {
        id: 105,
        type: 4,
        name: 'Cerveja Itaipava',
        description: 'Cerveja Itaipava',
        price: 5.00,
        lastPrice: 0,
        img: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/183-cerveja-itaipava-pilsen-lata-350ml.jpg?fm=webp&s=46e2646ac4678abc8f29358432883194'
    },
   

    {
        id: 106,
        type: 4,
        name: 'Heineken',
        description: 'Heineken ',
        price: 10.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202307102256_lh2pyvfn79o.jpg?imwidth=256'
    },
   


    {
        id: 107,
        type: 4,
        name: 'brahma ',
        description: 'brahma litrao',
        price: 10.00,
        lastPrice: 0,
        img: 'https://th.bing.com/th/id/OIP.XMn6olQA9MANRN8QwOW3SQHaHa?rs=1&pid=ImgDetMain  '
    },
    {
        id: 108,
        type: 4,
        name: 'bud',
        description: 'bud lata',
        price: 7.00,
        lastPrice: 0,
        img: 'https://th.bing.com/th/id/OIP.1oK0_zNyXzw84-xkasg_KAAAAA?rs=1&pid=ImgDetMain'
    },
    {
        id: 109,
        type: 4,
        name: 'cristal',
        description: 'cristal lata',
        price: 5.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210182204_2ty2ui084qp.jpg?imwidth=256'
    },
   

   
   

    {
        id: 110,
        type: 4,
        name: 'ANTARCTICA 1 LITRO',
        description: 'ANTARCTICA 1 LITRO ',
        price: 10.00,
        lastPrice: 0,
        img: 'https://cdn.irmaospatrocinio.com.br/img/p/1/6/6/5/8/1/166581-large_default.jpg'
    },
   

    {
        id: 111,
        type: 4,
        name: 'Brahma 600ml',
        description: 'Brahma 600ml ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://cdn.formulaexpress.com.br/img/p/1/9/7/197-thickbox_default.jpg'
    },


    {
        id: 112,
        type: 4,
        name: 'Cerveja Skol Pilsen  600ml',
        description: 'Cerveja Skol Pilsen 600ml ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://choppbrahmaexpress.vtexassets.com/arquivos/ids/157318-800-800?v=637891012747770000&width=800&height=800&aspect=true'
    },



    {
        id: 113,
        type: 4,
        name: 'Cerveja  Itaipava',
        description: 'Cerveja  Itaipava Garrafa 1l ',
        price: 10.00,
        lastPrice: 0,
        img: 'https://ibassets.com.br/ib.item.image.large/l-21e21b24f81b4c4193ae7da6036271d7.jpeg'
    },

    {
        id: 114,
        type: 4,
        name: 'Cerveja Antarctica Original 600ml',
        description: 'Cerveja Antarctica Original 600ml ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://th.bing.com/th/id/OIP.absqn_zmYrtJ4LuT3zm68gHaHa?rs=1&pid=ImgDetMain'
    },


    {
        id: 115,
        type: 4,
        name: 'Cerveja Spaten Puro Malte Garrafa 600ml',
        description: 'Cerveja Spaten Puro Malte Garrafa 600ml ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/88940-cerveja-spaten-600ml.jpg?s=0a053dfa79d3daed86edf17a900b2185'
    },


    {
        id: 116,
        type: 4,
        name: 'Cerveja Skol Pack  Lata de 350ml',
        description: 'Cerveja Skol Pack  Lata de 350ml ',
        price: 5.00,
        lastPrice: 0,
        img: 'https://s3-sa-east-1.amazonaws.com/rocky-2790b1b55c6f835a3de8629458121a7f/e982d7682fd52f2114583b3070deb83e.png'
    },



    {
        id: 117,
        type: 4,
        name: 'Chicote – Limão',
        description: 'Chicote – Limão ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://bebidaschiamulera.com.br/wp-content/uploads/2023/07/chic-limao.png'
    },

    {
        id: 118,
        type: 4,
        name: 'Vodka Garrafa 275ml Skarloff Ice Limao',
        description: 'Vodka Garrafa 275ml Skarloff Ice Limao ',
        price: 10.00,
        lastPrice: 0,
        img: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896547500126/img_500_1.png'
    },

    {
        id: 119,
        type: 4,
        name: 'Refrigerante Coca-Cola Retornável 2L',
        description: 'Refrigerante Coca-Cola Retornável 2L ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://avenidab2c.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Favenidab2c.vtexassets.com%2Farquivos%2Fids%2F337104%2FRefrigerante-Coca-Cola-Retornavel-2L.jpg%3Fv%3D638624362239700000'
    },









    {
        id: 120,
        type: 4,
        name: 'Refrigerante Coca Cola 1L ',
        description: 'Refrigerante Coca Cola 1L Retornável ',
        price: 7.00,
        lastPrice: 0,
        img: 'https://cdn.irmaospatrocinio.com.br/img/p/1/6/7/5/6/3/167563-large_default.jpg'
    },


    {
        id: 121,
        type: 4,
        name: 'Refrigerante Guaraná Antarctica 1L',
        description: 'Refrigerante Guaraná Antarctica 1L ',
        price: 7.00,
        lastPrice: 0,
        img: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/4614-refrigerante-guarana-antarctica-1l.jpg?s=2669d390339ae490d3c7b73d3d92fb85'
    },



    {
        id: 122,
        type: 4,
        name: 'Refrigerante Guaraná Antarctica Lata 350ml',
        description: 'Refrigerante Guaraná Antarctica Lata 350ml',
        price: 5.00,
        lastPrice: 0,
        img: 'https://choppbrahmaexpress.vtexassets.com/arquivos/ids/155721-800-800?v=637353454737600000&width=800&height=800&aspect=true'
    },


   



    {
        id: 123,
        type: 4,
        name: 'Refrigerante Guaraná Antarctica 2 L ',
        description: 'Refrigerante Guaraná Antarctica 2 L ',
        price: 8.00,
        lastPrice: 0,
        img: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1885-refrigerante-guarana-antarctica-2l.jpg?fm=webp&s=5f072ed6044c998b281d57a1fddc0c41'
    },

    {
        id: 124,
        type: 4,
        name: 'Refrigerante Coca-Cola Lata 350ml ',
        description: 'Refrigerante Coca-Cola Lata 350ml ',
        price: 5.00,
        lastPrice: 0,
        img: 'https://bretas.vtexassets.com/arquivos/ids/182902-800-auto?v=638375498715330000&width=800&height=auto&aspect=true'
    },



  

    {
        id: 125,
        type: 4,
        name: 'Refrigerante Fanta Laranja Lata 350ml ',
        description: 'Refrigerante Fanta Laranja Lata 350ml',
        price: 5.00,
        lastPrice: 0,
        img: 'https://hiperideal.vtexassets.com/arquivos/ids/197318-800-auto?v=637828722328930000&width=800&height=auto&aspect=true'
    },

    {
        id: 126,
        type: 4,
        name: 'Refrigerante Fanta Uva Lata 350ml',
        description: 'Refrigerante Fanta Uva Lata 350ml',
        price: 5.00,
        lastPrice: 0,
        img: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1997-refrigerante-fanta-uva-lata-350ml.20230712093916.jpg?fm=webp&s=751d02644c4dc1182cfe891c6e31bd4e'
    },



    {
        id: 127,
        type: 4,
        name: 'Refrigerante Bare ',
        description: 'Refrigerante Bare  Lata 350ml',
        price: 5.00,
        lastPrice: 0,
        img: 'https://http2.mlstatic.com/D_Q_NP_2X_703239-MLB77902047341_072024-V.webp '
    },


    {
        id: 130,
        type: 4,
        name: 'Pepsi Lata 350ml ',
        description: 'Pepsi Lata 350ml',
        price: 5.00,
        lastPrice: 0,
        img: 'https://www.auau.com.br/image/cache/data/up_system/product-13806/pepsi-650x650.jpg '
    },




  
    {
        id: 131,
        type: 4,
        name: 'REAL CLASSICO 2LT ',
        description: 'REAL CLASSICO 2LT',
        price: 6.00,
        lastPrice: 0,
        img: 'https://th.bing.com/th/id/OIP.zjcKro7Ie2bZpOR6s1maDwHaHa?rs=1&pid=ImgDetMain'
    },


    {
        id: 132,
        type: 4,
        name: 'GUARANÁ REAL GOLD PET 2LT ',
        description: 'GUARANÁ REAL GOLD PET 2LT',
        price: 6.00,
        lastPrice: 0,
        img: 'https://phygital-files.mercafacil.com/mercadomjr/uploads/produto/guaran_real_gold_pet_2lt_2b0c73d0-99a8-41ca-ba44-d72d73f91f40.png'
    },


    {
        id: 133,
        type: 4,
        name: 'Guaraná Regente Pet 2 Litros ',
        description: 'Guaraná Regente Pet 2 Litros',
        price: 6.00,
        lastPrice: 0,
        img: 'https://bemol.vtexassets.com/arquivos/ids/183227-800-800?v=638537104990330000&width=800&height=800&aspect=true'
    },

    {
        id: 134,
        type: 4,
        name: 'Guaraná Regente Pet 2 Litros ',
        description: 'Guaraná Regente Pet 2 Litros',
        price: 6.00,
        lastPrice: 0,
        img: 'https://th.bing.com/th/id/OIP.ZtV-oinEl_bo3aAG5rQtNAHaHa?rs=1&pid=ImgDetMain'
    },




    {
        id: 1,
        type: 1,
        name: 'Detergente Líquido Lava',
        description: 'Detergente Líquido Lava',
        price: 3.50,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202307060125_6a9zwilxd3u.jpg?imwidth=256'
    },
    {
        id: 2,
        type: 1,
        name: 'Detergente Líquido de Limão',
        description: 'Detergente Líquido de Limão.',
        price: 3.50,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202311021141_wcj7e7cp1tk.jpg?imwidth=256'
    },
    {
        id: 3,
        type: 1,
        name: 'Sabonete em Barra Leite Nivea',
        description: 'Sabonete em Barra Leite Nivea',
        price: 6.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202401161144_pxy1yw99xdr.jpeg?imwidth=256'
    },
   

// 2 
    
    {
        id: 101,
        type: 2,
        name: 'Cookies Maxi Chocolate',
        description: 'Cookies Maxi Chocolate.',
        price: 3.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202403151402_lxi9hcpkff.png?imwidth=256'
    },
    {
        id: 102,
        type: 2,
        name: 'Cookie Bauducco 100g Original',
        description: 'Cookie Bauducco 100g Original.',
        price: 3.00,
        lastPrice: 0,
        img: 'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202403151402_lxi9hcpkff.png?imwidth=256'
    },
   
    // 4
   

    
    
]
