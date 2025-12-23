//Map country names to their abbreviated form for query forgiveness (uppercase, lowercase, mixed case...etc)
const countryMapping = {
  "Afghanistan": "AF",
  "Albania": "AL",
  "Algeria": "DZ",
  "American Samoa": "AS",
  "Andorra": "AD",
  "Angola": "AO",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Aruba": "AW",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bahamas, The": "BS",
  "Bahrain": "BH",
  "Bangladesh": "BD",
  "Barbados": "BB",
  "Belarus": "BY",
  "Belgium": "BE",
  "Belize": "BZ",
  "Benin": "BJ",
  "Bermuda": "BM",
  "Bhutan": "BT",
  "Bolivia": "BO",
  "Bosnia and Herzegovina": "BA",
  "Botswana": "BW",
  "Brazil": "BR",
  "British Virgin Islands": "VG",
  "Brunei Darussalam": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Cabo Verde": "CV",
  "Cambodia": "KH",
  "Cameroon": "CM",
  "Canada": "CA",
  "Cayman Islands": "KY",
  "Central African Republic": "CF",
  "Chad": "TD",
  "Channel Islands": "JE",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Comoros": "KM",
  "Congo, Dem. Rep.": "CD",
  "Congo, Rep.": "CG",
  "Costa Rica": "CR",
  "Cote d'Ivoire": "CI",
  "Croatia": "HR",
  "Cuba": "CU",
  "Curacao": "CW",
  "Cyprus": "CY",
  "Czechia": "CZ",
  "Denmark": "DK",
  "Djibouti": "DJ",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "Egypt, Arab Rep.": "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Eswatini": "SZ",
  "Ethiopia": "ET",
  "Faroe Islands": "FO",
  "Fiji": "FJ",
  "Finland": "FI",
  "France": "FR",
  "French Polynesia": "PF",
  "Gabon": "GA",
  "Gambia, The": "GM",
  "Georgia": "GE",
  "Germany": "DE",
  "Ghana": "GH",
  "Gibraltar": "GI",
  "Greece": "GR",
  "Greenland": "GL",
  "Grenada": "GD",
  "Guam": "GU",
  "Guatemala": "GT",
  "Guinea": "GN",
  "Guinea-Bissau": "GW",
  "Guyana": "GY",
  "Haiti": "HT",
  "Honduras": "HN",
  "Hong Kong SAR, China": "HK",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran, Islamic Rep.": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Isle of Man": "IM",
  "Israel": "IL",
  "Italy": "IT",
  "Jamaica": "JM",
  "Japan": "JP",
  "Jordan": "JO",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kiribati": "KI",
  "Korea, Dem. People's Rep.": "KP",
  "Korea, Rep.": "KR",
  "Kosovo": "XK",
  "Kuwait": "KW",
  "Kyrgyz Republic": "KG",
  "Lao PDR": "LA",
  "Latvia": "LV",
  "Lebanon": "LB",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Libya": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Macao SAR, China": "MO",
  "Madagascar": "MG",
  "Malawi": "MW",
  "Malaysia": "MY",
  "Maldives": "MV",
  "Mali": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH",
  "Mauritania": "MR",
  "Mauritius": "MU",
  "Mexico": "MX",
  "Micronesia, Fed. Sts.": "FM",
  "Moldova": "MD",
  "Monaco": "MC",
  "Mongolia": "MN",
  "Montenegro": "ME",
  "Morocco": "MA",
  "Mozambique": "MZ",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nauru": "NR",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE",
  "Nigeria": "NG",
  "North Macedonia": "MK",
  "Northern Mariana Islands": "MP",
  "Norway": "NO",
  "Oman": "OM",
  "Pakistan": "PK",
  "Palau": "PW",
  "Panama": "PA",
  "Papua New Guinea": "PG",
  "Paraguay": "PY",
  "Peru": "PE",
  "Philippines": "PH",
  "Poland": "PL",
  "Portugal": "PT",
  "Puerto Rico": "PR",
  "Qatar": "QA",
  "Romania": "RO",
  "Russian Federation": "RU",
  "Rwanda": "RW",
  "Samoa": "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL",
  "Singapore": "SG",
  "Sint Maarten (Dutch part)": "SX",
  "Slovak Republic": "SK",
  "Slovenia": "SI",
  "Solomon Islands": "SB",
  "Somalia": "SO",
  "South Africa": "ZA",
  "South Sudan": "SS",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "St. Kitts and Nevis": "KN",
  "St. Lucia": "LC",
  "St. Martin (French part)": "MF",
  "St. Vincent and the Grenadines": "VC",
  "Sudan": "SD",
  "Suriname": "SR",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Syrian Arab Republic": "SY",
  "Tajikistan": "TJ",
  "Tanzania": "TZ",
  "Thailand": "TH",
  "Timor-Leste": "TL",
  "Togo": "TG",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT",
  "Tunisia": "TN",
  "Turkiye": "TR",
  "Turkmenistan": "TM",
  "Turks and Caicos Islands": "TC",
  "Tuvalu": "TV",
  "Uganda": "UG",
  "Ukraine": "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  "Uruguay": "UY",
  "Uzbekistan": "UZ",
  "Vanuatu": "VU",
  "Venezuela, RB": "VE",
  "Viet Nam": "VN",
  "Virgin Islands (U.S.)": "VI",
  "West Bank and Gaza": "PS",
  "Yemen, Rep.": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW"
};

// Function to make an API call with a given country code
async function fetchCountryData(countryCode) {
  try {
    let url = `https://api.worldbank.org/V2/country/${countryCode}?format=json`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await response.json();
    if (!data[1]) {
      throw new Error("No data found for this country");
    }

    let dataPath = data[1];
    let countryName = dataPath[0].name;
    let countryCapital = dataPath[0].capitalCity;
    let countryRegion = dataPath[0].region.value;
    let countryIncome = dataPath[0].incomeLevel.value;
    let countryLong = dataPath[0].longitude;
    let countryLat = dataPath[0].latitude;

    document.getElementById("namep").innerText = countryName;
    document.getElementById("cap").innerText = countryCapital;
    document.getElementById("reg").innerText = countryRegion;
    document.getElementById("income").innerText = countryIncome;
    document.getElementById("long").innerText = countryLong;
    document.getElementById("lat").innerText = countryLat;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    document.getElementById("namep").innerText = "Error fetching data";
  }
}

// Function to convert input to title case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Event listener for search button click
const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

searchButton.addEventListener("click", () => {
  const input = toTitleCase(searchBar.value.trim()); // Convert input to title case
  const countryCode = countryMapping[input]; // Look up country code
  if (countryCode) {
    fetchCountryData(countryCode); // Call API with valid country code
  } else {
    document.getElementById("namep").innerText = "Invalid country name.";
  }
});

// Adding Enter key functionality
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const input = toTitleCase(searchBar.value.trim()); // Convert input to title case
    const countryCode = countryMapping[input]; // Look up country code
    if (countryCode) {
      fetchCountryData(countryCode); // Call API with valid country code
    } else {
      document.getElementById("namep").innerText = "Invalid country name.";
    }
  }
});


// SVG mouseover/click logic
document.querySelectorAll(".allPath").forEach(worldMap => {
  worldMap.addEventListener("mouseover", function () {
    worldMap.style.fill = "rgb(15, 136, 35)"
  })
  worldMap.addEventListener("mouseleave", function () {
    worldMap.style.fill = "rgb(0, 0, 0)"
  })
  worldMap.addEventListener("click", function () {
    fetchCountryData(worldMap.id); // SVG ID is already a valid country code
  });
});