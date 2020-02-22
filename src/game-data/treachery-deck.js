const treacheryDeck = [
  {
    id: 1,
    cardName: "Lasgun",
    cardPhase: "Battle",
    cardType: "Weapon - Special",
    cardDescription:
      "Play as part of your Battle Plan. \n Automatically kills enemy leader regardless of defense card used. \n You may keep this card if you win in this battle. \n If anyone plays a Shield in this battle, and neither leader is called as a traitor, then all tokens and leaders in this battle's territory are killed. Both players lose this battle. "
  },
  {
    id: 2,
    cardName: "Crysknife",
    cardPhase: "Battle",
    cardType: "Weapon - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Shield). \n You may keep this card if you win in this battle."
  },
  {
    id: 3,
    cardName: "Maula Pistol",
    cardPhase: "Battle",
    cardType: "Weapon - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Shield). \n You may keep this card if you win in this battle."
  },
  {
    id: 4,
    cardName: "Slip Tip",
    cardPhase: "Battle",
    cardType: "Weapon - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Shield). \n You may keep this card if you win in this battle."
  },
  {
    id: 5,
    cardName: "Stunner",
    cardPhase: "Battle",
    cardType: "Weapon - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Shield). \n You may keep this card if you win in this battle."
  },
  {
    id: 6,
    cardName: "Chaumas",
    cardPhase: "Battle",
    cardType: "Weapon - Poison",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Snooper). \n You may keep this card if you win in this battle."
  },
  {
    id: 7,
    cardName: "Chaumurky",
    cardPhase: "Battle",
    cardType: "Weapon - Poison",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Snooper). \n You may keep this card if you win in this battle."
  },
  {
    id: 8,
    cardName: "Ellaca Dru",
    cardPhase: "Battle",
    cardType: "Weapon - Poison",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Snooper). \n You may keep this card if you win in this battle."
  },
  {
    id: 9,
    cardName: "Gom Jabbar",
    cardPhase: "Battle",
    cardType: "Weapon - Poison",
    cardDescription:
      "Play as part of your Battle Plan. \n Kills enemy leader before the battle is resolved. \n May be countered by an appropriate defense (Snooper). \n You may keep this card if you win in this battle."
  },
  {
    id: 10,
    cardName: "Shield",
    cardPhase: "Battle",
    cardType: "Defense - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Protects your Leader from an enemy Weapon - Projectile card in this battle. \n You may keep this card if you win this battle."
  },
  {
    id: 11,
    cardName: "Shield",
    cardType: "Defense - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Protects your Leader from an enemy Weapon - Projectile card in this battle. \n You may keep this card if you win this battle."
  },
  {
    id: 12,
    cardName: "Shield",
    cardType: "Defense - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Protects your Leader from an enemy Weapon - Projectile card in this battle. \n You may keep this card if you win this battle."
  },
  {
    id: 13,
    cardName: "Shield",
    cardType: "Defense - Projectile",
    cardDescription:
      "Play as part of your Battle Plan. \n Protects your Leader from an enemy Weapon - Projectile card in this battle. \n You may keep this card if you win this battle."
  },
  {
    id: 14,
    cardName: "Snooper",
    cardType: "Defense - Poison",
    cardDescription:
      "Play as part of your Battle Plan \n Protects your leader from enemy Weapon - Poison card in this battle. \n You may keep this card if you win in this battle."
  },
  {
    id: 15,
    cardName: "Snooper",
    cardType: "Defense - Poison",
    cardDescription:
      "Play as part of your Battle Plan \n Protects your leader from enemy Weapon - Poison card in this battle. \n You may keep this card if you win in this battle."
  },
  {
    id: 16,
    cardName: "Snooper",
    cardType: "Defense - Poison",
    cardDescription:
      "Play as part of your Battle Plan \n Protects your leader from enemy Weapon - Poison card in this battle. \n You may keep this card if you win in this battle."
  },
  {
    id: 17,
    cardName: "Snooper",
    cardType: "Defense - Poison",
    cardDescription:
      "Play as part of your Battle Plan \n Protects your leader from enemy Weapon - Poison card in this battle. \n You may keep this card if you win in this battle."
  },
  {
    id: 18,
    cardName: "Cheap Hero",
    cardType: "Special - Leader",
    cardDescription:
      "Can be played in place of a Leader during a battle. \n The Cheap Hero has no value to add to your total. \n You must play this card if you have no Leaders available. \n Discard after use."
  },
  {
    id: 19,
    cardName: "Cheap Hero",
    cardType: "Special - Leader",
    cardDescription:
      "Can be played in place of a Leader during a battle. \n The Cheap Hero has no value to add to your total. \n You must play this card if you have no Leaders available. \n Discard after use."
  },
  {
    id: 20,
    cardName: "Cheap Heroine",
    cardType: "Special - Leader",
    cardDescription:
      "Can be played in place of a Leader during a battle. \n The Cheap Hero has no value to add to your total. \n You must play this card if you have no Leaders available. \n Discard after use."
  },
  {
    id: 21,
    cardName: "Baliset",
    cardType: "Worthless Card",
    cardDescription:
      "Play as part of your Battle Plan, in place of a Weapon, Defense, or both. \n This cardhas no value in play, and you can discard it only by playing it in your Battle Plan."
  },
  {
    id: 22,
    cardName: "Kulon",
    cardType: "Worthless Card",
    cardDescription:
      "Play as part of your Battle Plan, in place of a Weapon, Defense, or both. \n This cardhas no value in play, and you can discard it only by playing it in your Battle Plan."
  },
  {
    id: 23,
    cardName: "La La La",
    cardType: "Worthless Card",
    cardDescription:
      "Play as part of your Battle Plan, in place of a Weapon, Defense, or both. \n This cardhas no value in play, and you can discard it only by playing it in your Battle Plan."
  },
  {
    id: 24,
    cardName: "Trip to Gamont",
    cardType: "Worthless Card",
    cardDescription:
      "Play as part of your Battle Plan, in place of a Weapon, Defense, or both. \n This cardhas no value in play, and you can discard it only by playing it in your Battle Plan."
  },
  {
    id: 25,
    cardName: "Jubba Cloak",
    cardType: "Worthless Card",
    cardDescription:
      "Play as part of your Battle Plan, in place of a Weapon, Defense, or both. \n This cardhas no value in play, and you can discard it only by playing it in your Battle Plan."
  },
  {
    id: 26,
    cardName: "Tleilaxu Ghola",
    cardType: "Special",
    cardDescription:
      "Play at any time. \n You may immediately revive 1 of your leaders or up to 5 of your tokens from the tanks to your reserves at no cost in spice. \n Does not count against per-turn limits on revivals."
  },
  {
    id: 27,
    cardName: "Family Atomics",
    cardType: "Special - Storm",
    cardDescription:
      "Play after the Storm card is revealed, but before the Storm is moved, and if you have at least 1 Troop token on the Shield Wall, or in an adjacent Territory. \n All Troop tokens on the Shield Wall are destroyed. Arrakeenm Imperial Basin & Carthag are no longer protected from the Storm for the rest of the game. \n Place this card near the game board."
  },
  {
    id: 28,
    cardName: "Weather Control",
    cardType: "Special - Storm",
    cardDescription:
      "Play at the start of the Storm round, before the storm movement is calculated. \n You control the storm this round and may move it from 0 to 10 sectors in a counterclockwise direction."
  },
  {
    id: 29,
    cardName: "Harj",
    cardType: "Special - Movement",
    cardDescription:
      "Play during Movement round. \n Take an additional on-planet token movement subject to normal movement rules. \n This may be the same or another group of your tokens."
  },
  {
    id: 30,
    cardName: "Karama",
    cardType: "Special",
    cardDescription: ""
  },
  {
    id: 31,
    cardName: "Karama",
    cardType: "Special",
    cardDescription: ""
  },
  {
    id: 32,
    cardName: "Truthtrance",
    cardType: "Special",
    cardDescription:
      "Ask one other player a single yes/no question about the game which must be answered publicly. \n No game or rule effect may interrup the answer being given. \n The player must answer 'yes' or 'no' truthfully."
  },
  {
    id: 33,
    cardName: "Truthtrance",
    cardType: "Special",
    cardDescription:
      "Ask one other player a single yes/no question about the game which must be answered publicly. \n No game or rule effect may interrup the answer being given. \n The player must answer 'yes' or 'no' truthfully."
  }
];

export default treacheryDeck;
