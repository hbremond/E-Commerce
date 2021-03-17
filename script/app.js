let cartEntries = []

let products = [
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-1" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "man-perfume", reference: "2" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "man-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "man-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "" },
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "" },
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
  $('.' + $(event.currentTarget).data('category')).show()
  $('.col:not(.' + $(event.currentTarget).data('category') + ')').hide()
})

$('.card .add-cart').on('click', function(event){
  event.preventDefault()
  let referenceProduct = $(event.currentTarget).parent().parent().data('ref')
  let productToAdd = { referenceProduct, quantity: 1 }

  if (cartEntries.findIndex(cartEntry => cartEntry.referenceProduct === referenceProduct) === -1) {
    cartEntries.push(productToAdd)
  } else {
    cartEntries.find(cartEntry => cartEntry.referenceProduct === referenceProduct).quantity++
  }
  
  $('#cart').text(cartEntries.length)
})