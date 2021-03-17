let cart = []

let products = [
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-1"},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "man-perfume", reference: "2"},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "man-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "man-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: ""},
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: ""},
  {title: "", image: "", description: "", price: "", category: "", subCategory: "", reference: ""}
]

products.forEach((product, index) => {
  console.log(index)
  $('#products .row').append(
    $('<div class="col ' + product.category + ' ' + product.subCategory + '">' +
        '<div class="card h-100 text-center" data-ref="' + index + '">' +
          '<img src="' + product.image + '" class="card-img-top" alt="...">' +
          '<div class="card-body d-flex flex-column justify-content-between">' +
            '<h3 class="card-title fs-4">' + product.title + '</h3>' +
            '<p class="card-text text-success">' + product.description + '</p>' +
            '<p class="price text-danger fs-4 fw-bold">' + product.price + ' €</p>' +
            '<a href="#" class="btn btn-primary add-cart">Ajouter au panier</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  )
});

$('.dropdown-item').on('click', function (event) {
  event.preventDefault()
  console.log($(event.currentTarget))
  console.log($(event.currentTarget).data('target'))
  $('.' + $(event.currentTarget).data('target')).show()
  // $('.' + $(event.currentTarget).data('target')).show(500)
  // $('.' + $(event.currentTarget).data('target')).fadeIn(300)
  $('.col:not(.' + $(event.currentTarget).data('target') + ')').hide()
  // $('.col:not(.' + $(event.currentTarget).data('target') + ')').hide(500)
  // $('.col:not(.' + $(event.currentTarget).data('target') + ')').fadeOut(300)
})

$('.card .add-cart').on('click', function(event){
  event.preventDefault()
  console.log($(event.currentTarget).parent().parent().data('ref'))
  let ref = $(event.currentTarget).parent().parent().data('ref')
  cart.push(products[ref])
  console.log(cart)
  
  $('#cart').text(cart.length)
})