// LISTA COMPLETA DE PERFUMES ORIGINALES
const perfumes = [
    // --- COLECCIÓN ODYSSEY (ARMAF) ---
    {
        id: 1,
        nombre: "Odyssey Spectra",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Notas de manzana, lavanda, especias cálidas y ámbar.",
        imagen: "img/Odyssey Spectra.jpg"
    },
    {
        id: 2,
        nombre: "Odyssey Aqua",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Toronja, notas marinas, menta fresca y madera de cedro.",
        imagen: "img/Odyssey Aqua.jpg"
    },
    {
        id: 3,
        nombre: "Odyssey Candee",
        marca: "Armaf",
        categoria: "mujer",
        precio: 50,
        notas: "Golosinas, frambuesa, vainilla cremosa y flor de naranjo.",
        imagen: "img/Odyssey Candee.jpg"
    },
    {
        id: 4,
        nombre: "Odyssey Homme White Edition",
        marca: "Armaf",
        categoria: "hombre",
        precio: 40,
        notas: "Yuzu, pimienta rosa, pimienta negra y fondo ahumado.",
        imagen: "img/Odyssey Homme White Edition.jpg"
    },
    {
        id: 5,
        nombre: "Odyssey Homme Clásico",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Iris, vainilla gourmand, ámbar dulce y oriental.",
        imagen: "img/Odyssey Homme Clásico.jpg"
    },
    {
        id: 6,
        nombre: "Odyssey Marshmallow",
        marca: "Armaf",
        categoria: "mujer",
        precio: 45,
        notas: "Malvavisco, azúcar quemada, vainilla y almizcle blanco.",
        imagen: "img/Odyssey Marshmallow.jpg"
    },

    // --- COLECCIÓN CLUB DE NUIT (ARMAF) ---
    {
        id: 7,
        nombre: "Club De Nuit Intense Man",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Limón, piña ahumada, abedul y almizcle legendario.",
        imagen: "img/Club De Nuit Intense Man.jpg"
    },
    {
        id: 8,
        nombre: "Club De Nuit Urban Elixir",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Bergamota, pimienta rosa, pimienta de Sichuan y pachulí.",
        imagen: "img/Club De Nuit Urban Elixir.jpg"
    },
    {
        id: 9,
        nombre: "Club De Nuit Iconic",
        marca: "Armaf",
        categoria: "hombre",
        precio: 55,
        notas: "Toronja, jengibre, menta, incienso y ámbar gris.",
        imagen: "img/Club De Nuit Iconic.jpg"
    },

    // --- COLECCIÓN KHAMRAH (LATTAFA) ---
    {
        id: 10,
        nombre: "Khamrah Clásico",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 50,
        notas: "Canela, nuez moscada, praliné, dátiles y vainilla sensual.",
        imagen: "img/Khamrah Clásico.jpg"
    },
    {
        id: 11,
        nombre: "Khamrah Qahwa",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 50,
        notas: "Café arábigo, canela, cardamomo, praliné y haba tonka.",
        imagen: "img/Khamrah Qahwa.jpg"
    },
    {
        id: 12,
        nombre: "Khamrah Dukhan",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 50,
        notas: "Incienso oriental, especias dulces, dátiles y humo de madera.",
        imagen: "img/Khamrah Dukhan.jpg"
    },
    {
        id: 13,
        nombre: "Khamrah Karaz",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 50,
        notas: "Cereza licorosa, canela dulce, vainilla gourmand y ámbar.",
        imagen: "img/Khamrah Karaz.jpg"
    },
    {
        id: 14,
        nombre: "Khamrah Waha",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 50,
        notas: "Frutas de desierto, especias doradas, miel y resinas árabes.",
        imagen: "img/Khamrah Waha.jpg"
    },

    // --- COLECCIÓN 9 AM & 9 PM (AFNAN) ---
    {
        id: 15,
        nombre: "9 AM Dive",
        marca: "Afnan",
        categoria: "unisex",
        precio: 45,
        notas: "Menta, limón, pimienta rosa, manzana y fondo de cedro.",
        imagen: "img/9 AM Dive.jpg"
    },
    {
        id: 16,
        nombre: "9 AM Femme (Mujer)",
        marca: "Afnan",
        categoria: "mujer",
        precio: 50,
        notas: "Mandarina, flor de naranjo, gardenia y almizcle dulce.",
        imagen: "img/9 AM Femme (Mujer).jpg"
    },
    {
        id: 17,
        nombre: "9 PM Clásico",
        marca: "Afnan",
        categoria: "hombre",
        precio: 40,
        notas: "Manzana verde, canela, lavanda salvaje y vainilla cálida.",
        imagen: "img/9 PM Clásico.jpg"
    },
    {
        id: 18,
        nombre: "9 PM Rebel",
        marca: "Afnan",
        categoria: "hombre",
        precio: 45,
        notas: "Piña madura, mandarina, madera de teca y notas amaderadas.",
        imagen: "img/9 PM Rebel.jpg"
    },
    {
        id: 19,
        nombre: "9 PM Elixir",
        marca: "Afnan",
        categoria: "hombre",
        precio: 45,
        notas: "Concentración nocturna especiada, ámbar negro y vainilla.",
        imagen: "img/9 PM Elixir.jpg"
    },
    {
        id: 20,
        nombre: "9 PM Night Out",
        marca: "Afnan",
        categoria: "hombre",
        precio: 60,
        notas: "Notas festivas cítricas, especias seductoras y maderas nobles.",
        imagen: "img/9 PM Night Out.jpg"
    },

    // --- COLECCIÓN YARA (LATTAFA) ---
    {
        id: 21,
        nombre: "Yara Clásico",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 45,
        notas: "Orquídea, heliotropo, frutas tropicales, vainilla y almizcle.",
        imagen: "img/Yara Clásico.jpg"
    },
    {
        id: 22,
        nombre: "Yara Candy",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 45,
        notas: "Golosinas de fresa, grosella negra, jarabe dulce y vainilla.",
        imagen: "img/Yara Candy.jpg"
    },

    // --- COLECCIÓN HAWAS (RASASI) ---
    {
        id: 25,
        nombre: "Hawas Ice",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 50,
        notas: "Manzana helada, bergamota congelada, ciruela y liquen.",
        imagen: "img/Hawas Ice.jpg"
    },
    {
        id: 26,
        nombre: "Hawas Fire",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 50,
        notas: "Especias ardientes, pimienta, ámbar cálido y madera quemada.",
        imagen: "img/Hawas Fire.jpg"
    },
    {
        id: 27,
        nombre: "Hawas Elixir",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 45,
        notas: "Concentrado intenso acuático, especias de lujo y ámbar gris.",
        imagen: "img/Hawas Elixir.jpg"
    },
    {
        id: 28,
        nombre: "Hawas Cobra",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 45,
        notas: "Notas seductoras nocturnas, cuero, especias y cuero negro.",
        imagen: "img/Hawas Cobra.jpg"
    },
    {
        id: 29,
        nombre: "Hawas Malibu",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 50,
        notas: "Cítricos playeros, brisa marina, coco fresco y maderas del sol.",
        imagen: "img/Hawas Malibu.jpg"
    },

    // --- FRAGANCIAS ORIENTALES & ÁRABES NICHO ---
    {
        id: 30,
        nombre: "Art of Universe (Lattafa)",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 65,
        notas: "Galaxia de notas cósmicas, ámbar cristalino y resinas galácticas.",
        imagen: "img/Art of Universe (Lattafa).jpg"
    },
    {
        id: 31,
        nombre: "Orientica Amber Rouge",
        marca: "Orientica",
        categoria: "unisex",
        precio: 100,
        notas: "Azafrán, jazmín, madera de ámbar y resina de abeto.",
        imagen: "img/Orientica Amber Rouge.jpg"
    },
    {
        id: 32,
        nombre: "Orientica Amber Royal",
        marca: "Orientica",
        categoria: "unisex",
        precio: 100,
        notas: "Ámbar real, cítricos refinados, notas florales y maderas nobles.",
        imagen: "img/Orientica Amber Royal.jpg"
    },
    {
        id: 33,
        nombre: "Al Haramain Amber Oud Gold Edition",
        marca: "Al Haramain",
        categoria: "unisex",
        precio: 65,
        notas: "Bergamota, notas verdes, melón jugoso, piña, ámbar y vainilla.",
        imagen: "img/Al Haramain Amber Oud Gold Edition.jpg"
    },
    {
        id: 34,
        nombre: "Ether Arabian Sky (Armaf)",
        marca: "Armaf",
        categoria: "unisex",
        precio: 60,
        notas: "Cielo oriental, notas de aire puro, especias y madera blanca.",
        imagen: "img/Ether Arabian Sky (Armaf).jpg"
    },
    {
        id: 35,
        nombre: "Fakhar Black (Lattafa)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 35,
        notas: "Manzana verde, jengibre, bergamota, salvia y haba tonka.",
        imagen: "img/Fakhar Black (Lattafa).jpg"
    },
    {
        id: 36,
        nombre: "Eclaire (Lattafa)",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 40,
        notas: "Caramelo cremoso, leche condensada, miel y vainilla pura.",
        imagen: "img/Eclaire (Lattafa).jpg"
    },

    // --- LÍNEA DUMONT, BHARARA & POPULARES ---
    {
        id: 41,
        nombre: "Bharara King",
        marca: "Bharara",
        categoria: "hombre",
        precio: 65,
        notas: "Naranja rey, bergamota, frutas gourmand y vainilla pura.",
        imagen: "img/Bharara King.jpg"
    },
    {
        id: 43,
        nombre: "Rome Extradose (Dumont)",
        marca: "Dumont",
        categoria: "hombre",
        precio: 40,
        notas: "Concentración ultra potente especiada, cítricos y maderas.",
        imagen: "img/Rome Extradose (Dumont).jpg"
    },
    {
        id: 44,
        nombre: "Rome La Bomba (Dumont)",
        marca: "Dumont",
        categoria: "hombre",
        precio: 45,
        notas: "Explosión de frutas cítricas, ámbar dulce y cuero negro.",
        imagen: "img/Rome La Bomba (Dumont).jpg"
    },
    {
        id: 45,
        nombre: "Nitro Red (Dumont)",
        marca: "Dumont",
        categoria: "hombre",
        precio: 45,
        notas: "Sandía jugosa, lavanda fresca, cedro y ámbar amaderado.",
        imagen: "img/Nitro Red (Dumont).jpg"
    },
    {
        id: 46,
        nombre: "Nitro Red Intensely (Dumont)",
        marca: "Dumont",
        categoria: "hombre",
        precio: 60,
        notas: "Sandía concentrada, especias rojas y fondo ahumado.",
        imagen: "img/Nitro Red Intensely (Dumont).jpg"
    },
    {
        id: 47,
        nombre: "Nautica Voyage",
        marca: "Nautica",
        categoria: "hombre",
        precio: 25,
        notas: "Manzana verde recién cortada, flor de loto y mimosa marina.",
        imagen: "img/Nautica Voyage.jpg"
    },
    {
        id: 48,
        nombre: "Blue Seduction (Antonio Banderas)",
        marca: "Antonio Banderas",
        categoria: "hombre",
        precio: 35,
        notas: "Melón de agua, menta helada, bergamota y capuchino.",
        imagen: "img/Blue Seduction (Antonio Banderas).jpg"
    },
    {
        id: 49,
        nombre: "Swiss Army Classic",
        marca: "Victorinox",
        categoria: "hombre",
        precio: 45,
        notas: "Menta fresca, bergamota, lavanda alpina y madera de cedro.",
        imagen: "img/Swiss Army Classic.jpg"
    },

    // --- DISEÑADORES & NICHO PREMIUM ---
    {
        id: 50,
        nombre: "Armaf Tag Uomo Rosso",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Especias rojas, pimienta, cardamomo y maderas orientales.",
        imagen: "img/Armaf Tag Uomo Rosso.jpg"
    },
    {
        id: 51,
        nombre: "Set Armaf Tag Uomo Rosso",
        marca: "Armaf",
        categoria: "hombre",
        precio: 60,
        notas: "Incluye Perfume + Body Spray de lujo Tag Uomo Rosso.",
        imagen: "img/Set Armaf Tag Uomo Rosso.jpg"
    },
    {
        id: 52,
        nombre: "Set Mandarin Sky (Armaf)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 60,
        notas: "Incluye Perfume + Gel de Baño fragante Mandarin Sky.",
        imagen: "img/Set Mandarin Sky (Armaf).jpg"
    },
    {
        id: 55,
        nombre: "Asad Clásico (Lattafa)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 40,
        notas: "Pimienta negra, piña madura, tabaco rubio, café y ámbar.",
        imagen: "img/Asad Clásico (Lattafa).jpg"
    },
    {
        id: 56,
        nombre: "Asad Bourbon (Lattafa)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 45,
        notas: "Licor Bourbon, madera de roble, cacao oscuro y vainilla ahumada.",
        imagen: "img/Asad Bourbon (Lattafa).jpg"
    },
    {
        id: 57,
        nombre: "Asad Elixir (Lattafa)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 45,
        notas: "Concentrado intenso especiada, resina oriental y maderas nobles.",
        imagen: "img/Asad Elixir (Lattafa).jpg"
    },

    {
        id: 58,
        nombre: "Mandarin Sky (Armaf)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Cítrica, Dulce y Amaderada.",
        imagen: "img/mandarin sky.jpg",
    },

];

