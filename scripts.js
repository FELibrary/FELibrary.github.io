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
  'tmsfe',
  'series'
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
  game = url.substring(url.indexOf('?g=') + 3, url.length)
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
    for (let j = 0; j < items[i].buttons.length; j++) {
      let a = document.createElement('a')
      a.href = items[i].buttons[j].link
      a.target = '_blank'
      let button = document.createElement('button')
      button_tbl = document.createElement('table')
      const tr = button_tbl.insertRow()
      const td1 = tr.insertCell()
      const td2 = tr.insertCell()
      td2.innerHTML = items[i].buttons[j].note
      td1.classList.toggle(items[i].buttons[j].type)
      td1.classList.toggle('button_img')
      td2.classList.toggle('button_note')
   
      




      //let span = document.createElement('span')
      //button.style.backgroundColor = items[i].buttons[j].color
      //span.innerHTML = items[i].buttons[j].note
      if (items[i].buttons[j].glow)
        button.id = "glow_btn"
      else
        button.id = 'blk_btn'

      button.appendChild(button_tbl)
      a.appendChild(button)
      //button.appendChild(span)
      
      buttons_div.appendChild(a)
    }
    string = ""
    string += `<em>${items[i].desc}</em><br><br>`
    tbl = document.createElement('table');
    let heading_arr = ["Type", "Status"]
    let info_arr = [items[i].type.join('/'), items[i].status]
    if (items[i]['published']) {
      heading_arr.push("Published")
      info_arr.push(items[i].published)
    }
    if (items[i]['story']) {
      heading_arr.push("Story")
      info_arr.push(items[i].story)
    }
    if (items[i]['art']) {
      heading_arr.push("Art")
      info_arr.push(items[i].art)
    }
    if (items[i]['translation']) {
      heading_arr.push("Translation")
      info_arr.push(items[i].translation.join(', '))
    }
    for (let i = 0; i < info_arr.length; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        const td = tr.insertCell();
        if (j == 0) {
          td.innerHTML = `<strong>${heading_arr[i]}:</strong>`
        } else {
          td.innerHTML = info_arr[i]
        }
      }
    }
    /*
        
        string += `<strong>Type:</strong> ${items[i].type.join('/')}<br/>`
        string += `<strong>Status:</strong> ${items[i].status}<br/>`
        if (items[i]['story']) {
          string += `<strong>Story:</strong> ${items[i].story}<br/>`
        }
        if (items[i]['art']) {
          string += `<strong>Art:</strong> ${items[i].art}<br/>`
        }
            if (items[i]['translation'].length != 0) {
          string += `<strong>Translation:</strong> ${items[i].translation.join(', ')}<br/>`
        }
      */
    info_div.innerHTML = string
    info_div.appendChild(tbl)
    div.appendChild(title_div)
    lower_div.appendChild(img_div)
    lower_div.appendChild(info_div)
    lower_div.appendChild(buttons_div)
    div.appendChild(lower_div)
    for (let j = 0; j < items[i].type.length; j++) {
      div.classList.toggle(items[i].type[j])
    }
    media_div.appendChild(div)
    let line = document.createElement("div");
    line.classList.toggle('break')
    line.innerHTML = "<hr>"
    media_div.appendChild(line)
  }
}

function filter_bar(game) {
  filter_bar = document.getElementById('filter_bar')
 
  let filters = games[game].filters

  for (let i = 0; i < filters.length; i++) {
    let button = document.createElement('button')
    let img = document.createElement('img')
    img.id = filters[i] + 'Img'
    button.appendChild(img)
    button.id = filters[i]
    if (i == 0) {
      button.setAttribute('onclick', `showAll()`)
      img.src = `buttons/all_glow.png`
    } else {
      button.setAttribute('onclick', `filter('${filters[i]}')`)
      img.src = "buttons/" + filters[i].toLowerCase() + `.png`
    }
    //button.innerHTML = filters[i]
    filter_bar.appendChild(button)
  }
}

function filter(type) {
  let keys = games[game].filters
  for (let i = 0; i < keys.length; i++) {
    let nodes = document.getElementsByClassName(`${keys[i]}`)
    //document.getElementById(keys[i] + 'Img').style.backgroundColor = 'buttonface'
    document.getElementById(keys[i] + 'Img').src =  "buttons/" + keys[i].toLowerCase() + `.png`
    for (let j = 0; j < nodes.length; j++) {
      let entry = nodes[j];
      entry.style.display = 'none';
    }
  }
  let keep = document.getElementsByClassName(type)
  //document.getElementById(type).style.backgroundColor = 'yellow'
  document.getElementById(type + 'Img').src =  "buttons/" + type.toLowerCase() + `_glow.png`
  for (let i = 0; i < keep.length; i++) {
    let entry = keep[i];
    entry.style.display = 'block';
  }
}

function showAll() {
  let keys = games[game].filters
  for (let i = 0; i < keys.length; i++) {
    let nodes = document.getElementsByClassName(`${keys[i]}`)
    document.getElementById(keys[i] + 'Img').src =  "buttons/" + keys[i].toLowerCase() + `.png`
    for (let j = 0; j < nodes.length; j++) {
      let entry = nodes[j];
      entry.style.display = 'block';
    }
  }
  document.getElementById('AllImg').src =  "buttons/all_glow.png"
}