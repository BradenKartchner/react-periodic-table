// families: reactive nonmetals, alkali metals, alkaline earth metals, halogens,
// noble gases, transition metals, post-transition metals, metalloids, Lanthanides, Actinides, transActinides

const allElements = [
    {
        name: "Hydrogen",
        symbol: "H",
        number: 1,
        mass: 1.008,
        family: "Reactive Nonmetals",
        electron_configuration: "1s1",
    },
    {
        name: "Helium",
        symbol: "He",
        number: 2,
        mass: 4.0026,
        family: "Noble Gases",
        electron_configuration: "1s2",
    },
    {
        name: "Lithium",
        symbol: "Li",
        number: 3,
        mass: 6.94,
        family: "Alkali Metals",
        electron_configuration: "[He] 2s1",
    },
    {
        name: "Beryllium",
        symbol: "Be",
        number: 4,
        mass: 9.0122,
        family: "Alkaline Earth Metals",
        electron_configuration: "[He] 2s2",
    },
    {
        name: "Boron",
        symbol: "B",
        number: 5,
        mass: 10.81,
        family: "Metalloids",
        electron_configuration: "[He] 2s2 2p1",
    },
    {
        name: "Carbon",
        symbol: "C",
        number: 6,
        mass: 12.011,
        family: "Reactive Nonmetals",
        electron_configuration: "[He] 2s2 2p2",
    },
    {
        name: "Nitrogen",
        symbol: "N",
        number: 7,
        mass: 14.007,
        family: "Reactive Nonmetals",
        electron_configuration: "[He] 2s2 2p3",
    },
    {
        name: "Oxygen",
        symbol: "O",
        number: 8,
        mass: 15.999,
        family: "Reactive Nonmetals",
        electron_configuration: "[He] 2s2 2p4",
    },
    {
        name: "Fluorine",
        symbol: "F",
        number: 9,
        mass: 18.998,
        family: "Halogens",
        electron_configuration: "[He] 2s2 2p5",
    },
    {
        name: "Neon",
        symbol: "Ne",
        number: 10,
        mass: 20.18,
        family: "Noble Gases",
        electron_configuration: "[He] 2s2 2p6",
    },
    {
        name: "Sodium",
        symbol: "Na",
        number: 11,
        mass: 22.99,
        family: "Alkali Metals",
        electron_configuration: "[Ne] 3s1",
    },
    {
        name: "Magnesium",
        symbol: "Mg",
        number: 12,
        mass: 24.305,
        family: "Alkaline Earth Metals",
        electron_configuration: "[Ne] 3s2",
    },
    {
        name: "Aluminum",
        symbol: "Al",
        number: 13,
        mass: 26.982,
        family: "Post-transition Metals",
        electron_configuration: "[Ne] 3s2 3p1",
    },
    {
        name: "Silicon",
        symbol: "Si",
        number: 14,
        mass: 28.085,
        family: "Metalloids",
        electron_configuration: "[Ne] 3s2 3p2",
    },
    {
        name: "Phosphorus",
        symbol: "P",
        number: 15,
        mass: 30.974,
        family: "Reactive Nonmetals",
        electron_configuration: "[Ne] 3s2 3p3",
    },
    {
        name: "Sulfur",
        symbol: "S",
        number: 16,
        mass: 32.06,
        family: "Reactive Nonmetals",
        electron_configuration: "[Ne] 3s2 3p4",
    },
    {
        name: "Chlorine",
        symbol: "Cl",
        number: 17,
        mass: 35.45,
        family: "Halogens",
        electron_configuration: "[Ne] 3s2 3p5",
    },
    {
        name: "Argon",
        symbol: "Cl",
        number: 18,
        mass: 39.948,
        family: "Noble Gases",
        electron_configuration: "[Ne] 3s2 3p6",
    },
    {
        name: "Potassium",
        symbol: "K",
        number: 19,
        mass: 39.098,
        family: "Alkali Metals",
        electron_configuration: "[Ar] 4s1",
    },
    {
        name: "Calcium",
        symbol: "Ca",
        number: 20,
        mass: 40.078,
        family: "Alkaline Earth Metals",
        electron_configuration: "[Ar] 4s2",
    },
    {
        name: "Scandium",
        symbol: "Sc",
        number: 21,
        mass: 44.956,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d1",
    },
    {
        name: "Titanium",
        symbol: "Ti",
        number: 22,
        mass: 47.876,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d2",
    },
    {
        name: "Vanadium",
        symbol: "V",
        number: 23,
        mass: 50.942,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d3",
    },
    {
        name: "Chromium",
        symbol: "Cr",
        number: 24,
        mass: 51.996,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d4",
    },
    {
        name: "Manganese",
        symbol: "Mn",
        number: 25,
        mass: 54.938,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d5",
    },
    {
        name: "Iron",
        symbol: "Fe",
        number: 26,
        mass: 55.845,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d6",
    },
    {
        name: "Cobalt",
        symbol: "Co",
        number: 27,
        mass: 58.933,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d7",
    },
    {
        name: "Nickel",
        symbol: "Ni",
        number: 28,
        mass: 58.693,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d8",
    },
    {
        name: "Copper",
        symbol: "Cu",
        number: 29,
        mass: 63.546,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d9",
    },
    {
        name: "Zinc",
        symbol: "Zn",
        number: 30,
        mass: 65.38,
        family: "Transition Metals",
        electron_configuration: "[Ar] 4s2 3d10",
    },
    {
        name: "Gallium",
        symbol: "Ga",
        number: 31,
        mass: 69.723,
        family: "Post-transition Metals",
        electron_configuration: "[Ar] 4s2 3d10 4p1",
    },
    {
        name: "Germanium",
        symbol: "Ge",
        number: 32,
        mass: 72.63,
        family: "Metalloids",
        electron_configuration: "[Ar] 4s2 3d10 4p2",
    },
    {
        name: "Arsenic",
        symbol: "As",
        number: 33,
        mass: 74.922,
        family: "Metalloids",
        electron_configuration: "[Ar] 4s2 3d10 4p3",
    },
    {
        name: "Selenium",
        symbol: "Se",
        number: 34,
        mass: 78.971,
        family: "Reactive Nonmetals",
        electron_configuration: "[Ar] 4s2 3d10 4p4",
    },
    {
        name: "Bromine",
        symbol: "Br",
        number: 35,
        mass: 79.904,
        family: "Halogens",
        electron_configuration: "[Ar] 4s2 3d10 4p5",
    },
    {
        name: "Krypton",
        symbol: "Kr",
        number: 36,
        mass: 83.798,
        family: "Noble Gases",
        electron_configuration: "[Ar] 4s2 3d10 4p6",
    },
    {
        name: "Rubidium",
        symbol: "Rb",
        number: 37,
        mass: 85.468,
        family: "Alkali Metals",
        electron_configuration: "[Kr] 5s1",
    },
    {
        name: "Strontium",
        symbol: "Sr",
        number: 38,
        mass: 87.62,
        family: "Alkaline Earth Metals",
        electron_configuration: "[Kr] 5s2",
    },
    {
        name: "Yttrium",
        symbol: "Y",
        number: 39,
        mass: 88.906,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d1",
    },
    {
        name: "Zirconium",
        symbol: "Zr",
        number: 40,
        mass: 91.224,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d2",
    },
    {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        mass: 92.906,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d3",
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        number: 42,
        mass: 95.95,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d4",
    },
    {
        name: "Technetium",
        symbol: "Tc",
        number: 43,
        mass: "(98)",
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d5",
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        mass: 101.07,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d6",
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        mass: 102.91,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d7",
    },
    {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        mass: 106.42,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d8",
    },
    {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        mass: 107.87,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d9",
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        number: 48,
        mass: 112.41,
        family: "Transition Metals",
        electron_configuration: "[Kr] 5s2 4d10",
    },
    {
        name: "Indium",
        symbol: "In",
        number: 49,
        mass: 114.82,
        family: "Post-transition Metals",
        electron_configuration: "[Kr] 5s2 4d10 5p1",
    },
    {
        name: "Tin",
        symbol: "Sn",
        number: 50,
        mass: 118.71,
        family: "Post-transition Metals",
        electron_configuration: "[Kr] 5s2 4d10 5p2",
    },
    {
        name: "Antimony",
        symbol: "Sb",
        number: 51,
        mass: 121.76,
        family: "Metalloids",
        electron_configuration: "[Kr] 5s2 4d10 5p3",
    },
    {
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        mass: 127.6,
        family: "Metalloids",
        electron_configuration: "[Kr] 5s2 4d10 5p4",
    },
    {
        name: "Iodine",
        symbol: "I",
        number: 53,
        mass: 126.9,
        family: "Halogens",
        electron_configuration: "[Kr] 5s2 4d10 5p5",
    },
    {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        mass: 131.29,
        family: "Halogens",
        electron_configuration: "[Kr] 5s2 4d10 5p6",
    },
    {
        name: "Caesium",
        symbol: "Cs",
        number: 55,
        mass: 132.91,
        family: "Alkali Metals",
        electron_configuration: "[Xe] 6s1",
    },
    {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        mass: 137.33,
        family: "Alkaline Earth Metals",
        electron_configuration: "[Xe] 6s2",
    },
    {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        mass: 138.91,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f1",
    },
    {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        mass: 140.12,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f2",
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        mass: 140.91,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f3",
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        mass: 144.24,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f4",
    },
    {
        name: "Promethium",
        symbol: "Pm",
        number: 61,
        mass: "(145)",
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f5",
    },
    {
        name: "Samarium",
        symbol: "Sm",
        number: 62,
        mass: 150.36,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f6",
    },
    {
        name: "Europium",
        symbol: "Eu",
        number: 63,
        mass: 151.96,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f7",
    },
    {
        name: "Gadolinium",
        symbol: "Gd",
        number: 64,
        mass: 157.25,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f8",
    },
    {
        name: "Terbium",
        symbol: "Tb",
        number: 65,
        mass: 158.93,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f9",
    },
    {
        name: "Dysprosium",
        symbol: "Dy",
        number: 66,
        mass: 162.5,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f10",
    },
    {
        name: "Holmium",
        symbol: "Ho",
        number: 67,
        mass: 164.93,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f11",
    },
    {
        name: "Erbium",
        symbol: "Er",
        number: 68,
        mass: 167.26,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f12",
    },
    {
        name: "Thulium",
        symbol: "Tm",
        number: 69,
        mass: 168.93,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f13",
    },
    {
        name: "Ytterbium",
        symbol: "Yb",
        number: 70,
        mass: 173.05,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f14",
    },
    {
        name: "Lutetium",
        symbol: "Lu",
        number: 71,
        mass: 174.97,
        family: "Lanthanides",
        electron_configuration: "[Xe] 6s2 4f14 5d1",
    },
    {
        name: "Hafnium",
        symbol: "Hf",
        number: 72,
        mass: 178.49,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d2",
    },
    {
        name: "Tantalum",
        symbol: "Ta",
        number: 73,
        mass: 180.95,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d3",
    },
    {
        name: "Tungsten",
        symbol: "W",
        number: 74,
        mass: 183.84,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d4",
    },
    {
        name: "Rhenium",
        symbol: "Re",
        number: 75,
        mass: 186.21,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d5",
    },
    {
        name: "Osmium",
        symbol: "Os",
        number: 76,
        mass: 190.23,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d6",
    },
    {
        name: "Iridium",
        symbol: "Ir",
        number: 77,
        mass: 192.22,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d7",
    },
    {
        name: "Platinum",
        symbol: "Pt",
        number: 78,
        mass: 195.08,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d8",
    },
    {
        name: "Gold",
        symbol: "Au",
        number: 79,
        mass: 196.97,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d9",
    },
    {
        name: "Mercury",
        symbol: "Hg",
        number: 80,
        mass: 200.59,
        family: "Transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d10",
    },
    {
        name: "Thallium",
        symbol: "Tl",
        number: 81,
        mass: 204.38,
        family: "Post-transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d10 6p1",
    },
    {
        name: "Lead",
        symbol: "Pb",
        number: 82,
        mass: 207.2,
        family: "Post-transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d10 6p2",
    },
    {
        name: "Bismuth",
        symbol: "Bi",
        number: 83,
        mass: 208.98,
        family: "Post-transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d10 6p3",
    },
    {
        name: "Polonium",
        symbol: "Po",
        number: 84,
        mass: "(209)",
        family: "Post-transition Metals",
        electron_configuration: "[Xe] 6s2 4f14 5d10 6p4",
    },
    {
        name: "Astatine",
        symbol: "At",
        number: 85,
        mass: "(210)",
        family: "Metalloids",
        electron_configuration: "[Xe] 6s2 4f14 5d10 6p5",
    },
    {
        name: "Radon",
        symbol: "Rn",
        number: 86,
        mass: "(222)",
        family: "Noble Gases",
        electron_configuration: "[Xe] 6s2 4f14 5d10 6p6",
    },
    {
        name: "Francium",
        symbol: "Fr",
        number: 87,
        mass: "(223)",
        family: "Alkali Metals",
        electron_configuration: "[Rn] 7s1",
    },
    {
        name: "Radium",
        symbol: "Ra",
        number: 88,
        mass: "(226)",
        family: "Alkaline Earth Metals",
        electron_configuration: "[Rn] 7s2",
    },
    {
        name: "Actinium",
        symbol: "Ac",
        number: 89,
        mass: "(227)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f1",
    },
    {
        name: "Thorium",
        symbol: "Th",
        number: 90,
        mass: 232.04,
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f2",
    },
    {
        name: "Protactinium",
        symbol: "Pa",
        number: 91,
        mass: 231.04,
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f3",
    },
    {
        name: "Uranium",
        symbol: "U",
        number: 92,
        mass: 238.08,
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f4",
    },
    {
        name: "Neptunium",
        symbol: "Np",
        number: 93,
        mass: "(237)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f5",
    },
    {
        name: "Plutonium",
        symbol: "Pu",
        number: 94,
        mass: "(244)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f6",
    },
    {
        name: "Americium",
        symbol: "Am",
        number: 95,
        mass: "(243)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f7",
    },
    {
        name: "Curium",
        symbol: "Cm",
        number: 96,
        mass: "(247)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f8",
    },
    {
        name: "Berkelium",
        symbol: "Bk",
        number: 97,
        mass: "(247)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f9",
    },
    {
        name: "Californium",
        symbol: "Cf",
        number: 98,
        mass: "(251)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f10",
    },
    {
        name: "Einsteinium",
        symbol: "Es",
        number: 99,
        mass: "(252)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f11",
    },
    {
        name: "Fermium",
        symbol: "Fm",
        number: 100,
        mass: "(257)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f12",
    },
    {
        name: "Mendelevium",
        symbol: "Md",
        number: 101,
        mass: "(258)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f13",
    },
    {
        name: "Nobelium",
        symbol: "No",
        number: 102,
        mass: "(259)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f14",
    },
    {
        name: "Lawrencium",
        symbol: "Lr",
        number: 103,
        mass: "(266)",
        family: "Actinides",
        electron_configuration: "[Rn] 7s2 5f14 6d1",
    },
    {
        name: "Rutherfordium",
        symbol: "Rf",
        number: 104,
        mass: "(267)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d2",
    },
    {
        name: "Dubnium",
        symbol: "Db",
        number: 105,
        mass: "(268)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d3",
    },
    {
        name: "Seaborgium",
        symbol: "Sg",
        number: 106,
        mass: "(269)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d4",
    },
    {
        name: "Bohrium",
        symbol: "Sg",
        number: 107,
        mass: "(270)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d5",
    },
    {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        mass: "(277)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d6",
    },
    {
        name: "Meitnerium",
        symbol: "Mt",
        number: 109,
        mass: "(278)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d7",
    },
    {
        name: "Damstatium",
        symbol: "Ds",
        number: 110,
        mass: "(281)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d8",
    },
    {
        name: "Roentgenium",
        symbol: "Rg",
        number: 111,
        mass: "(282)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d9",
    },
    {
        name: "Copernicium",
        symbol: "Cn",
        number: 112,
        mass: "(285)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10",
    },
    {
        name: "Nihonium",
        symbol: "Nh",
        number: 113,
        mass: "(286)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10 7p1",
    },
    {
        name: "Flerovium",
        symbol: "Fl",
        number: 114,
        mass: "(289)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10 7p2",
    },
    {
        name: "Moscovium",
        symbol: "Mc",
        number: 115,
        mass: "(290)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10 7p3",
    },
    {
        name: "Livermorium",
        symbol: "Lv",
        number: 116,
        mass: "(293)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10 7p4",
    },
    {
        name: "Tennessine",
        symbol: "Tn",
        number: 117,
        mass: "(294)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10 7p5",
    },
    {
        name: "Oganesson",
        symbol: "Og",
        number: 118,
        mass: "(294)",
        family: "Transactinides",
        electron_configuration: "[Rn] 7s2 5f14 6d10 7p6",
    },
];

export default allElements;
