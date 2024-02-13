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

    let credit_tbl = document.createElement("table")
    credit_tbl.classList.toggle('credits')
    let credit_body = document.createElement("tbody")
    let cred_row1 = document.createElement("tr")
    let story = document.createElement("td")
    story.innerHTML = `Story: ${items[i]["story"]}`

    let art = document.createElement("td")
    art.innerHTML = `Art: ${items[i]["art"]}`

    cred_row1.appendChild(story)
    cred_row1.appendChild(art)

    credit_body.appendChild(cred_row1)

    let cred_row2 = document.createElement("tr")
    let translator = document.createElement("td")
    translator.colSpan = 2
    translator.innerHTML = "Translation: list here"

    cred_row2.appendChild(translator)

    credit_body.appendChild(cred_row2)

    credit_tbl.appendChild(credit_body)

    div.appendChild(credit_tbl)



    media_div.appendChild(div)


  }
}