export var orderHistoryList = [
    {
        date: '2021-01-15',
        data: 2,
        transID: 'TNC0046'
    },
    // {
    //     date: '2021-01-15',
    //     data: 5,
    //     transID: 'TNC0056'
    // },
    // {
    //     date: '2021-01-25',
    //     data: 7,
    //     transID: 'TNC0012'
    // },
    // {
    //     date: '2021-01-65',
    //     data: 2,
    //     transID: 'TNC0007'
    // },
    // {
    //     date: '2021-07-15',
    //     data: 7,
    //     transID: 'TNC0013'
    // },
    // {
    //     date: '2021-03-25',
    //     data: 3,
    //     transID: 'TNC0013'
    // },
    // {
    //     date: '2021-01-15',
    //     data: 9,
    //     transID: 'TNC0012'
    // },
]

// function newProxyAddressList(locationOption, proxyType, providerType, quantity)
// {      
// 	let addressList = [];      
// 	const location = locationOption.val();      
// 	const index = locationOption.attr('data-index');      
// 	const specialType = locationOption.attr('data-type') === 'special';      
//     const otherType = locationOption.attr('data-type') === 'other';     
//      
//     let locationCountry = locationOption.attr('data-country');
    
//     console.log(specialType + " - " + otherType + " - " + locationCountry + " - " + location);

//     for (let i = 0; i < quantity; i++) {
// 		const id = (i + Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12)).toString();        
// 		let address = `resi.proxies.aycd.io:7777:customer-${getCurrentUser().username}`;        
// 		if (specialType || otherType) {          
// 			const countries = (specialType ? customLocationList : otherLocationList)[index].countries;          
// 			locationCountry = countries[Math.floor(Math.random() * countries.length)].toLowerCase();          
// 			address += `-cc-${locationCountry}`;        
// 		} else if (locationCountry) {          
// 			address += `-cc-${locationCountry}-city-${location}`;        
// 		} else {          
// 			address += `-cc-${location}`;        
//         }

//         if (proxyType === "static") {          
// 			address += `-sessid-${id}`;        
// 		}        
// 		if (otherType) {          
// 			address += `-fast-true`;        
// 		}        
// 		address += `:${getCurrentUser().password}`;        
// 		addressList.push(address);      
// 	}      
// 	return addressList;    
// }