// LISTA DE PERFUMES 1.1 (RÉPLICAS CALIDAD PREMIUM)
const perfumesReplica = [
    {
        id: 101,
        nombre: "Odyssey Spectra (1:1)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Manzana, lavanda y especias cálidas.",
        imagen: "img/Odyssey Spectra.jpg"
    },
    {
        id: 102,
        nombre: "Odyssey Candee (1:1)",
        marca: "Armaf",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Golosinas, frambuesa y vainilla cremosa.",
        imagen: "img/Odyssey Candee.jpg"
    },
    {
        id: 103,
        nombre: "Odyssey Homme Clásico (1:1)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Iris, vainilla y ámbar oriental.",
        imagen: "img/Odyssey Homme Clásico.jpg"
    },
    {
        id: 104,
        nombre: "Club De Nuit Intense Man (1:1)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Limón, piña ahumada y abedul.",
        imagen: "img/Club De Nuit Intense Man.jpg"
    },
    {
        id: 105,
        nombre: "Club De Nuit Urban Elixir (1:1)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Bergamota, pimienta rosa y pachulí.",
        imagen: "img/Club De Nuit Urban Elixir.jpg"
    },
    {
        id: 106,
        nombre: "Club De Nuit Iconic (1:1)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Toronja, jengibre y incienso.",
        imagen: "img/Club De Nuit Iconic.jpg"
    },
    {
        id: 107,
        nombre: "Khamrah Clásico (1:1)",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Canela, praliné y dátiles dulces.",
        imagen: "img/Khamrah Clásico.jpg"
    },
    {
        id: 108,
        nombre: "Khamrah Qahwa (1:1)",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Café arábigo, cardamomo y haba tonka.",
        imagen: "img/Khamrah Qahwa.jpg"
    },
    {
        id: 109,
        nombre: "Khamrah Dukhan (1:1)",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Incienso oriental y maderas ahumadas.",
        imagen: "img/Khamrah Dukhan.jpg"
    },
    {
        id: 110,
        nombre: "Khamrah Karaz (1:1)",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Cereza licorosa y vainilla gourmand.",
        imagen: "img/Khamrah Karaz.jpg"
    },
    {
        id: 111,
        nombre: "Yara Clásico (1:1)",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Orquídea, frutas tropicales y almizcle.",
        imagen: "img/Yara Clásico.jpg"
    },
    {
        id: 112,
        nombre: "Yara Candy (1:1)",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Golosinas de fresa y grosella negra.",
        imagen: "img/Yara Candy.jpg"
    },
    {
        id: 113,
        nombre: "Art of Universe (1:1)",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 30,
        notas: "Calidad 1:1. Ámbar cristalino y resinas galácticas.",
        imagen: "img/Art of Universe (Lattafa).jpg"
    },
    {
        id: 114,
        nombre: "Eclaire (1:1)",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Caramelo cremoso y leche condensada.",
        imagen: "img/Eclaire (Lattafa).jpg"
    },
    {
        id: 115,
        nombre: "Asad Clásico (1:1)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Pimienta negra, piña y café.",
        imagen: "img/Asad Clásico (Lattafa).jpg"
    },
    {
        id: 116,
        nombre: "Asad Bourbon (1:1)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Licor Bourbon y cacao oscuro.",
        imagen: "img/Asad Bourbon (Lattafa).jpg"
    },
    {
        id: 117,
        nombre: "Asad Elixir (1:1)",
        marca: "Lattafa",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Resinas orientales y maderas nobles.",
        imagen: "img/Asad Elixir (Lattafa).jpg"
    },
    {
        id: 118,
        nombre: "9 AM Femme (1:1)",
        marca: "Afnan",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Mandarina, flor de naranjo y almizcle.",
        imagen: "img/9 AM Femme (Mujer).jpg"
    },
    {
        id: 119,
        nombre: "9 PM Rebel (1:1)",
        marca: "Afnan",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Piña madura y madera de teca.",
        imagen: "img/9 PM Rebel.jpg"
    },
    {
        id: 120,
        nombre: "9 PM Elixir (1:1)",
        marca: "Afnan",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Concentrado nocturno especiado.",
        imagen: "img/9 PM Elixir.jpg"
    },
    {
        id: 121,
        nombre: "Orientica Amber Rouge (1:1)",
        marca: "Orientica",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Azafrán, jazmín y madera de ámbar.",
        imagen: "img/Orientica Amber Rouge.jpg"
    },
    {
        id: 122,
        nombre: "Orientica Amber Royal (1:1)",
        marca: "Orientica",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Ámbar real y cítricos refinados.",
        imagen: "img/Orientica Amber Royal.jpg"
    },
    {
        id: 123,
        nombre: "Amber Oud Gold Edition (1:1)",
        marca: "Al Haramain",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Melón jugoso, piña y ámbar.",
        imagen: "img/Al Haramain Amber Oud Gold Edition.jpg"
    },
    {
        id: 124,
        nombre: "Bharara King Soleil (1:1)",
        marca: "Bharara",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Cítricos luminosos y vainilla gourmand.",
        imagen: "img/Bharara King Soleil.jpg"
    },
    {
        id: 125,
        nombre: "Ariana Grande Cloud (1:1)",
        marca: "Ariana Grande",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Lavanda, coco y crema de batir.",
        imagen: "img/Cloud.jpg"
    },
    {
        id: 126,
        nombre: "Ariana Grande Thank U, Next (1:1)",
        marca: "Ariana Grande",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Frambuesa blanca y macarrón rosa.",
        imagen: "img/Thank U, Next.jpg"
    },
    {
        id: 127,
        nombre: "Invictus Victory (1:1)",
        marca: "Paco Rabanne",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Limón fresco, incienso y haba tonka.",
        imagen: "img/Invictus Victory.jpg"
    },
    {
        id: 128,
        nombre: "Invictus Aqua (1:1)",
        marca: "Paco Rabanne",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Notas marinas, toronja y ámbar gris.",
        imagen: "img/Invictus Aqua.jpg"
    },
    {
        id: 129,
        nombre: "Invictus Clásico (1:1)",
        marca: "Paco Rabanne",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Toronja, laurel fresco y madera de guayaco.",
        imagen: "img/Invictus Clásico.jpg"
    },
    {
        id: 130,
        nombre: "Invictus Legend (1:1)",
        marca: "Paco Rabanne",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Sal marina, toronja y ámbar rojo.",
        imagen: "img/Invictus Legend.jpg"
    },
    {
        id: 131,
        nombre: "Swiss Army Classic (1:1)",
        marca: "Victorinox",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Menta fresca, lavanda y cedro.",
        imagen: "img/Swiss Army Classic.jpg"
    },
    {
        id: 132,
        nombre: "Valentino Born In Roma (1:1)",
        marca: "Valentino",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Hojas de violeta, salvia y vetiver amaderado.",
        imagen: "img/Valentino Born In Roma (Hombre).jpg"
    },
    {
        id: 133,
        nombre: "Valentino Donna Born In Roma (1:1)",
        marca: "Valentino",
        categoria: "mujer",
        precio: 25,
        notas: "Calidad 1:1. Jazmín de Sambac, grosella negra y bourbon.",
        imagen: "img/Valentino Donna Born In Roma (Mujer).jpg"
    },
    {
        id: 134,
        nombre: "Scandal Pour Homme (1:1)",
        marca: "Jean Paul Gaultier",
        categoria: "hombre",
        precio: 25,
        notas: "Calidad 1:1. Caramelo, clarea y haba tonka.",
        imagen: "img/Scandal Pour Homme (JPG).jpg"
    },
    {
        id: 135,
        nombre: "Santal 33 (1:1)",
        marca: "Le Labo",
        categoria: "unisex",
        precio: 25,
        notas: "Calidad 1:1. Sándalo, papiro, cuero y cardamomo.",
        imagen: "img/Santal 33 (Le Labo).jpg"
    },

    {
        id: 16,
        nombre: "Mandarin Sky (Armaf) (1:1)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 25,
        notas: "Cítrica, Dulce y Amaderada.",
        imagen: "img/mandarin sky.jpg",
        destacado: true
    },
];

