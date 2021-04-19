/**
 * Milestone 1
 * Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili
 * Milestone 2
 * Coloriamo le icone per tipo
 * Milestone 3
 * Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */

// Data
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-md',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-friends',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Colors
const colors = [
    '#001858',
    '#8bd3dd',
    '#f582ae',
];

// Container delle icone
const container = document.querySelector('.icons');

// 1. Stampo tutte quante le icone a schermo
// printIcons(icons, container);

// 2. printare icone colorate
const coloredIcons = colorIcons(icons, colors);
printIcons(coloredIcons, container);

// 3. Filter icons
// A. Genero le options per select
const select = document.querySelector('#type');
const types = getType(coloredIcons);
genOption(types, select);

// B. Filtro gli oggetti per tipo
select.addEventListener('change', () => {
    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
});






/***************************************
    FUNCTIONS
***************************************/

/**
 * Print icons on screen
 */

 function printIcons(icons, container) {
    // Genero il markup icone
    let html = '';
    icons.forEach( (icon) => {
        const {family, prefix, name, color} = icon;
        // Aggiungo (senza sovrascrivere) il markup  nell'html
        html += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`;
    });

    // Aggiunta icons al container
    container.innerHTML = html;
}

/**
 * return COLOR ICONS COLLECTION BY TYPE
 */

 function colorIcons(icons, colors) {
    const types = getType(icons);

    // Assegnare un colore per tipo ad ogni icona
    const coloredIcons = icons.map( (icon) => {

        const indexType = types.indexOf(icon.type);

        // uso lo spread operator per copiarmi tutte le proprietà dei vari oggetti e aggiungerci il colore
        return {
            ...icon,
            color: colors[indexType],
        };
    });
    
    return coloredIcons;
}


/**
 * GET ICONS TYPE (in modo univoco)
 */

function getType(icons) {
    // Creo un array vuoto
    const types = [];
    icons.forEach( (icon) => {
        // Se l'array types non include icon.type lo pusho dentro l'array
        if (! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });
    // mi ritorno l'array fuori
    return types;
}

/**
 * GEN OPTION FOR FILTERS
 */

 function genOption(types, select) {
    let options = '';

    types.forEach( (type) => {
        options += `<option value="${type}">${type}</option>`
    });

    // ! non sovrascrivere all, presente di default in html
    select.innerHTML += options;
}


/**
 * FILTER ICON SET
 */

function filterIcons(icons, selected) {
    // Se la categoria selezionata è all esce subito dalla funzione e ritorna tutta la collezione
    if (selected === 'all') {
        return icons;
    }

    const filtered = icons.filter( (icon) => {
        return icon.type === selected;
    });

    return filtered;
}