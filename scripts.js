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

function toggleCollapsible(id, contentID) {
  let el = document.getElementById(id);
  el.classList.toggle("active");
  var content = document.getElementById(contentID)
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function generateChTable(tableID, chs) {
  let tablestr = document.getElementById(tableID).innerHTML;
  tablestr = ` <table class="chTable"> <tbody>`
  for (let i = 0; i < chs.length; i += 2) {
    tablestr += '<tr>'
    for (let j = 0; j < 2 && (i + j < chs.length); j++) {
      tablestr += `<td> <a target='_blank' href='${chs[i+j].link}'>${chs[i+j].title}</a></td>`
    }
    tablestr += '</tr>'
  }
  tablestr += '</tbody></table>'
  document.getElementById(tableID).innerHTML = tablestr
}

function display(cboxID, clss) {
  closeAll();
  closeAll();
  closeAll();
  nodes = document.getElementsByClassName(clss)
  if (document.getElementById(cboxID).checked) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.display = 'table';
    }
  } else {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.display = 'none';
    }
  }
}

function closeAll() {
  let nodes = document.getElementsByClassName('active')
  console.log(nodes)
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id == 'filters1Coll' || nodes[i].id == 'filters2Coll') {
      continue;
    }
    console.log(nodes[i].id)
    this.toggleCollapsible(nodes[i].id, map[nodes[i].id])
  }
}