// Fragancias más buscadas en Caracas / Venezuela
const popularesCaracas = [
    {
        id: 16,
        nombre: "Mandarin Sky (Armaf)",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Cítrica, Dulce y Amaderada.",
        imagen: "img/mandarin sky.jpg",
        destacado: true
    },
    {
        id: 17,
        nombre: "9 PM Clásico",
        marca: "Afnan",
        categoria: "hombre",
        precio: 40,
        notas: "Manzana verde, canela, lavanda salvaje y vainilla cálida.",
        imagen: "img/9 PM Clásico.jpg",
        destacado: true
    },
    {
        id: 20,
        nombre: "9 PM Night Out",
        marca: "Afnan",
        categoria: "hombre",
        precio: 60,
        notas: "Notas festivas cítricas, especias seductoras y maderas nobles.",
        imagen: "img/9 PM Night Out.jpg",
        destacado: true
    },
    {
        id: 50,
        nombre: "Armaf Tag Uomo Rosso",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Especias rojas, pimienta, cardamomo y maderas orientales.",
        imagen: "img/Armaf Tag Uomo Rosso.jpg",
        destacado: true
    },
    {
        id: 2,
        nombre: "Odyssey Aqua",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Toronja, notas marinas, menta fresca y madera de cedro.",
        imagen: "img/Odyssey Aqua.jpg",
        destacado: true
    },
    {
        id: 10,
        nombre: "Khamrah Clásico",
        marca: "Lattafa",
        categoria: "unisex",
        precio: 50,
        notas: "Canela, nuez moscada, praliné, dátiles y vainilla sensual.",
        imagen: "img/Khamrah Clásico.jpg",
        destacado: true
    },
    {
        id: 21,
        nombre: "Yara Clásico",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 45,
        notas: "Orquídea, heliotropo, frutas tropicales, vainilla y almizcle.",
        imagen: "img/Yara Clásico.jpg",
        destacado: true
    },
    {
        id: 22,
        nombre: "Yara Candy",
        marca: "Lattafa",
        categoria: "mujer",
        precio: 45,
        notas: "Golosinas de fresa, grosella negra, jarabe dulce y vainilla.",
        imagen: "img/Yara Candy.jpg",
        destacado: true
    },
    {
        id: 25,
        nombre: "Hawas Ice",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 50,
        notas: "Manzana helada, bergamota congelada, ciruela y liquen.",
        imagen: "img/Hawas Ice.jpg",
        destacado: true
    },
    {
        id: 26,
        nombre: "Hawas Fire",
        marca: "Rasasi",
        categoria: "hombre",
        precio: 50,
        notas: "Especias ardientes, pimienta, ámbar cálido y madera quemada.",
        imagen: "img/Hawas Fire.jpg",
        destacado: true
    },
    {
        id: 7,
        nombre: "Club De Nuit Intense Man",
        marca: "Armaf",
        categoria: "hombre",
        precio: 45,
        notas: "Limón, piña ahumada, abedul y almizcle legendario.",
        imagen: "img/Club De Nuit Intense Man.jpg",
        destacado: true
    }
];

