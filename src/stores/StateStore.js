import { writable } from 'svelte/store';

const StateStore = writable([
        {
            name: 'Alameda County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Alpine County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Amador County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Butte County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Calaveras County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Colusa County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Contra Costa County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Del Norte Countyy',
            type: 'County',
            state: 'California'
        },
        {
            name: 'El Dorado County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Fresno County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Glenn County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Humboldt County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Imperial County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Inyo County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Kern County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Kings County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Lake County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Lassen County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Los Angeles County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Madera County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Marin County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Mariposa County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Mendocino County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Merced County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Modoc County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Mono County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Monterey County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Napa County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Nevada County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Orange County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Placer County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Plumas County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Riverside County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Sacramento County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Benito County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Bernardino County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Diego County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Francisco',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Joaquin County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Luis Obispo County County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'San Mateo Countyy',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Santa Barbara County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Santa Clara County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Santa Cruz County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Shasta County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Sierra County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Siskiyou County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Solano County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Sonoma County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Stanislaus County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Sutter County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Tehama County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Trinity County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Tulare County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Tuolumne County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Ventura County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Yolo County',
            type: 'County',
            state: 'California'
        },
        {
            name: 'Yuba County',
            type: 'County',
            state: 'California'
        },
    {
      name:"Los Angeles",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Diego",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Jose",
      type: 'City',
      state: 'California'
    },
    {
      name:"Fresno",
      type: 'City',
      state: 'California'
    },
    {
      name:"Sacramento",
      type: 'City',
      state: 'California'
    },
    {
      name:"Long Beach",
      type: 'City',
      state: 'California'
    },
    {
      name:"Oakland",
      type: 'City',
      state: 'California'
    },
    {
      name:"Bakersfield",
      type: 'City',
      state: 'California'
    },
    {
      name:"Anaheim",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Ana",
      type: 'City',
      state: 'California'
    },
    {
      name:"Riverside",
      type: 'City',
      state: 'California'
    },
    {
      name:"Stockton",
      type: 'City',
      state: 'California'
    },
    {
      name:"Chula Vista",
      type: 'City',
      state: 'California'
    },
    {
      name:"Irvine",
      type: 'City',
      state: 'California'
    },
    {
      name:"Fremont",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Bernardino",
      type: 'City',
      state: 'California'
    },
    {
      name:"Modesto",
      type: 'City',
      state: 'California'
    },
    {
      name:"Fontana",
      type: 'City',
      state: 'California'
    },
    {
      name:"Oxnard",
      type: 'City',
      state: 'California'
    },
    {
      name:"Moreno Valley",
      type: 'City',
      state: 'California'
    },
    {
      name:"Huntington Beach",
      type: 'City',
      state: 'California'
    },
    {
      name:"Glendale",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Clarita",
      type: 'City',
      state: 'California'
    },
    {
      name:"Garden Grove",
      type: 'City',
      state: 'California'
    },
    {
      name:"Oceanside",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rancho Cucamonga",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Rosa",
      type: 'City',
      state: 'California'
    },
    {
      name:"Ontario",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lancaster",
      type: 'City',
      state: 'California'
    },
    {
      name:"Elk Grove",
      type: 'City',
      state: 'California'
    },
    {
      name:"Corona",
      type: 'City',
      state: 'California'
    },
    {
      name:"Palmdale",
      type: 'City',
      state: 'California'
    },
    {
      name:"Salinas",
      type: 'City',
      state: 'California'
    },
    {
      name:"Pomona",
      type: 'City',
      state: 'California'
    },
    {
      name:"Hayward",
      type: 'City',
      state: 'California'
    },
    {
      name:"Escondido",
      type: 'City',
      state: 'California'
    },
    {
      name:"Torrance",
      type: 'City',
      state: 'California'
    },
    {
      name:"Sunnyvale",
      type: 'City',
      state: 'California'
    },
    {
      name:"Orange",
      type: 'City',
      state: 'California'
    },
    {
      name:"Fullerton",
      type: 'City',
      state: 'California'
    },
    {
      name:"Pasadena",
      type: 'City',
      state: 'California'
    },
    {
      name:"Thousand Oaks",
      type: 'City',
      state: 'California'
    },
    {
      name:"Visalia",
      type: 'City',
      state: 'California'
    },
    {
      name:"Simi Valley",
      type: 'City',
      state: 'California'
    },
    {
      name:"Concord",
      type: 'City',
      state: 'California'
    },
    {
      name:"Roseville",
      type: 'City',
      state: 'California'
    },
    {
      name:"Victorville",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Clara",
      type: 'City',
      state: 'California'
    },
    {
      name:"Vallejo",
      type: 'City',
      state: 'California'
    },
    {
      name:"Berkeley",
      type: 'City',
      state: 'California'
    },
    {
      name:"El Monte",
      type: 'City',
      state: 'California'
    },
    {
      name:"Downey",
      type: 'City',
      state: 'California'
    },
    {
      name:"Costa Mesa",
      type: 'City',
      state: 'California'
    },
    {
      name:"Inglewood",
      type: 'City',
      state: 'California'
    },
    {
      name:"Carlsbad",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Buenaventura (Ventura)",
      type: 'City',
      state: 'California'
    },
    {
      name:"Fairfield",
      type: 'City',
      state: 'California'
    },
    {
      name:"West Covina",
      type: 'City',
      state: 'California'
    },
    {
      name:"Murrieta",
      type: 'City',
      state: 'California'
    },
    {
      name:"Richmond",
      type: 'City',
      state: 'California'
    },
    {
      name:"Norwalk",
      type: 'City',
      state: 'California'
    },
    {
      name:"Antioch",
      type: 'City',
      state: 'California'
    },
    {
      name:"Temecula",
      type: 'City',
      state: 'California'
    },
    {
      name:"Burbank",
      type: 'City',
      state: 'California'
    },
    {
      name:"Daly City",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rialto",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Maria",
      type: 'City',
      state: 'California'
    },
    {
      name:"El Cajon",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Mateo",
      type: 'City',
      state: 'California'
    },
    {
      name:"Clovis",
      type: 'City',
      state: 'California'
    },
    {
      name:"Compton",
      type: 'City',
      state: 'California'
    },
    {
      name:"Jurupa Valley",
      type: 'City',
      state: 'California'
    },
    {
      name:"Vista",
      type: 'City',
      state: 'California'
    },
    {
      name:"South Gate",
      type: 'City',
      state: 'California'
    },
    {
      name:"Mission Viejo",
      type: 'City',
      state: 'California'
    },
    {
      name:"Vacaville",
      type: 'City',
      state: 'California'
    },
    {
      name:"Carson",
      type: 'City',
      state: 'California'
    },
    {
      name:"Hesperia",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Monica",
      type: 'City',
      state: 'California'
    },
    {
      name:"Westminster",
      type: 'City',
      state: 'California'
    },
    {
      name:"Redding",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Barbara",
      type: 'City',
      state: 'California'
    },
    {
      name:"Chico",
      type: 'City',
      state: 'California'
    },
    {
      name:"Newport Beach",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Leandro",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Marcos",
      type: 'City',
      state: 'California'
    },
    {
      name:"Whittier",
      type: 'City',
      state: 'California'
    },
    {
      name:"Hawthorne",
      type: 'City',
      state: 'California'
    },
    {
      name:"Citrus Heights",
      type: 'City',
      state: 'California'
    },
    {
      name:"Tracy",
      type: 'City',
      state: 'California'
    },
    {
      name:"Alhambra",
      type: 'City',
      state: 'California'
    },
    {
      name:"Livermore",
      type: 'City',
      state: 'California'
    },
    {
      name:"Buena Park",
      type: 'City',
      state: 'California'
    },
    {
      name:"Menifee",
      type: 'City',
      state: 'California'
    },
    {
      name:"Hemet",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lakewood",
      type: 'City',
      state: 'California'
    },
    {
      name:"Merced",
      type: 'City',
      state: 'California'
    },
    {
      name:"Chino",
      type: 'City',
      state: 'California'
    },
    {
      name:"Indio",
      type: 'City',
      state: 'California'
    },
    {
      name:"Redwood City",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lake Forest",
      type: 'City',
      state: 'California'
    },
    {
      name:"Napa",
      type: 'City',
      state: 'California'
    },
    {
      name:"Tustin",
      type: 'City',
      state: 'California'
    },
    {
      name:"Bellflower",
      type: 'City',
      state: 'California'
    },
    {
      name:"Mountain View",
      type: 'City',
      state: 'California'
    },
    {
      name:"Chino Hills",
      type: 'City',
      state: 'California'
    },
    {
      name:"Baldwin Park",
      type: 'City',
      state: 'California'
    },
    {
      name:"Alameda",
      type: 'City',
      state: 'California'
    },
    {
      name:"Upland",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Ramon",
      type: 'City',
      state: 'California'
    },
    {
      name:"Folsom",
      type: 'City',
      state: 'California'
    },
    {
      name:"Pleasanton",
      type: 'City',
      state: 'California'
    },
    {
      name:"Union City",
      type: 'City',
      state: 'California'
    },
    {
      name:"Perris",
      type: 'City',
      state: 'California'
    },
    {
      name:"Manteca",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lynwood",
      type: 'City',
      state: 'California'
    },
    {
      name:"Apple Valley",
      type: 'City',
      state: 'California'
    },
    {
      name:"Redlands",
      type: 'City',
      state: 'California'
    },
    {
      name:"Turlock",
      type: 'City',
      state: 'California'
    },
    {
      name:"Milpitas",
      type: 'City',
      state: 'California'
    },
    {
      name:"Redondo Beach",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rancho Cordova",
      type: 'City',
      state: 'California'
    },
    {
      name:"Yorba Linda",
      type: 'City',
      state: 'California'
    },
    {
      name:"Palo Alto",
      type: 'City',
      state: 'California'
    },
    {
      name:"Davis",
      type: 'City',
      state: 'California'
    },
    {
      name:"Camarillo",
      type: 'City',
      state: 'California'
    },
    {
      name:"Walnut Creek",
      type: 'City',
      state: 'California'
    },
    {
      name:"Pittsburg",
      type: 'City',
      state: 'California'
    },
    {
      name:"South San Francisco",
      type: 'City',
      state: 'California'
    },
    {
      name:"Yuba City",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Clemente",
      type: 'City',
      state: 'California'
    },
    {
      name:"Laguna Niguel",
      type: 'City',
      state: 'California'
    },
    {
      name:"Pico Rivera",
      type: 'City',
      state: 'California'
    },
    {
      name:"Montebello",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lodi",
      type: 'City',
      state: 'California'
    },
    {
      name:"Madera",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santa Cruz",
      type: 'City',
      state: 'California'
    },
    {
      name:"La Habra",
      type: 'City',
      state: 'California'
    },
    {
      name:"Encinitas",
      type: 'City',
      state: 'California'
    },
    {
      name:"Monterey Park",
      type: 'City',
      state: 'California'
    },
    {
      name:"Tulare",
      type: 'City',
      state: 'California'
    },
    {
      name:"Cupertino",
      type: 'City',
      state: 'California'
    },
    {
      name:"Gardena",
      type: 'City',
      state: 'California'
    },
    {
      name:"National City",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rocklin",
      type: 'City',
      state: 'California'
    },
    {
      name:"Petaluma",
      type: 'City',
      state: 'California'
    },
    {
      name:"Huntington Park",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Rafael",
      type: 'City',
      state: 'California'
    },
    {
      name:"La Mesa",
      type: 'City',
      state: 'California'
    },
    {
      name:"Arcadia",
      type: 'City',
      state: 'California'
    },
    {
      name:"Fountain Valley",
      type: 'City',
      state: 'California'
    },
    {
      name:"Diamond Bar",
      type: 'City',
      state: 'California'
    },
    {
      name:"Woodland",
      type: 'City',
      state: 'California'
    },
    {
      name:"Santee",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lake Elsinore",
      type: 'City',
      state: 'California'
    },
    {
      name:"Porterville",
      type: 'City',
      state: 'California'
    },
    {
      name:"Paramount",
      type: 'City',
      state: 'California'
    },
    {
      name:"Eastvale",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rosemead",
      type: 'City',
      state: 'California'
    },
    {
      name:"Hanford",
      type: 'City',
      state: 'California'
    },
    {
      name:"Highland",
      type: 'City',
      state: 'California'
    },
    {
      name:"Brentwood",
      type: 'City',
      state: 'California'
    },
    {
      name:"Novato",
      type: 'City',
      state: 'California'
    },
    {
      name:"Colton",
      type: 'City',
      state: 'California'
    },
    {
      name:"Cathedral City",
      type: 'City',
      state: 'California'
    },
    {
      name:"Delano",
      type: 'City',
      state: 'California'
    },
    {
      name:"Yucaipa",
      type: 'City',
      state: 'California'
    },
    {
      name:"Watsonville",
      type: 'City',
      state: 'California'
    },
    {
      name:"Placentia",
      type: 'City',
      state: 'California'
    },
    {
      name:"Glendora",
      type: 'City',
      state: 'California'
    },
    {
      name:"Gilroy",
      type: 'City',
      state: 'California'
    },
    {
      name:"Palm Desert",
      type: 'City',
      state: 'California'
    },
    {
      name:"Cerritos",
      type: 'City',
      state: 'California'
    },
    {
      name:"West Sacramento",
      type: 'City',
      state: 'California'
    },
    {
      name:"Aliso Viejo",
      type: 'City',
      state: 'California'
    },
    {
      name:"Poway",
      type: 'City',
      state: 'California'
    },
    {
      name:"La Mirada",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rancho Santa Margarita",
      type: 'City',
      state: 'California'
    },
    {
      name:"Cypress",
      type: 'City',
      state: 'California'
    },
    {
      name:"Dublin",
      type: 'City',
      state: 'California'
    },
    {
      name:"Covina",
      type: 'City',
      state: 'California'
    },
    {
      name:"Azusa",
      type: 'City',
      state: 'California'
    },
    {
      name:"Palm Springs",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Luis Obispo",
      type: 'City',
      state: 'California'
    },
    {
      name:"Ceres",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Jacinto",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lincoln",
      type: 'City',
      state: 'California'
    },
    {
      name:"Newark",
      type: 'City',
      state: 'California'
    },
    {
      name:"Lompoc",
      type: 'City',
      state: 'California'
    },
    {
      name:"El Centro",
      type: 'City',
      state: 'California'
    },
    {
      name:"Danville",
      type: 'City',
      state: 'California'
    },
    {
      name:"Bell Gardens",
      type: 'City',
      state: 'California'
    },
    {
      name:"Coachella",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rancho Palos Verdes",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Bruno",
      type: 'City',
      state: 'California'
    },
    {
      name:"Rohnert Park",
      type: 'City',
      state: 'California'
    },
    {
      name:"Brea",
      type: 'City',
      state: 'California'
    },
    {
      name:"La Puente",
      type: 'City',
      state: 'California'
    },
    {
      name:"Campbell",
      type: 'City',
      state: 'California'
    },
    {
      name:"San Gabriel",
      type: 'City',
      state: 'California'
    },
    {
      name:"Beaumont",
      type: 'City',
      state: 'California'
    },
    {
      name:"Morgan Hill",
      type: 'City',
      state: 'California'
    },
    {
      name:"Culver City",
      type: 'City',
      state: 'California'
    },
    {
      name:"Calexico",
      type: 'City',
      state: 'California'
    },
    {
      name:"Stanton",
      type: 'City',
      state: 'California'
    },
    {
      name:"La Quinta",
      type: 'City',
      state: 'California'
    },
    {
      name:"Pacifica",
      type: 'City',
      state: 'California'
    },
    {
      name:"Montclair",
      type: 'City',
      state: 'California'
    },
    {
      name:"Oakley",
      type: 'City',
      state: 'California'
    },
    {
      name:"Monrovia",
      type: 'City',
      state: 'California'
    },
    {
      name:"Los Banos",
      type: 'City',
      state: 'California'
    },
    {
      name:"Martinez",
      type: 'City',
      state: 'California'
    },
    {
        name: "Portland",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Eugene",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Salem",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Gresham",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Hillsboro",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Beaverton",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Bend",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Medford",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Springfield",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Corvallis",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Albany",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Tigard",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Lake Oswego",
        type: 'City',
        state: 'Oregon'
    },
    {
        name: "Keizer",
        type: 'City',
        state: 'Oregon'
    },
    ]
);

export default StateStore