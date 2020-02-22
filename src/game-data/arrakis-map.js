const arrakisMap = [
  {
    id: 1,
    name: "Polar Sink",
    type: "polar sink",
    spiceBlow: false,
    neighbors: [
      "Wind Pass",
      "Wind Pass North",
      "Cielago North",
      "Harg Pass",
      "False Wall East",
      "Imperial Basin",
      "Arsunt",
      "Hagga Basin"
    ],
    sectors: []
  },
  {
    id: 2,
    name: "Meridian",
    type: "sand",
    spiceBlow: false,
    neighbors: [
      "Cielago South",
      "Cielago Depression",
      "Cielago West",
      "Habbanya Ridge Flat"
    ],
    sectors: [1, 2]
  },
  {
    id: 3,
    name: "Cielago Depression",
    type: "sand",
    spiceBlow: false,
    neighbors: ["Cielago South", "Cielago North", "Cielago West", "Meridian"],
    sectors: [1, 2, 3]
  },
  {
    id: 4,
    name: "Cielago West",
    type: "sand",
    spiceBlow: false,
    neighbors: [
      "Meridian",
      "Cielago Depression",
      "Cielago North",
      "Wind Pass North",
      "Wind Pass",
      "False Wall West",
      "Habbanya Ridge Flat"
    ],
    sectors: [16, 1]
  },
  {
    id: 5,
    name: "Cielago North",
    type: "sand",
    spiceBlow: true,
    neighbors: [
      "Cielago West",
      "Cielago Depression",
      "Cielago South",
      "False Wall South",
      "Harg Pass",
      "Polar Sink",
      "Wind Pass North"
    ],
    sectors: [1, 2, 3]
  },
  {
    id: 6,
    name: "Cielago South",
    type: "sand",
    spiceBlow: true,
    neighbors: [
      "South Mesa",
      "False Wall South",
      "Cielago North",
      "Cielago Depression",
      "Meridian"
    ],
    sectors: [2, 3, 4]
  },
  {
    id: 7,
    name: "South Mesa",
    type: "sand",
    spiceBlow: true,
    neighbors: [
      "Red Chasm",
      "Pasty Mesa",
      "Tuek's Sietch",
      "False Wall South",
      "Cielago South"
    ],
    sectors: [4, 5, 6]
  },
  {
    id: 8,
    name: "False Wall South",
    type: "rock",
    spiceBlow: false,
    neighbors: [
      "South Mesa",
      "Tuek's Sietch",
      "Pasty Mesa",
      "The Minor Erg",
      "Harg Pass",
      "Cielago North",
      "Cielago South"
    ],
    sectors: [4, 5]
  },
  {
    id: 9,
    name: "Harg Pass",
    type: "sand",
    spiceBlow: false,
    neighbors: [
      "False Wall South",
      "The Minor Erg",
      "False Wall East",
      "Polar Sink",
      "Cielago North"
    ],
    sectors: [4, 5]
  },
  {
    id: 10,
    name: "Tuek's Sietch",
    type: "stronghold",
    spiceBlow: false,
    neighbors: ["South Mesa", "Pasty Mesa", "False Wall South"],
    sectors: [5]
  },
  {
    id: 11,
    name: "The Minor Erg",
    type: "sand",
    spiceBlow: true,
    neighbors: [
      "Pasty Mesa",
      "Shield Wall",
      "False Wall East",
      "Harg Pass",
      "False Wall South"
    ],
    sectors: [5, 6, 7, 8]
  },
  {
    id: 12,
    name: "Pasty Mesa",
    type: "rock",
    spiceBlow: false,
    neighbors: [
      "South Mesa",
      "Red Chasm",
      "Gara Kulon",
      "Shield Wall",
      "The Minor Erg",
      "False Wall South",
      "Tuek's Sietch"
    ],
    sectors: [5, 6, 7, 8]
  },
  {
    id: 13,
    name: "False Wall East",
    type: "rock",
    spiceBlow: false,
    neighbors: [
      "Harg Pass",
      "The Minor Erg",
      "Shield Wall",
      "Imperial Basin",
      "Polar Sink"
    ],
    sectors: [5, 6, 7, 8, 9]
  },
  {
    id: 14,
    name: "Red Chasm",
    type: "sand",
    spiceBlow: true,
    neighbors: ["Pasty Mesa", "South Mesa"],
    sectors: [7]
  },
  {
    id: 15,
    name: "Gara Kulon",
    type: "sand",
    spiceBlow: false,
    neighbors: ["Pasty Mesa", "Shield Wall", "Sihaya Ridge"],
    sectors: [8]
  },
  {
    id: 16,
    name: "Shield Wall",
    type: "rock",
    spiceBlow: false,
    neighbors: [
      "False Wall East",
      "The Minor Erg",
      "Pasty Mesa",
      "Gara Kulon",
      "Sihaya Ridge",
      "Hole In The Rock",
      "Imperial Basin"
    ],
    sectors: [8, 9]
  },
  {
    id: 17,
    name: "Sihaya Ridge",
    type: "sand",
    spiceBlow: false,
    neighbors: ["Gara Kulon", "Shield Wall", "Hole In The Rock", "Basin"],
    sectors: [9]
  },
  {
    id: 18,
    name: "Hole In The Rock",
    type: "sand",
    spiceBlow: false,
    neighbors: [
      "Shield Wall",
      "Sihaya Ridge",
      "Basin",
      "OH Gap",
      "Rim Wall West",
      "Imperial Basin"
    ],
    sectors: [9]
  },
  {
    id: 19,
    name: "Basin",
    type: "sand",
    spiceBlow: false,
    neighbors: ["Hole In The Rock", "Sihaya Ridge", "Rim Wall West", "Old Gap"],
    sectors: [9]
  },
  {
    id: 20,
    name: "Rim Wall West",
    type: "rock",
    spiceBlow: false,
    neighbors: [
      "Hole In The Rock",
      "Basin",
      "OH Gap",
      "Arrakeen",
      "Imperial Basin"
    ],
    sectors: [9]
  },
  {
    id: 21,
    name: "Imperial Basin",
    type: "sand",
    spiceBlow: false,
    neighbors: [
      "False Wall East",
      "Shield Wall",
      "Hole In The Rock",
      "Rim Wall West",
      "Arrakeen",
      "OH Gap",
      "Tsimpo",
      "Carthag",
      "Arsunt",
      "Polar Sink"
    ],
    sectors: [9, 10, 11]
  },
  {
    id: 22,
    name: "Arrakeen",
    type: "stronghold",
    spiceBlow: false,
    neighbors: ["Imperial Basin", "Rim Wall West", "OH Gap"],
    sectors: [10]
  },
  {
    id: 23,
    name: "OH Gap",
    type: "sand",
    spiceBlow: true,
    neighbors: ["Basin", "Broken Land", "Tsimpo", "Imperial Basin", "Arrakeen"],
    sectors: [9, 10, 11]
  },
  {
    id: 24,
    name: "Arsunt",
    type: "sand",
    spiceBlow: false,
    neighbors: ["Polar Sink", "Imperial Basin", "Carthag", "Hagga Basin"],
    sectors: [11, 12]
  },
  {
    id: 25,
    name: "Carthag",
    type: "stronghold",
    spiceBlow: false,
    neighbors: ["Arsunt", "Imperial Basin", "Tsimpo", "Hagga Basin"],
    sectors: [11]
  },
  {
    id: 26,
    name: "Tsimpo",
    type: "sand",
    spiceBlow: false,
    neighbors: [
      "Carthag",
      "Imperial Basin",
      "OH Gap",
      "Broken Land",
      "Plastic Basin",
      "Hagga Basin"
    ],
    sectors: [11, 12, 13]
  },
  {
    id: 27,
    name: "Broken Land",
    type: "sand",
    spiceBlow: true,
    neighbors: ["OH Gap", "Tsimpo", "Plastic Basin", "Rock Outcroppings"],
    sectors: [11, 12]
  },
  {
    id: 28,
    name: "Hagga Basin",
    type: "sand",
    spiceBlow: true,
    neighbors: [
      "Polar Sink",
      "Arsunt",
      "Carthag",
      "Tsimpo",
      "Plastic Basin",
      "Wind Pass"
    ],
    sectors: [12, 13]
  },
  {
    id: 29,
    name: "Plastic Basin"
  },
  {
    id: 30,
    name: "Rock Outcroppings"
  },
  {
    id: 31,
    name: "Sietch Tabr"
  },
  {
    id: 32,
    name: "Bight Of The Cliff"
  },
  {
    id: 33,
    name: "Funeral Plain"
  },
  { id: 34, name: "Wind Pass" },
  { id: 35, name: "Funeral Plain" },
  {
    id: 36,
    name: "The Great Flat"
  },
  {
    id: 37,
    name: "The Great Flat"
  },
  {
    id: 38,
    name: "The Greater Flat"
  },
  {
    id: 39,
    name: "Habbanya Erg"
  },
  {
    id: 40,
    name: "Habbanya Sietch"
  },
  {
    id: 41,
    name: "Habbanya Ridge Flat"
  },
  {
    id: 42,
    name: "False Wall West"
  },
  {
    id: 43,
    name: "Wind Pass North"
  }
];

export default arrakisMap;

// map file - the actual map structure, relation between
// regions, distances etc. types: sand/rock/stronghold
// NEEDS TO ACCOUNT FOR SECTORS
// this is a highly inefficient way of doing the map
// how can I improve this?
// many relational tables