let carrito = [];

// Función para cargar "Los Más Buscados"
function cargarPopulares() {
    const contenedor = document.getElementById("grid-populares");
    if (!contenedor) return;
    
    contenedor.innerHTML = "";

    popularesCaracas.forEach(perfume => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-perfume");

        tarjeta.innerHTML = `
            <div class="contenedor-img">
                <span class="badge-tendencia">🔥 Top Caracas</span>
                <img src="${perfume.imagen}" alt="${perfume.nombre}" class="perfume-img">
                <span class="badge-categoria">${perfume.categoria}</span>
            </div>
            <div class="perfume-info">
                <span class="perfume-marca">${perfume.marca}</span>
                <h3 class="perfume-titulo">${perfume.nombre}</h3>
                <p class="perfume-notas"><strong>Notas:</strong> ${perfume.notas}</p>
                <div class="perfume-footer">
                    <span class="perfume-precio">$${perfume.precio}</span>
                    <button class="btn-consultar" onclick="agregarAlCarrito(${perfume.id})">Agregar</button>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Función para cargar Catálogo de Originales
function cargarCatalogo(lista) {
    const contenedor = document.getElementById("grid-perfumes");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; font-size: 1.1rem; padding: 40px 0;">No se encontraron perfumes.</p>`;
        return;
    }

    lista.forEach(perfume => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-perfume");

        tarjeta.innerHTML = `
            <div class="contenedor-img">
                <img src="${perfume.imagen}" alt="${perfume.nombre}" class="perfume-img">
                <span class="badge-categoria">${perfume.categoria}</span>
            </div>
            <div class="perfume-info">
                <span class="perfume-marca">${perfume.marca}</span>
                <h3 class="perfume-titulo">${perfume.nombre}</h3>
                <p class="perfume-notas"><strong>Notas:</strong> ${perfume.notas}</p>
                <div class="perfume-footer">
                    <span class="perfume-precio">$${perfume.precio}</span>
                    <button class="btn-consultar" onclick="agregarAlCarrito(${perfume.id})">Agregar</button>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Función para cargar Catálogo de Réplicas 1.1
function cargarReplicas(lista) {
    const contenedor = document.getElementById("grid-replicas");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; font-size: 1.1rem; padding: 40px 0;">No se encontraron perfumes 1:1.</p>`;
        return;
    }

    lista.forEach(perfume => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-perfume");

        tarjeta.innerHTML = `
            <div class="contenedor-img">
                <span class="badge-tendencia" style="background: linear-gradient(135deg, #10b981, #059669);">✨ Réplica 1:1</span>
                <img src="${perfume.imagen}" alt="${perfume.nombre}" class="perfume-img">
                <span class="badge-categoria">${perfume.categoria}</span>
            </div>
            <div class="perfume-info">
                <span class="perfume-marca">${perfume.marca}</span>
                <h3 class="perfume-titulo">${perfume.nombre}</h3>
                <p class="perfume-notas"><strong>Notas:</strong> ${perfume.notas}</p>
                <div class="perfume-footer">
                    <span class="perfume-precio">$${perfume.precio}</span>
                    <button class="btn-consultar" onclick="agregarAlCarrito(${perfume.id})">Agregar</button>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

function agregarAlCarrito(id) {
    const perfume = perfumes.find(p => p.id === id) || 
                    popularesCaracas.find(p => p.id === id) || 
                    perfumesReplica.find(p => p.id === id);
                    
    if (!perfume) return;

    const existe = carrito.find(item => item.id === id);

    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({ ...perfume, cantidad: 1 });
    }

    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedorItems = document.getElementById("items-carrito");
    const contador = document.getElementById("cont-carrito");
    const totalElemento = document.getElementById("total-precio");

    if (!contenedorItems) return;

    contenedorItems.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        cantidadTotal += item.cantidad;

        const div = document.createElement("div");
        div.classList.add("item-carrito");
        div.innerHTML = `
            <span><strong>${item.nombre}</strong> (x${item.cantidad}) - $${item.precio * item.cantidad}</span>
            <button onclick="eliminarDelCarrito(${item.id})" class="btn-eliminar">&times;</button>
        `;
        contenedorItems.appendChild(div);
    });

    if (contador) contador.textContent = cantidadTotal;
    if (totalElemento) totalElemento.textContent = total.toFixed(2);
}

function filtrarPerfumes() {
    const textoBusqueda = document.getElementById("input-busqueda")?.value.toLowerCase() || "";
    const categoriaSeleccionada = document.getElementById("filtro-categoria")?.value || "todos";

    const resultados = perfumes.filter(perfume => {
        const coincideTexto = perfume.nombre.toLowerCase().includes(textoBusqueda) || 
                              perfume.marca.toLowerCase().includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === "todos" || perfume.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    cargarCatalogo(resultados);
}

function filtrarReplicas() {
    const textoBusqueda = document.getElementById("input-busqueda-replica")?.value.toLowerCase() || "";
    const categoriaSeleccionada = document.getElementById("filtro-categoria-replica")?.value || "todos";

    const resultados = perfumesReplica.filter(perfume => {
        const coincideTexto = perfume.nombre.toLowerCase().includes(textoBusqueda) || 
                              perfume.marca.toLowerCase().includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === "todos" || perfume.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    cargarReplicas(resultados);
}

function enviarPedidoWhatsapp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const numeroTelefono = "+584123691599";
    let mensaje = "¡Hola! Quisiera realizar un pedido de los siguientes perfumes:\n\n";

    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `- ${item.nombre} (x${item.cantidad}): $${subtotal}\n`;
    });

    mensaje += `\n*Total a pagar:* $${total}`;
    
    window.open(`https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPopulares();
    cargarCatalogo(perfumes);
    cargarReplicas(perfumesReplica);

    // Eventos de filtro para Originales
    document.getElementById("input-busqueda")?.addEventListener("input", filtrarPerfumes);
    document.getElementById("filtro-categoria")?.addEventListener("change", filtrarPerfumes);

    // Eventos de filtro para Réplicas 1.1
    document.getElementById("input-busqueda-replica")?.addEventListener("input", filtrarReplicas);
    document.getElementById("filtro-categoria-replica")?.addEventListener("change", filtrarReplicas);

    // Controles de Modal
    const modal = document.getElementById("modal-carrito");
    document.getElementById("btn-carrito")?.addEventListener("click", () => modal?.classList.remove("oculto"));
    document.getElementById("cerrar-carrito")?.addEventListener("click", () => modal?.classList.add("oculto"));
    document.getElementById("btn-enviar-pedido")?.addEventListener("click", enviarPedidoWhatsapp);

    // ACTIVACIÓN DEL EFECTO SPLASH PARA AMBAS SECCIONES:
    aplicarEfectoSplash('catalogo', 'canvas-splash');            // Sección Originales
    aplicarEfectoSplash('replicas', 'canvas-splash-replicas');  // Sección Réplicas 1.1
});

