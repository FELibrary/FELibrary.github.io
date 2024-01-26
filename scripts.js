let map = {
  engageColl: "engageChs",
  fehColl1: "fehChs1",
  fehColl2: "fehChs2",
  fehColl3: "fehChs3",
  fehColl4: "fehChs4",
  genColl: "genChs"
}
arr = [
  'archanea',
  'sov',
  'gothw',
  't776',
  'binding',
  'blazing',
  'ss',
  'por',
  'rd',
  'awakening',
  'fates',
  '3h',
  'engage'
]

function setUp() {
  game_div = document.getElementById('games')
  for (let i = 0; i < arr.length; i++) {
    let element = document.createElement("div");

    element.id = arr[i]
    element.classList.toggle('game_info_box')

    let span = document.createElement("span")
    span.innerHTML = `${games[arr[i]]['name']}`

    let img = document.createElement("img")
    img.classList.toggle('game_img')
    img.src = `./games/${arr[i]}.png`

    element.appendChild(span)
    element.appendChild(img)
    game_div.appendChild(element)

  }
}

function mediaPage(game) {
  let items = entry_data[game]
  media_div = document.getElementById('media_div')
  for (let i = 0; i < items.length; i++){
    let div = document.createElement("div");
    div.classList.toggle('media_box')

    let img = document.createElement("img")
    img.classList.toggle('media_img')
    img.src = `./covers/${items[i]['img']}.png`


    let span = document.createElement("span")
    span.innerHTML = `${items[i]['name']}`
    div.appendChild(span)
    div.appendChild(img)

    media_div.appendChild(div)


  }
}