var countryCodes = {
    "Andorra": "AE",
    "United Arab Emirates": "AE",
    "Afghanistan": "AF",
    "Antigua and Barbuda": "AG",
    "Anguilla": "AI",
    "Albania": "AL",
    "Armenia": "AM",
    "Angola": "AO",
    "Antarctica": "AQ",
    "": "",
    "Argentina": "AR",
    "American Samoa": "AS",
    "Austria": "AT",
    "Australia": "AU",
    "Aruba": "AW",
    "land Islands": "AX",
    "Azerbaijan": "AZ",
    "Bosnia and Herzegovina": "BA",
    "Barbados": "BB",
    "Bangladesh": "BD",
    "Belgium": "BE",
    "Burkina Faso": "BF",
    "Bulgaria": "BG",
    "Bahrain": "BH",
    "Burundi": "BI",
    "Benin": "BJ",
    "Saint Barthlemy": "BL",
    "Bermuda": "BM",
    "Brunei Darussalam": "BN",
    "Bolivia (Plurinational State of)": "BO",
    "Bonaire, Sint Eustatius and Saba": "BQ",
    "Brazil": "BR",
    "Bahamas": "BS",
    "Bhutan": "BT",
    "Bouvet Island": "BV",
    "Botswana": "BW",
    "Belarus": "BY",
    "Belize": "BZ",
    "Canada": "CA",
    "Cocos (Keeling) Islands": "CC",
    "Congo, Democratic Republic of the": "CD",
    "Central African Republic": "CF",
    "Congo": "CG",
    "Switzerland": "CH",
    "Cte d'Ivoire": "CI",
    "Cook Islands": "CK",
    "Chile": "CL",
    "Cameroon": "CM",
    "China": "CN",
    "Colombia": "CO",
    "Costa Rica": "CR",
    "Cuba": "CU",
    "Cabo Verde": "CV",
    "Curaao": "CW",
    "Christmas Island": "CX",
    "Cyprus": "CY",
    "Czechia": "CZ",
    "Germany": "DE",
    "Djibouti": "DJ",
    "Denmark": "DK",
    "Dominica": "DM",
    "Dominican Republic": "DO",
    "Algeria": "DZ",
    "Ecuador": "EC",
    "Estonia": "EE",
    "Egypt": "EG",
    "Western Sahara": "EH",
    "Eritrea": "ER",
    "Spain": "ES",
    "Ethiopia": "ET",
    "Finland": "FI",
    "Fiji": "FJ",
    "Falkland Islands (Malvinas)": "FK",
    "Micronesia (Federated States of)": "FM",
    "Faroe Islands": "FO",
    "France": "FR",
    "Gabon": "GA",
    "United Kingdom of Great Britain and Northern Ireland": "GB",
    "Grenada": "GD",
    "Georgia": "GE",
    "French Guiana": "GF",
    "Guernsey": "GG",
    "Ghana": "GH",
    "Gibraltar": "GI",
    "Greenland": "GL",
    "Gambia": "GM",
    "Guinea": "GN",
    "Guadeloupe": "GP",
    "Equatorial Guinea": "GQ",
    "Greece": "GR",
    "South Georgia and the South Sandwich Islands": "GS",
    "Guatemala": "GT",
    "Guam": "GU",
    "Guinea-Bissau": "GW",
    "Guyana": "GY",
    "Hong Kong": "HK",
    "Heard Island and McDonald Islands": "HM",
    "Honduras": "HN",
    "Croatia": "HR",
    "Haiti": "HT",
    "Hungary": "HU",
    "Indonesia": "ID",
    "Ireland": "IE",
    "Israel": "IL",
    "Isle of Man": "IM",
    "India": "IN",
    "British Indian Ocean Territory": "IO",
    "Iraq": "IQ",
    "Iran (Islamic Republic of)": "IR",
    "Iceland": "IS",
    "Italy": "IT",
    "Jersey": "JE",
    "Jamaica": "JM",
    "Jordan": "JO",
    "Japan": "JP",
    "Kenya": "KE",
    "Kyrgyzstan": "KG",
    "Cambodia": "KH",
    "Kiribati": "KI",
    "Comoros": "KM",
    "Saint Kitts and Nevis": "KN",
    "Korea (Democratic People's Republic of)": "KP",
    "Korea, Republic of": "KR",
    "Kuwait": "KW",
    "Cayman Islands": "KY",
    "Kazakhstan": "KZ",
    "Lao People's Democratic Republic": "LA",
    "Lebanon": "LB",
    "Saint Lucia": "LC",
    "Liechtenstein": "LI",
    "Sri Lanka": "LK",
    "Liberia": "LR",
    "Lesotho": "LS",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Latvia": "LV",
    "Libya": "LY",
    "Morocco": "MA",
    "Monaco": "MC",
    "Moldova, Republic of": "MD",
    "Montenegro": "ME",
    "Saint Martin (French part)": "MF",
    "Madagascar": "MG",
    "Marshall Islands": "MH",
    "North Macedonia": "MK",
    "Mali": "ML",
    "Myanmar": "MM",
    "Mongolia": "MN",
    "Macao": "MO",
    "Northern Mariana Islands": "MP",
    "Martinique": "MQ",
    "Mauritania": "MR",
    "Montserrat": "MS",
    "Malta": "MT",
    "Mauritius": "MU",
    "Maldives": "MV",
    "Malawi": "MW",
    "Mexico": "MX",
    "Malaysia": "MY",
    "Mozambique": "MZ",
    "Namibia": "NA",
    "New Caledonia": "NC",
    "Niger": "NE",
    "Norfolk Island": "NF",
    "Nigeria": "NG",
    "Nicaragua": "NI",
    "Netherlands": "NL",
    "Norway": "NO",
    "Nepal": "NP",
    "Nauru": "NR",
    "Niue": "NU",
    "New Zealand": "NZ",
    "Oman": "OM",
    "Panama": "PA",
    "Peru": "PE",
    "French Polynesia": "PF",
    "Papua New Guinea": "PG",
    "Philippines": "PH",
    "Pakistan": "PK",
    "Poland": "PL",
    "Saint Pierre and Miquelon": "PM",
    "Pitcairn": "PN",
    "Puerto Rico": "PR",
    "Palestine, State of": "PS",
    "Portugal": "PT",
    "Palau": "PW",
    "Paraguay": "PY",
    "Qatar": "QA",
    "Runion": "RE",
    "Romania": "RO",
    "Serbia": "RS",
    "Russian Federation": "RU",
    "Rwanda": "RW",
    "Saudi Arabia": "SA",
    "Solomon Islands": "SB",
    "Seychelles": "SC",
    "Sudan": "SD",
    "Sweden": "SE",
    "Singapore": "SG",
    "Saint Helena, Ascension and Tristan da Cunha": "SH",
    "Slovenia": "SI",
    "Svalbard and Jan Mayen": "SJ",
    "Slovakia": "SK",
    "Sierra Leone": "SL",
    "San Marino": "SM",
    "Senegal": "SN",
    "Somalia": "SO",
    "Suriname": "SR",
    "South Sudan": "SS",
    "Sao Tome and Principe": "ST",
    "El Salvador": "SV",
    "Sint Maarten (Dutch part)": "SX",
    "Syrian Arab Republic": "SY",
    "Eswatini": "SZ",
    "Turks and Caicos Islands": "TC",
    "Chad": "TD",
    "French Southern Territories": "TF",
    "Togo": "TG",
    "Thailand": "TH",
    "Tajikistan": "TJ",
    "Tokelau": "TK",
    "Timor-Leste": "TL",
    "Turkmenistan": "TM",
    "Tunisia": "TN",
    "Tonga": "TO",
    "Turkey": "TR",
    "Trinidad and Tobago": "TT",
    "Tuvalu": "TV",
    "Taiwan, Province of China": "TW",
    "Tanzania, United Republic of": "TZ",
    "Ukraine": "UA",
    "Uganda": "UG",
    "United States Minor Outlying Islands": "UM",
    "United States of America": "US",
    "Uruguay": "UY",
    "Uzbekistan": "UZ",
    "Holy See": "VA",
    "Saint Vincent and the Grenadines": "VC",
    "Venezuela (Bolivarian Republic of)": "VE",
    "Virgin Islands (British)": "VG",
    "Virgin Islands (U.S.)": "VI",
    "Viet Nam": "VN",
    "Vanuatu": "VU",
    "Wallis and Futuna": "WF",
    "Samoa": "WS",
    "Yemen": "YE",
    "Mayotte": "YT",
    "South Africa": "ZA",
    "Zambia": "ZM",
    "Zimbabwe": "ZW"
};

