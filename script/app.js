let cartEntries = []

let gifts = [
  { title: "Composition de 4 Gels Douche Concentrés et sa Boîte Verte Effet Kraft", image: "./images/pic-gift1.jpg", description: "Le plaisir des senteurs exotiques", price: "200,00", category: "gift", subCategory: "", reference: "g1"},
  { title: "Composition Soin Visage - Repulpant", image: "./images/pic-gift2.jpg", description: "Pour une peau ferme et repulpée", price: "150,00", category: "gift", subCategory: "", reference: "g2"},
  { title: "Composition Orientale et sa Boîte à Rabat Rose", image: "./images/pic-gift3.jpg", description: "Envoûtez votre peau de notes orientales inspirées du hammam", price: "179,00", category: "gift", subCategory: "", reference: "g3"},
  { title: "Duo Sensuel Plaisirs Nature", image: "./images/pic-gift4.jpg", description: "Le plaisir d'un parfum envoûtant", price: "120,00", category: "gift", subCategory: "", reference: "g4"},
]

gifts.forEach((product) => {

  $('#gifts .row').append(
    $('<div class="col ' + product.category + ' ' + product.subCategory + '">' +
        '<div class="card h-100 text-center" data-ref="' + product.reference + '">' +
        '<a href="https://getbootstrap.com/docs/5.0/components/card/">'+
          '<img src="' + product.image + '" class="card-img-top" alt="...">' +'</a>'+
          '<div class="card-body d-flex flex-column justify-content-between">' +
            '<h3 class="card-title fs-4">' + product.title + '</h3>' +
            '<p class="card-text text-success">' + product.description + '</p>' +
            '<p class="price text-danger fs-4 fw-bold">' + product.price + ' €</p>'+
            '<a href="#" class="btn btn-color text-white add-cart">Ajouter au panier</a>' +
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

recommandation.forEach((product) => {
 
  $('#recommandations .row').append(
    $('<div class="col ' + product.category + ' ' + product.subCategory + '">' +
        '<div class="card h-100 text-center" data-ref="' + product.reference + '">' +
          '<img src="' + product.image + '" class="card-img-top" alt="...">' +
          '<div class="card-body d-flex flex-column justify-content-between">' +
            '<h3 class="card-title fs-4">' + product.title + '</h3>' +
            '<p class="card-text text-success">' + product.description + '</p>' +
            '<p class="price text-danger fs-4 fw-bold">' + product.price + ' €</p>' +
            '<a href="#" class="btn btn-color text-white add-cart">Ajouter au panier</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  )
});

let products = [
  { title: "Comme une Evidence - L'Eau de Parfum 100ml", image: "./images/eau-de-parfum-comme-une-evidence.jpg", description: "L'harmonie d'un parfum pur et essentiel", price: "57,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-1" },
  { title: "Eau de Parfum So Elixir Purple Yves Rocher - 50ml", image: "./images/elixirwoman.jpg", description: "Un élixir de féminité envoutant et charnel", price: "98,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-2" },
  { title: "Eau de Parfum Garden Party - 30ml", image: "./images/primtempsritual.jpg", description: "Venez venez participer à cette fête du primtemps en vous enivrant de parfum commemorant cette saison qu'est le primtemps", price: "88,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-3" },
  { title: "Eau de Parfum Autour de Minuit - 30ml", image: "./images/parfumminuit.jpg", description: "Un sillage pour habiller la nuit et vos sens", price: "157,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-4" },
  { title: "Eau de Parfum Tropicale Tentation - 30ml", image: "./images/perfumtropique.jpg", description: "Quelques gouttes d'exotisme sur ma peau, me faisant voyager vers de nouveaux horizons", price: "79,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-5" },
  { title: "Eau de Parfum Cuir de Nuit - 30ml", image: "./images/parfumcuir.jpg", description: "La naissance d'un désir brûlant", price: "270,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-6" },
  { title: "Eau de Parfum Matin Blanc - 30ml", image: "./images/parfummatinblanc.jpg", description: "La promesse d'un matin ensoleillé", price: "64,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-7" },
  { title: "Eau de Parfum Voile d'Ocre 100 ml", image: "./images/parfumvoileocre.jpg", description: "Une nouvelle sensualité. Fraîche, Lumineuse, Vibrante et unique", price: "66,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-8" },
  { title: "Eau de Parfum Lolita Lempicka - 30ml", image: "./images/lolitalempicka.jpg", description: "Un adorable parfum pour completer votre style lolita", price: "98,00", category: "perfume", subCategory: "woman-perfume", reference: "w-p-9" },
  { title: "Hoggar Eau de Toilette - 100ml", image: "./images/hoggar.jpg", description: "La chaleur d'une eau de toilette orientale et exotique", price: "86,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-1" },
  { title: "Bois pour homme les vrais", image: "./images/parfum homme bois cedre.jpg", description: "Vous voulez être un homme un vrai ce parfum est fait pour vous devenenez des bêtes grace ce musk", price: "250,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-2" },
  { title: "Ambre Noir - Eau de Toilette 100ml", image: "./images/ambrenoir.jpg", description: "Le caractère d'un ambre réchauffé de bois et d'épices parfait pour les fêtes d'hiver", price: "350,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-3" },
  { title: "Comme Une Evidence Homme Eau de Toilette - 50ml", image: "./images/commeuneevidencehomme.jpg", description: "L'équilibre harmonieux des notes florales et boisées vous connectant à la nature", price: "46,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-4" },
  { title: "Cuir Vétiver - Eau de Toilette 100 ml", image: "./images/cuirvetiver.jpg", description: "La sensualité unique d’un Vétiver aux accents cuirés", price: "50,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-5" },
  { title: "Gel douche Bois de Cèdre et Citron vert", image: "./images/geldoucheboiscedre.jpg", description: "Le caractère d'un ambre réchauffé de bois et d'épices parfait pour les fêtes d'hiver", price: "40,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-6" },
  { title: "Eau de Toilette Bois de Sauge - 100ml", image: "./images/boissauge.jpg", description: "L'intensité d'une fraîcheur aromatique", price: "70,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-7" },
  { title: "Cuir Vétiver - Shampooing Douche", image: "./images/ambrenoir.jpg", description: "La sensualité unique d’un Vétiver aux accents cuirés", price: "55,00", category: "perfume", subCategory: "man-perfume", reference: "m-p-8" },
  { title: "BB Crème Sublimatrice 6 en 1", image: "./images/cremesublimatrice.jpg", description: "Une peau parfaite et sublimée en un seul geste", price: "25,00", category: "foundation", subCategory: "woman-perfume", reference: "f-1" },
  { title: "Fond de teint Peau Parfaite 14h* - Zéro Défaut", image: "./images/teintparfait.jpg", description: "Un teint parfait, au grain de peau près PS : Etude clinique objectivée sur 19 femmes", price: "25,00", category: "foundation", reference: "f-2" },
  { title: "Fond de Teint Crème Haute Couvrance - Zéro Defaut", image: "./images/teintzerodefaut.jpg", description: "Un teint parfait & confortable pendant 12 heures", price: "5,00", category: "foundation", reference: "f-3" },
  { title: "Mascara Intense Métamorphose - Noir", image: "./images/mascaranoir.jpg", description: "Un teint parfait & confortable pendant 12 heures", price: "5,00", category: "mascara", reference: "m-1" },
  { title: "Mascara Volume - Noir", image: "./images/mascaravolumenoir.jpg", description: "Révélez un volume naturel", price: "12,00", category: "mascara", reference: "m-2" },
  { title: "Mascara Courbe - Noir", image: "./images/mascaracourbenoir.jpg", description: "Révélez des cils volumineux et recourbés", price: "1,00", category: "mascara", reference: "m-3" },
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
            '<a href="#" class="btn btn-color text-white add-cart">Ajouter au panier</a>' +
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
  console.log(productToAdd )
  let index = cartEntries.findIndex(cartEntry => cartEntry.referenceProduct === referenceProduct)

  if (index !== -1) {
    cartEntries[index].quantity++
  } else {
    cartEntries.push(productToAdd)
  }
  $('#cart').text(cartEntries.length)

 

})
 

