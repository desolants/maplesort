dataSetVersion = "2023-08-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by branch",
    key: "branch",
    tooltip: "Check this to restrict classes from certain branches.",
    checked: false,
    sub: [
      { name: "Explorers", key: "exp" },
      { name: "Cygnus Knights  ", key: "koc" },
      { name: "Heroes", key: "hero" },
      { name: "Resistance", key: "res" },
      { name: "Nova", key: "nova" },
      { name: "Sengoku", key: "jp" },
      { name: "Flora", key: "flora" },
      { name: "FriendStory", key: "fs" },
      { name: "Child of God", key: "zero" },      
      { name: "Anima", key: "furry" },
      { name: "Beast Tamer", key: "bt" },
    ]
  },
  {
    name: "Exclude Non KMS",
    key: "kms",
    tooltip: "Check this to Jett, Sengoku, and Beast Tamer.",
    checked: false
  },
  {
    name: "Exclude Jett",
    key: "removed",
    tooltip: "Check this to exclude Jett.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Adele",
    img: "adele.webp",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Angelic Buster",
    img: "angelic_buster.webp",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Aran",
    img: "aran.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Ark",
    img: "ark.webp",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Battle Mage",
    img: "battle_mage.webp",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Beast Tamer",
    img: "beast_tamer.webp",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Bishop",
    img: "bishop.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Blaster",
    img: "blaster.webp",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Blaze Wizard",
    img: "blaze_wizard.webp",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Bowmaster",
    img: "bowmaster.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Buccaneer",
    img: "buccaneer.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Cadena",
    img: "cadena.webp",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Cannoneer",
    img: "cannoneer.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Corsair",
    img: "corsair.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Dark Knight",
    img: "dark_knight.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Dawn Warrior",
    img: "dawn_warrior.webp",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Demon Avenger",
    img: "demon_avenger.webp",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Demon Slayer",
    img: "demon_slayer.webp",
    opts: {
      branch: ["res"],
      kms true
    }
  },
  {
    name: "Dual Blade",
    img: "dual_blade.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Evan",
    img: "evan.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Fire Poison",
    img: "fire_poison.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Hayato",
    img: "hayato.webp",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Hero",
    img: "hero.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Ho Young",
    img: "ho_young.webp",
    opts: {
      branch: ["furry"],
      kms: true
    }
  },
  {
    name: "Ice Lightning",
    img: "ice_lightning.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Illium",
    img: "flora.webp",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Jett",
    img: "jett.webp",
    opts: {
      branch: ["exp"],
      kms: false,
      removed: true
    }
  },
  {
    name: "Kain",
    img: "kain.webp",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Kaiser",
    img: "kaiser.webp",
    opts: {
      branch: ["nova"],
      kms: true
    }
  },
  {
    name: "Kanna",
    img: "kanna.webp",
    opts: {
      branch: ["jp"],
      kms: false
    }
  },
  {
    name: "Khali",
    img: "khali.webp",
    opts: {
      branch: ["flora"],
      kms: true
    }
  },
  {
    name: "Kinesis",
    img: "kinesis.webp",
    opts: {
      branch: ["fs"],
      kms: true
    }
  },
  {
    name: "Lara",
    img: "lara.webp",
    opts: {
      branch: ["furry"],
      kms: true
    }
  },
  {
    name: "Luminous",
    img: "luminous.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Marksman",
    img: "marksman.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Mechanic",
    img: "mechanic.webp",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Mercedes",
    img: "mercedes.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Mihile",
    img: "mihile.webp",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Night Lord",
    img: "night_lord.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Night Walker",
    img: "night_walker.webp",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Paladin",
    img: "paladin.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Pathfinder",
    img: "pathfinder.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Phantom",
    img: "phantom.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Shade",
    img: "shade.webp",
    opts: {
      branch: ["hero"],
      kms: true
    }
  },
  {
    name: "Shadower",
    img: "shadower.webp",
    opts: {
      branch: ["exp"],
      kms: true
    }
  },
  {
    name: "Thunder Breaker",
    img: "thunder_breaker.webp",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Wild Hunter",
    img: "wild_hunter.webp",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Wind Archer",
    img: "wind_archer.webp",
    opts: {
      branch: ["koc"],
      kms: true
    }
  },
  {
    name: "Xenon",
    img: "xenon.webp",
    opts: {
      branch: ["res"],
      kms: true
    }
  },
  {
    name: "Zero",
    img: "zero.webp",
    opts: {
      branch: ["zero"],
      kms: true
    }
  }
]
