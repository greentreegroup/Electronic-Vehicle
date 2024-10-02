//import { Car } from "./types";

//export const carBrands: string[] = [
//  "Audi",
//  "BMW",
//  "BYD",
//  "Chevrolet",
//  "Ford",
//  "Hyundai",
//  "Kia",
//  "Mercedes-Benz",
//  "MG",
//  "Nissan",
//  "Porsche",
//  "Tesla",
//  "Volkswagen",
//  "Volvo",
//];
//
//export const data: Car[] = [
//  {
//    id: "1",
//    brand: "Audi",
//    model: "e-tron",
//    price: 74999,
//    usable_battery: 95.0,
//    real_range: 350,
//    efficiency: 220,
//    acceleration: 5.5,
//    top_speed: 180,
//    year: 2021,
//    image: "Audi_e-tron.jpg",
//  },
//  {
//    id: "2",
//    brand: "BMW",
//    model: "i3",
//    price: 44450,
//    usable_battery: 42.2,
//    real_range: 246,
//    efficiency: 120,
//    acceleration: 6.9,
//    top_speed: 150,
//    year: 2019,
//    image: "BMW_i3.jpg",
//  },
//  {
//    id: "3",
//    brand: "BMW",
//    model: "iX",
//    price: 69905,
//    usable_battery: 71.0,
//    real_range: 360,
//    efficiency: 197,
//    acceleration: 6.1,
//    top_speed: 200,
//    year: 2021,
//    image: "BMW_iX.jpg",
//  },
//  {
//    id: "4",
//    brand: "BYD",
//    model: "Atto 3",
//    price: 37195,
//    usable_battery: 60.5,
//    real_range: 330,
//    efficiency: 183,
//    acceleration: 7.3,
//    top_speed: 160,
//    year: 2019,
//    image: "BYD_ATTO.jpg",
//  },
//  {
//    id: "5",
//    brand: "BYD",
//    model: "Dolphin",
//    price: 30195,
//    usable_battery: 60.5,
//    real_range: 350,
//    efficiency: 173,
//    acceleration: 7.0,
//    top_speed: 160,
//    year: 2023,
//    image: "BYD_DOLPHIN.jpg",
//  },
//  {
//    id: "6",
//    brand: "BYD",
//    model: "Seal",
//    price: 48695,
//    usable_battery: 82.5,
//    real_range: 445,
//    efficiency: 185,
//    acceleration: 3.8,
//    top_speed: 180,
//    year: 2023,
//    image: "BYD_SEAL.jpg",
//  },
//  {
//    id: "7",
//    brand: "BYD",
//    model: "TANG",
//    price: 69990,
//    usable_battery: 86.4,
//    real_range: 355,
//    efficiency: 243,
//    acceleration: 4.6,
//    top_speed: 180,
//    year: 2023,
//    image: "BYD_TANG-.jpg",
//  },
//  {
//    id: "8",
//    brand: "Chevrolet",
//    model: "Bolt EV",
//    price: 36995,
//    usable_battery: 66.0,
//    real_range: 259,
//    efficiency: 160,
//    acceleration: 6.5,
//    top_speed: 160,
//    year: 2019,
//    image: "Chevrolet_Bolt_EV.jpg",
//  },
//  {
//    id: "9",
//    brand: "Ford",
//    model: "Mustang Mach-E",
//    price: 52995,
//    usable_battery: 88.0,
//    real_range: 370,
//    efficiency: 200,
//    acceleration: 4.8,
//    top_speed: 180,
//    year: 2021,
//    image: "Ford_Mustang_Mach-E.jpg",
//  },
//  {
//    id: "10",
//    brand: "Hyundai",
//    model: "Kona Electric",
//    price: 39999,
//    usable_battery: 64.0,
//    real_range: 415,
//    efficiency: 140,
//    acceleration: 7.6,
//    top_speed: 155,
//    year: 2020,
//    image: "Hyundai_Kona_Electric.jpg",
//  },
//  {
//    id: "11",
//    brand: "Kia",
//    model: "EV3",
//    price: 35995,
//    usable_battery: 78.0,
//    real_range: 445,
//    efficiency: 171,
//    acceleration: 7.7,
//    top_speed: 170,
//    year: 2021,
//    image: "Kia_EV3.jpg",
//  },
//  {
//    id: "12",
//    brand: "Kia",
//    model: "Niro",
//    price: 37295,
//    usable_battery: 64.8,
//    real_range: 385,
//    efficiency: 168,
//    acceleration: 7.8,
//    top_speed: 167,
//    year: 2022,
//    image: "Kia-NiroEV.jpg",
//  },
//  {
//    id: "13",
//    brand: "Mercedes-Benz",
//    model: "EQC",
//    price: 67950,
//    usable_battery: 80.0,
//    real_range: 420,
//    efficiency: 160,
//    acceleration: 5.1,
//    top_speed: 180,
//    year: 2021,
//    image: "Mercedes-Benz_EQC.jpg",
//  },
//  {
//    id: "14",
//    brand: "MG",
//    model: "MG4 Electric 64",
//    price: 29495,
//    usable_battery: 61.7,
//    real_range: 360,
//    efficiency: 171,
//    acceleration: 7.9,
//    top_speed: 160,
//    year: 2022,
//    image: "MG_MG4_Electric.jpg",
//  },
//  {
//    id: "15",
//    brand: "Nissan",
//    model: "Leaf",
//    price: 29999,
//    usable_battery: 40.0,
//    real_range: 270,
//    efficiency: 180,
//    acceleration: 8.9,
//    top_speed: 150,
//    year: 2020,
//    image: "Nissan_Leaf.jpg",
//  },
//  {
//    id: "16",
//    brand: "Porsche",
//    model: "Taycan",
//    price: 104999,
//    usable_battery: 93.4,
//    real_range: 480,
//    efficiency: 175,
//    acceleration: 3.2,
//    top_speed: 260,
//    year: 2022,
//    image: "Porsche_Taycan.jpg",
//  },
//  {
//    id: "17",
//    brand: "Tesla",
//    model: "Model 3",
//    price: 39990,
//    usable_battery: 57.7,
//    real_range: 415,
//    efficiency: 139,
//    acceleration: 6.1,
//    top_speed: 201,
//    year: 2018,
//    image: "Tesla_Model_3.jpg",
//  },
//  {
//    id: "18",
//    brand: "Tesla",
//    model: "Model S",
//    price: 89999,
//    usable_battery: 100.0,
//    real_range: 600,
//    efficiency: 150,
//    acceleration: 2.5,
//    top_speed: 200,
//    year: 2022,
//    image: "Tesla_Model_S.jpg",
//  },
//  {
//    id: "19",
//    brand: "Tesla",
//    model: "Model Y Long Range",
//    price: 49990,
//    usable_battery: 75.0,
//    real_range: 460,
//    efficiency: 163,
//    acceleration: 5.9,
//    top_speed: 217,
//    year: 2022,
//    image: "Tesla_Model_Y_Long_Range.jpg",
//  },
//  {
//    id: "20",
//    brand: "Volkswagen",
//    model: "ID.4",
//    price: 44995,
//    usable_battery: 82.0,
//    real_range: 520,
//    efficiency: 130,
//    acceleration: 6.8,
//    top_speed: 160,
//    year: 2021,
//    image: "Volkswagen_ID.4.jpg",
//  },
//  {
//    id: "21",
//    brand: "Volvo",
//    model: "EX30 Single Motor ER",
//    price: 37050,
//    usable_battery: 64.0,
//    real_range: 360,
//    efficiency: 178,
//    acceleration: 5.3,
//    top_speed: 180,
//    year: 2023,
//    image: "Volvo_EX30.jpg",
//  },
//];

