const columnToDo = document.getElementById("column-todo") 
const columnDoing = document.getElementById("column-doing") 
const columnDone = document.getElementById("column-done")

let counter = 1;

function getElementsByLocalstorage() {
  const cardLocal = localStorage.getItem('cards');
  const cardJSON = JSON.parse(cardLocal);

  cardJSON?.map((cardLocalstorage)=> {
    function drag(e) {
      e.dataTransfer.setData("id", e.target.id);
    
      console.log('drag',e.target.id)
    }
    
    const card = document.createElement('div');
    card.setAttribute("draggable",true)
    card.setAttribute("id", cardLocalstorage.id)
    card.setAttribute("class", 'card')
    
    card.addEventListener('dragstart',drag)
    
    if(cardLocalstorage.columnName === 'todo') {
      columnToDo.appendChild(card)
    }
    if(cardLocalstorage.columnName === 'dong') {
      columnDoing.appendChild(card)
    }
  })
}

getElementsByLocalstorage()

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("id");
  console.log(document.getElementById(data))
  e.target.appendChild(document.getElementById(data));

  console.log('drop',e.target.id)
}

function createCard() {
  function drag(e) {
    e.dataTransfer.setData("id", e.target.id);
  
    console.log('drag',e.target.id)
  }
  
  const card = document.createElement('div');
  card.setAttribute("draggable",true)
  card.setAttribute("id", counter)
  card.setAttribute("class", 'card')
  
  card.addEventListener('dragstart',drag)
  
  columnToDo.appendChild(card)
  localStorage.setItem('cards', JSON.stringify([{id: counter, columnName: 'todo'}]))
  counter++
}

