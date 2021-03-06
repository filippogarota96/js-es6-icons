// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// milestone 1
// appendo tutte le icone all'html

// Milestone 2
// Coloriamo le icone per tipo

// creo un array con i colori:
const colors = ['red', 'blue', 'green'];

// mappo le categorie di icons
const categories = icons.map((item) => item.category);

// Creo un array in cui le categorie non si ripetano

let iconsCategory = [];
categories.forEach((element) => {
  if (iconsCategory.includes(element) == false) {
    iconsCategory.push(element);
  }
});


//Aggiungo a ogni categoria il suo colore
icons.forEach((icon) => {
  const categoryIndex = iconsCategory.indexOf(icon.category);
  const iconsColor = colors[categoryIndex];
  icon.color = iconsColor;
});

icons.forEach((icon) => {
  const {name, family, category, prefix, color } = icon;
  var html =
  `<div>
  <i class="${family} ${prefix}${name}" style = "color: ${color}"></i>
  <div class="title">${name}</div>
  </div> `;
  $('.icons').append(html);
  // html: `<option value="">${category}</option>`;
  // $('#type').append(html);
});

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
let optionSelect =  $('#type');
iconsCategory.forEach((item) => {
  const option = `<option>${item}</option>`;
  optionSelect.append(option);
});




$( "#type" ).change( function() {
  const selected = $(this).val();
  let filteredIcon = icons.filter((icon) => {
    return icon.category == selected;
  });

  if (filteredIcon.length == 0) {
    filteredIcon = icons;
  }

  $('.icons').html(' ');

  filteredIcon.forEach((icon) => {
    const {name, family, category, prefix, color } = icon;
    var html =
    `<div>
    <i class="${family} ${prefix}${name}" style = "color: ${color}"></i>
    <div class="title">${name}</div>
    </div> `;
    $('.icons').append(html);
    // html: `<option value="">${category}</option>`;
    // $('#type').append(html);
  });
});