export const contactData = {
  title: "Location Name",
  address: "128A/19 Street Name",
  phone: "311 202 7323",
  email: "contact@carseller.com",
};


export const shippingRates = {
  "United States": { baseRate: 2750, weightMultiplier: 1 },
  Canada: { baseRate: 3200, weightMultiplier: 1.2 },
  "United Kingdom": { baseRate: 3500, weightMultiplier: 1.5 },
  Germany: { baseRate: 2000, weightMultiplier: 1.3 },
  Australia: { baseRate: 3500, weightMultiplier: 1.4 },
  default: { baseRate: 3000, weightMultiplier: 1.6 },
};

export const modelTypes = ["SUV", "Sedan", "Hatchback", "Van"]

export const countries =
{
 "AF": "Afghanistan",
 "AL": "Albania",
 "DZ": "Algeria",
 "AS": "American Samoa",
 "AD": "Andorra",
 "AO": "Angola",
 "AI": "Anguilla",
 "AQ": "Antarctica",
 "AG": "Antigua and Barbuda",
 "AR": "Argentina",
 "AM": "Armenia",
 "AW": "Aruba",
 "AU": "Australia",
 "AT": "Austria",
 "AZ": "Azerbaijan",
 "BS": "Bahamas",
 "BH": "Bahrain",
 "BD": "Bangladesh",
 "BB": "Barbados",
 "BY": "Belarus",
 "BE": "Belgium",
 "BZ": "Belize",
 "BJ": "Benin",
 "BM": "Bermuda",
 "BT": "Bhutan",
 "BO": "Bolivia",
 "BA": "Bosnia and Herzegovina",
 "BW": "Botswana",
 "BR": "Brazil",
 "BN": "Brunei",
 "BG": "Bulgaria",
 "BF": "Burkina Faso",
 "BI": "Burundi",
 "KH": "Cambodia",
 "CM": "Cameroon",
 "CA": "Canada",
 "CV": "Cape Verde",
 "KY": "Cayman Islands",
 "CF": "Central African Republic",
 "TD": "Chad",
 "CL": "Chile",
 "CN": "China",
 "CO": "Colombia",
 "KM": "Comoros",
 "CG": "Congo",
 "CD": "Congo (DRC)",
 "CR": "Costa Rica",
 "CI": "Côte d'Ivoire",
 "HR": "Croatia",
 "CU": "Cuba",
 "CY": "Cyprus",
 "CZ": "Czech Republic",
 "DK": "Denmark",
 "DJ": "Djibouti",
 "DM": "Dominica",
 "DO": "Dominican Republic",
 "EC": "Ecuador",
 "EG": "Egypt",
 "SV": "El Salvador",
 "GQ": "Equatorial Guinea",
 "ER": "Eritrea",
 "EE": "Estonia",
 "ET": "Ethiopia",
 "FJ": "Fiji",
 "FI": "Finland",
 "FR": "France",
 "GA": "Gabon",
 "GM": "Gambia",
 "GE": "Georgia",
 "DE": "Germany",
 "GH": "Ghana",
 "GR": "Greece",
 "GD": "Grenada",
 "GU": "Guam",
 "GT": "Guatemala",
 "GN": "Guinea",
 "GW": "Guinea-Bissau",
 "GY": "Guyana",
 "HT": "Haiti",
 "HN": "Honduras",
 "HU": "Hungary",
 "IS": "Iceland",
 "IN": "India",
 "ID": "Indonesia",
 "IR": "Iran",
 "IQ": "Iraq",
 "IE": "Ireland",
 "IL": "Israel",
 "IT": "Italy",
 "JM": "Jamaica",
 "JP": "Japan",
 "JO": "Jordan",
 "KZ": "Kazakhstan",
 "KE": "Kenya",
 "KI": "Kiribati",
 "KP": "North Korea",
 "KR": "South Korea",
 "KW": "Kuwait",
 "KG": "Kyrgyzstan",
 "LA": "Laos",
 "LV": "Latvia",
 "LB": "Lebanon",
 "LS": "Lesotho",
 "LR": "Liberia",
 "LY": "Libya",
 "LI": "Liechtenstein",
 "LT": "Lithuania",
 "LU": "Luxembourg",
 "MG": "Madagascar",
 "MW": "Malawi",
 "MY": "Malaysia",
 "MV": "Maldives",
 "ML": "Mali",
 "MT": "Malta",
 "MH": "Marshall Islands",
 "MR": "Mauritania",
 "MU": "Mauritius",
 "MX": "Mexico",
 "FM": "Micronesia",
 "MD": "Moldova",
 "MC": "Monaco",
 "MN": "Mongolia",
 "ME": "Montenegro",
 "MA": "Morocco",
 "MZ": "Mozambique",
 "MM": "Myanmar",
 "NA": "Namibia",
 "NR": "Nauru",
 "NP": "Nepal",
 "NL": "Netherlands",
 "NZ": "New Zealand",
 "NI": "Nicaragua",
 "NE": "Niger",
 "NG": "Nigeria",
 "NO": "Norway",
 "OM": "Oman",
 "PK": "Pakistan",
 "PW": "Palau",
 "PS": "Palestine",
 "PA": "Panama",
 "PG": "Papua New Guinea",
 "PY": "Paraguay",
 "PE": "Peru",
 "PH": "Philippines",
 "PL": "Poland",
 "PT": "Portugal",
 "QA": "Qatar",
 "RO": "Romania",
 "RU": "Russia",
 "RW": "Rwanda",
 "KN": "Saint Kitts and Nevis",
 "LC": "Saint Lucia",
 "VC": "Saint Vincent and the Grenadines",
 "WS": "Samoa",
 "SM": "San Marino",
 "ST": "São Tomé and Príncipe",
 "SA": "Saudi Arabia",
 "SN": "Senegal",
 "RS": "Serbia",
 "SC": "Seychelles",
 "SL": "Sierra Leone",
 "SG": "Singapore",
 "SK": "Slovakia",
 "SI": "Slovenia",
 "SB": "Solomon Islands",
 "SO": "Somalia",
 "ZA": "South Africa",
 "SS": "South Sudan",
 "ES": "Spain",
 "LK": "Sri Lanka",
 "SD": "Sudan",
 "SR": "Suriname",
 "SZ": "Swaziland",
 "SE": "Sweden",
 "CH": "Switzerland",
 "SY": "Syria",
 "TW": "Taiwan",
 "TJ": "Tajikistan",
 "TZ": "Tanzania",
 "TH": "Thailand",
 "TL": "Timor-Leste",
 "TG": "Togo",
 "TO": "Tonga",
 "TT": "Trinidad and Tobago",
 "TN": "Tunisia",
 "TR": "Turkey",
 "TM": "Turkmenistan",
 "TV": "Tuvalu",
 "UG": "Uganda",
 "UA": "Ukraine",
 "AE": "United Arab Emirates",
 "GB": "United Kingdom",
 "US": "United States",
 "UY": "Uruguay",
 "UZ": "Uzbekistan",
 "VU": "Vanuatu",
 "VE": "Venezuela",
 "VN": "Vietnam",
 "YE": "Yemen",
 "ZM": "Zambia",
 "ZW": "Zimbabwe",
}
