let currentRacerIndex = 1;

const racers = {
  0: {
    name: "Anakin Skywalker",
    img: "https://i.pinimg.com/originals/c2/cc/f0/c2ccf0b924a99cdf7f1b6b276682da88.jpg"
  },
  1: {
    name: "Dud Bolt",
    img: "https://starwarsreadingorder.com/images/characters/dud_bolt_2.jpg"
  },
  2: {
    name: "Ebe Endocott",
    img: "https://images.saymedia-content.com/.image/t_share/MTc0NDYxMTkzNjA2NjY5Njcy/best-podracing-pilots-star-wars.jpg"
  },
  3: {
    name: "Elan Mak",
    img: "https://i.redd.it/ew4gchyva8m21.jpg"
  },
  4: {
    name: "Gasgano",
    img: "https://lumiere-a.akamaihd.net/v1/images/gasgano_6f648f83.jpeg?region=0%2C55%2C2252%2C1126"
  },
  5: {
    name: "Ody Mandrell",
    img: "https://static.wikia.nocookie.net/starwars/images/7/7c/OdyMandrellHS-SWE.jpg/revision/latest/top-crop/width/360/height/450?cb=20120121084021"
  },
  6: {
    name: "Teemto Pagalies",
    img: "https://lumiere-a.akamaihd.net/v1/images/teemto-pagalies_140af421.jpeg?region=0%2C81%2C1560%2C878&width=960"
  },
  7: {
    name: "Aldar Beedo",
    img: "https://static.wikia.nocookie.net/starwars/images/6/60/Beedo_Front_View.png/revision/latest?cb=20131115113510"
  },
  8: {
    name: "Fud Sang",
    img: "https://static.wikia.nocookie.net/starwars/images/9/97/FudSangTaunt.png/revision/latest?cb=20141221044348"
  },
  9: {
    name: "Mars Guo",
    img: "https://static.wikia.nocookie.net/starwars/images/b/b5/Mars_guo.jpg/revision/latest/scale-to-width-down/340?cb=20050418010228"
  },
  10: {
    name: "‘Bullseye’ Navior",
    img: "https://static.wikia.nocookie.net/starwars/images/b/bc/Navior_headshot.png/revision/latest?cb=20180514195520"
  },
  11: {
    name: "Ratts Tyerell",
    img: "https://static.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg/revision/latest?cb=20111117040905"
  },
  12: {
    name: "Wan Sandage",
    img: "https://i.pinimg.com/originals/1f/5d/b1/1f5db17c4f15c360def3c283f382da09.jpg"
  },
  13: {
    name: "Boles Roor",
    img: "https://giantbomb1.cbsistatic.com/uploads/square_small/1/15405/453788-boles_roor.jpg"
  },
  14: {
    name: "Neva Kee",
    img: "https://static.wikia.nocookie.net/starwars/images/d/d4/Neva_Kee_Boonta.png/revision/latest?cb=20140409032643"
  },
  15: {
    name: "Ark ‘Bumpy’ Roose",
    img: "https://static.wikia.nocookie.net/starwars/images/e/e7/Ark_Roose_Waving_like_a_Champ.png/revision/latest?cb=20131024002958"
  },
  16: {
    name: "Toy Dampner",
    img: "https://static.wikia.nocookie.net/starwars/images/e/e8/Toy_Dampner.png/revision/latest?cb=20180514194456"
  },
  17: {
    name: "Mawhonic",
    img: "https://lumiere-a.akamaihd.net/v1/images/mawhonic-main-image_7962bb16.jpeg?region=0%2C74%2C1560%2C878&width=960"
  },
  18: {
    name: "Sebulba",
    img: "https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg?region=0%2C0%2C2763%2C1380"
  },
  19: {
    name: "Slide Paramita",
    img: "https://vignette.wikia.nocookie.net/alienencyclopedia/images/d/d8/Slide_Paramita.jpg/revision/latest/scale-to-width-down/340?cb=20120630222259"
  },
  20: {
    name: "Bozzie Baranta",
    img: "https://static.wikia.nocookie.net/starwars/images/0/0d/Bozzie_Headshot_EIR.png/revision/latest?cb=20180514193231"
  },
  21: {
    name: "Ben Quadinaros",
    img: "https://i.pinimg.com/originals/ea/f7/6c/eaf76c3d8c61346ed9833bd04b61ab58.jpg"
  }
};

document.querySelector('#next-racer-button').onclick = function () {
  document.getElementById('racer-img').src = racers[currentRacerIndex].img;
  document.querySelector('#racer-name').innerHTML = racers[currentRacerIndex].name;
  currentRacerIndex++;
  if (currentRacerIndex >= Object.keys(racers).length)
    currentRacerIndex = 0;
};

// document.getElementById("myAnchor").href = "http://www.cnn.com/";