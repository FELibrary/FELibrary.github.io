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
  'engage',
  'feh',
  'tmsfe'

]

let game = ''

function setUp() {
  game_div = document.getElementById('games')
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.classList.toggle('game_info_box')
    let element = document.createElement("button");
    element.onclick = function() { 
      window.location.href = `media.html?g=${arr[i]}`
    }
    element.id = arr[i]
    element.classList.toggle('game_info_button')
    let span = document.createElement("span")
    span.innerHTML = `${games[arr[i]]['name']}`
    let img = document.createElement("img")
    img.classList.toggle('game_img')
    img.src = `./games/${arr[i]}.png`
        element.appendChild(img)
    element.appendChild(span)

    div.appendChild(element)
    game_div.appendChild(div)
  }
}


function mediaPage() {
  url = window.location.href;
  game = url.substring(url.indexOf('?g=')+3, url.length)
  filter_bar(game)
  let items = entry_data[game]
  media_div = document.getElementById('media_div')
  for (let i = 0; i < items.length; i++) {
    let div = document.createElement("div");
    div.classList.toggle('media_box')

    let title_div = document.createElement("div");
    title_div.classList.toggle('title_box')
    let span = document.createElement("span")
    span.innerHTML = `${items[i]['name']}`
    span.classList.toggle('title')
    title_div.appendChild(span)

    let lower_div = document.createElement("div");
    lower_div.classList.toggle('lower_box')

    let img_div = document.createElement("div");
    img_div.classList.toggle('img_box')
    let img = document.createElement("img")
    img.classList.toggle('media_img')
    img.src = `./covers/${items[i]['img']}.png`
    img_div.appendChild(img)

    let info_div = document.createElement("div");
    info_div.classList.toggle('info_box')

    let buttons_div = document.createElement("div");
    buttons_div.classList.toggle('buttons_box')

    for (let j = 0; j < items[i].buttons.length; j++){
      let a = document.createElement('a')
      a.href = items[i].buttons[j].link
      a.target = '_blank'
      let button = document.createElement('button')
      let span = document.createElement('span')

      span.innerHTML = items[i].buttons[j].note

      //button.style.background = `url('./assets/${items[i].buttons[j].type}.png')`

      a.appendChild(button)
      button.appendChild(span)
    
      buttons_div.appendChild(a)
      
    }

    if (items[i]['raws']){

      let a = document.createElement('a')
      a.href = items[i].raws
      a.target = '_blank'
      let button = document.createElement('button')
      button.classList.toggle('raw_btn')
      let span = document.createElement('span')

      span.innerHTML = 'Scans'

      //button.style.background = `url('./assets/${items[i].buttons[j].type}.png')`

      a.appendChild(button)
      button.appendChild(span)
      buttons_div.appendChild(a)

    }

    string = ""

    string += `<strong>Type:</strong> ${items[i].type}<br/>`
    string += `<strong>Status:</strong> ${items[i].status}<br/>`

     if (items[i]['story']){
      string += `<strong>Story:</strong> ${items[i].story}<br/>`
     }
     if (items[i]['art']){
      string += `<strong>Art:</strong> ${items[i].art}<br/>`
     }

    info_div.innerHTML = string


    
    div.appendChild(title_div)
   lower_div.appendChild(img_div)
    lower_div.appendChild(info_div)
    lower_div.appendChild(buttons_div)
    div.appendChild(lower_div)
    media_div.appendChild(div)

    let line = document.createElement("div");
    line.classList.toggle('break')
    line.innerHTML = "<hr>"
    media_div.appendChild(line)

  }
}

function filter_bar(game){
  filter_bar = document.getElementById('filter_bar')
  console.log(game)
  let filters = games[game].filters
  console.log(entry_data[game])
  for (let i = 0; i < filters.length; i++){
    let button = document.createElement('button')
    button.setAttribute('onclick', `filter('${filters[i]}')`)
    //button.onclick = filter(filters[i]);
    button.innerHTML = filters[i]
    filter_bar.appendChild(button)
  }

}

function filter(type) {

  console.log(type)
}