
/* ============================================================
   COLONY BLOC DATABASE
   ============================================================

   INSTRUCTIONS:

   Each colony bloc has a list of cultural origins and weights.

   - Higher numbers make an origin more common.
   - Lower numbers make an origin less common.
   - Zero excludes an origin entirely.
   - Numbers do NOT need to add up to 100.
   - You may omit cultures you do not want to use.
   - Copy an entire bloc to create a new one.
   - Culture identifiers must match those in names.js.
   - Colony bloc names automatically appear in the dropdown.

   ============================================================ */

const COLONY_BLOCS = {

  "Just fuck my shit up": {
    "afrikaans": 1,
    "akan": 1,
    "amazigh": 1,
    "american": 1,
    "ancient-celtic": 1,
    "ancient-egyptian": 1,
    "ancient-greek": 1,
    "ancient-persian": 1,
    "ancient-roman": 1,
    "anglo-saxon": 1,
    "apache": 1,
    "arabic-middle-eastern": 1,
    "armenian": 1,
    "armenian-western": 1,
    "ashkenazi": 1,
    "assyrian": 1,
    "aymara": 1,
    "azerbaijani": 1,
    "bantu": 1,
    "basque": 1,
    "bengali": 1,
    "burmese": 1,
    "byzantine": 1,
    "cajun-creole": 1,
    "caribbean": 1,
    "celtic": 1,
    "central-african": 1,
    "cherokee": 1,
    "classical-sanskrit": 1,
    "cree": 1,
    "czech-slovak": 1,
    "dravidian": 1,
    "dutch": 1,
    "east-african": 1,
    "east-asian-chinese": 1,
    "east-asian-japanese": 1,
    "east-asian-korean": 1,
    "eastern-european-slavic": 1,
    "english": 1,
    "ethiopian-horn-of-africa": 1,
    "filipino": 1,
    "finnic": 1,
    "french": 1,
    "georgian": 1,
    "germanic": 1,
    "gothic": 1,
    "greek": 1,
    "guarani": 1,
    "gujarati": 1,
    "hausa": 1,
    "hawaiian": 1,
    "hindi": 1,
    "hungarian": 1,
    "igbo": 1,
    "indigenous-american": 1,
    "indigenous-australian": 1,
    "indo-aryan": 1,
    "indonesian": 1,
    "inuit": 1,
    "irish": 1,
    "italian": 1,
    "jewish-hebrew": 1,
    "kannada": 1,
    "kazakh": 1,
    "khmer": 1,
    "kurdish": 1,
    "lakota-dakota": 1,
    "lao": 1,
    "latin-iberian": 1,
    "latvian": 1,
    "lithuanian": 1,
    "maghrebi": 1,
    "malagasy": 1,
    "malay": 1,
    "malayalam": 1,
    "maltese": 1,
    "maori": 1,
    "mapuche": 1,
    "maya": 1,
    "melanesian": 1,
    "mesopotamian": 1,
    "micronesian": 1,
    "mizrahi": 1,
    "mongolic": 1,
    "nahua": 1,
    "navajo": 1,
    "nepali": 1,
    "ojibwe": 1,
    "old-norse": 1,
    "pashtun": 1,
    "persian-iranian": 1,
    "phoenician-punic": 1,
    "polish": 1,
    "polynesian-pacific-islander": 1,
    "portuguese-brazilian": 1,
    "punjabi": 1,
    "quebecois": 1,
    "quechua": 1,
    "romani": 1,
    "romanian": 1,
    "russian": 1,
    "sami": 1,
    "samoan": 1,
    "scandinavian": 1,
    "semitic-ethiopic": 1,
    "sephardic": 1,
    "sinhala": 1,
    "somali": 1,
    "south-slavic": 1,
    "southeast-asian": 1,
    "southern-african": 1,
    "swahili": 1,
    "tajik": 1,
    "tamil": 1,
    "telugu": 1,
    "thai": 1,
    "tibetan-himalayan": 1,
    "tongan": 1,
    "turkic-central-asian": 1,
    "turkish": 1,
    "ukrainian": 1,
    "uzbek": 1,
    "vietnamese": 1,
    "west-african": 1,
    "western-northern-european": 1,
    "wildcard": 1,
    "yoruba": 1,
    "zulu": 1,
  },
   
    "No Cultural Origin": {

        // ===== AMERICAS =====
        // North American
        "american":                    5,
        "cajun-creole":                 0,
        "quebecois":                    0,
        // Indigenous American
        "indigenous-american":          2,
        "apache":                       0,
        "cherokee":                     0,
        "cree":                         0,
        "inuit":                        0,
        "lakota-dakota":                 0,
        "navajo":                       0,
        "ojibwe":                       0,
        "maya":                         0,
        "nahua":                        0,
        "aymara":                       0,
        "guarani":                      0,
        "mapuche":                      0,
        "quechua":                      0,
        // Latin American / Iberian
        "latin-iberian":                5,
        "portuguese-brazilian":          0,
        "caribbean":                    0,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":   6,
        "english":                      0,
        "french":                       0,
        "dutch":                        0,
        "germanic":                     0,
        "scandinavian":                 0,
        "finnic":                       0,
        "sami":                         0,
        // Celtic
        "celtic":                       1,
        "irish":                        0,
        // Southern European
        "basque":                       0,
        "italian":                      0,
        "maltese":                      0,
        "greek":                        0,
        // Central and Eastern European
        "eastern-european-slavic":      4,
        "czech-slovak":                 0,
        "hungarian":                    0,
        "polish":                       0,
        "russian":                      0,
        "ukrainian":                    0,
        "romanian":                     0,
        "latvian":                      0,
        "lithuanian":                   0,
        "south-slavic":                 0,
        // Romani
        "romani":                       0,
        // ===== AFRICA =====
        // North African
        "amazigh":                      0,
        "maghrebi":                     0,
        // West African
        "west-african":                 5,
        "akan":                         0,
        "hausa":                        0,
        "igbo":                         0,
        "yoruba":                       0,
        // Central African
        "central-african":              2,
        "bantu":                        2,
        // East African
        "east-african":                 2,
        "swahili":                      0,
        // Horn of Africa
        "ethiopian-horn-of-africa":     2,
        "semitic-ethiopic":             2,
        "somali":                       0,
        // Southern African
        "southern-african":             2,
        "afrikaans":                    0,
        "zulu":                         0,
        // Indian Ocean African
        "malagasy":                     0,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":        5,
        "assyrian":                     0,
        // Iranian
        "persian-iranian":              3,
        "kurdish":                      0,
        // Anatolian
        "turkish":                      0,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":                2,
        "ashkenazi":                    0,
        "sephardic":                    0,
        "mizrahi":                      0,
        // ===== CAUCASUS =====
        "armenian":                     0,
        "armenian-western":             0,
        "azerbaijani":                  0,
        "georgian":                     0,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":         3,
        "kazakh":                       0,
        "uzbek":                        0,
        // Iranian
        "tajik":                        0,
        "pashtun":                      0,
        // Mongolic
        "mongolic":                     2,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  18,
        "bengali":                      0,
        "gujarati":                     0,
        "hindi":                        0,
        "punjabi":                      0,
        "nepali":                       0,
        "sinhala":                      0,
        // Dravidian
        "dravidian":                   5,
        "kannada":                      0,
        "malayalam":                    0,
        "tamil":                        0,
        "telugu":                       0,
        // Himalayan
        "tibetan-himalayan":            2,
        // ===== EAST ASIA =====
        "east-asian-chinese":         10,
        "east-asian-japanese":          3,
        "east-asian-korean":            2,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":              6,
        // Mainland Southeast Asian
        "burmese":                      0,
        "khmer":                        0,
        "lao":                          0,
        "thai":                         0,
        "vietnamese":                   0,
        // Maritime Southeast Asian
        "filipino":                     0,
        "indonesian":                   0,
        "malay":                        0,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":        1,
        // Polynesian
        "polynesian-pacific-islander":  2,
        "hawaiian":                     0,
        "maori":                        0,
        "samoan":                       0,
        "tongan":                       0,
        // Melanesian
        "melanesian":                   0,
        // Micronesian
        "micronesian":                  0,
        // ===== WILDCARD =====
        "wildcard":                    6,
        // Ancient and Historical Revival
        "ancient-celtic":               0,
        "ancient-egyptian":             0,
        "ancient-greek":                0,
        "ancient-persian":              0,
        "ancient-roman":                0,
        "anglo-saxon":                  0,
        "byzantine":                    0,
        "classical-sanskrit":           0,
        "gothic":                       0,
        "mesopotamian":                 0,
        "old-norse":                    0,
        "phoenician-punic":             0,
    },

   
    "North America": {

        // ===== AMERICAS =====
        // North American
        "american":                    90,
        "cajun-creole":                 1,
        "quebecois":                    1,
        // Indigenous American
        "indigenous-american":          1,
        "apache":                       1,
        "cherokee":                     1,
        "cree":                         1,
        "inuit":                        1,
        "lakota-dakota":                 1,
        "navajo":                       1,
        "ojibwe":                       1,
        "maya":                         1,
        "nahua":                        1,
        "aymara":                       1,
        "guarani":                      1,
        "mapuche":                      1,
        "quechua":                      1,
        // Latin American / Iberian
        "latin-iberian":                5,
        "portuguese-brazilian":          5,
        "caribbean":                    1,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":   50,
        "english":                      1,
        "french":                       1,
        "dutch":                        1,
        "germanic":                     1,
        "scandinavian":                 1,
        "finnic":                       1,
        "sami":                         1,
        // Celtic
        "celtic":                       1,
        "irish":                        1,
        // Southern European
        "basque":                       1,
        "italian":                      1,
        "maltese":                      1,
        "greek":                        1,
        // Central and Eastern European
        "eastern-european-slavic":      1,
        "czech-slovak":                 1,
        "hungarian":                    1,
        "polish":                       1,
        "russian":                      1,
        "ukrainian":                    1,
        "romanian":                     1,
        "latvian":                      1,
        "lithuanian":                   1,
        "south-slavic":                 1,
        // Romani
        "romani":                       1,
        // ===== AFRICA =====
        // North African
        "amazigh":                      0,
        "maghrebi":                     0,
        // West African
        "west-african":                 1,
        "akan":                         0,
        "hausa":                        0,
        "igbo":                         0,
        "yoruba":                       0,
        // Central African
        "central-african":              1,
        "bantu":                        1,
        // East African
        "east-african":                 1,
        "swahili":                      0,
        // Horn of Africa
        "ethiopian-horn-of-africa":     1,
        "semitic-ethiopic":             1,
        "somali":                       0,
        // Southern African
        "southern-african":             1,
        "afrikaans":                    1,
        "zulu":                         0,
        // Indian Ocean African
        "malagasy":                     0,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":        1,
        "assyrian":                     0,
        // Iranian
        "persian-iranian":              1,
        "kurdish":                      1,
        // Anatolian
        "turkish":                      0,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":                1,
        "ashkenazi":                    1,
        "sephardic":                    1,
        "mizrahi":                      1,
        // ===== CAUCASUS =====
        "armenian":                     1,
        "armenian-western":             1,
        "azerbaijani":                  1,
        "georgian":                     1,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":         1,
        "kazakh":                       1,
        "uzbek":                        1,
        // Iranian
        "tajik":                        0,
        "pashtun":                      0,
        // Mongolic
        "mongolic":                     1,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  1,
        "bengali":                      0,
        "gujarati":                     0,
        "hindi":                        0,
        "punjabi":                      0,
        "nepali":                       0,
        "sinhala":                      0,
        // Dravidian
        "dravidian":                   1,
        "kannada":                      0,
        "malayalam":                    0,
        "tamil":                        0,
        "telugu":                       0,
        // Himalayan
        "tibetan-himalayan":            1,
        // ===== EAST ASIA =====
        "east-asian-chinese":         1,
        "east-asian-japanese":          1,
        "east-asian-korean":            1,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":              1,
        // Mainland Southeast Asian
        "burmese":                      0,
        "khmer":                        0,
        "lao":                          0,
        "thai":                         0,
        "vietnamese":                   0,
        // Maritime Southeast Asian
        "filipino":                     1,
        "indonesian":                   0,
        "malay":                        0,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":        1,
        // Polynesian
        "polynesian-pacific-islander":  1,
        "hawaiian":                     1,
        "maori":                        1,
        "samoan":                       0,
        "tongan":                       0,
        // Melanesian
        "melanesian":                   0,
        // Micronesian
        "micronesian":                  0,
        // ===== WILDCARD =====
        "wildcard":                    10,
        // Ancient and Historical Revival
        "ancient-celtic":               0,
        "ancient-egyptian":             0,
        "ancient-greek":                1,
        "ancient-persian":              1,
        "ancient-roman":                1,
        "anglo-saxon":                  1,
        "byzantine":                    1,
        "classical-sanskrit":           0,
        "gothic":                       1,
        "mesopotamian":                 0,
        "old-norse":                    1,
        "phoenician-punic":             0,

    },
      "Pan-Islamic": {

        // ===== AMERICAS =====
        // North American
        "american":                    1,
        "cajun-creole":                 0,
        "quebecois":                    0,
        // Indigenous American
        "indigenous-american":         1,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        0,
        "nahua":                       0,
        "aymara":                      0,
        "guarani":                     0,
        "mapuche":                     0,
        "quechua":                     0,
        // Latin American / Iberian
        "latin-iberian":               1,
        "portuguese-brazilian":         1,
        "caribbean":                   1,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  1,
        "english":                     0,
        "french":                      0,
        "dutch":                       0,
        "germanic":                    0,
        "scandinavian":                0,
        "finnic":                      0,
        "sami":                        0,
        // Celtic
        "celtic":                      0,
        "irish":                       1,
        // Southern European
        "basque":                      1,
        "italian":                     0,
        "maltese":                     0,
        "greek":                       0,
        // Central and Eastern European
        "eastern-european-slavic":     1,
        "czech-slovak":                0,
        "hungarian":                   0,
        "polish":                      0,
        "russian":                     0,
        "ukrainian":                   0,
        "romanian":                    0,
        "latvian":                     0,
        "lithuanian":                  0,
        "south-slavic":                1,
        // Romani
        "romani":                      1,
        // ===== AFRICA =====
        // North African
        "amazigh":                     4,
        "maghrebi":                    8,
        // West African
        "west-african":                5,
        "akan":                        1,
        "hausa":                       8,
        "igbo":                        1,
        "yoruba":                      3,
        // Central African
        "central-african":             2,
        "bantu":                       2,
        // East African
        "east-african":                3,
        "swahili":                     5,
        // Horn of Africa
        "ethiopian-horn-of-africa":    2,
        "semitic-ethiopic":            2,
        "somali":                      5,
        // Southern African
        "southern-african":            1,
        "afrikaans":                   0,
        "zulu":                        1,
        // Indian Ocean African
        "malagasy":                    0,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":      30,
        "assyrian":                    1,
        // Iranian
        "persian-iranian":            10,
        "kurdish":                     5,
        // Anatolian
        "turkish":                    10,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               1,
        "ashkenazi":                   1,
        "sephardic":                   1,
        "mizrahi":                     1,
        // ===== CAUCASUS =====
        "armenian":                    1,
        "armenian-western":            1,
        "azerbaijani":                 3,
        "georgian":                    0,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        5,
        "kazakh":                      3,
        "uzbek":                       5,
        // Iranian
        "tajik":                       3,
        "pashtun":                     8,
        // Mongolic
        "mongolic":                    1,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                 20,
        "bengali":                    18,
        "gujarati":                    2,
        "hindi":                       2,
        "punjabi":                    20,
        "nepali":                      1,
        "sinhala":                     1,
        // Dravidian
        "dravidian":                   3,
        "kannada":                     1,
        "malayalam":                   2,
        "tamil":                       2,
        "telugu":                      1,
        // Himalayan
        "tibetan-himalayan":           1,
        // ===== EAST ASIA =====
        "east-asian-chinese":          2,
        "east-asian-japanese":         1,
        "east-asian-korean":           1,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             2,
        // Mainland Southeast Asian
        "burmese":                     1,
        "khmer":                       1,
        "lao":                         1,
        "thai":                        1,
        "vietnamese":                  1,
        // Maritime Southeast Asian
        "filipino":                    2,
        "indonesian":                 30,
        "malay":                       5,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       0,
        // Polynesian
        "polynesian-pacific-islander": 0,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  0,
        // Micronesian
        "micronesian":                 1,
        // ===== WILDCARD =====
        "wildcard":                    2,
        // Ancient and Historical Revival
        "ancient-celtic":              0,
        "ancient-egyptian":            2,
        "ancient-greek":               0,
        "ancient-persian":             3,
        "ancient-roman":               0,
        "anglo-saxon":                 0,
        "byzantine":                   1,
        "classical-sanskrit":          1,
        "gothic":                      0,
        "mesopotamian":                3,
        "old-norse":                   0,
        "phoenician-punic":            2,
    },

      "Pan-African": {

        // ===== AMERICAS =====
        // North American
        "american":                    4,
        "cajun-creole":                1,
        "quebecois":                   0,
        // Indigenous American
        "indigenous-american":         1,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        0,
        "nahua":                       0,
        "aymara":                      0,
        "guarani":                     0,
        "mapuche":                     0,
        "quechua":                     0,
        // Latin American / Iberian
        "latin-iberian":               3,
        "portuguese-brazilian":         5,
        "caribbean":                   5,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  3,
        "english":                     1,
        "french":                      2,
        "dutch":                       0,
        "germanic":                    0,
        "scandinavian":                0,
        "finnic":                      0,
        "sami":                        0,
        // Celtic
        "celtic":                      0,
        "irish":                       1,
        // Southern European
        "basque":                      1,
        "italian":                     0,
        "maltese":                     0,
        "greek":                       0,
        // Central and Eastern European
        "eastern-european-slavic":     1,
        "czech-slovak":                0,
        "hungarian":                   0,
        "polish":                      0,
        "russian":                     0,
        "ukrainian":                   0,
        "romanian":                    0,
        "latvian":                     0,
        "lithuanian":                  0,
        "south-slavic":                1,
        // Romani
        "romani":                      1,
        // ===== AFRICA =====
        // North African
        "amazigh":                     8,
        "maghrebi":                   24,
        // West African
        "west-african":               32,
        "akan":                        8,
        "hausa":                      24,
        "igbo":                       15,
        "yoruba":                     15,
        // Central African
        "central-african":            22,
        "bantu":                      22,
        // East African
        "east-african":               25,
        "swahili":                    18,
        // Horn of Africa
        "ethiopian-horn-of-africa":   18,
        "semitic-ethiopic":           12,
        "somali":                      8,
        // Southern African
        "southern-african":           16,
        "afrikaans":                   4,
        "zulu":                        8,
        // Indian Ocean African
        "malagasy":                    8,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":      20,
        "assyrian":                    1,
        // Iranian
        "persian-iranian":             2,
        "kurdish":                     1,
        // Anatolian
        "turkish":                     2,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               1,
        "ashkenazi":                   1,
        "sephardic":                   2,
        "mizrahi":                     2,
        // ===== CAUCASUS =====
        "armenian":                    1,
        "armenian-western":            1,
        "azerbaijani":                 1,
        "georgian":                    0,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        1,
        "kazakh":                      1,
        "uzbek":                       1,
        // Iranian
        "tajik":                       1,
        "pashtun":                     1,
        // Mongolic
        "mongolic":                    1,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  4,
        "bengali":                     1,
        "gujarati":                    3,
        "hindi":                       1,
        "punjabi":                     2,
        "nepali":                      1,
        "sinhala":                     1,
        // Dravidian
        "dravidian":                   3,
        "kannada":                     1,
        "malayalam":                   1,
        "tamil":                       3,
        "telugu":                      1,
        // Himalayan
        "tibetan-himalayan":           1,
        // ===== EAST ASIA =====
        "east-asian-chinese":          3,
        "east-asian-japanese":         1,
        "east-asian-korean":           1,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             1,
        // Mainland Southeast Asian
        "burmese":                     1,
        "khmer":                       1,
        "lao":                         1,
        "thai":                        1,
        "vietnamese":                  1,
        // Maritime Southeast Asian
        "filipino":                    1,
        "indonesian":                  2,
        "malay":                       2,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       0,
        // Polynesian
        "polynesian-pacific-islander": 0,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  0,
        // Micronesian
        "micronesian":                 1,
        // ===== WILDCARD =====
        "wildcard":                    2,
        // Ancient and Historical Revival
        "ancient-celtic":              0,
        "ancient-egyptian":            8,
        "ancient-greek":               0,
        "ancient-persian":             1,
        "ancient-roman":               0,
        "anglo-saxon":                 0,
        "byzantine":                   1,
        "classical-sanskrit":          1,
        "gothic":                      0,
        "mesopotamian":                1,
        "old-norse":                   0,
        "phoenician-punic":            3,
    },

      "Pan-Asian": {

        // ===== AMERICAS =====
        // North American
        "american":                    1,
        "cajun-creole":                0,
        "quebecois":                   0,
        // Indigenous American
        "indigenous-american":         1,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        0,
        "nahua":                       0,
        "aymara":                      0,
        "guarani":                     0,
        "mapuche":                     0,
        "quechua":                     0,
        // Latin American / Iberian
        "latin-iberian":               1,
        "portuguese-brazilian":         0,
        "caribbean":                   0,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  1,
        "english":                     0,
        "french":                      0,
        "dutch":                       0,
        "germanic":                    0,
        "scandinavian":                0,
        "finnic":                      0,
        "sami":                        0,
        // Celtic
        "celtic":                      1,
        "irish":                       0,
        // Southern European
        "basque":                      0,
        "italian":                     0,
        "maltese":                     0,
        "greek":                       0,
        // Central and Eastern European
        "eastern-european-slavic":     3,
        "czech-slovak":                0,
        "hungarian":                   0,
        "polish":                      0,
        "russian":                     2,
        "ukrainian":                   0,
        "romanian":                    0,
        "latvian":                     0,
        "lithuanian":                  0,
        "south-slavic":                0,
        // Romani
        "romani":                      0,
        // ===== AFRICA =====
        // North African
        "amazigh":                     0,
        "maghrebi":                    0,
        // West African
        "west-african":                1,
        "akan":                        0,
        "hausa":                       0,
        "igbo":                        0,
        "yoruba":                      0,
        // Central African
        "central-african":             1,
        "bantu":                       1,
        // East African
        "east-african":                1,
        "swahili":                     1,
        // Horn of Africa
        "ethiopian-horn-of-africa":    1,
        "semitic-ethiopic":            1,
        "somali":                      0,
        // Southern African
        "southern-african":            1,
        "afrikaans":                   0,
        "zulu":                        0,
        // Indian Ocean African
        "malagasy":                    0,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":      15,
        "assyrian":                    1,
        // Iranian
        "persian-iranian":             6,
        "kurdish":                     2,
        // Anatolian
        "turkish":                     5,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               1,
        "ashkenazi":                   0,
        "sephardic":                   0,
        "mizrahi":                     1,
        // ===== CAUCASUS =====
        "armenian":                    1,
        "armenian-western":            1,
        "azerbaijani":                 1,
        "georgian":                    1,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        3,
        "kazakh":                      2,
        "uzbek":                       3,
        // Iranian
        "tajik":                       1,
        "pashtun":                     3,
        // Mongolic
        "mongolic":                    2,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                 45,
        "bengali":                    15,
        "gujarati":                    4,
        "hindi":                      15,
        "punjabi":                    10,
        "nepali":                      2,
        "sinhala":                     2,
        // Dravidian
        "dravidian":                  15,
        "kannada":                     3,
        "malayalam":                   3,
        "tamil":                       6,
        "telugu":                      5,
        // Himalayan
        "tibetan-himalayan":           3,
        // ===== EAST ASIA =====
        "east-asian-chinese":         90,
        "east-asian-japanese":         9,
        "east-asian-korean":           6,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             8,
        // Mainland Southeast Asian
        "burmese":                     4,
        "khmer":                       2,
        "lao":                         1,
        "thai":                        5,
        "vietnamese":                  7,
        // Maritime Southeast Asian
        "filipino":                    8,
        "indonesian":                 18,
        "malay":                       4,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       1,
        // Polynesian
        "polynesian-pacific-islander": 1,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  1,
        // Micronesian
        "micronesian":                 1,
        // ===== WILDCARD =====
        "wildcard":                    3,
        // Ancient and Historical Revival
        "ancient-celtic":              0,
        "ancient-egyptian":            0,
        "ancient-greek":               0,
        "ancient-persian":             2,
        "ancient-roman":               0,
        "anglo-saxon":                 0,
        "byzantine":                   0,
        "classical-sanskrit":          3,
        "gothic":                      0,
        "mesopotamian":                1,
        "old-norse":                   0,
        "phoenician-punic":            1,

    },

      "China-centric": {

                // ===== AMERICAS =====
        // North American
        "american":                    3,
        "cajun-creole":                0,
        "quebecois":                   0,
        // Indigenous American
        "indigenous-american":         1,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        0,
        "nahua":                       0,
        "aymara":                      0,
        "guarani":                     0,
        "mapuche":                     0,
        "quechua":                     0,
        // Latin American / Iberian
        "latin-iberian":               3,
        "portuguese-brazilian":         2,
        "caribbean":                   0,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  4,
        "english":                     0,
        "french":                      0,
        "dutch":                       0,
        "germanic":                    0,
        "scandinavian":                0,
        "finnic":                      0,
        "sami":                        0,
        // Celtic
        "celtic":                      1,
        "irish":                       0,
        // Southern European
        "basque":                      0,
        "italian":                     0,
        "maltese":                     0,
        "greek":                       0,
        // Central and Eastern European
        "eastern-european-slavic":     4,
        "czech-slovak":                0,
        "hungarian":                   0,
        "polish":                      0,
        "russian":                     5,
        "ukrainian":                   1,
        "romanian":                    0,
        "latvian":                     0,
        "lithuanian":                  0,
        "south-slavic":                1,
        // Romani
        "romani":                      0,
        // ===== AFRICA =====
        // North African
        "amazigh":                     0,
        "maghrebi":                    1,
        // West African
        "west-african":                3,
        "akan":                        0,
        "hausa":                       1,
        "igbo":                        1,
        "yoruba":                      1,
        // Central African
        "central-african":             3,
        "bantu":                       3,
        // East African
        "east-african":                3,
        "swahili":                     2,
        // Horn of Africa
        "ethiopian-horn-of-africa":    2,
        "semitic-ethiopic":            1,
        "somali":                      1,
        // Southern African
        "southern-african":            2,
        "afrikaans":                   0,
        "zulu":                        0,
        // Indian Ocean African
        "malagasy":                    0,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":       3,
        "assyrian":                    0,
        // Iranian
        "persian-iranian":             3,
        "kurdish":                     0,
        // Anatolian
        "turkish":                     1,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               1,
        "ashkenazi":                   0,
        "sephardic":                   0,
        "mizrahi":                     0,
        // ===== CAUCASUS =====
        "armenian":                    0,
        "armenian-western":            0,
        "azerbaijani":                 1,
        "georgian":                    0,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        4,
        "kazakh":                      3,
        "uzbek":                       2,
        // Iranian
        "tajik":                       1,
        "pashtun":                     2,
        // Mongolic
        "mongolic":                    6,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                 10,
        "bengali":                     4,
        "gujarati":                    1,
        "hindi":                       2,
        "punjabi":                     4,
        "nepali":                      2,
        "sinhala":                     1,
        // Dravidian
        "dravidian":                   4,
        "kannada":                     0,
        "malayalam":                   1,
        "tamil":                       2,
        "telugu":                      1,
        // Himalayan
        "tibetan-himalayan":           6,
        // ===== EAST ASIA =====
        "east-asian-chinese":        200,
        "east-asian-japanese":         6,
        "east-asian-korean":          10,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             5,
        // Mainland Southeast Asian
        "burmese":                     6,
        "khmer":                       3,
        "lao":                         3,
        "thai":                        5,
        "vietnamese":                  8,
        // Maritime Southeast Asian
        "filipino":                    4,
        "indonesian":                  7,
        "malay":                       4,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       1,
        // Polynesian
        "polynesian-pacific-islander": 1,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  1,
        // Micronesian
        "micronesian":                 1,
        // ===== WILDCARD =====
        "wildcard":                    3,
        // Ancient and Historical Revival
        "ancient-celtic":              0,
        "ancient-egyptian":            0,
        "ancient-greek":               0,
        "ancient-persian":             1,
        "ancient-roman":               0,
        "anglo-saxon":                 0,
        "byzantine":                   0,
        "classical-sanskrit":          1,
        "gothic":                      0,
        "mesopotamian":                0,
        "old-norse":                   0,
        "phoenician-punic":            0,
    },

      "Southeast Asian": {

        // ===== AMERICAS =====
        // North American
        "american":                    3,
        "cajun-creole":                0,
        "quebecois":                   0,
        // Indigenous American
        "indigenous-american":         1,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        0,
        "nahua":                       0,
        "aymara":                      0,
        "guarani":                     0,
        "mapuche":                     0,
        "quechua":                     0,
        // Latin American / Iberian
        "latin-iberian":               3,
        "portuguese-brazilian":         1,
        "caribbean":                   0,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  4,
        "english":                     2,
        "french":                      2,
        "dutch":                       2,
        "germanic":                    0,
        "scandinavian":                0,
        "finnic":                      0,
        "sami":                        0,
        // Celtic
        "celtic":                      1,
        "irish":                       0,
        // Southern European
        "basque":                      0,
        "italian":                     0,
        "maltese":                     0,
        "greek":                       0,
        // Central and Eastern European
        "eastern-european-slavic":     1,
        "czech-slovak":                0,
        "hungarian":                   0,
        "polish":                      0,
        "russian":                     1,
        "ukrainian":                   0,
        "romanian":                    0,
        "latvian":                     0,
        "lithuanian":                  0,
        "south-slavic":                0,
        // Romani
        "romani":                      0,
        // ===== AFRICA =====
        // North African
        "amazigh":                     0,
        "maghrebi":                    0,
        // West African
        "west-african":                1,
        "akan":                        0,
        "hausa":                       0,
        "igbo":                        0,
        "yoruba":                      0,
        // Central African
        "central-african":             1,
        "bantu":                       1,
        // East African
        "east-african":                1,
        "swahili":                     1,
        // Horn of Africa
        "ethiopian-horn-of-africa":    1,
        "semitic-ethiopic":            1,
        "somali":                      0,
        // Southern African
        "southern-african":            1,
        "afrikaans":                   0,
        "zulu":                        0,
        // Indian Ocean African
        "malagasy":                    2,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":      10,
        "assyrian":                    0,
        // Iranian
        "persian-iranian":             2,
        "kurdish":                     0,
        // Anatolian
        "turkish":                     1,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               1,
        "ashkenazi":                   0,
        "sephardic":                   0,
        "mizrahi":                     0,
        // ===== CAUCASUS =====
        "armenian":                    1,
        "armenian-western":            0,
        "azerbaijani":                 0,
        "georgian":                    0,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        1,
        "kazakh":                      0,
        "uzbek":                       0,
        // Iranian
        "tajik":                       0,
        "pashtun":                     1,
        // Mongolic
        "mongolic":                    1,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  5,
        "bengali":                     3,
        "gujarati":                    2,
        "hindi":                       2,
        "punjabi":                     2,
        "nepali":                      2,
        "sinhala":                     1,
        // Dravidian
        "dravidian":                   4,
        "kannada":                     1,
        "malayalam":                   2,
        "tamil":                       5,
        "telugu":                      1,
        // Himalayan
        "tibetan-himalayan":           2,
        // ===== EAST ASIA =====
        "east-asian-chinese":         30,
        "east-asian-japanese":         5,
        "east-asian-korean":           4,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":            15,
        // Mainland Southeast Asian
        "burmese":                    22,
        "khmer":                      10,
        "lao":                         6,
        "thai":                       30,
        "vietnamese":                 42,
        // Maritime Southeast Asian
        "filipino":                   48,
        "indonesian":                110,
        "malay":                      24,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       1,
        // Polynesian
        "polynesian-pacific-islander": 1,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  5,
        // Micronesian
        "micronesian":                 3,
        // ===== WILDCARD =====
        "wildcard":                    3,
        // Ancient and Historical Revival
        "ancient-celtic":              0,
        "ancient-egyptian":            0,
        "ancient-greek":               0,
        "ancient-persian":             1,
        "ancient-roman":               0,
        "anglo-saxon":                 0,
        "byzantine":                   0,
        "classical-sanskrit":          5,
        "gothic":                      0,
        "mesopotamian":                0,
        "old-norse":                   0,
        "phoenician-punic":            0,    },

      "South American": {

        // ===== AMERICAS =====
        // North American
        "american":                    4,
        "cajun-creole":                1,
        "quebecois":                   0,
        // Indigenous American
        "indigenous-american":         5,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        2,
        "nahua":                       2,
        "aymara":                      8,
        "guarani":                    10,
        "mapuche":                     8,
        "quechua":                    20,
        // Latin American / Iberian
        "latin-iberian":             140,
        "portuguese-brazilian":      110,
        "caribbean":                   8,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  5,
        "english":                     1,
        "french":                      2,
        "dutch":                       1,
        "germanic":                    5,
        "scandinavian":                0,
        "finnic":                      0,
        "sami":                        0,
        // Celtic
        "celtic":                      1,
        "irish":                       1,
        // Southern European
        "basque":                      4,
        "italian":                    15,
        "maltese":                     0,
        "greek":                       1,
        // Central and Eastern European
        "eastern-european-slavic":     3,
        "czech-slovak":                0,
        "hungarian":                   1,
        "polish":                      2,
        "russian":                     1,
        "ukrainian":                   2,
        "romanian":                    0,
        "latvian":                     0,
        "lithuanian":                  1,
        "south-slavic":                2,
        // Romani
        "romani":                      1,
        // ===== AFRICA =====
        // North African
        "amazigh":                     0,
        "maghrebi":                    1,
        // West African
        "west-african":                8,
        "akan":                        2,
        "hausa":                       1,
        "igbo":                        3,
        "yoruba":                      5,
        // Central African
        "central-african":             5,
        "bantu":                       6,
        // East African
        "east-african":                1,
        "swahili":                     1,
        // Horn of Africa
        "ethiopian-horn-of-africa":    1,
        "semitic-ethiopic":            1,
        "somali":                      0,
        // Southern African
        "southern-african":            1,
        "afrikaans":                   0,
        "zulu":                        0,
        // Indian Ocean African
        "malagasy":                    0,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":       8,
        "assyrian":                    1,
        // Iranian
        "persian-iranian":             1,
        "kurdish":                     0,
        // Anatolian
        "turkish":                     1,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               2,
        "ashkenazi":                   3,
        "sephardic":                   4,
        "mizrahi":                     1,
        // ===== CAUCASUS =====
        "armenian":                    2,
        "armenian-western":            1,
        "azerbaijani":                 0,
        "georgian":                    0,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        1,
        "kazakh":                      0,
        "uzbek":                       0,
        // Iranian
        "tajik":                       0,
        "pashtun":                     0,
        // Mongolic
        "mongolic":                    1,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  3,
        "bengali":                     0,
        "gujarati":                    1,
        "hindi":                       2,
        "punjabi":                     1,
        "nepali":                      0,
        "sinhala":                     0,
        // Dravidian
        "dravidian":                   2,
        "kannada":                     0,
        "malayalam":                   0,
        "tamil":                       1,
        "telugu":                      0,
        // Himalayan
        "tibetan-himalayan":           1,
        // ===== EAST ASIA =====
        "east-asian-chinese":          5,
        "east-asian-japanese":         8,
        "east-asian-korean":           2,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             1,
        // Mainland Southeast Asian
        "burmese":                     0,
        "khmer":                       0,
        "lao":                         0,
        "thai":                        0,
        "vietnamese":                  0,
        // Maritime Southeast Asian
        "filipino":                    1,
        "indonesian":                  2,
        "malay":                       0,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       1,
        // Polynesian
        "polynesian-pacific-islander": 1,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  0,
        // Micronesian
        "micronesian":                 0,
        // ===== WILDCARD =====
        "wildcard":                    3,
        // Ancient and Historical Revival
        "ancient-celtic":              0,
        "ancient-egyptian":            0,
        "ancient-greek":               1,
        "ancient-persian":             0,
        "ancient-roman":               4,
        "anglo-saxon":                 0,
        "byzantine":                   0,
        "classical-sanskrit":          0,
        "gothic":                      0,
        "mesopotamian":                0,
        "old-norse":                   0,
        "phoenician-punic":            0,
    },

         "European": {

        // ===== AMERICAS =====
        // North American
        "american":                    1,
        "cajun-creole":                1,
        "quebecois":                   3,
        // Indigenous American
        "indigenous-american":         1,
        "apache":                      0,
        "cherokee":                    0,
        "cree":                        0,
        "inuit":                       0,
        "lakota-dakota":                0,
        "navajo":                      0,
        "ojibwe":                      0,
        "maya":                        0,
        "nahua":                       0,
        "aymara":                      0,
        "guarani":                     0,
        "mapuche":                     0,
        "quechua":                     0,
        // Latin American / Iberian
        "latin-iberian":              30,
        "portuguese-brazilian":         8,
        "caribbean":                   1,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european": 20,
        "english":                     1,
        "french":                     40,
        "dutch":                      12,
        "germanic":                   55,
        "scandinavian":               15,
        "finnic":                      5,
        "sami":                        2,
        // Celtic
        "celtic":                      3,
        "irish":                       1,
        // Southern European
        "basque":                      3,
        "italian":                    35,
        "maltese":                     2,
        "greek":                       8,
        // Central and Eastern European
        "eastern-european-slavic":    15,
        "czech-slovak":                8,
        "hungarian":                   6,
        "polish":                     22,
        "russian":                    20,
        "ukrainian":                  15,
        "romanian":                   12,
        "latvian":                     2,
        "lithuanian":                  3,
        "south-slavic":               14,
        // Romani
        "romani":                      5,
        // ===== AFRICA =====
        // North African
        "amazigh":                     2,
        "maghrebi":                    5,
        // West African
        "west-african":                3,
        "akan":                        0,
        "hausa":                       0,
        "igbo":                        0,
        "yoruba":                      0,
        // Central African
        "central-african":             2,
        "bantu":                       1,
        // East African
        "east-african":                1,
        "swahili":                     0,
        // Horn of Africa
        "ethiopian-horn-of-africa":    1,
        "semitic-ethiopic":            1,
        "somali":                      2,
        // Southern African
        "southern-african":            1,
        "afrikaans":                   2,
        "zulu":                        0,
        // Indian Ocean African
        "malagasy":                    1,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":       5,
        "assyrian":                    1,
        // Iranian
        "persian-iranian":             3,
        "kurdish":                     3,
        // Anatolian
        "turkish":                    12,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               2,
        "ashkenazi":                   5,
        "sephardic":                   3,
        "mizrahi":                     1,
        // ===== CAUCASUS =====
        "armenian":                    3,
        "armenian-western":            2,
        "azerbaijani":                 1,
        "georgian":                    3,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        2,
        "kazakh":                      1,
        "uzbek":                       1,
        // Iranian
        "tajik":                       0,
        "pashtun":                     1,
        // Mongolic
        "mongolic":                    1,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  3,
        "bengali":                     1,
        "gujarati":                    0,
        "hindi":                       0,
        "punjabi":                     1,
        "nepali":                      0,
        "sinhala":                     0,
        // Dravidian
        "dravidian":                   2,
        "kannada":                     0,
        "malayalam":                   0,
        "tamil":                       1,
        "telugu":                      0,
        // Himalayan
        "tibetan-himalayan":           1,
        // ===== EAST ASIA =====
        "east-asian-chinese":          3,
        "east-asian-japanese":         1,
        "east-asian-korean":           1,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             1,
        // Mainland Southeast Asian
        "burmese":                     0,
        "khmer":                       0,
        "lao":                         0,
        "thai":                        1,
        "vietnamese":                  2,
        // Maritime Southeast Asian
        "filipino":                    1,
        "indonesian":                  2,
        "malay":                       0,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":       1,
        // Polynesian
        "polynesian-pacific-islander": 1,
        "hawaiian":                    0,
        "maori":                       0,
        "samoan":                      0,
        "tongan":                      0,
        // Melanesian
        "melanesian":                  0,
        // Micronesian
        "micronesian":                 0,
        // ===== WILDCARD =====
        "wildcard":                    3,
        // Ancient and Historical Revival
        "ancient-celtic":              5,
        "ancient-egyptian":            0,
        "ancient-greek":               6,
        "ancient-persian":             1,
        "ancient-roman":               8,
        "anglo-saxon":                 1,
        "byzantine":                   4,
        "classical-sanskrit":          0,
        "gothic":                      3,
        "mesopotamian":                0,
        "old-norse":                   5,
        "phoenician-punic":            1,
    },

   "Pan-Indigenous": {

        // ===== AMERICAS =====
        // North American
        "american":                    2,
        "cajun-creole":                1,
        "quebecois":                   1,
        // Indigenous American
        "indigenous-american":        35,
        "apache":                      8,
        "cherokee":                   12,
        "cree":                       10,
        "inuit":                      12,
        "lakota-dakota":              10,
        "navajo":                     15,
        "ojibwe":                     12,
        "maya":                       25,
        "nahua":                      25,
        "aymara":                     20,
        "guarani":                    20,
        "mapuche":                    20,
        "quechua":                    35,
        // Latin American / Iberian
        "latin-iberian":              10,
        "portuguese-brazilian":         5,
        "caribbean":                   5,
        // ===== EUROPE =====
        // Western and Northern European
        "western-northern-european":  2,
        "english":                     0,
        "french":                      0,
        "dutch":                       0,
        "germanic":                    0,
        "scandinavian":                1,
        "finnic":                      5,
        "sami":                       12,
        // Celtic
        "celtic":                     10,
        "irish":                       3,
        // Southern European
        "basque":                      8,
        "italian":                     0,
        "maltese":                     0,
        "greek":                       0,
        // Central and Eastern European
        "eastern-european-slavic":     1,
        "czech-slovak":                0,
        "hungarian":                   0,
        "polish":                      0,
        "russian":                     0,
        "ukrainian":                   0,
        "romanian":                    0,
        "latvian":                     2,
        "lithuanian":                  2,
        "south-slavic":                0,
        // Romani
        "romani":                      8,
        // ===== AFRICA =====
        // North African
        "amazigh":                    15,
        "maghrebi":                    2,
        // West African
        "west-african":                5,
        "akan":                        6,
        "hausa":                       4,
        "igbo":                        6,
        "yoruba":                      6,
        // Central African
        "central-african":             6,
        "bantu":                      10,
        // East African
        "east-african":                5,
        "swahili":                     3,
        // Horn of Africa
        "ethiopian-horn-of-africa":    4,
        "semitic-ethiopic":            2,
        "somali":                      3,
        // Southern African
        "southern-african":            8,
        "afrikaans":                   0,
        "zulu":                        8,
        // Indian Ocean African
        "malagasy":                    8,
        // ===== MIDDLE EAST =====
        // Arabian / Levantine / Mesopotamian
        "arabic-middle-eastern":       2,
        "assyrian":                    8,
        // Iranian
        "persian-iranian":             1,
        "kurdish":                    10,
        // Anatolian
        "turkish":                     0,
        // ===== JEWISH DIASPORA =====
        "jewish-hebrew":               1,
        "ashkenazi":                   1,
        "sephardic":                   1,
        "mizrahi":                     1,
        // ===== CAUCASUS =====
        "armenian":                    5,
        "armenian-western":            3,
        "azerbaijani":                 1,
        "georgian":                    4,
        // ===== CENTRAL AND NORTHERN ASIA =====
        // Turkic
        "turkic-central-asian":        5,
        "kazakh":                      4,
        "uzbek":                       2,
        // Iranian
        "tajik":                       2,
        "pashtun":                     3,
        // Mongolic
        "mongolic":                   12,
        // ===== SOUTH ASIA =====
        // Indo-Aryan
        "indo-aryan":                  2,
        "bengali":                     1,
        "gujarati":                    0,
        "hindi":                       0,
        "punjabi":                     1,
        "nepali":                      3,
        "sinhala":                     2,
        // Dravidian
        "dravidian":                   6,
        "kannada":                     2,
        "malayalam":                   2,
        "tamil":                       4,
        "telugu":                      2,
        // Himalayan
        "tibetan-himalayan":          20,
        // ===== EAST ASIA =====
        "east-asian-chinese":          1,
        "east-asian-japanese":         1,
        "east-asian-korean":           1,
        // ===== SOUTHEAST ASIA =====
        "southeast-asian":             4,
        // Mainland Southeast Asian
        "burmese":                     3,
        "khmer":                       3,
        "lao":                         3,
        "thai":                        1,
        "vietnamese":                  1,
        // Maritime Southeast Asian
        "filipino":                    5,
        "indonesian":                  8,
        "malay":                       4,
        // ===== OCEANIA =====
        // Indigenous Australian
        "indigenous-australian":      25,
        // Polynesian
        "polynesian-pacific-islander":20,
        "hawaiian":                   12,
        "maori":                      20,
        "samoan":                     15,
        "tongan":                     10,
        // Melanesian
        "melanesian":                 25,
        // Micronesian
        "micronesian":                15,
        // ===== WILDCARD =====
        "wildcard":                    3,
        // Ancient and Historical Revival
        "ancient-celtic":              6,
        "ancient-egyptian":            3,
        "ancient-greek":               0,
        "ancient-persian":             1,
        "ancient-roman":               0,
        "anglo-saxon":                 0,
        "byzantine":                   0,
        "classical-sanskrit":          2,
        "gothic":                      0,
        "mesopotamian":                2,
        "old-norse":                   2,
        "phoenician-punic":            1,
    },

};
