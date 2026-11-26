// ============================================================================
//  NAME DATABASE — EDIT THIS FILE TO ADD, REMOVE, OR CHANGE NAMES
// ============================================================================
//  Each culture has a unique key (for example, "american"). Colony weights
//  in colonies.js use these exact keys. Keep the keys unchanged unless you
//  also update every reference to them in colonies.js.
//
//  label:        The culture name shown on the webpage.
//  surnameFirst: true = family name first; false = given name first.
//  male:         Male given names.
//  female:       Female given names.
//  surname:      Family names.
//
//  To add a name, put it inside the appropriate square brackets, in quotes,
//  with a comma separating it from the other names. For example:
//      "John", "James", "Robert",
//  Duplicate names are allowed and make that name more likely to be drawn.
//  To add a culture, copy an entire culture block, give it a unique key,
//  and edit the label and lists. Keep all three lists nonempty.
//  To use the new culture, add its key and a weight in colonies.js.
//
//  All original names, duplicates, spelling, and within-list ordering are
//  preserved. Only the culture order, field names, and formatting changed.
// ============================================================================

const NAME_LISTS = {
  "american": {
    label: "American",
    surnameFirst: false,

    male: [
      "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas",
      "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul",
      "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Jason",
      "Edward", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen",
      "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Alexander",
      "Patrick", "Frank", "Raymond", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Adam",
      "Henry", "Nathan", "Douglas", "Zachary", "Peter", "Kyle", "Walter", "Ethan", "Jeremy",
      "Harold", "Keith", "Christian", "Roger", "Noah", "Gerald", "Carl", "Terry", "Sean", "Austin",
      "Arthur", "Lawrence", "Jesse", "Dylan", "Bryan", "Joe", "Jordan", "Billy", "Bruce", "Albert",
      "Willie", "Gabriel", "Logan", "Alan", "Juan", "Wayne", "Roy", "Ralph", "Randy", "Eugene",
      "Vincent", "Russell", "Elijah", "Louis", "Bobby", "Philip", "Johnny", "Bradley", "Martin",
      "Leonard", "Franklin", "Curtis", "Mason", "Evan", "Gabriel", "Isaac", "Caleb", "Devin",
      "Shawn", "Derek", "Brad", "Colin", "Oscar", "Miles", "Cody", "Jesus", "Luis", "Ivan",
      "Andre", "Marcus", "Allen", "Carlos", "Miguel", "Victor", "Joel", "Travis", "Jared",
      "Trevor", "Blake", "Dustin", "Spencer", "Wesley", "Riley", "Cole", "Grant", "Chase",
      "Emmanuel", "Elliot", "Jason", "Tristan", "Xavier", "Diego", "Alejandro", "Seth", "Damon",
      "Marcus", "Damian", "Aiden", "Liam", "Noel", "Connor", "Cameron", "Hudson", "Hunter",
      "Parker", "Cooper", "Easton", "Jaxon", "Bentley", "Carson", "Grayson", "Landon", "Brody",
      "Sawyer", "Ryker", "Declan", "Finn", "Axel", "Asher", "Kai", "Micah", "Silas", "Theodore",
      "Oliver", "Elijah", "Sebastian", "Julian", "Levi", "Isaiah", "Eli", "Ezra", "Jonah",
      "Malachi", "Beckett", "Rowan", "Holden", "Preston", "Colton", "Gavin", "Tucker", "Hudson",
      "Everett", "Peyton", "Reid", "Grant", "Miles", "Nolan", "DeShawn", "Darnell", "Tyrone",
      "Marquis", "Jamal", "Andre", "Malik", "Darius", "Terrell", "Antonio", "Quinton", "DeAndre",
      "Jerome", "Lamar", "Desmond", "Rashawn", "Calvin", "Jalen", "Xavier", "Trevor", "Marcus",
      "Reginald", "Frederick", "Keith", "Roderick", "Antoine", "Corey", "Dewayne", "Marvin",
      "Leon", "Shawn", "Maurice", "Dion", "Andreus", "Demetrius", "Kendrick", "Lorenzo", "Trevon",
      "Dante", "Malcolm"
    ],

    female: [
      "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah",
      "Karen", "Nancy", "Lisa", "Margaret", "Betty", "Sandra", "Ashley", "Dorothy", "Kimberly",
      "Emily", "Donna", "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie",
      "Rebecca", "Laura", "Sharon", "Cynthia", "Kathleen", "Amy", "Shirley", "Angela", "Helen",
      "Anna", "Brenda", "Pamela", "Nicole", "Emma", "Samantha", "Katherine", "Christine", "Debra",
      "Rachel", "Catherine", "Carolyn", "Janet", "Ruth", "Maria", "Heather", "Diane", "Virginia",
      "Julie", "Joyce", "Victoria", "Olivia", "Lauren", "Megan", "Cheryl", "Evelyn", "Hannah",
      "Frances", "Jacqueline", "Ann", "Gloria", "Jean", "Martha", "Doris", "Teresa", "Sara",
      "Janice", "Marie", "Julia", "Grace", "Alice", "Madison", "Brittany", "Amber", "Danielle",
      "Abigail", "Sophia", "Isabella", "Natalie", "Ava", "Lillian", "Chloe", "Sofia", "Addison",
      "Avery", "Ella", "Scarlett", "Grace", "Victoria", "Aria", "Brooklyn", "Layla", "Zoe",
      "Penelope", "Riley", "Lily", "Nora", "Eleanor", "Holly", "Claire", "Ellie", "Paisley",
      "Audrey", "Skylar", "Savannah", "Camila", "Leah", "Stella", "Maya", "Hazel", "Elliana",
      "Violet", "Naomi", "Ruby", "Luna", "Elena", "Ivy", "Sadie", "Willow", "Lucy", "Paislee",
      "Madeline", "Kinsley", "Serenity", "Autumn", "Quinn", "Eva", "Aubrey", "Bella", "Piper",
      "Sophie", "Delilah", "Alice", "Josephine", "Margot", "Eliza", "Adeline", "Genevieve", "June",
      "Reese", "Sydney", "Blake", "Payton", "Morgan", "Kylie", "Aaliyah", "Imani", "Nia", "Zaria",
      "Nyla", "Tiana", "Keisha", "Monique", "Tameka", "Latoya", "Shanice", "Tanisha", "Tiffany",
      "Brianna", "Jada", "Jasmine", "Destiny", "India", "Kiara", "Kiana", "Amara", "Arielle",
      "Deja", "Sanaa", "Imani", "Zuri", "Ayana", "Nyla", "Janelle", "Keandra", "Shayla", "Taliyah",
      "Kyla", "Diamond", "Harmony", "Justice", "Skye", "Naomi", "Aisha", "Raven"
    ],

    surname: [
      "Garcia", "Martinez", "Rodriguez", "Hernandez", "Lopez", "Gonzalez", "Perez", "Sanchez",
      "Ramirez", "Torres", "Flores", "Rivera", "Gomez", "Diaz", "Reyes", "Cruz", "Morales",
      "Ortiz", "Gutierrez", "Vasquez", "Castillo", "Jimenez", "Ruiz", "Alvarez", "Romero",
      "Navarro", "Mendoza", "Aguilar", "Vargas", "Rojas", "Smith", "Johnson", "Williams", "Brown",
      "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez",
      "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee",
      "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
      "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
      "O'Hoolihan", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
      "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz",
      "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers",
      "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard",
      "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James",
      "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders",
      "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry",
      "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales",
      "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton",
      "Graham", "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant",
      "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford",
      "Castro", "Marshall", "Owens", "Harrison", "Fernandez", "McDonald", "Wells", "Weaver",
      "Gibson", "Fields", "Ferguson", "Bishop", "Harper", "Washington", "Jefferson", "Freeman",
      "Bridges", "Armstrong", "Douglas", "Franklin", "Jefferson", "Griffin", "Powell", "Bryant",
      "Perry", "Reed", "Mason", "Porter", "Warren", "Payne", "Crawford", "Dawson", "Hawkins",
      "Horton", "Boyd", "Craig", "Webster", "Greene", "Ford", "Banks", "Fleming", "Marshall",
      "Caldwell", "Duncan", "Gardner", "Holland", "Hunt", "Logan", "Manning", "Murray", "Sutton",
      "Turner", "Wade"
    ]
  },

  "arabic-middle-eastern": {
    label: "Arabic / Middle Eastern",
    surnameFirst: false,

    male: [
      "Adel", "Ahmad", "Ayman", "Akram", "Ali", "Amir", "Anas", "Ashraf", "Bashir", "Bilal",
      "Dawood", "Fadi", "Fahad", "Faisal", "Farid", "Hadi", "Hakim", "Hamza", "Hassan", "Hussein",
      "Ibrahim", "Imad", "Ismail", "Jalal", "Jamal", "Kamal", "Karim", "Khaled", "Khalil", "Laith",
      "Mahmoud", "Majid", "Malik", "Marwan", "Mazen", "Mohammed", "Mustafa", "Nabil", "Nader",
      "Naeem", "Omar", "Osama", "Qasim", "Rami", "Rashid", "Raed", "Samir", "Sami", "Sharif",
      "Tariq", "Tarek", "Walid", "Yasir", "Yousef", "Yahya", "Zaid", "Zahir", "Zakaria", "Ziyad",
      "Abdullah", "Abdulrahman", "Adnan", "Alaa", "Ammar", "Ayoub", "Badr", "Bassam", "Emad",
      "Ghassan", "Haidar", "Haitham", "Hatem", "Iyad", "Jaber", "Jawad", "Kareem", "Louay", "Luay",
      "Mansour", "Mounir", "Munir", "Nassim", "Nazim", "Qais", "Rafik", "Ramzi", "Riyad", "Saeed",
      "Saleh", "Salim", "Sultan", "Talal", "Tamer", "Wael", "Waleed", "Yazan", "Younes", "Zain",
      "Zaki", "Abbas", "Aziz", "Basil", "Fawzi", "Hisham", "Jihad", "Kassem", "Latif", "Miqdad",
      "Nouri", "Rauf", "Sabir", "Taher", "Umar", "Yahia", "Zuhair", "Farouk", "Shadi", "Nizar",
      "Moez", "Kinan"
    ],

    female: [
      "Aaliyah", "Amal", "Amira", "Amina", "Aya", "Ayah", "Bushra", "Dalal", "Dania", "Dina",
      "Farah", "Fatima", "Hala", "Hanan", "Heba", "Hind", "Iman", "Jana", "Jamila", "Jumana",
      "Khadija", "Laila", "Lamia", "Lana", "Leila", "Lina", "Maha", "Malak", "Mariam", "Maryam",
      "Mona", "Nada", "Nadia", "Nadine", "Naima", "Nawal", "Nour", "Rania", "Reem", "Rima", "Ruba",
      "Sabah", "Safa", "Salma", "Samira", "Sara", "Shatha", "Soraya", "Taghreed", "Wafa", "Yasmin",
      "Yasmine", "Zahra", "Zaina", "Zainab", "Zara", "Abeer", "Adara", "Afaf", "Alia", "Anoud",
      "Asma", "Aseel", "Ayla", "Basma", "Batoul", "Dalia", "Dima", "Elham", "Fadwa", "Faten",
      "Ghada", "Ghina", "Habiba", "Haifa", "Hiba", "Inas", "Ibtisam", "Joud", "Kawthar", "Kenza",
      "Layan", "Lubna", "Maysa", "Maysoon", "Muna", "Nisreen", "Noor", "Rabab", "Raghad", "Rasha",
      "Rawan", "Razan", "Ruqayya", "Sahar", "Salsabil", "Sana", "Shaima", "Sumaya", "Tahani",
      "Tamara", "Thuraya", "Wardah", "Yara", "Zeinab", "Amani", "Dalya", "Fariha", "Haneen",
      "Isra", "Jawhara", "Kholoud", "Lujain", "Mahira", "Najwa", "Qamar", "Rim", "Shireen",
      "Yusra", "Zubaida"
    ],

    surname: [
      "Abadi", "Abbas", "Abdallah", "Abdulrahman", "Abid", "AbuSaleh", "Adham", "Afifi", "Agha",
      "Ajami", "Alam", "Alawi", "Amin", "Ansari", "Arif", "Ashour", "Assaf", "Atallah", "Awad",
      "Ayoub", "Badawi", "Bakir", "Barakat", "Bashir", "Darwish", "Diab", "Eid", "Fahmy", "Farhat",
      "Farraj", "Fayez", "Ghannam", "Habib", "Haddad", "Hakim", "Hamdan", "Hariri", "Hashim",
      "Hassan", "Hatem", "Hijazi", "Hussein", "Ibrahim", "Iskandar", "Issa", "Jabari", "Jaber",
      "Jamal", "Kanaan", "Karim", "Kassar", "Khalaf", "Khalil", "Khoury", "Mansour", "Masri",
      "Matar", "Mehdi", "Mikhael", "Mustafa", "Nader", "Najjar", "Nasr", "Nassif", "Nouri",
      "Qadir", "Qasem", "Rahman", "Ramadan", "Rizk", "Sabbagh", "Saeed", "Salem", "Saleh",
      "Samara", "Shadid", "Sharif", "Shehadeh", "Suleiman", "Tahan", "Tawil", "Yassin", "Yazbek",
      "Younes", "Zahran", "Zaki", "Zayed", "Zein", "Aoude", "Bazzi", "Chehab", "Dagher",
      "Fakhoury", "Gerges", "Helou", "Karam", "Kassis", "Maalouf", "Nahas", "Saadeh", "Touma",
      "Zakaria", "Qureshi", "Farooqi", "Hussain", "Mirza", "Rahimi", "Siddiqui", "Usmani", "Zaidi",
      "Al Saud", "Al Nahyan", "Al Khalifa", "Al Thani", "Al Fulan", "Bakhtiari", "Pahlavi",
      "Safavi", "Shirazi", "Tabrizi"
    ]
  },

  "bantu": {
    label: "Bantu",
    surnameFirst: false,

    male: [
      "Abasi", "Ade", "Akinyi", "Amari", "Andile", "Anele", "Ayanda", "Bakari", "Bhekizizwe",
      "Bongani", "Chibale", "Chikondi", "Chuma", "Dalitso", "Dumisani", "Enzi", "Faraji", "Fikile",
      "Gift", "Givemore", "Hlengiwe", "Imani", "Jabulani", "Juma", "Kabelo", "Kagiso", "Kamau",
      "Katlego", "Kato", "Kazi", "Khaya", "Kofi", "Kwame", "Langa", "Lethabo", "Lindani", "Lunga",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mosi", "Mpho", "Musa", "Nathi", "Nkosi", "Nkosinathi", "Nuru",
      "Obi", "Omari", "Sabelo", "Sipho", "Tau", "Temba", "Themba", "Thulani", "Vusi", "Zuberi"
    ],

    female: [
      "Abena", "Ada", "Adia", "Aisha", "Akinyi", "Amahle", "Amara", "Amina", "Andiswa", "Anele",
      "Anika", "Asantewa", "Ayana", "Ayanda", "Aziza", "Bontle", "Busisiwe", "Chiamaka",
      "Chikondi", "Dineo", "Eshe", "Folami", "Funani", "Halima", "Hasina", "Imani", "Jamila",
      "Kagiso", "Kamaria", "Kanene", "Kesi", "Koketso", "Lerato", "Lindiwe", "Lungile", "Malaika",
      "Mandisa", "Mbalenhle", "Mbali", "Mirembe", "Mpho", "Naledi", "Nandi", "Nandipha", "Neema",
      "Nia", "Nomsa", "Nomvula", "Nonhlanhla", "Ntombi", "Nuru", "Nyasha", "Oluchi", "Onyeka",
      "Palesa", "Puleng", "Rudo", "Rutendo", "Sade", "Sibongile", "Simphiwe", "Siphesihle",
      "Tafadzwa", "Tariro", "Thandeka", "Thandiwe", "Thembi", "Thobile", "Tshegofatso", "Tumelo",
      "Vuyiswa", "Wanjiku", "Yewande", "Zahara", "Zanele", "Zinhle", "Abeni", "Boitumelo", "Chipo",
      "Efua", "Folake", "Kefilwe", "Khensani", "Lebogang", "Lethabo", "Mapaseka", "Matshidiso",
      "Neo", "Nokuthula", "Onthatile", "Rethabile", "Sinenhlanhla", "Tendai", "Tumisang",
      "Zandile", "Zola"
    ],

    surname: [
      "Achebe", "Adeyemi", "Afolayan", "Akinwale", "Baloyi", "Banda", "Biko", "Chikane", "Chirwa",
      "Dhlamini", "Dube", "Gumede", "Hadebe", "Juma", "Kamau", "Khumalo", "Khoza", "Kibet", "Kone",
      "Luthuli", "Mabena", "Mabika", "Mabaso", "Madonsela", "Magufuli", "Mahachi", "Makgoba",
      "Makhubu", "Makwenda", "Malinga", "Mangena", "Maseko", "Masuku", "Mathebula", "Matlala",
      "Mazibuko", "Mbatha", "Mbeki", "Mhlongo", "Mkhize", "Mlambo", "Mokoena", "Molefe", "Moloi",
      "Moyo", "Mpofu", "Mthembu", "Mudenda", "Mugabe", "Mukasa", "Mukwena", "Munyai", "Mutasa",
      "Mwangi", "Mwansa", "Ncube", "Ndlovu", "Nene", "Ngcobo", "Ngugi", "Ngubane", "Nkosi",
      "Nkomo", "Nkrumah", "Nzimande", "Obi", "Odinga", "Okafor", "Okeke", "Okoro", "Omondi",
      "Onyango", "Osei", "Owusu", "Phiri", "Sibiya", "Sithole", "Tau", "Tembo", "Tshabalala",
      "Vilakazi", "Xitsonga", "Yeboah", "Zulu", "Bhengu", "Jele", "Kekana", "Ledwaba", "Mahlangu",
      "Masemola", "Mthimkhulu", "Nxumalo", "Radebe", "Shongwe", "Tshivhase", "Zuma"
    ]
  },

  "celtic": {
    label: "Celtic",
    surnameFirst: false,

    male: [
      "Aidan", "Alastair", "Alwyn", "Angus", "Artair", "Arthur", "Baird", "Barra", "Beathan",
      "Blair", "Bran", "Brendan", "Brian", "Brody", "Bryce", "Callum", "Cameron", "Caradoc",
      "Cassian", "Cian", "Cillian", "Colin", "Conall", "Conan", "Connor", "Cormac", "Craig",
      "Cuan", "Dafydd", "Declan", "Diarmuid", "Dillon", "Domhnall", "Dougal", "Duncan", "Dylan",
      "Eamon", "Eoghan", "Euan", "Ewan", "Fearghus", "Fergus", "Fiachra", "Finlay", "Finn",
      "Fintan", "Fraser", "Gareth", "Gavin", "Gordon", "Graeme", "Hamish", "Ian", "Ivor", "Keane",
      "Keir", "Kenneth", "Kieran", "Lachlan", "Lennox", "Lorcan", "Malcolm", "Murray", "Niall",
      "Oisin", "Owain", "Padraig", "Rhodri", "Ronan", "Ruairi", "Seamus", "Shane", "Sorley",
      "Tadhg", "Tiernan", "Torin", "Tristan", "Aengus", "Brennan", "Caelan", "Caolan", "Cathal",
      "Donal", "Eirian", "Emrys", "Fionn", "Gwydion", "Iestyn", "Llyr", "Mael", "Nevan", "Pryderi",
      "Riordan", "Taliesin", "Taran", "Tavish", "Ultan", "Vaughn", "Wyn"
    ],

    female: [
      "Aileen", "Ailsa", "Aine", "Alannah", "Arwen", "Asha", "Branna", "Bridget", "Bronwen",
      "Caitlin", "Caoimhe", "Catriona", "Ceridwen", "Ciara", "Cliona", "Deirdre", "Eabha",
      "Eileen", "Eilidh", "Elaine", "Elspeth", "Enya", "Erin", "Ethne", "Euna", "Ffion", "Fiona",
      "Freya", "Grainne", "Iona", "Isla", "Keeva", "Kenna", "Kyla", "Laoise", "Liadan", "Maeve",
      "Mairi", "Moira", "Morag", "Morrigan", "Muirne", "Nessa", "Niamh", "Orla", "Rhiannon",
      "Roisin", "Rowena", "Saoirse", "Shannon", "Sheila", "Sinead", "Skye", "Sorcha", "Tegan",
      "Una", "Yseult", "Aisling", "Arianwen", "Blodeuwedd", "Briallen", "Cerys", "Dervla",
      "Eirlys", "Eluned", "Fionnuala", "Glenna", "Isolde", "Keelin", "Lilias", "Mabli", "Nerys",
      "Olwen", "Ragna", "Rhonwen", "Senga", "Tamsin", "Aibhilin", "Bethan", "Carys", "Dilys",
      "Eithne", "Fenella", "Gwendolyn", "Heulwen", "Luned", "Mairead", "Nolwenn", "Ragnaid",
      "Seren", "Talulla", "Winifred", "Ysolde", "Aurelia", "Branwen", "Eleri", "Morna"
    ],

    surname: [
      "Abernathy", "Ainsley", "Bannon", "Boyle", "Branigan", "Brennan", "Brogan", "Callaghan",
      "Campbell", "Carmichael", "Cassidy", "Clancy", "Connelly", "Cormier", "Daley", "Donovan",
      "Douglas", "Duffy", "Dugan", "Duncan", "Dunn", "Farrell", "Finnegan", "Fitzpatrick",
      "Flanagan", "Flynn", "Gallagher", "Gilmore", "Graham", "Griffin", "Kavanagh", "Keegan",
      "Kennedy", "Lennon", "MacAllister", "MacBride", "MacCarthy", "MacDougall", "MacGregor",
      "MacIntyre", "MacKenzie", "MacLeod", "MacMahon", "MacNamara", "Malone", "McBride", "McCall",
      "McCormick", "McDonagh", "McDowell", "McFadden", "McKenna", "McLaughlin", "McNeill",
      "Molloy", "Montgomery", "Moran", "Morgan", "Murphy", "Murray", "Nolan", "O'Brien",
      "O'Callaghan", "O'Connell", "O'Donnell", "O'Leary", "O'Malley", "O'Neill", "O'Reilly",
      "Quinn", "Reardon", "Riordan", "Sweeney", "Tierney", "Wallace", "Welsh", "Ahearn", "Byrne",
      "Corrigan", "Delaney", "Ferguson", "Kerrigan", "MacAuley", "MacDermott", "McGuinness",
      "Muldoon", "O'Dwyer", "O'Keeffe", "Redmond", "Rourke", "Sheridan", "Treacy", "Vaughan",
      "Whelan", "Ackerley", "Cavanaugh", "Dempsey", "Hanrahan"
    ]
  },

  "central-african": {
    label: "Central African",
    surnameFirst: false,

    male: [
      "Abdou", "Adama", "Alphonse", "Andre", "Anicet", "Armel", "Aubin", "Bakari", "Basile",
      "Blaise", "Cedric", "Christian", "Clement", "Cyprien", "Didier", "Dieudonne", "Emery",
      "Emmanuel", "Etienne", "Evariste", "Fabien", "Fidele", "Francis", "Frederic", "Gaston",
      "Gilbert", "Guy", "Herve", "Ignace", "Isaac", "Jacques", "Jean-Bosco", "Jean-Claude",
      "Jean-Marie", "Jonas", "Joseph", "Justin", "Kabila", "Koffi", "Laurent", "Leon", "Ludovic",
      "Marcel", "Martin", "Michel", "Moise", "Moussa", "Nestor", "Ngoma", "Olivier", "Pascal",
      "Patrice", "Paulin", "Prosper", "Remy", "Richard", "Roger", "Salomon", "Samuel", "Serge",
      "Sylvain", "Theophile", "Thierry", "Tresor", "Valentin", "Victor", "Vincent", "Wilfried",
      "Yannick", "Yves", "Zacharie", "Aimable", "Bonaventure", "Celestin", "Desire", "Elisee",
      "Faustin", "Gervais", "Honore", "Innocent", "Joachim", "Landry", "Moke", "Nicaise",
      "Placide", "Rene", "Sosthene", "Tshimanga", "Vianney", "Yvon", "Zola", "Apollinaire",
      "Bokanga", "Donatien", "Kanku", "Mwamba", "Nzinga", "Tshisekedi", "Yuma"
    ],

    female: [
      "Adele", "Agnes", "Aimee", "Albertine", "Aline", "Aminata", "Ange", "Anita", "Arielle",
      "Beatrice", "Bernadette", "Brigitte", "Carine", "Cecile", "Chantal", "Charlotte", "Clarisse",
      "Claudine", "Colette", "Delphine", "Diane", "Divine", "Edith", "Elodie", "Emilienne",
      "Esperance", "Esther", "Eugenie", "Fabiola", "Felicite", "Florence", "Francoise",
      "Georgette", "Germaine", "Gisele", "Grace", "Henriette", "Immaculee", "Ines", "Jeannette",
      "Josephine", "Julienne", "Justine", "Liliane", "Lucie", "Madeleine", "Marcelle",
      "Marie-Claire", "Marthe", "Monique", "Nadine", "Natacha", "Noella", "Odette", "Olive",
      "Patience", "Pauline", "Precieuse", "Rachel", "Regine", "Rosalie", "Rose", "Sabine",
      "Sandrine", "Solange", "Stephanie", "Sylvie", "Therese", "Valerie", "Veronique", "Victoire",
      "Yolande", "Apolline", "Benedicte", "Chimene", "Desiree", "Elisabeth", "Faustine", "Gloria",
      "Honorine", "Innocente", "Josiane", "Laurette", "Mireille", "Nelly", "Prisca", "Ruth",
      "Seraphine", "Tatiana", "Violette", "Yvette", "Zawadi", "Annonciade", "Bibiche",
      "Donatienne", "Estelle", "Kanku", "Mado", "Nzola", "Theodosie"
    ],

    surname: [
      "Abanda", "Akono", "Asseko", "Bemba", "Bikoko", "Bisimwa", "Bokassa", "Bopoto", "Djemba",
      "Ekanga", "Essomba", "Fouda", "Ilunga", "Kabeya", "Kabongo", "Kabasele", "Kabila", "Kabwe",
      "Kalala", "Kalume", "Kambale", "Kanku", "Kasongo", "Katembo", "Kitenge", "Koumba", "Likongo",
      "Lokonga", "Lukusa", "Makengo", "Malonga", "Mandanda", "Mangala", "Mbala", "Mbemba", "Mbida",
      "Mbuyi", "Moke", "Mokono", "Mongo", "Moukoko", "Mpoyo", "Mwamba", "Ndombele", "Ndong",
      "Ndzi", "Ngoma", "Ngoy", "Nguema", "Nkongolo", "Nsimba", "Ntumba", "Nzinga", "Obame",
      "Okoko", "Ondo", "Owona", "Samba", "Tchameni", "Tshipamba", "Tshisekedi", "Yoka", "Yombo",
      "Zola", "Abega", "Bongonda", "Dikembe", "Ekani", "Fokou", "Kabasele", "Lutumba", "Makosso",
      "Mavoungou", "Mputu", "Ndaye", "Ngalula", "Nlandu", "Obiang", "Okito", "Songo", "Taty",
      "Tshimanga", "Wamba", "Yengo", "Angoula", "Batumike", "Engonga", "Kanku", "Lobota",
      "Mabiala", "Mokutu", "Ngalame", "Ossendza", "Tumba", "Wembanyama", "Yandza", "Zingha"
    ]
  },

  "dravidian": {
    label: "Dravidian",
    surnameFirst: false,

    male: [
      "Aadhavan", "Aakash", "Abhinav", "Adithya", "Ajith", "Akilan", "Amarnath", "Anand",
      "Anbarasu", "Anbu", "Aravind", "Arjun", "Arul", "Ashwin", "Balaji", "Baskar", "Bharath",
      "Boopathi", "Chandran", "Dhanush", "Dilip", "Dinesh", "Elango", "Ganesh", "Gokul",
      "Gopinath", "Hari", "Harish", "Ilango", "Iniyan", "Jagan", "Jeevan", "Kailash", "Kamal",
      "Kannan", "Karthick", "Karthikeyan", "Kathir", "Kavin", "Kesavan", "Kishore", "Kumar",
      "Lokesh", "Madhan", "Mahesh", "Manikandan", "Manoj", "Maran", "Mohan", "Muthukumar",
      "Nandakumar", "Naren", "Nataraj", "Naveen", "Nithin", "Pandian", "Parthiban", "Perumal",
      "Prabhu", "Pradeep", "Prakash", "Pranav", "Prem", "Raghavan", "Rajan", "Rajesh", "Rakesh",
      "Ramachandran", "Ramesh", "Ranjith", "Ravi", "Saravanan", "Sasi", "Selvam", "Senthil",
      "Shankar", "Sivakumar", "Sridhar", "Sriram", "Subash", "Sundar", "Surya", "Tamilselvan",
      "Tharun", "Udhayan", "Vasanth", "Venkatesh", "Vetri", "Vignesh", "Vijay", "Vikram", "Vinod",
      "Viswanathan", "Yogesh", "Yuvaraj", "Ariyan", "Balasubramanian", "Chidambaram", "Devan",
      "Easwar", "Guhan", "Jagadeesh", "Kailasan", "Lingesh", "Madhavan", "Muthu", "Naveenkumar",
      "Paramesh", "Ragunath", "Sathish", "Selvaraj", "Sivanesan", "Thirumal", "Umapathy",
      "Varadarajan", "Velmurugan", "Vishnu", "Yathish", "Arumugam", "Durairaj"
    ],

    female: [
      "Abinaya", "Aishwarya", "Akila", "Amudha", "Anitha", "Anjali", "Anu", "Aruna", "Bhanu",
      "Bhuvana", "Chandra", "Deepa", "Deepika", "Devi", "Divya", "Gayathri", "Geetha", "Harini",
      "Indhu", "Janani", "Jayanthi", "Kala", "Kalaiarasi", "Kalyani", "Kanishka", "Karthika",
      "Kavitha", "Keerthana", "Komala", "Krithika", "Lakshmi", "Lalitha", "Madhavi", "Mahalakshmi",
      "Malathi", "Meena", "Meenakshi", "Monisha", "Nandhini", "Narmada", "Nila", "Padmini",
      "Pavithra", "Poornima", "Priya", "Radha", "Rajalakshmi", "Ramya", "Rekha", "Revathi",
      "Rohini", "Sangeetha", "Saranya", "Savitri", "Shalini", "Shanthi", "Sharmila", "Sindhu",
      "Sivagami", "Sneha", "Soundarya", "Subha", "Sudha", "Sujatha", "Sumathi", "Sunitha",
      "Sushmitha", "Tamilselvi", "Thara", "Uma", "Vaishnavi", "Valli", "Vandana", "Vanitha",
      "Vasanthi", "Vidhya", "Vijayalakshmi", "Vinitha", "Yamuna", "Aarthi", "Abhirami", "Amritha",
      "Anbarasi", "Arulmozhi", "Bhavani", "Charumathi", "Devayani", "Ezhil", "Gomathi",
      "Hemalatha", "Ilakkiya", "Jothika", "Kanmani", "Kayalvizhi", "Mohana", "Nalini", "Nivetha",
      "Parvathi", "Ponni", "Ranjani", "Sakthi", "Selvi", "Sivaranjani", "Tamilarasi", "Thenmozhi",
      "Usha", "Varalakshmi", "Vennila", "Visalakshi", "Yazhini", "Agalya", "Bhairavi", "Chithra",
      "Dhanalakshmi", "Elavarasi", "Indumathi", "Kowsalya", "Muthulakshmi", "Nithya", "Padmavathi"
    ],

    surname: [
      "Anandan", "Arumugam", "Balakrishnan", "Baskar", "Chandrasekar", "Dhanapal", "Duraisamy",
      "Elangovan", "Ganesan", "Gopalakrishnan", "Govindan", "Jagannathan", "Jayaraman", "Kailasam",
      "Kandasamy", "Karunakaran", "Krishnamurthy", "Kumaraswamy", "Lakshmanan", "Mahadevan",
      "Manickam", "Mohanraj", "Muthusamy", "Nagarajan", "Nandakumar", "Narayanan", "Natarajan",
      "Palanisamy", "Pandian", "Parthasarathy", "Periyasamy", "Pillai", "Radhakrishnan",
      "Rajagopal", "Rajendran", "Ramakrishnan", "Ramasamy", "Ranganathan", "Sankaran", "Saravanan",
      "Sekar", "Shanmugam", "Sivakumar", "Somasundaram", "Sridhar", "Srinivasan", "Subramanian",
      "Sundaram", "Swaminathan", "Thiagarajan", "Udayakumar", "Vaidyanathan", "Venkataraman",
      "Viswanathan", "Annamalai", "Balasubramanian", "Chidambaram", "Devarajan", "Gurunathan",
      "Ilangovan", "Jeevaraj", "Kaliyaperumal", "Krishnan", "Loganathan", "Madhavan", "Murugan",
      "Natesan", "Panneerselvam", "Paramasivam", "Ponnusamy", "Ravichandran", "Sathyanarayanan",
      "Selvaraj", "Sivanesan", "Soundararajan", "Thangavel", "Thirumalai", "Umapathy",
      "Varadarajan", "Veeramani", "Velayutham", "Vetrivel", "Yoganathan", "Achari", "Chettiar",
      "Gounder", "Konar", "Mudaliar", "Naicker", "Nadar", "Pillay", "Reddiar", "Servai", "Thevar",
      "Udaiyar", "Velar", "Adiga", "Bhat", "Hegde", "Kamath", "Kini", "Kiniya", "Kotian", "Pai",
      "Poojary", "Rao", "Shenoy", "Shetty", "Upadhya", "Urs", "Varma", "Achan", "Menon", "Nair",
      "Panicker", "Kurup", "Warrier", "Marar", "Thampi", "Chakyar"
    ]
  },

  "east-african": {
    label: "East African",
    surnameFirst: false,

    male: [
      "Abdi", "Abebe", "Abubakar", "Ahmed", "Ali", "Amanuel", "Amani", "Amare", "Awet", "Ayubu",
      "Bakari", "Baraka", "Bekele", "Berhanu", "Daniel", "Dawit", "Elias", "Ermias", "Faisal",
      "Farah", "Fitsum", "Gebre", "Haile", "Hassan", "Ibrahim", "Idris", "Issa", "Jamal", "Jelani",
      "Juma", "Kassim", "Kato", "Kebede", "Kidane", "Lemlem", "Mahmoud", "Mekonnen", "Meles",
      "Mohamed", "Moses", "Muktar", "Mulugeta", "Musa", "Nuru", "Omari", "Othman", "Rashid",
      "Salim", "Samson", "Sefu", "Selassie", "Solomon", "Tadesse", "Tafari", "Tesfaye", "Tesfahun",
      "Tewodros", "Umar", "Wolde", "Yared", "Yasin", "Yonatan", "Yonas", "Yosef", "Abdullahi",
      "Adan", "Asfaw", "Binyam", "Desta", "Fikru", "Getachew", "Habte", "Ismail", "Khalif",
      "Lulit", "Mandela", "Negasi", "Robel", "Seyoum", "Tamrat", "Workneh", "Yohannes", "Zuberi",
      "Alemayehu", "Beraki", "Demissie", "Ephrem", "Girma", "Hagos", "Jibril", "Kidus", "Mubarak",
      "Negus", "Semere", "Tsegaye", "Wassie", "Yitbarek", "Zenawi"
    ],

    female: [
      "Abeba", "Achieng", "Aisha", "Almaz", "Amani", "Amira", "Asli", "Aster", "Ayan", "Aziza",
      "Baraka", "Biftu", "Chaltu", "Dahlia", "Eden", "Elsa", "Eyerusalem", "Faduma", "Fatuma",
      "Genet", "Habiba", "Halima", "Hanan", "Hawa", "Helen", "Hibo", "Imani", "Kadija", "Khadra",
      "Leila", "Lulit", "Malkia", "Mariam", "Medina", "Meron", "Muna", "Nadia", "Nafisa", "Nala",
      "Nasra", "Neema", "Nuru", "Rahma", "Rehema", "Salma", "Samira", "Selam", "Sofia", "Subira",
      "Tigist", "Winta", "Yasmin", "Zahra", "Zainab", "Abeni", "Adanech", "Amina", "Blen", "Deka",
      "Eleni", "Feven", "Filsan", "Hani", "Hodan", "Ilham", "Kenza", "Lemlem", "Mahlet", "Marjani",
      "Nasteho", "Rahel", "Rukia", "Saba", "Safiya", "Seynab", "Shukri", "Siti", "Tariku", "Tsion",
      "Worknesh", "Yordanos", "Zulekha", "Amina", "Birtukan", "Dunia", "Eyerus", "Fowsia", "Habon",
      "Kaltun", "Liya", "Mulu", "Nimo", "Roda", "Selamawit", "Tsehay", "Warda", "Yusra", "Zamzam"
    ],

    surname: [
      "Abdullahi", "Abebe", "Ahmed", "Ali", "Amanuel", "Asfaw", "Bekele", "Berhane", "Dawit",
      "Farah", "Gebremariam", "Gebreselassie", "Getachew", "Girma", "Haile", "Hassan", "Hussein",
      "Ibrahim", "Idris", "Ismail", "Jama", "Kahsay", "Kassahun", "Kebede", "Kidane", "Mahamed",
      "Mekonnen", "Mohamed", "Muktar", "Mulugeta", "Musa", "Negash", "Njoroge", "Odinga", "Okello",
      "Omar", "Osman", "Owino", "Rashid", "Said", "Salim", "Samatar", "Tadesse", "Tesfaye",
      "Tewelde", "Tsegaye", "Wolde", "Worku", "Yasin", "Yohannes", "Yusuf", "Zewde", "Abdirahman",
      "Alemu", "Asmare", "Demissie", "Endris", "Fikre", "Habte", "Kidus", "Mebratu", "Moges",
      "Negasi", "Roba", "Semere", "Shiferaw", "Tamiru", "Tekle", "Tilahun", "Wondimu", "Yared",
      "Aden", "Beyene", "Desta", "Ephrem", "Ghebremeskel", "Hagos", "Jibril", "Kedir", "Lema",
      "Mengistu", "Nigatu", "Ochieng", "Ruto", "Shabazz", "Temesgen", "Teshome", "Umar", "Wassie",
      "Yilma", "Zerihun", "Adem", "Beraki", "Fisseha", "Hailu", "Kifle", "Mamo", "Tesfamichael"
    ]
  },

  "east-asian-chinese": {
    label: "East Asian — Chinese",
    surnameFirst: true,

    male: [
      "An", "Bao", "Bo", "Chang", "Chao", "Chen", "Cheng", "Chi", "Da", "De", "Feng", "Gang",
      "Guang", "Guo", "Hai", "Han", "Hao", "Heng", "Hong", "Hua", "Hui", "Jian", "Jie", "Jin",
      "Jun", "Kai", "Kang", "Lei", "Liang", "Lin", "Long", "Ming", "Peng", "Qiang", "Qing", "Ren",
      "Rong", "Shan", "Sheng", "Shi", "Tao", "Teng", "Wei", "Wen", "Xiang", "Xiao", "Xin", "Xing",
      "Xuan", "Yan", "Yang", "Yao", "Yi", "Yong", "Yu", "Yuan", "Yue", "Yun", "Zedong", "Zemin",
      "Zhen", "Zhi", "Zhong", "Zhou", "Zhiyuan", "Zihao", "Zixuan", "Junjie", "Haoran", "Yichen",
      "Li Wei", "Li Jun", "Li Hao", "Li Ming", "Li Jie", "Li Tao", "Li Feng", "Li Yang", "Li Chen",
      "Li Jian", "Wang Wei", "Wang Jun", "Wang Hao", "Wang Ming", "Wang Lei", "Wang Jian",
      "Wang Tao", "Wang Peng", "Wang Feng", "Wang Bin", "Zhang Wei", "Zhang Jun", "Zhang Hao",
      "Zhang Ming", "Zhang Jie", "Zhang Lei", "Zhang Tao", "Zhang Peng", "Zhang Feng",
      "Zhang Yang", "Liu Wei", "Liu Jun", "Liu Hao", "Liu Ming", "Liu Jie", "Liu Tao", "Liu Yang",
      "Liu Jian", "Liu Peng", "Liu Bin", "Chen Wei", "Chen Jun", "Chen Hao", "Chen Ming",
      "Chen Jie", "Chen Lei", "Chen Tao", "Chen Feng", "Chen Yang", "Chen Bin", "Yang Wei",
      "Yang Jun", "Yang Hao", "Yang Ming", "Yang Jie", "Yang Tao", "Yang Feng", "Yang Peng",
      "Yang Jian", "Yang Bin", "Huang Wei", "Huang Jun", "Huang Hao", "Huang Ming", "Huang Jie",
      "Huang Lei", "Huang Tao", "Huang Feng", "Huang Yang", "Huang Bin", "Zhao Wei", "Zhao Jun",
      "Zhao Hao", "Zhao Ming", "Zhao Jie", "Zhao Lei", "Zhao Tao", "Zhao Feng", "Zhao Peng",
      "Zhao Bin", "Wu Wei", "Wu Jun", "Wu Hao", "Wu Ming", "Wu Jie", "Wu Lei", "Wu Tao", "Wu Feng",
      "Wu Peng", "Wu Jian", "Zhou Wei", "Zhou Jun", "Zhou Hao", "Zhou Ming", "Zhou Jie",
      "Zhou Lei", "Zhou Tao", "Zhou Feng", "Zhou Yang", "Zhou Bin", "Xu Wei", "Xu Jun", "Xu Hao",
      "Xu Ming", "Xu Jie", "Xu Lei", "Xu Tao", "Xu Feng", "Xu Peng", "Xu Jian", "Sun Wei",
      "Sun Jun", "Sun Hao", "Sun Ming", "Sun Jie", "Sun Lei", "Sun Tao", "Sun Feng", "Sun Yang",
      "Sun Bin", "Ma Wei", "Ma Jun", "Ma Hao", "Ma Ming", "Ma Jie", "Ma Lei", "Ma Tao", "Ma Feng",
      "Ma Peng", "Ma Jian", "Guo Wei", "Guo Jun", "Guo Hao", "Guo Ming", "Guo Jie", "Guo Lei",
      "Guo Tao", "Guo Feng", "Guo Yang", "Guo Bin", "Lin Wei", "Lin Jun", "Lin Hao", "Lin Ming",
      "Lin Jie", "Lin Lei", "Lin Tao", "Lin Feng", "Lin Peng", "Lin Jian", "He Wei", "He Jun",
      "He Hao", "He Ming", "He Jie", "He Lei", "He Tao", "He Feng", "He Yang", "He Bin"
    ],

    female: [
      "Ai", "An", "Baozhai", "Caihong", "Chun", "Fang", "Fen", "Guiying", "Hua", "Huifen", "Jia",
      "Jiahui", "Jing", "Juan", "Lan", "Lei", "Li", "Lian", "Lihua", "Lin", "Ling", "Mei",
      "Meiling", "Min", "Na", "Ning", "Peizhi", "Ping", "Qi", "Qiao", "Qing", "Rong", "Shan",
      "Shu", "Ting", "Wen", "Xia", "Xiaohui", "Xiaoli", "Xiaomei", "Xiaoyan", "Xin", "Xingjuan",
      "Xiu", "Xiulan", "Xue", "Yan", "Ying", "Yue", "Yulan", "Yumei", "Yun", "Zhen", "Zhenzhen",
      "Zhilan", "Lifen", "Ailing", "Chunhua", "Fangfang", "Jingyi", "Lanfen", "Liling", "Meifeng",
      "Qian", "Ruolan", "Shuying", "Wanyu", "Xinyi", "Yaqin", "Zixia", "Li Na", "Li Fang",
      "Li Jing", "Li Ying", "Li Mei", "Li Yan", "Li Hui", "Li Xiu", "Li Juan", "Li Hong",
      "Wang Fang", "Wang Jing", "Wang Yan", "Wang Mei", "Wang Ying", "Wang Hui", "Wang Xiu",
      "Wang Na", "Wang Li", "Wang Juan", "Zhang Jing", "Zhang Yan", "Zhang Mei", "Zhang Ying",
      "Zhang Hui", "Zhang Na", "Zhang Xiu", "Zhang Juan", "Zhang Hong", "Zhang Li", "Liu Fang",
      "Liu Jing", "Liu Yan", "Liu Mei", "Liu Ying", "Liu Hui", "Liu Xiu", "Liu Na", "Liu Juan",
      "Liu Hong", "Chen Fang", "Chen Jing", "Chen Yan", "Chen Mei", "Chen Ying", "Chen Hui",
      "Chen Xiu", "Chen Na", "Chen Juan", "Chen Li", "Yang Fang", "Yang Jing", "Yang Yan",
      "Yang Mei", "Yang Ying", "Yang Hui", "Yang Xiu", "Yang Na", "Yang Juan", "Yang Hong",
      "Huang Fang", "Huang Jing", "Huang Yan", "Huang Mei", "Huang Ying", "Huang Hui", "Huang Xiu",
      "Huang Na", "Huang Juan", "Huang Li", "Zhao Fang", "Zhao Jing", "Zhao Yan", "Zhao Mei",
      "Zhao Ying", "Zhao Hui", "Zhao Xiu", "Zhao Na", "Zhao Juan", "Zhao Hong", "Wu Fang",
      "Wu Jing", "Wu Yan", "Wu Mei", "Wu Ying", "Wu Hui", "Wu Xiu", "Wu Na", "Wu Juan", "Wu Li",
      "Zhou Fang", "Zhou Jing", "Zhou Yan", "Zhou Mei", "Zhou Ying", "Zhou Hui", "Zhou Xiu",
      "Zhou Na", "Zhou Juan", "Zhou Hong", "Xu Fang", "Xu Jing", "Xu Yan", "Xu Mei", "Xu Ying",
      "Xu Hui", "Xu Xiu", "Xu Na", "Xu Juan", "Xu Li", "Sun Fang", "Sun Jing", "Sun Yan",
      "Sun Mei", "Sun Ying", "Sun Hui", "Sun Xiu", "Sun Na", "Sun Juan", "Sun Hong", "Ma Fang",
      "Ma Jing", "Ma Yan", "Ma Mei", "Ma Ying", "Ma Hui", "Ma Xiu", "Ma Na", "Ma Juan", "Ma Li",
      "Guo Fang", "Guo Jing", "Guo Yan", "Guo Mei", "Guo Ying", "Guo Hui", "Guo Xiu", "Guo Na",
      "Guo Juan", "Guo Hong", "Lin Fang", "Lin Jing", "Lin Yan", "Lin Mei", "Lin Ying", "Lin Hui",
      "Lin Xiu", "Lin Na", "Lin Juan", "Lin Li", "He Fang", "He Jing", "He Yan", "He Mei",
      "He Ying", "He Hui", "He Xiu", "He Na", "He Juan", "He Hong"
    ],

    surname: [
      "Bai", "Cai", "Cao", "Chang", "Chen", "Cheng", "Deng", "Ding", "Du", "Fan", "Fang", "Feng",
      "Fu", "Gao", "Gong", "Gu", "Guo", "Han", "He", "Hou", "Hu", "Huang", "Jia", "Jiang", "Jin",
      "Kong", "Lan", "Lei", "Li", "Liang", "Lin", "Liu", "Long", "Luo", "Ma", "Meng", "Pan",
      "Peng", "Qian", "Qiao", "Qin", "Ren", "Shan", "Shao", "Shen", "Shi", "Song", "Sun", "Tan",
      "Tang", "Tian", "Wang", "Wei", "Wen", "Wu", "Xiao", "Xie", "Xu", "Yan", "Yang", "Yao", "Ye",
      "Yu", "Yuan", "Zeng", "Zhang", "Zhao", "Zheng", "Zhong", "Zhou"
    ]
  },

  "east-asian-japanese": {
    label: "East Asian — Japanese",
    surnameFirst: true,

    male: [
      "Akira", "Aoi", "Arata", "Daichi", "Daisuke", "Eiji", "Fumihiro", "Genji", "Haru", "Haruki",
      "Hayato", "Hideo", "Hikaru", "Hiro", "Hiroshi", "Isamu", "Itsuki", "Jiro", "Jun", "Kaito",
      "Kaoru", "Katsuro", "Kazuki", "Kazuo", "Ken", "Kenichi", "Kenta", "Kiyoshi", "Koji",
      "Makoto", "Masaru", "Minato", "Naoki", "Noboru", "Osamu", "Raiden", "Ren", "Riku", "Rin",
      "Ryo", "Ryota", "Satoshi", "Shigeru", "Shin", "Shinji", "Shiro", "Sho", "Sora", "Susumu",
      "Taichi", "Takashi", "Takeshi", "Taro", "Tatsuya", "Tomohiro", "Toru", "Yamato", "Yasuhiro",
      "Yori", "Yoshi", "Yoshio", "Yuki", "Yuma", "Yusuke", "Akihiko", "Chikara", "Haruto",
      "Ichiro", "Kanji", "Keisuke", "Masashi", "Nobu", "Rei", "Ryunosuke", "Seiji", "Shota",
      "Tadashi", "Takumi", "Tetsuya", "Yoshinobu", "Atsushi", "Fuyuki", "Hideaki", "Kenshiro",
      "Mamoru", "Norio", "Ryohei", "Shun", "Takao", "Tomoya", "Yukio", "Zen", "Hotaka", "Kazuya",
      "Nao", "Rikuo", "Taiga", "Yoshiro"
    ],

    female: [
      "Aiko", "Akane", "Akemi", "Asami", "Ayaka", "Ayame", "Chie", "Chika", "Emiko", "Eri",
      "Haruka", "Hikari", "Hinata", "Hitomi", "Honoka", "Izumi", "Kaede", "Kana", "Kanon", "Karen",
      "Kasumi", "Keiko", "Kiko", "Kimiko", "Kohana", "Kyoko", "Madoka", "Mai", "Maiko", "Mana",
      "Mariko", "Mayu", "Megumi", "Michiko", "Midori", "Mika", "Miku", "Minami", "Misaki", "Miyu",
      "Momoka", "Nana", "Nao", "Naoko", "Narumi", "Nozomi", "Rei", "Rika", "Rina", "Saki",
      "Sakura", "Satomi", "Sayaka", "Shiori", "Sumire", "Takara", "Tomoko", "Wakana", "Yoko",
      "Yui", "Yuka", "Yukari", "Yume", "Yumi", "Yuna", "Akiko", "Chiharu", "Fumiko", "Harumi",
      "Hisako", "Kanna", "Kiyomi", "Kumiko", "Maaya", "Mao", "Mitsuki", "Nanami", "Natsumi",
      "Reina", "Ruri", "Sachiko", "Setsuko", "Shizuka", "Tamaki", "Umeko", "Yayoi", "Yoshiko",
      "Airi", "Chisato", "Erika", "Hotaru", "Kiyoka", "Manami", "Nodoka", "Riko", "Suzume",
      "Yuriko", "Asuka", "Hina", "Kotone", "Mizuki"
    ],

    surname: [
      "Abe", "Aoki", "Endo", "Fujimoto", "Fujita", "Fukuda", "Goto", "Hara", "Hayashi", "Higashi",
      "Hirano", "Honda", "Ichikawa", "Ishida", "Ishikawa", "Ito", "Iwai", "Kaneko", "Kato",
      "Kawaguchi", "Kawasaki", "Kikuchi", "Kimura", "Kobayashi", "Kondo", "Kurosawa", "Maeda",
      "Matsuda", "Matsumoto", "Miura", "Miyamoto", "Mizuno", "Mori", "Morimoto", "Murakami",
      "Murata", "Nagai", "Nakajima", "Nakamura", "Nakano", "Nishimura", "Noguchi", "Ogawa",
      "Okada", "Okamoto", "Ono", "Saito", "Sakai", "Sasaki", "Shibata", "Shimada", "Sugimoto",
      "Suzuki", "Takahashi", "Takeda", "Tanabe", "Tanaka", "Uchida", "Ueda", "Wada", "Watanabe",
      "Yamada", "Yamaguchi", "Yamamoto", "Yamashita", "Yokoyama", "Yoshida", "Arakawa", "Chiba",
      "Fujii", "Hoshino", "Inoue", "Kojima", "Matsushita", "Nakao", "Oshima", "Seki", "Tsuchiya",
      "Yoshikawa", "Ando", "Furuya", "Hashimoto", "Igarashi", "Kitagawa", "Mochizuki", "Narita",
      "Shinohara", "Tachibana", "Uesugi", "Yanagida", "Aizawa", "Fukushima", "Hasegawa",
      "Kuramoto", "Minamoto", "Shimizu", "Toyoda"
    ]
  },

  "east-asian-korean": {
    label: "East Asian — Korean",
    surnameFirst: true,

    male: [
      "Byung-ho", "Byung-hun", "Chang-min", "Chul", "Chul-soo", "Dae-hyun", "Dae-jung", "Dae-sung",
      "Dong-hyun", "Dong-wook", "Eun-ho", "Gi-tae", "Gun-woo", "Ha-joon", "Hae-jin", "Hyun-joon",
      "Hyun-soo", "Hyun-woo", "Il-sung", "In-su", "Jae-hyun", "Jae-sung", "Jae-won", "Ji-ho",
      "Ji-hoon", "Ji-hyun", "Ji-sung", "Ji-woo", "Jin-ho", "Jin-soo", "Jong-hyun", "Joon",
      "Joon-ho", "Jun-seo", "Jung-ho", "Jung-min", "Kang-min", "Ki-tae", "Kwang-soo", "Kyung-ho",
      "Min-ho", "Min-jae", "Min-jun", "Min-seok", "Myung-soo", "Sang-ho", "Sang-hyun", "Seok-jin",
      "Seung-ho", "Seung-hyun", "Seung-min", "Seung-woo", "Si-woo", "Soo-hyun", "Sung-ho",
      "Sung-min", "Tae-hyun", "Tae-joon", "Tae-sung", "Tae-woo", "Won-ho", "Woo-jin", "Woo-sung",
      "Young-ho", "Young-jae", "Young-min", "Young-soo", "Yoon-ho", "Yoon-jae", "Yoon-sung",
      "Yun-seo", "Beom-soo", "Chang-ho", "Do-hyun", "Gyu-min", "Hwan", "Jin-woo", "Joon-young",
      "Kyu-hyun", "Nam-joon", "Sang-woo", "Seo-jun", "Seung-jae", "Si-hyun", "Su-bin", "Tae-yang",
      "Won-jun", "Ye-jun", "Yeong-su", "Yong-hwa", "Dong-min", "Hyuk", "Jae-beom", "Kyung-soo",
      "Min-kyu", "Sun-woo"
    ],

    female: [
      "Ae-ri", "Ara", "Bo-kyung", "Bo-ra", "Chae-won", "Da-eun", "Da-hye", "Eun-bi", "Eun-chae",
      "Eun-ha", "Eun-hee", "Eun-ji", "Ga-young", "Ha-eun", "Ha-na", "Hae-won", "Hana", "Hee-jin",
      "Hee-young", "Hye-jin", "Hye-ri", "Hye-won", "Hyun-ah", "Hyun-joo", "Hyun-kyung", "In-young",
      "Ji-eun", "Ji-hye", "Ji-soo", "Ji-won", "Ji-young", "Jin-hee", "Joo-hyun", "Ju-eun",
      "Kyung-hee", "Mi-kyung", "Mi-sook", "Min-ah", "Min-ji", "Min-seo", "Na-ra", "Seo-hyun",
      "Seo-yeon", "Seul-gi", "So-hee", "So-ra", "So-young", "Soo-ah", "Soo-jin", "Soo-yeon",
      "Su-bin", "Sun-hee", "Sun-young", "Ye-eun", "Ye-jin", "Yeon-hee", "Yoo-jin", "Yoon-ah",
      "Yoon-hee", "Young-mi", "Young-sook", "Yu-jin", "Yuna", "Ae-jung", "Bo-mi", "Da-sol",
      "Eun-seo", "Ga-eul", "Ha-yoon", "Hye-sun", "Ji-ah", "Ji-yoo", "Jung-hwa", "Mi-na",
      "Na-young", "Seon-mi", "Seung-hee", "Shin-hye", "So-jung", "So-yun", "Su-jin", "Sun-mi",
      "Ye-rin", "Ye-seul", "Yeo-jin", "Yoon-seo", "Yu-na", "Bit-na", "Chun-ja", "Eun-young",
      "Hye-bin", "Mi-young", "Seo-yun", "Soo-min", "Yeon-su", "Young-ja"
    ],

    surname: [
      "Ahn", "Baek", "Bae", "Cha", "Chang", "Choi", "Chun", "Han", "Heo", "Hong", "Hwang", "Jang",
      "Jeon", "Jung", "Kang", "Kim", "Koo", "Kwak", "Lee", "Lim", "Ma", "Min", "Moon", "Nam", "No",
      "Oh", "Park", "Rhee", "Ryu", "Seo", "Shin", "Sim", "Song", "Yoo", "Yoon", "Cho", "Gang",
      "Go", "Ha", "Ham", "Heo", "Huh", "Im", "Jin", "Ju", "Kang", "Ko", "Kwon", "Na", "Paik",
      "Pyo", "Seok", "Seong", "Son", "Yang", "Yeom", "Yim", "Yu", "An", "Bang", "Byun", "Cheon",
      "Do", "Eom", "Gwak", "Ham", "Hwangbo", "Joo", "Ki", "Mok", "Myung", "Noh", "Ok", "Pae", "Ro",
      "Sa", "Seol", "Tak", "Uhm", "Won", "Woo", "Yuk", "Bok", "Chae", "Eun", "Gye", "Hyeon", "Jae",
      "Myeong", "Pang", "Seo", "Wi", "Yeo", "Yun", "Jo", "Beom", "Dan", "Seung"
    ]
  },

  "eastern-european-slavic": {
    label: "Eastern European / Slavic",
    surnameFirst: false,

    male: [
      "Adam", "Aleksei", "Andrei", "Anton", "Arkady", "Bohdan", "Boris", "Branislav", "Damir",
      "Danil", "Dariusz", "Denis", "Dimitri", "Dragomir", "Dusan", "Emil", "Evgeny", "Filip",
      "Gennady", "Grigori", "Igor", "Ilya", "Ivan", "Jaromir", "Jiri", "Karel", "Kirill",
      "Konstantin", "Ladislav", "Leonid", "Luka", "Marek", "Mateusz", "Milan", "Milos", "Miroslav",
      "Nikolai", "Oleg", "Pavel", "Piotr", "Radek", "Radomir", "Roman", "Rostislav", "Ruslan",
      "Sergei", "Slavko", "Stanislav", "Stefan", "Svetoslav", "Tadeusz", "Timur", "Tomasz",
      "Valentin", "Vasili", "Viktor", "Vladimir", "Vladislav", "Vojtech", "Yaroslav", "Yevgeni",
      "Zdenek", "Zoran", "Aleksandar", "Bogdan", "Casimir", "Dobromir", "Fyodor", "Kazimir",
      "Lech", "Mieczyslaw", "Nikita", "Radislav", "Sasha", "Slobodan", "Tihomir", "Venceslav",
      "Wojciech", "Yuriy", "Zbigniew", "Anatoly", "Boleslav", "Czeslaw", "Dragan", "Georgi",
      "Janusz", "Kostya", "Lukasz", "Mstislav", "Predrag", "Radoslav", "Semyon", "Vadim",
      "Velimir", "Yegor", "Zlatan"
    ],

    female: [
      "Agata", "Alena", "Anastasia", "Anya", "Bozena", "Danica", "Daria", "Dominika", "Dragana",
      "Ekaterina", "Elena", "Elzbieta", "Eva", "Galina", "Halina", "Ilona", "Inna", "Irina",
      "Ivana", "Jadwiga", "Jelena", "Karolina", "Katarina", "Katya", "Kristina", "Larisa", "Lidia",
      "Ludmila", "Magdalena", "Maja", "Marina", "Marta", "Milena", "Mira", "Miroslava", "Nadia",
      "Natalia", "Natasha", "Nikolina", "Olena", "Olga", "Oksana", "Petra", "Radmila", "Renata",
      "Sanja", "Sofiya", "Sonya", "Stanislava", "Svetlana", "Tatiana", "Tereza", "Valentina",
      "Vera", "Veronika", "Vesna", "Viktoria", "Yana", "Yelena", "Yulia", "Zdenka", "Zlata",
      "Aleksandra", "Bogdana", "Cveta", "Dobroslava", "Emilia", "Feodora", "Gordana", "Izabela",
      "Jaroslava", "Ksenia", "Liliana", "Malgorzata", "Nadezhda", "Polina", "Roksana", "Slavica",
      "Tamara", "Vasilisa", "Zhanna", "Anzela", "Bronislava", "Dobrila", "Evgenia", "Ivetta",
      "Kalina", "Larysa", "Milica", "Nevena", "Rada", "Snezhana", "Tsvetana", "Velina",
      "Yaroslava", "Zora"
    ],

    surname: [
      "Antonov", "Babić", "Baranov", "Belov", "Borkowski", "Chernov", "Czajkowski", "Dimitrov",
      "Dragunov", "Duboiski", "Fedorov", "Filipov", "Gavrilov", "Golubov", "Gorski", "Horvat",
      "Ilic", "Ivanov", "Jankovic", "Jovanovic", "Kaczmarek", "Kalinowski", "Kovacs", "Kovalenko",
      "Kowalski", "Kozlov", "Kravchenko", "Kuznetsov", "Lewandowski", "Lukashenko", "Markovic",
      "Mihailov", "Miklos", "Mladenov", "Morozov", "Nikolic", "Novak", "Novikov", "Orlov",
      "Pavlov", "Petrov", "Popov", "Romanov", "Rybak", "Sidorov", "Smirnov", "Sokolov", "Stanek",
      "Stepanov", "Stojanovic", "Tarasov", "Todorov", "Urbanek", "Vasilev", "Veselov",
      "Vinogradov", "Vojnovic", "Volkov", "Voronin", "Vukovic", "Yakimov", "Yordanov", "Zajac",
      "Zhukov", "Aleksic", "Bogdanov", "Cerny", "Dobrovsky", "Gajic", "Iliev", "Karadzic",
      "Kislyak", "Krawczyk", "Litvinov", "Malinowski", "Mroz", "Nowak", "Ostrowski", "Ponomarenko",
      "Radulovic", "Rogozin", "Savin", "Shevchenko", "Tarnowski", "Ulyanov", "Veselinov", "Wojcik",
      "Zelenko", "Andrusov", "Bronislavski", "Dragic", "Jurevic", "Kostov", "Mirovic", "Petrescu",
      "Rudenko", "Svetlov", "Yarovich"
    ]
  },

  "ethiopian-horn-of-africa": {
    label: "Ethiopian / Horn of Africa",
    surnameFirst: false,

    male: [
      "Abebe", "Abel", "Abraham", "Abreham", "Adane", "Adisu", "Aklilu", "Alemayehu", "Amare",
      "Amanuel", "Amlak", "Asfaw", "Assefa", "Awet", "Ayana", "Bekele", "Berhane", "Berhanu",
      "Birhanu", "Binyam", "Dagmawi", "Dawit", "Demeke", "Dereje", "Elias", "Endalkachew",
      "Ephrem", "Ermias", "Eyob", "Fitsum", "Fisseha", "Gabre", "Gebre", "Gebremariam", "Getachew",
      "Girma", "Habte", "Haile", "Hailemariam", "Hailu", "Henok", "Kidane", "Kidus", "Kiros",
      "Lelisa", "Mekonnen", "Melaku", "Meron", "Mihret", "Mohammed", "Mulugeta", "Nahom",
      "Natnael", "Negasi", "Nigatu", "Robel", "Samuel", "Semere", "Seyoum", "Solomon", "Tadesse",
      "Tamirat", "Tamrat", "Tekle", "Temesgen", "Tesfahun", "Tesfaye", "Tewelde", "Tewodros",
      "Tilahun", "Welde", "Woldemariam", "Workneh", "Yared", "Yemane", "Yilma", "Yohannes",
      "Yonas", "Yosef", "Yussuf", "Zelalem", "Zerihun", "Amanuel", "Beraki", "Desta", "Fikru",
      "Ghebremeskel", "Hagos", "Isaias", "Jemal", "Kebede", "Mebratu", "Negus", "Shiferaw",
      "Tsegaye", "Wassie", "Yitbarek", "Zenawi"
    ],

    female: [
      "Abeba", "Alem", "Almaz", "Amanuel", "Aster", "Awet", "Ayan", "Ayantu", "Betelhem",
      "Birtukan", "Chaltu", "Dagmawit", "Eden", "Eleni", "Elsabet", "Emebet", "Eyerusalem",
      "Feven", "Fikirte", "Genet", "Haben", "Hadas", "Hanna", "Helen", "Hiwot", "Hodan", "Ilili",
      "Lemlem", "Liya", "Mahi", "Mahlet", "Marta", "Medina", "Mekdes", "Meron", "Meseret", "Mimi",
      "Muna", "Nardos", "Netsanet", "Rahel", "Rediet", "Ruth", "Saba", "Samrawit", "Sara", "Selam",
      "Selamawit", "Senait", "Sofia", "Tigist", "Tsedenia", "Tsion", "Winta", "Worknesh", "Yasmin",
      "Yodit", "Zahara", "Zeinab", "Zemen", "Abrehet", "Askale", "Blen", "Desta", "Eyerus",
      "Fikir", "Haimanot", "Hawi", "Kidist", "Lulit", "Mahder", "Meklit", "Mulu", "Nafkot",
      "Roman", "Ruth", "Saron", "Seble", "Sena", "Sosina", "Tewabech", "Tiruwork", "Wegayehu",
      "Yordanos", "Zebiba", "Aida", "Buzayehu", "Dinknesh", "Etsegenet", "Frehiwot", "Genna",
      "Habiba", "Kalkidan", "Mebrhit", "Netsanet", "Rakeb", "Sahle", "Tsega", "Zufan"
    ],

    surname: [
      "Abebe", "Abraham", "Adane", "Alemayehu", "Asfaw", "Assefa", "Awoke", "Bekele", "Berhane",
      "Berhe", "Berihu", "Beyene", "Demissie", "Derebe", "Desta", "Ephrem", "Eshetu", "Fekadu",
      "Fisseha", "Gebre", "Gebremariam", "Gebreselassie", "Getachew", "Ghebreyesus", "Girma",
      "Haile", "Hailemariam", "Hailu", "Hassen", "Ibrahim", "Kidane", "Kiros", "Mebratu",
      "Mekonnen", "Melaku", "Mengesha", "Mohammed", "Molla", "Negash", "Nigussie", "Reda", "Sahle",
      "Samson", "Semere", "Seyoum", "Shiferaw", "Solomon", "Tadesse", "Tamirat", "Tamru", "Tekle",
      "Temesgen", "Tesfaye", "Tewelde", "Tewodros", "Tilahun", "Welde", "Woldemariam", "Worku",
      "Yared", "Yilma", "Yohannes", "Yosef", "Zelalem", "Zerihun", "Abay", "Aregawi", "Asmelash",
      "Beraki", "Debebe", "Fikremariam", "Gebru", "Ghebremichael", "Hagos", "Kebede", "Kidus",
      "Mamo", "Mebrahtu", "Negasi", "Reta", "Teshome", "Tesfamariam", "Tesfamichael",
      "Weldeslassie", "Yemane", "Aklilu", "Bereded", "Dawit", "Endale", "Girmay", "Habte", "Kassa",
      "Meklit", "Negusse", "Tsegaye", "Wassie", "Yitbarek", "Zenebe"
    ]
  },

  "indigenous-american": {
    label: "Indigenous American",
    surnameFirst: false,

    male: [
      "Ahanu", "Ahote", "Akecheta", "Aponi", "Bidziil", "Chayton", "Chogan", "Dakota", "Delsin",
      "Enapay", "Enyeto", "Etu", "Goyathlay", "Hakan", "Hania", "Helaku", "Hinto", "Honi", "Hurit",
      "Isi", "Kangee", "Kele", "Kitchi", "Kohana", "Koi", "Kuruk", "Lenno", "Mato", "Mika",
      "Nantan", "Nashoba", "Nodin", "Nokosi", "Onacona", "Pawnee", "Paytah", "Quanah", "Sahale",
      "Sakima", "Shilah", "Takoda", "Tatanka", "Tawa", "Tecumseh", "Tokala", "Tuari", "Wapi",
      "Wicasa", "Wikasa", "Winona", "Yuma", "Atohi", "Bidaban", "Chaske", "Elan", "Honovi",
      "Kiona", "Misu", "Nayavu", "Peta", "Sani", "Tasunke", "Wapiya", "Yutu", "Adsila", "Ahmik",
      "Anoki", "Chanunpa", "Elsu", "Hotah", "Kai", "Mochni", "Nikan", "Ohanzee", "Pules", "Sinte",
      "Tasunka", "Wamblee", "Yazhi", "Awan", "Chapa", "Dasan", "Elki", "Hiamovi", "Kitchi",
      "Mahpee", "Nodin", "Omusa", "Peta", "Sakari", "Takhi", "Wikvaya", "Yoki", "Adoette",
      "Catori", "Hesutu", "Mikao", "Niyol", "Tayanita"
    ],

    female: [
      "Ahyoka", "Aiyana", "Alawa", "Aponi", "Atotoztli", "Ayita", "Chenoa", "Chidimma", "Citlali",
      "Dakota", "Dyani", "Elu", "Enola", "Halona", "Halyn", "Hania", "Hinto", "Istas", "Kachina",
      "Kai", "Kiona", "Koko", "Leotie", "Maka", "Mika", "Mitena", "Naira", "Nalin", "Nita", "Nova",
      "Odina", "Peta", "Sakari", "Salali", "Sequoia", "Shikoba", "Tadita", "Talulah", "Tallulah",
      "Tayen", "Tiva", "Winona", "Yoki", "Yona", "Adoeette", "Adsila", "Aleshanee", "Anpaytoo",
      "Bidziil", "Catori", "Chapawee", "Dyami", "Elisi", "Honi", "Ite", "Kasa", "Kimi", "Lomasi",
      "Meli", "Nayeli", "Nizhoni", "Onida", "Pocahontas", "Sani", "Sitala", "Takala", "Tayanita",
      "Wichahpi", "Yoki", "Aponivi", "Chumani", "Hinto", "Kanti", "Muna", "Nokomis", "Pavati",
      "Shania", "Tala", "Wachiwi", "Yepa", "Ahyoka", "Aleshanee", "Aylen", "Cochiti", "Honani",
      "Isi", "Kachada", "Mahkah", "Namid", "Odakota", "Pipaluk", "Sahkyo", "Taini", "Wuti",
      "Yamka", "Zitkala", "Awinita", "Nizhoni"
    ],

    surname: [
      "Begay", "Benally", "Blackhorse", "Bluebird", "Chasinghawk", "Cloud", "Cornstalk",
      "Dancingbear", "Deer", "Eagle", "Feather", "Graywolf", "Hawk", "Ironcloud", "Kickingbird",
      "Littlebear", "Longwalker", "Manyhorses", "Morningstar", "Nighthawk", "Onefeather",
      "Redbird", "Runningdeer", "Singingbird", "Sky", "Spottedhorse", "Standingbear", "Talltree",
      "Thunderhawk", "Twofeathers", "Walkingstick", "Whitecloud", "Whiteriver", "Windwalker",
      "Yellowhawk", "Youngblood", "Adakai", "Ahoka", "Black Elk", "Bluefeather", "Bravewolf",
      "Clearwater", "Dawnrunner", "Eaglefeather", "Firecloud", "Goldenhawk", "Greenthunder",
      "Highwalker", "Ironhawk", "Littlewolf", "Manydeeds", "Nightwalker", "Paintedhorse",
      "Quickbear", "Redcloud", "Risinghawk", "Runningwolf", "Silentwater", "Snowbird", "Strongbow",
      "Swiftdeer", "Tallbear", "Thundercloud", "Warbonnet", "Whitehawk", "Windriver", "Yellowbird",
      "Bigcrow", "Darkwater", "Eagleman", "Foxwalker", "Grayeyes", "Highhawk", "Littlecrow",
      "Longfeather", "Manyeagles", "Nightsky", "Redhawk", "Rivers", "Singingwind", "Strongrock",
      "Tallchief", "Threefeathers", "Whitebear", "Wildhorse", "Winterhawk", "Blackwater",
      "Cloudrunner", "Skydeer", "Eagleheart", "Firewalker", "Redstone", "Shadowhawk", "Swiftarrow",
      "Tallwalker", "Whitefeather", "Windhorse", "Yellowstone"
    ]
  },

  "indigenous-australian": {
    label: "Indigenous Australian / Aboriginal",
    surnameFirst: false,

    male: [
      "Alinta", "Arrernte", "Banjo", "Bardo", "Bevan", "Bilin", "Birrani", "Bunjil", "Bundjalung",
      "Burran", "Daku", "Djalu", "Djarra", "Djirra", "Duran", "Gamil", "Garrin", "Goolagong",
      "Gularabulu", "Gumbaynggirr", "Jannali", "Jarli", "Jarrah", "Jirra", "Jindalee", "Jirrah",
      "Kado", "Kaiya", "Kalina", "Karri", "Koa", "Kobi", "Koori", "Kurran", "Lakai", "Lowan",
      "Mallee", "Mando", "Marrak", "Merrick", "Miro", "Murran", "Nandor", "Narrah", "Ngarrindjeri",
      "Ngarra", "Nulla", "Parntu", "Pinaroo", "Quarran", "Raukkan", "Tambo", "Tane", "Tarni",
      "Tidda", "Tjilpi", "Torra", "Walan", "Wandu", "Waragun", "Warra", "Warrin", "Wirra", "Wulfe",
      "Yamba", "Yarran", "Yidaki", "Yindi", "Yulara", "Yurren", "Baiame", "Birrung", "Coorah",
      "Dakuya", "Gulari", "Jemby", "Kurraka", "Mandawuy", "Nerang", "Palku", "Tarkyn", "Uluru",
      "Warragul", "Yalung", "Bingara", "Coolamon", "Djaran", "Gunya", "Jindabyne", "Kiah", "Mungo",
      "Nulungu", "Tjandamurra", "Warragul", "Yarri", "Brolga", "Kirra", "Marlu"
    ],

    female: [
      "Alinta", "Allira", "Aroha", "Aviaja", "Bindi", "Bina", "Brindabella", "Cooee",
      "Djarrtjuntjun", "Elouera", "Ena", "Gawurra", "Iluka", "Jannali", "Jedda", "Jirra", "Kalina",
      "Kiah", "Kirra", "Koori", "Kylie", "Layla", "Lillardia", "Lowanna", "Mali", "Marli", "Meeka",
      "Merindah", "Mika", "Mirri", "Murron", "Nakita", "Nalani", "Narelle", "Nerida", "Ngarra",
      "Nyree", "Orana", "Pania", "Quamby", "Rosella", "Tarni", "Tawnie", "Tayla", "Tiarne",
      "Tjala", "Tjumari", "Tori", "Walan", "Warrina", "Willara", "Windi", "Wirri", "Wunyara",
      "Yalna", "Yarli", "Yindi", "Yulara", "Yurali", "Aadya", "Boona", "Caringa", "Dulcie",
      "Eucalya", "Galang", "Jarrah", "Kaiya", "Karinya", "Lutana", "Maree", "Minali", "Naraya",
      "Noonuccal", "Pipalyatjara", "Rona", "Talia", "Ulani", "Wandarra", "Yarrie", "Barkaa",
      "Dharri", "Emama", "Goolara", "Jemima", "Karrie", "Merri", "Nangari", "Parra", "Tjulpu",
      "Waru", "Yanka", "Bilin", "Coorie", "Jalna", "Kurrara", "Mikaela", "Tarnie", "Warrinya"
    ],

    surname: [
      "Ah Chee", "Albert", "Bonner", "Bulong", "Burgoyne", "Butler", "Cook", "Daniels", "Davis",
      "Dodson", "Doolan", "Drummond", "Durrant", "Egan", "Ella", "Franklin", "Goolagong", "Grant",
      "Hampton", "Hart", "Holt", "Hunter", "Jabirr", "Johnson", "Jupurrurla", "Karpany", "Kennedy",
      "Kngwarreye", "Knuckey", "Liddle", "Long", "Mabo", "Maher", "Mandawuy", "Marika", "Miller",
      "Moffatt", "Mundine", "Namatjira", "Nelson", "Noonuccal", "O'Donoghue", "Patten", "Perkins",
      "Riley", "Roberts", "Robertson", "Roe", "Rogers", "Roulth", "Sampson", "Sarra", "Saunders",
      "Smith", "Stanley", "Sykes", "Talbot", "Taylor", "Thomas", "Tilmouth", "Walker", "Walley",
      "Wandin", "Ward", "Watson", "Williams", "Wilson", "Winmar", "Woolla", "Wunungmurra",
      "Yarran", "Yunupingu", "Bamblett", "Braybrook", "Coffin", "Dhu", "Grogan", "Harris",
      "Jampijinpa", "Kumanjayi", "Langton", "Murray", "Neale", "Pareroultja", "Ramahyuck",
      "Tjakamarra", "West", "Widders", "Wyatt", "Yunkaporta", "Baird", "Clements", "Gibson",
      "Millerick", "Parker", "Ridgeway", "Turner", "Watego", "Wilkes"
    ]
  },

  "indo-aryan": {
    label: "Indo-Aryan",
    surnameFirst: false,

    male: [
      "Aadesh", "Aadi", "Aditya", "Ajay", "Akash", "Aman", "Amit", "Amol", "Anand", "Aniket",
      "Arjun", "Arnav", "Arun", "Ashok", "Ashwin", "Atul", "Ayush", "Baldev", "Bhavesh", "Chandan",
      "Chetan", "Darshan", "Deepak", "Dev", "Dhanush", "Dilip", "Dinesh", "Farhan", "Gautam",
      "Girish", "Gopal", "Harish", "Hemant", "Hitesh", "Imran", "Irfan", "Ishaan", "Jagdeep",
      "Jagdish", "Jai", "Kailash", "Karan", "Karthik", "Kiran", "Krishna", "Kunal", "Lokesh",
      "Madhav", "Mahesh", "Manoj", "Manish", "Mayur", "Mihir", "Mohit", "Mohan", "Mukesh", "Nakul",
      "Naveen", "Neeraj", "Nikhil", "Nirav", "Nitin", "Omkar", "Pankaj", "Parth", "Pradeep",
      "Prakash", "Pranav", "Prem", "Rahul", "Raj", "Rajan", "Rajesh", "Rakesh", "Ravi", "Rohan",
      "Rohit", "Sameer", "Sandeep", "Sanjay", "Shahid", "Shankar", "Sharad", "Shiv", "Siddharth",
      "Sohail", "Subhash", "Sudhir", "Sumeet", "Suresh", "Tarun", "Uday", "Umesh", "Varun",
      "Vasant", "Vijay", "Vikram", "Vinay", "Vineet", "Vishal", "Vivek", "Yash", "Yogesh", "Yusuf",
      "Zubair", "Aarav", "Kabir", "Reyansh", "Vihaan", "Armaan", "Devansh", "Lakshay", "Ritvik",
      "Sai", "Tanish", "Vedant", "Yuvraj", "Zayan", "Harsh", "Ishan"
    ],

    female: [
      "Aarti", "Aisha", "Alka", "Amrita", "Ananya", "Anika", "Anjali", "Anusha", "Aparna",
      "Arpita", "Asha", "Bhavna", "Charu", "Deepa", "Deepika", "Devika", "Divya", "Esha", "Farah",
      "Gauri", "Heena", "Indira", "Ira", "Ishita", "Jaya", "Jyoti", "Kajal", "Kalpana", "Karishma",
      "Kavita", "Kavya", "Kiran", "Komal", "Lakshmi", "Lata", "Leela", "Madhuri", "Mala",
      "Manisha", "Meera", "Mina", "Mira", "Nalini", "Naina", "Neha", "Nidhi", "Nikita", "Nisha",
      "Pallavi", "Parvati", "Pooja", "Pratibha", "Priya", "Radha", "Rajani", "Reema", "Rekha",
      "Renu", "Rina", "Ritika", "Sadia", "Sakshi", "Salma", "Savita", "Shalini", "Shanti",
      "Shazia", "Shreya", "Simran", "Sneha", "Sonal", "Sunita", "Sushma", "Tanvi", "Tara", "Uma",
      "Vaishali", "Vandana", "Varsha", "Vidya", "Yamini", "Yasmin", "Zahra", "Zarina", "Aditi",
      "Avani", "Diya", "Hansika", "Ila", "Janvi", "Juhi", "Khushi", "Lavanya", "Mahi", "Navya",
      "Padmini", "Roshni", "Saanvi", "Trisha", "Urvashi", "Veda", "Yashika", "Zoya", "Amara",
      "Bhavika", "Chandni", "Damini", "Ekta", "Falguni", "Gayatri", "Harini", "Ishani", "Jhanvi",
      "Kritika", "Lalita", "Mohini", "Nandini", "Oviya", "Rupal", "Tanisha"
    ],

    surname: [
      "Acharya", "Agarwal", "Bajaj", "Banerjee", "Basu", "Bhat", "Bhattacharya", "Bose", "Chandra",
      "Chatterjee", "Chaudhary", "Das", "Datta", "Desai", "Deshmukh", "Dubey", "Dwivedi",
      "Farooqi", "Gandhi", "Ghosh", "Goel", "Gowda", "Gupta", "Hussain", "Iyer", "Jain", "Joshi",
      "Kapoor", "Khan", "Khanna", "Kulkarni", "Kumar", "Mahajan", "Malhotra", "Mathur", "Mehta",
      "Menon", "Mishra", "Mirza", "Mukherjee", "Naidu", "Nair", "Narayan", "Pandey", "Patel",
      "Pillai", "Prasad", "Qureshi", "Rahman", "Rao", "Reddy", "Roy", "Saxena", "Sen", "Shah",
      "Sharma", "Shetty", "Singh", "Sinha", "Sridhar", "Srivastava", "Subramanian", "Suri", "Syed",
      "Tamboli", "Thakur", "Trivedi", "Usmani", "Varma", "Verma", "Yadav", "Zaidi", "Ansari",
      "Bhardwaj", "Chopra", "Deol", "Dixit", "Gulati", "Jadhav", "Kaul", "Kohli", "Lal", "Malik",
      "Memon", "Nanda", "Ojha", "Puri", "Rastogi", "Sachdev", "Sawant", "Shukla", "Talwar",
      "Tandon", "Tripathi", "Tyagi", "Venkataraman", "Wagle", "Bedi", "Chauhan", "Gill", "Luthra",
      "Madan", "Nagpal", "Parmar", "Rana", "Rawat", "Sengar", "Solanki", "Tiwari", "Vyas", "Warsi",
      "Amin", "Bora", "Contractor", "Engineer", "Hegde", "Kamble", "Mankad", "Pathak", "Rizvi"
    ]
  },

  "jewish-hebrew": {
    label: "Jewish / Hebrew",
    surnameFirst: false,

    male: [
      "Aaron", "Abel", "Abraham", "Adam", "Aharon", "Akiva", "Amos", "Ariel", "Asher", "Avi",
      "Avigdor", "Avraham", "Baruch", "Benjamin", "Boaz", "Caleb", "Chaim", "Daniel", "David",
      "Dov", "Efraim", "Eitan", "Elazar", "Eli", "Eliahu", "Eliezer", "Elisha", "Emmanuel",
      "Ephraim", "Erez", "Ezra", "Gabriel", "Gideon", "Haim", "Hananel", "Isaac", "Israel",
      "Itamar", "Jacob", "Jeremiah", "Jesse", "Joel", "Jonathan", "Joseph", "Judah", "Levi",
      "Matan", "Meir", "Menachem", "Micah", "Michael", "Mordechai", "Moshe", "Nachman", "Nathan",
      "Nehemiah", "Noam", "Noah", "Oren", "Pinchas", "Rafael", "Reuben", "Samuel", "Saul", "Shai",
      "Shimon", "Solomon", "Tobias", "Uri", "Yair", "Yakov", "Yehuda", "Yisrael", "Yonah", "Yosef",
      "Zachariah", "Zev", "Amit", "Avner", "Barak", "Doron", "Hillel", "Ilan", "Lior", "Malachi",
      "Nadav", "Omri", "Rami", "Shalom", "Tal", "Uziel", "Yoel", "Yonatan", "Zohar", "Adin",
      "Eyal", "Tzvi", "Netanel"
    ],

    female: [
      "Abigail", "Adina", "Ahava", "Aliza", "Ariel", "Atara", "Aviva", "Batya", "Chana", "Dalia",
      "Deborah", "Dinah", "Eden", "Eliana", "Elisheva", "Esther", "Eva", "Gabriella", "Hadassah",
      "Hannah", "Ilana", "Judith", "Leah", "Liat", "Maya", "Meira", "Michal", "Miriam", "Naama",
      "Naomi", "Nava", "Noa", "Nurit", "Orli", "Penina", "Rachel", "Rebecca", "Rina", "Rivka",
      "Ruth", "Sarah", "Shaina", "Shira", "Shoshana", "Simcha", "Talia", "Tamar", "Tehila",
      "Tzipporah", "Yael", "Yaffa", "Yehudit", "Yonina", "Zahava", "Zipporah", "Adi", "Ahuva",
      "Ayala", "Bat-El", "Chavah", "Dafna", "Efrat", "Galit", "Hila", "Keren", "Levana", "Malka",
      "Margalit", "Meital", "Nili", "Ofra", "Pnina", "Ranit", "Ronit", "Sapir", "Sigal", "Tirzah",
      "Vered", "Yarden", "Yiska", "Ziva", "Amit", "Ayana", "Batya", "Carmel", "Drora", "Liora",
      "Mazal", "Nitza", "Ora", "Shlomit", "Tova", "Yocheved", "Zemira", "Alona", "Hodaya",
      "Keshet", "Nehama", "Tikva"
    ],

    surname: [
      "Abramson", "Adler", "Auerbach", "Aviv", "Barak", "Ben-Ami", "Ben-David", "Ben-Eliyahu",
      "Ben-Yosef", "Berkowitz", "Bloom", "Cohen", "Davidson", "Dayan", "Eisenberg", "Epstein",
      "Feldman", "Finkelstein", "Friedman", "Gold", "Goldberg", "Goldstein", "Greenberg",
      "Grossman", "Halpern", "Horowitz", "Isaacs", "Jacobs", "Kagan", "Katz", "Kaufman", "Klein",
      "Kohn", "Levin", "Levine", "Levy", "Lieberman", "Mandel", "Mizrahi", "Mor", "Moscovitz",
      "Perelman", "Peretz", "Rabinowitz", "Rosen", "Rosenberg", "Roth", "Rubin", "Rubinstein",
      "Sandler", "Schapiro", "Schneider", "Schwartz", "Segal", "Shalev", "Sharabi", "Silverman",
      "Solomon", "Stein", "Stern", "Tenenbaum", "Weinberg", "Weiss", "Wexler", "Yadin", "Yosef",
      "Zohar", "Alterman", "Ashkenazi", "Ben-Shimon", "Carmi", "Dahan", "Eliyahu", "Geller",
      "Hadad", "Israeli", "Kessler", "Lapid", "Meiri", "Navon", "Ohana", "Pines", "Ravid",
      "Shamir", "Topaz", "Uriel", "Vaisman", "Yitzhaki", "Zilberman", "Aharoni", "Ben-Tzur",
      "Freedman", "Gavriel", "Malamed", "Nissim", "Rotenberg", "Tzur", "Yariv"
    ]
  },

  "latin-iberian": {
    label: "Latin / Iberian",
    surnameFirst: false,

    male: [
      "Alejandro", "Antonio", "Adrian", "Alberto", "Andres", "Angel", "Arturo", "Bruno", "Carlos",
      "Cesar", "Cristian", "Daniel", "David", "Diego", "Eduardo", "Emilio", "Enrique", "Esteban",
      "Fabian", "Felipe", "Fernando", "Francisco", "Gabriel", "Gerardo", "Gonzalo", "Guillermo",
      "Hector", "Hugo", "Ignacio", "Isaac", "Ivan", "Jaime", "Javier", "Joaquin", "Jorge", "Jose",
      "Juan", "Julian", "Leo", "Leonardo", "Lorenzo", "Lucas", "Luis", "Manuel", "Marco", "Marcos",
      "Martin", "Mateo", "Matias", "Mauricio", "Maximo", "Miguel", "Nicolas", "Oscar", "Pablo",
      "Patricio", "Pedro", "Rafael", "Raul", "Ricardo", "Roberto", "Rodrigo", "Ruben", "Salvador",
      "Samuel", "Santiago", "Sergio", "Tomas", "Valentin", "Vicente", "Victor", "Alfonso",
      "Armando", "Baltasar", "Benicio", "Camilo", "Claudio", "Damian", "Dario", "Domingo", "Elias",
      "Ernesto", "Federico", "Gaspar", "Horacio", "Iker", "Jeronimo", "Leandro", "Lisandro",
      "Luciano", "Marcelo", "Mario", "Nestor", "Octavio", "Ramiro", "Renato", "Rodolfo", "Rogelio",
      "Roman", "Teodoro", "Thiago", "Valerio", "Xavier", "Alvaro", "Bautista", "Cristobal",
      "Ezequiel", "Franco", "Ismael", "Julio", "Lautaro", "Milton", "Noel", "Orlando", "Ramon",
      "Rene", "Saul", "Ulises", "Yago", "Zacarias"
    ],

    female: [
      "Adriana", "Alejandra", "Alicia", "Ana", "Andrea", "Angela", "Antonia", "Beatriz", "Bianca",
      "Camila", "Carla", "Carmen", "Catalina", "Cecilia", "Clara", "Claudia", "Cristina",
      "Daniela", "Diana", "Dolores", "Elena", "Elisa", "Emilia", "Esperanza", "Estela", "Eva",
      "Fabiana", "Fernanda", "Gabriela", "Gloria", "Helena", "Ines", "Irene", "Isabel", "Jacinta",
      "Jimena", "Julia", "Julieta", "Laura", "Leonor", "Leticia", "Liliana", "Lorena", "Lucia",
      "Luisa", "Luna", "Margarita", "Maria", "Mariana", "Marina", "Marta", "Mercedes", "Monica",
      "Natalia", "Noelia", "Olga", "Paloma", "Patricia", "Paula", "Pilar", "Raquel", "Renata",
      "Rocio", "Rosa", "Salma", "Sandra", "Sara", "Silvia", "Sofia", "Susana", "Teresa",
      "Valentina", "Valeria", "Vanesa", "Veronica", "Victoria", "Violeta", "Ximena", "Yolanda",
      "Zulema", "Abril", "Alma", "Amparo", "Belen", "Candela", "Celeste", "Consuelo", "Delfina",
      "Eloisa", "Esmeralda", "Florencia", "Guadalupe", "Josefina", "Lourdes", "Magdalena",
      "Milagros", "Miranda", "Nadia", "Ofelia", "Paz", "Reina", "Rosario", "Soledad", "Tatiana",
      "Trinidad", "Agustina", "Ariana", "Brisa", "Carlota", "Dominga", "Eugenia", "Faustina",
      "Genoveva", "Isidora", "Luz", "Marisol", "Nerea", "Romina", "Selena", "Zoraida"
    ],

    surname: [
      "Aguilar", "Alvarez", "Arias", "Benitez", "Blanco", "Bravo", "Caballero", "Campos", "Cano",
      "Cardenas", "Carrasco", "Castillo", "Castro", "Cervantes", "Cortes", "Cruz", "Delgado",
      "Diaz", "Dominguez", "Duarte", "Escobar", "Espinoza", "Estevez", "Fernandez", "Flores",
      "Fuentes", "Gallardo", "Garcia", "Garrido", "Gil", "Gomez", "Gonzalez", "Guerrero",
      "Gutierrez", "Herrera", "Ibarra", "Iglesias", "Jimenez", "Lara", "Leon", "Lopez", "Lozano",
      "Marin", "Marquez", "Martinez", "Medina", "Mendez", "Molina", "Montoya", "Morales", "Moreno",
      "Navarro", "Nunez", "Ortega", "Ortiz", "Paredes", "Pena", "Perez", "Prieto", "Ramirez",
      "Ramos", "Reyes", "Rios", "Rivera", "Robles", "Rodriguez", "Roman", "Romero", "Ruiz",
      "Salazar", "Sanchez", "Santana", "Santos", "Serrano", "Silva", "Solis", "Soto", "Suarez",
      "Torres", "Valdez", "Valencia", "Vargas", "Vasquez", "Vega", "Velasco", "Vera", "Vidal",
      "Zamora", "Acosta", "Beltran", "Calderon", "Carrillo", "Coronado", "Figueroa", "Gallego",
      "Lucero", "Maldonado", "Mora", "Olivares", "Palacios", "Pizarro", "Quintero", "Rosales",
      "Sepulveda", "Trevino", "Uribe", "Villalobos", "Zaragoza", "Amador", "Bautista", "Cedillo",
      "Del Toro", "Escamilla", "Fonseca", "Granados", "Macias", "Peralta", "Renteria",
      "Valenzuela", "Zepeda"
    ]
  },

  "mongolic": {
    label: "Mongolic",
    surnameFirst: true,

    male: [
      "Kublai", "Altan", "Amar", "Amgalan", "Ankhbayar", "Arslan", "Baatar", "Badamgarav",
      "Baldan", "Batbayar", "Batbold", "Batdorj", "Bat-Erdene", "Batjargal", "Batmunkh",
      "Battulga", "Bayar", "Bayarmagnai", "Bayarsaikhan", "Bilguun", "Bold", "Bolormaa", "Borkhuu",
      "Buyandelger", "Buyankhishig", "Chagnaadorj", "Chimeddorj", "Chinggis", "Chuluun",
      "Dashdorj", "Delger", "Demid", "Dorj", "Dorjpalam", "Dugar", "Enebish", "Enkhbat",
      "Enkhbayar", "Enkhbold", "Enkhjargal", "Enkhsaikhan", "Erdene", "Erdenebat", "Erdenechimeg",
      "Erdenetsetseg", "Ganbaatar", "Ganbold", "Ganchimeg", "Ganzorig", "Gombodorj", "Jadambaa",
      "Jargal", "Javkhlan", "Khatanbaatar", "Khishig", "Khurelbaatar", "Lhagva", "Lkhagva",
      "Luvsan", "Mendsaikhan", "Mijid", "Mongol", "Monkhbat", "Munkh", "Munkhbat", "Munkhbold",
      "Munkh-Erdene", "Munkhjargal", "Naranbaatar", "Narankhuu", "Nergui", "Nyam", "Nyamdorj",
      "Odgerel", "Odjargal", "Otgonbayar", "Purev", "Purevdorj", "Sainbayar", "Saruul", "Sodnom",
      "Sukhbaatar", "Temuulen", "Temur", "Temujin", "Togtokh", "Tseren", "Tserendorj", "Tsolmon",
      "Tumur", "Tumurbat", "Uuganbayar", "Yadamsuren", "Yesukhei", "Zolboo", "Zorig", "Zorigt",
      "Bilegt", "Khulan"
    ],

    female: [
      "Altantsetseg", "Altantuya", "Anudari", "Ariunaa", "Bayarmaa", "Bolormaa", "Bolortuya",
      "Buyankhishig", "Chimeg", "Delgertuya", "Dolgor", "Dolgormaa", "Enkhjargal", "Enkhmaa",
      "Erdenechimeg", "Ganbaatar", "Gerel", "Gerelmaa", "Khaliun", "Khishigjargal", "Khulan",
      "Mandakh", "Mendbayar", "Munkhtsetseg", "Namuun", "Narantsetseg", "Naranzul", "Narantuya",
      "Nergui", "Odonchimeg", "Odontsetseg", "Odval", "Oyuna", "Oyuunchimeg", "Oyuun-Erdene",
      "Purevjargal", "Sainjargal", "Saran", "Sarangerel", "Saruul", "Soyolmaa", "Temuulen",
      "Togtoh", "Tsetseg", "Tsolmon", "Tuul", "Tuya", "Uyanga", "Yanjmaa", "Yesui", "Zaya",
      "Zoljargal", "Altanchimeg", "Ankhtsetseg", "Ariuntsetseg", "Battsetseg", "Bayasgalan",
      "Boloroo", "Chuluuntsetseg", "Delgermaa", "Enkhzaya", "Erdenetuya", "Gantsetseg",
      "Gereltuya", "Khongorzul", "Micheedmaa", "Munkhzul", "Nomin", "Nomin-Erdene", "Odmaa",
      "Orkhon", "Otgontsetseg", "Purevtsetseg", "Sarnai", "Soyombo", "Tserenchimeg", "Tungalag",
      "Ujin", "Uranchimeg", "Yalguun", "Yesugen", "Zolzaya", "Ariunzul", "Bayartsetseg",
      "Bolorchimeg", "Delgerzul", "Enkhgerel", "Gerelchimeg", "Khuslen", "Munkhjin", "Nandia",
      "Oyunbileg", "Selenge", "Tsetsegee", "Uyangaa", "Yargui", "Zolzaya", "Anujin", "Khaliunaa"
    ],

    surname: [
      "Altankhuyag", "Amarsanaa", "Baatar", "Badarch", "Baldorj", "Bat", "Batbayar", "Batbold",
      "Bat-Erdene", "Batjargal", "Battulga", "Bayar", "Bayarsaikhan", "Bold", "Borkhuu",
      "Buyandelger", "Chimeddorj", "Chuluun", "Dash", "Dashdorj", "Demid", "Dorj", "Dorjsuren",
      "Dulam", "Enkhbat", "Enkhbayar", "Enkhbold", "Enkhjargal", "Erdene", "Erdenebat",
      "Ganbaatar", "Ganbold", "Ganzorig", "Gombo", "Gurragchaa", "Jadambaa", "Jargalsaikhan",
      "Khatanbaatar", "Khurelbaatar", "Lhagva", "Lkhagvasuren", "Luvsan", "Mendsaikhan", "Mijid",
      "Monkhbat", "Munkh", "Munkhbat", "Munkhbold", "Namsrai", "Naranbaatar", "Nergui", "Nyam",
      "Nyamdorj", "Odgerel", "Otgonbayar", "Purev", "Purevdorj", "Ragchaa", "Sainbayar", "Saruul",
      "Sodnom", "Sukh", "Sukhbaatar", "Temur", "Temuujin", "Togtokh", "Tseren", "Tserendorj",
      "Tumur", "Tumurbat", "Uuganbayar", "Yadamsuren", "Yesukhei", "Zolboo", "Zorig", "Zorigt",
      "Altangerel", "Amgalan", "Baasanjav", "Bayarmagnai", "Bilegt", "Chagnaadorj", "Davaadorj",
      "Enkhtuya", "Erdenesaikhan", "Ganpurev", "Khishigdorj", "Lkhamsuren", "Munkhsaikhan",
      "Narangerel", "Otgonsuren", "Sukhjargal", "Tserenbat", "Uurtsaikh", "Yondon", "Zorigtbaatar"
    ]
  },

  "persian-iranian": {
    label: "Persian / Iranian",
    surnameFirst: false,

    male: [
      "Adel", "Ahmad", "Ali", "Amir", "Arash", "Ardeshir", "Arman", "Arya", "Babak", "Bahram",
      "Bijan", "Cyrus", "Dara", "Dariush", "Davood", "Ebrahim", "Farhad", "Farid", "Farshad",
      "Fereydoun", "Habib", "Hamid", "Hasan", "Hassan", "Hooman", "Hossein", "Iman", "Iraj",
      "Jafar", "Jalal", "Jamshid", "Javad", "Kambiz", "Kamran", "Karim", "Kaveh", "Kazem",
      "Keyvan", "Khosrow", "Kourosh", "Majid", "Masoud", "Mehdi", "Mehrdad", "Milad", "Mohammad",
      "Mohsen", "Mostafa", "Nader", "Navid", "Nima", "Omid", "Parsa", "Payam", "Peyman", "Pouya",
      "Ramin", "Reza", "Rostam", "Saeed", "Salar", "Saman", "Shahin", "Shahram", "Shapur",
      "Siamak", "Soheil", "Soroush", "Taher", "Vahid", "Yahya", "Yashar", "Yousef", "Arvin",
      "Behzad", "Darab", "Esfandiar", "Farzan", "Hormoz", "Jamshed", "Kasra", "Maziar", "Mehran",
      "Navaz", "Parviz", "Pedram", "Rashid", "Shervin", "Siavash", "Teymour", "Vafa", "Yadollah",
      "Zand", "Afshin", "Bahman", "Daryoush", "Jahan", "Shahriar", "Ziya"
    ],

    female: [
      "Afsaneh", "Anahita", "Arezoo", "Ariana", "Asal", "Atena", "Azadeh", "Bahar", "Banoo",
      "Baran", "Darya", "Delaram", "Donya", "Elaheh", "Elham", "Farah", "Fariba", "Farnaz",
      "Fatemeh", "Fereshteh", "Forough", "Golnaz", "Hanieh", "Hasti", "Homa", "Katayoun", "Kiana",
      "Leila", "Lida", "Mahin", "Mahnaz", "Maliheh", "Maryam", "Mina", "Mitra", "Mozhgan", "Nadia",
      "Nahid", "Nasim", "Nazanin", "Neda", "Negar", "Negin", "Niloufar", "Pari", "Parisa", "Rana",
      "Roxana", "Sahar", "Samira", "Sara", "Setareh", "Shabnam", "Shahla", "Shirin", "Soraya",
      "Tahmineh", "Taraneh", "Vida", "Yalda", "Yasaman", "Zahra", "Ziba", "Armita", "Azar",
      "Bahareh", "Delnaz", "Faezeh", "Ghazal", "Hengameh", "Jaleh", "Kimia", "Laleh", "Mahsa",
      "Mandana", "Melika", "Nasrin", "Parvaneh", "Pegah", "Pouran", "Roya", "Saba", "Sanaz",
      "Shadi", "Simin", "Tahereh", "Tannaz", "Viana", "Yeganeh", "Zhaleh", "Afra", "Bita", "Dorna",
      "Golsa", "Minoo", "Roshanak", "Sepideh", "Zarrin"
    ],

    surname: [
      "Ahmadi", "Akbari", "Alizadeh", "Amini", "Ansari", "Ardalan", "Asadi", "Azimi", "Bahrami",
      "Bakhtiari", "Darvishi", "Davari", "Ebrahimi", "Eskandari", "Farahani", "Farhadi", "Fathi",
      "Ghaffari", "Ghasemi", "Golshani", "Haddadi", "Hosseini", "Jafari", "Jalili", "Karimi",
      "Kazemi", "Khalili", "Khanjani", "Khosravi", "Mahdavi", "Maleki", "Mazaheri", "Mirzaei",
      "Mohammadi", "Moradi", "Naderi", "Najafi", "Naseri", "Nazari", "Noori", "Pahlavi", "Parsa",
      "Rahimi", "Rajabi", "Ranjbar", "Rostami", "Sadeghi", "Saeedi", "Safari", "Salehi",
      "Shahbazi", "Shahidi", "Sharifi", "Soleimani", "Taheri", "Tavakoli", "Valizadeh", "Yazdani",
      "Zand", "Zarei", "Abbasi", "Amiri", "Bahadori", "Daryaei", "Esmaili", "Fallahi", "Ghorbani",
      "Hamidi", "Javadi", "Kamali", "Khademi", "Lotfi", "Mahmoudi", "Mansouri", "Niknam",
      "Peymani", "Qasemi", "Rouhani", "Saberi", "Shirazi", "Tajik", "Vaziri", "Yousefi", "Zakeri",
      "Afshari", "Behnam", "Darabi", "Faramarzi", "Goudarzi", "Kermani", "Mehrabi", "Pakzad",
      "Rafiei", "Shokri", "Torabi", "Vafaei", "Zarrabi", "Alinejad", "Dehghani", "Moeini"
    ]
  },

  "polynesian-pacific-islander": {
    label: "Polynesian / Pacific Islander",
    surnameFirst: false,

    male: [
      "Afa", "Ahohako", "Aisake", "Akamu", "Anaru", "Apelu", "Ariiki", "Atamu", "Benesi",
      "Brennan", "Dane", "Ehau", "Enoka", "Fetu", "Haku", "Hemi", "Ikaika", "Ioane", "Kahale",
      "Kainoa", "Kaleo", "Kalani", "Kamaka", "Kana", "Kanoa", "Keahi", "Keanu", "Keiki", "Kelepi",
      "Kimo", "Laki", "Langi", "Lono", "Makai", "Maleko", "Mana", "Manu", "Maui", "Moana",
      "Nainoa", "Nalani", "Noa", "Paora", "Peni", "Rangi", "Rawiri", "Samu", "Sione", "Tama",
      "Tamati", "Taniela", "Tane", "Taonga", "Teiki", "Tevita", "Tiare", "Tui", "Ulu", "Vai",
      "Viliami", "Wiremu", "Aiono", "Fane", "Haunui", "Iosefa", "Kahurangi", "Kawika", "Keola",
      "Koa", "Lopeti", "Mahina", "Makani", "Malu", "Nuku", "Pita", "Ropati", "Tau", "Tavita",
      "Toa", "Uaine", "Vaikai", "Aisaki", "Filo", "Hokulea", "Kahiau", "Kekoa", "Lauaki", "Matai",
      "Niko", "Pounamu", "Taito", "Teiki", "Toetu", "Uaina", "Vaetoru", "Waiari", "Alekesio",
      "Hokupa", "Kaimana", "Matariki", "Pita"
    ],

    female: [
      "Ailani", "Alaula", "Alisi", "Anahera", "Anuhea", "Aroha", "Atarangi", "Eseta", "Fetia",
      "Haunani", "Hina", "Hokulani", "Ina", "Iolana", "Kaia", "Kalena", "Kalisi", "Kamea", "Kanae",
      "Keala", "Keilani", "Kiana", "Lagi", "Lehua", "Liana", "Litia", "Luana", "Mahina", "Malia",
      "Manaia", "Marama", "Mele", "Moana", "Moerani", "Nalani", "Noelani", "Oliana", "Pania",
      "Raina", "Rangi", "Sina", "Tahia", "Talise", "Tamara", "Tania", "Tehani", "Teuila", "Tiare",
      "Vaihere", "Vailea", "Alofa", "Anela", "Elenoa", "Halia", "Hine", "Irihapeti", "Kahealani",
      "Kailani", "Kalolaine", "Kanoe", "Leilani", "Lilo", "Lokelani", "Meleana", "Moanikeala",
      "Nanea", "Nohea", "Orama", "Pele", "Roselani", "Sala", "Tala", "Teiva", "Terii", "Vaiana",
      "Ahe", "Emalia", "Hinemoa", "Iwalani", "Kaimana", "Kiele", "Lani", "Melei", "Naia",
      "Poehina", "Rupe", "Taiana", "Tehani", "Uilani", "Vaimalama", "Akeliela", "Hokulani",
      "Kawehi", "Malie", "Noeline", "Teresa", "Vaitea", "Waiola"
    ],

    surname: [
      "Aholelei", "Aiono", "Akamu", "Alaimoana", "Anitoni", "Apelu", "Falaniko", "Fane", "Fonua",
      "Haangana", "Hale", "Iosefa", "Kahele", "Kahale", "Kaimana", "Kailani", "Kaleo", "Kalili",
      "Kamaka", "Kanekoa", "Kapule", "Kealoha", "Keanu", "Kelekolio", "Koa", "Latu", "Leiataua",
      "Lopeti", "Mafi", "Mahina", "Makani", "Malietoa", "Manu", "Mahelona", "Matai", "Moana",
      "Naone", "Niumataiwalu", "Noa", "Paki", "Pelekai", "Poha", "Ropati", "Satele", "Savea",
      "Sione", "Tagaloa", "Taiapa", "Taito", "Takai", "Talamaivao", "Tamatoa", "Tapu", "Taufa",
      "Te Rangi", "Tevai", "Tikoisuva", "Toleafoa", "Tuiasosopo", "Uluave", "Vaetoru", "Vainuku",
      "Vea", "Viliamu", "Waiari", "Afeaki", "Fotu", "Haami", "Kahanamoku", "Kaihe", "Kalama",
      "Kauahi", "Langi", "Leota", "Maivia", "Mataele", "Naufahu", "Pule", "Sefulu", "Taumoepeau",
      "Te Ariki", "Tokotaha", "Tuigamala", "Va'a", "Whaitiri", "Alaula", "Fakahau", "Hokulea",
      "Kahukura", "Lilo", "Moetaua", "Ngarimu", "Puleleiite", "Rangihuna", "Teokotai",
      "Ueligitone", "Vaipulu"
    ]
  },

  "semitic-ethiopic": {
    label: "Semitic / Ethiopic",
    surnameFirst: false,

    male: [
      "Abay", "Abebe", "Abel", "Abraham", "Adane", "Admasu", "Aklilu", "Alemayehu", "Amare",
      "Amanuel", "Asfaw", "Assefa", "Awet", "Ayana", "Bekele", "Berhane", "Berhanu", "Binyam",
      "Dagmawi", "Dawit", "Demeke", "Dereje", "Elias", "Endalkachew", "Ephrem", "Ermias", "Eyob",
      "Fikru", "Fitsum", "Fisseha", "Gabre", "Gebre", "Gebremariam", "Getachew", "Girma", "Habte",
      "Haile", "Hailemariam", "Hailu", "Henok", "Kidane", "Kidus", "Kiros", "Mebratu", "Mekonnen",
      "Melaku", "Meron", "Mihret", "Mohammed", "Mulugeta", "Nahom", "Natnael", "Negasi", "Nigatu",
      "Robel", "Samuel", "Semere", "Seyoum", "Solomon", "Tadesse", "Tamirat", "Tamrat", "Tekle",
      "Temesgen", "Tesfahun", "Tesfaye", "Tewelde", "Tewodros", "Tilahun", "Welde", "Woldemariam",
      "Workneh", "Yared", "Yemane", "Yilma", "Yohannes", "Yonas", "Yosef", "Yussuf", "Zelalem",
      "Zerihun", "Abraha", "Atsbha", "Beraki", "Desta", "Ghebremeskel", "Hagos", "Isaias",
      "Kebede", "Negus", "Shiferaw", "Tsegaye", "Wassie", "Yitbarek", "Zenawi"
    ],

    female: [
      "Aster", "Abeba", "Alem", "Almaz", "Aster", "Awet", "Ayan", "Ayantu", "Birtukan", "Chaltu",
      "Dagmawit", "Eden", "Eleni", "Elsabet", "Emebet", "Eyerusalem", "Feven", "Fikirte", "Genet",
      "Haben", "Hadas", "Hanna", "Helen", "Hiwot", "Hodan", "Ilili", "Lemlem", "Liya", "Mahlet",
      "Marta", "Medina", "Mekdes", "Meron", "Meseret", "Mimi", "Muna", "Nardos", "Netsanet",
      "Rahel", "Rediet", "Ruth", "Saba", "Samrawit", "Sara", "Selam", "Selamawit", "Senait",
      "Sofia", "Tigist", "Tsedenia", "Tsion", "Winta", "Worknesh", "Yasmin", "Yodit", "Zahara",
      "Zeinab", "Zemen", "Abrehet", "Askale", "Blen", "Desta", "Eyerus", "Fikir", "Haimanot",
      "Hawi", "Kidist", "Lulit", "Mahder", "Meklit", "Mulu", "Nafkot", "Roman", "Saron", "Seble",
      "Sena", "Sosina", "Tewabech", "Tiruwork", "Wegayehu", "Yordanos", "Zebiba", "Aida",
      "Buzayehu", "Dinknesh", "Etsegenet", "Frehiwot", "Genna", "Habiba", "Kalkidan", "Mebrhit",
      "Rakeb", "Sahle", "Tsega", "Zufan", "Asteray", "Belesh", "Sefanit"
    ],

    surname: [
      "Abebe", "Abraham", "Adane", "Alemayehu", "Asfaw", "Assefa", "Awoke", "Bekele", "Berhane",
      "Berhe", "Berihu", "Beyene", "Demissie", "Derebe", "Desta", "Ephrem", "Eshetu", "Fekadu",
      "Fisseha", "Gebre", "Gebremariam", "Gebreselassie", "Getachew", "Ghebreyesus", "Girma",
      "Haile", "Hailemariam", "Hailu", "Hassen", "Ibrahim", "Kidane", "Kiros", "Mebratu",
      "Mekonnen", "Melaku", "Mengesha", "Mohammed", "Molla", "Negash", "Nigussie", "Reda", "Sahle",
      "Samson", "Semere", "Seyoum", "Shiferaw", "Solomon", "Tadesse", "Tamirat", "Tamru", "Tekle",
      "Temesgen", "Tesfaye", "Tewelde", "Tewodros", "Tilahun", "Welde", "Woldemariam", "Worku",
      "Yared", "Yilma", "Yohannes", "Yosef", "Zelalem", "Zerihun", "Abraha", "Aregawi", "Asmelash",
      "Beraki", "Debebe", "Fikremariam", "Gebru", "Ghebremichael", "Hagos", "Kebede", "Kidus",
      "Mamo", "Mebrahtu", "Negasi", "Reta", "Teshome", "Tesfamariam", "Tesfamichael",
      "Weldeslassie", "Yemane", "Aklilu", "Bereded", "Dawit", "Endale", "Girmay", "Habte", "Kassa",
      "Meklit", "Negusse", "Tsegaye", "Wassie", "Yitbarek", "Zenebe"
    ]
  },

  "southeast-asian": {
    label: "Southeast Asian",
    surnameFirst: false,

    male: [
      "Adi", "Agung", "Akarapong", "Ananda", "Anh", "Arif", "Bambang", "Bao", "Bayani", "Binh",
      "Boonchai", "Budi", "Chai", "Chaiya", "Chandra", "Dara", "Dat", "Dewa", "Dimas", "Dinh",
      "Eko", "Fahmi", "Guntur", "Hai", "Hakim", "Han", "Hendra", "Hiep", "Htun", "Indra", "Irawan",
      "Jaya", "Joko", "Kai", "Kham", "Kiet", "Kosal", "Krisna", "Le", "Long", "Made", "Mahendra",
      "Manop", "Minh", "Mulyono", "Myint", "Nanda", "Narong", "Nguyen", "Niran", "Pandu", "Phan",
      "Phirun", "Pradit", "Putra", "Quang", "Rachmat", "Raden", "Rahman", "Rizal", "Sakda",
      "Samnang", "Santoso", "Sarun", "Setiawan", "Somchai", "Somsak", "Son", "Sothea", "Sovann",
      "Suharto", "Sukarno", "Surya", "Sutrisno", "Tan", "Taufik", "Teera", "Thanh", "Thura", "Tri",
      "Truong", "Utama", "Van", "Veasna", "Vichea", "Vinh", "Virak", "Wayan", "Widodo", "Wira",
      "Wisnu", "Yanto", "Yudha", "Yusuf", "Zainal", "Aung", "Chea", "Kosal", "Lakshman", "Preecha",
      "Than", "Zaw"
    ],

    female: [
      "Aisyah", "Ananda", "Anh", "Araya", "Ayu", "Bao", "Bopha", "Cam", "Chanda", "Chariya",
      "Dara", "Davika", "Dewi", "Dian", "Duyen", "Farah", "Giang", "Hang", "Hoa", "Huong", "Indah",
      "Intan", "Jariya", "Kanya", "Khem", "Kim", "Lan", "Lea", "Linh", "Mai", "Mala", "May", "Mei",
      "Mina", "My", "Namfon", "Ngoc", "Nila", "Nisa", "Nurul", "Phuong", "Pim", "Pisey", "Ploy",
      "Putri", "Quyen", "Rani", "Ratana", "Rina", "Ros", "Sakina", "Samnang", "Sari", "Socheata",
      "Sokha", "Sokunthea", "Somaly", "Sophea", "Sovannary", "Sri", "Suda", "Sukanya", "Suriya",
      "Thida", "Thiri", "Thu", "Trang", "Utari", "Vanida", "Veena", "Vicheka", "Vina", "Wati",
      "Widya", "Yani", "Yen", "Ying", "Yuni", "Zahra", "Apsara", "Bulan", "Chantrea", "Dao",
      "Eang", "Hnin", "Jintana", "Kalyani", "Laksmi", "Maly", "Nary", "Onn", "Pailin", "Reaksmey",
      "Savoeun", "Srey", "Thavy", "Vy", "Wimon", "Yuwadee"
    ],

    surname: [
      "Abdullah", "Adi", "Aung", "Boonmee", "Chan", "Chandra", "Chea", "Chen", "Chhay", "Chhim",
      "Cuong", "Dam", "Dao", "Dewantara", "Dharma", "Dinh", "Djaja", "Duong", "Goh", "Gunawan",
      "Hamzah", "Heng", "Ho", "Huang", "Hun", "Hussein", "Indrawan", "Iskandar", "Jaya", "Kang",
      "Khan", "Khieu", "Kosal", "Kusuma", "Lam", "Le", "Lim", "Loh", "Mahmud", "Manoban", "Minh",
      "Myint", "Ngo", "Nguyen", "Ningrat", "Noor", "Ong", "Phan", "Phong", "Prasetyo", "Putra",
      "Rahman", "Ramos", "Ratanak", "Santoso", "Setiawan", "Sim", "Singh", "Sisowath", "Soe",
      "Som", "Sok", "Sri", "Suharto", "Sukarno", "Sulistyo", "Surya", "Susanto", "Tan", "Tanaka",
      "Tay", "Teo", "Than", "Thavorn", "Tran", "Trinh", "Truong", "Utomo", "Vu", "Wibowo",
      "Widjaja", "Wijaya", "Win", "Wong", "Yap", "Yeo", "Yong", "Yusof", "Zulkifli", "Chau",
      "Limsuwan", "Norasingh", "Phouthavong", "Seneviratne", "Viriyakul", "Xiong", "Yaphet", "Zaw"
    ]
  },

  "southern-african": {
    label: "Southern African",
    surnameFirst: false,

    male: [
      "Abel", "Andile", "Anele", "Ayanda", "Bafana", "Bhekizizwe", "Blessing", "Bongani", "Brian",
      "Cedric", "Clive", "Collins", "Dumisani", "Elvis", "Emmanuel", "Enock", "Ernest", "Fikile",
      "Gift", "Godfrey", "Goodwill", "Hamilton", "Isaac", "Jabulani", "Jacob", "Johannes",
      "Joseph", "Justice", "Kagiso", "Katlego", "Kennedy", "Knowledge", "Kudakwashe", "Lethabo",
      "Lindani", "Lungelo", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mandla",
      "Mandla", "Mandla", "Mandla", "Mandla", "Mandla", "Mpho", "Mzamo", "Nathi", "Nkosi",
      "Nkululeko", "Ntokozo", "Percy", "Pule", "Sabelo", "Sibusiso", "Sipho", "Solomon", "Stanley",
      "Tafadzwa", "Thabo", "Themba", "Tinotenda", "Tonderai", "Trevor", "Vusi", "Welcome",
      "Wiseman"
    ],

    female: [
      "Amanda", "Andiswa", "Anesu", "Ayanda", "Ayodele", "Beauty", "Bongiwe", "Busisiwe",
      "Charity", "Chiedza", "Constance", "Dineo", "Duduzile", "Faith", "Fortune", "Gugulethu",
      "Hlengiwe", "Hope", "Immaculate", "Joyce", "Kagiso", "Koketso", "Lerato", "Lindiwe",
      "Lungile", "Mbalenhle", "Memory", "Mpho", "Naledi", "Nandi", "Nandipha", "Natasha", "Nomsa",
      "Nomvula", "Nonhlanhla", "Ntombi", "Nyasha", "Patience", "Precious", "Pretty", "Princess",
      "Puleng", "Rendani", "Rutendo", "Sibongile", "Simphiwe", "Siphesihle", "Stella", "Tamaryn",
      "Tariro", "Thandeka", "Thandiwe", "Thembi", "Tinashen", "Tshegofatso", "Tsitsi", "Vuyiswa",
      "Winnie", "Yolanda", "Zanele", "Zinhle", "Aphiwe", "Boitumelo", "Charmaine", "Dakalo",
      "Eunice", "Fikile", "Gcinile", "Kefilwe", "Khensani", "Lebogang", "Loyiso", "Makanaka",
      "Mapaseka", "Matshidiso", "Neo", "Nokuthula", "Palesa", "Refilwe", "Rumbidzai", "Sanelisiwe",
      "Sindisiwe", "Tendai", "Thobile", "Tumisang", "Velemseni", "Yvonne", "Zodwa", "Anele",
      "Buhle", "Kholofelo", "Lethabo", "Mpumelelo", "Nokwazi", "Onthatile", "Rethabile",
      "Sinenhlanhla", "Zandile"
    ],

    surname: [
      "Baloyi", "Banda", "Botha", "Chikowore", "Dhlamini", "Dube", "Gumede", "Hadebe",
      "Hlatshwayo", "Jacobs", "Khumalo", "Khoza", "Koen", "Kruger", "Langa", "Mabena", "Mabika",
      "Mabaso", "Madonsela", "Magagula", "Mahachi", "Makgoba", "Makhubu", "Makwenda", "Malinga",
      "Mambo", "Mangena", "Maseko", "Masuku", "Mathebula", "Matlala", "Matsheka", "Mazibuko",
      "Mbatha", "Mbeki", "Mhlongo", "Mkhize", "Mlambo", "Mokoena", "Molefe", "Moloi", "Moyo",
      "Mpofu", "Mthembu", "Mubaiwa", "Mugabe", "Mukwena", "Munyai", "Mupfumi", "Murerwa", "Musa",
      "Mutasa", "Ncube", "Ndlovu", "Nene", "Ngcobo", "Ngubane", "Nkosi", "Nkomo", "Nzimande",
      "Phiri", "Pienaar", "Pretorius", "Sibanda", "Sibiya", "Sithole", "Skhosana", "Tau", "Tembo",
      "Tshabalala", "van der Merwe", "van Wyk", "Vilakazi", "Visser", "Xitsonga", "Zikalala",
      "Zulu", "Apleni", "Bhengu", "Chirwa", "Dlamini", "Gasa", "Jele", "Kekana", "Ledwaba",
      "Madiba", "Mahlangu", "Masemola", "Matshego", "Mthimkhulu", "Nare", "Nxumalo", "Radebe",
      "Shongwe", "Tshivhase", "Xitsonga", "Zuma"
    ]
  },

  "tibetan-himalayan": {
    label: "Tibetan / Himalayan",
    surnameFirst: false,

    male: [
      "Akash", "Tenzen", "Amrit", "Anil", "Arun", "Ashok", "Bir", "Bodhi", "Chhewang", "Chime",
      "Choden", "Dawa", "Dechen", "Dorje", "Galen", "Ganesh", "Gautam", "Gelek", "Gopal", "Hari",
      "Indra", "Jampa", "Jigme", "Kalsang", "Karma", "Kiran", "Lhakpa", "Lobsang", "Mingma",
      "Namgyal", "Nanda", "Nawang", "Ngawang", "Norbu", "Padma", "Pasang", "Pema", "Phurba",
      "Puran", "Rabin", "Rajan", "Rinchen", "Sangay", "Sherab", "Sonam", "Tandin", "Tashi", "Tek",
      "Tempa", "Tenzin", "Thubten", "Tsering", "Ugyen", "Wangchuk", "Yeshe", "Yonten", "Yubaraj",
      "Zopa", "Anup", "Bhim", "Chhiring", "Damber", "Deki", "Gyatso", "Harihar", "Kunga", "Lakpa",
      "Mani", "Nima", "Palden", "Pem", "Rabten", "Senge", "Tenzing", "Thinley", "Tilak",
      "Tshering", "Wangdi", "Yonten", "Aaditya", "Bhupen", "Chandra", "Dinesh", "Gombo", "Kezang",
      "Lhendup", "Norden", "Paldor", "Ramesh", "Shiva", "Tobgay", "Uttam", "Yeshi", "Zangpo",
      "Chogyal", "Gyurmey", "Lokesh", "Tseten"
    ],

    female: [
      "Ama", "Anju", "Asha", "Bhawana", "Bhumika", "Chimi", "Choden", "Deki", "Dechen", "Dolma",
      "Gita", "Jamuna", "Kalsang", "Karma", "Kezang", "Kunga", "Lhamo", "Lhazin", "Mala", "Maya",
      "Mingma", "Namdol", "Nawang", "Ngawang", "Nima", "Paldon", "Pema", "Pemala", "Rinzin",
      "Sangmo", "Sita", "Sonam", "Tandin", "Tara", "Thinley", "Tshering", "Wangmo", "Yangchen",
      "Yangki", "Yeshi", "Yudon", "Zangmo", "Anisha", "Bina", "Chhime", "Dawa", "Devi", "Dolkar",
      "Ganga", "Hira", "Indira", "Jyoti", "Kamala", "Karma Deki", "Leki", "Manju", "Niruta",
      "Paldol", "Passang", "Purnima", "Ranjita", "Sangay", "Tenzin", "Ugyen", "Yangzom", "Yeshi",
      "Aama", "Bishnu Maya", "Choki", "Dilmaya", "Gyalmo", "Karma Lhamo", "Laxmi", "Mukti",
      "Norzin", "Pema Choden", "Rinchen", "Sabitri", "Tashi Dolma", "Tsering", "Wangdi", "Yanki",
      "Zomkyi", "Apsara", "Bhawani", "Choying", "Doma", "Gyaltsen", "Kinzang", "Lham",
      "Nawang Dolma", "Palki", "Seldon", "Tenzin Dolma", "Yangdol"
    ],

    surname: [
      "Bhattarai", "Bista", "Chhetri", "Dorje", "Ghale", "Gurung", "Karki", "Khadka", "Lama",
      "Lepcha", "Magar", "Maharjan", "Moktan", "Namgyal", "Nembang", "Ngodup", "Norbu", "Poudel",
      "Rai", "Rana", "Sherpa", "Shrestha", "Subba", "Tamang", "Thapa", "Tshering", "Wangchuk",
      "Yonzon", "Acharya", "Basnet", "Bhujel", "Chaulagain", "Dong", "Gautam", "Ghising", "Khadgi",
      "Lhendup", "Limbu", "Manandhar", "Moktan", "Niroula", "Oli", "Pariyar", "Pradhan", "Rokaya",
      "Rumba", "Sapkota", "Sarki", "Tiwari", "Yonjan", "Zimba", "Adhikari", "Bajracharya",
      "Chettri", "Dahal", "Ghaley", "Khadgi", "Lohani", "Maharjan", "Niraula", "Palden", "Rimal",
      "Sangpo", "Tandukar", "Tsering", "Upreti", "Yolmo", "Zangpo", "Aryal", "Bomzan", "Choden",
      "Dhungel", "Gyatso", "Karmacharya", "Lhendup", "Malla", "Ngawang", "Pangeni", "Rinchen",
      "Sherchan", "Thing", "Wagle", "Yogi", "Zimba", "Basyal", "Dongol", "Kunzang", "Luitel",
      "Nyima", "Phunjok", "Rokaya", "Tamang", "Tobgay", "Wangdi", "Yonten", "Zopa", "Guragain",
      "Moktan", "Tseten"
    ]
  },

  "turkic-central-asian": {
    label: "Turkic / Central Asian",
    surnameFirst: false,

    male: [
      "Aidar", "Akhmet", "Alim", "Altan", "Amir", "Arman", "Arslan", "Askar", "Atai", "Aydin",
      "Azamat", "Bakhtiyar", "Barys", "Batyr", "Bekzat", "Bektur", "Bolat", "Chingiz", "Daniyar",
      "Dias", "Eldar", "Elmir", "Emir", "Erbol", "Erdem", "Erkin", "Farid", "Ilyas", "Iskander",
      "Jandar", "Jasur", "Kairat", "Kanat", "Karim", "Kuat", "Mansur", "Marat", "Mukhtar", "Murad",
      "Nurbek", "Nurbol", "Nurlan", "Omir", "Orhan", "Ruslan", "Sanzhar", "Serik", "Shamil",
      "Sultan", "Talat", "Talgat", "Temir", "Temirlan", "Timur", "Tolegen", "Tural", "Ulan",
      "Ulugbek", "Umar", "Yermek", "Yerzhan", "Yusup", "Zakir", "Zhanibek", "Adilet", "Alisher",
      "Bahtiyar", "Dastan", "Ilham", "Kanybek", "Miras", "Nursultan", "Rashid", "Samat", "Toktar",
      "Tursun", "Yuldash", "Zhandos", "Aibek", "Beknur", "Dulat", "Khalil", "Murat", "Niyaz",
      "Oljas", "Rinat", "Sabir", "Tamerlan", "Usub", "Yerlan", "Zholdas", "Anvar", "Bakhyt",
      "Ernar", "Kadyr", "Tulpar"
    ],

    female: [
      "Aigul", "Ainur", "Aizada", "Akerke", "Aliya", "Altynai", "Amina", "Anara", "Aruzhan",
      "Asel", "Aygun", "Aysel", "Ayzhan", "Balzhan", "Dilara", "Dinara", "Elmira", "Farida",
      "Gulbahar", "Gulmira", "Gulnara", "Indira", "Kamila", "Karina", "Karlygash", "Leila",
      "Madina", "Malika", "Mariam", "Meerim", "Moldir", "Nargiza", "Nazgul", "Nazira", "Nurgul",
      "Raikhan", "Rano", "Sabina", "Saltanat", "Samal", "Sholpan", "Sultanat", "Tamara",
      "Tansholpan", "Uldana", "Yulduz", "Zamira", "Zarina", "Zere", "Aijan", "Amina", "Bibigul",
      "Cholpon", "Dana", "Dilnoza", "Gaukhar", "Gulzada", "Kumush", "Lazzat", "Mahira", "Nazym",
      "Perizat", "Roza", "Saule", "Shahnoza", "Shirin", "Tomiris", "Yulduzoy", "Zhanar", "Ademi",
      "Akerke", "Bayan", "Dana", "Feruza", "Gulchehra", "Khadisha", "Mavluda", "Nilufer",
      "Ravshana", "Shahzoda", "Tolkunay", "Umida", "Yulduz", "Zuhra", "Aisulu", "Baktygul",
      "Dilfuza", "Gulzira", "Kanykei", "Madinabonu", "Nazik", "Raushan", "Sholpana", "Togzhan",
      "Yulduza", "Zhibek"
    ],

    surname: [
      "Abdullayev", "Akhmetov", "Alimuhamedov", "Amanov", "Arslanov", "Askarov", "Atayev",
      "Aytmatov", "Azimov", "Babayev", "Bakhtin", "Beketov", "Bekturov", "Berdimuhamedov",
      "Bolatov", "Charyyev", "Daniyarov", "Dzhuraev", "Ermekov", "Gaynullin", "Guliyev",
      "Ibragimov", "Iskakov", "Ismailov", "Joldasov", "Karimov", "Kurbanov", "Kydyrbayev",
      "Mambetov", "Mansurov", "Muratov", "Nazarbayev", "Niyazov", "Nurmagomedov", "Nurpeisov",
      "Orazov", "Osmonov", "Ospanov", "Rakhimov", "Rasulov", "Rustamov", "Sadykov", "Saparov",
      "Seidov", "Serikbayev", "Sharipov", "Suleimenov", "Tazhbayev", "Temirov", "Toktogulov",
      "Tulegenov", "Tursunov", "Umarov", "Usenov", "Valiyev", "Yakubov", "Yerzhanov", "Yusupov",
      "Zhaksylykov", "Zholdasov", "Aitбаев", "Altynbekov", "Batyrkhanov", "Dauletov", "Erkinov",
      "Kenzhebayev", "Myrzabayev", "Nurbayev", "Omarov", "Sultanov", "Toktarov", "Zhaparov",
      "Akhunov", "Bektashev", "Dzhumabekov", "Imanov", "Kariyev", "Myrzakulov", "Ryskulov",
      "Sabitov", "Toichiev", "Uulu", "Yuldashev", "Zhumanov", "Abilkhanov", "Baisalov", "Dulatov",
      "Kenzhin", "Mukashev", "Rakhmatullin", "Tulegen", "Utegenov", "Yessimov", "Zhanuzakov"
    ]
  },

  "west-african": {
    label: "West African",
    surnameFirst: false,

    male: [
      "Abdoulaye", "Aboubacar", "Adama", "Ahmed", "Amadou", "Ayo", "Babacar", "Bakari", "Boubacar",
      "Cheikh", "Chinedu", "Daouda", "Diallo", "Dogo", "Emeka", "Femi", "Habib", "Ibrahim",
      "Idrissa", "Issa", "Kader", "Kofi", "Kwabena", "Kwame", "Lamine", "Lansana", "Mamadou",
      "Moussa", "Naby", "Nana", "Ndiaye", "Obinna", "Ousmane", "Sadio", "Salif", "Samba", "Sekou",
      "Souleymane", "Tijan", "Toumani", "Yao", "Youssouf", "Abiola", "Adekunle", "Adewale",
      "Afolabi", "Ayodele", "Babatunde", "Chima", "Chinonso", "Ekene", "Enoch", "Folami",
      "Ifeanyi", "Kehinde", "Kojo", "Kwaku", "Mensah", "Nnamdi", "Olumide", "Oluwaseun", "Osei",
      "Sani", "Taiwo", "Temidayo", "Tunde", "Yakubu", "Yaw", "Yemi", "Yusuf", "Zuberi", "Abdoul",
      "Blaise", "Demba", "Ebrima", "Gaston", "Kassim", "Lukman", "Mory", "Nuhu", "Pape", "Rashidi",
      "Seydou", "Tidiane", "Umaru", "Wale", "Yaro", "Zidane", "Amani", "Boubou", "Cheick",
      "Djibril", "Fadel", "Harouna", "Issouf", "Kabore", "Malick", "Nfamara"
    ],

    female: [
      "Abena", "Ada", "Adama", "Afi", "Aicha", "Aissatou", "Ama", "Aminata", "Amina", "Anaba",
      "Aya", "Ayana", "Binta", "Coumba", "Deka", "Efe", "Fatimata", "Fatou", "Habi", "Hadiza",
      "Halima", "Hawa", "Ifeoma", "Imani", "Kadija", "Kadiatou", "Kehinde", "Khadija", "Kokou",
      "Kumba", "Mariama", "Mariam", "Mawa", "Nabou", "Nafissatou", "Nana", "Ngozi", "Nneka",
      "Olamide", "Oluwakemi", "Ramata", "Rokia", "Safiya", "Salimata", "Saran", "Seynabou", "Titi",
      "Yaa", "Yemi", "Zainab", "Abimbola", "Adesuwa", "Aisha", "Akosua", "Anuli", "Araba",
      "Ayisat", "Bolanle", "Chioma", "Djeneba", "Efua", "Esi", "Folake", "Habiba", "Idara", "Kemi",
      "Maimouna", "Mireille", "Moriam", "Naomi", "Nimatou", "Omolara", "Oyin", "Ramatoulaye",
      "Sade", "Sira", "Taiwo", "Temitope", "Tinuke", "Yewande", "Zara", "Abeni", "Bisi",
      "Chiamaka", "Diarra", "Fanta", "Kande", "Mame", "Nafi", "Ogechi", "Ramatu", "Sokhna",
      "Tounkara", "Yacine", "Zeynab", "Aminou", "Bineta", "Fadima", "Korka"
    ],

    surname: [
      "Abiola", "Acheampong", "Adebayo", "Adjaye", "Agyei", "Akanbi", "Akande", "Bah", "Balde",
      "Bangura", "Barry", "Bayo", "Camara", "Ceesay", "Conteh", "Coulibaly", "Danso", "Diallo",
      "Diarra", "Dramani", "Fofana", "Gueye", "Jallow", "Kamara", "Kanoute", "Keita", "Konate",
      "Koroma", "Koulibaly", "Lawal", "Mane", "Mensah", "Mohammed", "Musa", "Ndiaye", "Nkrumah",
      "Nwosu", "Obi", "Okafor", "Osei", "Owusu", "Sacko", "Sallah", "Sane", "Sanogo", "Sarr",
      "Sesay", "Sissoko", "Soumah", "Sylla", "Tamba", "Toure", "Traore", "Yakubu", "Yeboah",
      "Abubakar", "Adeyemi", "Afolayan", "Balogun", "Chukwu", "Diala", "Ekong", "Fadiga",
      "Gbadebo", "Issoufou", "Jatta", "Kabba", "Kone", "Mendy", "Ndiour", "Nwachukwu", "Odinga",
      "Okoro", "Oladipo", "Olowu", "Onyango", "Sow", "Tamboura", "Tapsoba", "Tembo", "Tidjani",
      "Toungara", "Wade", "Yansane", "Yaro", "Zongo", "Anane", "Bamba", "Doumbia", "Faye",
      "Gassama", "Kouyate", "Lamine", "Maiga", "Ouattara", "Sawadogo", "Sidibe", "Tounkara",
      "Yattara"
    ]
  },

  "western-northern-european": {
    label: "Western / Northern European",
    surnameFirst: false,

    male: [
      "Adam", "Adrian", "Albert", "Alexander", "Alfred", "Anders", "Andrew", "Anthony", "Arthur",
      "Benjamin", "Bernard", "Brandon", "Brian", "Caleb", "Carl", "Charles", "Christian",
      "Christopher", "Colin", "Connor", "Daniel", "David", "Dominic", "Edward", "Elias", "Elijah",
      "Eric", "Ethan", "Felix", "Finn", "Francis", "Frederick", "Gabriel", "George", "Graham",
      "Grant", "Gregory", "Harold", "Harry", "Henry", "Hugh", "Ian", "Isaac", "Jack", "Jacob",
      "James", "Jason", "Jeremy", "Joel", "John", "Jonathan", "Joseph", "Julian", "Kevin", "Lars",
      "Leo", "Leon", "Lewis", "Liam", "Logan", "Louis", "Lucas", "Luke", "Marcus", "Martin",
      "Matthew", "Maxwell", "Michael", "Nathan", "Nicholas", "Noah", "Oliver", "Oscar", "Owen",
      "Patrick", "Paul", "Peter", "Philip", "Raymond", "Richard", "Robert", "Ryan", "Samuel",
      "Sebastian", "Simon", "Stephen", "Theodore", "Thomas", "Timothy", "Tristan", "Victor",
      "Vincent", "Walter", "William", "Zachary", "Aidan", "Brett", "Declan", "Rhys"
    ],

    female: [
      "Abigail", "Alice", "Amanda", "Amelia", "Anna", "Audrey", "Beatrice", "Bethany", "Bridget",
      "Camille", "Caroline", "Catherine", "Charlotte", "Chloe", "Claire", "Clara", "Danielle",
      "Diana", "Eleanor", "Elena", "Elisa", "Elizabeth", "Ella", "Emily", "Emma", "Erica", "Eva",
      "Evelyn", "Felicity", "Florence", "Francesca", "Gabrielle", "Georgia", "Grace", "Hannah",
      "Harriet", "Hazel", "Heather", "Helena", "Holly", "Imogen", "Irene", "Isabel", "Isabella",
      "Jacqueline", "Jane", "Jasmine", "Jennifer", "Jessica", "Joanna", "Josephine", "Julia",
      "Juliette", "Karen", "Katherine", "Laura", "Lauren", "Lillian", "Lily", "Lucy", "Madeline",
      "Margaret", "Maria", "Marianne", "Martha", "Mary", "Matilda", "Megan", "Natalie", "Nicole",
      "Nora", "Olivia", "Patricia", "Penelope", "Rachel", "Rebecca", "Rose", "Rosalie", "Samantha",
      "Sarah", "Scarlett", "Sophia", "Sophie", "Stella", "Susan", "Sylvia", "Teresa", "Valerie",
      "Vanessa", "Victoria", "Violet", "Vivian", "Wendy", "Zoe", "Alicia", "Cecilia", "Elaine",
      "Freya", "Louise"
    ],

    surname: [
      "Anderson", "Armstrong", "Atkinson", "Baker", "Barnes", "Bell", "Bennett", "Black",
      "Bradley", "Brooks", "Brown", "Butler", "Campbell", "Carter", "Chapman", "Clark", "Coleman",
      "Collins", "Cook", "Cooper", "Cox", "Cunningham", "Davies", "Davis", "Dawson", "Edwards",
      "Ellis", "Evans", "Fisher", "Fletcher", "Ford", "Foster", "Fox", "Fraser", "Gibson",
      "Graham", "Grant", "Gray", "Green", "Griffin", "Hall", "Hamilton", "Harris", "Harrison",
      "Hayes", "Henderson", "Hill", "Holmes", "Howard", "Hughes", "Hunter", "Jackson", "James",
      "Jenkins", "Johnson", "Jones", "Kelly", "Kennedy", "King", "Knight", "Lewis", "Lloyd",
      "Marshall", "Martin", "Mason", "Miller", "Mitchell", "Moore", "Morgan", "Morris", "Murphy",
      "Murray", "Nelson", "Nichols", "Parker", "Phillips", "Powell", "Price", "Reed", "Reynolds",
      "Richardson", "Roberts", "Robinson", "Ross", "Scott", "Shaw", "Simpson", "Smith", "Stewart",
      "Taylor", "Thompson", "Turner", "Walker", "Ward", "Watson", "White", "Williams", "Wilson",
      "Wright", "Young"
    ]
  },

  "wildcard": {
    label: "Wildcard",
    surnameFirst: false,

    male: [
      "Grim", "Grymm", "Khan", "Duke", "Zephyr", "Rearden", "Idris", "Caius", "Theron", "Oberon",
      "Lysander", "Isidor", "Callum", "Evander", "Caspian", "Aki", "Asbjorn", "Asgeirr", "Asmundr",
      "Audunn", "Baggi", "Bardr", "Bersi", "Bjarki", "Bjorn", "Brandr", "Bragi", "Dagfinnr",
      "Danr", "Egil", "Eilifr", "Eindridi", "Eirikr", "Erlingr", "Eyjolfr", "Falki", "Fenrir",
      "Finnr", "Floki", "Freysteinn", "Fridgeirr", "Gauti", "Geirmundr", "Geirr", "Gisli", "Gnupr",
      "Grimr", "Gunnarr", "Gudbrandr", "Gudmundr", "Hallbjorn", "Hallfredr", "Hallr", "Halldorr",
      "Haraldr", "Hakon", "Halfdan", "Helgi", "Herjolfr", "Hjalmarr", "Hjorleifr", "Hrafn",
      "Hrolfr", "Ivarr", "Jarl", "Josteinn", "Ketill", "Kjartan", "Knutr", "Kolbeinn", "Leifr",
      "Magnus", "Njall", "Oddr", "Olafr", "Ormr", "Ragnarr", "Raudr", "Sigfuss", "Sigmundr",
      "Sigtryggr", "Sigurdr", "Skeggi", "Skuli", "Snorri", "Solvi", "Steinarr", "Styrbjorn",
      "Saemundr", "Thorsteinn", "Thorkell", "Tryggvi", "Ubbi", "Ulfarr", "Ulfr", "Valbrandr",
      "Valgardr", "Vebjorn", "Vermundr", "Vigfuss", "Yngvarr", "Custer", "Alduin", "Ancalagon",
      "Arcturus", "Ash", "Atreides", "Balthazar", "Beowulf", "Bismarck", "Blade", "Borealis",
      "Caesar", "Cassian", "Cato", "Cobalt", "Conan", "Corvus", "Cyrus", "Dante", "Darwin",
      "Da Vinci", "Drax", "Drake", "Echo", "Edison", "Elric", "Ender", "Fafnir", "Falcon",
      "Fenrir", "Feynman", "Flint", "Galileo", "Gandalf", "Mordenkainan", "Arthur", "Gawain",
      "Gideon", "Griffin", "Hadrian", "Hannibal", "Hawking", "Helios", "Horus", "Icarus", "Indigo",
      "Isaac", "Jareth", "Jove", "Julius", "Kael", "Khan", "Korben", "Lancelot", "Loki", "Lucius",
      "Magnus", "Maverick", "Merlin", "Morpheus", "Nebula", "Neo", "Newton", "Nimbus", "Nomad",
      "Nyx", "Oberon", "Odysseus", "Onyx", "Orion", "Osiris", "Peregrine", "Plato", "Quasar",
      "Raiden", "Ragnar", "Remus", "Riker", "Ripley", "Romulus", "Rune", "Sagan", "Shadow",
      "Sherlock", "Sigurd", "Sol", "Spartacus", "Storm", "Talos", "Tesla", "Thane", "Thorin",
      "Titan", "Tyr", "Ulric", "Valerian", "Vega", "Vulcan", "Warden", "Wolf", "Zodiac", "Hastur",
      "Hadrian", "Ashurbanipal", "Nebuchadnezzar", "Gilgamesh", "Sargon", "Naram Sin", "Hammurabi",
      "Shulgi", "Tiglath", "Enmerkar", "Utnapishtim", "Amenhotep", "Akhenaten", "Tutankhamun",
      "Ramses", "Thutmose", "Seti", "Khufu", "Khafre", "Menes", "Imhotep", "Cyrus", "Darius",
      "Xerxes", "Artaxerxes", "Ardashir", "Khosrow", "Mithridates", "Orodes", "Spitamenes",
      "Cambyses", "Chandragupta", "Bindusara", "Harsha", "Kanishka", "Bimbisara", "Ajatashatru",
      "Vikramaditya", "Chanakya", "Panini", "Qin Shi Huang", "Liu Bang", "Han", "Sun", "Confucius",
      "Laozi", "Zhuangzi", "Sima Qian", "Cao Cao", "Zhuge Liang", "Mansa Musa", "Sundiata",
      "Sunni Ali", "Askia", "Tenkamenin", "Idris Alooma", "Shaka", "Shango", "Oduduwa",
      "Osei-Tutu", "Pacal", "Itzamna", "Kukulkan", "K’inich", "YaxKukMo", "Ahau", "Tezcatlipoca",
      "Mixcoatl", "Cuauhtemoc", "Montezuma", "Kruppe", "Kupe", "Maui", "Hotu-Matu", "Rangi",
      "Tane", "Tangaroa", "Tiki", "Tamatea", "Toi", "Rongo", "Caratacus", "Arminius", "Alaric",
      "Attila", "Theodoric", "Odoacer", "Clovis", "Leonidas", "Pericles", "Solon", "Plato",
      "Socrates", "Aristotle", "Hannibal", "Scipio", "Caesar", "Augustus"
    ],

    female: [
      "Haven", "Seraphina", "Isolde", "Thessaly", "Calixta", "Zora", "Vesper", "Ondine", "Elowen",
      "Caelia", "Ashoka", "Thessaly", "Aesa", "Alfhildr", "Arnbjorg", "Aslaug", "Astrid",
      "Audhild", "Bergljot", "Brynhildr", "Dagny", "Eir", "Freydis", "Frida", "Geirhildr",
      "Gudrid", "Gudrun", "Gunnhildr", "Hallbera", "Hallgerd", "Helga", "Herdis", "Hildr",
      "Ingibjorg", "Ingrid", "Jorunn", "Katla", "Ragnhildr", "Runa", "Sif", "Signy", "Lady",
      "Medea", "Hecate", "Sigrid", "Solveig", "Steinunn", "Thora", "Thordis", "Torhild", "Tyra",
      "Unn", "Valdis", "Vigdis", "Ylva", "Aelita", "Andromeda", "Anya", "Artemis", "Arya",
      "Aurora", "Bellatrix", "Boudicca", "Calypso", "Cassiopeia", "Cersei", "Circe", "Cleopatra",
      "Comet", "Cora", "Cosima", "Daenerys", "Dahlia", "Diana", "Echo", "Electra", "Elora",
      "Eowyn", "Eris", "Esmeray", "Freya", "Galadriel", "Gaia", "Gwen", "Halo", "Hathor", "Hecate",
      "Helia", "Hypatia", "Indigo", "Ione", "Isolde", "Juno", "Kali", "Kestrel", "Khaleesi",
      "Lilith", "Luna", "Lyra", "Maeve", "Medusa", "Minerva", "Mirage", "Morgana", "Myst",
      "Nebula", "Nemesis", "Nova", "Nymeria", "Nyx", "Octavia", "Olympia", "Opal", "Pandora",
      "Persephone", "Phoenix", "Quilla", "Raven", "Rhea", "Ripley", "River", "Rogue", "Sable",
      "Saga", "Selene", "Seraphine", "Xenon", "Zephyr", "Shadow", "Sif", "Solara", "Starling",
      "Storm", "Sylvanas", "Tempest", "Thalassa", "Titania", "Trinity", "Umbra", "Valkyrie",
      "Vega", "Venus", "Vesper", "Vex", "Willow", "Winter", "Xena", "Yvaine", "Zephyra", "Zinnia",
      "Astra", "Belladonna", "Cosmos", "Rune", "Velora", "Nefertari", "Cleopatra", "Hatshepsut",
      "Meritamen", "Tiye", "Neithhotep", "Ankhesenamun", "Isisnofret", "Satiah", "Tawosret",
      "Inanna", "Ishtar", "Ereshkigal", "Ninhursag", "Ninsun", "Enheduanna", "Shibtu", "Kubaba",
      "Nanshe", "Gula", "Atossa", "Roxana", "Mandane", "Parysatis", "Artemis", "Cassandane",
      "Parisatys", "Stateira", "Amestris", "Barsine", "Ahilya", "Kunti", "Gandhari", "Draupadi",
      "Sita", "Radha", "Tara", "Maya", "Yashoda", "Subhadra", "BanZhao", "Wu Zetian", "Xiang Shi",
      "Zhao Feiyan", "Ma Xianglan", "Diao Chan", "CaiYan", "Wen Ji", "Makeda", "Nandi", "Amina",
      "Amanirenas", "Candace", "Yennenga", "Nzinga", "Moremi", "Idia", "Amina", "Xochitl",
      "Coyolxauhqui", "Chalchiuhtlicue", "Tlazolteotl", "Iztaccihuatl", "Malinalli", "Metztli",
      "Atlatonin", "Hina", "Pele", "Papa", "Haumea", "Laka", "Rongo", "Taranga", "Hinemoa",
      "Wairaka", "Matariki", "Boudica", "Cartimandua", "Epona", "Brigid", "Morrigan", "Medb",
      "Arianrhod", "Rhiannon", "Nemetona", "Sirona", "Aspasia", "Hypatia", "Sappho", "Cleobulina",
      "Theano", "Diotima", "Phryne", "Artemisia", "Lamia", "Cynisca"
    ],

    surname: [
      "Duke", "Custer", "Ashland", "Haven", "Ashvane", "Caldwell", "Draven", "Morrow",
      "Nightingale", "Sorrel", "Thorne", "Voss", "Waverly", "Wynne", "Aegisson/Aegisdottir",
      "Alfsson/Alfsdottir", "Arnarson/Arnarsdottir", "Askelsson/Askelsdottir",
      "Asmundsson/Asmundsdottir", "Bergsson/Bergsdottir", "Bjarnason/Bjarnasdottir",
      "Bjornsson/Bjornsdottir", "Brandsson/Brandsdottir", "Dagsson/Dagsdottir",
      "Egilsson/Egilsdottir", "Eiriksson/Eiriksdottir", "Erlandsson/Erlandsdottir",
      "Finnbogason/Finnbogasdottir", "Flokisson/Flokisdottir", "Frodesson/Frodesdottir",
      "Geirsson/Geirsdottir", "Gislason/Gislasdottir", "Grimsson/Grimsdottir",
      "Gudmundsson/Gudmundsdottir", "Gunnarsson/Gunnarsdottir", "Halfdansson/Halfdansdottir",
      "Hallsson/Hallsdottir", "Haraldsson/Haraldsdottir", "Hauksson/Hauksdottir",
      "Helgason/Helgasdottir", "Herjolfsson/Herjolfsdottir", "Hrafnsson/Hrafnsdottir",
      "Hrolfsson/Hrolfsdottir", "Ingvarsson/Ingvarsdottir", "Ivarsson/Ivarsdottir",
      "Jorundsson/Jorundsdottir", "Karlsson/Karlsdottir", "Ketilsson/Ketilsdottir",
      "Knutsson/Knutsdottir", "Kolbeinsson/Kolbeinsdottir", "Leifsson/Leifsdottir",
      "Magnusson/Magnusdottir", "Njallsson/Njallsdottir", "Oddsson/Oddsdottir",
      "Olafsson/Olafsdottir", "Ormsson/Ormsdottir", "Ragnarsson/Ragnarsdottir",
      "Sigurdsson/Sigurdsdottir", "Snorrason/Snorrasdottir", "Solvason/Solvasdottir",
      "Steinsson/Steinsdottir", "Styrbjornsson/Styrbjornsdottir", "Sverrisson/Sverrisdottir",
      "Thorarinsson/Thorarinsdottir", "Thorbergsson/Thorbergsdottir",
      "Thorbjornsson/Thorbjornsdottir", "Thordarson/Thordarsdottir",
      "Thorgeirsson/Thorgeirsdottir", "Thorkelsson/Thorkelsdottir", "Thorleifsson/Thorleifsdottir",
      "Thorolfsson/Thorolfsdottir", "Thorsteinsson/Thorsteinsdottir", "Tryggvason/Tryggvasdottir",
      "Ulfsson/Ulfsdottir", "Valgardsson/Valgardsdottir", "Vigfusson/Vigfusdottir",
      "Yngvarsson/Yngvarsdottir", "Ashwalker", "Blackthorn", "Brightblade", "Cinder",
      "Cloudbreaker", "Crowley", "Darkwater", "Dawnforge", "Doomhammer", "Dragonbane",
      "Dreamweaver", "Emberfall", "Evenwood", "Falconer", "Farseer", "Firebrand", "Frostfang",
      "Galewind", "Grimshaw", "Hawkwinter", "Hellstrom", "Ironwood", "Kingsley", "Lightbringer",
      "Longstride", "Moonshadow", "Nightbane", "Nightingale", "Northstar", "Oakenshield",
      "Obsidian", "Quickblade", "Ravencrest", "Redmane", "Riverwind", "Runeblade", "Shadowalker",
      "Silverfang", "Skylark", "Starborn", "Steelheart", "Stonehelm", "Stormborn", "Sunstrider",
      "Swiftarrow", "Thundershield", "Valeborn", "Voidwalker", "Warbringer", "Whisperwind",
      "Wintermere", "Wolfbane", "Xandros", "Zephyrion", "Blackwood", "Coldfire", "Dreadmoor",
      "Evernight", "Frostborne", "Goldleaf", "Grayshade", "Highwind", "Ironbane", "Moonfall",
      "Nethermere", "Riftwalker", "Shadowend", "Skyrunner", "Soulforge", "Starweaver",
      "Stormcaller", "Sunweaver", "Thornfield", "Voidstar", "Wildthorn", "Winterborn", "Ashenvale",
      "Brightstorm", "Darkbane", "Emberstone", "Firewalker", "Ghostwalker", "Grimward", "Icevein",
      "Nightwhisper", "Ravenwood", "Shadowmere", "Skydancer", "Stormveil", "Thornbreaker",
      "Umbermoor", "Voidheart", "Windrider", "Wyrmwood", "Blackflame", "Duskwalker", "Frostweaver",
      "Starfall", "Stonefang"
    ]
  }

};
