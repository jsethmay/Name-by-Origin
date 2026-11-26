// ============================================================================
// COLONIAL NAME GENERATOR — NAME DATABASE
// ============================================================================
// EDIT THIS FILE to add or change names and naming traditions.
// Each quoted identifier (e.g. "amazigh") must match its key in colonies.js.
// Add a name inside the appropriate list, in quotes, separated by commas.
// Add a whole category before the final }; and assign it a weight in colonies.js.
// label: display name; surnameFirst: true = family name first.
// male / female / surname: nonempty arrays. The engine draws uniformly within each.
// Original 28 categories preserved verbatim in data (including duplicates and errors).
// Geographic notes indicate major regions/communities, not exclusive origin or
// measured name prevalence. Some pools overlap. New entries are examples, not
// verified census distributions; modern civil names may reflect multiple languages.
// The engine assumes two-part, gendered names. Some traditions do not use these.
// Historical/revival and Indigenous adaptations are labelled below; do not treat
// generated combinations as an authoritative account of living naming practices.
// Source for larger modern pools: Faker 40.1.2 locale person-provider lists,
// MIT-licensed: https://github.com/joke2k/faker (see bundled source-notes.txt).
// ICU Any-Latin transliteration used where necessary; spellings may be approximate.
// Other additions are manually curated, not individually checked against records.
// For usage context: https://www.behindthename.com/support/usages.php
// ============================================================================

const NAME_LISTS = {

  // Common regions / communities: South Africa and Namibia; Afrikaans-speaking communities across backgrounds.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "afrikaans": {
    label: "Afrikaans",
    surnameFirst: false,
    male: [
      "Adriaan", "Andries", "Arend", "Barend", "Christiaan", "Conrad", "Cornelis", "Danie", "Dawid", "Dirk",
      "Ernst", "Francois", "Gerhard", "Gert", "Hannes", "Hendrik", "Hennie", "Jacobus", "Jan", "Johan",
      "Johannes", "Jozua", "Koos", "Kobus", "Lodewyk", "Marthinus", "Morné", "Petrus", "Pieter", "Riaan",
      "Roelof", "Stefan", "Theuns", "Willem", "Wynand",
    ],
    female: [
      "Adéle", "Anel", "Annelie", "Annemarie", "Carina", "Carla", "Christelle", "Christine", "Cornelia",
      "Danelle", "Elize", "Elsabe", "Estelle", "Gerda", "Hannelie", "Hester", "Ilze", "Ina", "Johanna",
      "Juanita", "Karen", "Karien", "Liezl", "Lize", "Marietjie", "Mariska", "Marlene", "Nadia", "Nelia",
      "Riana", "Riëtte", "Sanet", "Sonja", "Suzette", "Tania",
    ],
    surname: [
      "Botha", "Botes", "Coetzee", "Cronje", "De Beer", "De Klerk", "De Villiers", "Du Plessis", "Du Preez",
      "Erasmus", "Ferreira", "Fourie", "Grobler", "Grobbelaar", "Jansen", "Joubert", "Kruger", "Le Roux",
      "Louw", "Marais", "Meyer", "Moolman", "Mostert", "Naudé", "Nel", "Olivier", "Pretorius", "Roux", "Smit",
      "Steyn", "Swart", "Van der Merwe", "Van der Walt", "Van Niekerk", "Van Rensburg", "Van Wyk", "Viljoen",
      "Visser", "Venter", "Wessels",
    ],
  },

  // Common regions / communities: Ghana and Côte d’Ivoire; Ghanaian provider includes names outside Akan tradition.
  // Source: Faker 40.1.2 person provider(s): tw_GH; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "akan": {
    label: "Akan / Ghanaian",
    surnameFirst: false,
    male: [
      "Aaron", "Abeiku", "Adam", "Adrian", "Akwasi", "Akwesi", "Albert", "Alex", "Alexander", "Andrew",
      "Anthony", "Antony", "Arthur", "Ben", "Benjamin", "Bernard", "Bruce", "Carl", "Charles", "Christian",
      "Clifford", "Colins", "Daniel", "Danny", "David", "Denis", "Dennis", "Derrick", "Dominic", "Donald",
      "Douglas", "Duncan", "Edward", "Ekow", "Elliot", "Elliott", "Eric", "Fiifi", "Francis", "Frank",
      "Frederick", "George", "Gerald", "Gordon", "Graham", "Gregory", "Harry", "Henry", "Howard", "Isaac",
      "Jack", "Jacob", "Jake", "James", "Jason", "Jeffrey", "Jeremy", "Joe", "Joel", "John", "Jonathan",
      "Joojo", "Joseph", "Josh", "Joshua", "Josiah", "Julian", "Justin", "Karl", "Kenneth", "Kevin", "Kofi",
      "Kojo", "Kujoe", "Kwabena", "Kwadwo", "Kwaku", "Kwame", "Kwamena", "Kwasi", "Kweku", "Kwesi", "Kyle",
      "Lawrence", "Leslie", "Louis", "Luke", "Malcolm", "Marcus", "Mark", "Martin", "Mathew", "Matthew", "Max",
      "Michael", "Nathan", "Nicholas", "Nigel", "Oliver", "Patrick", "Paul", "Peter", "Philip", "Phillip",
      "Raymond", "Richard", "Robert", "Roger", "Ronald", "Russell", "Sam", "Samuel", "Shaun", "Simon",
      "Stanley", "Stephen", "Steven", "Terence", "Thomas", "Timothy", "Tom", "Tony", "Victor", "Vincent",
      "William", "Yaw",
    ],
    female: [
      "Aba", "Abena", "Abigail", "Adwoa", "Afia", "Afua", "Akos", "Akosua", "Akua", "Akumaa", "Alice", "Ama",
      "Amanda", "Amber", "Amelia", "Angela", "Ann", "Annette", "Awesi", "Baaba", "Barbara", "Beatrice",
      "Caroline", "Catherine", "Charlotte", "Christina", "COmfort", "Comfort", "Constance", "Danielle",
      "Deborah", "Debra", "Denise", "Dora", "Dorcas", "Dorothy", "Eliabeth", "Elizabeth", "Emily", "Emma",
      "Ernestina", "Esi", "Eunice", "Felicia", "Francesca", "Gemma", "Georgia", "Georgina", "Gifty", "Grace",
      "Hannabel", "Hannah", "Harriet", "Helen", "Irene", "Janet", "Janice", "Jasmine", "Jennifer", "Jessica",
      "Jill", "Joanna", "Josephine", "Joyce", "Judith", "Julia", "Juliana", "Julie", "Karen", "Kate",
      "Katherine", "Katy", "Lawrencia", "Linda", "Lisa", "Lorraine", "Lucy", "Lydia", "Mandy", "Margaret",
      "Maria", "Marian", "Marilyn", "Mary", "Maureen", "Michelle", "Millicent", "Nana Ama", "Naomi", "Natalie",
      "Natasha", "Nicola", "Nimakoah", "Olivia", "Pamela", "Patricia", "Paula", "Priscilla", "Rachael",
      "Rachel", "Rebecca", "Regina", "Rita", "Roselyn", "Rosemary", "Ruth", "Salomey", "Samantha", "Sandra",
      "Sarah", "Sharon", "Sheila", "Shirley", "Stephanie", "Susan", "Sylvia", "Teresa", "Tina", "Tracy",
      "Vanessa", "Veronica", "Victoria", "Vida", "Wendy", "Yaa", "Yvonne",
    ],
    surname: [
      "Aboraa", "Abrafi", "Acheampong", "Adoma", "Adomah", "Adomako", "Adu", "Adusei", "Adutwum", "Adutwumwaa",
      "Adwubi", "Afirifa", "Afoakwa", "Afrakomaa", "Agyapomaa", "Agyapong", "Agyare", "Agyei", "Agyeiwaa",
      "Agyemang", "Ahortor", "Akoaa", "Akoto", "Akowua", "Akyaa", "Akyeamfuɔ", "Akyeampomaa", "Akyeampong",
      "Akyena", "Akyere", "Akyereko", "Akɔmaa", "Amo", "Amoa", "Amoako", "Amoakowaa", "Amoanimaa", "Amoasi",
      "Ampadu", "Ampofo", "Ampofowaa", "Ampoma", "Amponsa", "Amponsah", "Andorful", "Anima", "Ankra", "Anokye",
      "Ansa", "Ansomaa", "Ansomah", "Antwi", "Antwiwaa", "Appia", "Appiah", "Asamoa", "Asamoah", "Asante",
      "Asantewaa", "Asare", "Asenso", "Asiama", "Asiedu", "Asieduwaa", "Ata", "Ataa", "Awuah", "Baa", "Baafi",
      "Baah", "Baawia", "Badu", "Boadi", "Boadu", "Boahen", "Boakye", "Boakyewaa", "Boatemaa", "Boatemaah",
      "Boaten", "Boateng", "Bona", "Bonsra", "Bonsu", "Daako", "Daakoaa", "Danso", "Darko", "Donkor", "Duah",
      "Dufie", "Dwamena", "Fofie", "Foriwaa", "Fosu", "Fosua", "Frema", "Frimpomaa", "Gyamfi", "Gyamfiaa",
      "Gyasi", "Gyasiwaa", "Karikari", "Koomson", "Kumi", "Kusi", "Kusiwaa", "Kwaakye", "Kwaakyewaa",
      "Kwartemaa", "Kwarteng", "Kyei", "Kyeiwaa", "Kyerewaa", "Mansa", "Mensa", "Mensah", "Nkansa", "Nkansah",
      "Nkrumah", "Nsia", "Nti", "Ntiamoa", "Ntim", "Nyaako", "Nyaakoaa", "Nyame", "Nyantakyi", "Obeng",
      "Ofori", "Ofosu", "Okyere", "Omani", "Opoku", "Oppong", "Opuku", "Osei", "Oti", "Otiwa", "Otuo", "Owusu",
      "Owusuwaa", "Pokuaa", "Pomaa", "Prempeh", "Quartey", "Safo", "Safoaa", "Sarpong", "Serwaa", "Takyi",
      "Tawia", "Tiwaa", "Tutu", "Tweneboa", "Twumasi", "Wiafe", "Yaamoa", "Yawson", "Yeboa", "Yeboah",
      "Yirenkyi",
    ],
  },

  // Common regions / communities: Indigenous North Africa, particularly Morocco and Algeria; also Tunisia, Libya, Siwa in Egypt and Tuareg communities across the Sahara and Sahel.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Mixed modern Amazigh, Kabyle and historical revival names; Arabic-derived names and French-style civil surnames also occur. Not all forms are common across all Amazigh groups.
  "amazigh": {
    label: "Amazigh (Berber)",
    surnameFirst: false,
    male: [
      "Aksel", "Aksil", "Amayas", "Amghar", "Amnay", "Anir", "Amezian", "Aregh", "Idir", "Izem", "Jugurtha",
      "Koceila", "Lounis", "Massinissa", "Massensen", "Mazigh", "Mokrane", "Sifaw", "Yuba", "Yugurten", "Ziri",
      "Yidir", "Said", "Mohand", "Mhand", "Ayyur", "Amastan",
    ],
    female: [
      "Tafsut", "Tifawt", "Tiziri", "Tilleli", "Tilelli", "Tudert", "Tanirt", "Tayri", "Tanit", "Dihya",
      "Kahina", "Lalla", "Tassadit", "Tawes", "Taous", "Tiznit", "Yemma", "Numidia", "Nouria", "Zahra",
      "Malika", "Fatima", "Kenza", "Nedjma", "Tinhinane", "Tihya",
    ],
    surname: [
      "Ait Ahmed", "Ait Ali", "Ait Amara", "Ait Kaci", "Ait Menguellet", "Ait Said", "Ait Ouarab", "Amrouche",
      "Atmani", "Belkacem", "Benamar", "Bensalem", "Boudiaf", "Boukhalfa", "Boulahrouz", "Boussad", "Chaker",
      "Ferhat", "Ighil", "Imazighen", "Kaci", "Kabouche", "Khelifi", "Mammeri", "Mekki", "Meziane", "Mokrane",
      "Ouhaddou", "Ould Ali", "Sadi", "Zemouri",
    ],
  },

  // Common regions / communities: United States; multicultural American naming, with some overlap with Canada and other diaspora communities.
  // Original category — all original entries retained.
  "american": {
    label: "American",
    surnameFirst: false,
    male: [
      "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles",
      "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua",
      "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Jason", "Edward", "Jeffrey", "Ryan",
      "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon",
      "Benjamin", "Samuel", "Gregory", "Alexander", "Patrick", "Frank", "Raymond", "Jack", "Dennis", "Jerry",
      "Tyler", "Aaron", "Jose", "Adam", "Henry", "Nathan", "Douglas", "Zachary", "Peter", "Kyle", "Walter",
      "Ethan", "Jeremy", "Harold", "Keith", "Christian", "Roger", "Noah", "Gerald", "Carl", "Terry", "Sean",
      "Austin", "Arthur", "Lawrence", "Jesse", "Dylan", "Bryan", "Joe", "Jordan", "Billy", "Bruce", "Albert",
      "Willie", "Gabriel", "Logan", "Alan", "Juan", "Wayne", "Roy", "Ralph", "Randy", "Eugene", "Vincent",
      "Russell", "Elijah", "Louis", "Bobby", "Philip", "Johnny", "Bradley", "Martin", "Leonard", "Franklin",
      "Curtis", "Mason", "Evan", "Gabriel", "Isaac", "Caleb", "Devin", "Shawn", "Derek", "Brad", "Colin",
      "Oscar", "Miles", "Cody", "Jesus", "Luis", "Ivan", "Andre", "Marcus", "Allen", "Carlos", "Miguel",
      "Victor", "Joel", "Travis", "Jared", "Trevor", "Blake", "Dustin", "Spencer", "Wesley", "Riley", "Cole",
      "Grant", "Chase", "Emmanuel", "Elliot", "Jason", "Tristan", "Xavier", "Diego", "Alejandro", "Seth",
      "Damon", "Marcus", "Damian", "Aiden", "Liam", "Noel", "Connor", "Cameron", "Hudson", "Hunter", "Parker",
      "Cooper", "Easton", "Jaxon", "Bentley", "Carson", "Grayson", "Landon", "Brody", "Sawyer", "Ryker",
      "Declan", "Finn", "Axel", "Asher", "Kai", "Micah", "Silas", "Theodore", "Oliver", "Elijah", "Sebastian",
      "Julian", "Levi", "Isaiah", "Eli", "Ezra", "Jonah", "Malachi", "Beckett", "Rowan", "Holden", "Preston",
      "Colton", "Gavin", "Tucker", "Hudson", "Everett", "Peyton", "Reid", "Grant", "Miles", "Nolan", "DeShawn",
      "Darnell", "Tyrone", "Marquis", "Jamal", "Andre", "Malik", "Darius", "Terrell", "Antonio", "Quinton",
      "DeAndre", "Jerome", "Lamar", "Desmond", "Rashawn", "Calvin", "Jalen", "Xavier", "Trevor", "Marcus",
      "Reginald", "Frederick", "Keith", "Roderick", "Antoine", "Corey", "Dewayne", "Marvin", "Leon", "Shawn",
      "Maurice", "Dion", "Andreus", "Demetrius", "Kendrick", "Lorenzo", "Trevon", "Dante", "Malcolm",
    ],
    female: [
      "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
      "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
      "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon",
      "Cynthia", "Kathleen", "Amy", "Shirley", "Angela", "Helen", "Anna", "Brenda", "Pamela", "Nicole", "Emma",
      "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Catherine", "Carolyn", "Janet", "Ruth",
      "Maria", "Heather", "Diane", "Virginia", "Julie", "Joyce", "Victoria", "Olivia", "Lauren", "Megan",
      "Cheryl", "Evelyn", "Hannah", "Frances", "Jacqueline", "Ann", "Gloria", "Jean", "Martha", "Doris",
      "Teresa", "Sara", "Janice", "Marie", "Julia", "Grace", "Alice", "Madison", "Brittany", "Amber",
      "Danielle", "Abigail", "Sophia", "Isabella", "Natalie", "Ava", "Lillian", "Chloe", "Sofia", "Addison",
      "Avery", "Ella", "Scarlett", "Grace", "Victoria", "Aria", "Brooklyn", "Layla", "Zoe", "Penelope",
      "Riley", "Lily", "Nora", "Eleanor", "Holly", "Claire", "Ellie", "Paisley", "Audrey", "Skylar",
      "Savannah", "Camila", "Leah", "Stella", "Maya", "Hazel", "Elliana", "Violet", "Naomi", "Ruby", "Luna",
      "Elena", "Ivy", "Sadie", "Willow", "Lucy", "Paislee", "Madeline", "Kinsley", "Serenity", "Autumn",
      "Quinn", "Eva", "Aubrey", "Bella", "Piper", "Sophie", "Delilah", "Alice", "Josephine", "Margot", "Eliza",
      "Adeline", "Genevieve", "June", "Reese", "Sydney", "Blake", "Payton", "Morgan", "Kylie", "Aaliyah",
      "Imani", "Nia", "Zaria", "Nyla", "Tiana", "Keisha", "Monique", "Tameka", "Latoya", "Shanice", "Tanisha",
      "Tiffany", "Brianna", "Jada", "Jasmine", "Destiny", "India", "Kiara", "Kiana", "Amara", "Arielle",
      "Deja", "Sanaa", "Imani", "Zuri", "Ayana", "Nyla", "Janelle", "Keandra", "Shayla", "Taliyah", "Kyla",
      "Diamond", "Harmony", "Justice", "Skye", "Naomi", "Aisha", "Raven",
    ],
    surname: [
      "Garcia", "Martinez", "Rodriguez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez",
      "Torres", "Flores", "Rivera", "Gomez", "Diaz", "Reyes", "Cruz", "Morales", "Ortiz", "Gutierrez",
      "Vasquez", "Castillo", "Jimenez", "Ruiz", "Alvarez", "Romero", "Navarro", "Mendoza", "Aguilar", "Vargas",
      "Rojas", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez",
      "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore",
      "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez",
      "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill",
      "Flores", "O'Hoolihan", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
      "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards",
      "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz",
      "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward",
      "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz",
      "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster",
      "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson",
      "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander",
      "Hamilton", "Graham", "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant",
      "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro",
      "Marshall", "Owens", "Harrison", "Fernandez", "McDonald", "Wells", "Weaver", "Gibson", "Fields",
      "Ferguson", "Bishop", "Harper", "Washington", "Jefferson", "Freeman", "Bridges", "Armstrong", "Douglas",
      "Franklin", "Jefferson", "Griffin", "Powell", "Bryant", "Perry", "Reed", "Mason", "Porter", "Warren",
      "Payne", "Crawford", "Dawson", "Hawkins", "Horton", "Boyd", "Craig", "Webster", "Greene", "Ford",
      "Banks", "Fleming", "Marshall", "Caldwell", "Duncan", "Gardner", "Holland", "Hunt", "Logan", "Manning",
      "Murray", "Sutton", "Turner", "Wade",
    ],
  },

  // Common regions / communities: Ancient and early medieval Celtic-speaking regions of western and central Europe, including Britain and Ireland.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. Includes revival forms and, where relevant, literary/mythological names; not all were everyday given names.
  "ancient-celtic": {
    label: "Ancient Celtic revival",
    surnameFirst: false,
    male: [
      "Aed", "Aedan", "Ambiorix", "Art", "Brennus", "Caratacus", "Cian", "Conall", "Conchobar", "Cormac",
      "Cú Chulainn", "Diarmuid", "Dumnorix", "Fergus", "Fionn", "Lugaid", "Mael", "Niall", "Oisin",
      "Orgetorix", "Rónán", "Vercingetorix",
    ],
    female: [
      "Aife", "Ailbhe", "Aoife", "Boudica", "Brigid", "Cartimandua", "Deirdre", "Eithne", "Étaín", "Fand",
      "Findabair", "Grainne", "Macha", "Medb", "Morrígan", "Niamh", "Rhiannon", "Scáthach", "Sionann",
    ],
    surname: [
      "Aed", "Ambiorix", "Art", "Brennus", "Caratacus", "Cian", "Conall", "Conchobar", "Cormac", "Dumnorix",
      "Fergus", "Fionn", "Lugaid", "Niall", "Oisin", "Rónán",
    ],
  },

  // Common regions / communities: Ancient Nile Valley, especially Egypt; various dynastic periods.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. Includes revival forms and, where relevant, literary/mythological names; not all were everyday given names.
  "ancient-egyptian": {
    label: "Ancient Egyptian revival",
    surnameFirst: false,
    male: [
      "Ahmose", "Amenemhat", "Amenhotep", "Anen", "Ankhefensekhmet", "Djedhor", "Hapu", "Horemheb", "Imhotep",
      "Intef", "Iry-Hor", "Kagemni", "Khafre", "Khufu", "Mentuhotep", "Merer", "Meryre", "Nakht", "Narmer",
      "Panehsy", "Paser", "Ptahhotep", "Ramesses", "Seneb", "Senusret", "Seti", "Siptah", "Thutmose",
      "Tutankhamun", "Weni",
    ],
    female: [
      "Ahhotep", "Ahmose-Nefertari", "Ankhesenamun", "Baketaten", "Bintanath", "Hatshepsut", "Henut",
      "Henutmire", "Iset", "Kiya", "Maathorneferure", "Meritamen", "Meritaten", "Merneith", "Meryt",
      "Mutemwiya", "Nefertari", "Nefertiti", "Neithhotep", "Nitocris", "Nubkhaes", "Satiah", "Sitkamose",
      "Sitamun", "Sobekneferu", "Tawosret", "Tiye", "Tuya", "Wedjebten",
    ],
    surname: [
      "Ahmose", "Amenemhat", "Amenhotep", "Djedhor", "Hapu", "Imhotep", "Intef", "Kagemni", "Khufu",
      "Mentuhotep", "Merer", "Nakht", "Paser", "Ptahhotep", "Ramesses", "Seneb", "Senusret", "Seti",
      "Thutmose", "Weni",
    ],
  },

  // Common regions / communities: Ancient Greece and Greek colonies of the Mediterranean and Black Sea.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. Includes revival forms and, where relevant, literary/mythological names; not all were everyday given names.
  "ancient-greek": {
    label: "Ancient Greek revival",
    surnameFirst: false,
    male: [
      "Agathon", "Alkibiades", "Anaxagoras", "Antigonos", "Apollonios", "Aristarchos", "Aristeides",
      "Aristoteles", "Damon", "Demetrios", "Demosthenes", "Diodoros", "Diogenes", "Epaminondas", "Herakleitos",
      "Herodotos", "Hippokrates", "Kleon", "Leonidas", "Lysandros", "Menandros", "Nikandros", "Nikias",
      "Perikles", "Philippos", "Platon", "Ptolemaios", "Sokrates", "Solon", "Themistokles", "Xenophon",
    ],
    female: [
      "Agathe", "Anaxandra", "Andromache", "Antigone", "Artemisia", "Aspasia", "Berenike", "Chloe", "Damaris",
      "Danae", "Diotima", "Eirene", "Eudokia", "Euphemia", "Helene", "Hipparchia", "Hypatia", "Kallisto",
      "Kleopatra", "Kyniska", "Laodike", "Lysandra", "Melitta", "Olympias", "Phila", "Phryne", "Sappho",
      "Thais", "Theano", "Thessalonike",
    ],
    surname: [
      "Agathon", "Alkibiades", "Antigonos", "Aristarchos", "Damon", "Demetrios", "Herakleitos", "Kleon",
      "Leonidas", "Lysandros", "Menandros", "Nikandros", "Perikles", "Philippos", "Ptolemaios", "Solon",
      "Themistokles", "Xenophon",
    ],
  },

  // Common regions / communities: Achaemenid and later ancient Iranian empires, centered on modern Iran.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions.
  "ancient-persian": {
    label: "Ancient Persian revival",
    surnameFirst: false,
    male: [
      "Ardashir", "Ariaramnes", "Arsames", "Artabanus", "Artaxerxes", "Artavazd", "Astyages", "Bardiya",
      "Cambyses", "Cyrus", "Darius", "Hystaspes", "Kavad", "Khosrow", "Mithridates", "Orodes", "Phraates",
      "Shapur", "Tigranes", "Vishtaspa", "Xerxes", "Yazdegerd",
    ],
    female: [
      "Amestris", "Artemisia", "Atossa", "Barsine", "Borandukht", "Cassandane", "Mandane", "Parysatis",
      "Roxana", "Stateira", "Sisygambis", "Sparethra", "Azarmidokht", "Arystone", "Irdabama", "Musa", "Shirin",
      "Sura",
    ],
    surname: [
      "Ardashir", "Ariaramnes", "Arsames", "Artabanus", "Artaxerxes", "Cyrus", "Darius", "Hystaspes", "Kavad",
      "Khosrow", "Mithridates", "Orodes", "Shapur", "Vishtaspa", "Xerxes", "Yazdegerd",
    ],
  },

  // Common regions / communities: Roman Republic and Empire; Italy and the ancient Mediterranean.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "ancient-roman": {
    label: "Ancient Roman revival",
    surnameFirst: false,
    male: [
      "Aulus", "Appius", "Decimus", "Gaius", "Gnaeus", "Kaeso", "Lucius", "Mamercus", "Manius", "Marcus",
      "Numerius", "Publius", "Quintus", "Servius", "Sextus", "Spurius", "Tiberius", "Titus", "Agrippa", "Cato",
      "Cicero", "Hadrianus", "Octavianus", "Severus", "Valerius",
    ],
    female: [
      "Aelia", "Aemilia", "Agrippina", "Antonia", "Aurelia", "Caecilia", "Claudia", "Cornelia", "Domitia",
      "Fabia", "Flavia", "Fulvia", "Gaia", "Hortensia", "Julia", "Junia", "Livia", "Lucia", "Marcia",
      "Octavia", "Paulina", "Portia", "Publia", "Quintia", "Scribonia", "Sempronia", "Tullia", "Valeria",
      "Vibia",
    ],
    surname: [
      "Aelius", "Aemilius", "Antonius", "Aurelius", "Caecilius", "Claudius", "Cornelius", "Domitius", "Fabius",
      "Flavius", "Fulvius", "Horatius", "Julius", "Junius", "Licinius", "Livius", "Marcius", "Octavius",
      "Pompeius", "Quinctius", "Scribonius", "Sempronius", "Servilius", "Sulpicius", "Tullius", "Valerius",
      "Vibius",
    ],
  },

  // Common regions / communities: Early medieval England, roughly 5th to 11th centuries.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions.
  "anglo-saxon": {
    label: "Anglo-Saxon / Old English revival",
    surnameFirst: false,
    male: [
      "Ælfred", "Ælfwine", "Æthelberht", "Æthelred", "Æthelstan", "Beorhtwulf", "Beorn", "Ceolwulf", "Cerdic",
      "Cenred", "Cuthbert", "Cynewulf", "Eadgar", "Eadmund", "Eadric", "Eadweard", "Eadwig", "Godric",
      "Godwin", "Hereward", "Leofric", "Offa", "Osric", "Oswald", "Oswine", "Sigeberht", "Sigeric", "Wiglaf",
      "Wulfstan", "Wulfric",
    ],
    female: [
      "Æbbe", "Ælfgyth", "Ælfgifu", "Ælfthryth", "Æthelburh", "Æthelflæd", "Æthelgyth", "Æthelthryth",
      "Beorhtgifu", "Burgflæd", "Cwenburh", "Cynethryth", "Eadburh", "Eadgyth", "Eadgifu", "Eadwynn",
      "Godgifu", "Hild", "Leofgifu", "Leofwynn", "Mildburh", "Mildgyth", "Mildrith", "Osburh", "Wulfgifu",
      "Wulfhild", "Wynflæd", "Wynn",
    ],
    surname: [
      "Ælfred", "Æthelstan", "Beorn", "Cuthbert", "Eadgar", "Eadmund", "Eadric", "Eadweard", "Godric",
      "Godwin", "Hereward", "Leofric", "Osric", "Oswald", "Sigeric", "Wiglaf", "Wulfstan", "Wulfric",
    ],
  },

  // Common regions / communities: Southwestern United States, including Arizona and New Mexico; diverse Apache nations.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern English given names and examples of Apache-associated civil or historical family names; not a reconstruction of ceremonial naming.
  "apache": {
    label: "Apache",
    surnameFirst: false,
    male: [
      "Adam", "Albert", "Andrew", "Anthony", "Charles", "Daniel", "David", "Edward", "Francis", "George",
      "Henry", "James", "John", "Joseph", "Leonard", "Michael", "Paul", "Peter", "Robert", "Thomas", "William",
    ],
    female: [
      "Alice", "Anna", "Catherine", "Charlotte", "Christine", "Elizabeth", "Emily", "Grace", "Helen", "Jane",
      "Jean", "Julia", "Laura", "Louise", "Margaret", "Marie", "Mary", "Nancy", "Ruth", "Sarah", "Susan",
    ],
    surname: [
      "Becenti", "Bennett", "Bonito", "Cassa", "Cochise", "Dazen", "Goyette", "Haozous", "Kitcheyan", "Lacapa",
      "Mangas", "Martine", "Nantan", "Naiche", "Pino", "Sanchez", "Sneezy", "Tessay", "Tosch", "Victor",
      "Wilson",
    ],
  },

  // Common regions / communities: Arabian Peninsula, Levant, Iraq, Egypt and North Africa; also some Persian and South Asian names.
  // Original category — all original entries retained.
  "arabic-middle-eastern": {
    label: "Arabic / Middle Eastern",
    surnameFirst: false,
    male: [
      "Adel", "Ahmad", "Ayman", "Akram", "Ali", "Amir", "Anas", "Ashraf", "Bashir", "Bilal", "Dawood", "Fadi",
      "Fahad", "Faisal", "Farid", "Hadi", "Hakim", "Hamza", "Hassan", "Hussein", "Ibrahim", "Imad", "Ismail",
      "Jalal", "Jamal", "Kamal", "Karim", "Khaled", "Khalil", "Laith", "Mahmoud", "Majid", "Malik", "Marwan",
      "Mazen", "Mohammed", "Mustafa", "Nabil", "Nader", "Naeem", "Omar", "Osama", "Qasim", "Rami", "Rashid",
      "Raed", "Samir", "Sami", "Sharif", "Tariq", "Tarek", "Walid", "Yasir", "Yousef", "Yahya", "Zaid",
      "Zahir", "Zakaria", "Ziyad", "Abdullah", "Abdulrahman", "Adnan", "Alaa", "Ammar", "Ayoub", "Badr",
      "Bassam", "Emad", "Ghassan", "Haidar", "Haitham", "Hatem", "Iyad", "Jaber", "Jawad", "Kareem", "Louay",
      "Luay", "Mansour", "Mounir", "Munir", "Nassim", "Nazim", "Qais", "Rafik", "Ramzi", "Riyad", "Saeed",
      "Saleh", "Salim", "Sultan", "Talal", "Tamer", "Wael", "Waleed", "Yazan", "Younes", "Zain", "Zaki",
      "Abbas", "Aziz", "Basil", "Fawzi", "Hisham", "Jihad", "Kassem", "Latif", "Miqdad", "Nouri", "Rauf",
      "Sabir", "Taher", "Umar", "Yahia", "Zuhair", "Farouk", "Shadi", "Nizar", "Moez", "Kinan",
    ],
    female: [
      "Aaliyah", "Amal", "Amira", "Amina", "Aya", "Ayah", "Bushra", "Dalal", "Dania", "Dina", "Farah",
      "Fatima", "Hala", "Hanan", "Heba", "Hind", "Iman", "Jana", "Jamila", "Jumana", "Khadija", "Laila",
      "Lamia", "Lana", "Leila", "Lina", "Maha", "Malak", "Mariam", "Maryam", "Mona", "Nada", "Nadia", "Nadine",
      "Naima", "Nawal", "Nour", "Rania", "Reem", "Rima", "Ruba", "Sabah", "Safa", "Salma", "Samira", "Sara",
      "Shatha", "Soraya", "Taghreed", "Wafa", "Yasmin", "Yasmine", "Zahra", "Zaina", "Zainab", "Zara", "Abeer",
      "Adara", "Afaf", "Alia", "Anoud", "Asma", "Aseel", "Ayla", "Basma", "Batoul", "Dalia", "Dima", "Elham",
      "Fadwa", "Faten", "Ghada", "Ghina", "Habiba", "Haifa", "Hiba", "Inas", "Ibtisam", "Joud", "Kawthar",
      "Kenza", "Layan", "Lubna", "Maysa", "Maysoon", "Muna", "Nisreen", "Noor", "Rabab", "Raghad", "Rasha",
      "Rawan", "Razan", "Ruqayya", "Sahar", "Salsabil", "Sana", "Shaima", "Sumaya", "Tahani", "Tamara",
      "Thuraya", "Wardah", "Yara", "Zeinab", "Amani", "Dalya", "Fariha", "Haneen", "Isra", "Jawhara",
      "Kholoud", "Lujain", "Mahira", "Najwa", "Qamar", "Rim", "Shireen", "Yusra", "Zubaida",
    ],
    surname: [
      "Abadi", "Abbas", "Abdallah", "Abdulrahman", "Abid", "AbuSaleh", "Adham", "Afifi", "Agha", "Ajami",
      "Alam", "Alawi", "Amin", "Ansari", "Arif", "Ashour", "Assaf", "Atallah", "Awad", "Ayoub", "Badawi",
      "Bakir", "Barakat", "Bashir", "Darwish", "Diab", "Eid", "Fahmy", "Farhat", "Farraj", "Fayez", "Ghannam",
      "Habib", "Haddad", "Hakim", "Hamdan", "Hariri", "Hashim", "Hassan", "Hatem", "Hijazi", "Hussein",
      "Ibrahim", "Iskandar", "Issa", "Jabari", "Jaber", "Jamal", "Kanaan", "Karim", "Kassar", "Khalaf",
      "Khalil", "Khoury", "Mansour", "Masri", "Matar", "Mehdi", "Mikhael", "Mustafa", "Nader", "Najjar",
      "Nasr", "Nassif", "Nouri", "Qadir", "Qasem", "Rahman", "Ramadan", "Rizk", "Sabbagh", "Saeed", "Salem",
      "Saleh", "Samara", "Shadid", "Sharif", "Shehadeh", "Suleiman", "Tahan", "Tawil", "Yassin", "Yazbek",
      "Younes", "Zahran", "Zaki", "Zayed", "Zein", "Aoude", "Bazzi", "Chehab", "Dagher", "Fakhoury", "Gerges",
      "Helou", "Karam", "Kassis", "Maalouf", "Nahas", "Saadeh", "Touma", "Zakaria", "Qureshi", "Farooqi",
      "Hussain", "Mirza", "Rahimi", "Siddiqui", "Usmani", "Zaidi", "Al Saud", "Al Nahyan", "Al Khalifa",
      "Al Thani", "Al Fulan", "Bakhtiari", "Pahlavi", "Safavi", "Shirazi", "Tabrizi",
    ],
  },

  // Common regions / communities: Armenia and Armenian diaspora communities in the Caucasus, Middle East, Europe and Americas.
  // Source: Faker 40.1.2 person provider(s): hy_AM; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "armenian": {
    label: "Armenian",
    surnameFirst: false,
    male: [
      "Abel", "Abig", "Abraham", "Adam", "Aharon", "Albert", "Andranik", "Andreas", "Aram", "Aramazd", "Areg",
      "Argam", "Argišti", "Aristakes", "Arman", "Armen", "Armenak", "Arsen", "Artak", "Artavazd", "Artašes",
      "Artem", "Artur", "Artuš", "Aršak", "Aršavir", "Atom", "Avetis", "Azat", "Aġasi", "Ašot", "Aṙušan",
      "Babken", "Bagrat", "Barseġ", "Barxudar", "Baġdasar", "Baġiš", "Baġram", "Beṙnar", "Boris", "Daniel",
      "Denis", "Derenik", "Dominik", "Ervand", "Eġiš", "Filip", "Gabriel", "Gagik", "Galust", "Garegin",
      "Garri", "Garsevan", "Gaspar", "Gaṙnik", "Gevorg", "Geġam", "Goṙ", "Grigor", "Gurgen", "Hakob",
      "Hamazasp", "Hayk", "Haykaz", "Henri", "Hmayak", "Hovhannes", "Hovik", "Hrant", "Hunan", "Husik",
      "J̌ivan", "J̌on", "J̌orǰ", "Karen", "Karl", "Kikos", "Kirakos", "Klod", "Koryun", "Levon", "Mamikon",
      "Manvel", "Margar", "Markos", "Mesrop", "Mexak", "Mher", "Mihran", "Minas", "Murad", "Mušeġ", "Nairi",
      "Narek", "Nerses", "Norayr", "Nubar", "Nšan", "Owilyam", "Pargev", "Paruyr", "Patvakan", "Petros",
      "Poġos", "Raffi", "Sahak", "Sanasar", "Sargis", "Sasun", "Sergey", "Serob", "Seyran", "Simon", "Smbat",
      "Spartak", "Stefan", "Suren", "Taron", "Tigran", "Trdat", "Vahagn", "Vahan", "Vahe", "Vahram", "Varužan",
      "Vasak", "Vazgen", "Vaġaršak", "Viktor", "Vladimir", "Xoren", "Xosrov", "Yuri", "Zaven", "Zohrab",
      "Zohrap", "Zori", "Ēdgar", "Ēduard", "Ōhan", "Ōleg", "Šahen", "Šavarš", "Šmavon", "Žirayr", "Ṙafayel",
      "Ṙobert", "Ṙoman", "Ṙuben", "Ṙudolf",
    ],
    female: [
      "Agapi", "Aida", "Alina", "Alisa", "Alla", "Alvard", "Amalya", "Anahit", "Anastasia", "Angelina", "Ani",
      "Anita", "Anna", "Antonina", "Anuš", "Anya", "Anžela", "Arevik", "Armenuhi", "Armine", "Astġik",
      "Barbara", "Bella", "Briǰit", "Brižit", "Covinar", "Daniella", "Diana", "Dina", "Elena", "Eranuhi",
      "Eva", "Evgine", "Flora", "Frida", "Gabriella", "Gayane", "Gohar", "Greta", "Gyulnara", "Hasmik",
      "Haykuhi", "Hermine", "Heġine", "Hilda", "Inesa", "Inga", "Inna", "Irina", "Izabella", "J̌emma",
      "J̌esika", "J̌eyn", "J̌ulieta", "Karine", "Karolin", "Kasandra", "Kira", "Klara", "Lala", "Larisa",
      "Laura", "Laṙa", "Lena", "Leyla", "Lia", "Liana", "Lida", "Liza", "Luiza", "Lusine", "Magda", "Mane",
      "Margarita", "Maria", "Mariam", "Marianna", "Marine", "Melanya", "Meline", "Meri", "Milena", "Monika",
      "Naira", "Nana", "Nane", "Nare", "Narine", "Nataša", "Nazeli", "Nelli", "Nina", "Nonna", "Nora", "Nune",
      "Nvard", "Patrisia", "Saṙa", "Seda", "Sesilia", "Silva", "Sofya", "Sona", "Stella", "Susanna",
      "Svetlana", "Syuzanna", "Veronika", "Viktorya", "Violeta", "Zaruhi", "Ēlen", "Ēlina", "Ēliza", "Ēmilia",
      "Ēmma", "Ērika", "Ēvelina", "Ōfelya", "Ōlga", "Ōvsanna", "Šahane", "Šušanik", "Žanna", "Ṙaisa", "Ṙebeka",
      "Ṙima", "Ṙita", "Ṙuzan",
    ],
    surname: [
      "Abaǰanyan", "Abaǰyan", "Abasyan", "Abaġyan", "Abelyan", "Abeġyan", "Abešyan", "Abgaryan", "Adabašyan",
      "Adaǰyan", "Adamyan", "Adanelyan", "Adanyan", "Adelyan", "Adeyan", "Adixanyan", "Adiyan", "Adišyan",
      "Adruni", "Adulyan", "Agraklyan", "Agralyan", "Agramazyan", "Agryan", "Agulyan", "Alabašyan",
      "Alabekyan", "Alaberkyan", "Alaberčyan", "Alagyozyan", "Aloyan", "Ananyan", "Andreasyan", "Anġaladyan",
      "Arešyan", "Arzumanyan", "Aslanyan", "Astvacatryan", "Atryan", "Avagyan", "Avdalyan", "Ayvazyan",
      "Azabyan", "Azarbekyan", "Azarumyan", "Azaryan", "Azbekyan", "Azgaldyan", "Azgulyan", "Azikyan",
      "Azilazyan", "Azizxanyan", "Azizyan", "Azryan", "Azulyan", "Aždaryan", "Ažterxanyan", "Ažtikyan",
      "Babalyan", "Babuǰyan", "Badeyan", "Bagratuni", "Baġdasaryan", "Beǰanyan", "Beknazaryan", "Bekyan",
      "Bekzadyan", "Boyaǰyan", "Danielyan", "Dodoxyan", "Doluxanov", "Eganyan", "Egoryan", "Engibaryan",
      "Eribekyan", "Erkanyan", "Esayan", "Fahradyan", "Fṙangyan", "Galstyan", "Gasparyan", "Gavalǰyan",
      "Geravetyan", "Gimišyan", "Grigoryan", "Gulumyan", "Hambarjumyan", "Hatikyan", "Hayrapetyan",
      "Hayrbabamyan", "Hovhannisyan", "Ibrahimbekyan", "Imastunyan", "Isabekyan", "Isahakyan", "Israyelyan",
      "Izmiryan", "Ištoyan", "Išxanyan", "Javaryan", "Jilfuġaryan", "Jvakeryan", "J̌alalbekyan", "J̌anavaryan",
      "J̌angiryan", "J̌igarxanyan", "Kabakulakyan", "Kabaġyan", "Kadarǰyan", "Kaldrikyan", "Kamsaryan",
      "Karagyan", "Karamanukyan", "Karapetyan", "Karaxanyan", "Karčikyan", "Koškakaryan", "Kuyumǰanyan",
      "Lambaryan", "Lazaryan", "Lputyan", "Manandyan", "Manukyan", "Manvelyan", "Mehrabyan", "Mikoyan",
      "Mirzoyan", "Movsisyan", "Nahapetyan", "Nerkararyan", "Nersesyan", "Nersisyan", "Papayan", "Papoyan",
      "Paronikyan", "Parsamyan", "Perečiklyan", "Poġosyan", "Pstikyan", "Salbašyan", "Sanoyan", "Sargsyan",
      "Sarxoyan", "Sirunyan", "Sisoyan", "Solaxyan", "Tasnapetyan", "Topaǰikyan", "Vahuni", "Vardapetyan",
      "Xalikyan", "Xanzadyan", "Xazxazyan", "Xašmanyan", "Xnkoyan", "Xzmalyan", "Yagubyan", "Yaġličyan",
      "Zargaryan", "Zarubyan", "Zaryan", "Zavaryan", "Čaltikyan", "Čansuzyan", "Čapaġǰuryan", "Čaġaryan",
      "Čočkanyan", "Ēlbakyan", "Ġahramanyan", "Ġayfečyan", "Ġazarov", "Ġazinyan", "Ōdyan", "Ōrbelyan",
      "Ōzanyan", "Šagoyan", "Šahbazyan", "Žamagorcyan", "Ṙasimosyan", "Ṙostomyan",
    ],
  },

  // Common regions / communities: Armenian diaspora, especially Lebanon, Syria, Turkey, France and the Americas.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "armenian-western": {
    label: "Western Armenian diaspora",
    surnameFirst: false,
    male: [
      "Aram", "Armen", "Arshag", "Avedis", "Bedros", "Boghos", "Garabed", "Garo", "Gevorg", "Hagop", "Harout",
      "Hovannes", "Karnig", "Krikor", "Levon", "Mardiros", "Mesrob", "Nerses", "Onnig", "Raffi", "Sarkis",
      "Sevag", "Tigran", "Vahan", "Vartan", "Vazken",
    ],
    female: [
      "Ani", "Anahid", "Araks", "Arpine", "Asdghig", "Diana", "Hasmig", "Hayganoush", "Hripsime", "Lena",
      "Lousin", "Lousine", "Maral", "Mariam", "Narine", "Nvart", "Satenig", "Shoghig", "Silva", "Siran",
      "Sona", "Tamar", "Talin", "Zabelle", "Zaruhi",
    ],
    surname: [
      "Apkarian", "Arslanian", "Avedisian", "Baghdassarian", "Bedrosian", "Boghosian", "Chakmakjian", "Dadian",
      "Demirjian", "Derderian", "Garabedian", "Hagopian", "Haroutunian", "Hovsepian", "Kassabian", "Krikorian",
      "Kuyumjian", "Mardirosian", "Mouradian", "Nalbandian", "Ohannessian", "Papazian", "Sarafian",
      "Sarkissian", "Tashjian", "Tavitian", "Vartanian", "Yessayan",
    ],
  },

  // Common regions / communities: Central and Eastern European Jewish communities and descendants in Israel, North America and elsewhere.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Includes Hebrew, Yiddish and European civil names; many surnames are shared across communities.
  "ashkenazi": {
    label: "Ashkenazi Jewish",
    surnameFirst: false,
    male: [
      "Aaron", "Abram", "Avraham", "Baruch", "Binyamin", "Chaim", "David", "Dov", "Efraim", "Eliezer",
      "Eliyahu", "Gershon", "Hershel", "Isaac", "Jacob", "Leib", "Meir", "Mendel", "Moshe", "Nachman",
      "Naftali", "Reuven", "Shlomo", "Shmuel", "Simcha", "Yakov", "Yehuda", "Yitzhak", "Yosef", "Zalman",
    ],
    female: [
      "Adina", "Baila", "Batsheva", "Chana", "Chaya", "Devorah", "Esther", "Feiga", "Fruma", "Gittel", "Golda",
      "Hadassah", "Hinda", "Leah", "Malka", "Miriam", "Nechama", "Pesha", "Rachel", "Raizel", "Rebeka",
      "Rivka", "Rochel", "Ruth", "Sara", "Shaina", "Shoshana", "Tova", "Tzila", "Zelda",
    ],
    surname: [
      "Adler", "Auerbach", "Berg", "Bernstein", "Blumenthal", "Braun", "Cohen", "Eisenberg", "Epstein",
      "Feldman", "Finkelstein", "Friedman", "Geller", "Goldberg", "Goldman", "Greenberg", "Grossman",
      "Halpern", "Horowitz", "Kagan", "Katz", "Klein", "Landau", "Levin", "Levy", "Lichtenstein", "Mandel",
      "Mendelsohn", "Meyer", "Rabinowitz", "Rosen", "Rosenberg", "Rosenfeld", "Rubin", "Sachs", "Schneider",
      "Schwartz", "Segal", "Shapiro", "Silverman", "Stein", "Weiss", "Wolff", "Zilberman",
    ],
  },

  // Common regions / communities: Assyrian communities in Iraq, Syria, Turkey and Iran, with a worldwide diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "assyrian": {
    label: "Assyrian / Syriac",
    surnameFirst: false,
    male: [
      "Abgar", "Addai", "Afram", "Ashur", "Atour", "Augin", "Awraham", "Benyamin", "Daniel", "Dawid", "Elias",
      "Gabriel", "Gewargis", "Hurmiz", "Ishak", "Isho", "Khamis", "Matti", "Mikha", "Narsai", "Ninos",
      "Sargon", "Shamoun", "Toma", "Yonan", "Yousip", "Yusuf", "Zaya",
    ],
    female: [
      "Anahid", "Anita", "Atorina", "Christina", "Dalida", "Diana", "Elishba", "Esther", "Hanna", "Helen",
      "Irene", "Juliana", "Lina", "Maryam", "Mariam", "Nahrin", "Ninoska", "Nora", "Rima", "Rita", "Sara",
      "Sonia", "Shamiram", "Shushan", "Tamar", "Yona",
    ],
    surname: [
      "Abdisho", "Afram", "Atiya", "Benyamin", "Dawood", "Eshoo", "Gabriel", "Givargis", "Hanna", "Hermiz",
      "Ishak", "Khamis", "Matti", "Nissan", "Odisho", "Oshana", "Sako", "Shamoun", "Toma", "Yalda", "Yonan",
      "Yousif", "Younan",
    ],
  },

  // Common regions / communities: Bolivian and Peruvian Altiplano, northern Chile and adjacent Argentina.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Mostly modern Spanish-language personal names and Aymara-associated civil surnames; some overlaps with Quechua.
  "aymara": {
    label: "Aymara",
    surnameFirst: false,
    male: [
      "Andrés", "Antonio", "Carlos", "Daniel", "Diego", "Eduardo", "Felipe", "Francisco", "Inti", "Javier",
      "José", "Juan", "Luis", "Marcelo", "Mario", "Miguel", "Pedro", "Pablo", "Raúl", "Santiago", "Tupac",
    ],
    female: [
      "Adela", "Ana", "Carmen", "Cecilia", "Elena", "Elisa", "Eva", "Francisca", "Isabel", "Juana", "Julia",
      "Lucía", "Luz", "María", "Marta", "Rosa", "Rosario", "Sara", "Sofía", "Teresa", "Wara", "Sisa",
    ],
    surname: [
      "Apaza", "Calisaya", "Chambi", "Chura", "Choque", "Colque", "Condori", "Guarachi", "Huarachi", "Huanca",
      "Larico", "Limachi", "Mamani", "Marca", "Quispe", "Suxo", "Ticona", "Yujra", "Yupanqui", "Zapata",
      "Paco", "Chávez", "Choquehuanca", "Callisaya",
    ],
  },

  // Common regions / communities: Azerbaijan, northwestern Iran and diaspora communities.
  // Source: Faker 40.1.2 person provider(s): az_AZ; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "azerbaijani": {
    label: "Azerbaijani",
    surnameFirst: false,
    male: [
      "Adil", "Adnan", "Arif", "Asiman", "Asəf", "Atabala", "Azər", "Ağamusa", "Behbud", "Bəhlul", "Bəhruz",
      "Bəkir", "Cavad", "Cavid", "Ceyhun", "Coşqun", "Cəlal", "Dadaş", "Dönməz", "Elariz", "Eldar", "Eldəniz",
      "Elgün", "Elman", "Elvin", "Elxan", "Elçin", "Elşad", "Elşən", "Emin", "Etibar", "Faiq", "Fariz",
      "Fikrət", "Fimar", "Firdovsi", "Firudin", "Fuad", "Fəhmin", "Fərhad", "Fərrux", "Fəxri", "Fəyyaz",
      "Fəzail", "Gülağa", "Habil", "Hafiz", "Heydər", "Hümbət", "Hüseynqulu", "Həsən", "Həsənağa", "İlham",
      "İlkin", "İlqar", "İmran", "İnqilab", "İslam", "İsmayıl", "İsrafil", "Kamal", "Kamran", "Kəmaləddin",
      "Kərim", "Lazım", "Lətif", "Mahir", "Maqsud", "Mehdi", "Mehdiqulu", "Mikayıl", "Mirzə", "Murad", "Musa",
      "Muxtar", "Mümtaz", "Mürsəl", "Müslüm", "Müzəffər", "Məmməd", "Nakif", "Nazim", "Nazir", "Nağı", "Niyaz",
      "Niyazi", "Nurlan", "Nuru", "Nurşən", "Nurşərəf", "Nuşirəvan", "Nüsrət", "Nəcəf", "Nəsib", "Nəsimi",
      "Orxan", "Pünhan", "Pərviz", "Qabil", "Qiyas", "Qulam", "Qəzənfər", "Rafael", "Rafiq", "Ramid", "Ramil",
      "Ramiz", "Rasim", "Razi", "Rizvan", "Roman", "Ruslan", "Rəis", "Rəşad", "Sabir", "Sadiq", "Sadıq",
      "Salman", "Samir", "Seyfulla", "Seyfəddin", "Seyran", "Sirac", "Süleyman", "Səbuhi", "Sənan", "Sərvər",
      "Səxavət", "Tahir", "Talıb", "Teymuraz", "Teymurçin", "Tural", "Turxan", "Tərlan", "Vahid", "Vaqif",
      "Vasif", "Vazeh", "Veysəl", "Vilayət", "Vurğun", "Vüsal", "Vəfadar", "Vəli", "Xaliq", "Xaləddin",
      "Xamis", "Xudaverdi", "Xudu", "Xəlil", "Xəyal", "Yaqub", "Yasin", "Yasəf", "Yavər", "Yusif", "Yəhya",
      "Zamiq", "Zamir", "Zaur", "Ziya", "Çingiz", "Üzeyir", "Şahlar", "Şakir", "Şamil", "Şükür", "Şıxı",
      "Şərəfəddin", "Əflatun", "Əhəd", "Əjdər", "Əkbər", "Əli", "Əliş", "Ələkbər", "Əmin", "Ərtoğrul", "Əşrəf",
    ],
    female: [
      "Afaq", "Aidə", "Almaz", "Arzu", "Aybəniz", "Aygül", "Ayla", "Aynur", "Aynurə", "Aysel", "Ayçiçək",
      "Ağca", "Balaxanım", "Brilyant", "Bənövşə", "Cahan", "Ceyhunə", "Ceyran", "Cəmalə", "Dilşad", "Dünya",
      "Dürdanə", "Dürnisə", "Elmira", "Elnarə", "Familə", "Fatihə", "Fatimə", "Fatma", "Fidan", "Fimar",
      "Fizzə", "Fəridə", "Güllər", "Gülmira", "Gülnarə", "Gülnaz", "Gülnur", "Gültəkin", "Gülxar", "Gülzar",
      "Gülçöhrə", "Gülüstan", "Gülşən", "Gülər", "Hicran", "Hökümə", "Hüsniyyə", "Həcər", "İlahə", "İlhamə",
      "İlkanə", "İlnarə", "İnarə", "İnayət", "İntizar", "Jalə", "Kamilə", "Könül", "Kövsər", "Kəmalə", "Lalə",
      "Leyla", "Leyli", "Lütfiyyə", "Ləman", "Lətafət", "Lətifə", "Mahirə", "Mahizər", "Mehin", "Meyransa",
      "Mülayim", "Münəvvər", "Müşkünaz", "Mədinə", "Məhru", "Mərziyyə", "Məsmə", "Mətanət", "Nahidə", "Naibə",
      "Nailə", "Narıngül", "Natəvan", "Nazilə", "Nazimə", "Nigar", "Nihal", "Nuranə", "Nurlana", "Növrəstə",
      "Nübar", "Nüşabə", "Nəfisə", "Nərmin", "Nəzakət", "Ofeliya", "Pəri", "Pərvanə", "Qaratel", "Qumru",
      "Qönçə", "Raifə", "Rasimə", "Raziyə", "Reyhan", "Ruhəngiz", "Ruqiyyə", "Röya", "Rübeyda", "Rəhilə",
      "Rəxşəndə", "Sacidə", "Sahibə", "Samirə", "Sara", "Sayalı", "Selcan", "Sevinc", "Seyran", "Sidiqə",
      "Sima", "Simuzər", "Sitarə", "Suğra", "Sürəyya", "Səadət", "Səbirə", "Sədaqət", "Səhər", "Səlimə",
      "Səma", "Səmayə", "Sənubər", "Səriyyə", "Tamara", "Tamilla", "Tomris", "Tovuz", "Turan", "Turanə",
      "Tutu", "Tünzalə", "Təhminə", "Təranə", "Ulduz", "Vahidə", "Validə", "Vəfa", "Xalidə", "Xatirə", "Xavər",
      "Xumar", "Xəyalə", "Yaqub", "Yasəmən", "Yazgül", "Yeganə", "Zeynəb", "Zeynəgül", "Ziba", "Zibeydə",
      "Zöhrə", "Züleyxa", "Zümrüd", "Zərnigar", "Çimnaz", "Çiçək", "Ülkər", "Şahnaz", "Şükufə", "Şəfa",
      "Şəfiqə", "Şəhla", "Şəmsiyyə", "Şərafət", "Ədibə", "Əminə", "Əntiqə",
    ],
    surname: [
      "Abbaslı", "Abbasov", "Abbasova", "Abbaszadə", "Abdullaoğlu", "Abdullayeva", "Abdullazadə", "Arifcanov",
      "Arzulu", "Aslanova", "Atakişioğlu", "Axundlu", "Axundova", "Axundzadə", "Ağaoğlu", "Babanlı", "Baharlı",
      "Bakıxanov", "Bağırov", "Bağırova", "Budaqlı", "Bünyadzadə", "Bəşiroğlu", "Cabbarlı", "Camalov",
      "Cuvarlı", "Cəbrayılov", "Cəfəroğlu", "Cəfərzadə", "Dağlı", "Dəmirbəyli", "Elatlı", "Eminov", "Eyvazalı",
      "Eyvazlı", "Fikrətoğlu", "Fərəcov", "Gözəlov", "Gəncəli", "Hacıbəyli", "Hacıbəyov", "Hacızadə",
      "Heydərli", "Hümmətov", "Hüseynbəyli", "Hüseynli", "Hüseynov", "Həsənzadə", "İbrahimbəyov", "İbrahimli",
      "İbrahimov", "İbrahimova", "İbrahimoğlu", "İdrisli", "İdrisoğlu", "İldırımoğlu", "İsabəyli", "İsaxanlı",
      "İsmayılqızı", "Köçərli", "Kərimli", "Kərimov", "Kərimova", "Kərimzadə", "Lətifxanlı", "Mahmudov",
      "Mahmudova", "Makulu", "Mirəhmədov", "Mirələmov", "Musabəyov", "Musaxanlı", "Muğanlı", "Məcnunbəyov",
      "Məhərrəmli", "Məhərrəmoğlu", "Məhərrəmzadə", "Məlikzadə", "Məmmədli", "Məmmədquluzadə", "Məmmədxanlı",
      "Nağıoğlu", "Nurəli", "Nəbibəyli", "Nəbioğlu", "Nəbiqızı", "Nərimanov", "Nərimanova", "Nəsirli",
      "Nəzirli", "Nəzirova", "Nəzərli", "Orucov", "Pənahov", "Qabiloğlu", "Qafarov", "Qafurbəyli", "Qarabağlı",
      "Qoçulu", "Qurbanlı", "Qurbanov", "Qutqaşınlı", "Qədirzadə", "Qəhrəmanlı", "Qənizadə", "Rzaquluzadə",
      "Rövşənov", "Rəhimli", "Rəhimov", "Rəhmanova", "Rəsulzadə", "Sadiqov", "Sadıxov", "Sadıxova",
      "Seyidbəyli", "Sultanlı", "Sultanov", "Süleymanlı", "Süleymanov", "Sədalı", "Sədaqətoğlu", "Səfərli",
      "Səlimova", "Səmədoğlu", "Tahirzadə", "Talıblı", "Talıbov", "Tapdıqlı", "Tağızadə", "Turallı", "Uğurlu",
      "Vilayətoğlu", "Vəfalı", "Vəlioğlu", "Vəlixanov", "Vəliyeva", "Vəlizadə", "Vəzirov", "Vəziroğlu",
      "Xakimov", "Xəlilov", "Yaqubov", "Yusifoğlu", "Yusifqızı", "Yusifzadə", "Çingizoğlu", "Çəmənli",
      "Çəmənzəminli", "Şahbuzlu", "Şahsuvarlı", "Şeyxzadə", "Şirvanzadə", "Şükürlü", "Şükürov", "Şıxlı",
      "Şərifova", "Əbdülrəhmanlı", "Ədiloğlu", "Əfəndiyeva", "Əfəndizadə", "Əhmədli", "Əhmədov", "Əhmədzadə",
      "Əkbərova", "Əlibəyli", "Əlioğlu", "Əlixanlı", "Əliyeva", "Əlizadə", "Əlləzoğlu", "Ələkbərli",
      "Ələkbərzadə", "Əmirli", "Əmirova", "Əsgərli", "Əsgərov", "Əsgərova", "Əsgəroğlu", "Əylisli", "Əzimzadə",
    ],
  },

  // Common regions / communities: Central, eastern and southern Africa; Bantu-speaking peoples across a large and diverse region.
  // Original category — all original entries retained.
  "bantu": {
    label: "Bantu",
    surnameFirst: false,
    male: [
      "Abasi", "Ade", "Akinyi", "Amari", "Andile", "Anele", "Ayanda", "Bakari", "Bhekizizwe", "Bongani",
      "Chibale", "Chikondi", "Chuma", "Dalitso", "Dumisani", "Enzi", "Faraji", "Fikile", "Gift", "Givemore",
      "Hlengiwe", "Imani", "Jabulani", "Juma", "Kabelo", "Kagiso", "Kamau", "Katlego", "Kato", "Kazi", "Khaya",
      "Kofi", "Kwame", "Langa", "Lethabo", "Lindani", "Lunga", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mosi", "Mpho", "Musa", "Nathi", "Nkosi", "Nkosinathi", "Nuru",
      "Obi", "Omari", "Sabelo", "Sipho", "Tau", "Temba", "Themba", "Thulani", "Vusi", "Zuberi",
    ],
    female: [
      "Abena", "Ada", "Adia", "Aisha", "Akinyi", "Amahle", "Amara", "Amina", "Andiswa", "Anele", "Anika",
      "Asantewa", "Ayana", "Ayanda", "Aziza", "Bontle", "Busisiwe", "Chiamaka", "Chikondi", "Dineo", "Eshe",
      "Folami", "Funani", "Halima", "Hasina", "Imani", "Jamila", "Kagiso", "Kamaria", "Kanene", "Kesi",
      "Koketso", "Lerato", "Lindiwe", "Lungile", "Malaika", "Mandisa", "Mbalenhle", "Mbali", "Mirembe", "Mpho",
      "Naledi", "Nandi", "Nandipha", "Neema", "Nia", "Nomsa", "Nomvula", "Nonhlanhla", "Ntombi", "Nuru",
      "Nyasha", "Oluchi", "Onyeka", "Palesa", "Puleng", "Rudo", "Rutendo", "Sade", "Sibongile", "Simphiwe",
      "Siphesihle", "Tafadzwa", "Tariro", "Thandeka", "Thandiwe", "Thembi", "Thobile", "Tshegofatso", "Tumelo",
      "Vuyiswa", "Wanjiku", "Yewande", "Zahara", "Zanele", "Zinhle", "Abeni", "Boitumelo", "Chipo", "Efua",
      "Folake", "Kefilwe", "Khensani", "Lebogang", "Lethabo", "Mapaseka", "Matshidiso", "Neo", "Nokuthula",
      "Onthatile", "Rethabile", "Sinenhlanhla", "Tendai", "Tumisang", "Zandile", "Zola",
    ],
    surname: [
      "Achebe", "Adeyemi", "Afolayan", "Akinwale", "Baloyi", "Banda", "Biko", "Chikane", "Chirwa", "Dhlamini",
      "Dube", "Gumede", "Hadebe", "Juma", "Kamau", "Khumalo", "Khoza", "Kibet", "Kone", "Luthuli", "Mabena",
      "Mabika", "Mabaso", "Madonsela", "Magufuli", "Mahachi", "Makgoba", "Makhubu", "Makwenda", "Malinga",
      "Mangena", "Maseko", "Masuku", "Mathebula", "Matlala", "Mazibuko", "Mbatha", "Mbeki", "Mhlongo",
      "Mkhize", "Mlambo", "Mokoena", "Molefe", "Moloi", "Moyo", "Mpofu", "Mthembu", "Mudenda", "Mugabe",
      "Mukasa", "Mukwena", "Munyai", "Mutasa", "Mwangi", "Mwansa", "Ncube", "Ndlovu", "Nene", "Ngcobo",
      "Ngugi", "Ngubane", "Nkosi", "Nkomo", "Nkrumah", "Nzimande", "Obi", "Odinga", "Okafor", "Okeke", "Okoro",
      "Omondi", "Onyango", "Osei", "Owusu", "Phiri", "Sibiya", "Sithole", "Tau", "Tembo", "Tshabalala",
      "Vilakazi", "Xitsonga", "Yeboah", "Zulu", "Bhengu", "Jele", "Kekana", "Ledwaba", "Mahlangu", "Masemola",
      "Mthimkhulu", "Nxumalo", "Radebe", "Shongwe", "Tshivhase", "Zuma",
    ],
  },

  // Common regions / communities: Basque Country and Navarre in Spain and southwestern France; diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "basque": {
    label: "Basque",
    surnameFirst: false,
    male: [
      "Aitor", "Ander", "Antton", "Asier", "Eneko", "Gorka", "Iban", "Iker", "Imanol", "Iñaki", "Jon",
      "Joseba", "Julen", "Kepa", "Lander", "Mikel", "Oier", "Patxi", "Unai", "Urko", "Xabier", "Xuban",
    ],
    female: [
      "Ainhoa", "Ainara", "Alaia", "Amaia", "Ane", "Arantxa", "Edurne", "Garazi", "Haizea", "Idoia", "Irati",
      "Itziar", "Izaro", "June", "Leire", "Lorea", "Maialen", "Maitane", "Miren", "Nahia", "Nerea", "Olatz",
      "Uxue", "Zuriñe",
    ],
    surname: [
      "Agirre", "Arana", "Aranburu", "Arrieta", "Arzalluz", "Azkue", "Bengoetxea", "Etxebarria", "Etxeberria",
      "Etxepare", "Etxeberri", "Garai", "Goikoetxea", "Gorostiaga", "Ibarretxe", "Ibarra", "Irizar", "Iturbe",
      "Larrañaga", "Mendizabal", "Ochoa", "Olabarria", "Otegi", "Ugarte", "Uribe", "Zabala", "Zubizarreta",
    ],
  },

  // Common regions / communities: Bangladesh and West Bengal, India.
  // Source: Faker 40.1.2 person provider(s): bn_BD; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "bengali": {
    label: "Bengali",
    surnameFirst: false,
    male: [
      "Abhi", "Abhiṣēka", "Ajaẏa", "Ajita", "Akṣaẏa", "Amala", "Arghya", "Arka", "Arṇaba", "Aśōka", "Binaẏa",
      "Birāṭa", "Bādala", "Bākēra", "Bāsira", "Cañcala", "Caẏana", "I'usupha", "Ijāja", "Ikabāla", "Imana",
      "Imatiẏāja", "Iśatiẏāka", "Jagadīśa", "Jaẏadīpa", "Jaẏanta", "Karima", "Kunāla", "Kāphi", "Liṭana",
      "Manōja", "Milana", "Mr̥nāla", "Mr̥tyuñjaẏa", "Munatākima", "Munatāsira", "Muśaphika", "Mōstāphija",
      "Naẏana", "Nā'ima", "Nādima", "Pradyumna", "Pradīpa", "Pratyaẏa", "Praśānta", "Pritama", "Priẏa",
      "Priẏama", "Prānta", "Rahima", "Rudra", "Rāhula", "Rāja", "Rāju", "Rāsēla", "Rāśēda", "Rāśēdula",
      "Rāẏahāna", "Rōhita", "Sajība", "Saumika", "Saumya", "Suśānta", "Sābbira", "Sābēra", "Tanaẏa", "Tanmaẏa",
      "Tuṣāra", "Tāmima", "Ābbāsa", "Ābira", "Ābu", "Ādi", "Ājama", "Ājāda", "Ākāśa", "Ānanda", "Ānisa",
      "Āriẏāna", "Āsāda", "Ātāhāra", "Āśutōṣa", "Āśīṣa", "Āẏuṣa", "Ēkarāmula", "Ēnāmula", "Śahidula", "Śubha",
      "Śā'ōna", "Śāhajāhāna", "Śāhābāja", "Śānta", "Śēkhara",
    ],
    female: [
      "Aditi", "Adr̥tā", "Ahanā", "Alōkā", "Anan'yā", "Aninditā", "Antarā", "Arnā", "Arpitā", "Añjanā",
      "Bidyā", "Binā", "Bipāśā", "Br̥ṣṭi", "Bām̐dhana", "Dūrgā", "Haimantī", "Iśitā", "Janā", "Jōbāẏadā",
      "Kabitā", "Khuśi", "Kābēri", "Kājala", "Kēẏā", "Latā", "Milā", "Mima", "Minā", "Mithilā", "Miṣṭi",
      "Mādhu", "Mādhurī", "Mālihā", "Mēhajābina", "Mōnālisā", "Nanditā", "Niśitā", "Nusarāta", "Phaujiẏā",
      "Phārihā", "Priẏati", "Priẏā", "Priẏāṅkā", "Prīti", "Rinā", "Rājiẏā", "Rōjinā", "R̥ṣitā", "Sumā'iẏā",
      "Surabhi", "Sānajidā", "Tāmānnā", "Tāsanima", "Tāsaphiẏā", "Āktārā", "Āliẏā", "Āmāẏā", "Āphasānā",
      "Āphiphā", "Āphiẏā", "Āriẏā", "Āruṇi", "Ārādhyā", "Āsiphā", "Āśbinī", "Āśā", "Āśālatā", "Āẏuśi", "Āẏēśā",
      "Īśāni", "Śrābantī", "Śrābanī", "Śubhaśrī", "Śāramina", "Ḍali",
    ],
    surname: [
      "Bandōpādhyāẏa", "Barmana", "Basu", "Biśbāsa", "Byānārji", "Bāgacī", "Bēgama", "Bōsa", "Candra",
      "Caudhurī", "Caṭṭōpādhyāẏa", "Cyāṭārji", "Datta", "Dāsa", "Dāśaguptā", "Dē", "Dēba", "Gaṅgōpādhyāẏa",
      "Ghōṣa", "Gāṅguli", "Haka", "Hurā'irā", "Hākima", "Hōsā'ina", "Isalāma", "Jāhāna", "Jāmāna", "Khāna",
      "Khānama", "Khātuna", "Kumāra", "Kādēra", "Kānta", "Majumadāra", "Manḍala", "Mitra", "Miñā", "Miśra",
      "Mr̥dhā", "Mukhārji", "Mōṛala", "Pradhāna", "Prāmānika", "Pāla", "Pāṇḍē", "Pōddāra", "Rahamāna", "Rā'ō",
      "Rāẏa", "Sarakāra", "Sinahā", "Siṁ", "Sulatānā", "Sāhā", "Sēna", "Tābāsasuma", "Tālukadāra", "Uddina",
      "Yādaba", "Ā'ōẏāla", "Ābadullāha", "Ācāryya", "Āktāra", "Ālama", "Āli", "Ārā", "Śuklā", "Ṭhākura",
    ],
  },

  // Common regions / communities: Myanmar and Burmese-speaking diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Burmese names generally do not use inherited surnames. The second-name slot is a pool of personal-name elements, adapted for future colony use.
  "burmese": {
    label: "Burmese / Myanmar",
    surnameFirst: false,
    male: [
      "Aung", "Aung Kyaw", "Aung Min", "Aung Naing", "Aung Soe", "Hla", "Hlaing", "Htet", "Htun", "Kaung",
      "Khin", "Ko", "Kyaw", "Kyaw Min", "Kyaw Zaw", "Lin", "Min", "Myat", "Myint", "Naing", "Nanda", "Nay Lin",
      "Nyi", "Phyo", "Soe", "Than", "Thein", "Thura", "Tun", "Win", "Ye", "Zaw",
    ],
    female: [
      "Aye", "Aye Aye", "Aye Chan", "Hla", "Hnin", "Hnin Ei", "Hsu", "Htet", "Khin", "Khin May", "Khin Myat",
      "Khin Thida", "May", "May Thu", "Moe", "Mya", "Mya Mya", "Myat", "Nan", "Nandar", "Nwe", "Phyu",
      "Sandar", "Su", "Thandar", "Thazin", "Thida", "Thiri", "Thuzar", "Wai", "Wint", "Yamin",
    ],
    surname: [
      "Aung", "Hla", "Hlaing", "Htet", "Htun", "Khin", "Kyaw", "Lwin", "Min", "Moe", "Myat", "Myint", "Naing",
      "Oo", "Phyo", "Soe", "Than", "Thein", "Thant", "Thura", "Tun", "Wai", "Win", "Ye", "Zaw",
    ],
  },

  // Common regions / communities: Eastern Roman Empire, centered on Constantinople, Anatolia and the eastern Mediterranean.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions.
  "byzantine": {
    label: "Byzantine revival",
    surnameFirst: false,
    male: [
      "Alexios", "Andronikos", "Basileios", "Constantinos", "Demetrios", "Georgios", "Gregorios", "Herakleios",
      "Ioannes", "Isaakios", "Justinianos", "Konstantinos", "Leon", "Manouel", "Michael", "Niketas",
      "Nikephoros", "Romanos", "Stephanos", "Theodoros", "Theophilos", "Zeno",
    ],
    female: [
      "Agathe", "Anna", "Anastasia", "Anthousa", "Eirene", "Eudokia", "Euphrosyne", "Euphemia", "Helena",
      "Kassia", "Katerina", "Maria", "Pulcheria", "Sophia", "Theodora", "Theodosia", "Zoe", "Xenia",
      "Iouliana", "Kale", "Martha",
    ],
    surname: [
      "Angelos", "Argyros", "Botaneiates", "Bryennios", "Doukas", "Gabalas", "Kantakouzenos", "Komnenos",
      "Laskaris", "Melissenos", "Mouzalon", "Palaiologos", "Phokas", "Skleros", "Tarchaneiotes", "Tornikios",
      "Tzimiskes", "Vatatzes",
    ],
  },

  // Common regions / communities: Louisiana, especially Acadiana and New Orleans, and Gulf Coast diaspora; distinct but overlapping traditions.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "cajun-creole": {
    label: "Cajun / Louisiana Creole",
    surnameFirst: false,
    male: [
      "Andre", "Antoine", "Armand", "Augustin", "Baptiste", "Bernard", "Camille", "Claude", "Clovis",
      "Dominique", "Edmond", "Emile", "Etienne", "Felix", "Gaston", "Gerard", "Henri", "Jacques", "Jean",
      "Jules", "Laurent", "Louis", "Lucien", "Marcel", "Maurice", "Pierre", "Rene", "Sylvain", "Théophile",
      "Victor",
    ],
    female: [
      "Adèle", "Agnès", "Amélie", "Antoinette", "Aurelia", "Bernadette", "Cécile", "Celeste", "Claudette",
      "Delphine", "Elise", "Estelle", "Eugenie", "Evangeline", "Felicia", "Genevieve", "Hélène", "Irma",
      "Josephine", "Louise", "Lucille", "Madeleine", "Marie", "Marguerite", "Odette", "Pauline", "Renee",
      "Rose", "Sidonie", "Yvonne",
    ],
    surname: [
      "Arceneaux", "Aucoin", "Babin", "Barras", "Benoit", "Bergeron", "Boudreaux", "Bourgeois", "Broussard",
      "Comeaux", "Cormier", "Daigle", "Doucet", "Duhon", "Fontenot", "Guidry", "Hebert", "Landry", "LeBlanc",
      "LeJeune", "Lemoine", "Melancon", "Mouton", "Naquin", "Pellerin", "Richard", "Robichaux", "Savoy",
      "Stelly", "Thibodeaux", "Trahan", "Verret",
    ],
  },

  // Common regions / communities: English-, Spanish-, French- and Dutch-speaking Caribbean; Jamaica, Haiti, Trinidad and Tobago, Barbados and neighboring islands.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "caribbean": {
    label: "Caribbean",
    surnameFirst: false,
    male: [
      "Aaron", "Andre", "Anthony", "Akeem", "Alton", "Ashton", "Carlton", "Cedric", "Clive", "Dwayne",
      "Darren", "Devon", "Dwight", "Everton", "Fitzroy", "Garth", "Gavin", "Horace", "Jamal", "Jerome",
      "Kareem", "Keon", "Keston", "Kwame", "Lennox", "Leroy", "Lloyd", "Malik", "Marvin", "Nigel", "Orlando",
      "Ravi", "Ricardo", "Rohan", "Shaun", "Tariq", "Trevor", "Winston", "Yannick",
    ],
    female: [
      "Aaliyah", "Althea", "Anika", "Annette", "Ayanna", "Beverley", "Camille", "Celeste", "Chantal",
      "Charmaine", "Crystal", "Danielle", "Denise", "Faye", "Giselle", "Imani", "Janelle", "Janice", "Jasmine",
      "Keisha", "Kimberly", "Latoya", "Leonie", "Marcia", "Marisol", "Marlene", "Nadia", "Nadine", "Nalini",
      "Natasha", "Priya", "Renee", "Rochelle", "Shanice", "Sharlene", "Simone", "Tanya", "Tia", "Yvette",
    ],
    surname: [
      "Adams", "Alleyne", "Anthony", "Baptiste", "Beckford", "Blake", "Brown", "Campbell", "Clarke",
      "Cumberbatch", "Daniel", "Davis", "Desir", "Edwards", "Francis", "Grant", "Haynes", "Holder", "Jean",
      "Joseph", "Lewis", "Maraj", "Maharaj", "Marshall", "McKenzie", "Mendes", "Miller", "Mohammed", "Pierre",
      "Powell", "Reid", "Richards", "Robinson", "Sammy", "Sealy", "Singh", "Thomas", "Williams", "Wilson",
      "Worrell",
    ],
  },

  // Common regions / communities: Ireland, Scotland, Wales, Brittany, Cornwall and the Isle of Man; broad mixed Celtic pool.
  // Original category — all original entries retained.
  "celtic": {
    label: "Celtic",
    surnameFirst: false,
    male: [
      "Aidan", "Alastair", "Alwyn", "Angus", "Artair", "Arthur", "Baird", "Barra", "Beathan", "Blair", "Bran",
      "Brendan", "Brian", "Brody", "Bryce", "Callum", "Cameron", "Caradoc", "Cassian", "Cian", "Cillian",
      "Colin", "Conall", "Conan", "Connor", "Cormac", "Craig", "Cuan", "Dafydd", "Declan", "Diarmuid",
      "Dillon", "Domhnall", "Dougal", "Duncan", "Dylan", "Eamon", "Eoghan", "Euan", "Ewan", "Fearghus",
      "Fergus", "Fiachra", "Finlay", "Finn", "Fintan", "Fraser", "Gareth", "Gavin", "Gordon", "Graeme",
      "Hamish", "Ian", "Ivor", "Keane", "Keir", "Kenneth", "Kieran", "Lachlan", "Lennox", "Lorcan", "Malcolm",
      "Murray", "Niall", "Oisin", "Owain", "Padraig", "Rhodri", "Ronan", "Ruairi", "Seamus", "Shane", "Sorley",
      "Tadhg", "Tiernan", "Torin", "Tristan", "Aengus", "Brennan", "Caelan", "Caolan", "Cathal", "Donal",
      "Eirian", "Emrys", "Fionn", "Gwydion", "Iestyn", "Llyr", "Mael", "Nevan", "Pryderi", "Riordan",
      "Taliesin", "Taran", "Tavish", "Ultan", "Vaughn", "Wyn",
    ],
    female: [
      "Aileen", "Ailsa", "Aine", "Alannah", "Arwen", "Asha", "Branna", "Bridget", "Bronwen", "Caitlin",
      "Caoimhe", "Catriona", "Ceridwen", "Ciara", "Cliona", "Deirdre", "Eabha", "Eileen", "Eilidh", "Elaine",
      "Elspeth", "Enya", "Erin", "Ethne", "Euna", "Ffion", "Fiona", "Freya", "Grainne", "Iona", "Isla",
      "Keeva", "Kenna", "Kyla", "Laoise", "Liadan", "Maeve", "Mairi", "Moira", "Morag", "Morrigan", "Muirne",
      "Nessa", "Niamh", "Orla", "Rhiannon", "Roisin", "Rowena", "Saoirse", "Shannon", "Sheila", "Sinead",
      "Skye", "Sorcha", "Tegan", "Una", "Yseult", "Aisling", "Arianwen", "Blodeuwedd", "Briallen", "Cerys",
      "Dervla", "Eirlys", "Eluned", "Fionnuala", "Glenna", "Isolde", "Keelin", "Lilias", "Mabli", "Nerys",
      "Olwen", "Ragna", "Rhonwen", "Senga", "Tamsin", "Aibhilin", "Bethan", "Carys", "Dilys", "Eithne",
      "Fenella", "Gwendolyn", "Heulwen", "Luned", "Mairead", "Nolwenn", "Ragnaid", "Seren", "Talulla",
      "Winifred", "Ysolde", "Aurelia", "Branwen", "Eleri", "Morna",
    ],
    surname: [
      "Abernathy", "Ainsley", "Bannon", "Boyle", "Branigan", "Brennan", "Brogan", "Callaghan", "Campbell",
      "Carmichael", "Cassidy", "Clancy", "Connelly", "Cormier", "Daley", "Donovan", "Douglas", "Duffy",
      "Dugan", "Duncan", "Dunn", "Farrell", "Finnegan", "Fitzpatrick", "Flanagan", "Flynn", "Gallagher",
      "Gilmore", "Graham", "Griffin", "Kavanagh", "Keegan", "Kennedy", "Lennon", "MacAllister", "MacBride",
      "MacCarthy", "MacDougall", "MacGregor", "MacIntyre", "MacKenzie", "MacLeod", "MacMahon", "MacNamara",
      "Malone", "McBride", "McCall", "McCormick", "McDonagh", "McDowell", "McFadden", "McKenna", "McLaughlin",
      "McNeill", "Molloy", "Montgomery", "Moran", "Morgan", "Murphy", "Murray", "Nolan", "O'Brien",
      "O'Callaghan", "O'Connell", "O'Donnell", "O'Leary", "O'Malley", "O'Neill", "O'Reilly", "Quinn",
      "Reardon", "Riordan", "Sweeney", "Tierney", "Wallace", "Welsh", "Ahearn", "Byrne", "Corrigan", "Delaney",
      "Ferguson", "Kerrigan", "MacAuley", "MacDermott", "McGuinness", "Muldoon", "O'Dwyer", "O'Keeffe",
      "Redmond", "Rourke", "Sheridan", "Treacy", "Vaughan", "Whelan", "Ackerley", "Cavanaugh", "Dempsey",
      "Hanrahan",
    ],
  },

  // Common regions / communities: Congo Basin and neighboring Central African countries.
  // Original category — all original entries retained.
  "central-african": {
    label: "Central African",
    surnameFirst: false,
    male: [
      "Abdou", "Adama", "Alphonse", "Andre", "Anicet", "Armel", "Aubin", "Bakari", "Basile", "Blaise",
      "Cedric", "Christian", "Clement", "Cyprien", "Didier", "Dieudonne", "Emery", "Emmanuel", "Etienne",
      "Evariste", "Fabien", "Fidele", "Francis", "Frederic", "Gaston", "Gilbert", "Guy", "Herve", "Ignace",
      "Isaac", "Jacques", "Jean-Bosco", "Jean-Claude", "Jean-Marie", "Jonas", "Joseph", "Justin", "Kabila",
      "Koffi", "Laurent", "Leon", "Ludovic", "Marcel", "Martin", "Michel", "Moise", "Moussa", "Nestor",
      "Ngoma", "Olivier", "Pascal", "Patrice", "Paulin", "Prosper", "Remy", "Richard", "Roger", "Salomon",
      "Samuel", "Serge", "Sylvain", "Theophile", "Thierry", "Tresor", "Valentin", "Victor", "Vincent",
      "Wilfried", "Yannick", "Yves", "Zacharie", "Aimable", "Bonaventure", "Celestin", "Desire", "Elisee",
      "Faustin", "Gervais", "Honore", "Innocent", "Joachim", "Landry", "Moke", "Nicaise", "Placide", "Rene",
      "Sosthene", "Tshimanga", "Vianney", "Yvon", "Zola", "Apollinaire", "Bokanga", "Donatien", "Kanku",
      "Mwamba", "Nzinga", "Tshisekedi", "Yuma",
    ],
    female: [
      "Adele", "Agnes", "Aimee", "Albertine", "Aline", "Aminata", "Ange", "Anita", "Arielle", "Beatrice",
      "Bernadette", "Brigitte", "Carine", "Cecile", "Chantal", "Charlotte", "Clarisse", "Claudine", "Colette",
      "Delphine", "Diane", "Divine", "Edith", "Elodie", "Emilienne", "Esperance", "Esther", "Eugenie",
      "Fabiola", "Felicite", "Florence", "Francoise", "Georgette", "Germaine", "Gisele", "Grace", "Henriette",
      "Immaculee", "Ines", "Jeannette", "Josephine", "Julienne", "Justine", "Liliane", "Lucie", "Madeleine",
      "Marcelle", "Marie-Claire", "Marthe", "Monique", "Nadine", "Natacha", "Noella", "Odette", "Olive",
      "Patience", "Pauline", "Precieuse", "Rachel", "Regine", "Rosalie", "Rose", "Sabine", "Sandrine",
      "Solange", "Stephanie", "Sylvie", "Therese", "Valerie", "Veronique", "Victoire", "Yolande", "Apolline",
      "Benedicte", "Chimene", "Desiree", "Elisabeth", "Faustine", "Gloria", "Honorine", "Innocente", "Josiane",
      "Laurette", "Mireille", "Nelly", "Prisca", "Ruth", "Seraphine", "Tatiana", "Violette", "Yvette",
      "Zawadi", "Annonciade", "Bibiche", "Donatienne", "Estelle", "Kanku", "Mado", "Nzola", "Theodosie",
    ],
    surname: [
      "Abanda", "Akono", "Asseko", "Bemba", "Bikoko", "Bisimwa", "Bokassa", "Bopoto", "Djemba", "Ekanga",
      "Essomba", "Fouda", "Ilunga", "Kabeya", "Kabongo", "Kabasele", "Kabila", "Kabwe", "Kalala", "Kalume",
      "Kambale", "Kanku", "Kasongo", "Katembo", "Kitenge", "Koumba", "Likongo", "Lokonga", "Lukusa", "Makengo",
      "Malonga", "Mandanda", "Mangala", "Mbala", "Mbemba", "Mbida", "Mbuyi", "Moke", "Mokono", "Mongo",
      "Moukoko", "Mpoyo", "Mwamba", "Ndombele", "Ndong", "Ndzi", "Ngoma", "Ngoy", "Nguema", "Nkongolo",
      "Nsimba", "Ntumba", "Nzinga", "Obame", "Okoko", "Ondo", "Owona", "Samba", "Tchameni", "Tshipamba",
      "Tshisekedi", "Yoka", "Yombo", "Zola", "Abega", "Bongonda", "Dikembe", "Ekani", "Fokou", "Kabasele",
      "Lutumba", "Makosso", "Mavoungou", "Mputu", "Ndaye", "Ngalula", "Nlandu", "Obiang", "Okito", "Songo",
      "Taty", "Tshimanga", "Wamba", "Yengo", "Angoula", "Batumike", "Engonga", "Kanku", "Lobota", "Mabiala",
      "Mokutu", "Ngalame", "Ossendza", "Tumba", "Wembanyama", "Yandza", "Zingha",
    ],
  },

  // Common regions / communities: Cherokee communities, especially Oklahoma and North Carolina, United States.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Contemporary-style English given names paired with publicly attested Cherokee-associated civil family names. Not a list of traditional ceremonial Cherokee-language names.
  "cherokee": {
    label: "Cherokee",
    surnameFirst: false,
    male: [
      "Aaron", "Adam", "Allen", "Andrew", "Charles", "David", "Elias", "George", "Isaac", "Jacob", "James",
      "Jesse", "John", "Joseph", "Joshua", "Lewis", "Nathan", "Samuel", "Thomas", "William",
    ],
    female: [
      "Abigail", "Alice", "Anna", "Charlotte", "Elizabeth", "Emily", "Grace", "Hannah", "Jane", "Julia",
      "Katherine", "Laura", "Leah", "Louise", "Martha", "Mary", "Nancy", "Rebecca", "Sarah", "Susan", "Wilma",
    ],
    surname: [
      "Adair", "Benge", "Bigmeat", "Blythe", "Bushyhead", "Chiltoskey", "Doublehead", "Foreman", "Gourd",
      "Hicks", "Hildebrand", "Jumper", "Mankiller", "Oocumma", "Pathkiller", "Rattlinggourd", "Ross", "Ryder",
      "Sequoyah", "Swimmer", "Tehee", "Walkingstick", "Watie", "West", "Wolfe",
    ],
  },

  // Common regions / communities: Ancient and classical South Asia, especially India; Sanskrit literary and religious traditions.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. Includes revival forms and, where relevant, literary/mythological names; not all were everyday given names.
  "classical-sanskrit": {
    label: "Classical Sanskrit revival",
    surnameFirst: false,
    male: [
      "Agastya", "Arjuna", "Ashoka", "Bharata", "Bhima", "Chanakya", "Chandragupta", "Dhananjaya", "Gautama",
      "Harsha", "Jaya", "Kanishka", "Krishna", "Lakshmana", "Madhava", "Manu", "Nakula", "Panini", "Rama",
      "Rudra", "Siddhartha", "Surya", "Vasudeva", "Vikramaditya", "Yudhisthira",
    ],
    female: [
      "Aditi", "Amba", "Ambika", "Anasuya", "Arundhati", "Damayanti", "Devaki", "Draupadi", "Gandhari",
      "Gargi", "Gauri", "Indumati", "Kunti", "Lakshmi", "Lopamudra", "Maitreyi", "Maya", "Parvati", "Radha",
      "Rukmini", "Savitri", "Shakuntala", "Sita", "Subhadra", "Tara", "Uma", "Urvashi", "Yashoda",
    ],
    surname: [
      "Agastya", "Bharata", "Bharadvaja", "Gautama", "Kashyapa", "Kaushika", "Kautilya", "Maurya", "Shakya",
      "Vasistha", "Vatsa", "Vikramaditya", "Yadava",
    ],
  },

  // Common regions / communities: Canadian First Nations across Quebec, Ontario, Manitoba, Saskatchewan and Alberta, and adjacent US communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern civil names and some Cree-associated family surnames; many also occur among other peoples.
  "cree": {
    label: "Cree",
    surnameFirst: false,
    male: [
      "Adam", "Andrew", "Benjamin", "Charles", "Daniel", "David", "Edward", "Elias", "Francis", "George",
      "Henry", "James", "John", "Joseph", "Louis", "Michael", "Noah", "Paul", "Peter", "Robert", "Samuel",
      "Thomas", "William",
    ],
    female: [
      "Alice", "Anna", "Caroline", "Catherine", "Charlotte", "Elizabeth", "Emily", "Eva", "Grace", "Helen",
      "Jane", "Jean", "Julia", "Lily", "Louise", "Margaret", "Marie", "Mary", "Ruth", "Sarah", "Susan",
    ],
    surname: [
      "Bear", "Bird", "Cardinal", "Desjarlais", "Ermine", "Favel", "Fine Day", "Gladue", "Goodtrack",
      "Kakakaway", "Littlechild", "McLeod", "Musqua", "Okimaw", "Papaschase", "Peepeekisis", "Poitras",
      "Saddleback", "Sasakamoose", "Sutherland", "Tootoosis", "Wapass", "Waskewitch", "Watchmaker", "Wuttunee",
    ],
  },

  // Common regions / communities: Czechia and Slovakia.
  // Source: Faker 40.1.2 person provider(s): cs_CZ, sk_SK; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "czech-slovak": {
    label: "Czech / Slovak",
    surnameFirst: false,
    male: [
      "Adolf", "Adrián", "Albert", "Albín", "Alex", "Alexandr", "Alexej", "Aleš", "Alfonz", "Alfréd", "Alois",
      "Ambróz", "Andrej", "Ariel", "Artur", "Atila", "Augustín", "Aurel", "Bartolomej", "Bedřich", "Belo",
      "Benedikt", "Benjamín", "Bernard", "Blahoslav", "Blažej", "Bohdan", "Bohumír", "Bohuslav", "Bohuš",
      "Boleslav", "Bonifác", "Boris", "Bořivoj", "Bruno", "Bystrík", "Břetislav", "Ctirad", "Cyprián",
      "Dalibor", "Daniel", "David", "Demeter", "Dobroslav", "Dominik", "Drahomír", "Dušan", "Dávid", "Eder",
      "Eduard", "Eliáš", "Emanuel", "Emil", "Erik", "Ernest", "Ervín", "Eugen", "Fedor", "Ferdinand", "Filip",
      "Florián", "Félix", "Gabriel", "Gašpar", "Gejza", "Gregor", "Gustáv", "Henrich", "Herbert", "Hubert",
      "Hynek", "Ignác", "Igor", "Imrich", "Ivo", "Iľja", "Jakub", "Jan", "Jarolím", "Jerguš", "Jiří", "Jonáš",
      "Josef", "Juraj", "Ján", "Kamil", "Karel", "Karol", "Kliment", "Koloman", "Konštantín", "Kornel",
      "Krištof", "Kryštof", "Ladislav", "Levoslav", "Luboš", "Ludolf", "Ludvík", "Luděk", "Lukáš", "Lumír",
      "Marek", "Marian", "Marián", "Maroš", "Martin", "Matyáš", "Matúš", "Melichar", "Michael", "Michal",
      "Mikuláš", "Milan", "Miloš", "Miroslav", "Mário", "Nathan", "Norbert", "Oliver", "Ondrej", "Pankrác",
      "Patrik", "Pavel", "Peter", "Petr", "Pravoslav", "Prokop", "Přemysl", "Radek", "Radomír", "Radoslav",
      "Richard", "Robin", "Roland", "Rudolf", "Róbert", "Samuel", "Sergej", "Servác", "Severín", "Slavomír",
      "Stanislav", "Svatopluk", "Tadeáš", "Tarzícius", "Tibor", "Tichomír", "Timotej", "Tobiáš", "Tomáš",
      "Vasil", "Vavrinec", "Vendelín", "Viktor", "Vladimír", "Vladislav", "Vlastimil", "Vojtech", "Vratislav",
      "Vratko", "Václav", "Vít", "Víťazoslav", "Zbyněk", "Zdenko", "Zdeněk", "Zikmund", "Zlatko", "Zoltán",
      "Zoran", "Áron", "Ľubomír", "Ľuboš", "Ľudomil", "Ľudovít", "Šimon", "Štefan", "Štěpán", "Žigmund",
    ],
    female: [
      "Adriána", "Agnesa", "Aiko", "Alana", "Albína", "Alena", "Alexia", "Alica", "Alice", "Alojzia",
      "Alžběta", "Amália", "Anastázie", "Andrea", "Anděla", "Aneta", "Anežka", "Angelika", "Anna", "Antónia",
      "Apolena", "Barbara", "Berta", "Beáta", "Bibiána", "Blažena", "Bohumila", "Bohuslava", "Božena",
      "Božidara", "Brigita", "Bronislava", "Cecília", "Daniela", "Darina", "Denisa", "Diana", "Dita",
      "Dobromila", "Dobroslava", "Dominika", "Dorota", "Drahomíra", "Dáša", "Edita", "Ela", "Elena",
      "Eleonóra", "Eliška", "Emilie", "Emília", "Enna", "Ester", "Estera", "Etela", "Eulália", "Eunika",
      "Filoména", "Františka", "Frederika", "Gabriela", "Gertrúda", "Gizela", "Hana", "Hedviga", "Hilda",
      "Hortenzia", "Ida", "Irena", "Iris", "Irma", "Iva", "Iveta", "Ivica", "Ivona", "Izabela", "Jana",
      "Jaromíra", "Jitka", "Jiřina", "Jolana", "Jozefína", "Juliana", "Julie", "Júlia", "Kamila", "Karina",
      "Karolína", "Katarína", "Kateřina", "Klaudia", "Klára", "Kornélia", "Kristína", "Kvetoslava", "Květa",
      "Květoslava", "Ladislava", "Lea", "Leona", "Lesana", "Libuše", "Liliana", "Linda", "Lolita", "Lucie",
      "Ludmila", "Luna", "Lívia", "Lýdia", "Lýdie", "Malvína", "Marcela", "Martina", "Matilda", "Milada",
      "Milena", "Milica", "Miluše", "Naděžda", "Nataša", "Natálie", "Nikol", "Nora", "Otília", "Otýlie",
      "Oxana", "Paulína", "Pavlína", "Petra", "Petrana", "Petronela", "Radoslava", "Radovana", "Renáta",
      "Romana", "Rozália", "Ružena", "Sabina", "Sabína", "Sandra", "Sidónia", "Silvia", "Simona", "Slavomíra",
      "Slavěna", "Sláva", "Slávka", "Soňa", "Světlana", "Tamara", "Tatiana", "Theodora", "Timea", "Valentína",
      "Vanda", "Vanesa", "Vendula", "Veronika", "Viera", "Vieroslava", "Viktorie", "Viktória", "Viola",
      "Vladimíra", "Věra", "Xénia", "Zdislava", "Zina", "Zlatica", "Zoja", "Zora", "Zuzana", "Ľubica",
      "Ľubomíra", "Ľuboslava", "Šarlota", "Štěpánka", "Šárka", "Želmíra",
    ],
    surname: [
      "Abrahámová", "Adamec", "Andrašík", "Andrašíková", "Baňas", "Bašková", "Bašová", "Bednářová", "Benešová",
      "Bezák", "Bicek", "Bilková", "Borík", "Burešová", "Bôrik", "Chovanec", "Cibuľa", "Cigánová", "Danková",
      "Dančiaková", "Debnárová", "Dekýšová", "Deák", "Deáková", "Droppová", "Drotár", "Dubovský", "Dudoková",
      "Dulová", "Durdíková", "Dutka", "Fabianová", "Franek", "Fraňo", "Grňa", "Gáliková", "Hanuska",
      "Haňáková", "Heretiková", "Hilmer", "Hlaváčiková", "Holič", "Holičková", "Hrdličková", "Hrubý", "Hájek",
      "Imrichová", "Ivaška", "Jakubecová", "Jakubčík", "Janeček", "Jančová", "Junásová", "Jurka", "Jurčina",
      "Jánošová", "Karulová", "Kavasch", "Kazik", "Kendra", "Kenížová", "Klapka", "Klimová", "Klopačka",
      "Kniha", "Kobielská", "Koc", "Konrádová", "Koppová", "Kočová", "Krajčovičová", "Križanová", "Král",
      "Kubo", "Kubíková", "Kuška", "Kušová", "Kysela", "Káziková", "Kúska", "Lesná", "Liška", "Loj", "Lojková",
      "Lojová", "Machata", "Macková", "Madar", "Malachovská", "Markovič", "Markušová", "Martinkovičová",
      "Martinová", "Martináková", "Martáň", "Masarík", "Maslová", "Masárik", "Mauréry", "Mačeková",
      "Melicherík", "Melichárek", "Michálik", "Mihaliková", "Mikulák", "Mikulík", "Milota", "Mrazeková",
      "Mrázko", "Murin", "Musil", "Mácová", "Nemcová", "Novota", "Ondrejko", "Ondrusek", "Ondrášik", "Očenáš",
      "Palkovičová", "Palková", "Paulíčeková", "Pavelka", "Pavličeková", "Pavlo", "Pavuk", "Paľková", "Paľuch",
      "Paľúch", "Paška", "Plavuchová", "Plch", "Podkonický", "Prokop", "Repiský", "Rusnáková", "Róm",
      "Růžička", "Sedláková", "Simonová", "Sklenicová", "Sklenár", "Sloboda", "Solej", "Svrbík", "Tatárka",
      "Timka", "Turčok", "Uramová", "Vajcik", "Valachovič", "Vaněk", "Vasková", "Vašková", "Višňovský",
      "Vlková", "Vlnka", "Vlnová", "Vozárová", "Vydarená", "Zachara", "Zubko", "Čarnogurský", "Čermák",
      "Černoch", "Červený", "Červeň", "Čierny", "Ďureková", "Ďurko", "Ďurkovičová", "Ševčík", "Šidlo",
      "Šidlová", "Šimeková", "Šimko", "Šimončičová", "Štěpánek", "Šuňavec", "Železník", "Žák",
    ],
  },

  // Common regions / communities: Southern India and Sri Lanka; original list is especially Tamil-oriented.
  // Original category — all original entries retained.
  "dravidian": {
    label: "Dravidian",
    surnameFirst: false,
    male: [
      "Aadhavan", "Aakash", "Abhinav", "Adithya", "Ajith", "Akilan", "Amarnath", "Anand", "Anbarasu", "Anbu",
      "Aravind", "Arjun", "Arul", "Ashwin", "Balaji", "Baskar", "Bharath", "Boopathi", "Chandran", "Dhanush",
      "Dilip", "Dinesh", "Elango", "Ganesh", "Gokul", "Gopinath", "Hari", "Harish", "Ilango", "Iniyan",
      "Jagan", "Jeevan", "Kailash", "Kamal", "Kannan", "Karthick", "Karthikeyan", "Kathir", "Kavin", "Kesavan",
      "Kishore", "Kumar", "Lokesh", "Madhan", "Mahesh", "Manikandan", "Manoj", "Maran", "Mohan", "Muthukumar",
      "Nandakumar", "Naren", "Nataraj", "Naveen", "Nithin", "Pandian", "Parthiban", "Perumal", "Prabhu",
      "Pradeep", "Prakash", "Pranav", "Prem", "Raghavan", "Rajan", "Rajesh", "Rakesh", "Ramachandran",
      "Ramesh", "Ranjith", "Ravi", "Saravanan", "Sasi", "Selvam", "Senthil", "Shankar", "Sivakumar", "Sridhar",
      "Sriram", "Subash", "Sundar", "Surya", "Tamilselvan", "Tharun", "Udhayan", "Vasanth", "Venkatesh",
      "Vetri", "Vignesh", "Vijay", "Vikram", "Vinod", "Viswanathan", "Yogesh", "Yuvaraj", "Ariyan",
      "Balasubramanian", "Chidambaram", "Devan", "Easwar", "Guhan", "Jagadeesh", "Kailasan", "Lingesh",
      "Madhavan", "Muthu", "Naveenkumar", "Paramesh", "Ragunath", "Sathish", "Selvaraj", "Sivanesan",
      "Thirumal", "Umapathy", "Varadarajan", "Velmurugan", "Vishnu", "Yathish", "Arumugam", "Durairaj",
    ],
    female: [
      "Abinaya", "Aishwarya", "Akila", "Amudha", "Anitha", "Anjali", "Anu", "Aruna", "Bhanu", "Bhuvana",
      "Chandra", "Deepa", "Deepika", "Devi", "Divya", "Gayathri", "Geetha", "Harini", "Indhu", "Janani",
      "Jayanthi", "Kala", "Kalaiarasi", "Kalyani", "Kanishka", "Karthika", "Kavitha", "Keerthana", "Komala",
      "Krithika", "Lakshmi", "Lalitha", "Madhavi", "Mahalakshmi", "Malathi", "Meena", "Meenakshi", "Monisha",
      "Nandhini", "Narmada", "Nila", "Padmini", "Pavithra", "Poornima", "Priya", "Radha", "Rajalakshmi",
      "Ramya", "Rekha", "Revathi", "Rohini", "Sangeetha", "Saranya", "Savitri", "Shalini", "Shanthi",
      "Sharmila", "Sindhu", "Sivagami", "Sneha", "Soundarya", "Subha", "Sudha", "Sujatha", "Sumathi",
      "Sunitha", "Sushmitha", "Tamilselvi", "Thara", "Uma", "Vaishnavi", "Valli", "Vandana", "Vanitha",
      "Vasanthi", "Vidhya", "Vijayalakshmi", "Vinitha", "Yamuna", "Aarthi", "Abhirami", "Amritha", "Anbarasi",
      "Arulmozhi", "Bhavani", "Charumathi", "Devayani", "Ezhil", "Gomathi", "Hemalatha", "Ilakkiya", "Jothika",
      "Kanmani", "Kayalvizhi", "Mohana", "Nalini", "Nivetha", "Parvathi", "Ponni", "Ranjani", "Sakthi",
      "Selvi", "Sivaranjani", "Tamilarasi", "Thenmozhi", "Usha", "Varalakshmi", "Vennila", "Visalakshi",
      "Yazhini", "Agalya", "Bhairavi", "Chithra", "Dhanalakshmi", "Elavarasi", "Indumathi", "Kowsalya",
      "Muthulakshmi", "Nithya", "Padmavathi",
    ],
    surname: [
      "Anandan", "Arumugam", "Balakrishnan", "Baskar", "Chandrasekar", "Dhanapal", "Duraisamy", "Elangovan",
      "Ganesan", "Gopalakrishnan", "Govindan", "Jagannathan", "Jayaraman", "Kailasam", "Kandasamy",
      "Karunakaran", "Krishnamurthy", "Kumaraswamy", "Lakshmanan", "Mahadevan", "Manickam", "Mohanraj",
      "Muthusamy", "Nagarajan", "Nandakumar", "Narayanan", "Natarajan", "Palanisamy", "Pandian",
      "Parthasarathy", "Periyasamy", "Pillai", "Radhakrishnan", "Rajagopal", "Rajendran", "Ramakrishnan",
      "Ramasamy", "Ranganathan", "Sankaran", "Saravanan", "Sekar", "Shanmugam", "Sivakumar", "Somasundaram",
      "Sridhar", "Srinivasan", "Subramanian", "Sundaram", "Swaminathan", "Thiagarajan", "Udayakumar",
      "Vaidyanathan", "Venkataraman", "Viswanathan", "Annamalai", "Balasubramanian", "Chidambaram",
      "Devarajan", "Gurunathan", "Ilangovan", "Jeevaraj", "Kaliyaperumal", "Krishnan", "Loganathan",
      "Madhavan", "Murugan", "Natesan", "Panneerselvam", "Paramasivam", "Ponnusamy", "Ravichandran",
      "Sathyanarayanan", "Selvaraj", "Sivanesan", "Soundararajan", "Thangavel", "Thirumalai", "Umapathy",
      "Varadarajan", "Veeramani", "Velayutham", "Vetrivel", "Yoganathan", "Achari", "Chettiar", "Gounder",
      "Konar", "Mudaliar", "Naicker", "Nadar", "Pillay", "Reddiar", "Servai", "Thevar", "Udaiyar", "Velar",
      "Adiga", "Bhat", "Hegde", "Kamath", "Kini", "Kiniya", "Kotian", "Pai", "Poojary", "Rao", "Shenoy",
      "Shetty", "Upadhya", "Urs", "Varma", "Achan", "Menon", "Nair", "Panicker", "Kurup", "Warrier", "Marar",
      "Thampi", "Chakyar",
    ],
  },

  // Common regions / communities: Netherlands, Flanders (Belgium) and Dutch diaspora.
  // Source: Faker 40.1.2 person provider(s): nl_NL, nl_BE; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "dutch": {
    label: "Dutch / Flemish",
    surnameFirst: false,
    male: [
      "Achiel", "Adriaan", "Aiden", "Alexander", "Alfred", "Amin", "Amir", "Anton", "Antonio", "Arne",
      "Arnold", "Ayden", "Bart", "Ben", "Benjamin", "Berend", "Bert", "Bob", "Brian", "Carl", "Casper",
      "Christoph", "Christophe", "Colin", "Collin", "Constant", "Cédric", "Dani", "Dany", "Dave", "Didier",
      "Diederik", "Dieter", "Dimitri", "Dion", "Dirk", "Dylan", "Eddy", "Edgard", "Edwin", "Emmanuel",
      "Etienne", "Filip", "Flor", "Florian", "Floris", "François", "Frederic", "Gabriel", "Gabriël", "Gaston",
      "Geoffrey", "Gerardus", "Gerrit", "Gijs", "Gilbert", "Guido", "Guillaume", "Gust", "Gustaaf", "Guus",
      "Hassan", "Hendrik", "Herman", "Imran", "Ismail", "Jaak", "Jacob", "Jarno", "Jean-Claude", "Jeffrey",
      "Jelle", "Jens", "Jimmy", "Jip", "Job", "Joep", "Johannes", "John", "Joris", "Jorn", "Jos", "José",
      "Julius", "Juul", "Kamiel", "Kasper", "Kay", "Ken", "Khalid", "Kian", "Kim", "Kobe", "Koenraad", "Kris",
      "Kristiaan", "Kristof", "Leo", "Leon", "Lex", "Louis", "Lowie", "Loïc", "Luca", "Lucas", "Ludwig",
      "Luuk", "Léon", "Marco", "Marcus", "Mario", "Marnix", "Martin", "Mason", "Mathis", "Matthew", "Matthias",
      "Max", "Mehmet", "Miel", "Milan", "Milo", "Mohamad", "Mohamed", "Mohammed", "Morris", "Mustafa",
      "Mustapha", "Nick", "Omer", "Pepijn", "Pierre", "Pieter-Jan", "Piotr", "Pol", "Rachid", "Raoul", "Ravi",
      "Rayan", "Remi", "Renaat", "Rick", "Roan", "Robbe", "Roeland", "Roger", "Roland", "Roy", "Sam", "Samuel",
      "Senna", "Sep", "Serge", "Seth", "Sil", "Sjoerd", "Stan", "Stefan", "Stephan", "Stéphane", "Thibaut",
      "Thijmen", "Thijn", "Thomas", "Ties", "Timo", "Tomas", "Tony", "Toon", "Tuur", "Victor", "Vince",
      "Wannes", "Warre", "Werner", "William", "Willy", "Xavi", "Yusuf", "Yvan",
    ],
    female: [
      "Aaliyah", "Aimée", "Alexia", "Alyssa", "Amy", "Anaïs", "Andrea", "Anja", "Anke", "Ann", "Anny",
      "Antoinette", "Aya", "Azra", "Beatrice", "Beatrijs", "Bertha", "Betty", "Bianca", "Bieke", "Brigitta",
      "Camille", "Carine", "Carmen", "Caroline", "Cato", "Chantal", "Charlotte", "Chloé", "Cornelia", "Cécile",
      "Dana", "Daphne", "Debbie", "Diana", "Diane", "Dorien", "Ecrin", "Eline", "Elisa", "Elisabeth", "Elise",
      "Ella", "Ellie", "Els", "Elza", "Emilia", "Emily", "Erika", "Estelle", "Esther", "Evelien", "Evi", "Evy",
      "Fabienne", "Farah", "Fatiha", "Fay", "Fem", "Fenna", "Fleur", "Fran", "Frederique", "Gerda", "Germaine",
      "Gilberte", "Hanna", "Hannelore", "Hilde", "Hélène", "Ines", "Inge", "Iris", "Isa", "Isabella", "Ivonne",
      "Ize", "Janne", "Jeannette", "Jessy", "Jet", "Joanna", "Johanna", "Joke", "Jolijn", "Josepha",
      "Julienne", "Kaat", "Karen", "Karima", "Karine", "Karlijn", "Katelijne", "Katja", "Katleen", "Kato",
      "Katrijn", "Kaylee", "Kayleigh", "Kimberly", "Kyara", "Laura", "Laurence", "Lea", "Leen", "Leona",
      "Lieve", "Lieze", "Liliana", "Lily", "Lindsay", "Lindsey", "Lisanne", "Lise", "Lisette", "Liv", "Lizzy",
      "Lucia", "Lucienne", "Lucy", "Lutgarde", "Lutgardis", "Magda", "Magdalena", "Maja", "Malika", "Manon",
      "Marie-José", "Marie-Louise", "Marieke", "Marlies", "Martha", "Maryam", "Micheline", "Mieke", "Milou",
      "Mira", "Miranda", "Monica", "Nadia", "Nancy", "Naomi", "Nathalie", "Nelly", "Ninthe", "Nynke", "Odette",
      "Oona", "Pascale", "Peggy", "Pien", "Rani", "Rebecca", "Ruth", "Sabine", "Samira", "Sanne", "Selina",
      "Sien", "Silke", "Sonja", "Sophia", "Sophie", "Tatiana", "Tessa", "Tineke", "Vajèn", "Valerie",
      "Victoria", "Virginie", "Viviane", "Véronique", "Wendy", "Yana", "Yasmin", "Yasmine", "Yolanda", "Zara",
      "Zita", "Zoë",
    ],
    surname: [
      "Aalts", "Amalrada", "Backer", "Baele", "Bave", "Beeckman", "Berends", "Bleijenberg", "Booden",
      "Bouwhuisen", "Brandt", "Cant", "Carnotte", "Casteleyn", "Ceulemans", "Chrodtrud", "Claesdr", "Cornelis",
      "Dachgelder", "de Beer", "de Boer", "De Bondt", "de Bruijn", "De Bruycker", "De Coster", "de Graaf",
      "de Grote", "de Heer", "de Jonge", "de Kok", "de Mol", "de Pauw", "de Reede", "De Sutter", "de Vroege",
      "Derycke", "Dewilde", "die Bont", "die Pelser", "Dierckx", "Dobbelaere", "Doornhem", "Drysdale", "Fiere",
      "Frankhuizen", "Gellemeyer", "Genefaas", "Geuens", "Giselmeyer", "Goris", "Haengreve", "Hak",
      "Hellemans", "Holvoet", "Hulst", "Huurdeman", "Huybrechts", "Jaceps", "Jans", "Janse", "Jochems",
      "Kallen", "Keltenie", "Koret", "Lage", "Lambrecht", "Lansink", "le Floch", "Lelijveld", "Lensen",
      "Leysen", "Lippens", "Lucas", "Maaswinkel", "Marchand", "Mathurin", "Meeus", "Mertens", "Mestdagh",
      "Mijsberg", "Molegraaf", "Moors", "Niermann", "Otto", "Pastoors", "Pieters", "Pons", "Rackham",
      "Raeymaekers", "Recer", "Recers", "Romijn", "Roose", "Rouwenhorst", "Schakelaar", "Schepers", "Schiffer",
      "Schouten", "Schroeff", "Schwartsbach", "Serra", "Simons", "Slingerland", "Spaan", "Spanhaak", "Spiker",
      "Spruyt", "Staelens", "Stevens", "Stinis", "Strik", "Stroobants", "Swinnen", "Thijs", "Vaessen",
      "van Arnsberg", "van Berkel", "van Breugel", "van Breukelveen", "van Dalem", "van Dam",
      "van de Biezenbos", "van de Pavert", "Van de Voorde", "van de Weterink", "van den Nuwenhuijzen",
      "van der Heijden", "van der Horst", "van der Mast", "van der Pol", "van der Spaendonck", "van der Zijl",
      "van Dillen", "van Duivenvoorde", "van Evelingen", "van Geest", "van Geffen", "van Gelder", "van Gemert",
      "van Ghoerle", "van Ginkel", "Van Goethem", "van Hemert", "Van Hoof", "van Hulten", "van Kempen",
      "van Kusen", "van Luxemburg", "van Mispelen", "van Nimwegen", "van Parijs", "van Praagh",
      "Van Raemdonck", "van Rooij", "van Santen", "van Schevinghuizen", "van Velzen", "van Vlaanderen",
      "Vanbrabant", "Vandenbergh", "Vandendriessche", "Verbeek", "Verbeke", "Verboom", "Verbruggen",
      "Vercauteren", "Vercruysse", "Vermeir", "Verstraete", "Vink", "Vos", "Wensen", "Wever", "Wilcken",
      "Willems van Lier", "Willemsen", "Wolters", "Woutersz", "Zevenboom", "Zijlemans",
    ],
  },

  // Common regions / communities: Kenya, Tanzania, Uganda and neighboring eastern African communities.
  // Original category — all original entries retained.
  "east-african": {
    label: "East African",
    surnameFirst: false,
    male: [
      "Abdi", "Abebe", "Abubakar", "Ahmed", "Ali", "Amanuel", "Amani", "Amare", "Awet", "Ayubu", "Bakari",
      "Baraka", "Bekele", "Berhanu", "Daniel", "Dawit", "Elias", "Ermias", "Faisal", "Farah", "Fitsum",
      "Gebre", "Haile", "Hassan", "Ibrahim", "Idris", "Issa", "Jamal", "Jelani", "Juma", "Kassim", "Kato",
      "Kebede", "Kidane", "Lemlem", "Mahmoud", "Mekonnen", "Meles", "Mohamed", "Moses", "Muktar", "Mulugeta",
      "Musa", "Nuru", "Omari", "Othman", "Rashid", "Salim", "Samson", "Sefu", "Selassie", "Solomon", "Tadesse",
      "Tafari", "Tesfaye", "Tesfahun", "Tewodros", "Umar", "Wolde", "Yared", "Yasin", "Yonatan", "Yonas",
      "Yosef", "Abdullahi", "Adan", "Asfaw", "Binyam", "Desta", "Fikru", "Getachew", "Habte", "Ismail",
      "Khalif", "Lulit", "Mandela", "Negasi", "Robel", "Seyoum", "Tamrat", "Workneh", "Yohannes", "Zuberi",
      "Alemayehu", "Beraki", "Demissie", "Ephrem", "Girma", "Hagos", "Jibril", "Kidus", "Mubarak", "Negus",
      "Semere", "Tsegaye", "Wassie", "Yitbarek", "Zenawi",
    ],
    female: [
      "Abeba", "Achieng", "Aisha", "Almaz", "Amani", "Amira", "Asli", "Aster", "Ayan", "Aziza", "Baraka",
      "Biftu", "Chaltu", "Dahlia", "Eden", "Elsa", "Eyerusalem", "Faduma", "Fatuma", "Genet", "Habiba",
      "Halima", "Hanan", "Hawa", "Helen", "Hibo", "Imani", "Kadija", "Khadra", "Leila", "Lulit", "Malkia",
      "Mariam", "Medina", "Meron", "Muna", "Nadia", "Nafisa", "Nala", "Nasra", "Neema", "Nuru", "Rahma",
      "Rehema", "Salma", "Samira", "Selam", "Sofia", "Subira", "Tigist", "Winta", "Yasmin", "Zahra", "Zainab",
      "Abeni", "Adanech", "Amina", "Blen", "Deka", "Eleni", "Feven", "Filsan", "Hani", "Hodan", "Ilham",
      "Kenza", "Lemlem", "Mahlet", "Marjani", "Nasteho", "Rahel", "Rukia", "Saba", "Safiya", "Seynab",
      "Shukri", "Siti", "Tariku", "Tsion", "Worknesh", "Yordanos", "Zulekha", "Amina", "Birtukan", "Dunia",
      "Eyerus", "Fowsia", "Habon", "Kaltun", "Liya", "Mulu", "Nimo", "Roda", "Selamawit", "Tsehay", "Warda",
      "Yusra", "Zamzam",
    ],
    surname: [
      "Abdullahi", "Abebe", "Ahmed", "Ali", "Amanuel", "Asfaw", "Bekele", "Berhane", "Dawit", "Farah",
      "Gebremariam", "Gebreselassie", "Getachew", "Girma", "Haile", "Hassan", "Hussein", "Ibrahim", "Idris",
      "Ismail", "Jama", "Kahsay", "Kassahun", "Kebede", "Kidane", "Mahamed", "Mekonnen", "Mohamed", "Muktar",
      "Mulugeta", "Musa", "Negash", "Njoroge", "Odinga", "Okello", "Omar", "Osman", "Owino", "Rashid", "Said",
      "Salim", "Samatar", "Tadesse", "Tesfaye", "Tewelde", "Tsegaye", "Wolde", "Worku", "Yasin", "Yohannes",
      "Yusuf", "Zewde", "Abdirahman", "Alemu", "Asmare", "Demissie", "Endris", "Fikre", "Habte", "Kidus",
      "Mebratu", "Moges", "Negasi", "Roba", "Semere", "Shiferaw", "Tamiru", "Tekle", "Tilahun", "Wondimu",
      "Yared", "Aden", "Beyene", "Desta", "Ephrem", "Ghebremeskel", "Hagos", "Jibril", "Kedir", "Lema",
      "Mengistu", "Nigatu", "Ochieng", "Ruto", "Shabazz", "Temesgen", "Teshome", "Umar", "Wassie", "Yilma",
      "Zerihun", "Adem", "Beraki", "Fisseha", "Hailu", "Kifle", "Mamo", "Tesfamichael",
    ],
  },

  // Common regions / communities: China, Taiwan, Singapore and worldwide Chinese diasporas.
  // Original category — all original entries retained.
  "east-asian-chinese": {
    label: "East Asian — Chinese",
    surnameFirst: true,
    male: [
      "An", "Bao", "Bo", "Chang", "Chao", "Chen", "Cheng", "Chi", "Da", "De", "Feng", "Gang", "Guang", "Guo",
      "Hai", "Han", "Hao", "Heng", "Hong", "Hua", "Hui", "Jian", "Jie", "Jin", "Jun", "Kai", "Kang", "Lei",
      "Liang", "Lin", "Long", "Ming", "Peng", "Qiang", "Qing", "Ren", "Rong", "Shan", "Sheng", "Shi", "Tao",
      "Teng", "Wei", "Wen", "Xiang", "Xiao", "Xin", "Xing", "Xuan", "Yan", "Yang", "Yao", "Yi", "Yong", "Yu",
      "Yuan", "Yue", "Yun", "Zedong", "Zemin", "Zhen", "Zhi", "Zhong", "Zhou", "Zhiyuan", "Zihao", "Zixuan",
      "Junjie", "Haoran", "Yichen", "Li Wei", "Li Jun", "Li Hao", "Li Ming", "Li Jie", "Li Tao", "Li Feng",
      "Li Yang", "Li Chen", "Li Jian", "Wang Wei", "Wang Jun", "Wang Hao", "Wang Ming", "Wang Lei",
      "Wang Jian", "Wang Tao", "Wang Peng", "Wang Feng", "Wang Bin", "Zhang Wei", "Zhang Jun", "Zhang Hao",
      "Zhang Ming", "Zhang Jie", "Zhang Lei", "Zhang Tao", "Zhang Peng", "Zhang Feng", "Zhang Yang", "Liu Wei",
      "Liu Jun", "Liu Hao", "Liu Ming", "Liu Jie", "Liu Tao", "Liu Yang", "Liu Jian", "Liu Peng", "Liu Bin",
      "Chen Wei", "Chen Jun", "Chen Hao", "Chen Ming", "Chen Jie", "Chen Lei", "Chen Tao", "Chen Feng",
      "Chen Yang", "Chen Bin", "Yang Wei", "Yang Jun", "Yang Hao", "Yang Ming", "Yang Jie", "Yang Tao",
      "Yang Feng", "Yang Peng", "Yang Jian", "Yang Bin", "Huang Wei", "Huang Jun", "Huang Hao", "Huang Ming",
      "Huang Jie", "Huang Lei", "Huang Tao", "Huang Feng", "Huang Yang", "Huang Bin", "Zhao Wei", "Zhao Jun",
      "Zhao Hao", "Zhao Ming", "Zhao Jie", "Zhao Lei", "Zhao Tao", "Zhao Feng", "Zhao Peng", "Zhao Bin",
      "Wu Wei", "Wu Jun", "Wu Hao", "Wu Ming", "Wu Jie", "Wu Lei", "Wu Tao", "Wu Feng", "Wu Peng", "Wu Jian",
      "Zhou Wei", "Zhou Jun", "Zhou Hao", "Zhou Ming", "Zhou Jie", "Zhou Lei", "Zhou Tao", "Zhou Feng",
      "Zhou Yang", "Zhou Bin", "Xu Wei", "Xu Jun", "Xu Hao", "Xu Ming", "Xu Jie", "Xu Lei", "Xu Tao",
      "Xu Feng", "Xu Peng", "Xu Jian", "Sun Wei", "Sun Jun", "Sun Hao", "Sun Ming", "Sun Jie", "Sun Lei",
      "Sun Tao", "Sun Feng", "Sun Yang", "Sun Bin", "Ma Wei", "Ma Jun", "Ma Hao", "Ma Ming", "Ma Jie",
      "Ma Lei", "Ma Tao", "Ma Feng", "Ma Peng", "Ma Jian", "Guo Wei", "Guo Jun", "Guo Hao", "Guo Ming",
      "Guo Jie", "Guo Lei", "Guo Tao", "Guo Feng", "Guo Yang", "Guo Bin", "Lin Wei", "Lin Jun", "Lin Hao",
      "Lin Ming", "Lin Jie", "Lin Lei", "Lin Tao", "Lin Feng", "Lin Peng", "Lin Jian", "He Wei", "He Jun",
      "He Hao", "He Ming", "He Jie", "He Lei", "He Tao", "He Feng", "He Yang", "He Bin",
    ],
    female: [
      "Ai", "An", "Baozhai", "Caihong", "Chun", "Fang", "Fen", "Guiying", "Hua", "Huifen", "Jia", "Jiahui",
      "Jing", "Juan", "Lan", "Lei", "Li", "Lian", "Lihua", "Lin", "Ling", "Mei", "Meiling", "Min", "Na",
      "Ning", "Peizhi", "Ping", "Qi", "Qiao", "Qing", "Rong", "Shan", "Shu", "Ting", "Wen", "Xia", "Xiaohui",
      "Xiaoli", "Xiaomei", "Xiaoyan", "Xin", "Xingjuan", "Xiu", "Xiulan", "Xue", "Yan", "Ying", "Yue", "Yulan",
      "Yumei", "Yun", "Zhen", "Zhenzhen", "Zhilan", "Lifen", "Ailing", "Chunhua", "Fangfang", "Jingyi",
      "Lanfen", "Liling", "Meifeng", "Qian", "Ruolan", "Shuying", "Wanyu", "Xinyi", "Yaqin", "Zixia", "Li Na",
      "Li Fang", "Li Jing", "Li Ying", "Li Mei", "Li Yan", "Li Hui", "Li Xiu", "Li Juan", "Li Hong",
      "Wang Fang", "Wang Jing", "Wang Yan", "Wang Mei", "Wang Ying", "Wang Hui", "Wang Xiu", "Wang Na",
      "Wang Li", "Wang Juan", "Zhang Jing", "Zhang Yan", "Zhang Mei", "Zhang Ying", "Zhang Hui", "Zhang Na",
      "Zhang Xiu", "Zhang Juan", "Zhang Hong", "Zhang Li", "Liu Fang", "Liu Jing", "Liu Yan", "Liu Mei",
      "Liu Ying", "Liu Hui", "Liu Xiu", "Liu Na", "Liu Juan", "Liu Hong", "Chen Fang", "Chen Jing", "Chen Yan",
      "Chen Mei", "Chen Ying", "Chen Hui", "Chen Xiu", "Chen Na", "Chen Juan", "Chen Li", "Yang Fang",
      "Yang Jing", "Yang Yan", "Yang Mei", "Yang Ying", "Yang Hui", "Yang Xiu", "Yang Na", "Yang Juan",
      "Yang Hong", "Huang Fang", "Huang Jing", "Huang Yan", "Huang Mei", "Huang Ying", "Huang Hui",
      "Huang Xiu", "Huang Na", "Huang Juan", "Huang Li", "Zhao Fang", "Zhao Jing", "Zhao Yan", "Zhao Mei",
      "Zhao Ying", "Zhao Hui", "Zhao Xiu", "Zhao Na", "Zhao Juan", "Zhao Hong", "Wu Fang", "Wu Jing", "Wu Yan",
      "Wu Mei", "Wu Ying", "Wu Hui", "Wu Xiu", "Wu Na", "Wu Juan", "Wu Li", "Zhou Fang", "Zhou Jing",
      "Zhou Yan", "Zhou Mei", "Zhou Ying", "Zhou Hui", "Zhou Xiu", "Zhou Na", "Zhou Juan", "Zhou Hong",
      "Xu Fang", "Xu Jing", "Xu Yan", "Xu Mei", "Xu Ying", "Xu Hui", "Xu Xiu", "Xu Na", "Xu Juan", "Xu Li",
      "Sun Fang", "Sun Jing", "Sun Yan", "Sun Mei", "Sun Ying", "Sun Hui", "Sun Xiu", "Sun Na", "Sun Juan",
      "Sun Hong", "Ma Fang", "Ma Jing", "Ma Yan", "Ma Mei", "Ma Ying", "Ma Hui", "Ma Xiu", "Ma Na", "Ma Juan",
      "Ma Li", "Guo Fang", "Guo Jing", "Guo Yan", "Guo Mei", "Guo Ying", "Guo Hui", "Guo Xiu", "Guo Na",
      "Guo Juan", "Guo Hong", "Lin Fang", "Lin Jing", "Lin Yan", "Lin Mei", "Lin Ying", "Lin Hui", "Lin Xiu",
      "Lin Na", "Lin Juan", "Lin Li", "He Fang", "He Jing", "He Yan", "He Mei", "He Ying", "He Hui", "He Xiu",
      "He Na", "He Juan", "He Hong",
    ],
    surname: [
      "Bai", "Cai", "Cao", "Chang", "Chen", "Cheng", "Deng", "Ding", "Du", "Fan", "Fang", "Feng", "Fu", "Gao",
      "Gong", "Gu", "Guo", "Han", "He", "Hou", "Hu", "Huang", "Jia", "Jiang", "Jin", "Kong", "Lan", "Lei",
      "Li", "Liang", "Lin", "Liu", "Long", "Luo", "Ma", "Meng", "Pan", "Peng", "Qian", "Qiao", "Qin", "Ren",
      "Shan", "Shao", "Shen", "Shi", "Song", "Sun", "Tan", "Tang", "Tian", "Wang", "Wei", "Wen", "Wu", "Xiao",
      "Xie", "Xu", "Yan", "Yang", "Yao", "Ye", "Yu", "Yuan", "Zeng", "Zhang", "Zhao", "Zheng", "Zhong", "Zhou",
    ],
  },

  // Common regions / communities: Japan and Japanese diaspora communities.
  // Original category — all original entries retained.
  "east-asian-japanese": {
    label: "East Asian — Japanese",
    surnameFirst: true,
    male: [
      "Akira", "Aoi", "Arata", "Daichi", "Daisuke", "Eiji", "Fumihiro", "Genji", "Haru", "Haruki", "Hayato",
      "Hideo", "Hikaru", "Hiro", "Hiroshi", "Isamu", "Itsuki", "Jiro", "Jun", "Kaito", "Kaoru", "Katsuro",
      "Kazuki", "Kazuo", "Ken", "Kenichi", "Kenta", "Kiyoshi", "Koji", "Makoto", "Masaru", "Minato", "Naoki",
      "Noboru", "Osamu", "Raiden", "Ren", "Riku", "Rin", "Ryo", "Ryota", "Satoshi", "Shigeru", "Shin",
      "Shinji", "Shiro", "Sho", "Sora", "Susumu", "Taichi", "Takashi", "Takeshi", "Taro", "Tatsuya",
      "Tomohiro", "Toru", "Yamato", "Yasuhiro", "Yori", "Yoshi", "Yoshio", "Yuki", "Yuma", "Yusuke", "Akihiko",
      "Chikara", "Haruto", "Ichiro", "Kanji", "Keisuke", "Masashi", "Nobu", "Rei", "Ryunosuke", "Seiji",
      "Shota", "Tadashi", "Takumi", "Tetsuya", "Yoshinobu", "Atsushi", "Fuyuki", "Hideaki", "Kenshiro",
      "Mamoru", "Norio", "Ryohei", "Shun", "Takao", "Tomoya", "Yukio", "Zen", "Hotaka", "Kazuya", "Nao",
      "Rikuo", "Taiga", "Yoshiro",
    ],
    female: [
      "Aiko", "Akane", "Akemi", "Asami", "Ayaka", "Ayame", "Chie", "Chika", "Emiko", "Eri", "Haruka", "Hikari",
      "Hinata", "Hitomi", "Honoka", "Izumi", "Kaede", "Kana", "Kanon", "Karen", "Kasumi", "Keiko", "Kiko",
      "Kimiko", "Kohana", "Kyoko", "Madoka", "Mai", "Maiko", "Mana", "Mariko", "Mayu", "Megumi", "Michiko",
      "Midori", "Mika", "Miku", "Minami", "Misaki", "Miyu", "Momoka", "Nana", "Nao", "Naoko", "Narumi",
      "Nozomi", "Rei", "Rika", "Rina", "Saki", "Sakura", "Satomi", "Sayaka", "Shiori", "Sumire", "Takara",
      "Tomoko", "Wakana", "Yoko", "Yui", "Yuka", "Yukari", "Yume", "Yumi", "Yuna", "Akiko", "Chiharu",
      "Fumiko", "Harumi", "Hisako", "Kanna", "Kiyomi", "Kumiko", "Maaya", "Mao", "Mitsuki", "Nanami",
      "Natsumi", "Reina", "Ruri", "Sachiko", "Setsuko", "Shizuka", "Tamaki", "Umeko", "Yayoi", "Yoshiko",
      "Airi", "Chisato", "Erika", "Hotaru", "Kiyoka", "Manami", "Nodoka", "Riko", "Suzume", "Yuriko", "Asuka",
      "Hina", "Kotone", "Mizuki",
    ],
    surname: [
      "Abe", "Aoki", "Endo", "Fujimoto", "Fujita", "Fukuda", "Goto", "Hara", "Hayashi", "Higashi", "Hirano",
      "Honda", "Ichikawa", "Ishida", "Ishikawa", "Ito", "Iwai", "Kaneko", "Kato", "Kawaguchi", "Kawasaki",
      "Kikuchi", "Kimura", "Kobayashi", "Kondo", "Kurosawa", "Maeda", "Matsuda", "Matsumoto", "Miura",
      "Miyamoto", "Mizuno", "Mori", "Morimoto", "Murakami", "Murata", "Nagai", "Nakajima", "Nakamura",
      "Nakano", "Nishimura", "Noguchi", "Ogawa", "Okada", "Okamoto", "Ono", "Saito", "Sakai", "Sasaki",
      "Shibata", "Shimada", "Sugimoto", "Suzuki", "Takahashi", "Takeda", "Tanabe", "Tanaka", "Uchida", "Ueda",
      "Wada", "Watanabe", "Yamada", "Yamaguchi", "Yamamoto", "Yamashita", "Yokoyama", "Yoshida", "Arakawa",
      "Chiba", "Fujii", "Hoshino", "Inoue", "Kojima", "Matsushita", "Nakao", "Oshima", "Seki", "Tsuchiya",
      "Yoshikawa", "Ando", "Furuya", "Hashimoto", "Igarashi", "Kitagawa", "Mochizuki", "Narita", "Shinohara",
      "Tachibana", "Uesugi", "Yanagida", "Aizawa", "Fukushima", "Hasegawa", "Kuramoto", "Minamoto", "Shimizu",
      "Toyoda",
    ],
  },

  // Common regions / communities: Korean Peninsula and Korean diaspora communities.
  // Original category — all original entries retained.
  "east-asian-korean": {
    label: "East Asian — Korean",
    surnameFirst: true,
    male: [
      "Byung-ho", "Byung-hun", "Chang-min", "Chul", "Chul-soo", "Dae-hyun", "Dae-jung", "Dae-sung",
      "Dong-hyun", "Dong-wook", "Eun-ho", "Gi-tae", "Gun-woo", "Ha-joon", "Hae-jin", "Hyun-joon", "Hyun-soo",
      "Hyun-woo", "Il-sung", "In-su", "Jae-hyun", "Jae-sung", "Jae-won", "Ji-ho", "Ji-hoon", "Ji-hyun",
      "Ji-sung", "Ji-woo", "Jin-ho", "Jin-soo", "Jong-hyun", "Joon", "Joon-ho", "Jun-seo", "Jung-ho",
      "Jung-min", "Kang-min", "Ki-tae", "Kwang-soo", "Kyung-ho", "Min-ho", "Min-jae", "Min-jun", "Min-seok",
      "Myung-soo", "Sang-ho", "Sang-hyun", "Seok-jin", "Seung-ho", "Seung-hyun", "Seung-min", "Seung-woo",
      "Si-woo", "Soo-hyun", "Sung-ho", "Sung-min", "Tae-hyun", "Tae-joon", "Tae-sung", "Tae-woo", "Won-ho",
      "Woo-jin", "Woo-sung", "Young-ho", "Young-jae", "Young-min", "Young-soo", "Yoon-ho", "Yoon-jae",
      "Yoon-sung", "Yun-seo", "Beom-soo", "Chang-ho", "Do-hyun", "Gyu-min", "Hwan", "Jin-woo", "Joon-young",
      "Kyu-hyun", "Nam-joon", "Sang-woo", "Seo-jun", "Seung-jae", "Si-hyun", "Su-bin", "Tae-yang", "Won-jun",
      "Ye-jun", "Yeong-su", "Yong-hwa", "Dong-min", "Hyuk", "Jae-beom", "Kyung-soo", "Min-kyu", "Sun-woo",
    ],
    female: [
      "Ae-ri", "Ara", "Bo-kyung", "Bo-ra", "Chae-won", "Da-eun", "Da-hye", "Eun-bi", "Eun-chae", "Eun-ha",
      "Eun-hee", "Eun-ji", "Ga-young", "Ha-eun", "Ha-na", "Hae-won", "Hana", "Hee-jin", "Hee-young", "Hye-jin",
      "Hye-ri", "Hye-won", "Hyun-ah", "Hyun-joo", "Hyun-kyung", "In-young", "Ji-eun", "Ji-hye", "Ji-soo",
      "Ji-won", "Ji-young", "Jin-hee", "Joo-hyun", "Ju-eun", "Kyung-hee", "Mi-kyung", "Mi-sook", "Min-ah",
      "Min-ji", "Min-seo", "Na-ra", "Seo-hyun", "Seo-yeon", "Seul-gi", "So-hee", "So-ra", "So-young", "Soo-ah",
      "Soo-jin", "Soo-yeon", "Su-bin", "Sun-hee", "Sun-young", "Ye-eun", "Ye-jin", "Yeon-hee", "Yoo-jin",
      "Yoon-ah", "Yoon-hee", "Young-mi", "Young-sook", "Yu-jin", "Yuna", "Ae-jung", "Bo-mi", "Da-sol",
      "Eun-seo", "Ga-eul", "Ha-yoon", "Hye-sun", "Ji-ah", "Ji-yoo", "Jung-hwa", "Mi-na", "Na-young", "Seon-mi",
      "Seung-hee", "Shin-hye", "So-jung", "So-yun", "Su-jin", "Sun-mi", "Ye-rin", "Ye-seul", "Yeo-jin",
      "Yoon-seo", "Yu-na", "Bit-na", "Chun-ja", "Eun-young", "Hye-bin", "Mi-young", "Seo-yun", "Soo-min",
      "Yeon-su", "Young-ja",
    ],
    surname: [
      "Ahn", "Baek", "Bae", "Cha", "Chang", "Choi", "Chun", "Han", "Heo", "Hong", "Hwang", "Jang", "Jeon",
      "Jung", "Kang", "Kim", "Koo", "Kwak", "Lee", "Lim", "Ma", "Min", "Moon", "Nam", "No", "Oh", "Park",
      "Rhee", "Ryu", "Seo", "Shin", "Sim", "Song", "Yoo", "Yoon", "Cho", "Gang", "Go", "Ha", "Ham", "Heo",
      "Huh", "Im", "Jin", "Ju", "Kang", "Ko", "Kwon", "Na", "Paik", "Pyo", "Seok", "Seong", "Son", "Yang",
      "Yeom", "Yim", "Yu", "An", "Bang", "Byun", "Cheon", "Do", "Eom", "Gwak", "Ham", "Hwangbo", "Joo", "Ki",
      "Mok", "Myung", "Noh", "Ok", "Pae", "Ro", "Sa", "Seol", "Tak", "Uhm", "Won", "Woo", "Yuk", "Bok", "Chae",
      "Eun", "Gye", "Hyeon", "Jae", "Myeong", "Pang", "Seo", "Wi", "Yeo", "Yun", "Jo", "Beom", "Dan", "Seung",
    ],
  },

  // Common regions / communities: Russia, Ukraine, Belarus, Poland, Czechia, Slovakia, Balkans and other Slavic-speaking areas.
  // Original category — all original entries retained.
  "eastern-european-slavic": {
    label: "Eastern European / Slavic",
    surnameFirst: false,
    male: [
      "Adam", "Aleksei", "Andrei", "Anton", "Arkady", "Bohdan", "Boris", "Branislav", "Damir", "Danil",
      "Dariusz", "Denis", "Dimitri", "Dragomir", "Dusan", "Emil", "Evgeny", "Filip", "Gennady", "Grigori",
      "Igor", "Ilya", "Ivan", "Jaromir", "Jiri", "Karel", "Kirill", "Konstantin", "Ladislav", "Leonid", "Luka",
      "Marek", "Mateusz", "Milan", "Milos", "Miroslav", "Nikolai", "Oleg", "Pavel", "Piotr", "Radek",
      "Radomir", "Roman", "Rostislav", "Ruslan", "Sergei", "Slavko", "Stanislav", "Stefan", "Svetoslav",
      "Tadeusz", "Timur", "Tomasz", "Valentin", "Vasili", "Viktor", "Vladimir", "Vladislav", "Vojtech",
      "Yaroslav", "Yevgeni", "Zdenek", "Zoran", "Aleksandar", "Bogdan", "Casimir", "Dobromir", "Fyodor",
      "Kazimir", "Lech", "Mieczyslaw", "Nikita", "Radislav", "Sasha", "Slobodan", "Tihomir", "Venceslav",
      "Wojciech", "Yuriy", "Zbigniew", "Anatoly", "Boleslav", "Czeslaw", "Dragan", "Georgi", "Janusz",
      "Kostya", "Lukasz", "Mstislav", "Predrag", "Radoslav", "Semyon", "Vadim", "Velimir", "Yegor", "Zlatan",
    ],
    female: [
      "Agata", "Alena", "Anastasia", "Anya", "Bozena", "Danica", "Daria", "Dominika", "Dragana", "Ekaterina",
      "Elena", "Elzbieta", "Eva", "Galina", "Halina", "Ilona", "Inna", "Irina", "Ivana", "Jadwiga", "Jelena",
      "Karolina", "Katarina", "Katya", "Kristina", "Larisa", "Lidia", "Ludmila", "Magdalena", "Maja", "Marina",
      "Marta", "Milena", "Mira", "Miroslava", "Nadia", "Natalia", "Natasha", "Nikolina", "Olena", "Olga",
      "Oksana", "Petra", "Radmila", "Renata", "Sanja", "Sofiya", "Sonya", "Stanislava", "Svetlana", "Tatiana",
      "Tereza", "Valentina", "Vera", "Veronika", "Vesna", "Viktoria", "Yana", "Yelena", "Yulia", "Zdenka",
      "Zlata", "Aleksandra", "Bogdana", "Cveta", "Dobroslava", "Emilia", "Feodora", "Gordana", "Izabela",
      "Jaroslava", "Ksenia", "Liliana", "Malgorzata", "Nadezhda", "Polina", "Roksana", "Slavica", "Tamara",
      "Vasilisa", "Zhanna", "Anzela", "Bronislava", "Dobrila", "Evgenia", "Ivetta", "Kalina", "Larysa",
      "Milica", "Nevena", "Rada", "Snezhana", "Tsvetana", "Velina", "Yaroslava", "Zora",
    ],
    surname: [
      "Antonov", "Babić", "Baranov", "Belov", "Borkowski", "Chernov", "Czajkowski", "Dimitrov", "Dragunov",
      "Duboiski", "Fedorov", "Filipov", "Gavrilov", "Golubov", "Gorski", "Horvat", "Ilic", "Ivanov",
      "Jankovic", "Jovanovic", "Kaczmarek", "Kalinowski", "Kovacs", "Kovalenko", "Kowalski", "Kozlov",
      "Kravchenko", "Kuznetsov", "Lewandowski", "Lukashenko", "Markovic", "Mihailov", "Miklos", "Mladenov",
      "Morozov", "Nikolic", "Novak", "Novikov", "Orlov", "Pavlov", "Petrov", "Popov", "Romanov", "Rybak",
      "Sidorov", "Smirnov", "Sokolov", "Stanek", "Stepanov", "Stojanovic", "Tarasov", "Todorov", "Urbanek",
      "Vasilev", "Veselov", "Vinogradov", "Vojnovic", "Volkov", "Voronin", "Vukovic", "Yakimov", "Yordanov",
      "Zajac", "Zhukov", "Aleksic", "Bogdanov", "Cerny", "Dobrovsky", "Gajic", "Iliev", "Karadzic", "Kislyak",
      "Krawczyk", "Litvinov", "Malinowski", "Mroz", "Nowak", "Ostrowski", "Ponomarenko", "Radulovic",
      "Rogozin", "Savin", "Shevchenko", "Tarnowski", "Ulyanov", "Veselinov", "Wojcik", "Zelenko", "Andrusov",
      "Bronislavski", "Dragic", "Jurevic", "Kostov", "Mirovic", "Petrescu", "Rudenko", "Svetlov", "Yarovich",
    ],
  },

  // Common regions / communities: England and English-speaking Britain; diaspora communities.
  // Source: Faker 40.1.2 person provider(s): en_GB; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "english": {
    label: "English / British",
    surnameFirst: false,
    male: [
      "Aaron", "Abdul", "Adam", "Adrian", "Alan", "Albert", "Alex", "Alexander", "Allan", "Andrew", "Anthony",
      "Antony", "Arthur", "Ashley", "Barry", "Ben", "Benjamin", "Bernard", "Billy", "Bradley", "Brandon",
      "Brett", "Brian", "Bruce", "Bryan", "Callum", "Cameron", "Carl", "Charles", "Charlie", "Christian",
      "Christopher", "Clifford", "Clive", "Colin", "Connor", "Conor", "Craig", "Dale", "Damian", "Damien",
      "Daniel", "Danny", "Darren", "David", "Dean", "Declan", "Denis", "Dennis", "Derek", "Dominic", "Donald",
      "Douglas", "Duncan", "Dylan", "Edward", "Elliot", "Elliott", "Eric", "Francis", "Frederick", "Gareth",
      "Garry", "Gary", "Gavin", "Geoffrey", "George", "Gerald", "Gerard", "Glen", "Glenn", "Gordon", "Graeme",
      "Graham", "Gregory", "Guy", "Harry", "Henry", "Howard", "Hugh", "Iain", "Ian", "Jack", "Jacob", "Jake",
      "James", "Jamie", "Jason", "Jay", "Jeffrey", "Jeremy", "Joe", "Joel", "John", "Jonathan", "Jordan",
      "Joseph", "Josh", "Joshua", "Julian", "Justin", "Karl", "Keith", "Kenneth", "Kevin", "Kieran", "Kyle",
      "Lawrence", "Lee", "Leigh", "Leon", "Leonard", "Leslie", "Lewis", "Liam", "Louis", "Luke", "Malcolm",
      "Marc", "Marcus", "Mark", "Martin", "Martyn", "Mathew", "Matthew", "Maurice", "Max", "Michael",
      "Mitchell", "Mohamed", "Mohammad", "Mohammed", "Nathan", "Neil", "Nicholas", "Nigel", "Norman", "Oliver",
      "Patrick", "Paul", "Peter", "Philip", "Phillip", "Raymond", "Reece", "Rhys", "Richard", "Ricky",
      "Robert", "Robin", "Roger", "Ronald", "Ross", "Roy", "Russell", "Ryan", "Sam", "Samuel", "Scott", "Sean",
      "Shane", "Shaun", "Simon", "Stanley", "Stephen", "Steven", "Stewart", "Stuart", "Terence", "Terry",
      "Thomas", "Timothy", "Toby", "Tom", "Tony", "Trevor", "Victor", "Vincent", "Wayne", "William",
    ],
    female: [
      "Abbie", "Abigail", "Aimee", "Alexandra", "Alice", "Alison", "Amanda", "Amber", "Amelia", "Amy",
      "Andrea", "Angela", "Ann", "Anna", "Anne", "Annette", "Ashleigh", "Barbara", "Beth", "Bethan", "Bethany",
      "Beverley", "Brenda", "Carly", "Carol", "Carole", "Caroline", "Carolyn", "Catherine", "Charlene",
      "Charlotte", "Chelsea", "Cheryl", "Christine", "Claire", "Clare", "Danielle", "Dawn", "Deborah", "Debra",
      "Denise", "Diana", "Diane", "Donna", "Dorothy", "Eileen", "Elaine", "Eleanor", "Elizabeth", "Ellie",
      "Emily", "Emma", "Fiona", "Frances", "Francesca", "Gail", "Gemma", "Georgia", "Georgina", "Geraldine",
      "Gillian", "Grace", "Hannah", "Harriet", "Hayley", "Hazel", "Heather", "Helen", "Hilary", "Hollie",
      "Holly", "Irene", "Jacqueline", "Jade", "Jane", "Janet", "Janice", "Jasmine", "Jayne", "Jean", "Jemma",
      "Jenna", "Jennifer", "Jessica", "Jill", "Joan", "Joanna", "Joanne", "Jodie", "Josephine", "Joyce",
      "Judith", "Julia", "Julie", "June", "Karen", "Kate", "Katherine", "Kathleen", "Kathryn", "Katie", "Katy",
      "Kayleigh", "Kelly", "Kerry", "Kim", "Kimberley", "Kirsty", "Laura", "Lauren", "Leah", "Leanne",
      "Lesley", "Linda", "Lindsey", "Lisa", "Lorraine", "Louise", "Lucy", "Lydia", "Lynda", "Lynn", "Lynne",
      "Mandy", "Margaret", "Maria", "Marian", "Marie", "Marilyn", "Marion", "Mary", "Maureen", "Megan",
      "Melanie", "Melissa", "Michelle", "Molly", "Naomi", "Natalie", "Natasha", "Nicola", "Nicole", "Olivia",
      "Paige", "Pamela", "Patricia", "Paula", "Pauline", "Rachael", "Rachel", "Rebecca", "Rita", "Rosemary",
      "Rosie", "Ruth", "Sally", "Samantha", "Sandra", "Sara", "Sarah", "Shannon", "Sharon", "Sheila", "Sian",
      "Sophie", "Stacey", "Stephanie", "Susan", "Suzanne", "Sylvia", "Teresa", "Tina", "Tracey", "Tracy",
      "Valerie", "Vanessa", "Victoria", "Wendy", "Yvonne", "Zoe",
    ],
    surname: [
      "Andrews", "Archer", "Barber", "Barnes", "Barrett", "Barry", "Berry", "Birch", "Bishop", "Black",
      "Blake", "Bolton", "Bond", "Bowen", "Bradshaw", "Brown", "Bruce", "Bryan", "Bryant", "Burgess", "Burns",
      "Butcher", "Byrne", "Cameron", "Campbell", "Carter", "Chan", "Chapman", "Charlton", "Clayton",
      "Clements", "Coles", "Connor", "Conway", "Cox", "Craig", "Cross", "Curtis", "Dawson", "Day", "Doherty",
      "Donnelly", "Duffy", "Dyer", "Farmer", "Faulkner", "Ferguson", "Finch", "Fletcher", "Ford", "Freeman",
      "Fry", "George", "Gibson", "Gilbert", "Giles", "Goodwin", "Gough", "Gray", "Greenwood", "Griffiths",
      "Hammond", "Hardy", "Hargreaves", "Harper", "Harris", "Harvey", "Hayward", "Herbert", "Hicks", "Hill",
      "Hilton", "Hobbs", "Holland", "Hope", "Hopkins", "Horton", "Howard", "Howell", "Humphries", "Hutchinson",
      "Ingram", "Iqbal", "James", "Jenkins", "Joyce", "Kaur", "Kelly", "Kennedy", "Kent", "Kirby", "Lamb",
      "Lane", "Lawson", "Leonard", "Lewis", "Lord", "Lucas", "Lyons", "Marsden", "Marsh", "Marshall",
      "McCarthy", "Miles", "Mistry", "Mitchell", "Moran", "Morgan", "Murphy", "Murray", "Newton", "Nicholson",
      "Nixon", "Noble", "Nolan", "Norris", "North", "O'Donnell", "O'Neill", "Osborne", "Parkin", "Parsons",
      "Patterson", "Pearson", "Perry", "Pickering", "Pope", "Powell", "Power", "Pritchard", "Quinn", "Rahman",
      "Read", "Rees", "Reeves", "Reid", "Reynolds", "Rhodes", "Rice", "Roberts", "Rogers", "Ross", "Rowley",
      "Ryan", "Sanderson", "Sharp", "Sharpe", "Shaw", "Shepherd", "Simpson", "Singh", "Smart", "Smith",
      "Spencer", "Steele", "Stevens", "Stevenson", "Stewart", "Stokes", "Summers", "Thomas", "Thompson",
      "Thornton", "Thorpe", "Townsend", "Tucker", "Turner", "Walters", "Walton", "Warren", "Webb", "Wells",
      "White", "Whittaker", "Wilkins", "Willis", "Winter", "Wong", "Woodward", "Young",
    ],
  },

  // Common regions / communities: Ethiopia, Eritrea and neighboring Horn of Africa communities.
  // Original category — all original entries retained.
  "ethiopian-horn-of-africa": {
    label: "Ethiopian / Horn of Africa",
    surnameFirst: false,
    male: [
      "Abebe", "Abel", "Abraham", "Abreham", "Adane", "Adisu", "Aklilu", "Alemayehu", "Amare", "Amanuel",
      "Amlak", "Asfaw", "Assefa", "Awet", "Ayana", "Bekele", "Berhane", "Berhanu", "Birhanu", "Binyam",
      "Dagmawi", "Dawit", "Demeke", "Dereje", "Elias", "Endalkachew", "Ephrem", "Ermias", "Eyob", "Fitsum",
      "Fisseha", "Gabre", "Gebre", "Gebremariam", "Getachew", "Girma", "Habte", "Haile", "Hailemariam",
      "Hailu", "Henok", "Kidane", "Kidus", "Kiros", "Lelisa", "Mekonnen", "Melaku", "Meron", "Mihret",
      "Mohammed", "Mulugeta", "Nahom", "Natnael", "Negasi", "Nigatu", "Robel", "Samuel", "Semere", "Seyoum",
      "Solomon", "Tadesse", "Tamirat", "Tamrat", "Tekle", "Temesgen", "Tesfahun", "Tesfaye", "Tewelde",
      "Tewodros", "Tilahun", "Welde", "Woldemariam", "Workneh", "Yared", "Yemane", "Yilma", "Yohannes",
      "Yonas", "Yosef", "Yussuf", "Zelalem", "Zerihun", "Amanuel", "Beraki", "Desta", "Fikru", "Ghebremeskel",
      "Hagos", "Isaias", "Jemal", "Kebede", "Mebratu", "Negus", "Shiferaw", "Tsegaye", "Wassie", "Yitbarek",
      "Zenawi",
    ],
    female: [
      "Abeba", "Alem", "Almaz", "Amanuel", "Aster", "Awet", "Ayan", "Ayantu", "Betelhem", "Birtukan", "Chaltu",
      "Dagmawit", "Eden", "Eleni", "Elsabet", "Emebet", "Eyerusalem", "Feven", "Fikirte", "Genet", "Haben",
      "Hadas", "Hanna", "Helen", "Hiwot", "Hodan", "Ilili", "Lemlem", "Liya", "Mahi", "Mahlet", "Marta",
      "Medina", "Mekdes", "Meron", "Meseret", "Mimi", "Muna", "Nardos", "Netsanet", "Rahel", "Rediet", "Ruth",
      "Saba", "Samrawit", "Sara", "Selam", "Selamawit", "Senait", "Sofia", "Tigist", "Tsedenia", "Tsion",
      "Winta", "Worknesh", "Yasmin", "Yodit", "Zahara", "Zeinab", "Zemen", "Abrehet", "Askale", "Blen",
      "Desta", "Eyerus", "Fikir", "Haimanot", "Hawi", "Kidist", "Lulit", "Mahder", "Meklit", "Mulu", "Nafkot",
      "Roman", "Ruth", "Saron", "Seble", "Sena", "Sosina", "Tewabech", "Tiruwork", "Wegayehu", "Yordanos",
      "Zebiba", "Aida", "Buzayehu", "Dinknesh", "Etsegenet", "Frehiwot", "Genna", "Habiba", "Kalkidan",
      "Mebrhit", "Netsanet", "Rakeb", "Sahle", "Tsega", "Zufan",
    ],
    surname: [
      "Abebe", "Abraham", "Adane", "Alemayehu", "Asfaw", "Assefa", "Awoke", "Bekele", "Berhane", "Berhe",
      "Berihu", "Beyene", "Demissie", "Derebe", "Desta", "Ephrem", "Eshetu", "Fekadu", "Fisseha", "Gebre",
      "Gebremariam", "Gebreselassie", "Getachew", "Ghebreyesus", "Girma", "Haile", "Hailemariam", "Hailu",
      "Hassen", "Ibrahim", "Kidane", "Kiros", "Mebratu", "Mekonnen", "Melaku", "Mengesha", "Mohammed", "Molla",
      "Negash", "Nigussie", "Reda", "Sahle", "Samson", "Semere", "Seyoum", "Shiferaw", "Solomon", "Tadesse",
      "Tamirat", "Tamru", "Tekle", "Temesgen", "Tesfaye", "Tewelde", "Tewodros", "Tilahun", "Welde",
      "Woldemariam", "Worku", "Yared", "Yilma", "Yohannes", "Yosef", "Zelalem", "Zerihun", "Abay", "Aregawi",
      "Asmelash", "Beraki", "Debebe", "Fikremariam", "Gebru", "Ghebremichael", "Hagos", "Kebede", "Kidus",
      "Mamo", "Mebrahtu", "Negasi", "Reta", "Teshome", "Tesfamariam", "Tesfamichael", "Weldeslassie", "Yemane",
      "Aklilu", "Bereded", "Dawit", "Endale", "Girmay", "Habte", "Kassa", "Meklit", "Negusse", "Tsegaye",
      "Wassie", "Yitbarek", "Zenebe",
    ],
  },

  // Common regions / communities: Philippines and Filipino diaspora communities; Spanish, English and local-language influences.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "filipino": {
    label: "Filipino",
    surnameFirst: false,
    male: [
      "Jose", "Juan", "Miguel", "Rafael", "Gabriel", "Antonio", "Andres", "Manuel", "Emilio", "Francisco",
      "Ramon", "Ricardo", "Renato", "Eduardo", "Alberto", "Benigno", "Rodrigo", "Ferdinand", "Joaquin",
      "Apolinario", "Isagani", "Bayani", "Lakan", "Danilo", "Reynaldo", "Ernesto", "Nestor", "Rodel", "Jun",
      "Arnel", "Christian", "Mark", "Paolo", "Carlo", "Jericho", "Joshua", "Jayson", "Rico", "Francis",
      "Angelo",
    ],
    female: [
      "Maria", "Ana", "Luz", "Fe", "Remedios", "Carmen", "Josefina", "Rosario", "Corazon", "Imelda", "Leonor",
      "Gloria", "Teresa", "Maricel", "Maribel", "Marilou", "Marites", "Lourdes", "Ligaya", "Mayumi",
      "Luningning", "Amihan", "Tala", "Mutya", "Dalisay", "Bituin", "Hiraya", "Jocelyn", "Grace", "Joy",
      "Michelle", "Angelica", "Kristine", "Katrina", "Janine", "Anne", "Marian", "Janelle", "Bianca",
      "Patricia",
    ],
    surname: [
      "dela Cruz", "Garcia", "Reyes", "Ramos", "Mendoza", "Santos", "Flores", "Gonzales", "Bautista",
      "Villanueva", "Fernandez", "Cruz", "Aquino", "Castro", "Rivera", "Mercado", "Perez", "Torres", "Domingo",
      "Morales", "Santiago", "Dizon", "Manalo", "Aguilar", "Abad", "Abalos", "Abaya", "Macapagal", "Magsaysay",
      "Marcos", "Cojuangco", "Gatdula", "Lacson", "Tolentino", "Pangilinan", "Sarmiento", "Salazar", "Alonzo",
      "Tiongson", "Tan", "Sy", "Lim", "Ong", "Go", "Yap", "Uy", "Chua", "Ang", "Gatchalian", "Dimaculangan",
    ],
  },

  // Common regions / communities: Finland and Estonia; not the entire Finnic language family.
  // Source: Faker 40.1.2 person provider(s): fi_FI, et_EE; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "finnic": {
    label: "Finnic (Finnish / Estonian)",
    surnameFirst: false,
    male: [
      "Aapo", "Aarne", "Aaron", "Aatos", "Ahti", "Aki", "Akseli", "Aleksander", "Aleksandr", "Aleksei",
      "Aleksi", "Alexander", "Allan", "Andrei", "Andres", "Andrus", "Anssi", "Antero", "Anton", "Antti", "Ari",
      "Arto", "Artturi", "Artur", "Arvo", "Aulis", "Benjamin", "Christian", "Daniel", "Dmitri", "Edvard",
      "Eemil", "Eerik", "Eero", "Eetu", "Einari", "Eino", "Elmeri", "Ensio", "Erkki", "Esa", "Esko", "Harri",
      "Henrikki", "Igor", "Iisakki", "Ilari", "Ilkka", "Ilmari", "Indrek", "Ivan", "Jaan", "Jaanus", "Jani",
      "Janne", "Jarkko", "Jarno", "Jere", "Jesse", "Jevgeni", "Joel", "Johan", "Johannes", "Joni", "Joona",
      "Joonatan", "Jouko", "Juha", "Juhana", "Juhani", "Jukka", "Julius", "Jussi", "Juuso", "Jyrki", "Jüri",
      "Kaarlo", "Kai", "Kalervo", "Kalevi", "Kari", "Kasper", "Keijo", "Kim", "Kristjan", "Kullervo", "Kustaa",
      "Lasse", "Lassi", "Lauri", "Leevi", "Leo", "Maksim", "Marek", "Markku", "Martin", "Mati", "Matias",
      "Matti", "Mauri", "Meelis", "Mihhail", "Mihkel", "Mika", "Mikael", "Niilo", "Niklas", "Niko", "Oiva",
      "Olavi", "Oleg", "Oliver", "Onni", "Oskari", "Osmo", "Ossi", "Paavo", "Pauli", "Peeter", "Pentti",
      "Pertti", "Petri", "Petteri", "Rainer", "Raivo", "Rasmus", "Reijo", "Rein", "Reino", "Riku", "Risto",
      "Robert", "Roman", "Roope", "Sakari", "Samu", "Samuel", "Samuli", "Sander", "Santeri", "Sebastian",
      "Seppo", "Sergei", "Sergey", "Simo", "Taneli", "Tapani", "Tapio", "Tarmo", "Tauno", "Teemu", "Tero",
      "Teuvo", "Tiit", "Timo", "Toivo", "Tomi", "Tommi", "Toni", "Toomas", "Tuomas", "Tuomo", "Uolevi",
      "Valdemar", "Valeri", "Valtteri", "Veeti", "Veijo", "Veikko", "Veli", "Vello", "Verneri", "Vesa",
      "Vilhelm", "Vilho", "Viljami", "Viljo", "Ville", "Väinö", "Yrjö",
    ],
    female: [
      "Aila", "Aili", "Aino", "Airi", "Alexandra", "Amanda", "Anita", "Anja", "Anna", "Anna-Liisa", "Anne",
      "Anneli", "Anni", "Anniina", "Anu", "Arja", "Aulikki", "Aune", "Aurora", "Birgitta", "Carita", "Diana",
      "Eeva", "Eija", "Eila", "Elena", "Eliisa", "Elina", "Elisa", "Elisabet", "Elisabeth", "Ella", "Ellen",
      "Elli", "Elsa", "Emilia", "Emma", "Emmi", "Ene", "Erika", "Essi", "Esteri", "Eve", "Eveliina", "Galina",
      "Hannele", "Heidi", "Heli", "Helinä", "Hellevi", "Henna", "Hilkka", "Hillevi", "Iiris", "Inkeri",
      "Irene", "Irina", "Irja", "Irma", "Irmeli", "Jaana", "Jekaterina", "Jelena", "Jenna", "Jenni", "Jonna",
      "Josefiina", "Julia", "Kaarina", "Kadri", "Kaija", "Kaisa", "Karoliina", "Katariina", "Kati", "Katri",
      "Katriina", "Katrin", "Kerttu", "Kirsi", "Kirsti", "Krista", "Kristi", "Kristiina", "Kristina", "Laura",
      "Leena", "Leila", "Lilja", "Linda", "Linnea", "Ljubov", "Lotta", "Maarit", "Maie", "Maija", "Mare",
      "Margareta", "Margit", "Maria", "Marianne", "Marika", "Marita", "Marja", "Marja-Liisa", "Marjaana",
      "Marjatta", "Marjo", "Marjukka", "Marjut", "Martta", "Matilda", "Merike", "Merja", "Mervi", "Mia",
      "Miia", "Milla", "Minna", "Mira", "Mirja", "Nadežda", "Natalia", "Natalja", "Nea", "Niina", "Nina",
      "Noora", "Orvokki", "Paula", "Pauliina", "Pia", "Piret", "Pirjo", "Raija", "Raili", "Riikka", "Riina",
      "Riitta", "Ritva", "Roosa", "Saara", "Sanna", "Satu", "Seija", "Siiri", "Sini", "Sinikka", "Sirje",
      "Sirkka", "Sirpa", "Sofia", "Sonja", "Suvi", "Svetlana", "Taina", "Tamara", "Tanja", "Taru", "Tatiana",
      "Tatjana", "Teija", "Terttu", "Tiia", "Tiina", "Tiiu", "Triin", "Tuija", "Tuula", "Tuuli", "Tuulia",
      "Tuulikki", "Ulla", "Valentina", "Veera", "Viivi", "Vilma", "Virpi", "Vuokko", "Ülle",
    ],
    surname: [
      "Aalto", "Aasmäe", "Abel", "Afanasjev", "Airaksinen", "Alanen", "Alas", "Antikainen", "Anttonen",
      "Baranov", "Borissov", "Davõdov", "Eller", "Eloranta", "Erm", "Eskola", "Fjodorov", "Fomin", "Haapala",
      "Hakala", "Hallik", "Halme", "Halonen", "Hartikainen", "Heino", "Helin", "Hokkanen", "Holappa",
      "Holmström", "Hyvärinen", "Härkönen", "Ihalainen", "Jaakkola", "Jaakson", "Jauhiainen", "Jeršov",
      "Juhanson", "Juntunen", "Juvonen", "Jõesaar", "Kainulainen", "Kala", "Kaljuste", "Kallaste", "Karhu",
      "Karppinen", "Karttunen", "Kase", "Kasemets", "Keränen", "Kesküla", "Ketola", "Kiik", "Kinnunen", "Kivi",
      "Kivinen", "Klaas", "Koger", "Koitla", "Kolk", "Kont", "Koskela", "Koski", "Kovanen", "Kozlov", "Kriisa",
      "Kroon", "Kujala", "Kukkonen", "Kulikov", "Kurg", "Kärkkäinen", "Käsper", "Laakkonen", "Laakso", "Laks",
      "Lappalainen", "Latvala", "Lehikoinen", "Lehtonen", "Leppänen", "Liiva", "Lindgren", "Lindroos",
      "Lindström", "Link", "Lomp", "Loorits", "Lukk", "Luoma", "Lõhmus", "Maasik", "Madisson", "Makarov",
      "Maksimov", "Maripuu", "Mark", "Marttila", "Matilainen", "Matvejev", "Meier", "Mets", "Miettinen",
      "Miller", "Mironov", "Mononen", "Mäe", "Mäkelä", "Männik", "Nazarov", "Nissinen", "Nousiainen",
      "Nurminen", "Nuut", "Nõmm", "Oksanen", "Ott", "Paas", "Pajula", "Parkkinen", "Pekkarinen", "Pelkonen",
      "Penttinen", "Perälä", "Peterson", "Petrov", "Piirsalu", "Pikk", "Pärtel", "Põllu", "Raadik", "Rantanen",
      "Rauhala", "Riikonen", "Rintala", "Roos", "Roosileht", "Roots", "Rumjantsev", "Ryynänen", "Räisänen",
      "Räty", "Saare", "Saari", "Saarinen", "Salmi", "Salumäe", "Semenov", "Siim", "Sillaots", "Simola",
      "Sipilä", "Sirviö", "Soo", "Soosalu", "Susi", "Syrjälä", "Tanskanen", "Teearu", "Tervo", "Tiihonen",
      "Timonen", "Titov", "Tomingas", "Toome", "Tuul", "Urb", "Vaht", "Vain", "Valkama", "Valkonen",
      "Valtonen", "Viira", "Viks", "Vill", "Villemson", "Virta", "Ylönen", "Õunapuu", "Žuravljov",
    ],
  },

  // Common regions / communities: France, French-speaking Belgium and Switzerland; diaspora communities.
  // Source: Faker 40.1.2 person provider(s): fr_FR; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "french": {
    label: "French / Francophone",
    surnameFirst: false,
    male: [
      "Adrien", "Aimé", "Alain", "Alexandre", "Alfred", "Alphonse", "André", "Antoine", "Arthur", "Auguste",
      "Augustin", "Benjamin", "Benoît", "Bernard", "Bertrand", "Charles", "Christophe", "Daniel", "David",
      "Denis", "Emmanuel", "Eugène", "Franck", "François", "Frédéric", "Gabriel", "Georges", "Gilbert",
      "Gilles", "Grégoire", "Guillaume", "Guy", "Gérard", "Henri", "Honoré", "Hugues", "Isaac", "Jacques",
      "Jean", "Joseph", "Jules", "Julien", "Jérôme", "Laurent", "Louis", "Luc", "Lucas", "Léon", "Marc",
      "Marcel", "Martin", "Matthieu", "Maurice", "Michel", "Nicolas", "Noël", "Olivier", "Patrick", "Paul",
      "Philippe", "Pierre", "Raymond", "René", "Richard", "Robert", "Roger", "Roland", "Rémy", "Stéphane",
      "Sébastien", "Thibault", "Thibaut", "Thierry", "Thomas", "Théodore", "Théophile", "Timothée", "Tristan",
      "Victor", "Vincent", "William", "Xavier", "Yves", "Zacharie", "Édouard", "Émile", "Éric", "Étienne",
    ],
    female: [
      "Adrienne", "Adèle", "Adélaïde", "Agathe", "Agnès", "Aimée", "Alex", "Alexandria", "Alexandrie", "Alice",
      "Alix", "Amélie", "Anastasie", "Anaïs", "Andrée", "Anne", "Anouk", "Antoinette", "Arnaude", "Astrid",
      "Audrey", "Aurore", "Aurélie", "Bernadette", "Brigitte", "Camille", "Capucine", "Caroline", "Catherine",
      "Chantal", "Charlotte", "Christelle", "Christiane", "Christine", "Claire", "Claude", "Claudine",
      "Clémence", "Colette", "Constance", "Corinne", "Cécile", "Célina", "Céline", "Danielle", "Denise",
      "Diane", "Dominique", "Dorothée", "Emmanuelle", "Françoise", "Frédérique", "Gabrielle", "Geneviève",
      "Henriette", "Hortense", "Hélène", "Inès", "Isabelle", "Jacqueline", "Jeanne", "Jeannine", "Josette",
      "Joséphine", "Julie", "Juliette", "Laetitia", "Laure", "Laurence", "Lorraine", "Louise", "Luce", "Lucie",
      "Lucy", "Madeleine", "Maggie", "Manon", "Marcelle", "Margaret", "Margaud", "Margaux", "Margot",
      "Marguerite", "Marianne", "Marie", "Marine", "Marthe", "Martine", "Maryse", "Mathilde", "Michelle",
      "Michèle", "Monique", "Nath", "Nathalie", "Nicole", "Noémi", "Océane", "Odette", "Olivie", "Patricia",
      "Paulette", "Pauline", "Philippine", "Pénélope", "Renée", "Sabine", "Simone", "Sophie", "Stéphanie",
      "Susan", "Susanne", "Suzanne", "Sylvie", "Thérèse", "Valentine", "Valérie", "Victoire", "Virginie",
      "Véronique", "Zoé", "Édith", "Élisabeth", "Élise", "Élodie", "Éléonore", "Émilie",
    ],
    surname: [
      "Allain", "Alves", "Andre", "Aubert", "Aubry", "Bailly", "Barbe", "Barbier", "Baron", "Barthelemy",
      "Baudry", "Berger", "Bernard", "Bertin", "Bertrand", "Blanchet", "Blin", "Bonneau", "Bouchet", "Boulay",
      "Bourdon", "Bourgeois", "Bousquet", "Boutin", "Boyer", "Briand", "Bruneau", "Brunet", "Buisson",
      "Carlier", "Carre", "Charles", "Clément", "Cohen", "Collet", "Collin", "Costa", "Coste", "Coulon",
      "Courtois", "Da Costa", "Da Silva", "Daniel", "De Sousa", "Delmas", "Denis", "Deschamps", "Devaux",
      "Diallo", "Dias", "Dijoux", "Dos Santos", "Duhamel", "Dumas", "Dupré", "Durand", "Fabre", "Faivre",
      "Faure", "Fernandes", "Ferrand", "Fischer", "François", "Gallet", "Garcia", "Garnier", "Gautier",
      "Germain", "Gilbert", "Gilles", "Girard", "Giraud", "Gomez", "Goncalves", "Gonzalez", "Gosselin",
      "Guibert", "Guichard", "Guilbert", "Guillet", "Guillon", "Guillot", "Guérin", "Hebert", "Henry",
      "Hernandez", "Hervé", "Hoarau", "Hoareau", "Humbert", "Imbert", "Jacob", "Jacquot", "Joly", "Joseph",
      "Jourdan", "Lacroix", "Lamy", "Launay", "Le Roux", "Lebon", "Lebrun", "Leclercq", "Lecomte", "Ledoux",
      "Leduc", "Lefort", "Legros", "Lejeune", "Lemaire", "Lenoir", "Leroux", "Leroy", "Letellier", "Loiseau",
      "Lopes", "Louis", "Léger", "Marchal", "Marchand", "Marion", "Martel", "Martin", "Martinez", "Martins",
      "Mathieu", "Maury", "Merle", "Meyer", "Millet", "Monnier", "Moreau", "Moreno", "Morvan", "Moulin",
      "Navarro", "Nguyen", "Normand", "Olivier", "Pages", "Paris", "Pelletier", "Perez", "Perrier", "Perrin",
      "Petit", "Philippe", "Pichon", "Pinto", "Poirier", "Pons", "Pottier", "Pruvost", "Prévost", "Raymond",
      "Raynaud", "Rey", "Reynaud", "Ribeiro", "Rivière", "Robert", "Robin", "Roche", "Roussel", "Samson",
      "Sanchez", "Sauvage", "Schmitt", "Schneider", "Simon", "Tanguy", "Thibault", "Torres", "Traore",
      "Turpin", "Valette", "Vallet", "Vasseur", "Voisin", "Weber",
    ],
  },

  // Common regions / communities: Georgia in the South Caucasus.
  // Source: Faker 40.1.2 person provider(s): ka_GE; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "georgian": {
    label: "Georgian",
    surnameFirst: false,
    male: [
      "Aleks", "Aleksandre", "Amiran", "Anzor", "Archil", "Armen", "Aslan", "Avtandil", "Badri", "Beka",
      "Besarion", "Bidzina", "Bondo", "Boris", "Dato", "Davit", "Demur", "Eduard", "Elguja", "Emzar", "Gela",
      "Genadi", "Gia", "Giga", "Gigla", "Giorgi", "Givi", "Gocha", "Goderdzi", "Goga", "Gogi", "Grigol",
      "Guram", "Iago", "Ilia", "Ioseb", "Iuri", "Ivane", "Jaba", "Jemal", "Joni", "Jumber", "Khvicha", "Lasha",
      "Levan", "Malkhaz", "Merab", "Mikheil", "Mindia", "Mirian", "Murman", "Murtaz", "Nodar", "Nugzar",
      "Omar", "Otar", "Ramaz", "Revaz", "Rezo", "Roin", "Roland", "Roman", "Sergo", "Shakro", "Shalva",
      "Shota", "Simon", "Soso", "Tamaz", "Teimuraz", "Temur", "Tengiz", "Ucha", "Ushangi", "Valeri",
      "Valerian", "Vano", "Vasil", "Vazha", "Vepkhvia", "Vladimer", "Zakaria", "Zaur", "Zaza", "Zurab",
      "Zviad",
    ],
    female: [
      "Aida", "Ala", "Ana", "Ani", "Anna", "Anzhela", "Asmat", "Aza", "Bela", "Dali", "Darejan", "Diana",
      "Dodo", "Elena", "Elene", "Eliso", "Eliza", "Elmira", "Elza", "Ema", "Eter", "Evgenia", "Galina",
      "Giuli", "Guguli", "Gulnara", "Gvantsa", "Ia", "Iamze", "Ineza", "Inga", "Irina", "Irine", "Irma", "Iza",
      "Izolda", "Ketevan", "Ketino", "Keto", "Khatuna", "Lali", "Lamara", "Lamzira", "Lana", "Larisa", "Leila",
      "Lela", "Lena", "Lia", "Liana", "Lida", "Lili", "Liza", "Luba", "Ludmila", "Luiza", "Madona", "Magda",
      "Maia", "Manana", "Mari", "Maria", "Mariam", "Marina", "Marine", "Maro", "Medea", "Megi", "Meri",
      "Miranda", "Mtvarisa", "Mzia", "Nadejda", "Nadia", "Naira", "Nana", "Nani", "Nanuli", "Nargiza",
      "Natela", "Natia", "Nazi", "Nazibrola", "Neli", "Nineli", "Nino", "Nona", "Nora", "Nunu", "Nutsa",
      "Olgha", "Olia", "Pikria", "Rima", "Roza", "Rusudan", "Salome", "Shorena", "Sonia", "Sopia", "Sopio",
      "Susana", "Tamar", "Tamara", "Tamari", "Tamila", "Tamta", "Tamuna", "Tatia", "Tea", "Teona", "Tina",
      "Tinatin", "Tsiala", "Tsira", "Tsisana", "Tsitsino", "Tsiuri", "Vardo", "Venera", "Vera", "Zaira",
      "Zhana", "Zhenia", "Zhuzhuna", "Zina", "Zoia",
    ],
    surname: [
      "Abashidze", "Abdulaevi", "Abesadze", "Adamia", "Adeishvili", "Akhalaia", "Akhobadze", "Alania",
      "Alieva", "Andghuladze", "Arabidze", "Arabuli", "Archvadze", "Asatiani", "Baliashvili", "Baramidze",
      "Basiladze", "Basilashvili", "Begiashvili", "Bekauri", "Bendeliani", "Benidze", "Beradze",
      "Berdzenishvili", "Beridze", "Berishvili", "Beruashvili", "Berulava", "Bezhanidze", "Bolkvadze",
      "Bregvadze", "Chachua", "Chaduneli", "Chapidze", "Chikhladze", "Chikovani", "Chinchaladze", "Chkhaidze",
      "Chkheidze", "Chokheli", "Chubinidze", "Dalakishvili", "Danelia", "Devadze", "Devidze", "Dumbadze",
      "Dvali", "Dvalishvili", "Dzneladze", "Enukidze", "Gabedava", "Gabelia", "Gabunia", "Gagnidze", "Gagua",
      "Gajieva", "Gajievi", "Gaprindashvili", "Gharibashvili", "Ghonghadze", "Gigauri", "Giorgobiani",
      "Gogaladze", "Gogiashvili", "Gogichashvili", "Gogidze", "Gogishvili", "Gogokhia", "Gogoladze",
      "Gogsadze", "Goguadze", "Gorgodze", "Gotsiridze", "Grigoriani", "Gulua", "Gureshidze", "Gurgenidze",
      "Guruli", "Gvasalia", "Gvelesiani", "Iashvili", "Imnadze", "Iobidze", "Jaiani", "Janashia",
      "Javakhishvili", "Jibladze", "Jokhadze", "Kantaria", "Karchava", "Kartvelishvili", "Kavtaradze",
      "Kevkhishvili", "Kharaishvili", "Kharchilava", "Kharshiladze", "Khimshiashvili", "Khmaladze", "Khorava",
      "Khozrevanidze", "Khurtsilava", "Khvedelidze", "Kurdadze", "Labadze", "Lagvilava", "Lezhava",
      "Lobjanidze", "Lobzhanidze", "Loladze", "Lomadze", "Lomidze", "Lomsadze", "Lomtadze", "Lursmanashvili",
      "Makharadze", "Makharashvili", "Mamaladze", "Mamuladze", "Managadze", "Margvelashvili", "Matiashvili",
      "Mazmishvili", "Meladze", "Melikishvili", "Merebashvili", "Meskhi", "Mgeladze", "Mikaberidze",
      "Miminoshvili", "Mindiashvili", "Modebadze", "Mosiashvili", "Mumladze", "Mzhavanadze", "Narimanidze",
      "Natsvlishvili", "Nemsadze", "Nizharadze", "Nozadze", "Nutsubidze", "Okruashvili", "Otarashvili",
      "Pantsulaia", "Partsvania", "Peikrishvili", "Peradze", "Pitskhelauri", "Pkhaladze", "Razmadze",
      "Revazishvili", "Robakidze", "Rogava", "Rukhadze", "Sajaia", "Samushia", "Sarkisiani", "Shamatava",
      "Shelia", "Shubitidze", "Shvelidze", "Sopromadze", "Surmanidze", "Tabagari", "Tedoradze", "Tolordava",
      "Topuria", "Tsartsidze", "Tsertsvadze", "Tsintsadze", "Tsomaia", "Tsutskiridze", "Turmanidze", "Valieva",
      "Vasadze", "Zarkua", "Zedginidze", "Zhorzholiani", "Zhvania", "Zoidze", "Zurabashvili",
    ],
  },

  // Common regions / communities: Germany, Austria, German-speaking Switzerland and Liechtenstein.
  // Source: Faker 40.1.2 person provider(s): de_DE, de_AT, de_CH; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "germanic": {
    label: "German-speaking",
    surnameFirst: false,
    male: [
      "Adriano", "Ahmed", "Aldin", "Alexander", "Amar", "Anatolij", "Andrei", "Andrey", "Anto", "Armend",
      "Arnd", "Artur", "Bartholomäus", "Beda", "Bela", "Benno", "Berend", "Bertold", "Besart", "Biagio",
      "Bilal", "Blerim", "Bogdan", "Burkhardt", "Carmine", "Cedric", "Colin", "Cristian", "Cyril", "Dagobert",
      "Damien", "Dennis", "Devin", "Diedrich", "Dimitrios", "Dittmar", "Dominik", "Eggert", "Ehrenfried",
      "Emin", "Emre", "Enis", "Enrique", "Erdal", "Erhardt", "Ernst-August", "Etienne", "Fedor", "Ferenc",
      "Flavio", "Franz-Xaver", "Friedbert", "Friedemann", "Friedo", "Georgios", "Gianfranco", "Gino",
      "Giuseppe", "Gotthard", "Gottlieb", "Gunther", "Hakan", "Hamza", "Hans Georg", "Hans-Adolf",
      "Hans-Bernd", "Hans-Dietrich", "Hans-Georg", "Hans-Herbert", "Hans-Hinrich", "Hansjürgen", "Haris",
      "Hartmuth", "Heinrich", "Heinz-Günther", "Heinz-Walter", "Henning", "Hilmar", "Horst", "Horst-Günter",
      "Hubert", "Hussein", "Ignatz", "Irfan", "Ismail", "István", "Ivano", "Jaime", "Jamie", "Jasper",
      "Jayden", "Jean-Pierre", "Jiri", "Joaquim", "Jon", "Jonah", "Jonathan", "Julio", "Jurij",
      "Karl-Friedrich", "Karl-Heinrich", "Karl-Josef", "Karl-Jürgen", "Karl-Otto", "Karl-Werner", "Kazim",
      "Klaus Peter", "Klaus-D.", "Knut", "Kristian", "Kuno", "Laszlo", "Lazar", "Leonid", "Leopold", "Lionel",
      "Lorik", "Loïc", "Ludger", "Luigi", "Lukas", "Mahmut", "Marcel", "Marco", "Marek", "Marius", "Markus",
      "Marten", "Massimo", "Matej", "Matheo", "Mathias", "Mentor", "Michel", "Mirko", "Murat", "Nael",
      "Nathanael", "Nenad", "Nevio", "Nikola", "Omar", "Otmar", "Pascal", "Patrice", "Paulo", "Petar",
      "Philippe", "Raik", "Ramon", "Reinhold", "Robin", "Rolf-Peter", "Rosario", "Serkan", "Siegbert", "Simon",
      "Simone", "Siro", "Stéphane", "Sven", "Swen", "Sérgio", "Tenzin", "Thiago", "Thorben", "Tilman", "Toni",
      "Tony", "Uli", "Urban", "Uwe", "Vlado", "Wilhelm", "William", "Wolf-Rüdiger", "Xavier", "Yanik", "Zenon",
      "Zlatko",
    ],
    female: [
      "Adelheid", "Adeline", "Ajla", "Albulena", "Alice", "Alwine", "Amalie", "Anabella", "Anastasia",
      "Angela", "Anina", "Ann", "Annabell", "Annalisa", "Anne-Laure", "Annelene", "Anneliese", "Annemarie",
      "Annemie", "Annett", "Annick", "Antje", "Antoinette", "Antonella", "Apollonia", "Ariane", "Arlette",
      "Astrid", "Ayten", "Berra", "Blanka", "Brigitta", "Brita", "Béatrice", "Charline", "Christelle",
      "Christin", "Cindy", "Constance", "Cora", "Cynthia", "Célia", "Dilara", "Doris", "Dorota", "Drita",
      "Edeltrud", "Editha", "Eleni", "Elina", "Elisabeth", "Elisabetta", "Elke", "Erica", "Erika", "Erina",
      "Evi", "Fatmire", "Flurina", "Francine", "Friedhilde", "Gabriele", "Gemma", "Geraldine", "Gerhild",
      "Germaine", "Gertrude", "Giesela", "Gitta", "Grace", "Greta", "Gunda", "Gundi", "Hannah", "Hanny",
      "Heide-Marie", "Heidemarie", "Helma", "Henni", "Herlinde", "Herma", "Hilda", "Hildburg", "Hilma",
      "Hubertine", "Hülya", "Ilka", "Imelda", "Ingeborg", "Ingetraud", "Ingrid", "Ingried", "Irene", "Irina",
      "Irma", "Jaqueline", "Jara", "Jasmin", "Jessika", "Johanne", "Josefina", "Josephine", "Josiane",
      "Juliette", "Karoline", "Katarina", "Katarzyna", "Kati", "Katy", "Klothilde", "Kordula", "Laura",
      "Leokadia", "Leonore", "Lidija", "Lieschen", "Lilo", "Lisa", "Lisette", "Liv", "Lotta", "Louise",
      "Luitgard", "Luna", "Magarete", "Magret", "Margarida", "Margita", "Maria", "Marie", "Marie-Jeanne",
      "Mariechen", "Mariella", "Mariola", "Marita", "Martina", "Maryse", "Mila", "Mina", "Miranda", "Mirela",
      "Mirella", "Myrta", "Nikolina", "Nisa", "Nora", "Nuray", "Olga", "Oxana", "Polina", "Rayana", "Raymonde",
      "Renata", "Roberta", "Romaine", "Romina", "Rosmarie", "Sabine", "Sanela", "Sibel", "Silva", "Simona",
      "Sofie", "Stilla", "Susi", "Suzana", "Svetlana", "Sónia", "Theodora", "Trudel", "Tuana", "Tânia",
      "Ulrike", "Valeri", "Verena", "Vittoria", "Walli", "Wiltrud", "Yasmin", "Ylenia",
    ],
    surname: [
      "Aigner", "Albers", "Altmann", "Bartl", "Baumann", "Beck", "Beckmann", "Benthin", "Betschart",
      "Biedermann", "Bien", "Binner", "Bischof", "Bittner", "Bosshard", "Boucsein", "Brandl", "Bucher",
      "Buchholz", "Buchinger", "Bähr", "Davids", "Dippel", "Dörschner", "Eberharter", "Ebert", "Eimer",
      "Enzinger", "Erhart", "Ernst", "Fabian", "Falkner", "Fiebig", "Flantz", "Flückiger", "Forstner", "Frank",
      "Frei", "Freudenthaler", "Frey", "Friedli", "Frühwirth", "Fuchs", "Gahleitner", "Gasser", "Gerber",
      "Gertz", "Gfeller", "Grein Groth", "Groß", "Grüner", "Grünwald", "Gumprich", "Gut", "Gutmann", "Haider",
      "Haidinger", "Hamann", "Hauer", "Heigl", "Heinz", "Herrmann", "Hofbauer", "Hofmann", "Holt", "Huber",
      "Hunziker", "Hutterer", "Hämmerle", "Häusler", "Jacob", "Jost", "Juncken", "Kaltenegger", "Karl",
      "Kellner", "Kensy", "Kirchmair", "Klement", "Klemt", "Knecht", "Kolm", "Kraus", "Kriegl", "Kurzmann",
      "Käfer", "Kälin", "Kölbl", "Langer", "Lanz", "Lichtenegger", "Liebelt", "Loos", "Lorch", "Maierhofer",
      "Mangold", "Mark", "Metz", "Mies", "Mitschke", "Mitteregger", "Mosemann", "Müllner", "Niemeier",
      "Oberleitner", "Obermüller", "Ofner", "Ortner", "Otto", "Parzer", "Paul", "Perner", "Petz", "Pfeffer",
      "Pfleger", "Plank", "Plath", "Pohl", "Pointner", "Polzer", "Portmann", "Pröll", "Rabitsch", "Radisch",
      "Reichl", "Reinhardt", "Riener", "Rogner", "Röhrdanz", "Sailer", "Sammer", "Schaller", "Scheer",
      "Scheiber", "Scherrer", "Schimpl", "Schmid", "Schmied", "Schmiedecke", "Schröder", "Schuller",
      "Schweiger", "Schweizer", "Schön", "Schütz", "Seebacher", "Seidel", "Sigl", "Spiegl", "Staub",
      "Staudinger", "Steckel", "Steinböck", "Stelzer", "Stelzl", "Streicher", "Strobl", "Strohmaier",
      "Strohmayer", "Stutz", "Stöckl", "Säuberlich", "Teufl", "Toth", "Trattner", "Trummer", "Ulrich", "Veit",
      "Vogler", "Weidinger", "Wernecke", "Wieloch", "Wiesner", "Wild", "Wilms", "Winkler", "Wirth", "Wulff",
      "Zauner", "Zenz",
    ],
  },

  // Common regions / communities: Late antique and early medieval Gothic-speaking peoples and other Germanic groups across Europe.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions.
  "gothic": {
    label: "Gothic / early Germanic revival",
    surnameFirst: false,
    male: [
      "Alaric", "Alaricus", "Amalric", "Athalaric", "Athanaric", "Ermanaric", "Euric", "Fritigern", "Geiseric",
      "Gundahar", "Hermanaric", "Hildebad", "Ildibad", "Liuva", "Odoacer", "Reccared", "Ricimer", "Sigeric",
      "Sisebut", "Theodahad", "Theodoric", "Totila", "Tribigild", "Wamba", "Witiges",
    ],
    female: [
      "Amalasuntha", "Amalaberga", "Audofleda", "Brunhilda", "Clotilda", "Galswintha", "Goiswintha", "Ingund",
      "Matasuntha", "Radegund", "Rosamund", "Sunnigilda", "Theodegotha", "Theodelinda", "Wisigard",
      "Fredegund",
    ],
    surname: [
      "Alaric", "Amalric", "Athanaric", "Ermanaric", "Euric", "Fritigern", "Geiseric", "Gundahar", "Liuva",
      "Reccared", "Ricimer", "Sisebut", "Theodoric", "Totila", "Wamba", "Witiges",
    ],
  },

  // Common regions / communities: Greece, Cyprus and Greek diaspora communities.
  // Source: Faker 40.1.2 person provider(s): el_GR; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "greek": {
    label: "Greek / Hellenic",
    surnameFirst: false,
    male: [
      "Abraám", "Achilléas", "Adamántios", "Adám", "Agapētós", "Agathángelos", "Agathónikos", "Agēsílaos",
      "Akribós", "Akrítas", "Alkibiádēs", "Aléxios", "Anastásios", "Andréas", "Angelḗs", "Anthoúlēs",
      "Antígonos", "Antṓnios", "Anárgyros", "Aphéntēs", "Apóllōn", "Apóstolos", "Archimḗdēs", "Archélaos",
      "Argýrios", "Aristophánēs", "Aristotélēs", "Aristóboulos", "Artémios", "Artémēs", "Arístarchos",
      "Asēmákēs", "Athēnódōros", "Balántēs", "Balérios", "Barsámos", "Bartholomaíos", "Basíleios", "Beniamín",
      "Bladímēros", "Blásēs", "Brasídas", "Býrōn", "Charílaos", "Charítos", "Christián", "Christóphoros",
      "Cháris", "Daniḗl", "Diamantḗs", "Drákōn", "Díkaios", "Dēmosthénēs", "Dēmókritos", "Dōrótheos",
      "Emmanouḗl", "Epameinṓndas", "Ephraím", "Ermḗs", "Erōtókritos", "Eudóxios", "Euménios", "Euthýmios",
      "Eutýchios", "Gabriḗl", "Galátios", "Garýphallos", "Geṓrgios", "Giánnēs", "Giṓrgos", "Ierṓnymos",
      "Ioulianós", "Ioúlios", "Iákōbos", "Iásonas", "Iōsḗph", "Kallínikos", "Kleóboulos", "Kleópas", "Kosmás",
      "Kímōn", "Kṓstas", "Laokrátēs", "Lemonḗs", "Leonárdos", "Logothétēs", "Loukianós", "Loukás", "Lykoúrgos",
      "Lámpros", "Lázaros", "Léandros", "Léōn", "Lýsandros", "Magdalēnós", "Makários", "Martínos", "Marínos",
      "Matthaíos", "Mauroeidḗs", "Melétios", "Mikés", "Mínōas", "Nathanaḗl", "Nektários", "Neoklḗs",
      "Nikódēmos", "Nikólaos", "Nikēphóros", "Néarchos", "Níkos", "Odysseús", "Orphéas", "Oréstēs", "Panagḗs",
      "Pantazḗs", "Paraskeuás", "Paschálēs", "Pausanías", "Paúlos", "Phanoúrios", "Phaídōn", "Philḗmōn",
      "Phloriánt", "Phrankískos", "Phōkás", "Phṓtios", "Ploútarchos", "Plátōn", "Polykrátēs", "Polyzṓēs",
      "Polýbios", "Polýdōros", "Prokópios", "Promēthéas", "Pythagóras", "Páris", "Pátroklos", "Pýrros",
      "Rachḗl", "Rodóphlos", "Rízos", "Rḗgas", "Samouḗl", "Serapheím", "Solomṓn", "Sophoklḗs", "Stamátēs",
      "Staúros", "Stéllios", "Stérgios", "Symeṓn", "Sólōn", "Sōtḗrios", "Taxiárchēs", "Themistoklḗs",
      "Theodósios", "Theológos", "Theophýlaktos", "Theódōros", "Theóphilos", "Thoukydídēs", "Thémēs",
      "Thēseús", "Thōmás", "Timoléōn", "Tímōn", "Xanthós", "Yákinthos", "Zacharías", "Zapheírēs", "Ángelos",
      "Ánthimos", "Áristos", "Éktoras", "Éxarchos", "Íkaros", "Íōn", "Óthōn", "Ēródotos",
    ],
    female: [
      "Achilleía", "Agápē", "Akribḗ", "Alexía", "Amalía", "Amphithéa", "Anastasía", "Anatolḗ", "Andrianḗ",
      "Andromáchē", "Anníka", "Anthḗ", "Antigónē", "Anárgyrē", "Aphéntra", "Apostolía", "Argyrṓ", "Ariádnē",
      "Arétha", "Aspasía", "Asēmoúla", "Augḗ", "Balántō", "Barbára", "Basileía", "Basilikḗ", "Beatríkē",
      "Berónika", "Bioléta", "Birginía", "Blasía", "Chlóē", "Christiána", "Christodoúla", "Dabidoúla",
      "Damaskēnḗ", "Dialektḗ", "Diamántō", "Didṓ", "Drosiá", "Dáphnē", "Déspoina", "Dḗmētra", "Eirḗnē",
      "Eleuthería", "Elisábet", "Elpída", "Eléssa", "Epistḗmē", "Eratṓ", "Eriphýlē", "Ermiónē", "Erōphílē",
      "Euangelía", "Euanthía", "Eudokía", "Eurydíkē", "Eusebía", "Eustathía", "Eustratía", "Euthalía",
      "Eutérpē", "Eúa", "Gabriélla", "Gerakína", "Gerasimoúla", "Gesthēmanḗ", "Geōrgía", "Giolánta",
      "Iakōbína", "Ignatía", "Inṓ", "Iokástē", "Iordanía", "Ioulianḗ", "Iphigéneia", "Isidṓra", "Iōsēphína",
      "Kalliópē", "Kalomoíra", "Kalḗ", "Kassándra", "Kerasiá", "Klaírē", "Kleoníkē", "Kleopátra",
      "Klytaimnḗstra", "Komnēnḗ", "Koralía", "Kornēlía", "Kriniṓ", "Kyparissía", "Kyprianḗ", "Kyriakḗ",
      "Kōnstantína", "Kōstoúla", "Lamprinḗ", "Laskarína", "Laurentía", "Leōnidiá", "Lētṓ", "Lḗda",
      "Malamaténia", "Malamátē", "Mantṓ", "Mariánthē", "Matthíldē", "Michaéla", "Myrtṓ", "Móscha", "Nephélē",
      "Neratziá", "Neókleia", "Nikētía", "Ntaniéla", "Níkē", "Ouranía", "Pagṓna", "Panagiṓta", "Pantoúla",
      "Patapía", "Pelagía", "Persephónē", "Phaídra", "Phereníkē", "Philarétē", "Philippía", "Philiṓ",
      "Philomḗla", "Phlōrentía", "Phlōrína", "Pierrína", "Polýmnia", "Pothētḗ", "Poulchería", "Prodromía",
      "Rallía", "Rebékka", "Rodamánthē", "Rodiá", "Rodánthē", "Roúsa", "Róza", "Rēgoúla", "Sabboúla", "Sapphṓ",
      "Sebastianḗ", "Sebastḗ", "Smarágda", "Spártē", "Stephanía", "Stergiannṓ", "Stylianḗ", "Symeṓnē",
      "Syméla", "Sōzoúsa", "Tatiána", "Terpsichórē", "Theodoúlē", "Theodótē", "Theología", "Theophýlaktē",
      "Theókleia", "Thēresía", "Triseúgenē", "Tsampíka", "Ybónnē", "Zacharoúla", "Zacharénia", "Zampía",
      "Zēnaïs", "Zēnobía", "Zēsoúla", "Ánna", "Ártemis", "Éllē", "Ēliána", "Ērákleia", "Ḗlia", "Ḗra",
    ],
    surname: [
      "Aetópoulos", "Akalídēs", "Ananiádou", "Ankyrópoulos", "Aphroudákēs", "Apostolákē", "Arampatzḗs",
      "Argyropoúlou", "Asēmópoulos", "Babásē", "Bakalḗs", "Bakouphtsḗ", "Balabánēs", "Barthalítē", "Bazoúra",
      "Baïtsópoulos", "Baḯou", "Bildós", "Boultsídou", "Bradḗ", "Braká", "Chamalídou", "Christáras",
      "Chrysanthakopoúlou", "Chētós", "Doulámē", "Drakópoulos", "Dínkas", "Gabridákēs", "Galatoúlas", "Galánē",
      "Gerokṓsta", "Geōrgoulákē", "Giakamózē", "Giannakítsas", "Giannoúkos", "Giannés", "Giapatzḗs", "Giṓtēs",
      "Gourgoulḗs", "Iakōbákēs", "Isárēs", "Kakabós", "Kalamáras", "Kaldḗ", "Kanellopoúlou", "Kanellópoulos",
      "Kanellḗ", "Kanelḗ", "Kapantaïdákē", "Kaphantárēs", "Kaphírēs", "Kapourniṓtē", "Karakáxēs", "Karamános",
      "Karánēs", "Kassōtákē", "Katsillḗ", "Katákēs", "Kelaïdṓnēs", "Kellárēs", "Kerasobítēs", "Kitinós",
      "Kleinákē", "Kondylídēs", "Kordatzḗs", "Kormpópoulos", "Kotsiná", "Koubás", "Koumiṓtēs", "Kourákos",
      "Kouteliérēs", "Koutentákēs", "Koutsobídou", "Koutsogiánnópoulos", "Koutsogiánnēs", "Koutsoulḗs",
      "Koútrēs", "Kriálēs", "Kyriannákē", "Kyrítsē", "Kítsou", "Kóllia", "Kōstopoúlou", "Kōstákēs", "Lalaoúnē",
      "Langoúsēs", "Litínas", "Liólios", "Lymaxḗ", "Lynkoúras", "Magoúla", "Manelídēs", "Mantá", "Manōléas",
      "Markantōnákē", "Markópoulos", "Mauroeidákos", "Metaxás", "Mpatsákē", "Mpermpatiṓtēs", "Mpesýrē",
      "Mpliatsíou", "Mános", "Mástoras", "Míchou", "Míschos", "Mētrópoulos", "Mōrós", "Naoúm", "Nasíkas",
      "Nikoloudákē", "Nitsotólēs", "Nkóba", "Ntóba", "Nástatos", "Palaiológos", "Papageōrgíou", "Papakṓsta",
      "Papathanasíou", "Papathōmá", "Papoudḗs", "Paraskeuópoulos", "Perákēs", "Pharmákē", "Phidánē",
      "Philippátos", "Philippópoulos", "Phourkiṓtē", "Phrankoudákē", "Polychronópoulos", "Polyzōákēs",
      "Pouliézos", "Proúba", "Péppas", "Pétsas", "Pétsē", "Píssios", "Rautopoúlou", "Rógarēs", "Rókas",
      "Sakellaríou", "Sapríkē", "Skaphtoúrou", "Skotádē", "Spanídou", "Stamélos", "Stophoriádēs", "Stógios",
      "Syrgḗs", "Syrmoú", "Sáouer", "Sýkas", "Sōtērálēs", "Tachmazídēs", "Tourná", "Triantaphýllou",
      "Triphtanídou", "Tríka", "Tsamopoúlou", "Tsamtsoúrē", "Tsiáras", "Tsiōlx", "Tsákē", "Tsétou", "Tsótras",
      "Tsṓnēs", "Tzióba", "Tzḗkas", "Tómprē", "Xanthákēs", "Xénou", "Xērogiánnēs", "Xērotýrē", "Xērós",
      "Zouloúmēs", "Zēdianákēs", "Zēmatíkas", "Zṓnios", "Zṓē",
    ],
  },

  // Common regions / communities: Paraguay, northeastern Argentina, southern Brazil and Bolivia; Guaraní-speaking communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern Paraguayan civil surnames paired with mixed Spanish and Indigenous revival names; not all names are exclusive to Guaraní, and some are Tupi-derived.
  "guarani": {
    label: "Guaraní / Paraguayan",
    surnameFirst: false,
    male: [
      "Arami", "Arapy", "Ava", "Tupã", "Karai", "Amandáu", "Arandu", "Avaré", "Guaraci", "Juraci", "Ubiratã",
      "Cauã", "Juan", "José", "Pedro", "Luis", "Miguel", "Antonio", "Mario", "Ramón",
    ],
    female: [
      "Arami", "Arasy", "Araceli", "Jasy", "Jaci", "Iracema", "Iara", "Yara", "Poty", "Panambi", "Yvoty",
      "Yvone", "Guaraci", "María", "Ana", "Juana", "Rosa", "Marta", "Elena", "Carmen",
    ],
    surname: [
      "Achucarro", "Acosta", "Benítez", "Cabañas", "Caballero", "Cáceres", "Duarte", "Fernández", "Gamarra",
      "González", "López", "Martínez", "Medina", "Ortiz", "Ramírez", "Riveros", "Rojas", "Romero", "Sosa",
      "Vera", "Villalba", "Yegros", "Ayala", "Bogado",
    ],
  },

  // Common regions / communities: Gujarat, India, and Gujarati diaspora communities, including East Africa.
  // Source: Faker 40.1.2 person provider(s): gu_IN; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "gujarati": {
    label: "Gujarati",
    surnameFirst: false,
    male: [
      "Abhiṣēka", "Ajaya", "Akṣaya", "Anila", "Arjuna", "Aruṇa", "Aśōka", "Aṅkita", "Bhārata", "Brijēśa",
      "Cirāga", "Cētana", "Darśana", "Dhavala", "Dilīpa", "Dinēśa", "Dīpaka", "Dīpā", "Harīśa", "Harṣa",
      "Harṣala", "Hīrā", "Jagadīśa", "Jaya", "Jayēśa", "Jitēndra", "Kamala", "Karaṇa", "Kiraṇa", "Kiśana",
      "Kr̥ṣṇa", "Kumāra", "Kunāla", "Kājala", "Mahēndra", "Mahēśa", "Manōja", "Mayūra", "Mitula", "Mukēśa",
      "Narēndra", "Nikhila", "Nitina", "Niśānta", "Nīraja", "Nīrava", "Paṅkaja", "Prakāśa", "Pratika",
      "Pravīṇa", "Praṇava", "Pārtha", "Ramēśa", "Ravi", "Rāhula", "Rāja", "Rājēndra", "Rājēśa", "Rākēśa",
      "Rōhita", "Sacina", "Samīra", "Sandipa", "San̄jaya", "San̄jīva", "Sid'dhārtha", "Subhāṣa", "Sunīla",
      "Sūraja", "Tuṣāra", "Vasanta", "Vikrama", "Vipula", "Virāja", "Vivēka", "Viśāla", "Yaśa", "Ānanda",
      "Āśiṣa", "Śēkhara",
    ],
    female: [
      "Avanī", "Aṅkitā", "Hīrā", "Kiraṇa", "Kājala", "Niśā", "Nēhā", "Prācī", "Prīti", "Pūjā", "Racanā",
      "Rādhīkā", "Sōnala", "Tanvī", "Tējala", "Urvī", "Varṣā", "Śrēyā", "Śvētā",
    ],
    surname: [
      "Caudharī", "Gaḍhavī", "Guptā", "Jaina", "Jōṣī", "Kumāra", "Paṭēla", "Śarmā",
    ],
  },

  // Common regions / communities: Northern Nigeria, Niger and other Sahelian communities.
  // Source: Faker 40.1.2 person provider(s): ha_NG; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "hausa": {
    label: "Hausa",
    surnameFirst: false,
    male: [
      "Abdullahi", "Ahmad", "Aliyu", "Bello", "Danjuma", "Habibu", "Haruna", "Ibrahim", "Ismail", "Kabiru",
      "Mahmud", "Musa", "Nasiru", "Sani", "Shamsuddeen", "Shehu", "Tanimu", "Umar", "Usman", "Yusuf",
    ],
    female: [
      "Aisha", "Aminatu", "Asma’u", "Bilkisu", "Fatima", "Gambo", "Habiba", "Hadiza", "Hafsat", "Halima",
      "Hauwa", "Jamila", "Khadija", "Maryam", "Rabi", "Ruqayya", "Safiya", "Sa’adatu", "Sumayya", "Zainab",
    ],
    surname: [
      "Abubakar", "Ali", "Bappa", "Buhari", "Danjuma", "Garba", "Idris", "Isah", "Jibril", "Kabir", "Lawal",
      "Mohammed", "Mustapha", "Sa’idu", "Shehu", "Suleiman", "Tukur", "Yahaya", "Yusuf", "Zubairu",
    ],
  },

  // Common regions / communities: Hawaiian Islands and Native Hawaiian diaspora in the continental United States and elsewhere.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Many Hawaiian personal names are not gender-specific; includes modern civil surnames, not a reconstruction of traditional naming.
  "hawaiian": {
    label: "Native Hawaiian",
    surnameFirst: false,
    male: [
      "Aikāne", "Akamu", "Alika", "Analu", "Ikaika", "Iokepa", "Kahale", "Kahiau", "Kai", "Kainoa", "Kaleo",
      "Kalani", "Kama", "Kanoa", "Kauʻi", "Keahi", "Keanu", "Keoni", "Koa", "Lono", "Makoa", "Makani",
      "Nainoa", "Noa", "ʻŌpūnui",
    ],
    female: [
      "Alana", "Alohilani", "Anela", "Halia", "Hiʻilei", "Hōkū", "Iolana", "Kailani", "Kalani", "Kalei",
      "Kamalani", "Keala", "Kealani", "Keilani", "Kiana", "Lehua", "Leilani", "Lilia", "Lokelani", "Maile",
      "Malia", "Mele", "Moana", "Nani", "Noelani", "Pualani", "Ululani",
    ],
    surname: [
      "Akana", "Akina", "Aki", "Alapai", "Awana", "Hale", "Iona", "Kahele", "Kahale", "Kahanamoku",
      "Kahaunaele", "Kahoano", "Kahumoku", "Kalākaua", "Kalani", "Kalama", "Kamaka", "Kamakau",
      "Kamakawiwoʻole", "Kamealoha", "Kanahele", "Kāne", "Kapule", "Keawe", "Kealoha", "Kekoa", "Keliʻi",
      "Koa", "Lono", "Mahelona", "Nakoa", "Pae", "Pukui", "Wong",
    ],
  },

  // Common regions / communities: Hindi-speaking regions of northern and central India.
  // Source: Faker 40.1.2 person provider(s): hi_IN; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "hindi": {
    label: "Hindi / North Indian",
    surnameFirst: false,
    male: [
      "Abhaya", "Ajita", "Akabara", "Akhila", "Amara", "Amita", "Amr̥ta", "Anila", "Anirud'dha", "Aniśa",
      "Anuja", "Anupama", "Aravinda", "Arjuna", "Aruṇa", "Aruṇā", "Asīma", "Aśōka", "Aṅkura", "Bala",
      "Balarāma", "Bharata", "Bhārata", "Brahmā", "Br̥jēśa", "Candanā", "Candrakānta", "Caṇḍa", "Darśana",
      "Dayārāma", "Dhanañjaya", "Dhavala", "Dilīpa", "Dinēśa", "Dēvadāsa", "Dēvarāja", "Dīpaka", "Gautama",
      "Gaṇēśa", "Gulazāra", "Gōtama", "Hanumān", "Hari", "Harēndra", "Harīśa", "Harśa", "Harśala", "Indra",
      "Indrajita", "Jagadīśa", "Jagajīta", "Jagannātha", "Jauhara", "Jayadēva", "Jayanta", "Jayēndra",
      "Jitēndra", "Jyōtiṣa", "Kailāśa", "Kamala", "Kambōja", "Kapila", "Karṇa", "Kaśōra", "Kiraṇa", "Kr̥ṣṇa",
      "Kumāra", "Kuṇāla", "Kālidāsa", "Kāma", "Lakṣmaṇa", "Lalita", "Lāla", "Lōcana", "Madhukara", "Mahātmā",
      "Mahāvīra", "Manīśa", "Mañjunātha", "Maṇi", "Maṇīndra", "Mukēśa", "Mādhava", "Mānadīpa", "Mōhana",
      "Nanda", "Narēndra", "Nikhila", "Nārāyaṇa", "Nīrava", "Padma", "Pallava", "Prabhu", "Prabhākara",
      "Prabhāta", "Prabōdha", "Pradīpa", "Prakāśa", "Pramōda", "Prasanna", "Prasāda", "Pratāpa", "Praṇava",
      "Praṇaya", "Prēma", "Puruṣōttama", "Pītāmbara", "Raghu", "Rajanīkānta", "Ratana", "Ratnama", "Rañjita",
      "Rāhula", "Rāja", "Rājana", "Rājēndra", "Rājēśa", "Rājīva", "Rākēśa", "Rāmacandra", "Rāmakr̥ṣṇa",
      "Rāvaṇa", "Rōhana", "Sacina", "Sandīpa", "San̄jaya", "San̄jita", "San̄jīva", "Sarala", "Satīśa",
      "Savitr̥", "Sid'dhārtha", "Sikandara", "Subhāṣa", "Sudarśana", "Sudhīra", "Sumana", "Sumantra",
      "Sundara", "Sunīla", "Suraja", "Surēndra", "Surēśa", "Svapnila", "Svarṇa", "Sēṭha", "Sōhēla", "Sūrya",
      "Uttama", "Vasanta", "Vijaya", "Vikrama", "Vimala", "Vinaya", "Vipina", "Vivēka", "Viśāla", "Viṣṇu",
      "Vāsiṣṭha", "Yaśa", "Zasvindēr", "Āditya", "Ākāṅkṣā", "Ānanda", "Īśa", "Ōma", "Śani", "Śantanu", "Śarma",
      "Śaśi", "Śaṅkara", "Śiva", "Śrēṣṭha", "Śrīpati", "Śyāma", "Śyāmala", "Śēkhara", "Śēṣa", "̔inaśā",
      "Ḵẖāna",
    ],
    female: [
      "Abhilāṣā", "Aditī", "Aiśvaryā", "Amalā", "Amitā", "Amr̥tā", "Anilā", "Anujā", "Anuṣkā", "Arcanā",
      "Arundhatī", "Avantī", "Avanī", "Aṅkitā", "Aṇimā", "Bala", "Bharata", "Candanā", "Candrakāntā", "Caṇḍā",
      "Cētanā", "Damayantī", "Darśanā", "Divyā", "Durgā", "Dēvī", "Dīpti", "Dīpālī", "Gauhara", "Gaurī",
      "Gulazāra", "Gītā", "Gōpīnātha", "Ilā", "Indirā", "Indrajita", "Indu", "Jayantī", "Jayā", "Jyōtsanā",
      "Jyōtsnā", "Kailāśa", "Kalpanā", "Kalā", "Kamalā", "Kariśmā", "Kauśalyā", "Kumārī", "Kuntī", "Kālī",
      "Kāntā", "Kāntī", "Kāśī", "Kṣitija", "Lakṣmī", "Latā", "Lāvaṇyā", "Līlā", "Līlāvatī", "Līnā", "Madhu",
      "Madhura", "Manīṣā", "Mañju", "Mañjulā", "Mañjūṣā", "Muktā", "Mādhavī", "Mālatī", "Mālā", "Māyā", "Mīrā",
      "Mōhanā", "Mōhinī", "Nikhilā", "Nitya", "Niśā", "Nēhā", "Padma", "Padminī", "Padmāvatī", "Paravīna",
      "Pratibhā", "Pratimā", "Priyā", "Prēmā", "Puṣpā", "Pārvatī", "Pūrṇimā", "Racanā", "Rajanī", "Rati",
      "Ratna", "Raśmī", "Riyā", "Rukmiṇī", "Rupindra", "Rādhā", "Rājya", "Rānī", "Rēśamī", "Rītikā", "Rōhanā",
      "San̄janā", "Saralā", "Sarasvatī", "Satī", "Sitārā", "Sudarśanā", "Sulabhā", "Sumanā", "Sumatī",
      "Sunītā", "Sunītī", "Suśīlā", "Svarṇa", "Sārikā", "Sāvitrī", "Sīmā", "Sītā", "Sōnala", "Tr̥ṣṇā", "Tārā",
      "Umā", "Uṣā", "Vasantā", "Vidyā", "Vijayā", "Vimalā", "Zasvindēr", "Ābhā", "Ākāṅkṣā", "Ānandā", "Āśā",
      "Ēṣā", "Śakti", "Śakuntalā", "Śarmilā", "Śaśī", "Śivālī", "Śrī", "Śyāmalā", "Śyāmā", "Śāntā", "Śāntī",
      "Śīlā", "Śōbhā", "̔ikaśōrī",
    ],
    surname: [
      "Agaravāla", "Ahalūvāliyā", "Arōrā", "Balāsubramāniyama", "Banarjī", "Bharadvāja", "Bhaṭa",
      "Bhaṭanāgara", "Bhaṭṭācārya", "Buruāha", "Bōsa", "Cakravartī", "Caturvēdī", "Cauhāna", "Cavana",
      "Caṭarjī", "Chētrī", "Cōdharī", "Cōparā", "Duttā", "Dvivēdī", "Dāsa", "Dāsaguptā", "Dēśapāṇḍē", "Ghōṣa",
      "Guhā", "Guptā", "Guruṅga", "Gāvaḍē", "Gōyala", "Hajārikā", "Jaina", "Jayarāmana", "Jhā", "Jhādava",
      "Jēṭalī", "Jōśī", "Kadama", "Kalitā", "Kapūra", "Kaula", "Khatrī", "Khāna", "Kumāra", "Lōbō", "Maharā",
      "Maitī", "Majūmadāra", "Mal'hōtrā", "Maṇḍala", "Mistrī", "Mitrā", "Miśrā", "Muḵẖarjī", "Mālika",
      "Mēhatā", "Mēnana", "Nārāyaṇa", "Nātha", "Nāyara", "Pavāra", "Paṭēla", "Pilla'ī", "Pradhāna", "Prasāda",
      "Pāṇḍēya", "Pāṭila", "Raṅgana", "Raṅgarājana", "Rāva", "Rāya", "Rēḍḍī", "Rōdrigu'ēsa", "Rŏya",
      "Rŏya caudharī", "Sainī", "Saksēnā", "Sarakāra", "Sarīna", "Sinha", "Sinhā", "Subramaṇyama", "Sāhā",
      "Sēna", "Sēnaguptā", "Tamāṅga", "Thāpā", "Tivārī", "Trivēdī", "Tāmbē", "Varmā", "Vēṅkaṭa'ēsana",
      "Yādava", "Ācārya", "Āhūjā", "Śarmā", "Śrīvāstava", "Śuklā", "Śāha", "Ḍī’kōsṭā", "Ḍī’sō'uzā", "Ṭaṇḍana",
    ],
  },

  // Common regions / communities: Hungary and Hungarian communities in Romania, Slovakia, Serbia and Ukraine.
  // Source: Faker 40.1.2 person provider(s): hu_HU; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "hungarian": {
    label: "Hungarian / Magyar",
    surnameFirst: true,
    male: [
      "Adrián", "Albert", "Alex", "Andor", "András", "Antal", "Arnold", "Attila", "Balázs", "Barna",
      "Barnabás", "Bence", "Bendegúz", "Benedek", "Benjámin", "Bertalan", "Botond", "Bálint", "Béla", "Csaba",
      "Csongor", "Dezső", "Dominik", "Dániel", "Dávid", "Dénes", "Elemér", "Emil", "Endre", "Erik", "Ernő",
      "Ervin", "Ferenc", "Gergely", "Gergő", "Gusztáv", "Gyula", "György", "Győző", "Gábor", "Géza", "Henrik",
      "Hunor", "Imre", "István", "Iván", "Jenő", "János", "József", "Kevin", "Kornél", "Kristóf", "Krisztián",
      "Krisztofer", "Kálmán", "Károly", "Lajos", "Levente", "László", "Marcell", "Martin", "Mihály", "Miklós",
      "Milán", "Márk", "Márton", "Mátyás", "Máté", "Noel", "Norbert", "Nándor", "Olivér", "Ottó", "Patrik",
      "Pál", "Péter", "Richárd", "Roland", "Rudolf", "Róbert", "Szabolcs", "Szilveszter", "Szilárd", "Sándor",
      "Tamás", "Tibor", "Tivadar", "Viktor", "Vilmos", "Vince", "Zalán", "Zoltán", "Zsigmond", "Zsolt",
      "Zsombor", "Ábel", "Ádám", "Ákos", "Áron", "Árpád",
    ],
    female: [
      "Adrienn", "Alexandra", "Andrea", "Anett", "Anikó", "Anita", "Anna", "Annamária", "Aranka", "Barbara",
      "Beatrix", "Bernadett", "Bettina", "Beáta", "Bianka", "Boglárka", "Borbála", "Brigitta", "Csilla",
      "Diána", "Dorina", "Dorottya", "Dóra", "Edina", "Edit", "Emese", "Emma", "Enikő", "Erika", "Erzsébet",
      "Eszter", "Etelka", "Fanni", "Gabriella", "Gizella", "Gréta", "Gyöngyi", "Györgyi", "Hajnalka", "Hanna",
      "Henrietta", "Ibolya", "Ildikó", "Ilona", "Irma", "Irén", "Jolán", "Judit", "Julianna", "Jázmin",
      "Júlia", "Katalin", "Kinga", "Kitti", "Klaudia", "Klára", "Krisztina", "Laura", "Lili", "Lilla", "Luca",
      "Magdolna", "Margit", "Mariann", "Marianna", "Melinda", "Mária", "Márta", "Mónika", "Nikolett",
      "Nikoletta", "Noémi", "Nóra", "Orsolya", "Petra", "Piroska", "Rebeka", "Renáta", "Rita", "Rozália",
      "Réka", "Róza", "Rózsa", "Szilvia", "Sára", "Teréz", "Terézia", "Tímea", "Tünde", "Valéria", "Veronika",
      "Viktória", "Virág", "Vivien", "Zita", "Zsanett", "Zsuzsanna", "Zsófia", "Ágnes", "Éva",
    ],
    surname: [
      "Antal", "Bakos", "Balla", "Balog", "Balogh", "Balázs", "Barna", "Barta", "Biró", "Bodnár", "Bogdán",
      "Bognár", "Borbély", "Boros", "Budai", "Bálint", "Csonka", "Deák", "Dudás", "Faragó", "Farkas",
      "Fazekas", "Fehér", "Fekete", "Fodor", "Fábián", "Fülöp", "Gulyás", "Gál", "Gáspár", "Hajdu", "Halász",
      "Hegedüs", "Hegedűs", "Horváth", "Illés", "Jakab", "Juhász", "Jónás", "Katona", "Kelemen", "Kerekes",
      "Király", "Kis", "Kiss", "Kocsis", "Kovács", "Kozma", "Lakatos", "Lengyel", "Lukács", "László", "Magyar",
      "Major", "Mezei", "Molnár", "Márton", "Máté", "Mészáros", "Nagy", "Nemes", "Novák", "Németh", "Oláh",
      "Orbán", "Orosz", "Orsós", "Pap", "Papp", "Pataki", "Pintér", "Pál", "Pásztor", "Péter", "Rácz", "Simon",
      "Sipos", "Somogyi", "Soós", "Szabó", "Szalai", "Szekeres", "Szilágyi", "Székely", "Szücs", "Szőke",
      "Szűcs", "Sándor", "Sárközi", "Takács", "Tamás", "Tóth", "Török", "Varga", "Vass", "Veres", "Vincze",
      "Virág", "Váradi", "Vörös",
    ],
  },

  // Common regions / communities: Southeastern Nigeria and Igbo diaspora.
  // Source: Faker 40.1.2 person provider(s): ig_NG; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "igbo": {
    label: "Igbo",
    surnameFirst: false,
    male: [
      "Chibuzo", "Chigozie", "Chijioke", "Chinedu", "Chukwudi", "Chukwuemeka", "Ebuka", "Ekene", "Emeka",
      "Ifeanyi", "Ifechukwu", "Ikenna", "Kelechi", "Nnamdi", "Nonso", "Obinna", "Okechukwu", "Somtochukwu",
      "Uche", "Uchenna",
    ],
    female: [
      "Adaeze", "Amarachi", "Chiamaka", "Chidimma", "Chinelo", "Chinyere", "Chizoba", "Ifeoma", "Ifunanya",
      "Kosisochukwu", "Ngozi", "Nkiruka", "Nneka", "Obianuju", "Ogechi", "Oluchi", "Onyinye", "Ozioma",
      "Somadina", "Ujunwa",
    ],
    surname: [
      "Anyanwu", "Chukwu", "Eze", "Ezeugo", "Ihejirika", "Iroha", "Iwu", "Madu", "Njoku", "Nwachukwu", "Nwosu",
      "Obi", "Ogbuehi", "Ojukwu", "Okafor", "Okeke", "Okoro", "Onoh", "Onwuka", "Udeh",
    ],
  },

  // Common regions / communities: Indigenous peoples of North, Central and South America; broad mixed legacy pool, not a single tradition.
  // Original category — all original entries retained.
  "indigenous-american": {
    label: "Indigenous American",
    surnameFirst: false,
    male: [
      "Ahanu", "Ahote", "Akecheta", "Aponi", "Bidziil", "Chayton", "Chogan", "Dakota", "Delsin", "Enapay",
      "Enyeto", "Etu", "Goyathlay", "Hakan", "Hania", "Helaku", "Hinto", "Honi", "Hurit", "Isi", "Kangee",
      "Kele", "Kitchi", "Kohana", "Koi", "Kuruk", "Lenno", "Mato", "Mika", "Nantan", "Nashoba", "Nodin",
      "Nokosi", "Onacona", "Pawnee", "Paytah", "Quanah", "Sahale", "Sakima", "Shilah", "Takoda", "Tatanka",
      "Tawa", "Tecumseh", "Tokala", "Tuari", "Wapi", "Wicasa", "Wikasa", "Winona", "Yuma", "Atohi", "Bidaban",
      "Chaske", "Elan", "Honovi", "Kiona", "Misu", "Nayavu", "Peta", "Sani", "Tasunke", "Wapiya", "Yutu",
      "Adsila", "Ahmik", "Anoki", "Chanunpa", "Elsu", "Hotah", "Kai", "Mochni", "Nikan", "Ohanzee", "Pules",
      "Sinte", "Tasunka", "Wamblee", "Yazhi", "Awan", "Chapa", "Dasan", "Elki", "Hiamovi", "Kitchi", "Mahpee",
      "Nodin", "Omusa", "Peta", "Sakari", "Takhi", "Wikvaya", "Yoki", "Adoette", "Catori", "Hesutu", "Mikao",
      "Niyol", "Tayanita",
    ],
    female: [
      "Ahyoka", "Aiyana", "Alawa", "Aponi", "Atotoztli", "Ayita", "Chenoa", "Chidimma", "Citlali", "Dakota",
      "Dyani", "Elu", "Enola", "Halona", "Halyn", "Hania", "Hinto", "Istas", "Kachina", "Kai", "Kiona", "Koko",
      "Leotie", "Maka", "Mika", "Mitena", "Naira", "Nalin", "Nita", "Nova", "Odina", "Peta", "Sakari",
      "Salali", "Sequoia", "Shikoba", "Tadita", "Talulah", "Tallulah", "Tayen", "Tiva", "Winona", "Yoki",
      "Yona", "Adoeette", "Adsila", "Aleshanee", "Anpaytoo", "Bidziil", "Catori", "Chapawee", "Dyami", "Elisi",
      "Honi", "Ite", "Kasa", "Kimi", "Lomasi", "Meli", "Nayeli", "Nizhoni", "Onida", "Pocahontas", "Sani",
      "Sitala", "Takala", "Tayanita", "Wichahpi", "Yoki", "Aponivi", "Chumani", "Hinto", "Kanti", "Muna",
      "Nokomis", "Pavati", "Shania", "Tala", "Wachiwi", "Yepa", "Ahyoka", "Aleshanee", "Aylen", "Cochiti",
      "Honani", "Isi", "Kachada", "Mahkah", "Namid", "Odakota", "Pipaluk", "Sahkyo", "Taini", "Wuti", "Yamka",
      "Zitkala", "Awinita", "Nizhoni",
    ],
    surname: [
      "Begay", "Benally", "Blackhorse", "Bluebird", "Chasinghawk", "Cloud", "Cornstalk", "Dancingbear", "Deer",
      "Eagle", "Feather", "Graywolf", "Hawk", "Ironcloud", "Kickingbird", "Littlebear", "Longwalker",
      "Manyhorses", "Morningstar", "Nighthawk", "Onefeather", "Redbird", "Runningdeer", "Singingbird", "Sky",
      "Spottedhorse", "Standingbear", "Talltree", "Thunderhawk", "Twofeathers", "Walkingstick", "Whitecloud",
      "Whiteriver", "Windwalker", "Yellowhawk", "Youngblood", "Adakai", "Ahoka", "Black Elk", "Bluefeather",
      "Bravewolf", "Clearwater", "Dawnrunner", "Eaglefeather", "Firecloud", "Goldenhawk", "Greenthunder",
      "Highwalker", "Ironhawk", "Littlewolf", "Manydeeds", "Nightwalker", "Paintedhorse", "Quickbear",
      "Redcloud", "Risinghawk", "Runningwolf", "Silentwater", "Snowbird", "Strongbow", "Swiftdeer", "Tallbear",
      "Thundercloud", "Warbonnet", "Whitehawk", "Windriver", "Yellowbird", "Bigcrow", "Darkwater", "Eagleman",
      "Foxwalker", "Grayeyes", "Highhawk", "Littlecrow", "Longfeather", "Manyeagles", "Nightsky", "Redhawk",
      "Rivers", "Singingwind", "Strongrock", "Tallchief", "Threefeathers", "Whitebear", "Wildhorse",
      "Winterhawk", "Blackwater", "Cloudrunner", "Skydeer", "Eagleheart", "Firewalker", "Redstone",
      "Shadowhawk", "Swiftarrow", "Tallwalker", "Whitefeather", "Windhorse", "Yellowstone",
    ],
  },

  // Common regions / communities: Aboriginal Australian communities; broad legacy pool, not a single language or naming system.
  // Original category — all original entries retained.
  "indigenous-australian": {
    label: "Indigenous Australian / Aboriginal",
    surnameFirst: false,
    male: [
      "Alinta", "Arrernte", "Banjo", "Bardo", "Bevan", "Bilin", "Birrani", "Bunjil", "Bundjalung", "Burran",
      "Daku", "Djalu", "Djarra", "Djirra", "Duran", "Gamil", "Garrin", "Goolagong", "Gularabulu",
      "Gumbaynggirr", "Jannali", "Jarli", "Jarrah", "Jirra", "Jindalee", "Jirrah", "Kado", "Kaiya", "Kalina",
      "Karri", "Koa", "Kobi", "Koori", "Kurran", "Lakai", "Lowan", "Mallee", "Mando", "Marrak", "Merrick",
      "Miro", "Murran", "Nandor", "Narrah", "Ngarrindjeri", "Ngarra", "Nulla", "Parntu", "Pinaroo", "Quarran",
      "Raukkan", "Tambo", "Tane", "Tarni", "Tidda", "Tjilpi", "Torra", "Walan", "Wandu", "Waragun", "Warra",
      "Warrin", "Wirra", "Wulfe", "Yamba", "Yarran", "Yidaki", "Yindi", "Yulara", "Yurren", "Baiame",
      "Birrung", "Coorah", "Dakuya", "Gulari", "Jemby", "Kurraka", "Mandawuy", "Nerang", "Palku", "Tarkyn",
      "Uluru", "Warragul", "Yalung", "Bingara", "Coolamon", "Djaran", "Gunya", "Jindabyne", "Kiah", "Mungo",
      "Nulungu", "Tjandamurra", "Warragul", "Yarri", "Brolga", "Kirra", "Marlu",
    ],
    female: [
      "Alinta", "Allira", "Aroha", "Aviaja", "Bindi", "Bina", "Brindabella", "Cooee", "Djarrtjuntjun",
      "Elouera", "Ena", "Gawurra", "Iluka", "Jannali", "Jedda", "Jirra", "Kalina", "Kiah", "Kirra", "Koori",
      "Kylie", "Layla", "Lillardia", "Lowanna", "Mali", "Marli", "Meeka", "Merindah", "Mika", "Mirri",
      "Murron", "Nakita", "Nalani", "Narelle", "Nerida", "Ngarra", "Nyree", "Orana", "Pania", "Quamby",
      "Rosella", "Tarni", "Tawnie", "Tayla", "Tiarne", "Tjala", "Tjumari", "Tori", "Walan", "Warrina",
      "Willara", "Windi", "Wirri", "Wunyara", "Yalna", "Yarli", "Yindi", "Yulara", "Yurali", "Aadya", "Boona",
      "Caringa", "Dulcie", "Eucalya", "Galang", "Jarrah", "Kaiya", "Karinya", "Lutana", "Maree", "Minali",
      "Naraya", "Noonuccal", "Pipalyatjara", "Rona", "Talia", "Ulani", "Wandarra", "Yarrie", "Barkaa",
      "Dharri", "Emama", "Goolara", "Jemima", "Karrie", "Merri", "Nangari", "Parra", "Tjulpu", "Waru", "Yanka",
      "Bilin", "Coorie", "Jalna", "Kurrara", "Mikaela", "Tarnie", "Warrinya",
    ],
    surname: [
      "Ah Chee", "Albert", "Bonner", "Bulong", "Burgoyne", "Butler", "Cook", "Daniels", "Davis", "Dodson",
      "Doolan", "Drummond", "Durrant", "Egan", "Ella", "Franklin", "Goolagong", "Grant", "Hampton", "Hart",
      "Holt", "Hunter", "Jabirr", "Johnson", "Jupurrurla", "Karpany", "Kennedy", "Kngwarreye", "Knuckey",
      "Liddle", "Long", "Mabo", "Maher", "Mandawuy", "Marika", "Miller", "Moffatt", "Mundine", "Namatjira",
      "Nelson", "Noonuccal", "O'Donoghue", "Patten", "Perkins", "Riley", "Roberts", "Robertson", "Roe",
      "Rogers", "Roulth", "Sampson", "Sarra", "Saunders", "Smith", "Stanley", "Sykes", "Talbot", "Taylor",
      "Thomas", "Tilmouth", "Walker", "Walley", "Wandin", "Ward", "Watson", "Williams", "Wilson", "Winmar",
      "Woolla", "Wunungmurra", "Yarran", "Yunupingu", "Bamblett", "Braybrook", "Coffin", "Dhu", "Grogan",
      "Harris", "Jampijinpa", "Kumanjayi", "Langton", "Murray", "Neale", "Pareroultja", "Ramahyuck",
      "Tjakamarra", "West", "Widders", "Wyatt", "Yunkaporta", "Baird", "Clements", "Gibson", "Millerick",
      "Parker", "Ridgeway", "Turner", "Watego", "Wilkes",
    ],
  },

  // Common regions / communities: Northern, western and eastern South Asia: India, Pakistan, Bangladesh, Nepal and Sri Lanka; mixed legacy pool.
  // Original category — all original entries retained.
  "indo-aryan": {
    label: "Indo-Aryan",
    surnameFirst: false,
    male: [
      "Aadesh", "Aadi", "Aditya", "Ajay", "Akash", "Aman", "Amit", "Amol", "Anand", "Aniket", "Arjun", "Arnav",
      "Arun", "Ashok", "Ashwin", "Atul", "Ayush", "Baldev", "Bhavesh", "Chandan", "Chetan", "Darshan",
      "Deepak", "Dev", "Dhanush", "Dilip", "Dinesh", "Farhan", "Gautam", "Girish", "Gopal", "Harish", "Hemant",
      "Hitesh", "Imran", "Irfan", "Ishaan", "Jagdeep", "Jagdish", "Jai", "Kailash", "Karan", "Karthik",
      "Kiran", "Krishna", "Kunal", "Lokesh", "Madhav", "Mahesh", "Manoj", "Manish", "Mayur", "Mihir", "Mohit",
      "Mohan", "Mukesh", "Nakul", "Naveen", "Neeraj", "Nikhil", "Nirav", "Nitin", "Omkar", "Pankaj", "Parth",
      "Pradeep", "Prakash", "Pranav", "Prem", "Rahul", "Raj", "Rajan", "Rajesh", "Rakesh", "Ravi", "Rohan",
      "Rohit", "Sameer", "Sandeep", "Sanjay", "Shahid", "Shankar", "Sharad", "Shiv", "Siddharth", "Sohail",
      "Subhash", "Sudhir", "Sumeet", "Suresh", "Tarun", "Uday", "Umesh", "Varun", "Vasant", "Vijay", "Vikram",
      "Vinay", "Vineet", "Vishal", "Vivek", "Yash", "Yogesh", "Yusuf", "Zubair", "Aarav", "Kabir", "Reyansh",
      "Vihaan", "Armaan", "Devansh", "Lakshay", "Ritvik", "Sai", "Tanish", "Vedant", "Yuvraj", "Zayan",
      "Harsh", "Ishan",
    ],
    female: [
      "Aarti", "Aisha", "Alka", "Amrita", "Ananya", "Anika", "Anjali", "Anusha", "Aparna", "Arpita", "Asha",
      "Bhavna", "Charu", "Deepa", "Deepika", "Devika", "Divya", "Esha", "Farah", "Gauri", "Heena", "Indira",
      "Ira", "Ishita", "Jaya", "Jyoti", "Kajal", "Kalpana", "Karishma", "Kavita", "Kavya", "Kiran", "Komal",
      "Lakshmi", "Lata", "Leela", "Madhuri", "Mala", "Manisha", "Meera", "Mina", "Mira", "Nalini", "Naina",
      "Neha", "Nidhi", "Nikita", "Nisha", "Pallavi", "Parvati", "Pooja", "Pratibha", "Priya", "Radha",
      "Rajani", "Reema", "Rekha", "Renu", "Rina", "Ritika", "Sadia", "Sakshi", "Salma", "Savita", "Shalini",
      "Shanti", "Shazia", "Shreya", "Simran", "Sneha", "Sonal", "Sunita", "Sushma", "Tanvi", "Tara", "Uma",
      "Vaishali", "Vandana", "Varsha", "Vidya", "Yamini", "Yasmin", "Zahra", "Zarina", "Aditi", "Avani",
      "Diya", "Hansika", "Ila", "Janvi", "Juhi", "Khushi", "Lavanya", "Mahi", "Navya", "Padmini", "Roshni",
      "Saanvi", "Trisha", "Urvashi", "Veda", "Yashika", "Zoya", "Amara", "Bhavika", "Chandni", "Damini",
      "Ekta", "Falguni", "Gayatri", "Harini", "Ishani", "Jhanvi", "Kritika", "Lalita", "Mohini", "Nandini",
      "Oviya", "Rupal", "Tanisha",
    ],
    surname: [
      "Acharya", "Agarwal", "Bajaj", "Banerjee", "Basu", "Bhat", "Bhattacharya", "Bose", "Chandra",
      "Chatterjee", "Chaudhary", "Das", "Datta", "Desai", "Deshmukh", "Dubey", "Dwivedi", "Farooqi", "Gandhi",
      "Ghosh", "Goel", "Gowda", "Gupta", "Hussain", "Iyer", "Jain", "Joshi", "Kapoor", "Khan", "Khanna",
      "Kulkarni", "Kumar", "Mahajan", "Malhotra", "Mathur", "Mehta", "Menon", "Mishra", "Mirza", "Mukherjee",
      "Naidu", "Nair", "Narayan", "Pandey", "Patel", "Pillai", "Prasad", "Qureshi", "Rahman", "Rao", "Reddy",
      "Roy", "Saxena", "Sen", "Shah", "Sharma", "Shetty", "Singh", "Sinha", "Sridhar", "Srivastava",
      "Subramanian", "Suri", "Syed", "Tamboli", "Thakur", "Trivedi", "Usmani", "Varma", "Verma", "Yadav",
      "Zaidi", "Ansari", "Bhardwaj", "Chopra", "Deol", "Dixit", "Gulati", "Jadhav", "Kaul", "Kohli", "Lal",
      "Malik", "Memon", "Nanda", "Ojha", "Puri", "Rastogi", "Sachdev", "Sawant", "Shukla", "Talwar", "Tandon",
      "Tripathi", "Tyagi", "Venkataraman", "Wagle", "Bedi", "Chauhan", "Gill", "Luthra", "Madan", "Nagpal",
      "Parmar", "Rana", "Rawat", "Sengar", "Solanki", "Tiwari", "Vyas", "Warsi", "Amin", "Bora", "Contractor",
      "Engineer", "Hegde", "Kamble", "Mankad", "Pathak", "Rizvi",
    ],
  },

  // Common regions / communities: Indonesia, especially Java and other major islands; diverse regional systems.
  // Source: Faker 40.1.2 person provider(s): id_ID; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: Some Indonesians have no hereditary surname; the generator treats listed second names as family names.
  "indonesian": {
    label: "Indonesian",
    surnameFirst: false,
    male: [
      "Ade", "Adika", "Adinata", "Ajimat", "Ajimin", "Among", "Anom", "Aris", "Artanto", "Asirwada", "Aslijan",
      "Asman", "Asmianto", "Atmaja", "Bagiya", "Bahuwarna", "Bajragin", "Bakiman", "Baktiadi", "Baktianto",
      "Balamantri", "Balangga", "Balijan", "Bambang", "Banara", "Banawi", "Budi", "Cahya", "Cahyadi", "Caket",
      "Cakrabirawa", "Capa", "Caraka", "Carub", "Cawisadi", "Cawisono", "Cemeti", "Cemplunk", "Cengkir",
      "Chandra", "Daliono", "Danuja", "Dariati", "Dartono", "Daryani", "Dimas", "Dimaz", "Dirja", "Edi",
      "Edison", "Edward", "Ega", "Elvin", "Emong", "Enteng", "Estiawan", "Estiono", "Gadang", "Gading",
      "Galuh", "Gamanto", "Gambira", "Ganep", "Garan", "Ghani", "Gilang", "Harimurti", "Harja", "Harsanto",
      "Harsaya", "Hartaka", "Hartana", "Hasim", "Ian", "Ibrani", "Ibun", "Ikhsan", "Ikin", "Ilyas", "Indra",
      "Irfan", "Jaeman", "Jagapati", "Jagaraga", "Jaiman", "Jarwadi", "Jaswadi", "Jati", "Jaya", "Jefri",
      "Johan", "Joko", "Kadir", "Kairav", "Kala", "Kamal", "Kambali", "Kamidin", "Kanda", "Karta", "Kasusra",
      "Kemal", "Koko", "Kusuma", "Lamar", "Lanjar", "Lantar", "Lasmanto", "Lega", "Lembah", "Limar", "Luluh",
      "Luthfi", "Luwar", "Mahdi", "Mahmud", "Malik", "Manah", "Marsito", "Marsudi", "Martaka", "Martana",
      "Maryadi", "Maryanto", "Mitra", "Mujur", "Mulya", "Mulyono", "Muni", "Mursita", "Mustika", "Mustofa",
      "Najam", "Najib", "Naradi", "Nardi", "Nasab", "Niyaga", "Nrima", "Nyoman", "Panca", "Pangestu", "Pardi",
      "Parman", "Perkasa", "Prabowo", "Prabu", "Prakosa", "Prasetya", "Prayogo", "Prima", "Purwa", "Purwanto",
      "Radit", "Raditya", "Rafi", "Raharja", "Rahman", "Rama", "Reksa", "Ridwan", "Rudi", "Sabar", "Saka",
      "Satya", "Surya", "Tirta", "Tirtayasa", "Uda", "Unggul", "Upik", "Usman", "Utama", "Vero", "Viman",
      "Wahyu", "Wakiman", "Wardaya", "Xanana", "Yono",
    ],
    female: [
      "Ade", "Agnes", "Aisyah", "Ajeng", "Alika", "Almira", "Amalia", "Ana", "Ani", "Anita", "Aurora", "Ayu",
      "Azalea", "Belinda", "Bella", "Betania", "Calista", "Carla", "Ciaobella", "Cici", "Cindy", "Cinthia",
      "Citra", "Clara", "Cornelia", "Dalima", "Devi", "Dewi", "Dian", "Diana", "Dinda", "Eli", "Elisa", "Ella",
      "Ellis", "Elma", "Elvina", "Endah", "Eva", "Faizah", "Farah", "Farhunnisa", "Fathonah", "Febi", "Fitria",
      "Fitriani", "Gasti", "Gawati", "Genta", "Gilda", "Gina", "Hafshah", "Hamima", "Hana", "Hani", "Hesti",
      "Hilda", "Humaira", "Icha", "Ida", "Ifa", "Ika", "Indah", "Intan", "Ira", "Iriana", "Irma", "Jamalia",
      "Jane", "Janet", "Jasmin", "Jelita", "Jessica", "Juli", "Julia", "Kamaria", "Kamila", "Kani", "Kania",
      "Karen", "Karimah", "Kartika", "Kasiyah", "Kayla", "Keisha", "Kezia", "Kiandra", "Laila", "Lalita",
      "Laras", "Lidya", "Lili", "Lintang", "Maida", "Maimunah", "Mala", "Malika", "Maria", "Maya", "Melinda",
      "Michelle", "Mutia", "Nabila", "Nadia", "Nadine", "Najwa", "Natalia", "Nova", "Novi", "Nurul", "Oliva",
      "Olivia", "Oni", "Ophelia", "Padma", "Padmi", "Paramita", "Paris", "Patricia", "Puspa", "Putri", "Qori",
      "Queen", "Rachel", "Rahmi", "Raina", "Raisa", "Ratih", "Ratna", "Rika", "Rina", "Rini", "Sabrina",
      "Sadina", "Safina", "Salsabila", "Salwa", "Samiah", "Sari", "Shakila", "Shania", "Silvia", "Siska",
      "Suci", "Syahrini", "Tania", "Tantri", "Tari", "Tiara", "Tina", "Titi", "Titin", "Uchita", "Ulva",
      "Ulya", "Umi", "Unjani", "Usyi", "Vanesa", "Vanya", "Vera", "Vicky", "Victoria", "Vivi", "Wani", "Winda",
      "Wirda", "Wulan", "Yance", "Yani", "Yessi", "Yulia", "Yuliana", "Yunita", "Zaenab", "Zamira", "Zelaya",
      "Zelda", "Zulaikha", "Zulfa",
    ],
    surname: [
      "Adriansyah", "Agustina", "Andriani", "Anggraini", "Anggriawan", "Ardianto", "Aryani", "Astuti",
      "Budiman", "Budiyanto", "Dabukke", "Damanik", "Dongoran", "Farida", "Firgantoro", "Firmansyah",
      "Fujiati", "Gunarto", "Gunawan", "Habibi", "Hakim", "Halim", "Halimah", "Handayani", "Hardiansyah",
      "Hariyah", "Hartati", "Haryanti", "Haryanto", "Hasanah", "Hassanah", "Hastuti", "Hidayanto", "Hidayat",
      "Hutagalung", "Hutapea", "Hutasoit", "Irawan", "Iswahyudi", "Jailani", "Januar", "Kurniawan",
      "Kusmawati", "Kusumo", "Kuswandari", "Kuswoyo", "Lailasari", "Laksita", "Laksmiwati", "Latupono",
      "Lazuardi", "Lestari", "Mahendra", "Maheswara", "Mandala", "Mandasari", "Mangunsong", "Mansur",
      "Manullang", "Marbun", "Mardhiyah", "Marpaung", "Maryadi", "Maryati", "Maulana", "Mayasari", "Megantara",
      "Melani", "Mulyani", "Mustofa", "Nababan", "Nainggolan", "Najmudin", "Namaga", "Napitupulu", "Narpati",
      "Nashiruddin", "Nasyiah", "Nasyidah", "Natsir", "Novitasari", "Nugroho", "Nuraini", "Nurdiyanti",
      "Oktaviani", "Padmasari", "Palastri", "Pangestu", "Permadi", "Permata", "Pertiwi", "Prabowo", "Pradana",
      "Pradipta", "Prakasa", "Pranowo", "Prasasta", "Prasetya", "Prasetyo", "Prastuti", "Pratama", "Pratiwi",
      "Prayoga", "Pudjiastuti", "Purnawati", "Purwanti", "Puspasari", "Puspita", "Putra", "Rahayu", "Rahimah",
      "Rahmawati", "Rajasa", "Rajata", "Ramadan", "Riyanti", "Saefullah", "Safitri", "Salahudin", "Samosir",
      "Santoso", "Saptono", "Saputra", "Saragih", "Setiawan", "Sihombing", "Sihotang", "Simanjuntak",
      "Simbolon", "Sinaga", "Sirait", "Siregar", "Sitompul", "Sitorus", "Situmorang", "Suartini", "Sudiati",
      "Suryatmi", "Suryono", "Susanti", "Suwarno", "Tamba", "Tampubolon", "Tarihoran", "Thamrin", "Usada",
      "Usamah", "Utama", "Utami", "Uwais", "Uyainah", "Wacana", "Wahyudin", "Wahyuni", "Waluyo", "Wasita",
      "Waskita", "Wastuti", "Wibisono", "Wibowo", "Widiastuti", "Widodo", "Wijaya", "Wijayanti", "Winarno",
      "Winarsih", "Wulandari", "Yolanda", "Yulianti", "Yuliarti", "Yuniar", "Zulaika", "Zulkarnain",
    ],
  },

  // Common regions / communities: Arctic Canada (Inuit Nunangat), Greenland and northern Alaska; naming systems vary by community.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Traditional Inuit naming is often gender-independent and not based on hereditary surnames. Overlapping personal-name pools and modern second-name examples are used for future colony fiction.
  "inuit": {
    label: "Inuit",
    surnameFirst: false,
    male: [
      "Aaju", "Aka", "Anguti", "Aputsiaq", "Asii", "Ivalu", "Kallik", "Kenojuak", "Malik", "Minik", "Nuka",
      "Nukâka", "Pipaluk", "Qaunaq", "Sakiasi", "Siku", "Ujarak", "Ulu", "Aqqaluk", "Kunu",
    ],
    female: [
      "Aaju", "Aka", "Aputsiaq", "Asii", "Ivalu", "Kallik", "Kenojuak", "Malik", "Minik", "Nuka", "Nukâka",
      "Pipaluk", "Qaunaq", "Siku", "Ujarak", "Ulu", "Naja", "Paninnguaq", "Ane", "Aningaaq",
    ],
    surname: [
      "Aglukkaq", "Akpaliapik", "Amagoalik", "Angatuk", "Arreak", "Ataguttaaluk", "Eetoolook", "Ittinuar",
      "Karetak", "Kudloo", "Kusugak", "Napartuk", "Ootoova", "Qavavau", "Qitsualik", "Sakku", "Sikuaq",
      "Tagak", "Taqralik", "Tunnillie", "Uyarak",
    ],
  },

  // Common regions / communities: Ireland, Northern Ireland and Irish diaspora.
  // Source: Faker 40.1.2 person provider(s): ga_IE; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "irish": {
    label: "Irish",
    surnameFirst: false,
    male: [
      "Adam", "Aengus", "Aidan", "Albert", "Allan", "Alphonsus", "Ambrose", "Andreas", "Andrew", "Angus",
      "Aongus", "Arthur", "Ashley", "Barry", "Bartholomew", "Bartley", "Benedict", "Billy", "Brendan", "Brien",
      "Bruce", "Carl", "Carlos", "Charles", "Christian", "Christopher", "Cian", "Cillian", "Clifford", "Clive",
      "Colin", "Colm", "Colman", "Columba", "Conal", "Conall", "Conan", "Conleth", "Conn", "Connell", "Conor",
      "Cormac", "Cornelius", "Damian", "Daniel", "Dara", "Daragh", "Daren", "Darin", "Darragh", "Darrell",
      "Darren", "Darryl", "Declan", "Denis", "Dennis", "Derek", "Dermot", "Desmond", "Diarmaid", "Diarmuid",
      "Domhnall", "Dominick", "Donagh", "Donald", "Douglas", "Duncan", "Eamon", "Eamonn", "Eanna", "Edwin",
      "Emmet", "Emmett", "Enda", "Eoghan", "Eoin", "Eric", "Eugene", "Feargal", "Fergus", "Finbar", "Finbarr",
      "Fintan", "Fionan", "Flannan", "Florence", "Francis", "Frank", "Frederick", "Gabriel", "Garech",
      "Gareth", "Garret", "Garreth", "Garrett", "Gary", "Gavin", "Geoffrey", "Gerald", "Gerard", "Gilbert",
      "Glenn", "Graham", "Gregory", "Harold", "Henry", "Howard", "Hugh", "Ian", "Ivan", "Ivor", "Jack",
      "Jason", "Jeremy", "Jerome", "John", "Jonathan", "Joseph", "Kenneth", "Kiaran", "Kiernan", "Killian",
      "Lawrence", "Lee", "Leo", "Leonard", "Lorcan", "Mac", "Marc", "Mel", "Mervyn", "Micheal", "Michel",
      "Myles", "Neal", "Niall", "Nicholas", "Nigel", "Norman", "Oliver", "Owen", "Padraic", "Pascal",
      "Patrick", "Paul", "Pauric", "Pearse", "Philip", "Ralph", "Ray", "Raymond", "Robert", "Roderick",
      "Rodger", "Rolf", "Ronald", "Ronan", "Rory", "Ross", "Rossa", "Russell", "Scott", "Sean", "Sebastian",
      "Simon", "Spencer", "Stewart", "Stuart", "Sylvester", "Thomas", "Timothy", "Tomas", "Tony", "Trevor",
      "Troy", "Turlough", "Victor", "Vivian", "Walter", "Wayne",
    ],
    female: [
      "Abina", "Adele", "Aedin", "Ailbhe", "Ailis", "Ailish", "Alice", "Alva", "Anastasia", "Andrena",
      "Angela", "Anita", "Anna", "Annie", "Ashling", "Assumpta", "Averil", "Bernadette", "Bernice", "Bridget",
      "Briget", "Brighid", "Brigid", "Brona", "Bronagh", "Bronwen", "Bronwyn", "Cait", "Caoimhe", "Carla",
      "Carmen", "Carole", "Catherina", "Cathrine", "Cecelia", "Celine", "Charlotte", "Clair", "Clare",
      "Cliona", "Clodagh", "Danielle", "Debbie", "Deborrah", "Deirdre", "Denise", "Diana", "Diane", "Diann",
      "Dianne", "Dona", "Dora", "Dorothy", "Dymphna", "Dympna", "Edel", "Eileen", "Eilis", "Eimear", "Eimer",
      "Eithne", "Elizabeth", "Emer", "Erica", "Ethne", "Evelyn", "Finola", "Fionna", "Fionnula", "Florence",
      "Georgina", "Gillian", "Gina", "Grace", "Gwen", "Hannah", "Hazel", "Helan", "Helen", "Hillary", "Ide",
      "Inez", "Ingrid", "Irene", "Isabel", "Jacinta", "Jacintha", "Jane", "Janet", "Janette", "Janice",
      "Jayne", "Jeannette", "Jenifer", "Jillian", "Joanna", "Jocelyn", "Joyce", "Julia", "Julie", "Juliet",
      "Justine", "Karen", "Karin", "Kate", "Katharine", "Katherine", "Kim", "Lara", "Laura", "Leona", "Leone",
      "Leonie", "Leslie", "Lorna", "Lucia", "Lucy", "Margaret", "Marguerite", "Marie", "Marion", "Matilda",
      "Maxine", "Michele", "Michelle", "Miriam", "Moya", "Nadine", "Naimh", "Nancy", "Naomi", "Nessa", "Niamh",
      "Nicola", "Noirin", "Noleen", "Nora", "Norah", "Noreen", "Norma", "Olive", "Olivia", "Olwen", "Oonagh",
      "Pamela", "Paula", "Paulette", "Pauline", "Petrina", "Rachael", "Regina", "Rosa", "Rosanne", "Rose",
      "Rosemarie", "Roslyn", "Rowena", "Ruth", "Sandra", "Sara", "Shinead", "Shirley", "Siobhan", "Stephanie",
      "Susan", "Susanne", "Tania", "Tara", "Teresa", "Tina", "Toni", "Tonya", "Trina", "Triona", "Una",
      "Vanessa", "Vera", "Vivien", "Vivienne", "Yvonne",
    ],
    surname: [
      "Baróid", "Bodhlaer", "Briain", "Bruadar", "Budhlaeir", "Callahan", "Cill-Dia", "Conrach", "de Barra",
      "de Builtéir", "de Léadús", "Dionún", "Gineá", "Lochlann", "Mac Allmhúráin", "Mac an Abbadh",
      "Mac an Bheithigh", "Mac an Mhíleadha", "Mac Anraoi", "Mac Aonghuis", "Mac Aonghusa", "Mac Artáin",
      "Mac Brádaigh", "Mac Caocháin", "Mac Carmaig", "Mac Cartáin", "Mac Ciúrtáin", "Mac Coilín", "Mac Coimín",
      "Mac Conallta", "Mac Conaola", "Mac Conbhuí", "Mac Connóil", "Mac Conóil", "Mac Dhonnchadha",
      "Mac Dháibhis", "Mac Déid", "Mac Eachaidh", "Mac Eóthach", "Mac Fhionntaigh", "Mac Fhuallaigh",
      "Mac Giolla Domhnaigh", "Mac Giolla Riabhaigh", "Mac Giolla Seanáin", "Mac Giolla Tuile", "Mac Gloin",
      "Mac Leannáin", "Mac Lochlainn", "Mac mBriartaigh", "Mac Niocláis", "Mac Oilifir", "Mac Oralaigh",
      "Mac Oscair", "Mac Raghnaill", "Mac Ruairc", "Mac Thoirbhealaigh", "Mac Uidhir", "Mac Uiginn",
      "Neachtain", "Ruiséal", "Ó Baoighealláin", "Ó Biasta", "Ó Bionáin", "Ó Bradáin", "Ó Breanndáin",
      "Ó Brádaigh", "Ó Buachalla", "Ó Cabhail", "Ó Cairealláin", "Ó Caobháin", "Ó Caollaí", "Ó Caomháin",
      "Ó Caomhánaigh", "Ó Cathaoir", "Ó Cathláin", "Ó Ceothánaigh", "Ó Cianaigh", "Ó Coilín", "Ó Coinnéir",
      "Ó Coinín", "Ó Coirbín", "Ó Coitir", "Ó Coluim", "Ó Conalláin", "Ó Conghaile", "Ó Conmhacháin",
      "Ó Connmhaigh", "Ó Corraigh", "Ó Costagáin", "Ó Críogáin", "Ó Cérúcáin", "Ó Daibhidh", "Ó Danachair",
      "Ó Doibhilin", "Ó Donnghaile", "Ó Donnáin", "Ó Droma", "Ó Dubhthaigh", "Ó Duibhlearga", "Ó Duinn",
      "Ó Dúrcháin", "Ó Fatha", "Ó Fearachair", "Ó Fearáin", "Ó Fiacha", "Ó Fiannaigh", "Ó Finneadha",
      "Ó Fionnalláin", "Ó Foghlú", "Ó Foghlúdha", "Ó Fuallaigh", "Ó Fualáin", "Ó Fuaráin", "Ó Fárta",
      "Ó Fátharta", "Ó Fóghladha", "Ó Galláin", "Ó Gionnáin", "Ó Glionnáin", "Ó Gobhann", "Ó Gramhna",
      "Ó Greanacháin", "Ó Guairim", "Ó Géibheannaigh", "Ó Hailpín", "Ó Haithbheartaigh", "Ó Hannlaoigh",
      "Ó Haoidhne", "Ó Haoileáin", "Ó Hinéirigh", "Ó Hollúin", "Ó Huallacháin", "Ó Hágáin", "Ó Héanacháin",
      "Ó hÉidhniú", "Ó Hógáin", "Ó Lainn", "Ó Laithbheartaigh", "Ó Laoidhe", "Ó Laoidhigh", "Ó Leallaigh",
      "Ó Leathaigh", "Ó Lighe", "Ó Loingscigh", "Ó Loingse", "Ó Luag", "Ó Luineacháin", "Ó Léineacháin",
      "Ó Magáin", "Ó Maoileala", "Ó Maoilia", "Ó Maolchatha", "Ó Maolfhábhaill", "Ó Maoltuile", "Ó Meadhraí",
      "Ó Meirligh", "Ó Meádhraí", "Ó Mochóirghe", "Ó Modhráin", "Ó Mothair", "Ó Muaráin", "Ó Muirgeáin",
      "Ó Neachtain", "Ó Nuanáin", "Ó Piotáin", "Ó Raighill", "Ó Reachtaire", "Ó Rinn", "Ó Ruadháin",
      "Ó Saoraidhe", "Ó Scalaighe", "Ó Seanaigh", "Ó Somacháin", "Ó Spoláin", "Ó Síomóin", "Ó Síothcháin",
      "Ó Síthigh", "Ó Toirbhealaigh", "Ó Tuairisg", "Ó Tuathlainn",
    ],
  },

  // Common regions / communities: Italy, San Marino and Italian-speaking Switzerland.
  // Source: Faker 40.1.2 person provider(s): it_IT; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "italian": {
    label: "Italian",
    surnameFirst: false,
    male: [
      "Agnolo", "Agostino", "Alberico", "Aldo", "Alfio", "Alfredo", "Alphons", "Amadeo", "Amico", "Amleto",
      "Angelo", "Ansaldo", "Antonello", "Antonio", "Arnulfo", "Arsenio", "Arturo", "Azeglio", "Baldassare",
      "Bartolomeo", "Benedetto", "Benito", "Benvenuto", "Biagio", "Calcedonio", "Calogero", "Carlo", "Cesare",
      "Ciro", "Claudio", "Coluccio", "Costantino", "Damiano", "Daniele", "Danilo", "Dante", "Dario", "Delfino",
      "Dino", "Dionigi", "Donatello", "Durante", "Elladio", "Elmo", "Emilio", "Ennio", "Enrico", "Enzio",
      "Ermanno", "Ermes", "Ernesto", "Ettore", "Ezio", "Fabrizio", "Fedele", "Federigo", "Ferdinando",
      "Filippo", "Fiorenzo", "Fiorino", "Flavio", "Francesco", "Franco", "Fulvio", "Gabriele", "Gaetano",
      "Gastone", "Geronimo", "Giacinto", "Giacobbe", "Giacomo", "Gian", "Giancarlo", "Gianfrancesco",
      "Gianluca", "Gianluigi", "Gianni", "Gianpaolo", "Gilberto", "Gino", "Gioacchino", "Gioachino", "Gioffre",
      "Gionata", "Giorgio", "Giosuè", "Giovanni", "Girolamo", "Giuliano", "Giuseppe", "Graziano", "Guarino",
      "Guglielmo", "Gustavo", "Hugo", "Ippazio", "Ivan", "Ivo", "Jacopo", "Lando", "Leonardo", "Leone",
      "Leopoldo", "Livio", "Lodovico", "Lorenzo", "Luca", "Luchino", "Marcantonio", "Marcello", "Marco",
      "Mariano", "Massimiliano", "Mattia", "Maurilio", "Maurizio", "Michelangelo", "Michele", "Micheletto",
      "Michelotto", "Milo", "Mirko", "Nanni", "Napoleone", "Niccolò", "Nico", "Nicola", "Nicolò", "Oreste",
      "Orlando", "Ottone", "Pasqual", "Pasquale", "Patrizio", "Pellegrino", "Pier", "Pierangelo",
      "Piergiorgio", "Piergiuseppe", "Piermaria", "Piero", "Pierpaolo", "Piersanti", "Pietro", "Pomponio",
      "Raffaele", "Raffaellino", "Raffaello", "Raimondo", "Renzo", "Ricciotti", "Roberto", "Rodolfo",
      "Rolando", "Roman", "Romeo", "Romolo", "Ronaldo", "Rosario", "Ruggero", "Ruggiero", "Sabatino", "Salvi",
      "Sandro", "Sante", "Santino", "Saverio", "Sebastiano", "Sergius", "Severino", "Tiziano", "Toni",
      "Tonino", "Tullio", "Uberto", "Umberto", "Valerio", "Vincentio", "Virgilio", "Vittorio",
    ],
    female: [
      "Adelasia", "Adele", "Adriana", "Alessandra", "Alessia", "Alina", "Allegra", "Amalia", "Amanda",
      "Angelica", "Angelina", "Anita", "Annalisa", "Annamaria", "Annetta", "Antonella", "Antonia",
      "Antonietta", "Antonina", "Aria", "Aurora", "Barbara", "Beatrice", "Berenice", "Bettina", "Bianca",
      "Camilla", "Carla", "Carolina", "Cassandra", "Caterina", "Cecilia", "Claudia", "Clelia", "Concetta",
      "Cristina", "Daria", "Diana", "Dina", "Dolores", "Donatella", "Donna", "Eleanora", "Elena", "Eliana",
      "Elisa", "Elvira", "Emma", "Erika", "Etta", "Eva", "Fabia", "Fabrizia", "Federica", "Fernanda", "Fiamma",
      "Filippa", "Flavia", "Flora", "Fortunata", "Francesca", "Gabriella", "Gelsomina", "Gemma", "Germana",
      "Giada", "Gianna", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giulietta", "Giuseppina", "Gloria",
      "Graziella", "Greca", "Griselda", "Ida", "Ilaria", "Imelda", "Iolanda", "Irma", "Isa", "Isabella",
      "Jolanda", "Lara", "Laura", "Lauretta", "Letizia", "Liana", "Licia", "Lidia", "Liliana", "Lilla", "Lina",
      "Lisa", "Livia", "Lolita", "Loredana", "Loretta", "Lucia", "Luciana", "Lucrezia", "Ludovica", "Luigina",
      "Luisa", "Marcella", "Margherita", "Maria", "Mariana", "Marina", "Marisa", "Marissa", "Marta", "Martina",
      "Matilda", "Maura", "Melania", "Melina", "Melissa", "Mercedes", "Michela", "Milena", "Monica", "Morena",
      "Nadia", "Natalia", "Nedda", "Nicoletta", "Nina", "Ninetta", "Olga", "Ornella", "Paloma", "Paola",
      "Paoletta", "Patrizia", "Paulina", "Pierina", "Pina", "Priscilla", "Raffaella", "Ramona", "Renata",
      "Rita", "Roberta", "Romana", "Romina", "Rosa", "Rosalia", "Rosaria", "Rosina", "Rossana", "Sandra",
      "Serena", "Silvia", "Simonetta", "Sole", "Sonia", "Sophia", "Stefani", "Stefania", "Stella", "Susanna",
      "Sylvia", "Tatiana", "Teresa", "Tina", "Tiziana", "Tonia", "Valentina", "Valeria", "Vanessa", "Veronica",
      "Victoria", "Vincenza", "Virginia", "Viridiana", "Vittoria", "Zaira",
    ],
    surname: [
      "Abba", "Agazzi", "Aldobrandi", "Alfonsi", "Alighieri", "Andreotti", "Argento", "Asmundo", "Badoer",
      "Bajardi", "Balla", "Barese", "Baroffio", "Barsanti", "Battaglia", "Beccaria", "Bernardi", "Bernardini",
      "Bersani", "Bettin", "Bignami", "Binaghi", "Boccioni", "Bodoni", "Boezio", "Boitani", "Boito",
      "Bongiorno", "Bossi", "Bragaglia", "Brancaccio", "Busoni", "Caccioppoli", "Calbo", "Calvo", "Camiscione",
      "Canetta", "Cannizzaro", "Cardano", "Carli", "Carocci", "Casalodi", "Cattaneo", "Cerutti", "Cesarotti",
      "Ceschi", "Chittolini", "Cicala", "Cicilia", "Combi", "Comencini", "Corradi", "Crespi", "Cristoforetti",
      "Cugia", "Curatoli", "Curiel", "Depero", "Detti", "Dibiasi", "Dossi", "Dovara", "Duodo", "Durante",
      "Einaudi", "Emanuelli", "Fagiani", "Fantini", "Fantoni", "Faranda", "Farina", "Favata", "Ferrante",
      "Ferrari", "Ferraris", "Fieramosca", "Fioravanti", "Fiorucci", "Fogazzaro", "Franceschi", "Franscini",
      "Giannelli", "Giannone", "Gianvecchio", "Gigli", "Giovine", "Goldoni", "Gradenigo", "Greco", "Greggio",
      "Guglielmi", "Interiano", "Lancisi", "Leonardi", "Leonetti", "Leopardi", "Luzi", "Malenchini",
      "Mascheroni", "Maspero", "Mazzanti", "Mennea", "Merisi", "Modugno", "Montalti", "Montanelli",
      "Morellato", "Moresi", "Morosini", "Morrocco", "Muratori", "Murri", "Muti", "Necci", "Nicolini",
      "Niscoromni", "Odescalchi", "Palazzo", "Palmisano", "Pascarella", "Pasqua", "Pavarotti", "Pellegrini",
      "Perini", "Perozzo", "Pignatti", "Pisani", "Pistoletto", "Pizziol", "Poerio", "Pometta", "Pontecorvo",
      "Prada", "Praga", "Procacci", "Raimondi", "Randazzo", "Rensi", "Ricciardi", "Rizzoli", "Romano",
      "Samele", "Sandi", "Sanguineti", "Sansoni", "Sanudo", "Saraceno", "Satta", "Savorgnan", "Scarpetta",
      "Schiavone", "Segni", "Segrè", "Sermonti", "Smirnoff", "Solimena", "Stoppani", "Tacchini", "Taccola",
      "Tartini", "Tedesco", "Toscanini", "Totino", "Travaglio", "Trincavelli", "Tron", "Trotta", "Turati",
      "Turci", "Varano", "Vecoli", "Vento", "Venturi", "Vigliotti", "Villadicani", "Vittadello", "Viviani",
      "Volterra", "Zanazzo", "Zanichelli",
    ],
  },

  // Common regions / communities: Israel and Jewish diaspora communities worldwide; Hebrew and Jewish naming influences.
  // Original category — all original entries retained.
  "jewish-hebrew": {
    label: "Jewish / Hebrew",
    surnameFirst: false,
    male: [
      "Aaron", "Abel", "Abraham", "Adam", "Aharon", "Akiva", "Amos", "Ariel", "Asher", "Avi", "Avigdor",
      "Avraham", "Baruch", "Benjamin", "Boaz", "Caleb", "Chaim", "Daniel", "David", "Dov", "Efraim", "Eitan",
      "Elazar", "Eli", "Eliahu", "Eliezer", "Elisha", "Emmanuel", "Ephraim", "Erez", "Ezra", "Gabriel",
      "Gideon", "Haim", "Hananel", "Isaac", "Israel", "Itamar", "Jacob", "Jeremiah", "Jesse", "Joel",
      "Jonathan", "Joseph", "Judah", "Levi", "Matan", "Meir", "Menachem", "Micah", "Michael", "Mordechai",
      "Moshe", "Nachman", "Nathan", "Nehemiah", "Noam", "Noah", "Oren", "Pinchas", "Rafael", "Reuben",
      "Samuel", "Saul", "Shai", "Shimon", "Solomon", "Tobias", "Uri", "Yair", "Yakov", "Yehuda", "Yisrael",
      "Yonah", "Yosef", "Zachariah", "Zev", "Amit", "Avner", "Barak", "Doron", "Hillel", "Ilan", "Lior",
      "Malachi", "Nadav", "Omri", "Rami", "Shalom", "Tal", "Uziel", "Yoel", "Yonatan", "Zohar", "Adin", "Eyal",
      "Tzvi", "Netanel",
    ],
    female: [
      "Abigail", "Adina", "Ahava", "Aliza", "Ariel", "Atara", "Aviva", "Batya", "Chana", "Dalia", "Deborah",
      "Dinah", "Eden", "Eliana", "Elisheva", "Esther", "Eva", "Gabriella", "Hadassah", "Hannah", "Ilana",
      "Judith", "Leah", "Liat", "Maya", "Meira", "Michal", "Miriam", "Naama", "Naomi", "Nava", "Noa", "Nurit",
      "Orli", "Penina", "Rachel", "Rebecca", "Rina", "Rivka", "Ruth", "Sarah", "Shaina", "Shira", "Shoshana",
      "Simcha", "Talia", "Tamar", "Tehila", "Tzipporah", "Yael", "Yaffa", "Yehudit", "Yonina", "Zahava",
      "Zipporah", "Adi", "Ahuva", "Ayala", "Bat-El", "Chavah", "Dafna", "Efrat", "Galit", "Hila", "Keren",
      "Levana", "Malka", "Margalit", "Meital", "Nili", "Ofra", "Pnina", "Ranit", "Ronit", "Sapir", "Sigal",
      "Tirzah", "Vered", "Yarden", "Yiska", "Ziva", "Amit", "Ayana", "Batya", "Carmel", "Drora", "Liora",
      "Mazal", "Nitza", "Ora", "Shlomit", "Tova", "Yocheved", "Zemira", "Alona", "Hodaya", "Keshet", "Nehama",
      "Tikva",
    ],
    surname: [
      "Abramson", "Adler", "Auerbach", "Aviv", "Barak", "Ben-Ami", "Ben-David", "Ben-Eliyahu", "Ben-Yosef",
      "Berkowitz", "Bloom", "Cohen", "Davidson", "Dayan", "Eisenberg", "Epstein", "Feldman", "Finkelstein",
      "Friedman", "Gold", "Goldberg", "Goldstein", "Greenberg", "Grossman", "Halpern", "Horowitz", "Isaacs",
      "Jacobs", "Kagan", "Katz", "Kaufman", "Klein", "Kohn", "Levin", "Levine", "Levy", "Lieberman", "Mandel",
      "Mizrahi", "Mor", "Moscovitz", "Perelman", "Peretz", "Rabinowitz", "Rosen", "Rosenberg", "Roth", "Rubin",
      "Rubinstein", "Sandler", "Schapiro", "Schneider", "Schwartz", "Segal", "Shalev", "Sharabi", "Silverman",
      "Solomon", "Stein", "Stern", "Tenenbaum", "Weinberg", "Weiss", "Wexler", "Yadin", "Yosef", "Zohar",
      "Alterman", "Ashkenazi", "Ben-Shimon", "Carmi", "Dahan", "Eliyahu", "Geller", "Hadad", "Israeli",
      "Kessler", "Lapid", "Meiri", "Navon", "Ohana", "Pines", "Ravid", "Shamir", "Topaz", "Uriel", "Vaisman",
      "Yitzhaki", "Zilberman", "Aharoni", "Ben-Tzur", "Freedman", "Gavriel", "Malamed", "Nissim", "Rotenberg",
      "Tzur", "Yariv",
    ],
  },

  // Common regions / communities: Karnataka in southwestern India and Kannada-speaking diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Mixed family, community and patronymic elements.
  "kannada": {
    label: "Kannada",
    surnameFirst: false,
    male: [
      "Abhishek", "Ajay", "Akash", "Anand", "Anil", "Aravind", "Arjun", "Basavaraj", "Chandrashekar",
      "Darshan", "Ganesh", "Girish", "Harish", "Jagadish", "Karthik", "Kiran", "Kumar", "Manjunath", "Mohan",
      "Nagaraj", "Naveen", "Pradeep", "Prakash", "Raghavendra", "Rajesh", "Ramesh", "Ravi", "Sachin",
      "Shankar", "Shivakumar", "Srinivas", "Sudeep", "Suresh", "Vijay", "Vinay", "Vishwanath",
    ],
    female: [
      "Ananya", "Anitha", "Anjali", "Anusha", "Aparna", "Asha", "Ashwini", "Bhavana", "Chandana", "Deepa",
      "Deepika", "Divya", "Geetha", "Harini", "Kavya", "Lakshmi", "Mamatha", "Manasa", "Meghana", "Nandini",
      "Nayana", "Pallavi", "Pavithra", "Pooja", "Priya", "Ramya", "Rashmi", "Rekha", "Shilpa", "Shruthi",
      "Sindhu", "Sneha", "Soumya", "Suma", "Swathi", "Vani", "Vidya",
    ],
    surname: [
      "Acharya", "Adiga", "Bhat", "Gowda", "Hegde", "Hebbar", "Joshi", "Kamath", "Karnad", "Kini", "Kulkarni",
      "Murthy", "Naik", "Pai", "Patil", "Rao", "Shetty", "Shenoy", "Upadhya", "Urs", "Desai", "Hiremath",
      "Katti", "Poojary", "Sastry", "Swamy", "Yadav",
    ],
  },

  // Common regions / communities: Kazakhstan, western Mongolia, Xinjiang and Kazakh diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Base surname forms used as fixed future family names; contemporary suffixes may be gendered.
  "kazakh": {
    label: "Kazakh",
    surnameFirst: false,
    male: [
      "Abai", "Adil", "Aidos", "Alikhan", "Almas", "Arman", "Askar", "Ayan", "Azamat", "Baurzhan", "Bekzat",
      "Bolat", "Daniyar", "Dauren", "Eldar", "Erbol", "Ermek", "Kairat", "Kanat", "Marat", "Murat",
      "Nursultan", "Olzhas", "Saken", "Serik", "Timur", "Yerlan", "Yerzhan", "Zhanat",
    ],
    female: [
      "Aida", "Aigerim", "Aigul", "Ainur", "Aizhan", "Akmaral", "Altynai", "Asel", "Aruzhan", "Asem", "Dana",
      "Dinara", "Gulnara", "Gulzira", "Kamila", "Karina", "Madina", "Malika", "Meruert", "Nazgul", "Saltanat",
      "Saule", "Zarina", "Zhanar", "Zhibek",
    ],
    surname: [
      "Abayev", "Akhmetov", "Aliev", "Altynbayev", "Aubakirov", "Baymukhanov", "Beketov", "Dosymov", "Iskakov",
      "Kaliyev", "Karimov", "Kenzhebayev", "Kudaibergen", "Makhambetov", "Nazarbayev", "Nurmagambetov",
      "Omarov", "Sadykov", "Saparov", "Sarsembayev", "Suleimenov", "Tulegenov", "Utemisov", "Yessimov",
      "Zhakupov",
    ],
  },

  // Common regions / communities: Cambodia and Khmer communities in Vietnam and Thailand.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Family name often precedes given name; modern conventions vary.
  "khmer": {
    label: "Khmer",
    surnameFirst: true,
    male: [
      "Bora", "Chan", "Channarong", "Chantrea", "Dara", "Khem", "Kosal", "Mony", "Narith", "Nimol", "Phalla",
      "Phirun", "Piseth", "Ratanak", "Rith", "Samang", "Samnang", "Sarith", "Serey", "Sok", "Sokha", "Sothea",
      "Sovann", "Thy", "Veasna", "Vichea", "Virak", "Vuthy",
    ],
    female: [
      "Bopha", "Chanda", "Chantrea", "Chariya", "Dara", "Kanika", "Kunthea", "Leakena", "Maly", "Minea",
      "Nary", "Neary", "Pisey", "Rachana", "Rasmey", "Reaksmey", "Socheata", "Sokha", "Sokunthea", "Somaly",
      "Sopheap", "Sophea", "Sovannary", "Srey", "Tevy", "Thavy", "Vanna", "Vicheka",
    ],
    surname: [
      "Chan", "Chea", "Chhay", "Chhim", "Chhun", "Chum", "Heng", "Him", "Hun", "Keo", "Khim", "Khieu", "Kim",
      "Kong", "Lim", "Long", "Ly", "Meas", "Men", "Nhem", "Norodom", "Nuon", "Ouk", "Pen", "Phan", "Prak",
      "Ros", "Sam", "Sao", "Seng", "Sisowath", "Sok", "Som", "Sorn", "Suon", "Touch", "Vann",
    ],
  },

  // Common regions / communities: Kurdish communities in Turkey, Iraq, Iran and Syria, plus diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Some listed family names reflect region, lineage or tribal affiliation; not every Kurdish person uses these naming structures.
  "kurdish": {
    label: "Kurdish",
    surnameFirst: false,
    male: [
      "Azad", "Aras", "Baran", "Botan", "Ciwan", "Dara", "Diyar", "Dilshad", "Firat", "Hemin", "Hejar", "Kawa",
      "Kovan", "Mazlum", "Rojhat", "Rojvan", "Sherko", "Shervan", "Soran", "Sipan", "Serhat", "Zana", "Zanyar",
      "Zagros", "Rebar", "Renas", "Aram", "Ari", "Hawar", "Hama",
    ],
    female: [
      "Avin", "Berfin", "Berivan", "Binevsh", "Dilan", "Dilara", "Dicle", "Derya", "Gulistan", "Helin",
      "Havin", "Jiyan", "Jin", "Jina", "Kajal", "Lavin", "Leila", "Narin", "Nergiz", "Rojda", "Rojin",
      "Rojbin", "Ronahi", "Ronak", "Shirin", "Sima", "Viyan", "Zilan", "Zozan", "Zerin",
    ],
    surname: [
      "Barzani", "Talabani", "Hawrami", "Jaf", "Kurdi", "Kurdistani", "Zangana", "Harki", "Surchi", "Goran",
      "Badini", "Baban", "Mukri", "Sindi", "Pishdari", "Dizayee", "Khoshnaw", "Berwari", "Zebari", "Rashidi",
    ],
  },

  // Common regions / communities: Northern Great Plains of the United States and Canada; Lakota and Dakota communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern English given names and publicly attested civil surnames; some are translated historical family names. No ceremonial names generated.
  "lakota-dakota": {
    label: "Lakota / Dakota",
    surnameFirst: false,
    male: [
      "Adam", "Albert", "Benjamin", "Charles", "Daniel", "David", "Edward", "Elias", "Frank", "George",
      "Henry", "James", "John", "Joseph", "Leonard", "Louis", "Paul", "Peter", "Robert", "Thomas", "William",
    ],
    female: [
      "Alice", "Anna", "Caroline", "Charlotte", "Christine", "Elizabeth", "Evelyn", "Florence", "Grace",
      "Helen", "Jane", "Julia", "Louise", "Margaret", "Marie", "Mary", "Nancy", "Rose", "Ruth", "Sarah",
      "Susan",
    ],
    surname: [
      "Afraid of Bear", "Black Elk", "Black Horse", "Brown", "Charging Hawk", "Crow Dog", "Eagle",
      "Fire Thunder", "Good Voice", "High Horse", "Iron Cloud", "Kills Straight", "Little", "Little Bear",
      "Little Crow", "Looking Horse", "Red Cloud", "Red Shirt", "Running Hawk", "Two Bulls", "Two Eagle",
      "Walking Bull", "White Buffalo", "White Eyes", "White Plume", "White Thunder", "Yellow Hawk",
    ],
  },

  // Common regions / communities: Laos and Lao diaspora communities in Thailand, France, the United States and elsewhere.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern two-part civil names; some personal names are unisex.
  "lao": {
    label: "Lao",
    surnameFirst: false,
    male: [
      "Anousone", "Bounchanh", "Bounmy", "Bounnhang", "Bounthavy", "Chanthavong", "Kham", "Khamla",
      "Khamphanh", "Khampheng", "Khamphou", "Khamsay", "Manivong", "Oudom", "Phan", "Phomma", "Phouthone",
      "Seng", "Sombath", "Somchai", "Somphong", "Somsack", "Souk", "Souphan", "Souphanouvong", "Thavone",
      "Vieng", "Vong",
    ],
    female: [
      "Anong", "Bounmy", "Chanthaly", "Chansy", "Dara", "Dokmai", "Kham", "Khamla", "Khampheng", "Khamphou",
      "Khamphoun", "Khamphone", "Khamvone", "Manivanh", "Maly", "Nang", "Noy", "Phailin", "Pheng", "Phone",
      "Sengdao", "Sengmany", "Somchit", "Souk", "Soukanya", "Thip", "Viengkham", "Vongdala",
    ],
    surname: [
      "Chanthavong", "Inthavong", "Khamphoumy", "Keobounphanh", "Khamvongsa", "Khounborom", "Manivong",
      "Phanthavong", "Phommasane", "Phomvihane", "Phothisane", "Phouthavong", "Phoummavong", "Sayasone",
      "Sengsavang", "Sihanavong", "Sisavath", "Sisoulath", "Sisouvong", "Sithavong", "Souliyavong",
      "Souvannaphouma", "Souvannasone", "Vongdala", "Vongsa", "Vongxay", "Xayavong",
    ],
  },

  // Common regions / communities: Spain, Portugal and Latin America; especially Spanish-speaking populations.
  // Original category — all original entries retained.
  "latin-iberian": {
    label: "Latin / Iberian",
    surnameFirst: false,
    male: [
      "Alejandro", "Antonio", "Adrian", "Alberto", "Andres", "Angel", "Arturo", "Bruno", "Carlos", "Cesar",
      "Cristian", "Daniel", "David", "Diego", "Eduardo", "Emilio", "Enrique", "Esteban", "Fabian", "Felipe",
      "Fernando", "Francisco", "Gabriel", "Gerardo", "Gonzalo", "Guillermo", "Hector", "Hugo", "Ignacio",
      "Isaac", "Ivan", "Jaime", "Javier", "Joaquin", "Jorge", "Jose", "Juan", "Julian", "Leo", "Leonardo",
      "Lorenzo", "Lucas", "Luis", "Manuel", "Marco", "Marcos", "Martin", "Mateo", "Matias", "Mauricio",
      "Maximo", "Miguel", "Nicolas", "Oscar", "Pablo", "Patricio", "Pedro", "Rafael", "Raul", "Ricardo",
      "Roberto", "Rodrigo", "Ruben", "Salvador", "Samuel", "Santiago", "Sergio", "Tomas", "Valentin",
      "Vicente", "Victor", "Alfonso", "Armando", "Baltasar", "Benicio", "Camilo", "Claudio", "Damian", "Dario",
      "Domingo", "Elias", "Ernesto", "Federico", "Gaspar", "Horacio", "Iker", "Jeronimo", "Leandro",
      "Lisandro", "Luciano", "Marcelo", "Mario", "Nestor", "Octavio", "Ramiro", "Renato", "Rodolfo", "Rogelio",
      "Roman", "Teodoro", "Thiago", "Valerio", "Xavier", "Alvaro", "Bautista", "Cristobal", "Ezequiel",
      "Franco", "Ismael", "Julio", "Lautaro", "Milton", "Noel", "Orlando", "Ramon", "Rene", "Saul", "Ulises",
      "Yago", "Zacarias",
    ],
    female: [
      "Adriana", "Alejandra", "Alicia", "Ana", "Andrea", "Angela", "Antonia", "Beatriz", "Bianca", "Camila",
      "Carla", "Carmen", "Catalina", "Cecilia", "Clara", "Claudia", "Cristina", "Daniela", "Diana", "Dolores",
      "Elena", "Elisa", "Emilia", "Esperanza", "Estela", "Eva", "Fabiana", "Fernanda", "Gabriela", "Gloria",
      "Helena", "Ines", "Irene", "Isabel", "Jacinta", "Jimena", "Julia", "Julieta", "Laura", "Leonor",
      "Leticia", "Liliana", "Lorena", "Lucia", "Luisa", "Luna", "Margarita", "Maria", "Mariana", "Marina",
      "Marta", "Mercedes", "Monica", "Natalia", "Noelia", "Olga", "Paloma", "Patricia", "Paula", "Pilar",
      "Raquel", "Renata", "Rocio", "Rosa", "Salma", "Sandra", "Sara", "Silvia", "Sofia", "Susana", "Teresa",
      "Valentina", "Valeria", "Vanesa", "Veronica", "Victoria", "Violeta", "Ximena", "Yolanda", "Zulema",
      "Abril", "Alma", "Amparo", "Belen", "Candela", "Celeste", "Consuelo", "Delfina", "Eloisa", "Esmeralda",
      "Florencia", "Guadalupe", "Josefina", "Lourdes", "Magdalena", "Milagros", "Miranda", "Nadia", "Ofelia",
      "Paz", "Reina", "Rosario", "Soledad", "Tatiana", "Trinidad", "Agustina", "Ariana", "Brisa", "Carlota",
      "Dominga", "Eugenia", "Faustina", "Genoveva", "Isidora", "Luz", "Marisol", "Nerea", "Romina", "Selena",
      "Zoraida",
    ],
    surname: [
      "Aguilar", "Alvarez", "Arias", "Benitez", "Blanco", "Bravo", "Caballero", "Campos", "Cano", "Cardenas",
      "Carrasco", "Castillo", "Castro", "Cervantes", "Cortes", "Cruz", "Delgado", "Diaz", "Dominguez",
      "Duarte", "Escobar", "Espinoza", "Estevez", "Fernandez", "Flores", "Fuentes", "Gallardo", "Garcia",
      "Garrido", "Gil", "Gomez", "Gonzalez", "Guerrero", "Gutierrez", "Herrera", "Ibarra", "Iglesias",
      "Jimenez", "Lara", "Leon", "Lopez", "Lozano", "Marin", "Marquez", "Martinez", "Medina", "Mendez",
      "Molina", "Montoya", "Morales", "Moreno", "Navarro", "Nunez", "Ortega", "Ortiz", "Paredes", "Pena",
      "Perez", "Prieto", "Ramirez", "Ramos", "Reyes", "Rios", "Rivera", "Robles", "Rodriguez", "Roman",
      "Romero", "Ruiz", "Salazar", "Sanchez", "Santana", "Santos", "Serrano", "Silva", "Solis", "Soto",
      "Suarez", "Torres", "Valdez", "Valencia", "Vargas", "Vasquez", "Vega", "Velasco", "Vera", "Vidal",
      "Zamora", "Acosta", "Beltran", "Calderon", "Carrillo", "Coronado", "Figueroa", "Gallego", "Lucero",
      "Maldonado", "Mora", "Olivares", "Palacios", "Pizarro", "Quintero", "Rosales", "Sepulveda", "Trevino",
      "Uribe", "Villalobos", "Zaragoza", "Amador", "Bautista", "Cedillo", "Del Toro", "Escamilla", "Fonseca",
      "Granados", "Macias", "Peralta", "Renteria", "Valenzuela", "Zepeda",
    ],
  },

  // Common regions / communities: Latvia and Latvian diaspora.
  // Source: Faker 40.1.2 person provider(s): lv_LV; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "latvian": {
    label: "Latvian",
    surnameFirst: false,
    male: [
      "Agris", "Aigars", "Ainārs", "Aivars", "Alberts", "Aldis", "Aleksandrs", "Alfrēds", "Andrejs", "Andrešs",
      "Andris", "Ansis", "Antons", "Armands", "Arnis", "Arnolds", "Artis", "Arturs", "Artūrs", "Arvīds",
      "Augusts", "Brencis", "Bērends", "Bērtulis", "Dainis", "Daniels", "Dzintars", "Dāvis", "Edgars",
      "Edmunds", "Eduards", "Edvīns", "Egils", "Elmārs", "Elvis", "Emīls", "Ermanis", "Ernests", "Fricis",
      "Gatis", "Guntars", "Guntis", "Gunārs", "Hanss", "Harijs", "Henriks", "Hermanis", "Igors", "Ilmārs",
      "Imants", "Indriķis", "Ivars", "Ivo", "Jakobs", "Janis", "Jannis", "Jezups", "Johans", "Juris", "Jānis",
      "Jāzeps", "Jēkabs", "Jēkaubs", "Jūlijs", "Kaspars", "Konradus", "Kristaps", "Kristers", "Krists",
      "Krišjānis", "Krišs", "Kārlis", "Laimonis", "Lauris", "Leons", "Macs", "Mareks", "Matīss", "Mihels",
      "Mikels", "Miķelis", "Modris", "Māris", "Mārtiņš", "Nikolajs", "Niks", "Normunds", "Oskars", "Osvalds",
      "Oto", "Oļģerts", "Pauls", "Pēteris", "Raimonds", "Raivis", "Reinis", "Rihards", "Ričards", "Roberts",
      "Rolands", "Rūdolfs", "Sandis", "Staņislavs", "Tenis", "Teodors", "Toms", "Uldis", "Valdis", "Viesturs",
      "Viktors", "Vilis", "Vilnis", "Visvaldis", "Viļums", "Vladislavs", "Voldemārs", "Ziedonis", "Ādams",
      "Ādolfs", "Ēriks", "Ēvalds", "Ģederts", "Ģirts", "Žanis",
    ],
    female: [
      "Agnese", "Aiga", "Aija", "Aina", "Alise", "Alma", "Alvīne", "Alīda", "Amālija", "Anete", "Anita",
      "Anna", "Annija", "Antoņina", "Antra", "Ausma", "Austra", "Baiba", "Berta", "Biruta", "Broņislava",
      "Dace", "Daiga", "Daina", "Diāna", "Doroteja", "Dzidra", "Dzintra", "Dārta", "Eda", "Edīte", "Elita",
      "Elizabete", "Elvīra", "Elza", "Elīna", "Emma", "Emīlija", "Erna", "Eva", "Evija", "Evita", "Gaida",
      "Genovefa", "Grieta", "Grēta", "Gunita", "Gunta", "Helēna", "Ieva", "Ilga", "Ilona", "Ilze", "Ina",
      "Indra", "Inese", "Ineta", "Inga", "Ingrīda", "Inguna", "Inta", "Ināra", "Irma", "Irēna", "Iveta",
      "Jana", "Janina", "Jūla", "Jūle", "Jūlija", "Karina", "Karlīna", "Katarīna", "Katrīna", "Krista",
      "Kristiāna", "Laila", "Laura", "Lavīze", "Leontīne", "Lidija", "Liene", "Ligita", "Lilija", "Lilita",
      "Linda", "Lizete", "Lība", "Līga", "Līna", "Līza", "Lūcija", "Madara", "Made", "Maija", "Mare",
      "Margareta", "Margrieta", "Marija", "Marta", "Maža", "Milda", "Minna", "Mirdza", "Monika", "Māra",
      "Mārīte", "Natālija", "Olga", "Otīlija", "Paula", "Paulīna", "Rasma", "Regīna", "Rita", "Rudīte", "Ruta",
      "Rute", "Samanta", "Sandra", "Sanita", "Santa", "Sapa", "Sarmīte", "Silvija", "Sintija", "Skaidrīte",
      "Solvita", "Tekla", "Trīne", "Valda", "Valentīna", "Valija", "Velta", "Veneranda", "Vera", "Veronika",
      "Vija", "Vilma", "Vineta", "Vita", "Zane", "Zelma", "Zenta", "Zigrīda", "Ārija", "Ērika",
    ],
    surname: [
      "Alksne", "Alksnis", "Apine", "Apinis", "Apsīte", "Apsītis", "Auniņa", "Auniņš", "Auziņa", "Auziņš",
      "Avotiņa", "Avotiņš", "Balode", "Balodis", "Baltiņš", "Birzniece", "Birznieks", "Bite", "Briede",
      "Briedis", "Bērziņa", "Bērziņš", "Caune", "Celma", "Celmiņa", "Celmiņš", "Celms", "Cīrule", "Cīrulis",
      "Dzene", "Dzenis", "Dūmiņa", "Dūmiņš", "Eglīte", "Eglītis", "Jaunzema", "Jaunzems", "Kalniņa", "Kalniņš",
      "Kalēja", "Kalējs", "Kauliņa", "Kauliņš", "Kaņepa", "Kaņeps", "Krastiņa", "Krastiņš", "Krieva",
      "Krieviņa", "Krieviņš", "Krievs", "Krēsliņa", "Krēsliņš", "Krūmiņa", "Krūmiņš", "Krūze", "Kundziņa",
      "Kundziņš", "Kārkliņa", "Kārkliņš", "Kļaviņa", "Kļaviņš", "Lagzdiņa", "Lagzdiņš", "Lapsa", "Liepa",
      "Liepiņa", "Liepiņš", "Lukstiņa", "Lukstiņš", "Lāce", "Lācis", "Līce", "Līcis", "Lūse", "Lūsis",
      "Paegle", "Podniece", "Podnieks", "Pole", "Polis", "Priede", "Priedīte", "Priedītis", "Puriņa", "Puriņš",
      "Purmale", "Purmals", "Pērkona", "Pērkons", "Riekstiņa", "Riekstiņš", "Roze", "Rozīte", "Rozītis",
      "Rubene", "Rubenis", "Rudzīte", "Rudzītis", "Saulīte", "Saulītis", "Siliņa", "Siliņš", "Skuja",
      "Skujiņa", "Skujiņš", "Sproģe", "Sproģis", "Strazdiņa", "Strazdiņš", "Turiņa", "Turiņš", "Vanaga",
      "Vanags", "Vilciņa", "Vilciņš", "Vilks", "Vīksna", "Vītola", "Vītoliņa", "Vītoliņš", "Vītols", "Zariņa",
      "Zariņš", "Zaķe", "Zaķis", "Zeltiņa", "Zeltiņš", "Ziemele", "Ziemelis", "Zirne", "Zirnis", "Zvaigzne",
      "Zvirbule", "Zvirbulis", "Zālīte", "Zālītis", "Ābele", "Ābola", "Āboliņa", "Āboliņš", "Ābols",
    ],
  },

  // Common regions / communities: Lithuania and Lithuanian diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Uses masculine/base surname forms as fixed future family names; modern Lithuanian surname forms can differ by gender and marital status.
  "lithuanian": {
    label: "Lithuanian",
    surnameFirst: false,
    male: [
      "Adomas", "Algirdas", "Antanas", "Arūnas", "Ąžuolas", "Dainius", "Darius", "Domantas", "Dominykas",
      "Edgaras", "Gediminas", "Giedrius", "Gintaras", "Jonas", "Julius", "Justas", "Kęstutis", "Linas",
      "Lukas", "Mantas", "Marius", "Mindaugas", "Mykolas", "Paulius", "Petras", "Rimantas", "Rytis", "Saulius",
      "Tadas", "Tomas", "Vytautas",
    ],
    female: [
      "Agne", "Aistė", "Aušra", "Birutė", "Dalia", "Eglė", "Gabija", "Giedrė", "Gintarė", "Ieva", "Indrė",
      "Jolanta", "Jurgita", "Justina", "Kamilė", "Karolina", "Laima", "Lina", "Monika", "Rasa", "Rūta",
      "Sandra", "Saulė", "Simona", "Ugnė", "Viktorija", "Vilma", "Živilė",
    ],
    surname: [
      "Kazlauskas", "Jankauskas", "Petrauskas", "Pocius", "Stankevičius", "Vasiliauskas", "Žukauskas",
      "Butkus", "Paulauskas", "Urbonas", "Kavaliauskas", "Sakalauskas", "Balčiūnas", "Kairys", "Klimas",
      "Laucius", "Mažeika", "Mikalauskas", "Navickas", "Rimkus", "Šimkus", "Vaičiūnas", "Valaitis", "Zabulis",
    ],
  },

  // Common regions / communities: Algeria and neighboring North African countries; overlaps Arabic and Amazigh naming.
  // Source: Faker 40.1.2 person provider(s): fr_DZ; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "maghrebi": {
    label: "Maghrebi / Algerian",
    surnameFirst: false,
    male: [
      "Abdelatif", "Abdelkader", "Abderaouf", "Abderrahmane", "Adam", "Adel", "Ahmed", "Akram", "Aladin",
      "Ali", "Amine", "Amir", "Anis", "Arezki", "Aymen", "Ayoub", "Chabane", "Cherif", "Djamel", "Fares",
      "Farid", "Farouk", "Fatteh", "Ferhat", "Fodil", "Ghilas", "Hamid", "Hamza", "Hocine", "Houcine",
      "Ibrahim", "Ilyes", "Kada", "Khaled", "Khalil", "Lamine", "Lotfi", "Malik", "Massinissa", "Mehdi",
      "Mohamed", "Mohammed", "Mohand", "Mouloud", "Mounir", "Mourad", "Moussa", "Mustapha", "Nacer", "Nadir",
      "Nassim", "Nazim", "Omar", "Ouanes", "Oussama", "Rabah", "Rachid", "Ramzi", "Riad", "Rida", "Rochdi",
      "Saad", "Said", "Salah", "Salim", "Sami", "Samir", "Samy", "Sofiane", "Soufiane", "Taha", "Walid",
      "Wassim", "Yacine", "Yahia", "Yanis", "Yasser", "Youba", "Youcef", "Younes", "Zakaria",
    ],
    female: [
      "Amani", "Amel", "Amina", "Amira", "Anaïs", "Anissa", "Asma", "Aya", "Bouchra", "Chanez", "Chiraz",
      "Célia", "Céline", "Dalia", "Dounia", "Farah", "Fatima", "Fella", "Feriel", "Fouzia", "Hadjer", "Hana",
      "Hania", "Hayat", "Houda", "Ikram", "Imene", "Ines", "Jasmine", "Kahina", "Katia", "Khadidja", "Leila",
      "Lila", "Lilia", "Lina", "Lisa", "Lydia", "Lyna", "Lynda", "Malak", "Manel", "Maria", "Marwa", "Maya",
      "Meriem", "Mina", "Mira", "Myriam", "Mélissa", "Nadia", "Narimane", "Nawal", "Nedjma", "Nesrine",
      "Nihad", "Nour", "Racha", "Rania", "Rim", "Rose", "Rym", "Ryma", "Sabrina", "Safia", "Sahra", "Salima",
      "Salma", "Samira", "Sara", "Sarah", "Selma", "Serine", "Sofia", "Sonia", "Sophia", "Souad", "Soumia",
      "Thinhinane", "Wafae", "Yasmina", "Yasmine", "Yousra", "Zina", "Zineb",
    ],
    surname: [
      "Abada", "Abbas", "Abbassi", "Abbes", "Abdelaziz", "Abdellaoui", "Abdou", "Abed", "Abid", "Abouda",
      "Aboukir", "Achour", "Adda", "Amara", "Amari", "Amrane", "Amri", "Arab", "Aribi", "Attia", "Ayad",
      "Azizi", "Azzouz", "Bahri", "Bakhouche", "Belaid", "Belarbi", "Belbachir", "Belkacem", "Belkacemi",
      "Belkheir", "Belkhiri", "Benabdellah", "Benali", "Benamara", "Benameur", "Benmoussa", "Bensaid",
      "Bensalem", "Benslimane", "Benyamina", "Benziane", "Berkane", "Berkani", "Bettahar", "Bouafia",
      "Boualem", "Bouali", "Boubekeur", "Boucetta", "Bouchama", "Bouchareb", "Boudraa", "Bouguerra",
      "Boukhari", "Boumaza", "Boumediene", "Bounab", "Boussaid", "Bouziane", "Bouzid", "Bouzidi", "Brahimi",
      "Brahmi", "Chabane", "Chaib", "Chellaoua", "Chergui", "Cherif", "Chibani", "Chikh", "Dahmane", "Dahmani",
      "Derbal", "Derkaoui", "Derouiche", "Diaf", "Djellal", "Djoudi", "Fellah", "Ferhat", "Gacem", "Ghazi",
      "Gherbi", "Guendouz", "Guerfi", "Guessoum", "Haddouche", "Hadjadj", "Hadji", "Hamadi", "Hamel", "Hamidi",
      "Hamlaoui", "Hammadi", "Hamoudi", "Hamza", "Hamzaoui", "Hassani", "Henni", "Ikhlef", "Kaci", "Kaddour",
      "Kaddouri", "Kamel", "Kebir", "Khaldi", "Khaled", "Khelif", "Khelifa", "Khelifi", "Kouidri", "Lahmar",
      "Laib", "Lakehal", "Lakhdari", "Laouar", "Laribi", "Loucif", "Madani", "Madi", "Mahmoudi", "Makhlouf",
      "Malek", "Malki", "Mansour", "Mansouri", "Mazouzi", "Mebarki", "Medjahed", "Meftah", "Messaoudi",
      "Meziane", "Meziani", "Mihoubi", "Miloudi", "Mimouni", "Mohammedi", "Mokhtari", "Mokrani", "Morsli",
      "Mostefaoui", "Moulay", "Moussa", "Moussaoui", "Nedjar", "Nouar", "Noui", "Nouri", "Otmani", "Rabhi",
      "Rabia", "Rachedi", "Rahal", "Rahmoune", "Rahmouni", "Ramdani", "Saad", "Saadi", "Sabri", "Saci",
      "Sahli", "Said", "Saidani", "Salem", "Salmi", "Saoudi", "Seddiki", "Soltani", "Soudani", "Tahraoui",
      "Talbi", "Touil", "Toumi", "Yahi", "Yahiaoui", "Yousfi", "Zaidi", "Zeroual", "Zidane",
    ],
  },

  // Common regions / communities: Madagascar and Malagasy diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "malagasy": {
    label: "Malagasy",
    surnameFirst: false,
    male: [
      "Andry", "Ando", "Haja", "Hery", "Iary", "Lova", "Mamy", "Manda", "Manoa", "Mika", "Naina", "Njaka",
      "Rado", "Raja", "Rakoto", "Ramanana", "Rivo", "Solo", "Tiana", "Toavina", "Toky", "Tsiry", "Tsiory",
      "Zo",
    ],
    female: [
      "Aina", "Anjara", "Fanja", "Fara", "Fitiavana", "Hanitra", "Harena", "Hasina", "Hery", "Ialy", "Lala",
      "Lalaina", "Landy", "Mialy", "Miora", "Nantenaina", "Nirina", "Ony", "Rina", "Soa", "Tiana", "Toky",
      "Vola", "Voahangy", "Vonjy",
    ],
    surname: [
      "Andriamihaja", "Andriamihanta", "Andriamparany", "Andrianarivo", "Andrianjafy", "Andriantsitohaina",
      "Rabe", "Rabemananjara", "Rabearivelo", "Rabarijaona", "Rabesahala", "Raharimanana", "Rajaofera",
      "Rakotobe", "Rakotomalala", "Rakotomanga", "Rakotonirina", "Rakotoarisoa", "Rakotondrabe", "Ramanantsoa",
      "Ramanandraibe", "Ranaivo", "Randria", "Randrianarisoa", "Rasoanaivo", "Rasolo", "Razafindrakoto",
      "Razafindrazaka", "Razafimandimby",
    ],
  },

  // Common regions / communities: Malaysia, Brunei, Singapore, southern Thailand and Malay-speaking parts of Indonesia.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Malay naming often uses patronymic bin/binti rather than hereditary surnames; second names are father-name elements for a future standardized system.
  "malay": {
    label: "Malay",
    surnameFirst: false,
    male: [
      "Abdul", "Abdullah", "Ahmad", "Aiman", "Akmal", "Amir", "Anwar", "Arif", "Azhar", "Azlan", "Faiz",
      "Faisal", "Farid", "Firdaus", "Hakim", "Hafiz", "Haris", "Hasan", "Haziq", "Hilmi", "Idris", "Irfan",
      "Iskandar", "Kamal", "Khairul", "Luqman", "Mahathir", "Malik", "Mizan", "Muhammad", "Nabil", "Nazri",
      "Rafiq", "Rahim", "Rizal", "Roslan", "Safwan", "Syafiq", "Taufik", "Zaid", "Zainal", "Zul",
    ],
    female: [
      "Aina", "Aisyah", "Amira", "Anis", "Aqilah", "Ayu", "Azlina", "Balqis", "Farah", "Farhana", "Fatin",
      "Hafizah", "Hani", "Hidayah", "Intan", "Izzati", "Jamilah", "Khadijah", "Maisarah", "Mariam", "Maya",
      "Mira", "Nadia", "Nadiah", "Najiha", "Nisa", "Nor", "Nur", "Nurul", "Puteri", "Rahayu", "Ramlah", "Rina",
      "Roslina", "Sakinah", "Salmah", "Sarah", "Siti", "Sofea", "Suraya", "Syafiqah", "Zahra", "Zainab",
    ],
    surname: [
      "Abdullah", "Ahmad", "Ali", "Anwar", "Ariffin", "Aziz", "Bakar", "Daud", "Hassan", "Hussein", "Ibrahim",
      "Idris", "Ismail", "Jaafar", "Kadir", "Karim", "Mahmud", "Mansor", "Mohamed", "Mustafa", "Omar", "Osman",
      "Rahim", "Rahman", "Razak", "Salleh", "Sulaiman", "Yahya", "Yusof", "Zainal",
    ],
  },

  // Common regions / communities: Kerala in southwestern India and Malayali diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Mixed religious and community naming; many second names are patronymics.
  "malayalam": {
    label: "Malayalam / Malayali",
    surnameFirst: false,
    male: [
      "Ajith", "Akhil", "Anand", "Anil", "Arjun", "Arun", "Biju", "Deepak", "Dileep", "Ganesh", "Hari",
      "Jayan", "Jithin", "Kiran", "Krishna", "Manoj", "Mathew", "Mohan", "Naveen", "Nikhil", "Pradeep",
      "Pranav", "Rajeev", "Rajesh", "Rakesh", "Ranjith", "Sajith", "Sandeep", "Santhosh", "Sreejith", "Suresh",
      "Thomas", "Unni", "Vineeth", "Vishnu",
    ],
    female: [
      "Anagha", "Anjana", "Anju", "Anupama", "Aparna", "Arya", "Aswathy", "Athira", "Bhavana", "Bindu",
      "Devika", "Divya", "Gayathri", "Gopika", "Indu", "Jyothi", "Kavya", "Lakshmi", "Lekha", "Meera",
      "Neethu", "Nimisha", "Parvathy", "Priya", "Remya", "Reshma", "Revathi", "Riya", "Sangeetha", "Saranya",
      "Shilpa", "Sindhu", "Sneha", "Sreelakshmi", "Sruthi", "Veena", "Vidya",
    ],
    surname: [
      "Chacko", "Cherian", "George", "Joseph", "Koshy", "Kurian", "Mathew", "Thomas", "Varghese", "Nair",
      "Menon", "Pillai", "Panicker", "Kurup", "Warrier", "Marar", "Nambiar", "Thampi", "Namboodiri",
      "Nambeesan", "Kaimal", "Pisharody", "Poduval", "Pothan", "Kuriakose", "Oommen", "Cherukara", "Moothedan",
    ],
  },

  // Common regions / communities: Malta and Maltese diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  "maltese": {
    label: "Maltese",
    surnameFirst: false,
    male: [
      "Adrian", "Alfred", "Andrew", "Anton", "Carmelo", "Charles", "Darren", "David", "Domenic", "Edward",
      "Emanuel", "Francis", "Gorg", "Gianni", "Joseph", "Karl", "Lawrence", "Luke", "Mark", "Mario", "Matthew",
      "Michael", "Paul", "Peter", "Raymond", "Salvatore", "Simon", "Stephen", "Tonio", "Vincent",
    ],
    female: [
      "Adriana", "Angela", "Anne", "Antoinette", "Bernadette", "Carmen", "Carmelina", "Claire", "Claudia",
      "Daniela", "Dorothy", "Elena", "Francesca", "Giselle", "Grace", "Helen", "Jacqueline", "Josette",
      "Josephine", "Lara", "Maria", "Marisa", "Mary", "Michelle", "Nadia", "Rita", "Rosanne", "Sarah",
      "Therese", "Victoria",
    ],
    surname: [
      "Abela", "Aguis", "Azzopardi", "Bajada", "Balzan", "Borg", "Briffa", "Bugeja", "Camilleri", "Caruana",
      "Cassar", "Cauchi", "Chetcuti", "Debono", "Deguara", "Farrugia", "Fenech", "Galea", "Gatt", "Grech",
      "Grima", "Micallef", "Mifsud", "Muscat", "Pace", "Said", "Schembri", "Scicluna", "Spiteri", "Vella",
      "Zammit",
    ],
  },

  // Common regions / communities: Aotearoa New Zealand and Māori diaspora, including Australia.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Contemporary and historical public-use names; whakapapa-based naming is not reproduced by random pairing.
  "maori": {
    label: "Māori",
    surnameFirst: false,
    male: [
      "Aperahama", "Ari", "Haki", "Hamuera", "Hemi", "Henare", "Hone", "Hori", "Ihaia", "Ihaka", "Kauri",
      "Kereama", "Manaia", "Matiu", "Mikaere", "Nikau", "Paora", "Pita", "Rangi", "Ropata", "Ruiha", "Tama",
      "Tamati", "Tane", "Te Ariki", "Te Rangi", "Wiremu",
    ],
    female: [
      "Ana", "Anahera", "Aroha", "Atarangi", "Hana", "Hine", "Hinemoa", "Hinerangi", "Huhana", "Irihapeti",
      "Kahurangi", "Kiri", "Maia", "Mere", "Moana", "Ngaire", "Pare", "Rangimarie", "Ria", "Ripeka", "Roimata",
      "Ruiha", "Tai", "Te Aroha", "Te Atawhai", "Tui", "Waimarie",
    ],
    surname: [
      "Awatere", "Hekia", "Herewini", "Hikuroa", "Hongi", "Hone", "Ihaka", "Kawe", "Kingi", "Mahuta",
      "Maniapoto", "Mita", "Ngata", "Ngawaka", "Paora", "Pere", "Pihama", "Pohatu", "Rangi", "Rangihau",
      "Rata", "Rewi", "Rikihana", "Tahana", "Tamati", "Tawhai", "Te Ao", "Te Paa", "Te Rito", "Te Whata",
      "Tikao", "Tipene", "Turei", "Wihongi", "Winiata",
    ],
  },

  // Common regions / communities: Southern and central Chile and adjacent Argentina.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern civil names plus historical and language-derived revival elements; not a frequency-ranked or traditional name-formation model.
  "mapuche": {
    label: "Mapuche",
    surnameFirst: false,
    male: [
      "Aukan", "Caupolicán", "Lautaro", "Leftraru", "Lientur", "Pelantaro", "Pailamachu", "Colocolo", "Antü",
      "Likan", "Nahuel", "Nehuen", "Rayen", "Rupay", "Juan", "José", "Pedro", "Luis", "Manuel", "Segundo",
    ],
    female: [
      "Ayelén", "Ailén", "Antü", "Calfurray", "Fresia", "Guacolda", "Kalfuray", "Küyen", "Millaray", "Rayen",
      "Sayen", "Wanglen", "Ayün", "Lihuen", "Malén", "María", "Rosa", "Juana", "Elena", "Carmen",
    ],
    surname: [
      "Ancalaf", "Antilef", "Antileo", "Catrileo", "Catrillanca", "Calfunao", "Calfucura", "Cayul",
      "Chihuailaf", "Colipán", "Curihuinca", "Curin", "Huenchumilla", "Huenchunao", "Huenchuñir", "Huichalaf",
      "Huilcaman", "Lincopi", "Llanquileo", "Manquepillán", "Marileo", "Melinao", "Millaleo", "Nahuelpán",
      "Ñanculef", "Paine", "Paillalef", "Painemal", "Pichún", "Pillán", "Quidel", "Tralcal",
    ],
  },

  // Common regions / communities: Maya communities in southern Mexico, Guatemala, Belize, Honduras and El Salvador.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern Maya-associated civil surnames and mixed modern/Historical personal names; some mythic and royal revival forms. Different Maya languages are not interchangeable.
  "maya": {
    label: "Maya",
    surnameFirst: false,
    male: [
      "Ahau", "Balam", "Canek", "Itzamna", "Pakal", "Kʼinich", "Jacinto", "Gaspar", "Juan", "Mateo", "Miguel",
      "Pedro", "Santiago", "Tomás", "Francisco", "Diego", "José", "Manuel", "Antonio", "Nicolás",
    ],
    female: [
      "Ixchel", "Ixquic", "Ixtab", "Ixkik", "Ixmucané", "Itzel", "Sak Nikté", "Nikté", "Ana", "Catarina",
      "Dolores", "Elena", "Francisca", "Isabel", "Juana", "Lucía", "María", "Rosa", "Teresa", "Magdalena",
    ],
    surname: [
      "Aké", "Balam", "Can", "Canul", "Cauich", "Chan", "Chay", "Chi", "Cocom", "Coh", "Cuxim", "Dzib", "Dzul",
      "Ek", "Huchim", "Kantún", "May", "Moo", "Nah", "Pech", "Poot", "Puc", "Tamay", "Tzec", "Tun", "Uc",
      "Uicab", "Xiu", "Yam", "Yeh", "Choc", "Caal", "Coc", "Cuc", "Ixcot", "Pop", "Tzul",
    ],
  },

  // Common regions / communities: Papua New Guinea, Solomon Islands, Vanuatu, Fiji and New Caledonia; highly diverse region.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Illustrative modern civil names, with a strong Fiji emphasis and smaller PNG/Solomon/Vanuatu representation; not a single language tradition.
  "melanesian": {
    label: "Melanesian / Pacific",
    surnameFirst: false,
    male: [
      "Aisake", "Alipate", "Alick", "Anare", "Ben", "Benson", "Biko", "Daniel", "Eliesa", "Emosi", "Eroni",
      "Filipe", "Francis", "Iosefo", "Isikeli", "Jone", "Kelepi", "Laisenia", "Laisiasa", "Manasseh", "Mark",
      "Moses", "Peter", "Ratu", "Samuela", "Setareki", "Sireli", "Sitiveni", "Tevita", "Viliame",
    ],
    female: [
      "Adelina", "Agnes", "Alisi", "Anna", "Asenaca", "Berenice", "Elenoa", "Elizabeth", "Esther", "Fane",
      "Florence", "Grace", "Hilda", "Irene", "Joana", "Laisani", "Litia", "Lusiana", "Mabel", "Makereta",
      "Mere", "Milika", "Naomi", "Nelly", "Ruci", "Ruth", "Salote", "Sera", "Shirley", "Vika",
    ],
    surname: [
      "Bainimarama", "Bale", "Bule", "Cakobau", "Dawai", "Diro", "Gavoka", "Haiveta", "Hopa", "Kabui", "Kiki",
      "Koroibete", "Kubuabola", "Lalabalavu", "Lomax", "Lovo", "Maelanga", "Mara", "Matanitobua", "Naiqama",
      "Namatakula", "Namaliu", "Nawaikula", "Olo", "Paea", "Puka", "Rara", "Ratuva", "Sogavare", "Somare",
      "Tawake", "Tikoisuva", "Vunibobo", "Wale",
    ],
  },

  // Common regions / communities: Ancient Mesopotamia (modern Iraq and neighboring parts of Syria and Iran).
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. Includes revival forms and, where relevant, literary/mythological names; not all were everyday given names.
  "mesopotamian": {
    label: "Sumerian / Akkadian revival",
    surnameFirst: false,
    male: [
      "Adad-nirari", "Ashur-nasir-pal", "Ashurbanipal", "Enmerkar", "Etana", "Gudea", "Hammurabi", "Ibbi-Sin",
      "Ishbi-Erra", "Lugalbanda", "Lugalzagesi", "Naram-Sin", "Nebuchadnezzar", "Ninurta", "Rim-Sin", "Sargon",
      "Shamshi-Adad", "Shulgi", "Tiglath-Pileser", "Ur-Nammu", "Ur-Nanshe", "Utu-hegal",
    ],
    female: [
      "Amat-Mamu", "Amat-Shamash", "Enheduanna", "Ennigaldi-Nanna", "Kubaba", "Naqi’a", "Ninsun", "Puabi",
      "Shibtu", "Tashlultum", "Tashmetum-sharrat", "Yaba", "Zakutu",
    ],
    surname: [
      "Adad-nirari", "Ashurbanipal", "Etana", "Gudea", "Hammurabi", "Ibbi-Sin", "Naram-Sin", "Sargon",
      "Shamshi-Adad", "Shulgi", "Ur-Nammu", "Ur-Nanshe", "Utu-hegal",
    ],
  },

  // Common regions / communities: Federated States of Micronesia, Palau, Marshall Islands, Kiribati, Nauru, Guam and Northern Mariana Islands.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern regional civil names, including Spanish, English, Japanese and Indigenous naming influences; not a single language tradition.
  "micronesian": {
    label: "Micronesian / Pacific",
    surnameFirst: false,
    male: [
      "Anote", "Antonio", "Bernard", "Carlos", "David", "Emanuel", "Francis", "Henry", "Isaac", "Jack",
      "Jacob", "John", "Jose", "Kausea", "Kieren", "Leo", "Manny", "Martin", "Peter", "Ramon", "Remengesau",
      "Robert", "Takeshi", "Tommy", "Wesley",
    ],
    female: [
      "Ana", "Angelina", "Bernadette", "Carmen", "Clara", "Daisy", "Elizabeth", "Emily", "Esther", "Florence",
      "Grace", "Irene", "Josephine", "Julia", "Lina", "Maria", "Marina", "Martha", "Mary", "Mele", "Miriam",
      "Rita", "Rose", "Ruth", "Sandra", "Teresia",
    ],
    surname: [
      "Adachi", "Adeang", "Aisek", "Akinaga", "Anson", "Arriola", "Babangauta", "Bani", "Blas", "Camacho",
      "Ching", "Demei", "Duenas", "Eperiam", "Fitial", "Heine", "Hideo", "Iriarte", "Kabua", "Kuartei", "Lai",
      "Loeak", "Mori", "Nakamura", "Ngiraked", "Pangelinan", "Panuelo", "Remengesau", "Sablan", "Taitano",
      "Tara", "Tenorio", "Toribiong", "Waqa", "Whipps",
    ],
  },

  // Common regions / communities: Jewish communities of the Middle East and North Africa, including Iraq, Iran, Yemen, Syria and Israel.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Includes diverse overlapping Iraqi, Syrian, Iranian, Yemenite and North African civil naming traditions; not a single uniform system.
  "mizrahi": {
    label: "Mizrahi Jewish",
    surnameFirst: false,
    male: [
      "Abraham", "Avraham", "Aharon", "Baruch", "David", "Eliyahu", "Ezra", "Gabriel", "Haim", "Hakham",
      "Isaac", "Israel", "Jacob", "Meir", "Mordechai", "Moshe", "Nissim", "Ovadia", "Rafael", "Reuven",
      "Saadia", "Salman", "Shalom", "Shlomo", "Shmuel", "Yehuda", "Yosef",
    ],
    female: [
      "Adina", "Aliza", "Amira", "Ariela", "Batsheva", "Chana", "Esther", "Hadas", "Hanna", "Leah", "Mazal",
      "Miriam", "Naama", "Nadia", "Nehama", "Nurit", "Rachel", "Rina", "Rivka", "Ruth", "Sara", "Shoshana",
      "Simcha", "Tamar", "Tikva", "Yaffa", "Yona",
    ],
    surname: [
      "Abadi", "Abdallah", "Abir", "Aboud", "Albagli", "Alfasi", "Amin", "Attias", "Azran", "Baghdadi",
      "Barzani", "Benayoun", "Ben-David", "Bensoussan", "Cohen", "Dangoor", "Dahan", "Gabbay", "Gamliel",
      "Haddad", "Hakak", "Halevi", "Harari", "Hazzan", "Houri", "Kadoorie", "Kahalani", "Kattan", "Levy",
      "Mansour", "Mizrahi", "Mualem", "Musa", "Nakash", "Ovadia", "Sasson", "Shamash", "Shasho", "Sofer",
      "Toledano", "Yadegar", "Zilkha",
    ],
  },

  // Common regions / communities: Mongolia, Inner Mongolia and neighboring Mongolic-speaking communities.
  // Original category — all original entries retained.
  "mongolic": {
    label: "Mongolic",
    surnameFirst: true,
    male: [
      "Kublai", "Altan", "Amar", "Amgalan", "Ankhbayar", "Arslan", "Baatar", "Badamgarav", "Baldan",
      "Batbayar", "Batbold", "Batdorj", "Bat-Erdene", "Batjargal", "Batmunkh", "Battulga", "Bayar",
      "Bayarmagnai", "Bayarsaikhan", "Bilguun", "Bold", "Bolormaa", "Borkhuu", "Buyandelger", "Buyankhishig",
      "Chagnaadorj", "Chimeddorj", "Chinggis", "Chuluun", "Dashdorj", "Delger", "Demid", "Dorj", "Dorjpalam",
      "Dugar", "Enebish", "Enkhbat", "Enkhbayar", "Enkhbold", "Enkhjargal", "Enkhsaikhan", "Erdene",
      "Erdenebat", "Erdenechimeg", "Erdenetsetseg", "Ganbaatar", "Ganbold", "Ganchimeg", "Ganzorig",
      "Gombodorj", "Jadambaa", "Jargal", "Javkhlan", "Khatanbaatar", "Khishig", "Khurelbaatar", "Lhagva",
      "Lkhagva", "Luvsan", "Mendsaikhan", "Mijid", "Mongol", "Monkhbat", "Munkh", "Munkhbat", "Munkhbold",
      "Munkh-Erdene", "Munkhjargal", "Naranbaatar", "Narankhuu", "Nergui", "Nyam", "Nyamdorj", "Odgerel",
      "Odjargal", "Otgonbayar", "Purev", "Purevdorj", "Sainbayar", "Saruul", "Sodnom", "Sukhbaatar",
      "Temuulen", "Temur", "Temujin", "Togtokh", "Tseren", "Tserendorj", "Tsolmon", "Tumur", "Tumurbat",
      "Uuganbayar", "Yadamsuren", "Yesukhei", "Zolboo", "Zorig", "Zorigt", "Bilegt", "Khulan",
    ],
    female: [
      "Altantsetseg", "Altantuya", "Anudari", "Ariunaa", "Bayarmaa", "Bolormaa", "Bolortuya", "Buyankhishig",
      "Chimeg", "Delgertuya", "Dolgor", "Dolgormaa", "Enkhjargal", "Enkhmaa", "Erdenechimeg", "Ganbaatar",
      "Gerel", "Gerelmaa", "Khaliun", "Khishigjargal", "Khulan", "Mandakh", "Mendbayar", "Munkhtsetseg",
      "Namuun", "Narantsetseg", "Naranzul", "Narantuya", "Nergui", "Odonchimeg", "Odontsetseg", "Odval",
      "Oyuna", "Oyuunchimeg", "Oyuun-Erdene", "Purevjargal", "Sainjargal", "Saran", "Sarangerel", "Saruul",
      "Soyolmaa", "Temuulen", "Togtoh", "Tsetseg", "Tsolmon", "Tuul", "Tuya", "Uyanga", "Yanjmaa", "Yesui",
      "Zaya", "Zoljargal", "Altanchimeg", "Ankhtsetseg", "Ariuntsetseg", "Battsetseg", "Bayasgalan", "Boloroo",
      "Chuluuntsetseg", "Delgermaa", "Enkhzaya", "Erdenetuya", "Gantsetseg", "Gereltuya", "Khongorzul",
      "Micheedmaa", "Munkhzul", "Nomin", "Nomin-Erdene", "Odmaa", "Orkhon", "Otgontsetseg", "Purevtsetseg",
      "Sarnai", "Soyombo", "Tserenchimeg", "Tungalag", "Ujin", "Uranchimeg", "Yalguun", "Yesugen", "Zolzaya",
      "Ariunzul", "Bayartsetseg", "Bolorchimeg", "Delgerzul", "Enkhgerel", "Gerelchimeg", "Khuslen",
      "Munkhjin", "Nandia", "Oyunbileg", "Selenge", "Tsetsegee", "Uyangaa", "Yargui", "Zolzaya", "Anujin",
      "Khaliunaa",
    ],
    surname: [
      "Altankhuyag", "Amarsanaa", "Baatar", "Badarch", "Baldorj", "Bat", "Batbayar", "Batbold", "Bat-Erdene",
      "Batjargal", "Battulga", "Bayar", "Bayarsaikhan", "Bold", "Borkhuu", "Buyandelger", "Chimeddorj",
      "Chuluun", "Dash", "Dashdorj", "Demid", "Dorj", "Dorjsuren", "Dulam", "Enkhbat", "Enkhbayar", "Enkhbold",
      "Enkhjargal", "Erdene", "Erdenebat", "Ganbaatar", "Ganbold", "Ganzorig", "Gombo", "Gurragchaa",
      "Jadambaa", "Jargalsaikhan", "Khatanbaatar", "Khurelbaatar", "Lhagva", "Lkhagvasuren", "Luvsan",
      "Mendsaikhan", "Mijid", "Monkhbat", "Munkh", "Munkhbat", "Munkhbold", "Namsrai", "Naranbaatar", "Nergui",
      "Nyam", "Nyamdorj", "Odgerel", "Otgonbayar", "Purev", "Purevdorj", "Ragchaa", "Sainbayar", "Saruul",
      "Sodnom", "Sukh", "Sukhbaatar", "Temur", "Temuujin", "Togtokh", "Tseren", "Tserendorj", "Tumur",
      "Tumurbat", "Uuganbayar", "Yadamsuren", "Yesukhei", "Zolboo", "Zorig", "Zorigt", "Altangerel", "Amgalan",
      "Baasanjav", "Bayarmagnai", "Bilegt", "Chagnaadorj", "Davaadorj", "Enkhtuya", "Erdenesaikhan",
      "Ganpurev", "Khishigdorj", "Lkhamsuren", "Munkhsaikhan", "Narangerel", "Otgonsuren", "Sukhjargal",
      "Tserenbat", "Uurtsaikh", "Yondon", "Zorigtbaatar",
    ],
  },

  // Common regions / communities: Central Mexico and other Nahua communities in Mexico and Central America.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern civil surnames and historical/modern Nahuatl-derived personal names; historical figures and mythic forms may be used as revival names in the setting.
  "nahua": {
    label: "Nahua / Nahuatl",
    surnameFirst: false,
    male: [
      "Cuauhtémoc", "Cuitláhuac", "Izel", "Nezahualcóyotl", "Tizoc", "Xicoténcatl", "Tenoch", "Axayácatl",
      "Acamapichtli", "Chimalpopoca", "Itzcóatl", "Moctezuma", "Cipactli", "Ocelotl", "Yaotl", "Xochipilli",
      "Tlacaelel",
    ],
    female: [
      "Xóchitl", "Citlali", "Citlalli", "Izel", "Yaretzi", "Itzel", "Xochiquetzal", "Malinalli", "Atlatonin",
      "Chalchiuhnenetzin", "Tecuichpo", "Ilancueitl", "Chimalma", "Miahuaxihuitl", "Miahuaxochitl",
    ],
    surname: [
      "Moctezuma", "Xicoténcatl", "Tecpán", "Tepoz", "Tlatoa", "Hernández", "Martínez", "García", "Flores",
      "Ramírez", "Morales", "Cruz", "Reyes", "Santiago", "Bautista", "Vázquez", "Mendoza", "Torres",
      "de la Cruz",
    ],
  },

  // Common regions / communities: Navajo Nation in Arizona, New Mexico and Utah, United States; wider Diné communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern English given names with publicly attested Diné-associated civil surnames; does not reproduce traditional Diné personal or clan naming.
  "navajo": {
    label: "Diné / Navajo",
    surnameFirst: false,
    male: [
      "Aaron", "Albert", "Andrew", "Anthony", "Benjamin", "Daniel", "David", "Elias", "George", "Henry",
      "James", "John", "Joseph", "Leonard", "Michael", "Paul", "Raymond", "Robert", "Samuel", "Thomas",
      "William",
    ],
    female: [
      "Alice", "Amanda", "Anna", "Carol", "Catherine", "Christine", "Deborah", "Elizabeth", "Emma", "Grace",
      "Helen", "Jean", "Julia", "Laura", "Lena", "Linda", "Margaret", "Marie", "Mary", "Ruth", "Sarah",
      "Sharon",
    ],
    surname: [
      "Begay", "Benally", "Bia", "Bitsie", "Chee", "Chischilly", "Clah", "Denny", "Etsitty", "Gishie",
      "Hatahle", "Haskie", "Kaye", "Largo", "Manygoats", "Nez", "Peshlakai", "Sam", "Skeets", "Slim",
      "Tacheene", "Tsosie", "Tso", "Yazzie",
    ],
  },

  // Common regions / communities: Nepal and Nepali-speaking areas of India and Bhutan.
  // Source: Faker 40.1.2 person provider(s): ne_NP; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "nepali": {
    label: "Nepali",
    surnameFirst: false,
    male: [
      "Abhiṣēka", "Acyuta", "Ajaya", "Amina", "Amita", "Amr̥ta", "Anaka", "Anira", "Anupa", "Arjuna", "Asōka",
      "Avalōka", "Aśōba", "Aśōka", "Babi", "Badrī", "Balakisana", "Banavārī", "Bhairavalāla", "Bharata",
      "Bhavin‍dra", "Bhumā", "Bikāsa", "Birāṭa", "Budhda", "Chavi", "Damōdara", "Dharmēndra", "Dhiraja",
      "Digavijayā", "Dilipa", "Dinēsa", "Dipakasvara", "Dipēndra", "Dipēśa", "Dāvā", "Dēva", "Dēvēndra",
      "Dēvēn‍dra", "Dīpaka", "Gōpāla", "Gōpī", "Gōvinda", "Hari", "Hirā", "Hirēndra", "Hēmarāja", "Jagannātha",
      "Jaganātha", "Jagavira", "Jayandra", "Jitēndra", "Jñānu", "Jībana", "J‍yōbhāna", "Kamala", "Karmā",
      "Khaḍga", "Kiraṇa", "Kiśana", "Kiśōra", "Kr̥jala", "Kr̥ṣṇa", "Kr̥ṣ‍ṇa", "Kuvēra", "Kuśala", "Kāji",
      "Kājī", "Kēśara", "Kēśavalāla", "Lakṣmaṇa", "Lakṣmī", "Lava", "Liṭana", "Lāla", "Madana", "Mahēndra",
      "Mahēśa", "Mannā", "Manīṣa", "Manōhara", "Manōja", "Man̄jila", "Mayuśa", "Maṇīrāja", "Mukhyā",
      "Mālacanda", "Mēgha", "Mōhana", "Nabina", "Nabindra", "Narabhūpāla", "Navina", "Nimēśa", "Nirmala",
      "Nirmēśa", "Pan̄ca", "Prabhu", "Pradipa", "Prajñāna", "Pral‍hāda", "Pramēś‍vara", "Praviṇa", "Pravēśa",
      "Praśānna", "Puruṣōttama", "Pārasa", "Ratana", "Ravi", "Ravindra", "Rupēśa", "Rāhula", "Rāja", "Rāju",
      "Rājīva", "Rāma", "Rāmajāna", "Rāmaśaraṇa", "Rōhana", "Rōjina", "R̥ku", "R̥śu", "R̥ṣi", "R̥ṣikēsa",
      "Saguna", "Saibī", "Sajana", "Sajēn‍dra", "Sampurṇa", "Samun‍dra", "Sandipa", "Santōṣa", "San̄jaya",
      "San̄jiva", "San̄jība", "San̄jīva", "Sarvēśa", "Sarōja", "Saurabha", "Saṅkara", "Sa‌n̄jaya", "Sumana",
      "Suraja", "Surēndra", "Suśila", "Sāgara", "Sōma", "Thōkēla", "Tirtha", "Um'mēda", "Uttama", "Vidhyāmāna",
      "Vikāsa", "Virēndra", "Viś‍va", "Viṣṇu", "Yaśa", "Ālōka", "Āśaya", "Āśiṣa", "Āśīṣa", "Ēka", "Ībrāhīma",
      "Īsī", "Ōma", "Śacindra", "Śarada", "Śaśī", "Śrīvatsa", "Śuśila", "Śuśānta", "Śyāma", "Śānta",
      "Śēlēn‍dra", "Ś‍yāmarāja", "Ḍā.", "Ḍēnisa", "Ṭasī", "Ṭikā", "Ṭēka",
    ],
    female: [
      "Aditī", "Airikā", "Amarāvatī", "Amr̥tā", "Amvikā", "Anjalī", "Anupamā", "Arcanā", "Aṅgura", "Babitā",
      "Baiṣṇavī", "Banitā", "Bavitā", "Bhuvana", "Bimalā", "Binitā", "Candramāyā", "Candrā", "Candā",
      "Caṇḍikā", "Chiriṅa", "Chuṅaḍyāka", "Chētana", "Curīnānī", "Cām̐danī", "Damayanti", "Dhanamāyā",
      "Dipisā", "Dipā", "Dēvakī", "Dēvī", "Dīkṣā", "Gītā", "Hari", "Hirā", "Ibhana", "Icchā", "Indu", "Indīrā",
      "Jamunā", "Jayaśrī", "Juluma", "Junu", "Junā", "Jñānu", "Kalpanā", "Kavitā", "Kr̥ṣṇa", "Kusuma",
      "Kālasāṅga", "Kāmanā", "Kāntī", "L'hājī", "Lakṣmī", "Līlā", "Mahāvatī", "Mallīkā", "Manilā", "Manīṣā",
      "Mayaṅkhu", "Mañju", "Maṅgalī", "Maṇi", "Minu", "Mirā", "Miśrī", "Miṅamara", "Munamuna", "Mānasī",
      "Mēnā", "Mēn‍khu", "Namratā", "Nibhā", "Nidhī", "Nikitā", "Nikṣā", "Nilu", "Nirajā", "Nirmala",
      "Nirmalā", "Niru", "Nirā", "Nānu", "Nārana", "Nātī", "Nīrā", "Pad‍mā", "Paralā", "Pavitrā", "Phaujiyā",
      "Phuminī", "Pinu", "Pratiti", "Pravinā", "Priyā", "Prēmā", "Pujā", "Puna", "Puṣpā", "Puṣ‍ṣā", "Pārvatī",
      "Rabinā", "Rabīnā", "Racitā", "Rajitā", "Rakīlā", "Ramitā", "Ravinā", "Raśmi", "Raś‍mī", "Ritu", "Ritā",
      "Rupā", "Ruvinā", "Rādhikā", "Rādhā", "Rājyalakṣmī", "Rēvatī", "Rēṇu", "Rītā", "Sacitā", "Salbhiyā",
      "Salimā", "Sampadā", "Samānatā", "Samīnā", "Saphalatā", "Saralā", "Sarasvatī", "Saritā", "Sarmilā",
      "Sarōja", "Satyavratā", "Savinā", "Sitā", "Sukr̥tī", "Sumana", "Suna", "Sunāma", "Surucī", "Surēn‍drā",
      "Susilā", "Suṣ‍mā", "Svēc‍chā", "Sāgara", "Sāvitrī", "Sōnī", "Tāniyā", "Tōyā", "Urmilā", "Uttarā",
      "Varṣā", "Vibhā", "Vidhyā", "Vidyā", "Vimalā", "Vinitā", "Viṣ‍ṇu", "Yōṅamī", "Āyuṣā", "Āśā", "Ēlisā",
      "Ēliśā", "Ītāsā", "Īś‍varī", "Śarmilā", "Śaśī", "Śilu", "Śrr̥ṣ‍ṭi", "Śrēyaśī", "Śrīprāp‍tī", "Śubhēcchā",
      "Śuśilā", "Śānti", "Śāntī", "Śōbhā", "Ś‍vētā", "Ś‍yāmā", "Ḍōlī", "Ṭāsī",
    ],
    surname: [
      "(amātya)", "(dhēkē)", "(kṣētrī)", "(n'yaupānē)", "(pāṇḍē)", "(śrēṣ‍ṭha)", "Adhikārī", "Agravāla",
      "Amātya", "Amāt‍ya", "Bagālē", "Bajrācārya", "Basn'yāta", "Basnēta", "Bhaṭṭarā'ī", "Bhimasariyā",
      "Bhimasarīyā", "Bhujū", "Bhusāla", "Bēgāmī", "Bēgānī", "Bōtharā", "Caulāgā'ī", "Cyāmē", "Cālisē",
      "Davāḍī", "Dhanāvata", "Dugala", "Dugaḍa", "Dāhāla", "Dē'ujā", "Gautama", "Gaḍataulā", "Ghalē",
      "Ghimirē", "Girī", "Gup‍tā", "Guruṅa", "Guruṅga", "Gurāgā'ī", "Gōyala", "Hāyaju", "Hāyāju", "Jaina",
      "Jñavālī", "Jōśī", "Kakṣapati", "Kakṣapatī", "Kansākāra", "Karmācārya", "Khanāla", "Khatrī", "Khaḍgī",
      "Khaḍkā", "Killā", "Kirām̐ta", "Ku'ikēla", "Kābarā", "Kārkī", "Kē.sī", "Kē.sī.", "Kṣētrī", "Limbu",
      "Lāmā", "Lēkhaka", "Lōhanī", "Magara", "Maharjana", "Mahatō", "Mainālī", "Malla", "Mal‍la", "Manandhara",
      "Mittala", "Musalamāna", "Mus‍līma", "Mānana‍dhara", "Mānandhara", "Mānan‍dhara", "Māskē", "Mōktāna",
      "N'yaupānē", "Nāhaṭā", "Nēpāla", "Nēpālī", "Panta", "Panēru", "Pan‍ta", "Parājulī", "Pauḍyāla",
      "Pauḍēla", "Pradhāna", "Pradhānāṅa", "Pradhānāṅga", "Prajāpati", "Prajāpatī", "Pyākurēla", "Pāṇḍē",
      "Pāṇḍēya", "Pāṇ‍ḍē", "Pōdvāra", "Pōkharēla", "P‍yākurēla", "Rasā'ilī", "Rasāyalī", "Ra‌jitakāra",
      "Rimāla", "Rā'ī", "Rājakarṇikāra", "Rāṇā", "Rāṭhaura", "Rāṭhī", "Rēgmī", "Rēg‍mī", "Sariyā", "Sarīyā",
      "Satyāla", "Sihaṁ", "Silavāla", "Silvāla", "Sinha", "Siṁ‌khaḍā", "Siṅghala", "Siṭaulā", "Si‌ha",
      "Sunuvāra", "Suvāla", "Suvēdī", "Sāha", "Sāhī", "Sāpakōṭā", "Sī", "Taṇḍukāra", "Thāpā", "Tivārī",
      "Tulādhara", "Ukyāva", "Upādhyāya", "Upādh‍yāya", "Vajrācārya", "Ācārya", "Ālama", "Śarmā", "Śaṅkara",
      "Śrēṣṭha", "Śrēṣ‍ṭha", "Śāha", "Śāhī", "Śākya", "Śērpā", "Ḍaṅgōla", "Ḍa‌ṅgōla", "Ḍhakāla", "Ḍhaṅgēla",
      "Ḍhuṅgēla", "Ṭhakurī", "Ṭhukarī", "Ṭibrēvāla",
    ],
  },

  // Common regions / communities: Great Lakes region of Canada and the United States; Ojibwe and related Anishinaabe communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Modern civil names and some Ojibwe-associated family surnames; does not generate clan or spiritual names.
  "ojibwe": {
    label: "Ojibwe / Anishinaabe",
    surnameFirst: false,
    male: [
      "Adam", "Alexander", "Andrew", "Charles", "Daniel", "David", "Edward", "Francis", "George", "Henry",
      "James", "John", "Joseph", "Louis", "Michael", "Paul", "Peter", "Robert", "Samuel", "Thomas", "William",
    ],
    female: [
      "Alice", "Anna", "Catherine", "Charlotte", "Elizabeth", "Emily", "Eva", "Grace", "Helen", "Jane", "Jean",
      "Julia", "Laura", "Louise", "Margaret", "Marie", "Mary", "Nancy", "Ruth", "Sarah", "Susan",
    ],
    surname: [
      "Agawa", "Assin", "Battice", "Beaulieu", "Bellanger", "Bissonette", "Cloud", "Corbiere", "Day",
      "Deschamps", "Fairbanks", "Fineday", "Geshick", "Goodsky", "Goodwill", "King", "LaDuke", "Littlewolf",
      "Manitowabi", "Morrison", "Nodin", "Ogemah", "Peltier", "Pine", "Sayers", "Shingwauk", "Stately",
      "Waasegiizhig", "Wabegijig", "Whitefeather",
    ],
  },

  // Common regions / communities: Viking-age Scandinavia, Iceland, Faroe Islands and Norse settlements in the North Atlantic.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "old-norse": {
    label: "Old Norse revival",
    surnameFirst: false,
    male: [
      "Áki", "Ásbjǫrn", "Ásgeirr", "Ásmundr", "Auðunn", "Bárðr", "Bjarki", "Bjǫrn", "Bragi", "Brandr",
      "Dagfinnr", "Egil", "Eiríkr", "Erlingr", "Eyjólfr", "Finnr", "Flóki", "Geirr", "Gísli", "Grímr",
      "Gunnarr", "Hákon", "Halfdan", "Haraldr", "Helgi", "Hjalmarr", "Hrafn", "Hrólfr", "Ívarr", "Ketill",
      "Kjartan", "Knútr", "Leifr", "Magnús", "Njáll", "Oddr", "Óláfr", "Ragnarr", "Sigurðr", "Snorri",
      "Steinarr", "Þórsteinn", "Þorkell", "Tryggvi", "Úlfr", "Yngvarr",
    ],
    female: [
      "Ása", "Áslaug", "Ástríðr", "Auðr", "Bergljót", "Brynhildr", "Dagný", "Eir", "Freydís", "Fríða",
      "Guðríðr", "Guðrún", "Gunnhildr", "Hallgerðr", "Helga", "Herdis", "Hildr", "Ingibjǫrg", "Ingriðr",
      "Jórunn", "Katla", "Ragnhildr", "Rúna", "Sigríðr", "Sólveig", "Steinunn", "Þóra", "Þórdís", "Tyra",
      "Unnr", "Valdís", "Ylva",
    ],
    surname: [
      "Bjarnason", "Egilsson", "Eiriksson", "Gunnarsson", "Hallsson", "Haraldsson", "Hrafnsson", "Ivarsson",
      "Ketilsson", "Knutsson", "Leifsson", "Magnusson", "Olafsson", "Ragnarsson", "Sigurdsson", "Snorrason",
      "Steinsson", "Thorsteinsson", "Thorkelsson", "Ulfsson", "Yngvarsson",
    ],
  },

  // Common regions / communities: Afghanistan and northwestern Pakistan, especially Khyber Pakhtunkhwa and Balochistan.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Second names include tribal and family identifiers, which are not universally inherited surnames.
  "pashtun": {
    label: "Pashtun / Pashto",
    surnameFirst: false,
    male: [
      "Ahmad", "Ajmal", "Akbar", "Asad", "Aimal", "Baryal", "Bilal", "Daud", "Farid", "Hamid", "Haroon",
      "Hashmat", "Hedayat", "Jalal", "Khalid", "Khushal", "Lal", "Mirwais", "Nangyal", "Nasir", "Nawaz",
      "Rahim", "Rahman", "Rashid", "Sami", "Shah", "Sher", "Tariq", "Wali", "Yousaf", "Zalmay", "Zarif",
    ],
    female: [
      "Adela", "Amina", "Anisa", "Arezo", "Asma", "Bibi", "Farida", "Fariha", "Gulalai", "Gul Bibi", "Hadia",
      "Hina", "Jamila", "Khadija", "Laila", "Malalai", "Marjan", "Maryam", "Meena", "Mina", "Nadia", "Nazanin",
      "Nazo", "Nooria", "Palwasha", "Parwana", "Rana", "Razia", "Shabnam", "Shazia", "Spogmai", "Suraya",
      "Zainab", "Zarghuna",
    ],
    surname: [
      "Ahmadzai", "Afridi", "Achakzai", "Barakzai", "Durrani", "Ghilzai", "Kakar", "Khattak", "Khan", "Lodi",
      "Luqmani", "Mahsud", "Mohmand", "Mangal", "Niazi", "Popalzai", "Safi", "Shinwari", "Suri", "Tareen",
      "Wazir", "Yousafzai", "Wardak", "Zadran", "Zazai",
    ],
  },

  // Common regions / communities: Iran, Afghanistan (Dari speakers), Tajikistan and Persian diaspora communities.
  // Original category — all original entries retained.
  "persian-iranian": {
    label: "Persian / Iranian",
    surnameFirst: false,
    male: [
      "Adel", "Ahmad", "Ali", "Amir", "Arash", "Ardeshir", "Arman", "Arya", "Babak", "Bahram", "Bijan",
      "Cyrus", "Dara", "Dariush", "Davood", "Ebrahim", "Farhad", "Farid", "Farshad", "Fereydoun", "Habib",
      "Hamid", "Hasan", "Hassan", "Hooman", "Hossein", "Iman", "Iraj", "Jafar", "Jalal", "Jamshid", "Javad",
      "Kambiz", "Kamran", "Karim", "Kaveh", "Kazem", "Keyvan", "Khosrow", "Kourosh", "Majid", "Masoud",
      "Mehdi", "Mehrdad", "Milad", "Mohammad", "Mohsen", "Mostafa", "Nader", "Navid", "Nima", "Omid", "Parsa",
      "Payam", "Peyman", "Pouya", "Ramin", "Reza", "Rostam", "Saeed", "Salar", "Saman", "Shahin", "Shahram",
      "Shapur", "Siamak", "Soheil", "Soroush", "Taher", "Vahid", "Yahya", "Yashar", "Yousef", "Arvin",
      "Behzad", "Darab", "Esfandiar", "Farzan", "Hormoz", "Jamshed", "Kasra", "Maziar", "Mehran", "Navaz",
      "Parviz", "Pedram", "Rashid", "Shervin", "Siavash", "Teymour", "Vafa", "Yadollah", "Zand", "Afshin",
      "Bahman", "Daryoush", "Jahan", "Shahriar", "Ziya",
    ],
    female: [
      "Afsaneh", "Anahita", "Arezoo", "Ariana", "Asal", "Atena", "Azadeh", "Bahar", "Banoo", "Baran", "Darya",
      "Delaram", "Donya", "Elaheh", "Elham", "Farah", "Fariba", "Farnaz", "Fatemeh", "Fereshteh", "Forough",
      "Golnaz", "Hanieh", "Hasti", "Homa", "Katayoun", "Kiana", "Leila", "Lida", "Mahin", "Mahnaz", "Maliheh",
      "Maryam", "Mina", "Mitra", "Mozhgan", "Nadia", "Nahid", "Nasim", "Nazanin", "Neda", "Negar", "Negin",
      "Niloufar", "Pari", "Parisa", "Rana", "Roxana", "Sahar", "Samira", "Sara", "Setareh", "Shabnam",
      "Shahla", "Shirin", "Soraya", "Tahmineh", "Taraneh", "Vida", "Yalda", "Yasaman", "Zahra", "Ziba",
      "Armita", "Azar", "Bahareh", "Delnaz", "Faezeh", "Ghazal", "Hengameh", "Jaleh", "Kimia", "Laleh",
      "Mahsa", "Mandana", "Melika", "Nasrin", "Parvaneh", "Pegah", "Pouran", "Roya", "Saba", "Sanaz", "Shadi",
      "Simin", "Tahereh", "Tannaz", "Viana", "Yeganeh", "Zhaleh", "Afra", "Bita", "Dorna", "Golsa", "Minoo",
      "Roshanak", "Sepideh", "Zarrin",
    ],
    surname: [
      "Ahmadi", "Akbari", "Alizadeh", "Amini", "Ansari", "Ardalan", "Asadi", "Azimi", "Bahrami", "Bakhtiari",
      "Darvishi", "Davari", "Ebrahimi", "Eskandari", "Farahani", "Farhadi", "Fathi", "Ghaffari", "Ghasemi",
      "Golshani", "Haddadi", "Hosseini", "Jafari", "Jalili", "Karimi", "Kazemi", "Khalili", "Khanjani",
      "Khosravi", "Mahdavi", "Maleki", "Mazaheri", "Mirzaei", "Mohammadi", "Moradi", "Naderi", "Najafi",
      "Naseri", "Nazari", "Noori", "Pahlavi", "Parsa", "Rahimi", "Rajabi", "Ranjbar", "Rostami", "Sadeghi",
      "Saeedi", "Safari", "Salehi", "Shahbazi", "Shahidi", "Sharifi", "Soleimani", "Taheri", "Tavakoli",
      "Valizadeh", "Yazdani", "Zand", "Zarei", "Abbasi", "Amiri", "Bahadori", "Daryaei", "Esmaili", "Fallahi",
      "Ghorbani", "Hamidi", "Javadi", "Kamali", "Khademi", "Lotfi", "Mahmoudi", "Mansouri", "Niknam",
      "Peymani", "Qasemi", "Rouhani", "Saberi", "Shirazi", "Tajik", "Vaziri", "Yousefi", "Zakeri", "Afshari",
      "Behnam", "Darabi", "Faramarzi", "Goudarzi", "Kermani", "Mehrabi", "Pakzad", "Rafiei", "Shokri",
      "Torabi", "Vafaei", "Zarrabi", "Alinejad", "Dehghani", "Moeini",
    ],
  },

  // Common regions / communities: Ancient Levant (especially coastal Lebanon) and Phoenician/Punic settlements, including Carthage in modern Tunisia.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Historical revival for sci-fi use. The second-name slot is adapted from historical family names, bynames, or attested personal-name elements; random pairing is not a reconstruction of ancient conventions. Includes revival forms and, where relevant, literary/mythological names; not all were everyday given names.
  "phoenician-punic": {
    label: "Phoenician / Punic revival",
    surnameFirst: false,
    male: [
      "Abdastart", "Abdmelqart", "Adonibaal", "Ahirom", "Azimilk", "Baalhanno", "Baalshillem", "Bodashtart",
      "Eshmunazar", "Hamilcar", "Hannibal", "Hanno", "Hasdrubal", "Himilco", "Hiram", "Ithobaal", "Mago",
      "Mattan", "Milkyaton", "Pumayyaton", "Yehawmilk",
    ],
    female: [
      "Elissa", "Dido", "Sophonisba", "Ashtart", "Astarte", "Amotastart", "Amatbaal", "Tanit", "Batnoam",
      "Yzebel", "Isebel",
    ],
    surname: [
      "Abdastart", "Ahirom", "Baalshillem", "Barca", "Bodashtart", "Eshmunazar", "Hamilcar", "Hannibal",
      "Hanno", "Hasdrubal", "Himilco", "Hiram", "Ithobaal", "Mago", "Mattan", "Milkyaton", "Pumayyaton",
    ],
  },

  // Common regions / communities: Poland and Polish diaspora communities.
  // Source: Faker 40.1.2 person provider(s): pl_PL; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "polish": {
    label: "Polish",
    surnameFirst: false,
    male: [
      "Adam", "Adrian", "Alan", "Albert", "Aleks", "Aleksander", "Alex", "Andrzej", "Antoni", "Arkadiusz",
      "Artur", "Bartek", "Borys", "Bruno", "Błażej", "Cezary", "Cyprian", "Damian", "Daniel", "Dariusz",
      "Dawid", "Dominik", "Emil", "Ernest", "Eryk", "Fabian", "Filip", "Franciszek", "Fryderyk", "Gabriel",
      "Grzegorz", "Gustaw", "Hubert", "Ignacy", "Igor", "Iwo", "Jacek", "Jakub", "Jan", "Jeremi", "Jerzy",
      "Julian", "Juliusz", "Józef", "Jędrzej", "Kacper", "Kajetan", "Kamil", "Karol", "Kazimierz", "Konrad",
      "Konstanty", "Kornel", "Krystian", "Krzysztof", "Ksawery", "Leon", "Leonard", "Maciej", "Maks",
      "Maksymilian", "Marcel", "Marcin", "Marek", "Mariusz", "Mateusz", "Maurycy", "Michał", "Mieszko",
      "Mikołaj", "Miłosz", "Natan", "Nataniel", "Nikodem", "Norbert", "Olaf", "Olgierd", "Oliwier", "Oskar",
      "Patryk", "Paweł", "Piotr", "Przemysław", "Radosław", "Rafał", "Robert", "Ryszard", "Sebastian",
      "Stanisław", "Stefan", "Szymon", "Tadeusz", "Tobiasz", "Tomasz", "Tymon", "Tymoteusz", "Wiktor",
      "Witold", "Wojciech", "Łukasz",
    ],
    female: [
      "Ada", "Adrianna", "Agnieszka", "Anastazja", "Angelika", "Aniela", "Anita", "Anna Maria", "Apolonia",
      "Aurelia", "Bianka", "Blanka", "Dagmara", "Dorota", "Eliza", "Elżbieta", "Ewa", "Ewelina", "Gaja", "Ida",
      "Inga", "Janina", "Julianna", "Julita", "Justyna", "Kaja", "Kalina", "Kamila", "Karina", "Klara",
      "Kornelia", "Krystyna", "Lidia", "Liwia", "Malwina", "Marcelina", "Marianna", "Marika", "Melania",
      "Monika", "Natasza", "Nela", "Nicole", "Olga", "Roksana", "Rozalia", "Róża", "Sandra", "Sara", "Sonia",
      "Sylwia", "Tola", "Urszula",
    ],
    surname: [
      "Doe",
    ],
  },

  // Common regions / communities: Polynesia and other Pacific islands; broad legacy pool.
  // Original category — all original entries retained.
  "polynesian-pacific-islander": {
    label: "Polynesian / Pacific Islander",
    surnameFirst: false,
    male: [
      "Afa", "Ahohako", "Aisake", "Akamu", "Anaru", "Apelu", "Ariiki", "Atamu", "Benesi", "Brennan", "Dane",
      "Ehau", "Enoka", "Fetu", "Haku", "Hemi", "Ikaika", "Ioane", "Kahale", "Kainoa", "Kaleo", "Kalani",
      "Kamaka", "Kana", "Kanoa", "Keahi", "Keanu", "Keiki", "Kelepi", "Kimo", "Laki", "Langi", "Lono", "Makai",
      "Maleko", "Mana", "Manu", "Maui", "Moana", "Nainoa", "Nalani", "Noa", "Paora", "Peni", "Rangi", "Rawiri",
      "Samu", "Sione", "Tama", "Tamati", "Taniela", "Tane", "Taonga", "Teiki", "Tevita", "Tiare", "Tui", "Ulu",
      "Vai", "Viliami", "Wiremu", "Aiono", "Fane", "Haunui", "Iosefa", "Kahurangi", "Kawika", "Keola", "Koa",
      "Lopeti", "Mahina", "Makani", "Malu", "Nuku", "Pita", "Ropati", "Tau", "Tavita", "Toa", "Uaine",
      "Vaikai", "Aisaki", "Filo", "Hokulea", "Kahiau", "Kekoa", "Lauaki", "Matai", "Niko", "Pounamu", "Taito",
      "Teiki", "Toetu", "Uaina", "Vaetoru", "Waiari", "Alekesio", "Hokupa", "Kaimana", "Matariki", "Pita",
    ],
    female: [
      "Ailani", "Alaula", "Alisi", "Anahera", "Anuhea", "Aroha", "Atarangi", "Eseta", "Fetia", "Haunani",
      "Hina", "Hokulani", "Ina", "Iolana", "Kaia", "Kalena", "Kalisi", "Kamea", "Kanae", "Keala", "Keilani",
      "Kiana", "Lagi", "Lehua", "Liana", "Litia", "Luana", "Mahina", "Malia", "Manaia", "Marama", "Mele",
      "Moana", "Moerani", "Nalani", "Noelani", "Oliana", "Pania", "Raina", "Rangi", "Sina", "Tahia", "Talise",
      "Tamara", "Tania", "Tehani", "Teuila", "Tiare", "Vaihere", "Vailea", "Alofa", "Anela", "Elenoa", "Halia",
      "Hine", "Irihapeti", "Kahealani", "Kailani", "Kalolaine", "Kanoe", "Leilani", "Lilo", "Lokelani",
      "Meleana", "Moanikeala", "Nanea", "Nohea", "Orama", "Pele", "Roselani", "Sala", "Tala", "Teiva", "Terii",
      "Vaiana", "Ahe", "Emalia", "Hinemoa", "Iwalani", "Kaimana", "Kiele", "Lani", "Melei", "Naia", "Poehina",
      "Rupe", "Taiana", "Tehani", "Uilani", "Vaimalama", "Akeliela", "Hokulani", "Kawehi", "Malie", "Noeline",
      "Teresa", "Vaitea", "Waiola",
    ],
    surname: [
      "Aholelei", "Aiono", "Akamu", "Alaimoana", "Anitoni", "Apelu", "Falaniko", "Fane", "Fonua", "Haangana",
      "Hale", "Iosefa", "Kahele", "Kahale", "Kaimana", "Kailani", "Kaleo", "Kalili", "Kamaka", "Kanekoa",
      "Kapule", "Kealoha", "Keanu", "Kelekolio", "Koa", "Latu", "Leiataua", "Lopeti", "Mafi", "Mahina",
      "Makani", "Malietoa", "Manu", "Mahelona", "Matai", "Moana", "Naone", "Niumataiwalu", "Noa", "Paki",
      "Pelekai", "Poha", "Ropati", "Satele", "Savea", "Sione", "Tagaloa", "Taiapa", "Taito", "Takai",
      "Talamaivao", "Tamatoa", "Tapu", "Taufa", "Te Rangi", "Tevai", "Tikoisuva", "Toleafoa", "Tuiasosopo",
      "Uluave", "Vaetoru", "Vainuku", "Vea", "Viliamu", "Waiari", "Afeaki", "Fotu", "Haami", "Kahanamoku",
      "Kaihe", "Kalama", "Kauahi", "Langi", "Leota", "Maivia", "Mataele", "Naufahu", "Pule", "Sefulu",
      "Taumoepeau", "Te Ariki", "Tokotaha", "Tuigamala", "Va'a", "Whaitiri", "Alaula", "Fakahau", "Hokulea",
      "Kahukura", "Lilo", "Moetaua", "Ngarimu", "Puleleiite", "Rangihuna", "Teokotai", "Ueligitone", "Vaipulu",
    ],
  },

  // Common regions / communities: Portugal, Brazil and the wider Portuguese-speaking world.
  // Source: Faker 40.1.2 person provider(s): pt_PT, pt_BR; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "portuguese-brazilian": {
    label: "Portuguese / Brazilian",
    surnameFirst: false,
    male: [
      "Afonso", "Alexandre", "André", "Anthony", "Anthony Gabriel", "António", "Apollo", "Arthur",
      "Arthur Gabriel", "Arthur Miguel", "Artur", "Asafe", "Augusto", "Benicio", "Benjamim", "Bento",
      "Benício", "Bernardo", "Brayan", "Breno", "Brian", "Bruno", "Bryan", "Caio", "Caleb", "Calebe", "Carlos",
      "Carlos Eduardo", "Cauã", "Cauê", "Cláudio", "Cristiano", "César", "Daniel", "Danilo", "Dante", "Davi",
      "Davi Lucas", "Davi Lucca", "Davi Luiz", "Davi Miguel", "Diego", "Dinis", "Dom", "Duarte", "Edgar",
      "Eduardo", "Emanuel", "Enrico", "Enzo", "Enzo Gabriel", "Felipe", "Fernando", "Filipe", "Francisco",
      "Frederico", "Fábio", "Gabriel", "Gael", "Gael Henrique", "Gaspar", "Gil", "Gonçalo", "Guilherme",
      "Gustavo", "Gustavo Henrique", "Heitor", "Henrique", "Henry", "Henry Gabriel", "Hugo", "Ian", "Igor",
      "Isaac", "Isaque", "Ismael", "Ivan", "Ivo", "Jaime", "Joaquim", "Jorge", "Josué", "José Miguel",
      "José Pedro", "João", "João Felipe", "João Gabriel", "João Guilherme", "João Lucas", "João Miguel",
      "João Pedro", "João Vitor", "Juan", "Kaique", "Kevin", "Kévim", "Leandro", "Levi", "Liam", "Lisandro",
      "Lorenzo", "Lourenço", "Luan", "Luca", "Lucas", "Lucas Gabriel", "Lucca", "Luigi", "Luiz Felipe",
      "Luiz Fernando", "Luiz Henrique", "Luiz Miguel", "Luiz Otávio", "Léo", "Manuel", "Marco",
      "Marcos Vinicius", "Martim", "Mateus", "Matheus", "Mathias", "Mauro", "Micael", "Miguel", "Murilo",
      "Márcio", "Mário", "Nathan", "Nelson", "Nicolas", "Noa", "Noah", "Nuno", "Oliver", "Otto", "Otávio",
      "Paulo", "Pedro", "Pedro Henrique", "Pedro Lucas", "Pedro Miguel", "Rael", "Raul", "Ravi Lucca", "Ravy",
      "Renato", "Rhavi", "Ricardo", "Rodrigo", "Rui", "Ryan", "Rúben", "Salvador", "Samuel", "Sandro",
      "Santiago", "Sebastião", "Simão", "Sérgio", "Thales", "Theo", "Theodoro", "Thiago", "Thomas", "Théo",
      "Tomás", "Tomé", "Vasco", "Vicente", "Vinicius", "Vinícius", "Vitor", "Vitor Gabriel", "Vítor", "Wilson",
      "Xavier", "Yan", "Yuri", "Álvaro", "Ângelo",
    ],
    female: [
      "Adriana", "Agatha", "Alana", "Alexandra", "Alexia", "Alice", "Allana", "Alícia", "Amanda", "Amélia",
      "Ana", "Ana Beatriz", "Ana Carolina", "Ana Cecília", "Ana Clara", "Ana Julia", "Ana Júlia", "Ana Laura",
      "Ana Liz", "Ana Lívia", "Ana Sophia", "Ana Vitória", "Anita", "Anna Liz", "Antonella", "Ariana", "Ayla",
      "Beatriz", "Bella", "Benedita", "Bianca", "Brenda", "Bruna", "Bárbara", "Caetana", "Camila", "Carlota",
      "Carminho", "Carolina", "Caroline", "Catarina", "Cecilia", "Cecília", "Clara", "Clarice", "Constança",
      "Daniela", "Diana", "Débora", "Eduarda", "Elisa", "Eloah", "Eloá", "Ema", "Emanuella", "Emanuelly",
      "Emilly", "Emma", "Emília", "Erica", "Erika", "Ester", "Esther", "Eva", "Fabiana", "Fernanda", "Flor",
      "Francisca", "Gabriela", "Gabrielly", "Giovanna", "Helena", "Hellena", "Heloisa", "Heloísa", "Iara",
      "Inês", "Irina", "Isabel", "Isabela", "Isabella", "Isabelly", "Isadora", "Jade", "Joana", "Julia",
      "Juliana", "Júlia", "Kamilly", "Kelly", "Lara", "Larissa", "Laura", "Lavínia", "Laís", "Leonor",
      "Letícia", "Lia", "Liz", "Lorena", "Luana", "Luara", "Luciana", "Lunna", "Luísa", "Lívia", "Madalena",
      "Mafalda", "Maitê", "Manuela", "Mara", "Marcela", "Margarida", "Maria", "Maria Alice", "Maria Cecília",
      "Maria Eduarda", "Maria Fernanda", "Maria Flor", "Maria Helena", "Maria Isis", "Maria Julia",
      "Maria Júlia", "Maria Liz", "Maria Luiza", "Maria Luísa", "Maria Sophia", "Maria Vitória", "Mariah",
      "Mariana", "Marina", "Marta", "Matilde", "Maya", "Maysa", "Melina", "Mia", "Milena", "Mirella", "Miriam",
      "Mélanie", "Naiara", "Nair", "Natália", "Nicole", "Nina", "Nádia", "Núria", "Olivia", "Olívia",
      "Patrícia", "Petra", "Pietra", "Pilar", "Rafaela", "Renata", "Rita", "Sabrina", "Salomé", "Sara",
      "Sarah", "Sofia", "Sophia", "Sophie", "Stella", "Tatiana", "Teresa", "Valentina", "Vera", "Victória",
      "Violeta", "Vitória", "Yara", "Yasmin", "Zoe", "Ágatha", "Ângela", "Érica", "Íris", "Ísis",
    ],
    surname: [
      "Abreu", "Albuquerque", "Almeida", "Alves", "Amaral", "Amorim", "Andrade", "Anjos", "Antunes",
      "Aparecida", "Aragão", "Araújo", "Assunção", "Azevedo", "Baptista", "Barbosa", "Barros", "Batista",
      "Borges", "Branco", "Brito", "Caldeira", "Camargo", "Campos", "Cardoso", "Carneiro", "Carvalho",
      "Casa Grande", "Cassiano", "Castro", "Cavalcante", "Cavalcanti", "Cirino", "Coelho", "Correia", "Costa",
      "Costela", "Cruz", "Cunha", "Câmara", "da Conceição", "da Costa", "da Cruz", "da Cunha", "da Luz",
      "da Mata", "da Mota", "da Paz", "da Rocha", "da Rosa", "das Neves", "Dias", "Domingues", "Duarte",
      "Esteves", "Faria", "Farias", "Fernandes", "Ferreira", "Figueiredo", "Fogaça", "Fonseca", "Freitas",
      "Garcia", "Gaspar", "Gomes", "Gonçalves", "Guerra", "Guerreiro", "Henriques", "Jesus", "Leal", "Leite",
      "Leão", "Lima", "Lopes", "Loureiro", "Lourenço", "Macedo", "Machado", "Magalhães", "Maia", "Marques",
      "Martins", "Matias", "Matos", "Melo", "Mendes", "Mendonça", "Miranda", "Monteiro", "Montenegro",
      "Moraes", "Morais", "Moreira", "Mota", "Moura", "Nascimento", "Neto", "Neves", "Nogueira", "Novaes",
      "Novais", "Nunes", "Oliveira", "Pacheco", "Paiva", "Pastor", "Peixoto", "Pereira", "Pimenta", "Pinheiro",
      "Pinho", "Pinto", "Pires", "Porto", "Ramos", "Reis", "Rezende", "Ribeiro", "Rios", "Rocha", "Rodrigues",
      "Sales", "Sampaio", "Santos", "Silva", "Silveira", "Simões", "Siqueira", "Soares", "Sousa", "Souza",
      "Sá", "Tavares", "Teixeira", "Torres", "Valente", "Vargas", "Vasconcelos", "Vaz", "Viana", "Vicente",
      "Vieira",
    ],
  },

  // Common regions / communities: Punjab in India and Pakistan, and diaspora communities; includes Sikh and other Punjabi naming.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Many Sikh given names are unisex. Singh and Kaur are traditionally gender-associated; current engine does not select surnames by gender.
  "punjabi": {
    label: "Punjabi / Sikh",
    surnameFirst: false,
    male: [
      "Amandeep", "Amarjeet", "Amrit", "Baldev", "Baljit", "Bikram", "Dalbir", "Daljit", "Gagandeep",
      "Gurdeep", "Gurpreet", "Gursharan", "Harbhajan", "Hardeep", "Harjit", "Harpreet", "Jasbir", "Jasdeep",
      "Jaspreet", "Jatinder", "Karan", "Kuldeep", "Maninder", "Manjeet", "Navdeep", "Parminder", "Prabhjot",
      "Rajinder", "Ranjit", "Ravinder", "Sandeep", "Satnam", "Simran", "Sukhdeep", "Sukhwinder",
    ],
    female: [
      "Amandeep", "Amarjit", "Amrit", "Anmol", "Baljit", "Daljit", "Gagandeep", "Gurleen", "Gurmeet",
      "Gurpreet", "Gursharan", "Harleen", "Harnoor", "Harpreet", "Jasbir", "Jasleen", "Jaspreet", "Kiran",
      "Kuldeep", "Maninder", "Manpreet", "Navdeep", "Navneet", "Nimrat", "Prabhjot", "Rajdeep", "Rajinder",
      "Ramandeep", "Ravneet", "Sandeep", "Simran", "Sukhdeep", "Sukhmani", "Taran", "Tejinder",
    ],
    surname: [
      "Singh", "Kaur", "Gill", "Sandhu", "Sidhu", "Dhillon", "Brar", "Bajwa", "Chahal", "Cheema", "Grewal",
      "Mann", "Randhawa", "Saini", "Bedi", "Sodhi", "Aulakh", "Bhullar", "Virk", "Toor", "Walia", "Sahota",
      "Chawla", "Kohli", "Arora", "Batra", "Chopra", "Anand",
    ],
  },

  // Common regions / communities: Quebec and other French-speaking Canadian communities.
  // Source: Faker 40.1.2 person provider(s): fr_CA; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "quebecois": {
    label: "Québécois",
    surnameFirst: false,
    male: [
      "Alain", "Alexandre", "Alexis", "André", "Antoine", "Arthur", "Benjamin", "Benoît", "Bernard",
      "Bertrand", "Charles", "Daniel", "David", "Denis", "Emmanuel", "François", "Frédéric", "Gabriel",
      "Georges", "Gilbert", "Gilles", "Grégoire", "Guillaume", "Guy", "Gérard", "Henri", "Hugues", "Jacques",
      "Jean", "Jonathan", "Joseph", "Jules", "Julien", "Jérôme", "Kevin", "Laurent", "Louis", "Luc", "Lucas",
      "Marc", "Marcel", "Martin", "Mathieu", "Maurice", "Maxime", "Michel", "Nathan", "Nicolas", "Noël",
      "Olivier", "Patrick", "Paul", "Philippe", "Pierre", "Raphaël", "Raymond", "René", "Richard", "Robert",
      "Roger", "Roland", "Rémy", "Samuel", "Stéphane", "Sébastien", "Thomas", "Théodore", "Timothée",
      "Tristan", "Victor", "Vincent", "William", "Xavier", "Yves", "Zacharie", "Édouard", "Émile", "Éric",
      "Étienne",
    ],
    female: [
      "Agnès", "Alex", "Alexandra", "Alice", "Amélie", "Anaïs", "Andrée", "Anne", "Anouk", "Astrid", "Audrey",
      "Aurore", "Aurélie", "Brigitte", "Béatrice", "Camille", "Caroline", "Catherine", "Chantal", "Charlotte",
      "Christelle", "Christiane", "Christine", "Claire", "Claude", "Claudine", "Clémence", "Colette",
      "Constance", "Cécile", "Célina", "Céline", "Danielle", "Denise", "Diane", "Dominique", "Dorothée",
      "Emma", "Emmanuelle", "Florence", "Françoise", "Frédérique", "Gabrielle", "Geneviève", "Henriette",
      "Hortense", "Hélène", "Isabelle", "Jacqueline", "Jeanne", "Jeannine", "Jessica", "Josette", "Joséphine",
      "Julie", "Juliette", "Karine", "Laetitia", "Laurence", "Laurie", "Lorraine", "Louise", "Lucie", "Lucy",
      "Manon", "Marcelle", "Margaret", "Margot", "Marguerite", "Marianne", "Marie", "Martine", "Maryse",
      "Mathilde", "Maude", "Michelle", "Michèle", "Monique", "Mélanie", "Nathalie", "Nicole", "Noémie",
      "Océane", "Odette", "Olivia", "Patricia", "Paulette", "Pauline", "Pénélope", "Renée", "Rosalie", "Sarah",
      "Simone", "Sophie", "Stéphanie", "Susanne", "Sylvie", "Thérèse", "Valérie", "Vanessa", "Virginie",
      "Véronique", "Zoé", "Édith", "Élisabeth", "Élise", "Élodie", "Éléonore", "Émilie",
    ],
    surname: [
      "Allard", "Archambault", "Arsenault", "Asselin", "Audet", "Auger", "Beaudry", "Beauregard", "Benoît",
      "Bergeron", "Bernard", "Bernier", "Bertrand", "Bilodeau", "Bisson", "Blais", "Blanchette", "Blouin",
      "Boily", "Boisvert", "Bolduc", "Boucher", "Boudreau", "Boulanger", "Boutin", "Brassard", "Breton",
      "Brisson", "Brunet", "Bédard", "Bégin", "Béland", "Bélisle", "Bérubé", "Carrier", "Chabot",
      "Charbonneau", "Charette", "Chartrand", "Chouinard", "Cloutier", "Cormier", "Coulombe", "Couture",
      "Croteau", "Cyr", "Daigle", "Dallaire", "Delisle", "Denis", "Desbiens", "Desrochers", "Desrosiers",
      "Dionne", "Doucet", "Drolet", "Dubois", "Dubé", "Dufour", "Duguay", "Dumas", "Dupont", "Dupuis", "Duval",
      "Ferland", "Fillion", "Forget", "Fournier", "Fréchette", "Gagnon", "Gaudreault", "Gauthier", "Gendron",
      "Germain", "Gervais", "Giguère", "Girard", "Giroux", "Gosselin", "Gravel", "Grégoire", "Gélinas",
      "Hamel", "Harvey", "Houde", "Houle", "Hébert", "Jean", "Labbé", "Labelle", "Labonté", "Labrecque",
      "Lacasse", "Lachapelle", "Lacroix", "Laflamme", "Laliberté", "Lalonde", "Lambert", "Lamontagne",
      "Landry", "Langlois", "Lapierre", "Lapointe", "Laroche", "Larocque", "Larose", "Larouche", "Lauzon",
      "Leblanc", "Leduc", "Legault", "Lemay", "Lemieux", "Lepage", "Lessard", "Maltais", "Marchand",
      "Marcotte", "Martel", "Martin", "Massé", "Moreau", "Morissette", "Ménard", "Nadeau", "Nguyen", "Ouellet",
      "Paquette", "Paquin", "Parent", "Paré", "Pelletier", "Perreault", "Perron", "Picard", "Plante",
      "Plourde", "Poirier", "Potvin", "Poulin", "Pouliot", "Proulx", "Provencher", "Provost", "Prévost",
      "Pépin", "Racine", "Raymond", "Richard", "Richer", "Rivard", "Roberge", "Rodrigue", "Rousseau", "Roy",
      "Savoie", "Simard", "Sirois", "Smith", "Soucy", "St-Jean", "St-Laurent", "St-Onge", "St-Pierre",
      "Tanguay", "Therrien", "Thibault", "Thibodeau", "Tremblay", "Trottier", "Trépanier", "Turgeon", "Vachon",
      "Vaillancourt", "Vallée", "Veilleux", "Villeneuve", "Vézina", "Émond",
    ],
  },

  // Common regions / communities: Andes: Peru, Bolivia, Ecuador, and parts of Colombia, Argentina and Chile.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Contemporary Andean civil surnames and modern or historical Quechua personal-name elements; overlaps Aymara and Spanish naming.
  "quechua": {
    label: "Quechua",
    surnameFirst: false,
    male: [
      "Amaru", "Apu", "Atahualpa", "Auqui", "Cusi", "Inti", "Manco", "Pachacuti", "Rumi", "Sinchi", "Túpac",
      "Yupanqui", "Sayri", "Titu", "Juan", "José", "Pedro", "Luis", "Miguel", "Santiago",
    ],
    female: [
      "Chaska", "Chasca", "Killa", "Quilla", "Sisa", "Sumac", "Sumaq", "Tika", "Kusi", "Urpi", "Wayra", "Yma",
      "Mama Ocllo", "Cusi Coyllur", "Ana", "María", "Rosa", "Juana", "Elena", "Luz",
    ],
    surname: [
      "Apaza", "Aucapiña", "Calisaya", "Ccalla", "Choque", "Condori", "Cusi", "Huamán", "Huanca", "Huayta",
      "Inca", "Mamani", "Mayta", "Paucar", "Quispe", "Sullca", "Ticona", "Túpac", "Yupanqui", "Huallpa",
      "Chambi", "Chura", "Vilca", "Cahuana", "Ccahuana", "Tito",
    ],
  },

  // Common regions / communities: Romani communities across Europe and the Americas; many regional and linguistic varieties.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Contemporary regional names used by some Romani people, not uniquely Romani names; many are shared with neighboring populations.
  "romani": {
    label: "Romani diaspora",
    surnameFirst: false,
    male: [
      "Adrian", "Alexandru", "Andrei", "Béla", "Dani", "Dorin", "Emil", "Ferenc", "Florin", "Gheorghe", "Ion",
      "Iosif", "János", "László", "Mihai", "Nicolae", "Petru", "Radu", "Sandor", "Stefan", "Vasile", "Zoltan",
    ],
    female: [
      "Ana", "Anca", "Andrea", "Carmen", "Cristina", "Daniela", "Elena", "Erzsébet", "Florina", "Gabriela",
      "Ilona", "Ileana", "Iulia", "Katalin", "Livia", "Maria", "Mariana", "Monika", "Nicoleta", "Roxana",
      "Simona", "Zsuzsa",
    ],
    surname: [
      "Balogh", "Bogdan", "Cioaba", "Danciu", "Farkas", "Horváth", "Lakatos", "Nagy", "Orsós", "Rácz",
      "Rostás", "Sandu", "Stancu", "Stoica", "Varga", "Vasilescu",
    ],
  },

  // Common regions / communities: Romania and Moldova.
  // Source: Faker 40.1.2 person provider(s): ro_RO; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "romanian": {
    label: "Romanian / Moldovan",
    surnameFirst: false,
    male: [
      "Adi", "Adrian", "Agnos", "Albert", "Alex", "Alexandru", "Alin", "Amedeu", "Amza", "Andrei", "Andrian",
      "Anghel", "Antim", "Antonie", "Antoniu", "Arian", "Aristide", "Arsenie", "Aurel", "Aurelian", "Aurică",
      "Avram", "Axinte", "Barbu", "Bernard", "Bogdan", "Bucur", "Bănel", "Cantemir", "Cazimir", "Cezar",
      "Claudiu", "Codrin", "Codruț", "Constantin", "Corvin", "Costel", "Crin", "Cristian", "Cristobal",
      "Călin", "Cătălin", "Dacian", "Damian", "Dan", "Daniel", "Darius", "David", "Decebal", "Dinu", "Dominic",
      "Dorian", "Dorinel", "Doru", "Ducu", "Dumitru", "Edmond", "Emanoil", "Emanuel", "Emanuil", "Eremia",
      "Eric", "Ernest", "Eugen", "Eusebiu", "Eustațiu", "Fabian", "Fiodor", "Flaviu", "Florentin", "Florian",
      "Frederic", "Gabi", "Gabriel", "Gelu", "George", "Georgel", "Gheorghe", "Gheorghiță", "Ghiță", "Gicu",
      "Gică", "Grațian", "Gregorian", "Grigore", "Haralamb", "Horațiu", "Horea", "Iancu", "Ianis", "Ieremia",
      "Ilarie", "Ilarion", "Ioan", "Ion", "Ionel", "Ionică", "Ionuț", "Iosif", "Iulian", "Iuliu", "Iustinian",
      "Ivan", "Jan", "Ladislau", "Lascăr", "Laurențiu", "Laurian", "Lazăr", "Leonard", "Leontin", "Leordean",
      "Lică", "Lorin", "Luca", "Lucian", "Lucrețiu", "Ludovic", "Marian", "Marius", "Martin", "Matei", "Maxim",
      "Maximilian", "Mihail", "Miron", "Mugur", "Mugurel", "Narcis", "Nechifor", "Nelu", "Nicodim", "Nicolaie",
      "Niculiță", "Nicuță", "Norbert", "Norman", "Octav", "Octavian", "Olimpian", "Olimpiu", "Oliviu",
      "Panagachie", "Panait", "Petre", "Petrișor", "Petru", "Pompiliu", "Pătru", "Radu", "Relu", "Robert",
      "Romeo", "Sandu", "Sava", "Sergiu", "Severin", "Silvian", "Silviu", "Sinică", "Sorin", "Stan", "Stelian",
      "Teohari", "Theodor", "Timotei", "Todor", "Toma", "Valentin", "Valeriu", "Valter", "Vasile", "Vicențiu",
      "Vincențiu", "Viorel", "Vladimir", "Vlaicu", "Voicu", "Zamfir", "Zeno",
    ],
    female: [
      "Ada", "Adelina", "Aida", "Albertina", "Alexandra", "Alida", "Alina", "Alis", "Amanda", "Amelia", "Ana",
      "Anabela", "Anaida", "Anastasia", "Ancuța", "Anda", "Andrada", "Andreea", "Anemona", "Aneta", "Angela",
      "Anica", "Ariadna", "Ariana", "Artemisa", "Atena", "Aurelia", "Aureliana", "Aurora", "Bogdana",
      "Brândușa", "Camelia", "Carmina", "Casiana", "Cezara", "Clara", "Clarisa", "Clementina", "Codruța",
      "Consuela", "Corina", "Cosmina", "Crenguța", "Cristina", "Cătălina", "Daiana", "Dalia", "Dana",
      "Daniela", "Dariana", "Delia", "Demetra", "Denisa", "Despina", "Diana", "Dida", "Dimitrina", "Dina",
      "Dorli", "Dumitrana", "Ecaterina", "Elisabeta", "Elisaveta", "Eliza", "Estera", "Eusebia", "Evanghelina",
      "Fabia", "Filofteia", "Fiona", "Flavia", "Floare", "Flora", "Florentina", "Florența", "Florina",
      "Frusina", "Geanina", "Georgeta", "Georgia", "Henrieta", "Heracleea", "Iasmina", "Ileana", "Ilinca",
      "Ina", "Ioanina", "Irina", "Iris", "Isabela", "Iustina", "Ivona", "Izabela", "Jana", "Laura",
      "Laurenția", "Leontina", "Leopoldina", "Letiția", "Lia", "Lili", "Livia", "Lorelei", "Lorena", "Luana",
      "Lucia", "Ludmila", "Ludovica", "Luminița", "Malvina", "Marcela", "Marga", "Margareta", "Maria",
      "Marinela", "Marioara", "Marta", "Matilda", "Melina", "Mihaela", "Minodora", "Mirona", "Mona",
      "Monalisa", "Monica", "Măriuca", "Narcisa", "Natalia", "Natașa", "Noemi", "Nora", "Norica", "Oana",
      "Octaviana", "Ofelia", "Olga", "Paraschiva", "Paulica", "Petruța", "Raluca", "Renata", "Rica", "Roberta",
      "Romanița", "Roxana", "Roza", "Ruxanda", "Ruxandra", "Sabrina", "Safta", "Salomea", "Sanda", "Saveta",
      "Sidonia", "Sofia", "Sorina", "Stanca", "Steluța", "Svetlana", "Tamara", "Teea", "Teodosia", "Teona",
      "Tinca", "Tincuța", "Valeria", "Vanesa", "Vasilica", "Venera", "Veronica", "Veta", "Vicenția", "Viorela",
      "Virginia", "Xenia", "Zaharia", "Zaraza", "Zenovia", "Zoe", "Ștefania",
    ],
    surname: [
      "Aanei", "Ababei", "Albu", "Ardelean", "Barbu", "Cristea", "Diaconescu", "Diaconu", "Dima", "Dinu",
      "Dobre", "Dochioiu", "Dumitrescu", "Eftimie", "Ene", "Florea", "Georgescu", "Gheorghiu", "Ionescu",
      "Ioniță", "Manole", "Marin", "Mazilescu", "Mocanu", "Nemeș", "Nistor", "Niță", "Oprea", "Pop", "Popa",
      "Popescu", "Preda", "Pușcașu", "Stan", "Stancu", "Stoica", "Stănescu", "Suciu", "Tabacu", "Toma",
      "Tomescu", "Tudor", "Voinea",
    ],
  },

  // Common regions / communities: Russia and Russian-speaking diaspora communities.
  // Source: Faker 40.1.2 person provider(s): ru_RU; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "russian": {
    label: "Russian",
    surnameFirst: false,
    male: [
      "Adam", "Adrian", "Afanasij", "Afinogen", "Agap", "Akim", "Aleksandr", "Amos", "Ananij", "Anatolij",
      "Andron", "Andronik", "Anikita", "Antip", "Apollon", "Arefij", "Arhip", "Arkadij", "Artem", "Artemij",
      "Avdej", "Avksentij", "Azarij", "Bogdan", "Boleslav", "Boris", "Borislav", "Bronislav", "Danila",
      "Davyd", "Denis", "Dmitrij", "Dobroslav", "Dorofej", "Efim", "Efrem", "Egor", "Elizar", "Ermolaj",
      "Evstafij", "Evstignej", "Fadej", "Fedosij", "Feliks", "Feofan", "Ferapont", "Filaret", "Filipp",
      "Florentin", "Fortunat", "Galaktion", "Gedeon", "Gennadij", "Georgij", "Gerasim", "Gostomysl",
      "Grigorij", "Hariton", "Harlampij", "Ilarion", "Ipat", "Ippolit", "Iraklij", "Isidor", "Ivan", "Izmail",
      "Izâslav", "Kallistrat", "Kapiton", "Karl", "Kim", "Kir", "Kirill", "Kliment", "Kondratij", "Konon",
      "Konstantin", "Kornil", "Ladimir", "Leon", "Leonid", "Leontij", "Luka", "Lučezar", "Lûbim", "Lûbomir",
      "Marian", "Martyn", "Mefodij", "Mečislav", "Milan", "Milen", "Milovan", "Mina", "Miron", "Mitofan",
      "Mokej", "Narkis", "Natan", "Nifont", "Nikifor", "Nikodim", "Nikolaj", "Nikon", "Oleg", "Olimpij",
      "Onufrij", "Osip", "Ostap", "Ostromir", "Pahom", "Paramon", "Parfen", "Pavel", "Petr", "Pimen",
      "Polikarp", "Potap", "Prohor", "Prokofij", "Prov", "Radislav", "Radovan", "Rodion", "Roman", "Rostislav",
      "Ruben", "Ruslan", "Rûrik", "Samuil", "Savvatij", "Semen", "Sergej", "Sidor", "Simon", "Sofon", "Sofron",
      "Sokrat", "Solomon", "Spartak", "Stanislav", "Stepan", "Svetozar", "Svâtopolk", "Taras", "Tihon",
      "Timofej", "Timur", "Trifon", "Ustin", "Vadim", "Valentin", "Varfolomej", "Vasilij", "Venedikt",
      "Veniamin", "Vikentij", "Viktor", "Vitalij", "Vladimir", "Vlas", "Vsemil", "Vsevolod", "Vyšeslav",
      "Vâčeslav", "Zinovij", "Zosima", "Âkov", "Âkub", "Ân", "Ânuarij", "Âropolk", "Âroslav", "Émmanuil",
      "Érast", "Érnest", "Érnst", "Ûlian", "Ûlij", "Česlav",
    ],
    female: [
      "Agata", "Akulina", "Aleksandra", "Alevtina", "Alina", "Alla", "Anastasiâ", "Angelina", "Anna",
      "Antonina", "Anžela", "Anželika", "Ekaterina", "Elena", "Elizaveta", "Evdokiâ", "Evfrosiniâ", "Evgeniâ",
      "Evpraksiâ", "Faina", "Fevroniâ", "Fëkla", "Galina", "Glafira", "Iraida", "Irina", "Ivanna", "Iâ",
      "Kira", "Klavdiâ", "Kseniâ", "Larisa", "Lidiâ", "Lora", "Lukiâ", "Lûdmila", "Majâ", "Marfa", "Margarita",
      "Marina", "Mariâ", "Milica", "Nadežda", "Naina", "Nina", "Nonna", "Oksana", "Oktâbrina", "Olimpiada",
      "Pelageâ", "Polina", "Raisa", "Regina", "Sinklitikiâ", "Sofiâ", "Svetlana", "Taisiâ", "Tamara",
      "Valentina", "Valeriâ", "Varvara", "Vasilisa", "Vera", "Veronika", "Viktoriâ", "Zinaida", "Zoâ",
      "Éleonora", "Émiliâ", "Ûliâ", "Žanna",
    ],
    surname: [
      "Agafonov", "Aksenov", "Aleksandrova", "Andreev", "Anisimov", "Antonov", "Arhipova", "Avdeeva",
      "Baranova", "Belousova", "Belova", "Belozerov", "Belâeva", "Birûkov", "Blinov", "Blinova", "Bobrov",
      "Bobyleva", "Bogdanova", "Borisov", "Bragina", "Burov", "Bykova", "Danilova", "Denisov", "Dmitriev",
      "Doronina", "Efremov", "Ermakov", "Eršov", "Evseev", "Fedoseev", "Fedotov", "Fedotova", "Filatova",
      "Filippov", "Fokin", "Fomina", "Fomičev", "Fomičeva", "Frolova", "Gerasimov", "Gorbačev", "Gordeev",
      "Grišin", "Gromov", "Gromova", "Gusev", "Guseva", "Hohlova", "Ignatov", "Ignatova", "Ivanova",
      "Kalašnikov", "Kalinin", "Kapustin", "Kapustina", "Karpov", "Karpova", "Kirillov", "Kiselev", "Kiseleva",
      "Knâzeva", "Kolesnikov", "Kolobova", "Komarov", "Komissarov", "Konovalova", "Konstantinov", "Kopylova",
      "Kornilova", "Korolev", "Kostin", "Kostina", "Kovalev", "Kozlova", "Košelev", "Kudrâvcev", "Kudrâšov",
      "Kulagina", "Kulakov", "Kulikov", "Kulikova", "Kuznecov", "Larionov", "Larionova", "Lebedeva", "Lihačev",
      "Lobanov", "Lukina", "Lytkin", "Lytkina", "Makarov", "Mamontov", "Martynov", "Martynova", "Maslov",
      "Matveev", "Matveeva", "Merkuševa", "Miheev", "Mironov", "Mišin", "Molčanova", "Morozov", "Morozova",
      "Naumov", "Nekrasov", "Nesterov", "Nikitina", "Nikonova", "Noskova", "Nosov", "Novikov", "Novikova",
      "Orehov", "Osipova", "Ovčinnikov", "Ovčinnikova", "Pahomov", "Panov", "Pavlova", "Pestova", "Petrov",
      "Petrova", "Prohorov", "Rogova", "Romanov", "Rožkov", "Rybakova", "Râbova", "Samojlov", "Sazonova",
      "Selezneva", "Semenov", "Sidorov", "Silin", "Simonov", "Sitnikova", "Smirnova", "Sorokina", "Stepanova",
      "Subbotin", "Subbotina", "Suvorov", "Suvorova", "Sysoev", "Sysoeva", "Timofeeva", "Turov", "Ustinova",
      "Uvarov", "Uvarova", "Veselov", "Veselova", "Vladimirov", "Vlasov", "Vlasova", "Volkova", "Voroncova",
      "Voronov", "Zajceva", "Zuev", "Zueva", "Zykov", "Âkovleva", "Âkuševa", "Ûdin", "Ŝerbakova", "Šarov",
      "Šarova", "Šaškov", "Šestakov", "Šestakova", "Širâev", "Šubin", "Šubina", "Ždanov", "Ždanova", "Žukov",
    ],
  },

  // Common regions / communities: Sápmi: northern Norway, Sweden, Finland and the Kola Peninsula of Russia.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Includes Sámi forms and names shared with surrounding Nordic communities.
  "sami": {
    label: "Sámi",
    surnameFirst: false,
    male: [
      "Ánde", "Ánte", "Áslat", "Biera", "Elias", "Heaika", "Isak", "Jovnna", "Juhán", "Máhtte", "Nils",
      "Niillas", "Olle", "Piera", "Sámmol", "Tore",
    ],
    female: [
      "Ánne", "Ánne Márjá", "Áslaug", "Biret", "Elle", "Ellen", "Iŋgá", "Inga", "Máret", "Márjá", "Marja",
      "Rávdná", "Risten", "Sárá", "Sire", "Sofia", "Ánne Risten", "Aili", "Laila", "Sanna",
    ],
    surname: [
      "Anti", "Aikio", "Balto", "Bongo", "Eira", "Gaup", "Hætta", "Hansen", "Huuva", "Isaksen", "Jannok",
      "Kemi", "Kuhmunen", "Labba", "Länsman", "Magga", "Mathisen", "Näkkäläjärvi", "Oskal", "Paltto",
      "Porsanger", "Ravna", "Sara", "Somby", "Utsi", "Vars", "Valkeapää",
    ],
  },

  // Common regions / communities: Samoa, American Samoa and Samoan communities in New Zealand, Australia and the United States.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Some public second names are associated with chiefly titles and family affiliations; treated as future civil names rather than assigning real titles.
  "samoan": {
    label: "Samoan",
    surnameFirst: false,
    male: [
      "Afa", "Aiono", "Alofa", "Aso", "Eli", "Faalogo", "Fale", "Fetui", "Iosefa", "Ioane", "Ioelu", "Iopu",
      "Isaia", "Laki", "Lemalu", "Luka", "Malaki", "Manu", "Mika", "Mose", "Peni", "Sione", "Tavita", "Tui",
      "Uili", "Viliamu",
    ],
    female: [
      "Ailao", "Alofa", "Ana", "Ane", "Eseta", "Faaola", "Fetu", "Fiafia", "Iuni", "Lagi", "Lani", "Lina",
      "Lupe", "Malia", "Mele", "Moana", "Nafanua", "Nia", "Penina", "Pua", "Rosa", "Sina", "Sosefina", "Tala",
      "Telesia", "Tofiga",
    ],
    surname: [
      "Aiono", "Alaimalo", "Amosa", "Anesi", "Asiata", "Faafoi", "Faalogo", "Faamatuainu", "Faalavelave",
      "Fepuleai", "Fiaui", "Fuimaono", "Ieremia", "Iosefa", "Leota", "Lemalu", "Lio", "Mauga", "Muliaga",
      "Paea", "Palelei", "Petaia", "Pule", "Satele", "Savea", "Sio", "Sua", "Tafua", "Taufeteʻe", "Tuilagi",
      "Tuivasa", "Vaai",
    ],
  },

  // Common regions / communities: Denmark, Norway and Sweden.
  // Source: Faker 40.1.2 person provider(s): da_DK, no_NO, sv_SE; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "scandinavian": {
    label: "Scandinavian",
    surnameFirst: false,
    male: [
      "Abbas", "Agne", "Alan", "Albert", "Alve", "Amin", "Amir", "Andreas", "Andréas", "Antero", "Antonio",
      "Arild", "Aron", "Artur", "Aston", "Axel", "Ben", "Berndt", "Birger", "Boris", "Bror", "Bøje", "Charlie",
      "Claes", "Colin", "Conny", "Dennis", "Edgar", "Edvard", "Edvin", "Egil", "Elis", "Elton", "Emilio",
      "Erik", "Felix", "Filip", "Frede", "Fredrik", "Gerhard", "Gert", "Gorm", "Gottfrid", "Gunnar", "Gustaf",
      "Hamza", "Hans", "Harald", "Helge", "Helmer", "Henric", "Herman", "Hjalte", "Holger", "Hussein", "Ib",
      "Ibrahim", "Ingmar", "Isak", "Ismail", "Iver", "James", "Jan-Erik", "Jari", "Jean", "Jerry", "Jimmy",
      "Joachim", "Johnny", "Jon", "Jonas", "Jose", "José", "Julian", "Julius", "Junior", "Jörgen", "Karl",
      "Kenn", "Khalid", "Kjetil", "Klavs", "Knut", "Konrad", "Kristian", "Kåre", "Lars", "Lars-Åke", "Laust",
      "Leon", "Loui", "Louis", "Lucas", "Ludvig", "Lukas", "Magnus", "Mahdi", "Malthe", "Manfred", "Marcin",
      "Mark", "Matheo", "Matthias", "Mauritz", "Max", "Maximilian", "Melvin", "Michal", "Miguel", "Mik",
      "Mikkel", "Milo", "Milton", "Mogens", "Mohamed", "Mohammad", "Morgan", "Muhammad", "Niclas", "Nicolai",
      "Nikola", "Nikolai", "Noah", "Olle", "Omar", "Oskar", "Palle", "Patric", "Peder", "Per-Erik", "Pete",
      "Petter", "Philip", "Piotr", "Poul", "Pål", "Ragner", "Ralf", "Reine", "René", "Richard", "Roger",
      "Roland", "Ron", "Ronnie", "Samir", "Sander", "Stefan", "Steve", "Sture", "Svante", "Svein", "Sverre",
      "Sören", "Teodor", "Thure", "Timmy", "Timo", "Tobias", "Tomas", "Tony", "Troels", "Urban", "Vagn",
      "Valentin", "Vegard", "Verner", "Vidar", "Viktor", "Vilgot", "Vilhelm", "Ville", "Walter", "Wilhelm",
      "Yannick", "Yousef", "Åbjørn", "Östen", "Øivind", "Øystein",
    ],
    female: [
      "Agnieszka", "Aina", "Aleksandra", "Alexandra", "Alva", "Andrea", "Angelica", "Angelina", "Ann-Britt",
      "Ann-Christin", "Ann-Mari", "Anna-Lena", "Annelie", "Annica", "Antonia", "Astrid", "Beatrice", "Bente",
      "Bianca", "Birgitta", "Bitten", "Cassandra", "Catarina", "Catharina", "Catrine", "Cecilie", "Charlotte",
      "Christin", "Connie", "Cornelia", "Daniella", "Desirée", "Dina", "Doris", "Ebba", "Edit", "Eira",
      "Elisa", "Elisabet", "Ella", "Ellie", "Elly", "Elna", "Emily", "Emmy", "Erica", "Esther", "Eva",
      "Evelina", "Fredrika", "Gitte", "Gro", "Gun", "Gun-Britt", "Gunhild", "Hannele", "Harriet", "Helen",
      "Helene", "Hussein", "Idun", "Ilona", "Ines", "Ing-Marie", "Inga", "Inga-Lill", "Ingalill", "Inge",
      "Ingegerd", "Ingelise", "Irma", "Isa", "Isabel", "Isabelle", "Jacqueline", "Jeanette", "Jennie",
      "Jennifer", "Jessica", "Jill", "Johanna", "Joline", "Josefin", "Josephine", "Julia", "Juni", "Kaarina",
      "Karina", "Karla", "Katarzyna", "Katharina", "Katrine", "Kjersti", "Kristina", "Laura", "Lea", "Leah",
      "Leia", "Lena", "Lene", "Liisa", "Lilian", "Lillemor", "Linnéa", "Lisbet", "Lise-Lotte", "Liselott",
      "Lone", "Lotte", "Lova", "Madeleine", "Magdalena", "Maj", "Maj-Britt", "Malva", "Maren", "Margot",
      "Marianne", "Marta", "Meja", "Mia", "Michaela", "Michala", "Mila", "Mira", "Monica", "Monika", "Nadia",
      "Naja", "Nanna", "Nanni", "Natalie", "Nathalie", "Nellie", "Nicoline", "Olivia", "Patricia", "Randi",
      "Regitze", "Rikke", "Ronja", "Rosita", "Ruth", "Sabine", "Saga", "Sanna", "Signe", "Silje", "Simone",
      "Siri", "Solvej", "Svea", "Sys", "Sørine", "Søs", "Terese", "Teresia", "Theres", "Tone", "Turid", "Tyra",
      "Ulla", "Ulla-Britt", "Ulrica", "Ulrika", "Ulrike", "Unni", "Ursula", "Valentina", "Veronica",
      "Victoria", "Vilde", "Vilhelmina", "Viola", "Viveka", "Weena", "Wilma", "Xenia", "Yda", "Ylva",
    ],
    surname: [
      "Abbas", "Abrahamsen", "Ahlin", "Ahlström", "Ahmadi", "Almqvist", "Andersen", "Andresen", "Antonsen",
      "Aronsson", "Asp", "Bakke", "Bech", "Berg", "Berggren", "Bergström", "Berntsson", "Björklund", "Blom",
      "Blomberg", "Blomgren", "Borg", "Borgström", "Brodin", "Brolin", "Bruun", "Burman", "Bylund", "Carlsen",
      "Carlson", "Dam", "Edström", "Eide", "Einarsson", "Ekdahl", "Ekholm", "Eklund", "Ekstrand", "Ekström",
      "Ellingsen", "Engen", "Englund", "Engman", "Ericson", "Ericsson", "Eriksson", "Falk", "Forsberg",
      "Forsgren", "Fransson", "Franzén", "Fredriksson", "Grahn", "Gundersen", "Göransson", "Hagberg",
      "Haglund", "Hall", "Hallberg", "Hallin", "Halvorsen", "Hammarström", "Hansen", "Hasan", "Haug", "Haugen",
      "Hedman", "Hedström", "Hellgren", "Hellman", "Holm", "Holst", "Hult", "Hägg", "Issa", "Jacobsen",
      "Jansson", "Jespersen", "Johannesson", "Johansen", "Jonsson", "Josefsson", "Karlström", "Kjeldsen",
      "Knudsen", "Knutsson", "Kristiansson", "Källström", "Landin", "Larsson", "Laursen", "Lennartsson", "Lie",
      "Lind", "Lindahl", "Lindblad", "Lindblom", "Linde", "Lindell", "Lindgren", "Lindkvist", "Lindvall",
      "Ljungberg", "Ljungqvist", "Lundell", "Lundmark", "Lundqvist", "Lundström", "Löf", "Malmberg",
      "Malmgren", "Malmström", "Martinsen", "Martinsson", "Mathiasen", "Mogensen", "Mohamed", "Mohammed",
      "Möller", "Nielsen", "Nilsson", "Nordberg", "Nordgren", "Norling", "Norrman", "Norén", "Nylén", "Nyman",
      "Olander", "Overgaard", "Paulsen", "Pedersen", "Persson", "Pihl", "Rask", "Rasmussen", "Rosenberg",
      "Roth", "Ruud", "Rydén", "Sandberg", "Sandström", "Sandvik", "Schmidt", "Schou", "Schultz", "Sjölander",
      "Sjölin", "Sjöstrand", "Skoglund", "Smith", "Solheim", "Steen", "Steffensen", "Sundin", "Sundqvist",
      "Svanberg", "Svedberg", "Svendsen", "Svensson", "Sæther", "Sörensen", "Søndergaard", "Thomassen",
      "Thorsen", "Torstensson", "Turesson", "Vallin", "Vestin", "Viklund", "Vikström", "Wallgren", "Wang",
      "Westin", "Westlund", "Westman", "Wiberg", "Åkerlund", "Åsberg", "Åslund",
    ],
  },

  // Common regions / communities: Ethiopia and Eritrea, especially speakers of Ethiopian Semitic languages.
  // Original category — all original entries retained.
  "semitic-ethiopic": {
    label: "Semitic / Ethiopic",
    surnameFirst: false,
    male: [
      "Abay", "Abebe", "Abel", "Abraham", "Adane", "Admasu", "Aklilu", "Alemayehu", "Amare", "Amanuel",
      "Asfaw", "Assefa", "Awet", "Ayana", "Bekele", "Berhane", "Berhanu", "Binyam", "Dagmawi", "Dawit",
      "Demeke", "Dereje", "Elias", "Endalkachew", "Ephrem", "Ermias", "Eyob", "Fikru", "Fitsum", "Fisseha",
      "Gabre", "Gebre", "Gebremariam", "Getachew", "Girma", "Habte", "Haile", "Hailemariam", "Hailu", "Henok",
      "Kidane", "Kidus", "Kiros", "Mebratu", "Mekonnen", "Melaku", "Meron", "Mihret", "Mohammed", "Mulugeta",
      "Nahom", "Natnael", "Negasi", "Nigatu", "Robel", "Samuel", "Semere", "Seyoum", "Solomon", "Tadesse",
      "Tamirat", "Tamrat", "Tekle", "Temesgen", "Tesfahun", "Tesfaye", "Tewelde", "Tewodros", "Tilahun",
      "Welde", "Woldemariam", "Workneh", "Yared", "Yemane", "Yilma", "Yohannes", "Yonas", "Yosef", "Yussuf",
      "Zelalem", "Zerihun", "Abraha", "Atsbha", "Beraki", "Desta", "Ghebremeskel", "Hagos", "Isaias", "Kebede",
      "Negus", "Shiferaw", "Tsegaye", "Wassie", "Yitbarek", "Zenawi",
    ],
    female: [
      "Aster", "Abeba", "Alem", "Almaz", "Aster", "Awet", "Ayan", "Ayantu", "Birtukan", "Chaltu", "Dagmawit",
      "Eden", "Eleni", "Elsabet", "Emebet", "Eyerusalem", "Feven", "Fikirte", "Genet", "Haben", "Hadas",
      "Hanna", "Helen", "Hiwot", "Hodan", "Ilili", "Lemlem", "Liya", "Mahlet", "Marta", "Medina", "Mekdes",
      "Meron", "Meseret", "Mimi", "Muna", "Nardos", "Netsanet", "Rahel", "Rediet", "Ruth", "Saba", "Samrawit",
      "Sara", "Selam", "Selamawit", "Senait", "Sofia", "Tigist", "Tsedenia", "Tsion", "Winta", "Worknesh",
      "Yasmin", "Yodit", "Zahara", "Zeinab", "Zemen", "Abrehet", "Askale", "Blen", "Desta", "Eyerus", "Fikir",
      "Haimanot", "Hawi", "Kidist", "Lulit", "Mahder", "Meklit", "Mulu", "Nafkot", "Roman", "Saron", "Seble",
      "Sena", "Sosina", "Tewabech", "Tiruwork", "Wegayehu", "Yordanos", "Zebiba", "Aida", "Buzayehu",
      "Dinknesh", "Etsegenet", "Frehiwot", "Genna", "Habiba", "Kalkidan", "Mebrhit", "Rakeb", "Sahle", "Tsega",
      "Zufan", "Asteray", "Belesh", "Sefanit",
    ],
    surname: [
      "Abebe", "Abraham", "Adane", "Alemayehu", "Asfaw", "Assefa", "Awoke", "Bekele", "Berhane", "Berhe",
      "Berihu", "Beyene", "Demissie", "Derebe", "Desta", "Ephrem", "Eshetu", "Fekadu", "Fisseha", "Gebre",
      "Gebremariam", "Gebreselassie", "Getachew", "Ghebreyesus", "Girma", "Haile", "Hailemariam", "Hailu",
      "Hassen", "Ibrahim", "Kidane", "Kiros", "Mebratu", "Mekonnen", "Melaku", "Mengesha", "Mohammed", "Molla",
      "Negash", "Nigussie", "Reda", "Sahle", "Samson", "Semere", "Seyoum", "Shiferaw", "Solomon", "Tadesse",
      "Tamirat", "Tamru", "Tekle", "Temesgen", "Tesfaye", "Tewelde", "Tewodros", "Tilahun", "Welde",
      "Woldemariam", "Worku", "Yared", "Yilma", "Yohannes", "Yosef", "Zelalem", "Zerihun", "Abraha", "Aregawi",
      "Asmelash", "Beraki", "Debebe", "Fikremariam", "Gebru", "Ghebremichael", "Hagos", "Kebede", "Kidus",
      "Mamo", "Mebrahtu", "Negasi", "Reta", "Teshome", "Tesfamariam", "Tesfamichael", "Weldeslassie", "Yemane",
      "Aklilu", "Bereded", "Dawit", "Endale", "Girmay", "Habte", "Kassa", "Meklit", "Negusse", "Tsegaye",
      "Wassie", "Yitbarek", "Zenebe",
    ],
  },

  // Common regions / communities: Jewish communities descended from Iberian Jews, especially in Morocco, Turkey, Greece, the Balkans, Israel and the Americas.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Includes some overlapping North African Jewish traditions; shared civil surnames are not proof of ancestry.
  "sephardic": {
    label: "Sephardic Jewish",
    surnameFirst: false,
    male: [
      "Abraham", "Alberto", "Avraham", "David", "Daniel", "Elias", "Eliezer", "Emmanuel", "Ezra", "Gabriel",
      "Isaac", "Jacob", "Jaime", "Jose", "Judah", "Leon", "Maimon", "Manuel", "Moisés", "Mordechai", "Nissim",
      "Rafael", "Salomon", "Samuel", "Yitzhak", "Yosef",
    ],
    female: [
      "Adela", "Allegra", "Alma", "Amada", "Bella", "Benvinda", "Bona", "Clara", "Esther", "Fortuna", "Gracia",
      "Hana", "Jamila", "Judith", "Lea", "Luna", "Miriam", "Nina", "Paloma", "Rachel", "Raquel", "Reina",
      "Rica", "Rosa", "Ruth", "Sara", "Sol", "Vida",
    ],
    surname: [
      "Abecassis", "Abensur", "Abitbol", "Aboulafia", "Abulafia", "Abravanel", "Aflalo", "Alhadeff",
      "Almosnino", "Amar", "Amzalag", "Anidjar", "Aroesti", "Assael", "Azoulay", "Benarroch", "Benatar",
      "Bendahan", "Bensimon", "Benveniste", "Bitton", "Bouskila", "Caro", "Cohen", "Curiel", "de Castro",
      "de Leon", "de Toledo", "Ergas", "Franco", "Galante", "Gabay", "Halevi", "Laniado", "Lopes", "Maimon",
      "Nahmias", "Pardo", "Pereira", "Pinto", "Toledano", "Zafrani",
    ],
  },

  // Common regions / communities: Sri Lanka, predominantly Sinhalese communities and diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Simplifies longer house-name and family-name patterns.
  "sinhala": {
    label: "Sinhala",
    surnameFirst: false,
    male: [
      "Ajith", "Amal", "Ananda", "Anura", "Asanka", "Buddhika", "Chaminda", "Chandana", "Chathura", "Danushka",
      "Dilshan", "Dinesh", "Duminda", "Gayan", "Hemantha", "Janaka", "Kasun", "Lahiru", "Lasith", "Mahinda",
      "Nalin", "Nimal", "Nuwan", "Pradeep", "Ranjith", "Ravindra", "Roshan", "Ruwan", "Saman", "Sampath",
      "Sanath", "Sarath", "Sujith", "Sunil", "Tharindu", "Upul",
    ],
    female: [
      "Achala", "Anjali", "Anoma", "Anuradha", "Ayomi", "Chandani", "Chamari", "Chathurika", "Dilani",
      "Dilini", "Dinushi", "Gayani", "Hashini", "Himali", "Inoka", "Iresha", "Janani", "Kaushalya", "Kumari",
      "Lakmali", "Madhavi", "Malini", "Nadeesha", "Nandani", "Nimali", "Nisansala", "Pavithra", "Piyumi",
      "Rashmi", "Samanthi", "Sanduni", "Shalini", "Subhashini", "Tharushi", "Upeksha",
    ],
    surname: [
      "Abeysekera", "Bandara", "Dissanayake", "Ekanayake", "Fernando", "Gunasekara", "Gunawardena", "Herath",
      "Jayasuriya", "Jayasinghe", "Jayawardena", "Karunaratne", "Kulasekara", "Liyanage", "Perera",
      "Rajapaksa", "Ranatunga", "Ratnayake", "Samarasinghe", "Senanayake", "Silva", "Siriwardena",
      "Wickramasinghe", "Wijesinghe", "Wijewardena",
    ],
  },

  // Common regions / communities: Somalia, Somaliland, Djibouti, eastern Ethiopia and northeastern Kenya; diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Somali names traditionally use a personal name followed by father’s and grandfather’s personal names, not a hereditary surname. The surname pool contains patronymic elements for a future two-part system.
  "somali": {
    label: "Somali",
    surnameFirst: false,
    male: [
      "Abdi", "Abdirahman", "Abdullahi", "Abshir", "Ahmed", "Ali", "Aden", "Awale", "Bashir", "Burhan",
      "Cabdi", "Cumar", "Farah", "Faysal", "Hassan", "Hussein", "Ibrahim", "Ismail", "Jama", "Khalid", "Liban",
      "Mahad", "Mohamed", "Muse", "Nur", "Omar", "Osman", "Said", "Salah", "Samatar", "Sharmarke", "Warsame",
      "Yusuf", "Zakariye",
    ],
    female: [
      "Aamina", "Aisha", "Amal", "Ayaan", "Bilan", "Deeqa", "Faduma", "Fartun", "Farhiya", "Hani", "Hawo",
      "Hodan", "Huda", "Idil", "Ifrah", "Ilhan", "Khadra", "Khadija", "Leyla", "Luul", "Maryan", "Muna",
      "Nadifa", "Nasra", "Nimco", "Nura", "Rahma", "Sahra", "Samira", "Shukri", "Sucaad", "Ubah", "Yasmin",
      "Zahra",
    ],
    surname: [
      "Abdi", "Abdirahman", "Abdullahi", "Aden", "Ahmed", "Ali", "Awale", "Farah", "Hassan", "Hussein",
      "Ibrahim", "Ismail", "Jama", "Liban", "Mahad", "Mohamed", "Muse", "Nur", "Omar", "Osman", "Said",
      "Samatar", "Sharmarke", "Warsame", "Yusuf",
    ],
  },

  // Common regions / communities: Croatia, Bosnia and Herzegovina, Slovenia, Bulgaria and other South Slavic regions.
  // Source: Faker 40.1.2 person provider(s): hr_HR, sl_SI, bg_BG; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "south-slavic": {
    label: "South Slavic",
    surnameFirst: false,
    male: [
      "Ablen", "Adolf", "Agatopod", "Aksintiâ", "Aleks", "Anto", "Antun", "Avel", "Averno", "Avgustian",
      "Avgustin", "Betina", "Bilân", "Blaž", "Bogomir", "Bojko", "Borut", "Božimir", "Božko", "Cvetko",
      "Dario", "Davor", "Delâna", "Denčo", "Diamantina", "Džaner", "Edin", "Eduard", "Efka", "Elias",
      "Elizabet", "Elvis", "Emanoil", "Emanuil", "Emil", "Emilian", "Enčo", "Eremiâ", "Etien", "Filčo",
      "Findo", "Florin", "Floro", "Fori", "Franci", "Fredi", "Genadi", "Genadij", "Gerdan", "Gergin", "German",
      "Gero", "Grega", "Hanko", "Hariton", "Havtelin", "Horoz", "Hristalin", "Hristomil", "Hristozar", "Ico",
      "Irinej", "irineus", "Ičo", "Jaka", "Jan", "Janez", "Joil", "Jure", "Karlo", "Karmen", "Kiber", "Kimčo",
      "Kirâko", "Kit", "Kitomir", "Kojo", "Laskal", "LEA-MARIÂ", "Lenin", "Lilo", "Lilân", "Luli", "Lulčo",
      "Mahno", "Marijan", "Marinel", "Marten", "Maruš", "Marčelo", "Matija", "Mijo", "Miro", "Miroslav",
      "Naco", "Nano", "Nansimir", "Natanail", "Nedâlko", "Nedû", "Neokli", "Nik", "Obretim", "Oleg", "Omar",
      "Onufri", "Orfej", "Orhidej", "Orlin", "Paco", "Pako", "Palmi", "Paruš", "Pasko", "Paspanahil", "Pejčin",
      "Pejčo", "Peko", "Pelaj", "Penû", "Persiana", "Persiân", "Petar", "Rafael", "Rašo", "Rem", "Rinaldo",
      "Rodan", "Rojo", "Rosen", "Roska", "Rostimir", "Sebastian", "Sedefčo", "Selen", "Sergej", "Sevan",
      "Slaven", "Tihol", "Tihomir", "Tilo", "Tim", "Timčo", "Tinčo", "Todorin", "Todorina", "Tolek", "Tominka",
      "Tonimir", "Vespasiân", "Vidû", "Viliân", "Violet", "Vitko", "Vitlân", "Višetin", "Višnû", "Vladilen",
      "Zahari", "Zdenko", "Zdravčo", "Zlati", "Zlatil", "Zlatiân", "Zlatko", "Zvezdan", "Zvezdislav",
      "Zvezdiân", "Âko", "Ânko", "Âno", "Čanko", "Čedomir", "Čonar", "Ŝeki", "Ŝirân", "Šanko", "Šider",
      "Šipčan", "Škodri",
    ],
    female: [
      "Adamina", "Agloida", "Aksentiâ", "Aleksandrina", "Aleksia", "Alenka", "Amalija", "Amoriâ", "Ana",
      "Anatoliâ", "Anelina", "Anheâ-mej", "Animira", "Anka", "Anomaliâ", "Antoalina", "Antonela", "Anza",
      "Aurora", "Bela", "Blagosveta", "Bogdalina", "Božidara-silvestra", "Breda", "Caneta", "Cola", "Cvetana",
      "Cvetilena", "Dafinka", "Damjana", "Danelina", "Danimira", "Darinka", "Dea", "Demirela", "Dennica",
      "Dilmana", "Dojka", "Donika", "Dušanka", "Džana", "Džinevra", "El", "Eleoneta", "Elfida", "Elina",
      "Elizabeta", "Elma", "Evdokiâ", "Fenâ", "Florika", "Franciska", "Galina", "Goca", "Gordana", "Grimâna",
      "Gvozdejka", "Hinka", "Hristâ", "Ilinda", "Ilka", "Irla", "ivamina", "Ivana", "Janja", "Jele", "Jelena",
      "Joko", "Jolina", "Julijana", "Karamelita", "Karina", "Katastrofa", "Kirka", "Kloâ", "Krasidara",
      "kristabela", "Kristina", "Lara", "Laura", "Lea", "Lidijka", "Lika", "Lilijana", "Lûbina", "Lûblina",
      "Lûlâna", "Magda", "Magdalena", "Maja", "Manca", "Mara", "Mara-antoaneta", "Mare", "Marica", "Marina",
      "Mariâ", "Martina", "Maruša", "Melaniâ", "Miglena", "Mimoza", "Mirena", "Misla", "Miška", "Mojca",
      "Natalija", "Neja", "Nejka", "Nevenka", "Norka", "Nuša", "Ognena", "Olivera", "Paca", "Panda",
      "Paraškevica", "Paulina", "Paviliâ", "Pavla", "Pavlina", "Periana", "Petromira", "Pia", "Plamena",
      "Plodovitka", "Poleksina", "Radimira", "Radka", "Radostka", "Rimma", "Roselina", "Rozana", "Rumislava",
      "Ruska", "Sahoriâ", "Sandra", "Saraâ", "Saša", "Seveta", "Silva", "Silvi", "Silâna", "Simona", "Slaveâ",
      "Smehoterapiâ", "Snežinka", "Sonja", "Stanka", "Stavisara", "Stefani", "Stelina", "Svobodka", "Taisiâ",
      "Taja", "tamara", "Tatjana", "Telefonka", "Terezija", "Tesa", "Tiliana", "Trendafila", "Tufka", "Vašilâ",
      "Veliana", "Veneciâ", "Venčislava", "Verena", "Vodica", "Vojnka", "Zaharinka", "Zinaida", "Zlateâ",
      "Zorka", "Zvonka", "Âblenka", "Ûliâ", "Čereša", "Čubrina", "Žička",
    ],
    surname: [
      "Antonić", "Babič", "Bajan", "Barbieri", "Barušić", "Bebić", "Beraković", "Bernardić", "Birtić",
      "Blagaić", "Blažičko", "Bobanović", "Bošnjak", "Božić", "Branković", "Bratuhčev", "Brlek", "Brletić",
      "Burić", "Cafuk", "Cestarić", "Cindrić", "Cukon", "Cvetkov", "Darojković", "Derežić", "Dizdar", "Dolenc",
      "Dončević", "Dragičević", "Ercegović", "Filipović", "Flego", "Forjan", "Friščić", "Gabrovlieva", "Galić",
      "Gligora", "Golubić", "Gotić", "Gudelj", "Hadrović", "Halapir", "Hardi", "Herout", "Hrvojić", "Ivšić",
      "Jakopec", "Jakopović", "Jenko", "Jerič", "Jerković", "Jerman", "Jurić", "Jurković", "Jurlina",
      "Karakašev", "Klemenčič", "Knezović", "Kocijančić", "Kodukov", "Kolega", "Kos", "Kosić", "Kostanić",
      "Kralj", "Kramberger", "Kujundžić", "Kukučka", "Kuščević", "Labinjan", "Lešković", "Likar", "Limonadov",
      "Ljubić", "Lorencin", "Malnar", "Manavski", "Maraš", "Maričević", "Markovac", "Marković", "Marolt",
      "Martinčević", "Marušić", "Maržić", "Matošević", "Matulin", "Medić", "Mesarić", "Mihelčić", "Mihić",
      "Miklavčič", "Miklečić", "Milovac", "Mičetić", "Miše", "Mladenov", "Mlinarič", "Moscarda", "Nedâlkov",
      "Nemec", "Nišević", "Obradović", "Oršolić", "Paradi", "Pavić", "Pedišić", "Perak", "Perković", "petek",
      "Petek", "Petričević", "Pečnik", "Peša", "Pogačnik", "Polović", "Poslon", "Primožič", "Proškov",
      "Prskalo", "Radin", "Radman", "Ričko", "Rukavina", "Rutar", "Sabljak", "Sakač", "Sapundžieva", "Sever",
      "Simonič", "Sinožić", "Sirotić", "Sitar", "Skrinska", "Sršen", "Stanić", "Sušnik", "Taralingova",
      "Tešija", "Trgovčić", "Tudić", "Tuhčiev", "Tuturilov", "Ukić", "Ušić", "Vampirska", "Veić", "Vodopivec",
      "Vrabelj", "Vrban", "Vuk", "Vučković", "Zakrajšek", "Zalokar", "Zenginov", "Zrinski", "Zupančič",
      "Ânazov", "Ûrgančev", "Ćurić", "Čizmić", "Čiš", "Čižmešija", "Čukov", "Čupić", "Đurinić", "Šalić",
      "Šegović", "Šestak", "Šipić", "Škoda", "Štrukelj", "Šturlan", "Šupraha", "Žabjačan", "žagar", "Živić",
      "Žnidaršič", "Žužić",
    ],
  },

  // Common regions / communities: Mainland and maritime Southeast Asia, including Vietnam, Thailand, Cambodia, Myanmar, Indonesia and Malaysia.
  // Original category — all original entries retained.
  "southeast-asian": {
    label: "Southeast Asian",
    surnameFirst: false,
    male: [
      "Adi", "Agung", "Akarapong", "Ananda", "Anh", "Arif", "Bambang", "Bao", "Bayani", "Binh", "Boonchai",
      "Budi", "Chai", "Chaiya", "Chandra", "Dara", "Dat", "Dewa", "Dimas", "Dinh", "Eko", "Fahmi", "Guntur",
      "Hai", "Hakim", "Han", "Hendra", "Hiep", "Htun", "Indra", "Irawan", "Jaya", "Joko", "Kai", "Kham",
      "Kiet", "Kosal", "Krisna", "Le", "Long", "Made", "Mahendra", "Manop", "Minh", "Mulyono", "Myint",
      "Nanda", "Narong", "Nguyen", "Niran", "Pandu", "Phan", "Phirun", "Pradit", "Putra", "Quang", "Rachmat",
      "Raden", "Rahman", "Rizal", "Sakda", "Samnang", "Santoso", "Sarun", "Setiawan", "Somchai", "Somsak",
      "Son", "Sothea", "Sovann", "Suharto", "Sukarno", "Surya", "Sutrisno", "Tan", "Taufik", "Teera", "Thanh",
      "Thura", "Tri", "Truong", "Utama", "Van", "Veasna", "Vichea", "Vinh", "Virak", "Wayan", "Widodo", "Wira",
      "Wisnu", "Yanto", "Yudha", "Yusuf", "Zainal", "Aung", "Chea", "Kosal", "Lakshman", "Preecha", "Than",
      "Zaw",
    ],
    female: [
      "Aisyah", "Ananda", "Anh", "Araya", "Ayu", "Bao", "Bopha", "Cam", "Chanda", "Chariya", "Dara", "Davika",
      "Dewi", "Dian", "Duyen", "Farah", "Giang", "Hang", "Hoa", "Huong", "Indah", "Intan", "Jariya", "Kanya",
      "Khem", "Kim", "Lan", "Lea", "Linh", "Mai", "Mala", "May", "Mei", "Mina", "My", "Namfon", "Ngoc", "Nila",
      "Nisa", "Nurul", "Phuong", "Pim", "Pisey", "Ploy", "Putri", "Quyen", "Rani", "Ratana", "Rina", "Ros",
      "Sakina", "Samnang", "Sari", "Socheata", "Sokha", "Sokunthea", "Somaly", "Sophea", "Sovannary", "Sri",
      "Suda", "Sukanya", "Suriya", "Thida", "Thiri", "Thu", "Trang", "Utari", "Vanida", "Veena", "Vicheka",
      "Vina", "Wati", "Widya", "Yani", "Yen", "Ying", "Yuni", "Zahra", "Apsara", "Bulan", "Chantrea", "Dao",
      "Eang", "Hnin", "Jintana", "Kalyani", "Laksmi", "Maly", "Nary", "Onn", "Pailin", "Reaksmey", "Savoeun",
      "Srey", "Thavy", "Vy", "Wimon", "Yuwadee",
    ],
    surname: [
      "Abdullah", "Adi", "Aung", "Boonmee", "Chan", "Chandra", "Chea", "Chen", "Chhay", "Chhim", "Cuong",
      "Dam", "Dao", "Dewantara", "Dharma", "Dinh", "Djaja", "Duong", "Goh", "Gunawan", "Hamzah", "Heng", "Ho",
      "Huang", "Hun", "Hussein", "Indrawan", "Iskandar", "Jaya", "Kang", "Khan", "Khieu", "Kosal", "Kusuma",
      "Lam", "Le", "Lim", "Loh", "Mahmud", "Manoban", "Minh", "Myint", "Ngo", "Nguyen", "Ningrat", "Noor",
      "Ong", "Phan", "Phong", "Prasetyo", "Putra", "Rahman", "Ramos", "Ratanak", "Santoso", "Setiawan", "Sim",
      "Singh", "Sisowath", "Soe", "Som", "Sok", "Sri", "Suharto", "Sukarno", "Sulistyo", "Surya", "Susanto",
      "Tan", "Tanaka", "Tay", "Teo", "Than", "Thavorn", "Tran", "Trinh", "Truong", "Utomo", "Vu", "Wibowo",
      "Widjaja", "Wijaya", "Win", "Wong", "Yap", "Yeo", "Yong", "Yusof", "Zulkifli", "Chau", "Limsuwan",
      "Norasingh", "Phouthavong", "Seneviratne", "Viriyakul", "Xiong", "Yaphet", "Zaw",
    ],
  },

  // Common regions / communities: South Africa, Zimbabwe, Botswana, Namibia, Lesotho, Eswatini and nearby regions.
  // Original category — all original entries retained.
  "southern-african": {
    label: "Southern African",
    surnameFirst: false,
    male: [
      "Abel", "Andile", "Anele", "Ayanda", "Bafana", "Bhekizizwe", "Blessing", "Bongani", "Brian", "Cedric",
      "Clive", "Collins", "Dumisani", "Elvis", "Emmanuel", "Enock", "Ernest", "Fikile", "Gift", "Godfrey",
      "Goodwill", "Hamilton", "Isaac", "Jabulani", "Jacob", "Johannes", "Joseph", "Justice", "Kagiso",
      "Katlego", "Kennedy", "Knowledge", "Kudakwashe", "Lethabo", "Lindani", "Lungelo", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mpho", "Mzamo", "Nathi", "Nkosi",
      "Nkululeko", "Ntokozo", "Percy", "Pule", "Sabelo", "Sibusiso", "Sipho", "Solomon", "Stanley", "Tafadzwa",
      "Thabo", "Themba", "Tinotenda", "Tonderai", "Trevor", "Vusi", "Welcome", "Wiseman",
    ],
    female: [
      "Amanda", "Andiswa", "Anesu", "Ayanda", "Ayodele", "Beauty", "Bongiwe", "Busisiwe", "Charity", "Chiedza",
      "Constance", "Dineo", "Duduzile", "Faith", "Fortune", "Gugulethu", "Hlengiwe", "Hope", "Immaculate",
      "Joyce", "Kagiso", "Koketso", "Lerato", "Lindiwe", "Lungile", "Mbalenhle", "Memory", "Mpho", "Naledi",
      "Nandi", "Nandipha", "Natasha", "Nomsa", "Nomvula", "Nonhlanhla", "Ntombi", "Nyasha", "Patience",
      "Precious", "Pretty", "Princess", "Puleng", "Rendani", "Rutendo", "Sibongile", "Simphiwe", "Siphesihle",
      "Stella", "Tamaryn", "Tariro", "Thandeka", "Thandiwe", "Thembi", "Tinashen", "Tshegofatso", "Tsitsi",
      "Vuyiswa", "Winnie", "Yolanda", "Zanele", "Zinhle", "Aphiwe", "Boitumelo", "Charmaine", "Dakalo",
      "Eunice", "Fikile", "Gcinile", "Kefilwe", "Khensani", "Lebogang", "Loyiso", "Makanaka", "Mapaseka",
      "Matshidiso", "Neo", "Nokuthula", "Palesa", "Refilwe", "Rumbidzai", "Sanelisiwe", "Sindisiwe", "Tendai",
      "Thobile", "Tumisang", "Velemseni", "Yvonne", "Zodwa", "Anele", "Buhle", "Kholofelo", "Lethabo",
      "Mpumelelo", "Nokwazi", "Onthatile", "Rethabile", "Sinenhlanhla", "Zandile",
    ],
    surname: [
      "Baloyi", "Banda", "Botha", "Chikowore", "Dhlamini", "Dube", "Gumede", "Hadebe", "Hlatshwayo", "Jacobs",
      "Khumalo", "Khoza", "Koen", "Kruger", "Langa", "Mabena", "Mabika", "Mabaso", "Madonsela", "Magagula",
      "Mahachi", "Makgoba", "Makhubu", "Makwenda", "Malinga", "Mambo", "Mangena", "Maseko", "Masuku",
      "Mathebula", "Matlala", "Matsheka", "Mazibuko", "Mbatha", "Mbeki", "Mhlongo", "Mkhize", "Mlambo",
      "Mokoena", "Molefe", "Moloi", "Moyo", "Mpofu", "Mthembu", "Mubaiwa", "Mugabe", "Mukwena", "Munyai",
      "Mupfumi", "Murerwa", "Musa", "Mutasa", "Ncube", "Ndlovu", "Nene", "Ngcobo", "Ngubane", "Nkosi", "Nkomo",
      "Nzimande", "Phiri", "Pienaar", "Pretorius", "Sibanda", "Sibiya", "Sithole", "Skhosana", "Tau", "Tembo",
      "Tshabalala", "van der Merwe", "van Wyk", "Vilakazi", "Visser", "Xitsonga", "Zikalala", "Zulu", "Apleni",
      "Bhengu", "Chirwa", "Dlamini", "Gasa", "Jele", "Kekana", "Ledwaba", "Madiba", "Mahlangu", "Masemola",
      "Matshego", "Mthimkhulu", "Nare", "Nxumalo", "Radebe", "Shongwe", "Tshivhase", "Xitsonga", "Zuma",
    ],
  },

  // Common regions / communities: East African coast, especially Tanzania and Kenya; also inland East and Central Africa.
  // Source: Faker 40.1.2 person provider(s): sw; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "swahili": {
    label: "Swahili",
    surnameFirst: false,
    male: [
      "Abdu", "Aijuka", "Amri", "Andwele", "Angalia", "Angavu", "Anoni", "Asani", "Asanti", "Athumani",
      "Azizi", "Bahari", "Bale", "Balinda", "Beshte", "Bibuwa", "Boma", "Cheusi", "Chuki", "Dai", "Daudi",
      "Duma", "Dunia", "Ekundu", "Eliakimu", "Enzi", "Evance", "Fahari", "Fanaka", "Faraja", "Hadithi",
      "Hamis", "Harambee", "Hekima", "Isaya", "Issack", "Ituri", "Jalia", "Jangwa", "Jelani", "Jua", "Jumaane",
      "Justiniani", "Kaombwe", "Kashangaki", "Kenyangi", "Khamani", "Khamisi", "Kiapo", "Kiburi", "Kijana",
      "Kijani", "Kimbilio", "Kinubi", "Kipenzi", "Kiume", "Kondo", "Konradi", "Kovu", "Kurunzi", "Kusiima",
      "Makini", "Makunga", "Makuu", "Matunda", "Mavuno", "Mohamedi", "Mulele", "Mwezi", "Ngamia", "Ngeni",
      "Ntimi", "Nuhu", "Nuriat", "Nwabudike", "Osogo", "Pambe", "Pelaji", "Popobawa", "Pumbaa", "Rashidi",
      "Reshoni", "Risasi", "Rua", "Rubani", "Ruhiu", "Rungo", "Sabari", "Sadaka", "Sadiki", "Safari",
      "Samweli", "Seif", "Shida", "Sifa", "Siku", "Takatifu", "Thabiti", "Tisa", "Tufani", "Tukufu", "Ushindi",
      "Usiku", "Uzima", "Wamwema", "Yakobo", "Yohana", "Yohane", "Zahur", "Zende", "Zuba", "Zuhri", "Zwatie",
      "Ëakumbu",
    ],
    female: [
      "Abigaili", "Adhra", "Adia", "Adimu", "Akumu", "Almasi", "Amani", "Amondi", "Anasa", "Angalia", "Arusi",
      "Asali", "Asanti", "Asatira", "Asmini", "Atiena", "Bahari", "Boma", "Busara", "Chaniya", "Chausiki",
      "Chipukizi", "Chuki", "Dainess", "Dalili", "Enzi", "Evance", "Fahari", "Faisa", "Fanaka", "Faraja",
      "Farhiya", "Farijika", "Gethera", "Goma", "Haiba", "Halisi", "Hanja", "Hashiki", "Hatima", "Hawehindi",
      "Hekima", "Hidaya", "Hodari", "Humaiya", "Imany", "Imara", "Itanya", "Jahi", "Jana", "Jasiri", "Jina",
      "Jua", "Kaluwa", "Kaombwe", "Karama", "Kaskazi", "Kiah", "Kibafupia", "Kibibi", "Kiburi", "Kijana",
      "Kimya", "Kinaya", "Kiojah", "Kipenzi", "Kipepeo", "Kisima", "Kiwara", "Kuchanua", "Kweli", "Lailati",
      "Laini", "Madaha", "Madini", "Madoa", "Mahali", "Maisha", "Majani", "Makini", "Maliza", "Marini",
      "Marjani", "Matunda", "Maua", "Misuli", "Mkarkara", "Mrihani", "Muhima", "Musila", "Mwamini", "Mwasaa",
      "Najuma", "Naki", "Nashipie", "Nasra", "Nathari", "Nayfa", "Nelah", "Niara", "Nigesa", "Njozi", "Nula",
      "Nyasi", "Nyoka", "Nyoni", "Nyota", "Nyuki", "Opwonya", "Panya", "Paskalia", "Reshoni", "Rua", "Sabari",
      "Sadao", "Safari", "Safiri", "Sarabi", "Sarafina", "Sauti", "Serafina", "Shani", "Shawana", "Shida",
      "Sifa", "Siku", "Skolastika", "Sungara", "Swala", "Ta-tanisha", "Tambika", "Tamu", "Tisa", "Tuere",
      "Tufani", "Udeera", "Ujamaa", "Umande", "Umoja", "Uzima", "Waceera", "Wamwema", "Waridi", "Waseme",
      "Yasinta", "Zahnya", "Zaituni", "Zumaridi", "Zuwena",
    ],
    surname: [
      "Abdi", "Abdullahi", "Abwao", "Adamu", "Adan", "Ahmed", "Akinyi", "Ali", "Anyango", "Atieno", "Auma",
      "Baharia", "Barasa", "Dhadho", "Fuli", "Hassan", "Hassani", "Hussein", "Ibrahim", "John", "Juma",
      "Kahinu", "Kamau", "Kariuki", "Kibet", "Kimachu", "Kimani", "Kimutai", "Kipkemei", "Kipkirui",
      "Kipkorir", "Kiplagat", "Kiprono", "Kipruto", "Kipsang", "Kiptoo", "Kitumaini", "Madhubuti", "Magombo",
      "Maina", "Mathenge", "Mohamed", "Msuya", "Mumbi", "Mutai", "Muthoni", "Mwangi", "Naomi", "Nazari",
      "Njeri", "Njoroge", "Obama", "Ochieng", "Odhiambo", "Omar", "Omondi", "Onyango", "Otieno", "Ouma",
      "Owuor", "Rikke", "Sayyid", "Simba", "Sinema", "Wafula", "Wambui", "Wanijiku", "Wanjala", "Wario",
      "Waweru", "Yudas",
    ],
  },

  // Common regions / communities: Tajikistan and Tajik-speaking communities in Afghanistan and Uzbekistan.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Base surname forms used for all characters in the future setting.
  "tajik": {
    label: "Tajik",
    surnameFirst: false,
    male: [
      "Abdullo", "Akbar", "Alisher", "Anvar", "Bahrom", "Behruz", "Daler", "Davlat", "Dilshod", "Farrukh",
      "Farhod", "Firdavs", "Habib", "Hasan", "Jamshed", "Kamol", "Komil", "Muhammad", "Nusrat", "Rustam",
      "Said", "Siroj", "Suhrob", "Temur", "Umed", "Yusuf", "Zafar",
    ],
    female: [
      "Anora", "Aziza", "Barno", "Dilafruz", "Dilnoza", "Dilorom", "Farangis", "Farida", "Firuza", "Gulbahor",
      "Gulchehra", "Gulnoza", "Gulrukh", "Madina", "Malika", "Manizha", "Mavluda", "Mehrangez", "Mohira",
      "Nigina", "Nilufar", "Parvina", "Sitora", "Zarina", "Zebuniso", "Zuhro",
    ],
    surname: [
      "Abdulloev", "Akhmedov", "Aliev", "Asadov", "Boboev", "Davlatov", "Haidarov", "Hakimov", "Hasanov",
      "Huseynov", "Ismoilov", "Karimov", "Latifov", "Mirzoev", "Muhammadiev", "Nazarov", "Olimov", "Rahmon",
      "Rahimov", "Rasulov", "Safarov", "Saidov", "Sharifov", "Yusufov",
    ],
  },

  // Common regions / communities: Tamil Nadu, Sri Lanka and Tamil diaspora communities.
  // Source: Copied intact from original Dravidian category; distinct entries in this new category only.
  // Note: Reuses the Tamil-heavy original Dravidian pool. Second names often function as patronymics or other identifiers.
  "tamil": {
    label: "Tamil",
    surnameFirst: false,
    male: [
      "Aadhavan", "Aakash", "Abhinav", "Adithya", "Ajith", "Akilan", "Amarnath", "Anand", "Anbarasu", "Anbu",
      "Aravind", "Arjun", "Arul", "Ashwin", "Balaji", "Baskar", "Bharath", "Boopathi", "Chandran", "Dhanush",
      "Dilip", "Dinesh", "Elango", "Ganesh", "Gokul", "Gopinath", "Hari", "Harish", "Ilango", "Iniyan",
      "Jagan", "Jeevan", "Kailash", "Kamal", "Kannan", "Karthick", "Karthikeyan", "Kathir", "Kavin", "Kesavan",
      "Kishore", "Kumar", "Lokesh", "Madhan", "Mahesh", "Manikandan", "Manoj", "Maran", "Mohan", "Muthukumar",
      "Nandakumar", "Naren", "Nataraj", "Naveen", "Nithin", "Pandian", "Parthiban", "Perumal", "Prabhu",
      "Pradeep", "Prakash", "Pranav", "Prem", "Raghavan", "Rajan", "Rajesh", "Rakesh", "Ramachandran",
      "Ramesh", "Ranjith", "Ravi", "Saravanan", "Sasi", "Selvam", "Senthil", "Shankar", "Sivakumar", "Sridhar",
      "Sriram", "Subash", "Sundar", "Surya", "Tamilselvan", "Tharun", "Udhayan", "Vasanth", "Venkatesh",
      "Vetri", "Vignesh", "Vijay", "Vikram", "Vinod", "Viswanathan", "Yogesh", "Yuvaraj", "Ariyan",
      "Balasubramanian", "Chidambaram", "Devan", "Easwar", "Guhan", "Jagadeesh", "Kailasan", "Lingesh",
      "Madhavan", "Muthu", "Naveenkumar", "Paramesh", "Ragunath", "Sathish", "Selvaraj", "Sivanesan",
      "Thirumal", "Umapathy", "Varadarajan", "Velmurugan", "Vishnu", "Yathish", "Arumugam", "Durairaj",
    ],
    female: [
      "Abinaya", "Aishwarya", "Akila", "Amudha", "Anitha", "Anjali", "Anu", "Aruna", "Bhanu", "Bhuvana",
      "Chandra", "Deepa", "Deepika", "Devi", "Divya", "Gayathri", "Geetha", "Harini", "Indhu", "Janani",
      "Jayanthi", "Kala", "Kalaiarasi", "Kalyani", "Kanishka", "Karthika", "Kavitha", "Keerthana", "Komala",
      "Krithika", "Lakshmi", "Lalitha", "Madhavi", "Mahalakshmi", "Malathi", "Meena", "Meenakshi", "Monisha",
      "Nandhini", "Narmada", "Nila", "Padmini", "Pavithra", "Poornima", "Priya", "Radha", "Rajalakshmi",
      "Ramya", "Rekha", "Revathi", "Rohini", "Sangeetha", "Saranya", "Savitri", "Shalini", "Shanthi",
      "Sharmila", "Sindhu", "Sivagami", "Sneha", "Soundarya", "Subha", "Sudha", "Sujatha", "Sumathi",
      "Sunitha", "Sushmitha", "Tamilselvi", "Thara", "Uma", "Vaishnavi", "Valli", "Vandana", "Vanitha",
      "Vasanthi", "Vidhya", "Vijayalakshmi", "Vinitha", "Yamuna", "Aarthi", "Abhirami", "Amritha", "Anbarasi",
      "Arulmozhi", "Bhavani", "Charumathi", "Devayani", "Ezhil", "Gomathi", "Hemalatha", "Ilakkiya", "Jothika",
      "Kanmani", "Kayalvizhi", "Mohana", "Nalini", "Nivetha", "Parvathi", "Ponni", "Ranjani", "Sakthi",
      "Selvi", "Sivaranjani", "Tamilarasi", "Thenmozhi", "Usha", "Varalakshmi", "Vennila", "Visalakshi",
      "Yazhini", "Agalya", "Bhairavi", "Chithra", "Dhanalakshmi", "Elavarasi", "Indumathi", "Kowsalya",
      "Muthulakshmi", "Nithya", "Padmavathi",
    ],
    surname: [
      "Anandan", "Arumugam", "Balakrishnan", "Baskar", "Chandrasekar", "Dhanapal", "Duraisamy", "Elangovan",
      "Ganesan", "Gopalakrishnan", "Govindan", "Jagannathan", "Jayaraman", "Kailasam", "Kandasamy",
      "Karunakaran", "Krishnamurthy", "Kumaraswamy", "Lakshmanan", "Mahadevan", "Manickam", "Mohanraj",
      "Muthusamy", "Nagarajan", "Nandakumar", "Narayanan", "Natarajan", "Palanisamy", "Pandian",
      "Parthasarathy", "Periyasamy", "Pillai", "Radhakrishnan", "Rajagopal", "Rajendran", "Ramakrishnan",
      "Ramasamy", "Ranganathan", "Sankaran", "Saravanan", "Sekar", "Shanmugam", "Sivakumar", "Somasundaram",
      "Sridhar", "Srinivasan", "Subramanian", "Sundaram", "Swaminathan", "Thiagarajan", "Udayakumar",
      "Vaidyanathan", "Venkataraman", "Viswanathan", "Annamalai", "Balasubramanian", "Chidambaram",
      "Devarajan", "Gurunathan", "Ilangovan", "Jeevaraj", "Kaliyaperumal", "Krishnan", "Loganathan",
      "Madhavan", "Murugan", "Natesan", "Panneerselvam", "Paramasivam", "Ponnusamy", "Ravichandran",
      "Sathyanarayanan", "Selvaraj", "Sivanesan", "Soundararajan", "Thangavel", "Thirumalai", "Umapathy",
      "Varadarajan", "Veeramani", "Velayutham", "Vetrivel", "Yoganathan", "Achari", "Chettiar", "Gounder",
      "Konar", "Mudaliar", "Naicker", "Nadar", "Pillay", "Reddiar", "Servai", "Thevar", "Udaiyar", "Velar",
      "Adiga", "Bhat", "Hegde", "Kamath", "Kini", "Kiniya", "Kotian", "Pai", "Poojary", "Rao", "Shenoy",
      "Shetty", "Upadhya", "Urs", "Varma", "Achan", "Menon", "Nair", "Panicker", "Kurup", "Warrier", "Marar",
      "Thampi", "Chakyar",
    ],
  },

  // Common regions / communities: Andhra Pradesh and Telangana in India, and Telugu diaspora.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Family name often precedes given name; not every listed second name is hereditary.
  "telugu": {
    label: "Telugu",
    surnameFirst: true,
    male: [
      "Abhiram", "Aditya", "Anand", "Anil", "Arjun", "Bala", "Bhaskar", "Chaitanya", "Chandra", "Charan",
      "Ganesh", "Gopal", "Harish", "Jagadeesh", "Kalyan", "Kiran", "Krishna", "Mahesh", "Manoj", "Murali",
      "Naveen", "Pavan", "Prabhakar", "Prasad", "Raghavendra", "Rajesh", "Rama", "Ramesh", "Ravi", "Sai",
      "Srinivas", "Suresh", "Teja", "Vamsi", "Varun", "Venkatesh", "Vijay", "Vinay",
    ],
    female: [
      "Akhila", "Amala", "Anjali", "Anusha", "Aparna", "Bhavana", "Chandana", "Deepthi", "Divya", "Gayatri",
      "Harika", "Harini", "Hema", "Indira", "Jyothi", "Kalyani", "Keerthi", "Lakshmi", "Lavanya", "Madhavi",
      "Mamatha", "Manasa", "Meghana", "Nalini", "Navya", "Padma", "Pallavi", "Pranavi", "Priya", "Ramya",
      "Sahithi", "Saritha", "Shanthi", "Sirisha", "Sravani", "Sujatha", "Swathi", "Tejaswini", "Vani",
      "Vasavi",
    ],
    surname: [
      "Akkineni", "Allu", "Chaganti", "Chalam", "Chowdary", "Dasari", "Daggubati", "Gadde", "Ganta",
      "Goparaju", "Jasti", "Kancharla", "Kandukuri", "Kanneganti", "Katta", "Kolli", "Komatireddy",
      "Kondapalli", "Kota", "Kovelamudi", "Maddala", "Manchu", "Nandamuri", "Nannapaneni", "Nara", "Nayak",
      "Pinnamaneni", "Rao", "Reddy", "Sastry", "Tanguturi", "Thota", "Varma", "Yarlagadda", "Yellapragada",
    ],
  },

  // Common regions / communities: Thailand and Thai diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Latin-script spellings vary; Thai surnames are often unusually specific to individual families.
  "thai": {
    label: "Thai",
    surnameFirst: false,
    male: [
      "Anan", "Anantha", "Anucha", "Apichat", "Arthit", "Atthaphon", "Boonchai", "Boonmee", "Chaiwat",
      "Chalerm", "Chalermchai", "Chanon", "Chatchai", "Chaturon", "Chayut", "Chirawat", "Damrong", "Ekkachai",
      "Kanit", "Kasem", "Kawin", "Kittipong", "Kittisak", "Kriangsak", "Manop", "Narong", "Nattapong", "Niran",
      "Nirut", "Noppadon", "Pakin", "Pattana", "Phanupong", "Phichit", "Phiraphat", "Piya", "Prasert",
      "Prayut", "Preecha", "Rachata", "Ritthikrai", "Sakda", "Sakchai", "Saran", "Somsak", "Somchai", "Somkid",
      "Somphong", "Suchart", "Surasak", "Teerachai", "Thaksin", "Thanakorn", "Thanawat", "Thanit",
      "Thawatchai", "Thiraphat", "Thongchai", "Wanchai", "Wichai", "Wichit", "Yutthana",
    ],
    female: [
      "Anchalee", "Anong", "Apinya", "Araya", "Arunee", "Benjawan", "Bussaba", "Chada", "Chalita", "Chalida",
      "Chanida", "Chanya", "Chanyawee", "Chompoo", "Daranee", "Duangjai", "Duangkamol", "Intira", "Janjira",
      "Jariya", "Jintana", "Kanjana", "Kanya", "Kanokwan", "Karn", "Ketsara", "Kwanjai", "Lalita", "Malee",
      "Manassanan", "Mayuree", "Nanthana", "Naree", "Natthida", "Nattaya", "Niranuch", "Nongnuch", "Orathai",
      "Patchara", "Pattama", "Phatchara", "Pimchanok", "Pimchan", "Pimpa", "Ploy", "Pranee", "Prapaporn",
      "Ratchanee", "Rattana", "Saowalak", "Sasithorn", "Sirin", "Siriporn", "Sirirat", "Sudarat", "Suda",
      "Sukanya", "Sunee", "Supaporn", "Supatra", "Suree", "Thidarat", "Urai", "Vanida", "Waraporn", "Wimon",
      "Yuwadee",
    ],
    surname: [
      "Boonmee", "Boonprasert", "Boonruang", "Chaiyaporn", "Chaiyasit", "Chantharangsu", "Chantawong",
      "Charoenrat", "Chidchob", "Chinawatra", "Chotiprasit", "Chulanont", "Dechaboon", "Diskul",
      "Euarchukiati", "Hongsakul", "Indrapura", "Jaroenwong", "Kanchanapoom", "Kanjanaporn", "Kasemsri",
      "Kiatpongsan", "Kittikachorn", "Kittiprapas", "Kongka", "Kositpipat", "Limsakul", "Limsuwan", "Manoban",
      "Na Ayudhya", "Naksuk", "Nimmanahaeminda", "Phanich", "Phongsai", "Pibulsonggram", "Pongpaichit",
      "Poonlarp", "Pramoj", "Rangsit", "Ratanaporn", "Rattanakul", "Saelim", "Saetang", "Sangchan",
      "Sangkhawat", "Sangthong", "Sathirathai", "Shinawatra", "Siriwan", "Srisai", "Srisuk", "Srisuwan",
      "Suksawat", "Suwan", "Suwannarat", "Tansakul", "Thavorn", "Thepsuthin", "Thongchai", "Vejjajiva",
      "Wattanakul", "Wongsuwan", "Yodthong", "Yoovidhya",
    ],
  },

  // Common regions / communities: Tibet and Himalayan communities in Nepal, Bhutan and northern India.
  // Original category — all original entries retained.
  "tibetan-himalayan": {
    label: "Tibetan / Himalayan",
    surnameFirst: false,
    male: [
      "Akash", "Tenzen", "Amrit", "Anil", "Arun", "Ashok", "Bir", "Bodhi", "Chhewang", "Chime", "Choden",
      "Dawa", "Dechen", "Dorje", "Galen", "Ganesh", "Gautam", "Gelek", "Gopal", "Hari", "Indra", "Jampa",
      "Jigme", "Kalsang", "Karma", "Kiran", "Lhakpa", "Lobsang", "Mingma", "Namgyal", "Nanda", "Nawang",
      "Ngawang", "Norbu", "Padma", "Pasang", "Pema", "Phurba", "Puran", "Rabin", "Rajan", "Rinchen", "Sangay",
      "Sherab", "Sonam", "Tandin", "Tashi", "Tek", "Tempa", "Tenzin", "Thubten", "Tsering", "Ugyen",
      "Wangchuk", "Yeshe", "Yonten", "Yubaraj", "Zopa", "Anup", "Bhim", "Chhiring", "Damber", "Deki", "Gyatso",
      "Harihar", "Kunga", "Lakpa", "Mani", "Nima", "Palden", "Pem", "Rabten", "Senge", "Tenzing", "Thinley",
      "Tilak", "Tshering", "Wangdi", "Yonten", "Aaditya", "Bhupen", "Chandra", "Dinesh", "Gombo", "Kezang",
      "Lhendup", "Norden", "Paldor", "Ramesh", "Shiva", "Tobgay", "Uttam", "Yeshi", "Zangpo", "Chogyal",
      "Gyurmey", "Lokesh", "Tseten",
    ],
    female: [
      "Ama", "Anju", "Asha", "Bhawana", "Bhumika", "Chimi", "Choden", "Deki", "Dechen", "Dolma", "Gita",
      "Jamuna", "Kalsang", "Karma", "Kezang", "Kunga", "Lhamo", "Lhazin", "Mala", "Maya", "Mingma", "Namdol",
      "Nawang", "Ngawang", "Nima", "Paldon", "Pema", "Pemala", "Rinzin", "Sangmo", "Sita", "Sonam", "Tandin",
      "Tara", "Thinley", "Tshering", "Wangmo", "Yangchen", "Yangki", "Yeshi", "Yudon", "Zangmo", "Anisha",
      "Bina", "Chhime", "Dawa", "Devi", "Dolkar", "Ganga", "Hira", "Indira", "Jyoti", "Kamala", "Karma Deki",
      "Leki", "Manju", "Niruta", "Paldol", "Passang", "Purnima", "Ranjita", "Sangay", "Tenzin", "Ugyen",
      "Yangzom", "Yeshi", "Aama", "Bishnu Maya", "Choki", "Dilmaya", "Gyalmo", "Karma Lhamo", "Laxmi", "Mukti",
      "Norzin", "Pema Choden", "Rinchen", "Sabitri", "Tashi Dolma", "Tsering", "Wangdi", "Yanki", "Zomkyi",
      "Apsara", "Bhawani", "Choying", "Doma", "Gyaltsen", "Kinzang", "Lham", "Nawang Dolma", "Palki", "Seldon",
      "Tenzin Dolma", "Yangdol",
    ],
    surname: [
      "Bhattarai", "Bista", "Chhetri", "Dorje", "Ghale", "Gurung", "Karki", "Khadka", "Lama", "Lepcha",
      "Magar", "Maharjan", "Moktan", "Namgyal", "Nembang", "Ngodup", "Norbu", "Poudel", "Rai", "Rana",
      "Sherpa", "Shrestha", "Subba", "Tamang", "Thapa", "Tshering", "Wangchuk", "Yonzon", "Acharya", "Basnet",
      "Bhujel", "Chaulagain", "Dong", "Gautam", "Ghising", "Khadgi", "Lhendup", "Limbu", "Manandhar", "Moktan",
      "Niroula", "Oli", "Pariyar", "Pradhan", "Rokaya", "Rumba", "Sapkota", "Sarki", "Tiwari", "Yonjan",
      "Zimba", "Adhikari", "Bajracharya", "Chettri", "Dahal", "Ghaley", "Khadgi", "Lohani", "Maharjan",
      "Niraula", "Palden", "Rimal", "Sangpo", "Tandukar", "Tsering", "Upreti", "Yolmo", "Zangpo", "Aryal",
      "Bomzan", "Choden", "Dhungel", "Gyatso", "Karmacharya", "Lhendup", "Malla", "Ngawang", "Pangeni",
      "Rinchen", "Sherchan", "Thing", "Wagle", "Yogi", "Zimba", "Basyal", "Dongol", "Kunzang", "Luitel",
      "Nyima", "Phunjok", "Rokaya", "Tamang", "Tobgay", "Wangdi", "Yonten", "Zopa", "Guragain", "Moktan",
      "Tseten",
    ],
  },

  // Common regions / communities: Tonga and Tongan diaspora in New Zealand, Australia and the United States.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Includes contemporary family names and some title-associated forms, standardized for fiction.
  "tongan": {
    label: "Tongan",
    surnameFirst: false,
    male: [
      "Aisea", "Aki", "ʻAminiasi", "Finau", "Filipe", "Fotu", "Havili", "Hemi", "Ioane", "Isileli", "Jone",
      "Kelepi", "Latu", "Lemeki", "Lisiate", "Manu", "Mikaele", "Mosesi", "Nalesoni", "Paula", "Siaosi",
      "Sione", "Soane", "Tevita", "Viliami",
    ],
    female: [
      "Ana", "Anaseini", "ʻElisiva", "Fane", "Fifita", "Halaevalu", "Kalolaine", "Katalina", "Lavina",
      "Lavinia", "Leilani", "Litia", "Losa", "Luisa", "Mele", "Meleane", "Milika", "Moana", "Ofa", "Salote",
      "Sela", "Seini", "Sinaitakala", "Siosiana", "Telesia", "Vai",
    ],
    surname: [
      "Fakatava", "Fale", "Fifita", "Finau", "Fonua", "Fotu", "Halangahu", "Havili", "Hihifo", "Kaufusi",
      "Kefu", "Koloamatangi", "Latu", "Lauaki", "Lolohea", "Maile", "Manu", "Moala", "Moli", "Paea", "Palu",
      "Pulu", "Sika", "Tafuna", "Taumalolo", "Taukafa", "Taukeiaho", "Taufua", "Tupou", "Unga", "Vea",
    ],
  },

  // Common regions / communities: Turkey, Azerbaijan, Central Asia and other Turkic-speaking regions.
  // Original category — all original entries retained.
  "turkic-central-asian": {
    label: "Turkic / Central Asian",
    surnameFirst: false,
    male: [
      "Aidar", "Akhmet", "Alim", "Altan", "Amir", "Arman", "Arslan", "Askar", "Atai", "Aydin", "Azamat",
      "Bakhtiyar", "Barys", "Batyr", "Bekzat", "Bektur", "Bolat", "Chingiz", "Daniyar", "Dias", "Eldar",
      "Elmir", "Emir", "Erbol", "Erdem", "Erkin", "Farid", "Ilyas", "Iskander", "Jandar", "Jasur", "Kairat",
      "Kanat", "Karim", "Kuat", "Mansur", "Marat", "Mukhtar", "Murad", "Nurbek", "Nurbol", "Nurlan", "Omir",
      "Orhan", "Ruslan", "Sanzhar", "Serik", "Shamil", "Sultan", "Talat", "Talgat", "Temir", "Temirlan",
      "Timur", "Tolegen", "Tural", "Ulan", "Ulugbek", "Umar", "Yermek", "Yerzhan", "Yusup", "Zakir",
      "Zhanibek", "Adilet", "Alisher", "Bahtiyar", "Dastan", "Ilham", "Kanybek", "Miras", "Nursultan",
      "Rashid", "Samat", "Toktar", "Tursun", "Yuldash", "Zhandos", "Aibek", "Beknur", "Dulat", "Khalil",
      "Murat", "Niyaz", "Oljas", "Rinat", "Sabir", "Tamerlan", "Usub", "Yerlan", "Zholdas", "Anvar", "Bakhyt",
      "Ernar", "Kadyr", "Tulpar",
    ],
    female: [
      "Aigul", "Ainur", "Aizada", "Akerke", "Aliya", "Altynai", "Amina", "Anara", "Aruzhan", "Asel", "Aygun",
      "Aysel", "Ayzhan", "Balzhan", "Dilara", "Dinara", "Elmira", "Farida", "Gulbahar", "Gulmira", "Gulnara",
      "Indira", "Kamila", "Karina", "Karlygash", "Leila", "Madina", "Malika", "Mariam", "Meerim", "Moldir",
      "Nargiza", "Nazgul", "Nazira", "Nurgul", "Raikhan", "Rano", "Sabina", "Saltanat", "Samal", "Sholpan",
      "Sultanat", "Tamara", "Tansholpan", "Uldana", "Yulduz", "Zamira", "Zarina", "Zere", "Aijan", "Amina",
      "Bibigul", "Cholpon", "Dana", "Dilnoza", "Gaukhar", "Gulzada", "Kumush", "Lazzat", "Mahira", "Nazym",
      "Perizat", "Roza", "Saule", "Shahnoza", "Shirin", "Tomiris", "Yulduzoy", "Zhanar", "Ademi", "Akerke",
      "Bayan", "Dana", "Feruza", "Gulchehra", "Khadisha", "Mavluda", "Nilufer", "Ravshana", "Shahzoda",
      "Tolkunay", "Umida", "Yulduz", "Zuhra", "Aisulu", "Baktygul", "Dilfuza", "Gulzira", "Kanykei",
      "Madinabonu", "Nazik", "Raushan", "Sholpana", "Togzhan", "Yulduza", "Zhibek",
    ],
    surname: [
      "Abdullayev", "Akhmetov", "Alimuhamedov", "Amanov", "Arslanov", "Askarov", "Atayev", "Aytmatov",
      "Azimov", "Babayev", "Bakhtin", "Beketov", "Bekturov", "Berdimuhamedov", "Bolatov", "Charyyev",
      "Daniyarov", "Dzhuraev", "Ermekov", "Gaynullin", "Guliyev", "Ibragimov", "Iskakov", "Ismailov",
      "Joldasov", "Karimov", "Kurbanov", "Kydyrbayev", "Mambetov", "Mansurov", "Muratov", "Nazarbayev",
      "Niyazov", "Nurmagomedov", "Nurpeisov", "Orazov", "Osmonov", "Ospanov", "Rakhimov", "Rasulov",
      "Rustamov", "Sadykov", "Saparov", "Seidov", "Serikbayev", "Sharipov", "Suleimenov", "Tazhbayev",
      "Temirov", "Toktogulov", "Tulegenov", "Tursunov", "Umarov", "Usenov", "Valiyev", "Yakubov", "Yerzhanov",
      "Yusupov", "Zhaksylykov", "Zholdasov", "Aitбаев", "Altynbekov", "Batyrkhanov", "Dauletov", "Erkinov",
      "Kenzhebayev", "Myrzabayev", "Nurbayev", "Omarov", "Sultanov", "Toktarov", "Zhaparov", "Akhunov",
      "Bektashev", "Dzhumabekov", "Imanov", "Kariyev", "Myrzakulov", "Ryskulov", "Sabitov", "Toichiev", "Uulu",
      "Yuldashev", "Zhumanov", "Abilkhanov", "Baisalov", "Dulatov", "Kenzhin", "Mukashev", "Rakhmatullin",
      "Tulegen", "Utegenov", "Yessimov", "Zhanuzakov",
    ],
  },

  // Common regions / communities: Turkey, northern Cyprus and Turkish diaspora communities.
  // Source: Faker 40.1.2 person provider(s): tr_TR; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "turkish": {
    label: "Turkish / Anatolian",
    surnameFirst: false,
    male: [
      "Abdulbekir", "Abdurrahman", "Abdülahat", "Adlan", "Akçabay", "Akçasu", "Aliihsan", "Almus", "Alparslan",
      "Altuğ", "Andiç", "Argu", "Arifcan", "Aslanhan", "Atasagun", "Atatöre", "Avşin", "Aykutalp", "Aytuna",
      "Ağmur", "Bahaddin", "Baltaş", "Bariş", "Barışcan", "Batırhan", "Baydu", "Bayruhan", "Bektaşi",
      "Bellisan", "Berran", "Biltaş", "Birgit", "Birsen", "Boztaş", "Cangür", "Cantez", "Cenan", "Coşkun",
      "Danış", "Demiryürek", "Diken", "Dilder", "Dinçsü", "Dolun", "Doğanalp", "Doğuhan", "Dündaralp",
      "Ebuakil", "Ekber", "Elöve", "Enginiz", "Eral", "Erenalp", "Erik", "Evrimer", "Ezgütekin", "Fatih",
      "Fenni", "Fersan", "Gençay", "Gülşahin", "Günden", "Güneri", "Günser", "Haluk", "Hasbek", "Heyvetullah",
      "Hürdoğan", "Ilgı", "Işıkay", "İmren", "İsak", "İyiyürek", "Kanak", "Kanpulat", "Karaca", "Karataş",
      "Kayıt", "Kelâmi", "Kibar", "Kopan", "Koray", "Korkmazalp", "Koşukhan", "Kızıl", "Kızıltunç", "Mahir",
      "Maksur", "Mefarettin", "Mengi", "Merdi", "Metinkaya", "Mihin", "Mirbadin", "Muhyettin", "Muktedir",
      "Musafet", "Möhsim", "Münif", "Mürit", "Müslum", "Nakip", "Nas", "Nihai", "Noman", "Nurcan", "Okgüçlü",
      "Oldağ", "Onat", "Ongay", "Onuker", "Onurcan", "Oranlı", "Oruç", "Oğuzman", "Razı", "Rüşen", "Safet",
      "Salami", "Savak", "Sayin", "Sağıt", "Serda", "Sezal", "Sittik", "Soydaner", "Sudi", "Sücaettin", "Sıla",
      "Sıylıhan", "Tansev", "Taylak", "Taşar", "Teber", "Tecimer", "Temuçin", "Toker", "Tunçboğa", "Tutkun",
      "Tuyuğ", "Türabi", "Türkalp", "Umman", "Utkucan", "Uzsoy", "Vargın", "Veis", "Yalgın", "Yaltırak",
      "Yilmaz", "Yunt", "Yurdanur", "Yurtgüven", "Yurttaş", "Yücelen", "Yılma", "Zihni", "Çapkan", "Çağveren",
      "Çelikyürek", "Çokan", "Çoğay", "Çıdal", "Önel", "Örik", "Özdil", "Özdoğdu", "Özokçu", "Özsözlü",
      "Ümmet", "Ünsever", "Ürfettin", "Üzer", "Şafii", "Şahat", "Şahmettin", "Şehamet", "Şevket", "Şide",
      "Şükri",
    ],
    female: [
      "Abiye", "Adal", "Akgüneş", "Alsoy", "Anargül", "Aral", "Arıpınar", "Ayduru", "Aygönenç", "Ayhan",
      "Aynilhayat", "Aysema", "Aysuna", "Azize", "Açılay", "Balca", "Banü", "Beste", "Birben", "Burcuhan",
      "Büşranur", "Canan", "Canur", "Cemiyle", "Damlanur", "Deha", "Deryanur", "Dilsitan", "Durgadin",
      "Ecegül", "Egenur", "Emal", "Emine.", "Erbay", "Erem", "Ervaniye", "Esengün", "Evde", "Fadile", "Fadıla",
      "Feden", "Feyha", "Firdevis", "Gabel", "Gilman", "Goncafer", "Gök", "Gökçe", "Gözem", "Gülbiye",
      "Gülcegün", "Gülder", "Gülfeza", "Gülkadın", "Gülmisal", "Gülselin", "Gülseren", "Gülsiye", "Gülzadiye",
      "Gülçe", "Gülözge", "Gülüs", "Günar", "Güngören", "Gürcüye", "Güverçin", "Güzey", "Hadrey", "Hafıza",
      "Haliye", "Hasgül", "Havse", "Hilayda", "Hinet", "Hüsnühâl", "Irıs", "Işin", "Işın", "İldeş", "İlkbahar",
      "İmrihan", "İrfan", "İslime", "İzel", "Jaruthip", "Kader", "Kifaye", "Kâzime", "Kısmet", "Lezize",
      "Lâle", "Lüfen", "Mahigül", "Maynur", "Meyhanim", "Mübetcel", "Mücevher", "Müferrih", "Münezzer",
      "Naide", "Narhanim", "Natalia", "Nazende", "Nazimet", "Nefaret", "Nejdet", "Neptün", "Neriban",
      "Neslinur", "Nili", "Nurbanu", "Nurdeniz", "Nuriyet", "Nurser", "Nurveren", "Nürice", "Orçin", "Paye",
      "Peren", "Piran", "Rahiye", "Rayla", "Rebihat", "Rehime", "Revza", "Rezin", "Ruhide", "Safinaz",
      "Safura", "Salimet", "Sefer", "Sejda", "Selcen", "Selvi", "Servinaz", "Sevdinar", "Sevgen", "Seyhan",
      "Simten", "Sonnur", "Sunay", "Süner", "Süzer", "Sırriye", "Temime", "Tercan", "Ticen", "Tomurcuk",
      "Tule", "Turcein", "Tuğçe", "Tülin", "Uğur", "Varlık", "Vecide", "Yahşi", "Yekbun", "Yurtseven",
      "Yıldız", "Zaliha", "Zelha", "Zeyno", "Zülbiye", "Zülfüye", "Âlemşah", "Çilga", "Örfiye", "Özdeş",
      "Özge", "Özlem", "Özyurt", "Ümmahan", "Ümray", "Şadıman", "Şahdiye", "Şahıgül", "Şehreban", "Şeref",
      "Şilan", "Şüküfe",
    ],
    surname: [
      "Akar", "Akdeniz", "Akgündüz", "Aksu", "Akça", "Akçay", "Alemdar", "Arslan", "Arsoy", "Aslan", "Bilge",
      "Bilgin", "Bilir", "Demir", "Demirel", "Dumanlı", "Duran", "Durdu", "Durmuş", "Eraslan", "Erdoğan",
      "Ergül", "Ertaş", "Fırat", "Gül", "Gülen", "Güçlü", "Hançer", "Hayrioğlu", "İhsanoğlu", "İnönü",
      "Karadeniz", "Korutürk", "Kısakürek", "Mansız", "Manço", "Sakarya", "Seven", "Sezer", "Sezgin", "Soylu",
      "Tarhan", "Tevetoğlu", "Türk", "Yaman", "Yorulmaz", "Yüksel", "Yıldırım", "Yılmaz", "Zengin", "Zorlu",
      "Çamurcuoğlu", "Çetin", "Çorlu", "Öcalan", "Ülker", "Şafak", "Şama", "Şener", "Şensoy",
    ],
  },

  // Common regions / communities: Ukraine and Ukrainian diaspora communities.
  // Source: Faker 40.1.2 person provider(s): uk_UA; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "ukrainian": {
    label: "Ukrainian",
    surnameFirst: false,
    male: [
      "Aaron", "Adam", "Alevtin", "Amvrosíj", "Andríj", "Anton", "Arkadíj", "Arsen", "Artem", "Avgustin",
      "Avrelíj", "Azar", "Bogdan", "Bogodar", "Boguslav", "Boleslav", "Boris", "Borislav", "Dan", "Danilo",
      "David", "Demid", "Dmitro", "Eduard", "Fedír", "Feofan", "Franc", "Gavrilo", "Gennadíj", "Georgíj",
      "German", "Glíb", "Gordíj", "Grigoríj", "Homa", "Josip", "Kirilo", "Kliment", "Kostântin", "Leon",
      "Leontíj", "Leoníd", "Levko", "Makar", "Maksim", "Marko", "Martin", "Mihajlo", "Mikita", "Mikolaj",
      "Miron", "Miroslav", "Nazar", "Nestor", "Ohrím", "Oleg", "Oleksa", "Oleksandr", "Omelân", "Onisim",
      "Opanas", "Orest", "Orhip", "Ostap", "Panas", "Pantelejmon", "Parmen", "Pavlo", "Petro", "Pilip",
      "Prohír", "Roman", "Rostislav", "Ruslan", "Semen", "Sergíj", "Simon", "Solomon", "Spas", "Staníslav",
      "Stefan", "Stepan", "Svâtoslav", "Taras", "Teodor", "Timofíj", "Trohim", "Ustim", "Vadim", "Valentin",
      "Valeríj", "Varfolomíj", "Venedikt", "Veníâmin", "Vladislav", "Volodimir", "Víktor", "Vítalíj", "Zahar",
      "Zinovíj", "Zorân", "Âkív", "Ârema", "Âroslav", "Êfrem", "Êlisej", "Êvgen", "Ígnat", "Ígor", "Íllâ",
      "Ívan", "Ûhim", "Ûstim",
    ],
    female: [
      "Ada", "Alla", "Alína", "Amalíâ", "Anastasíâ", "Aníta", "Anžela", "Bogdanna", "Boguslava", "Danna",
      "Darina", "Edita", "Emílíâ", "Eríka", "Galina", "Ganna", "Hristina", "Kamílla", "Klavdíâ", "Larisa",
      "Lílíâ", "Líza", "Lûbov", "Lûdmila", "Marina", "Marta", "Marusâ", "Maríâ", "Mihajlina", "Mílena",
      "Nadíâ", "Natalíâ", "Odarka", "Oksana", "Okseníâ", "Olena", "Orina", "Orisâ", "Príska", "Roksolana",
      "Rozalíâ", "Snížana", "Sofíâ", "Solomíâ", "Svâtoslava", "Svítlana", "Tereza", "Tetâna", "Valentina",
      "Varvara", "Vasilina", "Volodimira", "Víktoríâ", "Víoletta", "Víra", "Zlatoslava", "Ârina", "Âroslava",
      "Êlisaveta", "Êva", "Írena", "Írina", "Ûstina",
    ],
    surname: [
      "Adamenko", "Androŝuk", "Andrusenko", "Arhipenko", "Artim", "Artimišina", "Artûh", "Asaula", "Atamančuk",
      "Atroŝenko", "Avramenko", "Avramčuk", "Ažaža", "Babak", "Babíj", "Bajda", "Balaban", "Baranik",
      "Barannik", "Batíg", "Bazavlučenko", "Baštan", "Bevzenko", "Bgidenko", "Carenko", "Cibulenko", "Cuško",
      "Cûcûra", "Dacenko", "Dahno", "Daragan", "Davimuka", "Dašenko", "Dejneka", "Demidenko", "Derâžnij",
      "Drobaha", "Drozdenko", "Dubenko", "Dzindra", "Džus", "Farenûk", "Fesenko", "Fomenko", "Furs",
      "Fílípenko", "Gabelko", "Gajda", "Gajdabura", "Gajdaj", "Gajdenko", "Gavrilenko", "Gavrilív", "Gavriš",
      "Godunok", "G̀alag̀an", "G̀ereta", "G̀erus", "Harčenko", "Kabalûk", "Karmalûk", "Karpa", "Karpenko",
      "Kaŝenko", "Kirilenko", "Konoplenko", "Konoplâ", "Korolenko", "Korž", "Kovalenko", "Kovpak", "Lavrenko",
      "Lisenko", "Litvin", "Lucenko", "Lukaš", "Lupíj", "Lâško", "Makarenko", "Medvedenko", "Mihajličenko",
      "Mikitûk", "Negoda", "Nosačenko", "Ohrimovič", "Olífírenko", "Olíjnik", "Oniŝenko", "Oníŝuk", "Ostapčuk",
      "Ovsíênko", "Palíj", "Parasûk", "Pavlenko", "Petrik", "Pritula", "Prokopovič", "Puškar", "Píddubna",
      "Píddubnij", "Rak", "Rebrik", "Reva", "Romanenko", "Sačenko", "Simonenko", "Skorik", "Slûsar",
      "Sviridenko", "Sírčenko", "Taran", "Tarasenko", "Tereŝenko", "Teslâ", "Titarenko", "Tičina", "Tkač",
      "Tokar", "Tovstuha", "Trigub", "Tâgnibok", "Udovenko", "Usik", "Ustenko", "Vahníj", "Valenko",
      "Vančenko", "Vasilaško", "Vaŝenko", "Vaŝuk", "Veličko", "Vengrinovič", "Vergun", "Verhola", "Vernigora",
      "Višivana", "Višivanij", "Vovk", "Víter", "Zabašta", "Zabíla", "Zakusilo", "Zaruba", "Zatovkanûk",
      "Âcenûk", "Âkimčuk", "Âkovenko", "Âremko", "Âremkív", "Âroš", "Êrošenko", "Êrčenko", "Êvdokimenko",
      "Êvtušok", "Ísaênko", "Ívaničuk", "Ívančenko", "Íŝenko", "Í̈žak", "Ûrčišin", "Ûrčišina", "Ûŝenko",
      "Čajka", "Čalenko", "Čalij", "Červonenko", "Čubaj", "Čujko", "Ŝerbak", "Šamraj", "Šeremet", "Šilo",
      "Šinkarenko", "Šiân", "Šmorgun", "Štepa", "Švačka", "Švačko", "Žalílo", "Žuk",
    ],
  },

  // Common regions / communities: Uzbekistan and neighboring Central Asian communities.
  // Source: Faker 40.1.2 person provider(s): uz_UZ; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: The current engine uses one fixed surname for both generated characters; it does not inflect gendered surnames or patronymics.
  "uzbek": {
    label: "Uzbek",
    surnameFirst: false,
    male: [
      "Abbos", "Abduaziz", "Abduboriy", "Abdulhamid", "Abdulloh", "Abdumalik", "Abdurahmon", "Abror",
      "Abubakr", "Ahmad", "Akbar", "Akmal", "Akobir", "Ali", "Alinur", "Amir", "Anvar", "Asad", "Asilbek",
      "Ayub", "Aziz", "Behruz", "Bilol", "Bobur", "Daler", "Damir", "Diyor", "Doniyor", "Dovud", "Farhod",
      "Fariz", "Firdavs", "Fuzayl", "Gabriel", "Habib", "Halid", "Hasan", "Humoyun", "Ibrohim", "Imron",
      "Isfandiyor", "Islom", "Ismoil", "Jahongir", "Jalol", "Jamshid", "Jasur", "Javohir", "Ja’far", "Kamron",
      "Laziz", "Mahdi", "Mahmud", "Miran", "Miron", "Mironshoh", "Muhammad", "Muhammadali", "Muhammadamin",
      "Muhammadamir", "Muhammadayub", "Muhammadaziz", "Muhammadrizo", "Muhammadsafo", "Muhammadsodiq",
      "Muhammadsolih", "Muhammadumar", "Muhammadyasin", "Muhammadyusuf", "Muhammadziyo", "Murod", "Muslim",
      "Mustafo", "Nurmuhammad", "Otabek", "Saddam", "Said", "Salohiddin", "Samandar", "Samir", "Sanjar",
      "Sardor", "Sarvar", "Shahriyor", "Shahzod", "Shahzoda", "Shohjahon", "Shohrux", "Temir", "Ulug‘bek",
      "Umar", "Usmon", "Xolid", "Yahyo", "Yasin", "Yunus", "Yusuf", "Zakariyo", "Zayd", "Zubayr",
    ],
    female: [
      "Afruza", "Aliya", "Alzina", "Amina", "Amira", "Anisa", "Ansora", "Asila", "Asma", "Asmira", "Aylin",
      "Aziza", "Bibisora", "Bonu", "Charos", "Dildora", "Dilnoz", "Dilnur", "Diyora", "Dunyo", "Durdona",
      "Elif", "E’zoza", "Farangiz", "Fariza", "Farzona", "Feruza", "Fotima", "Habiba", "Hadicha", "Hadija",
      "Humayra", "Ifora", "Imona", "Iymona", "Jasmina", "Kumush", "Laylo", "Madina", "Maftuna", "Malak",
      "Malika", "Marjona", "Maryam", "Mehrimoh", "Milana", "Mohinur", "Mohlaroyim", "Mubina", "Muhsina",
      "Muizza", "Mumtoz", "Munisa", "Mursalina", "Musfira", "Mushtariy", "Muslima", "Muxlisa", "Muzayyana",
      "Muzdalifa", "Nilufar", "Nozima", "Nuriya", "Odina", "Omina", "Osiyo", "Oysha", "Rayhona", "Rayyona",
      "Robiya", "Roziya", "Ruhshona", "Rumaysa", "Ruqiya", "Sabina", "Sabrina", "Sadia", "Safina", "Safiya",
      "Saida", "Sakina", "Samina", "Samira", "Samiya", "Sarvinoz", "Sa’diya", "Sevara", "Sevinch", "Shahina",
      "Shahnoza", "Shukrona", "Soliha", "Sumayya", "Yasina", "Yasmina", "Zahro", "Zakiyaxon", "Zarina",
      "Zaynab", "Zinnura",
    ],
    surname: [
      "Abbosov", "Abduazizov", "Abduboriyov", "Abdulhamidov", "Abdullohov", "Abdumalikov", "Abdurahmonov",
      "Abrorov", "Abubakrov", "Afruzova", "Ahmadov", "Akmalov", "Akobirov", "Alinurov", "Aliyev", "Aliyeva",
      "Aminova", "Amirayeva", "Amirov", "Anisayeva", "Ansorova", "Anvarov", "Asadov", "Asilayeva", "Asilbekov",
      "Asmanova", "Asmiraeva", "Aylinova", "Ayubov", "Azizov", "Behruzov", "Bibisorayeva", "Bilolov",
      "Boburov", "Bonueva", "Charosova", "Dalerov", "Damirov", "Dildorova", "Dilnozova", "Dilnurova",
      "Diyorayeva", "Diyorov", "Doniyorov", "Dovudov", "Dunyoeva", "Durdonova", "Elifova", "E’zozova",
      "Farangizova", "Farhodov", "Farizayeva", "Farizov", "Farzonova", "Feruzova", "Firdavsev", "Gabriyelov",
      "Habibov", "Habibova", "Hadichayeva", "Hadijayeva", "Halidov", "Hasanov", "Humayrova", "Humoyunov",
      "Ibrohimov", "Iforayeva", "Imonova", "Imronov", "Isfandiyorov", "Islomov", "Ismoilov", "Iymonova",
      "Jahongirov", "Jalolov", "Jamshidov", "Jasminova", "Javohirov", "Ja’farov", "Kamronov", "Kumushova",
      "Laylova", "Lazizov", "Madinaeva", "Maftunova", "Mahdiev", "Mahmudov", "Malakova", "Malikova",
      "Marjonova", "Maryamova", "Mehrimohova", "Mehrojov", "Milanova", "Miranov", "Mironov", "Mironshohov",
      "Mohinurova", "Mohlaroyimova", "Mubinova", "Muhammadaliyev", "Muhammadamirov", "Muhammadayubov",
      "Muhammadazizov", "Muhammadov", "Muhammadsafoev", "Muhammadsodiqov", "Muhammadsolihov",
      "Muhammadyasinov", "Muhammadyusupov", "Muhammadziyoev", "Muhsinova", "Muizzova", "Mumtozova",
      "Munisayeva", "Murodov", "Mursalinaeva", "Musfirayeva", "Mushtariyeva", "Muslimaeva", "Muslimov",
      "Mustafayev", "Muxlisayeva", "Muzayyanova", "Muzdalifayeva", "Nilufarova", "Nozimova", "Nurmuhammadov",
      "Odinaeva", "Ominova", "Osiyeva", "Otabekov", "Oyshayeva", "Rayhonova", "Rayyonova", "Robiyayeva",
      "Roziyayeva", "Ruhshonova", "Rumaysayeva", "Saddamov", "Sadiyeva", "Safinayeva", "Safiyeva", "Saidov",
      "Saidova", "Sakinayeva", "Salohiddinov", "Samandarov", "Samirov", "Samirova", "Sanjarov", "Sarvinozova",
      "Sevarova", "Sevinchova", "Shahinova", "Shahnozova", "Shahriyorov", "Shahzodov", "Shohjahonov",
      "Shohruxov", "Shukronova", "Solihayeva", "Sumayyeva", "Temirov", "Ulug‘bekov", "Usmonov", "Xolidov",
      "Yahyoev", "Yasinaeva", "Yasinov", "Yasminova", "Yunusov", "Yusupov", "Zahroyeva", "Zakariyoev",
      "Zakiyaxonova", "Zarinova", "Zayidov", "Zaynabova", "Zubayrov",
    ],
  },

  // Common regions / communities: Vietnam and Vietnamese diaspora communities.
  // Source: Hand-curated illustrative names; not a frequency-ranked or independently audited list.
  // Note: Middle names are omitted by the current engine.
  "vietnamese": {
    label: "Vietnamese",
    surnameFirst: true,
    male: [
      "An", "Anh", "Bảo", "Bình", "Cường", "Dũng", "Đạt", "Đức", "Duy", "Hải", "Hiếu", "Hoàng", "Hùng", "Huy",
      "Khánh", "Khoa", "Kiên", "Lâm", "Long", "Minh", "Nam", "Nghĩa", "Phong", "Phúc", "Quang", "Quân", "Sơn",
      "Tài", "Thành", "Thắng", "Thiện", "Tiến", "Toàn", "Trí", "Trung", "Tuấn", "Việt", "Vinh",
    ],
    female: [
      "An", "Anh", "Bích", "Chi", "Diễm", "Dung", "Duyên", "Giang", "Hà", "Hạnh", "Hiền", "Hoa", "Hồng",
      "Hương", "Khánh", "Kim", "Lan", "Linh", "Loan", "Mai", "Mi", "My", "Nga", "Ngọc", "Như", "Nhi", "Oanh",
      "Phương", "Quỳnh", "Thảo", "Thu", "Thúy", "Thủy", "Trang", "Trinh", "Tuyết", "Vân", "Vy", "Yến",
    ],
    surname: [
      "Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô",
      "Dương", "Lý", "Đinh", "Trương", "Đoàn", "Lâm", "Đào", "Mai", "Trịnh", "Hà", "Tô", "Tạ", "Cao", "Chu",
      "Quách", "Lưu", "Thái", "Tăng", "Vương", "Châu", "Tôn", "Kiều", "Mạc", "La", "Đồng", "Đàm",
    ],
  },

  // Common regions / communities: Nigeria, Ghana, Senegal, Mali and other West African countries.
  // Original category — all original entries retained.
  "west-african": {
    label: "West African",
    surnameFirst: false,
    male: [
      "Abdoulaye", "Aboubacar", "Adama", "Ahmed", "Amadou", "Ayo", "Babacar", "Bakari", "Boubacar", "Cheikh",
      "Chinedu", "Daouda", "Diallo", "Dogo", "Emeka", "Femi", "Habib", "Ibrahim", "Idrissa", "Issa", "Kader",
      "Kofi", "Kwabena", "Kwame", "Lamine", "Lansana", "Mamadou", "Moussa", "Naby", "Nana", "Ndiaye", "Obinna",
      "Ousmane", "Sadio", "Salif", "Samba", "Sekou", "Souleymane", "Tijan", "Toumani", "Yao", "Youssouf",
      "Abiola", "Adekunle", "Adewale", "Afolabi", "Ayodele", "Babatunde", "Chima", "Chinonso", "Ekene",
      "Enoch", "Folami", "Ifeanyi", "Kehinde", "Kojo", "Kwaku", "Mensah", "Nnamdi", "Olumide", "Oluwaseun",
      "Osei", "Sani", "Taiwo", "Temidayo", "Tunde", "Yakubu", "Yaw", "Yemi", "Yusuf", "Zuberi", "Abdoul",
      "Blaise", "Demba", "Ebrima", "Gaston", "Kassim", "Lukman", "Mory", "Nuhu", "Pape", "Rashidi", "Seydou",
      "Tidiane", "Umaru", "Wale", "Yaro", "Zidane", "Amani", "Boubou", "Cheick", "Djibril", "Fadel", "Harouna",
      "Issouf", "Kabore", "Malick", "Nfamara",
    ],
    female: [
      "Abena", "Ada", "Adama", "Afi", "Aicha", "Aissatou", "Ama", "Aminata", "Amina", "Anaba", "Aya", "Ayana",
      "Binta", "Coumba", "Deka", "Efe", "Fatimata", "Fatou", "Habi", "Hadiza", "Halima", "Hawa", "Ifeoma",
      "Imani", "Kadija", "Kadiatou", "Kehinde", "Khadija", "Kokou", "Kumba", "Mariama", "Mariam", "Mawa",
      "Nabou", "Nafissatou", "Nana", "Ngozi", "Nneka", "Olamide", "Oluwakemi", "Ramata", "Rokia", "Safiya",
      "Salimata", "Saran", "Seynabou", "Titi", "Yaa", "Yemi", "Zainab", "Abimbola", "Adesuwa", "Aisha",
      "Akosua", "Anuli", "Araba", "Ayisat", "Bolanle", "Chioma", "Djeneba", "Efua", "Esi", "Folake", "Habiba",
      "Idara", "Kemi", "Maimouna", "Mireille", "Moriam", "Naomi", "Nimatou", "Omolara", "Oyin", "Ramatoulaye",
      "Sade", "Sira", "Taiwo", "Temitope", "Tinuke", "Yewande", "Zara", "Abeni", "Bisi", "Chiamaka", "Diarra",
      "Fanta", "Kande", "Mame", "Nafi", "Ogechi", "Ramatu", "Sokhna", "Tounkara", "Yacine", "Zeynab", "Aminou",
      "Bineta", "Fadima", "Korka",
    ],
    surname: [
      "Abiola", "Acheampong", "Adebayo", "Adjaye", "Agyei", "Akanbi", "Akande", "Bah", "Balde", "Bangura",
      "Barry", "Bayo", "Camara", "Ceesay", "Conteh", "Coulibaly", "Danso", "Diallo", "Diarra", "Dramani",
      "Fofana", "Gueye", "Jallow", "Kamara", "Kanoute", "Keita", "Konate", "Koroma", "Koulibaly", "Lawal",
      "Mane", "Mensah", "Mohammed", "Musa", "Ndiaye", "Nkrumah", "Nwosu", "Obi", "Okafor", "Osei", "Owusu",
      "Sacko", "Sallah", "Sane", "Sanogo", "Sarr", "Sesay", "Sissoko", "Soumah", "Sylla", "Tamba", "Toure",
      "Traore", "Yakubu", "Yeboah", "Abubakar", "Adeyemi", "Afolayan", "Balogun", "Chukwu", "Diala", "Ekong",
      "Fadiga", "Gbadebo", "Issoufou", "Jatta", "Kabba", "Kone", "Mendy", "Ndiour", "Nwachukwu", "Odinga",
      "Okoro", "Oladipo", "Olowu", "Onyango", "Sow", "Tamboura", "Tapsoba", "Tembo", "Tidjani", "Toungara",
      "Wade", "Yansane", "Yaro", "Zongo", "Anane", "Bamba", "Doumbia", "Faye", "Gassama", "Kouyate", "Lamine",
      "Maiga", "Ouattara", "Sawadogo", "Sidibe", "Tounkara", "Yattara",
    ],
  },

  // Common regions / communities: Western and Northern Europe; original list is particularly Anglophone.
  // Original category — all original entries retained.
  "western-northern-european": {
    label: "Western / Northern European",
    surnameFirst: false,
    male: [
      "Adam", "Adrian", "Albert", "Alexander", "Alfred", "Anders", "Andrew", "Anthony", "Arthur", "Benjamin",
      "Bernard", "Brandon", "Brian", "Caleb", "Carl", "Charles", "Christian", "Christopher", "Colin", "Connor",
      "Daniel", "David", "Dominic", "Edward", "Elias", "Elijah", "Eric", "Ethan", "Felix", "Finn", "Francis",
      "Frederick", "Gabriel", "George", "Graham", "Grant", "Gregory", "Harold", "Harry", "Henry", "Hugh",
      "Ian", "Isaac", "Jack", "Jacob", "James", "Jason", "Jeremy", "Joel", "John", "Jonathan", "Joseph",
      "Julian", "Kevin", "Lars", "Leo", "Leon", "Lewis", "Liam", "Logan", "Louis", "Lucas", "Luke", "Marcus",
      "Martin", "Matthew", "Maxwell", "Michael", "Nathan", "Nicholas", "Noah", "Oliver", "Oscar", "Owen",
      "Patrick", "Paul", "Peter", "Philip", "Raymond", "Richard", "Robert", "Ryan", "Samuel", "Sebastian",
      "Simon", "Stephen", "Theodore", "Thomas", "Timothy", "Tristan", "Victor", "Vincent", "Walter", "William",
      "Zachary", "Aidan", "Brett", "Declan", "Rhys",
    ],
    female: [
      "Abigail", "Alice", "Amanda", "Amelia", "Anna", "Audrey", "Beatrice", "Bethany", "Bridget", "Camille",
      "Caroline", "Catherine", "Charlotte", "Chloe", "Claire", "Clara", "Danielle", "Diana", "Eleanor",
      "Elena", "Elisa", "Elizabeth", "Ella", "Emily", "Emma", "Erica", "Eva", "Evelyn", "Felicity", "Florence",
      "Francesca", "Gabrielle", "Georgia", "Grace", "Hannah", "Harriet", "Hazel", "Heather", "Helena", "Holly",
      "Imogen", "Irene", "Isabel", "Isabella", "Jacqueline", "Jane", "Jasmine", "Jennifer", "Jessica",
      "Joanna", "Josephine", "Julia", "Juliette", "Karen", "Katherine", "Laura", "Lauren", "Lillian", "Lily",
      "Lucy", "Madeline", "Margaret", "Maria", "Marianne", "Martha", "Mary", "Matilda", "Megan", "Natalie",
      "Nicole", "Nora", "Olivia", "Patricia", "Penelope", "Rachel", "Rebecca", "Rose", "Rosalie", "Samantha",
      "Sarah", "Scarlett", "Sophia", "Sophie", "Stella", "Susan", "Sylvia", "Teresa", "Valerie", "Vanessa",
      "Victoria", "Violet", "Vivian", "Wendy", "Zoe", "Alicia", "Cecilia", "Elaine", "Freya", "Louise",
    ],
    surname: [
      "Anderson", "Armstrong", "Atkinson", "Baker", "Barnes", "Bell", "Bennett", "Black", "Bradley", "Brooks",
      "Brown", "Butler", "Campbell", "Carter", "Chapman", "Clark", "Coleman", "Collins", "Cook", "Cooper",
      "Cox", "Cunningham", "Davies", "Davis", "Dawson", "Edwards", "Ellis", "Evans", "Fisher", "Fletcher",
      "Ford", "Foster", "Fox", "Fraser", "Gibson", "Graham", "Grant", "Gray", "Green", "Griffin", "Hall",
      "Hamilton", "Harris", "Harrison", "Hayes", "Henderson", "Hill", "Holmes", "Howard", "Hughes", "Hunter",
      "Jackson", "James", "Jenkins", "Johnson", "Jones", "Kelly", "Kennedy", "King", "Knight", "Lewis",
      "Lloyd", "Marshall", "Martin", "Mason", "Miller", "Mitchell", "Moore", "Morgan", "Morris", "Murphy",
      "Murray", "Nelson", "Nichols", "Parker", "Phillips", "Powell", "Price", "Reed", "Reynolds", "Richardson",
      "Roberts", "Robinson", "Ross", "Scott", "Shaw", "Simpson", "Smith", "Stewart", "Taylor", "Thompson",
      "Turner", "Walker", "Ward", "Watson", "White", "Williams", "Wilson", "Wright", "Young",
    ],
  },

  // Common regions / communities: No specific region; historical, mythological, fictional and unconventional names.
  // Original category — all original entries retained.
  "wildcard": {
    label: "Wildcard",
    surnameFirst: false,
    male: [
      "Grim", "Grymm", "Khan", "Duke", "Zephyr", "Rearden", "Idris", "Caius", "Theron", "Oberon", "Lysander",
      "Isidor", "Callum", "Evander", "Caspian", "Aki", "Asbjorn", "Asgeirr", "Asmundr", "Audunn", "Baggi",
      "Bardr", "Bersi", "Bjarki", "Bjorn", "Brandr", "Bragi", "Dagfinnr", "Danr", "Egil", "Eilifr", "Eindridi",
      "Eirikr", "Erlingr", "Eyjolfr", "Falki", "Fenrir", "Finnr", "Floki", "Freysteinn", "Fridgeirr", "Gauti",
      "Geirmundr", "Geirr", "Gisli", "Gnupr", "Grimr", "Gunnarr", "Gudbrandr", "Gudmundr", "Hallbjorn",
      "Hallfredr", "Hallr", "Halldorr", "Haraldr", "Hakon", "Halfdan", "Helgi", "Herjolfr", "Hjalmarr",
      "Hjorleifr", "Hrafn", "Hrolfr", "Ivarr", "Jarl", "Josteinn", "Ketill", "Kjartan", "Knutr", "Kolbeinn",
      "Leifr", "Magnus", "Njall", "Oddr", "Olafr", "Ormr", "Ragnarr", "Raudr", "Sigfuss", "Sigmundr",
      "Sigtryggr", "Sigurdr", "Skeggi", "Skuli", "Snorri", "Solvi", "Steinarr", "Styrbjorn", "Saemundr",
      "Thorsteinn", "Thorkell", "Tryggvi", "Ubbi", "Ulfarr", "Ulfr", "Valbrandr", "Valgardr", "Vebjorn",
      "Vermundr", "Vigfuss", "Yngvarr", "Custer", "Alduin", "Ancalagon", "Arcturus", "Ash", "Atreides",
      "Balthazar", "Beowulf", "Bismarck", "Blade", "Borealis", "Caesar", "Cassian", "Cato", "Cobalt", "Conan",
      "Corvus", "Cyrus", "Dante", "Darwin", "Da Vinci", "Drax", "Drake", "Echo", "Edison", "Elric", "Ender",
      "Fafnir", "Falcon", "Fenrir", "Feynman", "Flint", "Galileo", "Gandalf", "Mordenkainan", "Arthur",
      "Gawain", "Gideon", "Griffin", "Hadrian", "Hannibal", "Hawking", "Helios", "Horus", "Icarus", "Indigo",
      "Isaac", "Jareth", "Jove", "Julius", "Kael", "Khan", "Korben", "Lancelot", "Loki", "Lucius", "Magnus",
      "Maverick", "Merlin", "Morpheus", "Nebula", "Neo", "Newton", "Nimbus", "Nomad", "Nyx", "Oberon",
      "Odysseus", "Onyx", "Orion", "Osiris", "Peregrine", "Plato", "Quasar", "Raiden", "Ragnar", "Remus",
      "Riker", "Ripley", "Romulus", "Rune", "Sagan", "Shadow", "Sherlock", "Sigurd", "Sol", "Spartacus",
      "Storm", "Talos", "Tesla", "Thane", "Thorin", "Titan", "Tyr", "Ulric", "Valerian", "Vega", "Vulcan",
      "Warden", "Wolf", "Zodiac", "Hastur", "Hadrian", "Ashurbanipal", "Nebuchadnezzar", "Gilgamesh", "Sargon",
      "Naram Sin", "Hammurabi", "Shulgi", "Tiglath", "Enmerkar", "Utnapishtim", "Amenhotep", "Akhenaten",
      "Tutankhamun", "Ramses", "Thutmose", "Seti", "Khufu", "Khafre", "Menes", "Imhotep", "Cyrus", "Darius",
      "Xerxes", "Artaxerxes", "Ardashir", "Khosrow", "Mithridates", "Orodes", "Spitamenes", "Cambyses",
      "Chandragupta", "Bindusara", "Harsha", "Kanishka", "Bimbisara", "Ajatashatru", "Vikramaditya",
      "Chanakya", "Panini", "Qin Shi Huang", "Liu Bang", "Han", "Sun", "Confucius", "Laozi", "Zhuangzi",
      "Sima Qian", "Cao Cao", "Zhuge Liang", "Mansa Musa", "Sundiata", "Sunni Ali", "Askia", "Tenkamenin",
      "Idris Alooma", "Shaka", "Shango", "Oduduwa", "Osei-Tutu", "Pacal", "Itzamna", "Kukulkan", "K’inich",
      "YaxKukMo", "Ahau", "Tezcatlipoca", "Mixcoatl", "Cuauhtemoc", "Montezuma", "Kruppe", "Kupe", "Maui",
      "Hotu-Matu", "Rangi", "Tane", "Tangaroa", "Tiki", "Tamatea", "Toi", "Rongo", "Caratacus", "Arminius",
      "Alaric", "Attila", "Theodoric", "Odoacer", "Clovis", "Leonidas", "Pericles", "Solon", "Plato",
      "Socrates", "Aristotle", "Hannibal", "Scipio", "Caesar", "Augustus",
    ],
    female: [
      "Haven", "Seraphina", "Isolde", "Thessaly", "Calixta", "Zora", "Vesper", "Ondine", "Elowen", "Caelia",
      "Ashoka", "Thessaly", "Aesa", "Alfhildr", "Arnbjorg", "Aslaug", "Astrid", "Audhild", "Bergljot",
      "Brynhildr", "Dagny", "Eir", "Freydis", "Frida", "Geirhildr", "Gudrid", "Gudrun", "Gunnhildr",
      "Hallbera", "Hallgerd", "Helga", "Herdis", "Hildr", "Ingibjorg", "Ingrid", "Jorunn", "Katla",
      "Ragnhildr", "Runa", "Sif", "Signy", "Lady", "Medea", "Hecate", "Sigrid", "Solveig", "Steinunn", "Thora",
      "Thordis", "Torhild", "Tyra", "Unn", "Valdis", "Vigdis", "Ylva", "Aelita", "Andromeda", "Anya",
      "Artemis", "Arya", "Aurora", "Bellatrix", "Boudicca", "Calypso", "Cassiopeia", "Cersei", "Circe",
      "Cleopatra", "Comet", "Cora", "Cosima", "Daenerys", "Dahlia", "Diana", "Echo", "Electra", "Elora",
      "Eowyn", "Eris", "Esmeray", "Freya", "Galadriel", "Gaia", "Gwen", "Halo", "Hathor", "Hecate", "Helia",
      "Hypatia", "Indigo", "Ione", "Isolde", "Juno", "Kali", "Kestrel", "Khaleesi", "Lilith", "Luna", "Lyra",
      "Maeve", "Medusa", "Minerva", "Mirage", "Morgana", "Myst", "Nebula", "Nemesis", "Nova", "Nymeria", "Nyx",
      "Octavia", "Olympia", "Opal", "Pandora", "Persephone", "Phoenix", "Quilla", "Raven", "Rhea", "Ripley",
      "River", "Rogue", "Sable", "Saga", "Selene", "Seraphine", "Xenon", "Zephyr", "Shadow", "Sif", "Solara",
      "Starling", "Storm", "Sylvanas", "Tempest", "Thalassa", "Titania", "Trinity", "Umbra", "Valkyrie",
      "Vega", "Venus", "Vesper", "Vex", "Willow", "Winter", "Xena", "Yvaine", "Zephyra", "Zinnia", "Astra",
      "Belladonna", "Cosmos", "Rune", "Velora", "Nefertari", "Cleopatra", "Hatshepsut", "Meritamen", "Tiye",
      "Neithhotep", "Ankhesenamun", "Isisnofret", "Satiah", "Tawosret", "Inanna", "Ishtar", "Ereshkigal",
      "Ninhursag", "Ninsun", "Enheduanna", "Shibtu", "Kubaba", "Nanshe", "Gula", "Atossa", "Roxana", "Mandane",
      "Parysatis", "Artemis", "Cassandane", "Parisatys", "Stateira", "Amestris", "Barsine", "Ahilya", "Kunti",
      "Gandhari", "Draupadi", "Sita", "Radha", "Tara", "Maya", "Yashoda", "Subhadra", "BanZhao", "Wu Zetian",
      "Xiang Shi", "Zhao Feiyan", "Ma Xianglan", "Diao Chan", "CaiYan", "Wen Ji", "Makeda", "Nandi", "Amina",
      "Amanirenas", "Candace", "Yennenga", "Nzinga", "Moremi", "Idia", "Amina", "Xochitl", "Coyolxauhqui",
      "Chalchiuhtlicue", "Tlazolteotl", "Iztaccihuatl", "Malinalli", "Metztli", "Atlatonin", "Hina", "Pele",
      "Papa", "Haumea", "Laka", "Rongo", "Taranga", "Hinemoa", "Wairaka", "Matariki", "Boudica", "Cartimandua",
      "Epona", "Brigid", "Morrigan", "Medb", "Arianrhod", "Rhiannon", "Nemetona", "Sirona", "Aspasia",
      "Hypatia", "Sappho", "Cleobulina", "Theano", "Diotima", "Phryne", "Artemisia", "Lamia", "Cynisca",
    ],
    surname: [
      "Duke", "Custer", "Ashland", "Haven", "Ashvane", "Caldwell", "Draven", "Morrow", "Nightingale", "Sorrel",
      "Thorne", "Voss", "Waverly", "Wynne", "Aegisson/Aegisdottir", "Alfsson/Alfsdottir",
      "Arnarson/Arnarsdottir", "Askelsson/Askelsdottir", "Asmundsson/Asmundsdottir", "Bergsson/Bergsdottir",
      "Bjarnason/Bjarnasdottir", "Bjornsson/Bjornsdottir", "Brandsson/Brandsdottir", "Dagsson/Dagsdottir",
      "Egilsson/Egilsdottir", "Eiriksson/Eiriksdottir", "Erlandsson/Erlandsdottir",
      "Finnbogason/Finnbogasdottir", "Flokisson/Flokisdottir", "Frodesson/Frodesdottir",
      "Geirsson/Geirsdottir", "Gislason/Gislasdottir", "Grimsson/Grimsdottir", "Gudmundsson/Gudmundsdottir",
      "Gunnarsson/Gunnarsdottir", "Halfdansson/Halfdansdottir", "Hallsson/Hallsdottir",
      "Haraldsson/Haraldsdottir", "Hauksson/Hauksdottir", "Helgason/Helgasdottir",
      "Herjolfsson/Herjolfsdottir", "Hrafnsson/Hrafnsdottir", "Hrolfsson/Hrolfsdottir",
      "Ingvarsson/Ingvarsdottir", "Ivarsson/Ivarsdottir", "Jorundsson/Jorundsdottir", "Karlsson/Karlsdottir",
      "Ketilsson/Ketilsdottir", "Knutsson/Knutsdottir", "Kolbeinsson/Kolbeinsdottir", "Leifsson/Leifsdottir",
      "Magnusson/Magnusdottir", "Njallsson/Njallsdottir", "Oddsson/Oddsdottir", "Olafsson/Olafsdottir",
      "Ormsson/Ormsdottir", "Ragnarsson/Ragnarsdottir", "Sigurdsson/Sigurdsdottir", "Snorrason/Snorrasdottir",
      "Solvason/Solvasdottir", "Steinsson/Steinsdottir", "Styrbjornsson/Styrbjornsdottir",
      "Sverrisson/Sverrisdottir", "Thorarinsson/Thorarinsdottir", "Thorbergsson/Thorbergsdottir",
      "Thorbjornsson/Thorbjornsdottir", "Thordarson/Thordarsdottir", "Thorgeirsson/Thorgeirsdottir",
      "Thorkelsson/Thorkelsdottir", "Thorleifsson/Thorleifsdottir", "Thorolfsson/Thorolfsdottir",
      "Thorsteinsson/Thorsteinsdottir", "Tryggvason/Tryggvasdottir", "Ulfsson/Ulfsdottir",
      "Valgardsson/Valgardsdottir", "Vigfusson/Vigfusdottir", "Yngvarsson/Yngvarsdottir", "Ashwalker",
      "Blackthorn", "Brightblade", "Cinder", "Cloudbreaker", "Crowley", "Darkwater", "Dawnforge", "Doomhammer",
      "Dragonbane", "Dreamweaver", "Emberfall", "Evenwood", "Falconer", "Farseer", "Firebrand", "Frostfang",
      "Galewind", "Grimshaw", "Hawkwinter", "Hellstrom", "Ironwood", "Kingsley", "Lightbringer", "Longstride",
      "Moonshadow", "Nightbane", "Nightingale", "Northstar", "Oakenshield", "Obsidian", "Quickblade",
      "Ravencrest", "Redmane", "Riverwind", "Runeblade", "Shadowalker", "Silverfang", "Skylark", "Starborn",
      "Steelheart", "Stonehelm", "Stormborn", "Sunstrider", "Swiftarrow", "Thundershield", "Valeborn",
      "Voidwalker", "Warbringer", "Whisperwind", "Wintermere", "Wolfbane", "Xandros", "Zephyrion", "Blackwood",
      "Coldfire", "Dreadmoor", "Evernight", "Frostborne", "Goldleaf", "Grayshade", "Highwind", "Ironbane",
      "Moonfall", "Nethermere", "Riftwalker", "Shadowend", "Skyrunner", "Soulforge", "Starweaver",
      "Stormcaller", "Sunweaver", "Thornfield", "Voidstar", "Wildthorn", "Winterborn", "Ashenvale",
      "Brightstorm", "Darkbane", "Emberstone", "Firewalker", "Ghostwalker", "Grimward", "Icevein",
      "Nightwhisper", "Ravenwood", "Shadowmere", "Skydancer", "Stormveil", "Thornbreaker", "Umbermoor",
      "Voidheart", "Windrider", "Wyrmwood", "Blackflame", "Duskwalker", "Frostweaver", "Starfall", "Stonefang",
    ],
  },

  // Common regions / communities: Southwestern Nigeria, Benin and Togo; worldwide diaspora.
  // Source: Faker 40.1.2 person provider(s): yo_NG; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  "yoruba": {
    label: "Yoruba",
    surnameFirst: false,
    male: [
      "Abayomi", "Abiodun", "Abiona", "Adebiyi", "Adebowale", "Adedayo", "Adedeji", "Adekitan", "Adekola",
      "Adekunle", "Adeleke", "Adeniyi", "Adeolu", "Adeoti", "Aderopo", "Adeshina", "Adesoji", "Adetayo",
      "Adeyi", "Adigun", "Afolarin", "Ajala", "Ajani", "Akanmu", "Akinkunmi", "Akinlabi", "Akinwale", "Alade",
      "Alamu", "Anjolaoluwa", "Ayinde", "Ayodeji", "Ayodele", "Babasola", "Babatunji", "Babawale", "Damife",
      "Demilade", "Durodola", "Ekundayo", "Esupofo", "Folu", "Gbadebo", "Gbolahan", "Gbowoade", "Ibidapo",
      "Ige", "Ikeoluwa", "Inioluwa", "Iseoluwa", "Ishola", "Juwon", "Keji", "Kolawole", "Korede", "Leke",
      "Lere", "Niyilolawa", "Oba", "ObaniJesu", "Ogooluwa", "Oke", "Oladare", "Oladimeji", "Olakunle",
      "Olanrewaju", "Olansile", "Olumorotimi", "Oluwafemi", "Oluwagbemiga", "Oluwamumibori", "Oluwamuyiwa",
      "Oluwasanmi", "Oluwasegun", "Oluwole", "Omobobola", "Omotayo", "Osunleke", "Seye", "Shekoni", "Sijuade",
      "Tade", "Temidayo", "Toki", "Tokunbo", "Tomori",
    ],
    female: [
      "Aanuoluwapo", "Abebi", "Abeni", "Abosede", "Adebukola", "Adenike", "Adepeju", "Adesewa", "Adesua",
      "Adetoke", "Adetoun", "Adunni", "Ajoke", "Amoke", "Amope", "Arike", "Arinola", "Asake", "Atinuke",
      "Awero", "Ayinke", "Ayoka", "Bolatito", "Boluwatife", "Bunmi", "Doyinsola", "Eniola", "Ewatomi",
      "Fadekemi", "Faderera", "Fehintola", "Fibikemi", "Fikayomi", "Folashade", "Ibironke", "Iretioluwa",
      "Iyabode", "Iyadunni", "Kikelomo", "Modupe", "Mofifoluwa", "Mojisola", "Mojisoluwa", "Moradeke",
      "Morayo", "Morenike", "Morolake", "Mosinmileoluwa", "Mosunmola", "Motunrayo", "Moyosore", "Ninioluwa",
      "Olajumoke", "Olasunmbo", "Ololade", "Olufunke", "Olufunmilayo", "Oluwakemi", "Omobolanle", "Omodunni",
      "Omolabake", "Omolara", "Omosalewa", "Omotara", "Omotola", "Omotoun", "Omowumi", "Oreofe", "Oyenike",
      "Oyindasola", "Radeke", "Ronke", "Segilola", "Similoluwa", "Simisola", "Sowande", "Subomi", "Titilayo",
      "Tolulope", "Toluwanimi", "Wuraola", "Yejide", "Yetunde", "Yewande",
    ],
    surname: [
      "Adebisi", "Adegbite", "Adegoke", "Adekunle", "Adelakun", "Adeleke", "Adelusi", "Ademiluyi",
      "Aderibigbe", "Aderogba", "Adesiyan", "Adeyemo", "Adisa", "Afolabi", "Afolayan", "Afonja", "Ajao",
      "Ajayi", "Ajewole", "Akinrinola", "Alabi", "Aloba", "Awodiran", "Awolowo", "Ayandokun", "Ayoola",
      "Babtunde", "Bakare", "Balogun", "Bamidele", "Bamiloye", "Edun", "Fadipe", "Fagunwa", "Fajimi", "Falabi",
      "Faleti", "Faloye", "Fasasi", "Ibikunle", "Ilori", "Ilupeju", "Iyanda", "Jaiyeola", "Kolade", "Kosoko",
      "Koya", "Makinde", "Makinwa", "Morawo", "Ninalowo", "Odetola", "Odunsi", "Ogindan", "Oginni", "Ogulana",
      "Ogunbamigbe", "Ogunbiyi", "Ogunbo", "Ogunde", "Ogunwobi", "Ogunyeye", "Ojo", "Ojua", "Olabode",
      "Oladipupo", "Olaiya", "Olasupo", "Olowokeere", "Oloyede", "Olubode", "Olugbayila", "Olujimi",
      "Olukotun", "Olukunga", "Olusanya", "Oluwagbemi", "Omidina", "Omojola", "Omotoso", "Oparinde", "Oshin",
      "Osuntokun", "Owokoniran", "Owolabi", "Owoyemi", "Oyadiran", "Oyaifo", "Oyeniyi", "Oyetoro", "Oyeyemi",
      "Oyinlola", "Paimo", "Salako", "Salami", "Shekoni", "Sobowale", "Soyinka",
    ],
  },

  // Common regions / communities: KwaZulu-Natal and other parts of South Africa.
  // Source: Faker 40.1.2 person provider(s): zu_ZA; selected distinct entries, ICU romanization where needed; illustrative, not census proportions.
  // Note: Provider includes personal names in its surname pool; second names are a future-colony simplification.
  "zulu": {
    label: "Zulu",
    surnameFirst: false,
    male: [
      "Andile", "Bandile", "Bhekani", "Jabulani", "Langalibalele", "Lungile", "Luyanda", "Lwandile", "Mandla",
      "Mandlakhe", "Mcebisi", "Minenhle", "Mlungisi", "Mthokozisi", "Musa", "Mzamo", "Nhlanhla", "Njabulo",
      "S'fiso", "Sandile", "Sibonelo", "Sibusiso", "SimphiweyiNkosi", "Siyabonga", "Sphiwe", "Thabani",
      "Thalente", "Thando", "Vusumuzi", "Zenzele",
    ],
    female: [
      "Amahle", "Bhekisisa", "Bhekizizwe", "Bhekokwakhe", "Busisiwe", "Dumisani", "Dumisile", "Gugu",
      "Gugulethu", "Khanyisile", "Londisizwe", "Londiwe", "Mnqobi", "Ndumiso", "Nkazimulo", "Nobantu",
      "Nobuhle", "Nokulunga", "Nomagugu", "Nomalanga", "Nomasonto", "Nomathalente", "Nomathemba", "Nomcebo",
      "Nomthandazo", "Nomusa", "Nomvula", "Nonhlanhla", "Nonjabulo", "Nothando", "Noxolo", "Nozibusiso",
      "Nozizwe", "Nqobizitha", "Olwethu", "Owethu", "Sibongile", "Sibusisiwe", "Sihawukele", "Silondile",
      "Simphiwe", "Siphesihle", "Sithembiso", "Thabisa", "Thabisile", "Thalente", "Thandazile", "Thandeka",
      "Thandiwe", "Thembeka", "Thembekile", "Thembile", "Thembisile", "Thuthukile", "Zakhele", "Zenzile",
      "Zibuyile", "Zinhle",
    ],
    surname: [
      "Andile", "Ayanda", "Bhedleni", "Bhejelibomvu", "Bikelwayo", "Biyase", "Chibi", "Chibini", "Chonco",
      "Cibane", "Cwalile", "Dikane", "Dimbane", "Dlabazane", "Dlakadla", "Dlamdaka", "Dlamini", "Dlebenkomo",
      "Dukada", "Dumakude", "Gambuse", "Gatsheni", "Gcaleka", "Gcugcwa", "Goba", "Godide", "Goje", "Gubhela",
      "Gubulundu", "Guliwe", "Gumbi", "Hhoyiyane", "Hlabangane", "Hlabisa", "Hlongwane", "Jali", "Jama",
      "Jamasijadu", "Jobe", "Khathi", "Kheswa", "Khezokhulu", "Khoza", "Lutholoni", "Luvuno", "Mabizela",
      "Mabuya", "Madide", "Maduna", "Mafobo", "Mafulela", "Mahlaba", "Mahlangu", "Mahlobo", "Mahulube",
      "Makhaye", "Maluleka", "Mangcamane", "Maphisa", "Mapholoba", "Mashasha", "Masina", "Mathaba", "Mawewe",
      "Mayeza", "Mazibuko", "Mbamali", "Mbatshazwa", "Mbende", "Mbhodwe", "Mbokazi", "Mbongwa", "Mcusi",
      "Mdlanyoka", "Mdlenevu", "Mdluli", "Mdonswa", "Mehloluhlaza", "Meyiwa", "Mgabhi", "Mgcaleka", "Mhayise",
      "Mhlongo", "Mhlungu", "Mjadu", "Mjwara", "Mkhandlela", "Mkhonza", "Mkhungo", "Mkhwananzi", "Mngoma",
      "Mngomezulu", "Mnguni", "Mngwemkhulu", "Mpanza", "Mphazima", "Msane", "Mshazi", "Mshengu", "Mshiyane",
      "Msibi", "Msweli", "Mthabela", "Mthimkhulu", "Mthiyane", "Mthonti", "Mtimande", "Mtumaseli", "Mvuyana",
      "Mwandla", "Myeza", "Mzimela", "Ncama", "Ncusi", "Ncwaba", "Ncwane", "Ndabandaba", "Ndandali", "Ndima",
      "Ndinisa", "Ndlala", "Ndlela", "Ndondakusuka", "Nenzi", "Ngcamu", "Ngiba", "Ngobisi", "Ngonini",
      "Ngwane", "Ngwazi", "Nkomo", "Nkwaliyenkosi", "Nodanga", "Nomvuma", "Nongalo", "Nonkululeko", "Nontanda",
      "Nozulu", "Nsele", "Ntombela", "Ntshiza", "Nxele", "Nxumalo", "Nyembe", "Nyide", "Nyokayebululu",
      "Nzimande", "Nzimase", "Onjengenyamazane", "Phethela", "Phuthini", "Qomazitha", "Sabela", "Sabelo",
      "Sameya", "Sangwani", "Shangase", "Shange", "Shombela", "Shozi", "Sibanda", "Sibeko", "Sigegede",
      "Sikhakhane", "Sithombo", "Sithuli", "Siyaya", "Siyeshe", "Soduba", "Sokhwebula", "Sondini", "Sontuli",
      "Thumbela", "Thumbeza", "Thusini", "Vumisa", "Wanda", "Wela", "Weza", "Xolo",
    ],
  },

};

/*
Faker source-data license notice:
Copyright (c) 2012 Daniele Faraglia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
