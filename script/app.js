let cartEntries = []

if (localStorage.getItem('panier') != undefined) {
  cartEntries = JSON.parse(localStorage.getItem('panier'));
  $('#cartLength').text(cartEntries.length)
}

let gifts = [
  { title: "Composition de 4 Gels Douche Concentrés et sa Boîte Verte Effet Kraft", image: "./images/pic-gift1.jpg", description: "Le plaisir des senteurs exotiques", price: "200,00", category: "gift", subCategory: "", reference: "g1"},
  { title: "Composition Soin Visage - Repulpant", image: "./images/pic-gift2.jpg", description: "Pour une peau ferme et repulpée", price: "150,00", category: "gift", subCategory: "", reference: "g2"},
  { title: "Composition Orientale et sa Boîte à Rabat Rose", image: "./images/pic-gift3.jpg", description: "Envoûtez votre peau de notes orientales inspirées du hammam", price: "179,00", category: "gift", subCategory: "", reference: "g3"},
  { title: "Duo Sensuel Plaisirs Nature", image: "./images/pic-gift4.jpg", description: "Le plaisir d'un parfum envoûtant", price: "120,00", category: "gift", subCategory: "", reference: "g4"},
]

gifts.forEach((product, index) => {
  $('#gifts .row').append(
    $('<div class="col ' + product.category + ' ' + product.subCategory + '">' +
        '<div class="card h-100 text-center" data-ref="' + product.reference + '" data-index="' + index + '">' +
          '<img src="' + product.image + '" class="card-img-top" alt="...">' +
          '<div class="card-body d-flex flex-column justify-content-between">' +
            '<h3 class="card-title fs-4">' + product.title + '</h3>' +
            '<p class="card-text text-success">' + product.description + '</p>' +
            '<p class="price text-danger fs-4 fw-bold">' + product.price + ' €</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  )
});

let recommandation = [
  { title: "Rouge Vertige Effet Brillant", image: "./images/pic-recom2.jpg", description: "Des lèvres sublimées et nourries", price: "100,00", category: "recomandation", subCategory: "", reference: "g1"},
  { title: "Mon rouge - Eau de Parfum 50ml", image: "./images/pic-recom3.jpg", description: "Aime-Toi D'abord !", price: "70,00", category: "gift", subCategory: "", reference: "g2"},
  { title: "Composition Apaisante et sa Boîte Cadeau Jaune", image: "./images/pic-recom1.jpg", description: "Des senteurs relaxantes", price: "90,00", category: "gift", subCategory: "", reference: "g3"},
  { title: "Lait Corps Hammam Argan Rose - 390ml", image: "./images/pic-recom4.jpg", description: "Des senteurs relaxantes", price: "200,00", category: "gift", subCategory: "", reference: "g4"},
]

recommandation.forEach((product, index) => {
  $('#recommandations .row').append(
    $('<div class="col ' + product.category + ' ' + product.subCategory + '">' +
        '<div class="card h-100 text-center" data-ref="' + product.reference + '" data-index="' + index + '">' +
          '<img src="' + product.image + '" class="card-img-top" alt="...">' +
          '<div class="card-body d-flex flex-column justify-content-between">' +
            '<h3 class="card-title fs-4">' + product.title + '</h3>' +
            '<p class="card-text text-success">' + product.description + '</p>' +
            '<p class="price text-danger fs-4 fw-bold">' + product.price + ' €</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  )
});

let products = [
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "w-p-1" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "man-perfume", reference: "2" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "w-p-2" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "man-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "man-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: 57.99, category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "", image: "", description: "", price: "", category: "", subCategory: "", reference: "" }
]

products.forEach((product) => {
  $('#products .row').append(
    $('<div class="col ' + product.category + ' ' + product.subCategory + '">' +
        '<div class="card h-100 text-center" data-ref="' + product.reference + '">' +
          '<img src="' + product.image + '" class="card-img-top" alt="...">' +
          '<div class="card-body d-flex flex-column justify-content-between">' +
            '<h3 class="card-title fs-4">' + product.title + '</h3>' +
            '<p class="card-text text-success">' + product.description + '</p>' +
            '<p class="price text-danger fs-4 fw-bold">' + product.price.toString().replace(/\./, ',') + ' €</p>' +
            '<a href="#" class="btn btn-primary add-cart">Ajouter au panier</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  )
})

$('.dropdown-item').on('click', function (event) {
  event.preventDefault()
  $('#home').hide()
  $('#products').show()
  $('#products h2').text($(event.currentTarget).text().toUpperCase())
  $('.' + $(event.currentTarget).data('category')).show()
  $('.col:not(.' + $(event.currentTarget).data('category') + ')').hide()
})

$('.card .add-cart').on('click', function(event){
  event.preventDefault()
  let referenceProduct = $(event.currentTarget).parent().parent().data('ref')
  let productToAdd = { referenceProduct, quantity: 1 }

  let index = cartEntries.findIndex(cartEntry => cartEntry.referenceProduct === referenceProduct)
  
  if (index !== -1) {
    if (cartEntries[index].quantity < 10) {
      cartEntries[index].quantity++
    }
  } else {
    cartEntries.push(productToAdd)
  }
  
  let cart_json = JSON.stringify(cartEntries)
  localStorage.setItem("panier", cart_json)

  $('#cartLength').text(cartEntries.length)
})

$('.cartButton').on('click', function(){
  let cartLocalStorage = JSON.parse(localStorage.getItem('panier'));

  $('#cartModal table tbody').html("")

  cartLocalStorage.forEach(cartProduct => {
    let product = products.find(product => product.reference === cartProduct.referenceProduct)
    let priceTotal = (parseFloat(product.price) * 1000 * cartProduct.quantity / 1000).toFixed(2).toString().replace(/\./, ',')

    $('#cartModal table tbody').append(
      $(`<tr id="productCart${product.reference}" data-ref="${product.reference}">
          <td><img src="${product.image}" alt=""></td>
          <td>
            <h4 class="fs-5">${product.title}</h4>
            <p>Ref. : <span class="refProduct">${product.reference}</span></p>
          </td>
          <td><select name="quantity" class="quantity form-select"></select></td>
          <td><p class="price text-danger fs-4 fw-bold">${priceTotal} €</p></td>
          <td><a href="#" title="supprimer l'article" class="link-dark fs-4 deleteProduct"><i class="far fa-trash-alt"></i></a></td>
        </tr >`
      )
    )

    for (let i = 1; i <= 10; i++) {
      if (cartProduct.quantity == i) {
        $(`#productCart${product.reference} select`).append($(`<option value="${i}" selected>${i}</option>`))
      } else {
        $(`#productCart${product.reference} select`).append($(`<option value="${i}">${i}</option>`))
      }
    }
  })

  $(`#cartModal tr td select.quantity`).on('change', function () {
    let newQuantity = $(this).val()
    let referenceProduct = $(this).parent().parent().data("ref")

    let index = cartEntries.findIndex(cartEntry => cartEntry.referenceProduct === referenceProduct)
    cartEntries[index].quantity = newQuantity
    let cart_json = JSON.stringify(cartEntries)
    localStorage.setItem("panier", cart_json)

    let product = products.find(product => product.reference === referenceProduct)
    let newPrice = (parseFloat(product.price) * 1000 * newQuantity / 1000).toFixed(2).toString().replace(/\./, ',')
    $(`tr#productCart${referenceProduct} .price`).text(newPrice + " €")
  })

  $(`#cartModal tr td .deleteProduct`).on('click', function () {
    console.log($(this).parent().parent().data("ref"))
  })
})