// Manejo del Formulario de Contacto directo a WhatsApp
document.getElementById("form-contacto")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("contacto-nombre").value;
    const mensaje = document.getElementById("contacto-mensaje").value;
    const numeroTelefono = "+584123691599";

    const textoWhatsapp = `*Nueva Consulta desde la Web*%0A%0A` +
        `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A` +
        `💬 *Consulta:* ${encodeURIComponent(mensaje)}`;

    window.open(`https://wa.me/${numeroTelefono}?text=${textoWhatsapp}`, "_blank");
});

// --- EFECTO SPLASH CURSOR AZUL NEÓN (REUTILIZABLE) ---
function aplicarEfectoSplash(idSeccion, idCanvas) {
    const section = document.getElementById(idSeccion);
    const canvas = document.getElementById(idCanvas);
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    function updateCanvasSize() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const resizeObserver = new ResizeObserver(() => updateCanvasSize());
    resizeObserver.observe(section);

    class SplashParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 10 + 4;
            this.speedX = (Math.random() - 0.5) * 5;
            this.speedY = (Math.random() - 0.5) * 5;
            
            const cyanBluePalette = [
                'rgba(6, 182, 212, ',   // Cian Neón
                'rgba(37, 99, 235, ',   // Azul Eléctrico
                'rgba(56, 189, 248, ',  // Azul Celeste brillante
                'rgba(14, 165, 233, '   // Azul Profundo Neón
            ];
            this.colorBase = cyanBluePalette[Math.floor(Math.random() * cyanBluePalette.length)];
            this.alpha = 1;
            this.decay = Math.random() * 0.018 + 0.012;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha -= this.decay;
            if (this.size > 0.4) this.size -= 0.12;
        }

        draw() {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';

            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 2.5
            );
            gradient.addColorStop(0, `${this.colorBase}${this.alpha})`);
            gradient.addColorStop(1, `${this.colorBase}0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        for (let i = 0; i < 5; i++) {
            particles.push(new SplashParticle(mouseX, mouseY));
        }
    });

    function renderAnimation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].alpha <= 0 || particles[i].size <= 0.4) {
                particles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(renderAnimation);
    }
    renderAnimation();
}