export var countries = ["Afghanistan","Albania","Andorra","Angola","Argentina","Armenia","Aruba","Australia","Austria",
"Azerbaijan","Bahamas","Bahrain","Bangladesh","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina",
"Brazil","British Virgin Islands","Bulgaria","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China",
"Colombia","Costa Rica","Croatia","Cte d'Ivoire","Cuba","Cyprus","Czech Republic","Denmark","Denmark","Djibouti","Dominica",
"Ecuador","Egypt","Estonia","Ethiopia","Fiji","Finland","France","Gambia","Georgia","Germany","Ghana","Greece","Haiti","Honduras",
"Honk Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
"Kenya","Latvia","Lebanon","Liberia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malaysia","Maldives","Mali",
"Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Netherlands",
"New Zealand","Nigeria","Norway","Oman","Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico",
"Qatar","Random Country","Romania","Russia","Saudi Arabia","Saudi Arabia","Senegal","Serbia","Seychelles","Singapore","Slovakia",
"Slovenia","South Africa","South Korea","South Sudan","Spain","Sudan","Sweden","Switzerland","Taiwan","Thailand","Togo",
"Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","UAE","USA","Uganda","Ukraine","United Kingdom","Uruguay",
"Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

export var countryInfo = {
    "Random Country": {
      "countryName": "Random Country",
      "entryPoint": "pr.oxylabs.io",
      "port": "7777",
      "completeUrl": "pr.oxylabs.io:7777"
    },
    "USA": {
      "countryName": "USA",
      "entryPoint": "us-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "us-pr.oxylabs.io:10000"
    },
    "Canada": {
      "countryName": "Canada",
      "entryPoint": "ca-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "ca-pr.oxylabs.io:30000"
    },
    "United Kingdom": {
      "countryName": "United Kingdom",
      "entryPoint": "gb-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "gb-pr.oxylabs.io:20000"
    },
    "Germany": {
      "countryName": "Germany",
      "entryPoint": "de-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "de-pr.oxylabs.io:30000"
    },
    "France": {
      "countryName": "France",
      "entryPoint": "fr-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "fr-pr.oxylabs.io:40000"
    },
    "Spain": {
      "countryName": "Spain",
      "entryPoint": "es-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "es-pr.oxylabs.io:10000"
    },
    "Italy": {
      "countryName": "Italy",
      "entryPoint": "it-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "it-pr.oxylabs.io:20000"
    },
    "Sweden": {
      "countryName": "Sweden",
      "entryPoint": "se-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "se-pr.oxylabs.io:30000"
    },
    "Greece": {
      "countryName": "Greece",
      "entryPoint": "gr-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "gr-pr.oxylabs.io:40000"
    },
    "Portugal": {
      "countryName": "Portugal",
      "entryPoint": "pt-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "pt-pr.oxylabs.io:10000"
    },
    "Netherlands": {
      "countryName": "Netherlands",
      "entryPoint": "nl-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "nl-pr.oxylabs.io:20000"
    },
    "Belgium": {
      "countryName": "Belgium",
      "entryPoint": "be-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "be-pr.oxylabs.io:30000"
    },
    "Russia": {
      "countryName": "Russia",
      "entryPoint": "ru-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "ru-pr.oxylabs.io:40000"
    },
    "Ukraine": {
      "countryName": "Ukraine",
      "entryPoint": "ua-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "ua-pr.oxylabs.io:10000"
    },
    "Poland": {
      "countryName": "Poland",
      "entryPoint": "pl-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "pl-pr.oxylabs.io:20000"
    },
    "Israel": {
      "countryName": "Israel",
      "entryPoint": "il-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "il-pr.oxylabs.io:20000"
    },
    "Turkey": {
      "countryName": "Turkey",
      "entryPoint": "tr-pr.oxylabs.io",
      "port": "3000",
      "completeUrl": "tr-pr.oxylabs.io:3000"
    },
    "Australia": {
      "countryName": "Australia",
      "entryPoint": "au-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "au-pr.oxylabs.io:40000"
    },
    "Malaysia": {
      "countryName": "Malaysia",
      "entryPoint": "my-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "my-pr.oxylabs.io:10000"
    },
    "Thailand": {
      "countryName": "Thailand",
      "entryPoint": "th-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "th-pr.oxylabs.io:20000"
    },
    "South Korea": {
      "countryName": "South Korea",
      "entryPoint": "kr-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "kr-pr.oxylabs.io:30000"
    },
    "Japan": {
      "countryName": "Japan",
      "entryPoint": "jp-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "jp-pr.oxylabs.io:40000"
    },
    "Philippines": {
      "countryName": "Philippines",
      "entryPoint": "ph-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "ph-pr.oxylabs.io:10000"
    },
    "Singapore": {
      "countryName": "Singapore",
      "entryPoint": "sg-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "sg-pr.oxylabs.io:20000"
    },
    "China": {
      "countryName": "China",
      "entryPoint": "cn-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "cn-pr.oxylabs.io:30000"
    },
    "Honk Kong": {
      "countryName": "Honk Kong",
      "entryPoint": "hk-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "hk-pr.oxylabs.io:40000"
    },
    "Taiwan": {
      "countryName": "Taiwan",
      "entryPoint": "tw-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "tw-pr.oxylabs.io:10000"
    },
    "India": {
      "countryName": "India",
      "entryPoint": "in-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "in-pr.oxylabs.io:20000"
    },
    "Pakistan": {
      "countryName": "Pakistan",
      "entryPoint": "pk-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "pk-pr.oxylabs.io:30000"
    },
    "Iran": {
      "countryName": "Iran",
      "entryPoint": "ir-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "ir-pr.oxylabs.io:40000"
    },
    "Indonesia": {
      "countryName": "Indonesia",
      "entryPoint": "id-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "id-pr.oxylabs.io:10000"
    },
    "Azerbaijan": {
      "countryName": "Azerbaijan",
      "entryPoint": "az-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "az-pr.oxylabs.io:20000"
    },
    "Kazakhstan": {
      "countryName": "Kazakhstan",
      "entryPoint": "kz-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "kz-pr.oxylabs.io:30000"
    },
    "UAE": {
      "countryName": "UAE",
      "entryPoint": "ae-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "ae-pr.oxylabs.io:40000"
    },
    "Mexico": {
      "countryName": "Mexico",
      "entryPoint": "mx-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "mx-pr.oxylabs.io:10000"
    },
    "Brazil": {
      "countryName": "Brazil",
      "entryPoint": "br-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "br-pr.oxylabs.io:20000"
    },
    "Argentina": {
      "countryName": "Argentina",
      "entryPoint": "ar-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "ar-pr.oxylabs.io:30000"
    },
    "Chile": {
      "countryName": "Chile",
      "entryPoint": "cl-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "cl-pr.oxylabs.io:40000"
    },
    "Peru": {
      "countryName": "Peru",
      "entryPoint": "pe-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "pe-pr.oxylabs.io:10000"
    },
    "Ecuador": {
      "countryName": "Ecuador",
      "entryPoint": "ec-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "ec-pr.oxylabs.io:20000"
    },
    "Colombia": {
      "countryName": "Colombia",
      "entryPoint": "co-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "co-pr.oxylabs.io:30000"
    },
    "South Africa": {
      "countryName": "South Africa",
      "entryPoint": "za-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "za-pr.oxylabs.io:40000"
    },
    "Egypt": {
      "countryName": "Egypt",
      "entryPoint": "eg-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "eg-pr.oxylabs.io:10000"
    },
    "Saudi Arabia": {
      "countryName": "Saudi Arabia",
      "entryPoint": "sa-pr.oxylabs.io",
      "port": "44000",
      "completeUrl": "sa-pr.oxylabs.io:44000"
    },
    "Denmark": {
      "countryName": "Denmark",
      "entryPoint": "dk-pr.oxylabs.io",
      "port": "19000",
      "completeUrl": "dk-pr.oxylabs.io:19000"
    },
    "Angola": {
      "countryName": "Angola",
      "entryPoint": "ao-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "ao-pr.oxylabs.io:40000"
    },
    "Cameroon": {
      "countryName": "Cameroon",
      "entryPoint": "cm-pr.oxylabs.io",
      "port": "41000",
      "completeUrl": "cm-pr.oxylabs.io:41000"
    },
    "Central African Republic": {
      "countryName": "Central African Republic",
      "entryPoint": "cf-pr.oxylabs.io",
      "port": "42000",
      "completeUrl": "cf-pr.oxylabs.io:42000"
    },
    "Chad": {
      "countryName": "Chad",
      "entryPoint": "td-pr.oxylabs.io",
      "port": "43000",
      "completeUrl": "td-pr.oxylabs.io:43000"
    },
    "Benin": {
      "countryName": "Benin",
      "entryPoint": "bj-pr.oxylabs.io",
      "port": "44000",
      "completeUrl": "bj-pr.oxylabs.io:44000"
    },
    "Ethiopia": {
      "countryName": "Ethiopia",
      "entryPoint": "et-pr.oxylabs.io",
      "port": "45000",
      "completeUrl": "et-pr.oxylabs.io:45000"
    },
    "Djibouti": {
      "countryName": "Djibouti",
      "entryPoint": "dj-pr.oxylabs.io",
      "port": "46000",
      "completeUrl": "dj-pr.oxylabs.io:46000"
    },
    "Gambia": {
      "countryName": "Gambia",
      "entryPoint": "gm-pr.oxylabs.io",
      "port": "47000",
      "completeUrl": "gm-pr.oxylabs.io:47000"
    },
    "Ghana": {
      "countryName": "Ghana",
      "entryPoint": "gh-pr.oxylabs.io",
      "port": "48000",
      "completeUrl": "gh-pr.oxylabs.io:48000"
    },
    "Cte d'Ivoire": {
      "countryName": "Cte d'Ivoire",
      "entryPoint": "ci-pr.oxylabs.io",
      "port": "49000",
      "completeUrl": "ci-pr.oxylabs.io:49000"
    },
    "Kenya": {
      "countryName": "Kenya",
      "entryPoint": "ke-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "ke-pr.oxylabs.io:10000"
    },
    "Liberia": {
      "countryName": "Liberia",
      "entryPoint": "lr-pr.oxylabs.io",
      "port": "11000",
      "completeUrl": "lr-pr.oxylabs.io:11000"
    },
    "Madagascar": {
      "countryName": "Madagascar",
      "entryPoint": "mg-pr.oxylabs.io",
      "port": "12000",
      "completeUrl": "mg-pr.oxylabs.io:12000"
    },
    "Mali": {
      "countryName": "Mali",
      "entryPoint": "ml-pr.oxylabs.io",
      "port": "13000",
      "completeUrl": "ml-pr.oxylabs.io:13000"
    },
    "Mauritania": {
      "countryName": "Mauritania",
      "entryPoint": "mr-pr.oxylabs.io",
      "port": "14000",
      "completeUrl": "mr-pr.oxylabs.io:14000"
    },
    "Mauritius": {
      "countryName": "Mauritius",
      "entryPoint": "mu-pr.oxylabs.io",
      "port": "15000",
      "completeUrl": "mu-pr.oxylabs.io:15000"
    },
    "Morocco": {
      "countryName": "Morocco",
      "entryPoint": "ma-pr.oxylabs.io",
      "port": "16000",
      "completeUrl": "ma-pr.oxylabs.io:16000"
    },
    "Mozambique": {
      "countryName": "Mozambique",
      "entryPoint": "mz-pr.oxylabs.io",
      "port": "17000",
      "completeUrl": "mz-pr.oxylabs.io:17000"
    },
    "Nigeria": {
      "countryName": "Nigeria",
      "entryPoint": "ng-pr.oxylabs.io",
      "port": "18000",
      "completeUrl": "ng-pr.oxylabs.io:18000"
    },
    "Senegal": {
      "countryName": "Senegal",
      "entryPoint": "sn-pr.oxylabs.io",
      "port": "19000",
      "completeUrl": "sn-pr.oxylabs.io:19000"
    },
    "Seychelles": {
      "countryName": "Seychelles",
      "entryPoint": "sc-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "sc-pr.oxylabs.io:20000"
    },
    "Zimbabwe": {
      "countryName": "Zimbabwe",
      "entryPoint": "zw-pr.oxylabs.io",
      "port": "21000",
      "completeUrl": "zw-pr.oxylabs.io:21000"
    },
    "South Sudan": {
      "countryName": "South Sudan",
      "entryPoint": "ss-pr.oxylabs.io",
      "port": "22000",
      "completeUrl": "ss-pr.oxylabs.io:22000"
    },
    "Sudan": {
      "countryName": "Sudan",
      "entryPoint": "sd-pr.oxylabs.io",
      "port": "23000",
      "completeUrl": "sd-pr.oxylabs.io:23000"
    },
    "Togo": {
      "countryName": "Togo",
      "entryPoint": "tg-pr.oxylabs.io",
      "port": "24000",
      "completeUrl": "tg-pr.oxylabs.io:24000"
    },
    "Tunisia": {
      "countryName": "Tunisia",
      "entryPoint": "tn-pr.oxylabs.io",
      "port": "25000",
      "completeUrl": "tn-pr.oxylabs.io:25000"
    },
    "Uganda": {
      "countryName": "Uganda",
      "entryPoint": "ug-pr.oxylabs.io",
      "port": "26000",
      "completeUrl": "ug-pr.oxylabs.io:26000"
    },
    "Zambia": {
      "countryName": "Zambia",
      "entryPoint": "zm-pr.oxylabs.io",
      "port": "27000",
      "completeUrl": "zm-pr.oxylabs.io:27000"
    },
    "Afghanistan": {
      "countryName": "Afghanistan",
      "entryPoint": "af-pr.oxylabs.io",
      "port": "28000",
      "completeUrl": "af-pr.oxylabs.io:28000"
    },
    "Bahrain": {
      "countryName": "Bahrain",
      "entryPoint": "bh-pr.oxylabs.io",
      "port": "29000",
      "completeUrl": "bh-pr.oxylabs.io:29000"
    },
    "Bangladesh": {
      "countryName": "Bangladesh",
      "entryPoint": "bd-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "bd-pr.oxylabs.io:30000"
    },
    "Armenia": {
      "countryName": "Armenia",
      "entryPoint": "am-pr.oxylabs.io",
      "port": "31000",
      "completeUrl": "am-pr.oxylabs.io:31000"
    },
    "Bhutan": {
      "countryName": "Bhutan",
      "entryPoint": "bt-pr.oxylabs.io",
      "port": "32000",
      "completeUrl": "bt-pr.oxylabs.io:32000"
    },
    "Myanmar": {
      "countryName": "Myanmar",
      "entryPoint": "mm-pr.oxylabs.io",
      "port": "33000",
      "completeUrl": "mm-pr.oxylabs.io:33000"
    },
    "Cambodia": {
      "countryName": "Cambodia",
      "entryPoint": "kh-pr.oxylabs.io",
      "port": "34000",
      "completeUrl": "kh-pr.oxylabs.io:34000"
    },
    "Georgia": {
      "countryName": "Georgia",
      "entryPoint": "ge-pr.oxylabs.io",
      "port": "36000",
      "completeUrl": "ge-pr.oxylabs.io:36000"
    },
    "Iraq": {
      "countryName": "Iraq",
      "entryPoint": "iq-pr.oxylabs.io",
      "port": "37000",
      "completeUrl": "iq-pr.oxylabs.io:37000"
    },
    "Jordan": {
      "countryName": "Jordan",
      "entryPoint": "jo-pr.oxylabs.io",
      "port": "38000",
      "completeUrl": "jo-pr.oxylabs.io:38000"
    },
    "Lebanon": {
      "countryName": "Lebanon",
      "entryPoint": "lb-pr.oxylabs.io",
      "port": "39000",
      "completeUrl": "lb-pr.oxylabs.io:39000"
    },
    "Maldives": {
      "countryName": "Maldives",
      "entryPoint": "mv-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "mv-pr.oxylabs.io:40000"
    },
    "Mongolia": {
      "countryName": "Mongolia",
      "entryPoint": "mn-pr.oxylabs.io",
      "port": "41000",
      "completeUrl": "mn-pr.oxylabs.io:41000"
    },
    "Oman": {
      "countryName": "Oman",
      "entryPoint": "om-pr.oxylabs.io",
      "port": "42000",
      "completeUrl": "om-pr.oxylabs.io:42000"
    },
    "Qatar": {
      "countryName": "Qatar",
      "entryPoint": "qa-pr.oxylabs.io",
      "port": "43000",
      "completeUrl": "qa-pr.oxylabs.io:43000"
    },
    "Vietnam": {
      "countryName": "Vietnam",
      "entryPoint": "vn-pr.oxylabs.io",
      "port": "45000",
      "completeUrl": "vn-pr.oxylabs.io:45000"
    },
    "Turkmenistan": {
      "countryName": "Turkmenistan",
      "entryPoint": "tm-pr.oxylabs.io",
      "port": "46000",
      "completeUrl": "tm-pr.oxylabs.io:46000"
    },
    "Uzbekistan": {
      "countryName": "Uzbekistan",
      "entryPoint": "uz-pr.oxylabs.io",
      "port": "47000",
      "completeUrl": "uz-pr.oxylabs.io:47000"
    },
    "Yemen": {
      "countryName": "Yemen",
      "entryPoint": "ye-pr.oxylabs.io",
      "port": "48000",
      "completeUrl": "ye-pr.oxylabs.io:48000"
    },
    "Albania": {
      "countryName": "Albania",
      "entryPoint": "al-pr.oxylabs.io",
      "port": "49000",
      "completeUrl": "al-pr.oxylabs.io:49000"
    },
    "Andorra": {
      "countryName": "Andorra",
      "entryPoint": "ad-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "ad-pr.oxylabs.io:10000"
    },
    "Austria": {
      "countryName": "Austria",
      "entryPoint": "at-pr.oxylabs.io",
      "port": "11000",
      "completeUrl": "at-pr.oxylabs.io:11000"
    },
    "Bosnia and Herzegovina": {
      "countryName": "Bosnia and Herzegovina",
      "entryPoint": "ba-pr.oxylabs.io",
      "port": "13000",
      "completeUrl": "ba-pr.oxylabs.io:13000"
    },
    "Bulgaria": {
      "countryName": "Bulgaria",
      "entryPoint": "bg-pr.oxylabs.io",
      "port": "14000",
      "completeUrl": "bg-pr.oxylabs.io:14000"
    },
    "Belarus": {
      "countryName": "Belarus",
      "entryPoint": "by-pr.oxylabs.io",
      "port": "15000",
      "completeUrl": "by-pr.oxylabs.io:15000"
    },
    "Croatia": {
      "countryName": "Croatia",
      "entryPoint": "hr-pr.oxylabs.io",
      "port": "16000",
      "completeUrl": "hr-pr.oxylabs.io:16000"
    },
    "Cyprus": {
      "countryName": "Cyprus",
      "entryPoint": "cy-pr.oxylabs.io",
      "port": "35000",
      "completeUrl": "cy-pr.oxylabs.io:35000"
    },
    "Czech Republic": {
      "countryName": "Czech Republic",
      "entryPoint": "cz-pr.oxylabs.io",
      "port": "18000",
      "completeUrl": "cz-pr.oxylabs.io:18000"
    },
    "Estonia": {
      "countryName": "Estonia",
      "entryPoint": "ee-pr.oxylabs.io",
      "port": "20000",
      "completeUrl": "ee-pr.oxylabs.io:20000"
    },
    "Finland": {
      "countryName": "Finland",
      "entryPoint": "fi-pr.oxylabs.io",
      "port": "21000",
      "completeUrl": "fi-pr.oxylabs.io:21000"
    },
    "Hungary": {
      "countryName": "Hungary",
      "entryPoint": "hu-pr.oxylabs.io",
      "port": "23000",
      "completeUrl": "hu-pr.oxylabs.io:23000"
    },
    "Iceland": {
      "countryName": "Iceland",
      "entryPoint": "is-pr.oxylabs.io",
      "port": "24000",
      "completeUrl": "is-pr.oxylabs.io:24000"
    },
    "Ireland": {
      "countryName": "Ireland",
      "entryPoint": "ie-pr.oxylabs.io",
      "port": "25000",
      "completeUrl": "ie-pr.oxylabs.io:25000"
    },
    "Latvia": {
      "countryName": "Latvia",
      "entryPoint": "lv-pr.oxylabs.io",
      "port": "26000",
      "completeUrl": "lv-pr.oxylabs.io:26000"
    },
    "Liechtenstein": {
      "countryName": "Liechtenstein",
      "entryPoint": "li-pr.oxylabs.io",
      "port": "27000",
      "completeUrl": "li-pr.oxylabs.io:27000"
    },
    "Lithuania": {
      "countryName": "Lithuania",
      "entryPoint": "lt-pr.oxylabs.io",
      "port": "28000",
      "completeUrl": "lt-pr.oxylabs.io:28000"
    },
    "Luxembourg": {
      "countryName": "Luxembourg",
      "entryPoint": "lu-pr.oxylabs.io",
      "port": "29000",
      "completeUrl": "lu-pr.oxylabs.io:29000"
    },
    "Malta": {
      "countryName": "Malta",
      "entryPoint": "mt-pr.oxylabs.io",
      "port": "30000",
      "completeUrl": "mt-pr.oxylabs.io:30000"
    },
    "Monaco": {
      "countryName": "Monaco",
      "entryPoint": "mc-pr.oxylabs.io",
      "port": "31000",
      "completeUrl": "mc-pr.oxylabs.io:31000"
    },
    "Moldova": {
      "countryName": "Moldova",
      "entryPoint": "md-pr.oxylabs.io",
      "port": "32000",
      "completeUrl": "md-pr.oxylabs.io:32000"
    },
    "Montenegro": {
      "countryName": "Montenegro",
      "entryPoint": "me-pr.oxylabs.io",
      "port": "33000",
      "completeUrl": "me-pr.oxylabs.io:33000"
    },
    "Norway": {
      "countryName": "Norway",
      "entryPoint": "no-pr.oxylabs.io",
      "port": "34000",
      "completeUrl": "no-pr.oxylabs.io:34000"
    },
    "Romania": {
      "countryName": "Romania",
      "entryPoint": "ro-pr.oxylabs.io",
      "port": "35000",
      "completeUrl": "ro-pr.oxylabs.io:35000"
    },
    "Serbia": {
      "countryName": "Serbia",
      "entryPoint": "rs-pr.oxylabs.io",
      "port": "36000",
      "completeUrl": "rs-pr.oxylabs.io:36000"
    },
    "Slovakia": {
      "countryName": "Slovakia",
      "entryPoint": "sk-pr.oxylabs.io",
      "port": "37000",
      "completeUrl": "sk-pr.oxylabs.io:37000"
    },
    "Slovenia": {
      "countryName": "Slovenia",
      "entryPoint": "si-pr.oxylabs.io",
      "port": "38000",
      "completeUrl": "si-pr.oxylabs.io:38000"
    },
    "Switzerland": {
      "countryName": "Switzerland",
      "entryPoint": "ch-pr.oxylabs.io",
      "port": "39000",
      "completeUrl": "ch-pr.oxylabs.io:39000"
    },
    "Macedonia": {
      "countryName": "Macedonia",
      "entryPoint": "mk-pr.oxylabs.io",
      "port": "40000",
      "completeUrl": "mk-pr.oxylabs.io:40000"
    },
    "Bahamas": {
      "countryName": "Bahamas",
      "entryPoint": "bs-pr.oxylabs.io",
      "port": "41000",
      "completeUrl": "bs-pr.oxylabs.io:41000"
    },
    "Belize": {
      "countryName": "Belize",
      "entryPoint": "bz-pr.oxylabs.io",
      "port": "42000",
      "completeUrl": "bz-pr.oxylabs.io:42000"
    },
    "British Virgin Islands": {
      "countryName": "British Virgin Islands",
      "entryPoint": "vg-pr.oxylabs.io",
      "port": "43000",
      "completeUrl": "vg-pr.oxylabs.io:43000"
    },
    "Costa Rica": {
      "countryName": "Costa Rica",
      "entryPoint": "cr-pr.oxylabs.io",
      "port": "44000",
      "completeUrl": "cr-pr.oxylabs.io:44000"
    },
    "Cuba": {
      "countryName": "Cuba",
      "entryPoint": "cu-pr.oxylabs.io",
      "port": "45000",
      "completeUrl": "cu-pr.oxylabs.io:45000"
    },
    "Dominica": {
      "countryName": "Dominica",
      "entryPoint": "dm-pr.oxylabs.io",
      "port": "46000",
      "completeUrl": "dm-pr.oxylabs.io:46000"
    },
    "Haiti": {
      "countryName": "Haiti",
      "entryPoint": "ht-pr.oxylabs.io",
      "port": "47000",
      "completeUrl": "ht-pr.oxylabs.io:47000"
    },
    "Honduras": {
      "countryName": "Honduras",
      "entryPoint": "hn-pr.oxylabs.io",
      "port": "48000",
      "completeUrl": "hn-pr.oxylabs.io:48000"
    },
    "Jamaica": {
      "countryName": "Jamaica",
      "entryPoint": "jm-pr.oxylabs.io",
      "port": "49000",
      "completeUrl": "jm-pr.oxylabs.io:49000"
    },
    "Aruba": {
      "countryName": "Aruba",
      "entryPoint": "aw-pr.oxylabs.io",
      "port": "10000",
      "completeUrl": "aw-pr.oxylabs.io:10000"
    },
    "Panama": {
      "countryName": "Panama",
      "entryPoint": "pa-pr.oxylabs.io",
      "port": "11000",
      "completeUrl": "pa-pr.oxylabs.io:11000"
    },
    "Puerto Rico": {
      "countryName": "Puerto Rico",
      "entryPoint": "pr-pr.oxylabs.io",
      "port": "12000",
      "completeUrl": "pr-pr.oxylabs.io:12000"
    },
    "Trinidad and Tobago": {
      "countryName": "Trinidad and Tobago",
      "entryPoint": "tt-pr.oxylabs.io",
      "port": "13000",
      "completeUrl": "tt-pr.oxylabs.io:13000"
    },
    "Fiji": {
      "countryName": "Fiji",
      "entryPoint": "fj-pr.oxylabs.io",
      "port": "14000",
      "completeUrl": "fj-pr.oxylabs.io:14000"
    },
    "New Zealand": {
      "countryName": "New Zealand",
      "entryPoint": "nz-pr.oxylabs.io",
      "port": "15000",
      "completeUrl": "nz-pr.oxylabs.io:15000"
    },
    "Bolivia": {
      "countryName": "Bolivia",
      "entryPoint": "bo-pr.oxylabs.io",
      "port": "16000",
      "completeUrl": "bo-pr.oxylabs.io:16000"
    },
    "Paraguay": {
      "countryName": "Paraguay",
      "entryPoint": "py-pr.oxylabs.io",
      "port": "17000",
      "completeUrl": "py-pr.oxylabs.io:17000"
    },
    "Uruguay": {
      "countryName": "Uruguay",
      "entryPoint": "uy-pr.oxylabs.io",
      "port": "18000",
      "completeUrl": "uy-pr.oxylabs.io:18000"
    },
    "Venezuela": {
      "countryName": "Venezuela",
      "entryPoint": "ve-pr.oxylabs.io",
      "port": "19000",
      "completeUrl": "ve-pr.oxylabs.io:19000"
    }
}