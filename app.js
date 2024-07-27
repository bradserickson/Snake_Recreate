let head = document.getElementById('1-27');
let started = false;
let direction = null;

//listen for arrow key events
document.addEventListener('keydown', function(e) {
  //start the game with the first key click
  if(!started){
    started = true;
  }

  const key = e.key;

  if(key === "ArrowDown"){
    direction = "down";
  }
  else if(key === "ArrowUp"){
    direction = "up";
  }
  else if(key === "ArrowRight"){
    direction = "right";
  }
  else if(key === "ArrowLeft"){
    direction = "left";
  }
})

//once the game is started, continue in the set direction
setInterval(function(){
  if(direction === "down" && started){
    moveDown();
  }
  else if (direction === "up" && started){
    moveUp();
  }
  else if (direction === "left" && started){
    moveLeft();
  }
  else if (direction === "right" && started){
    moveRight()
  }
  else{

  }
} , 500)

function moveDown(){
  const oldId = head.id;
  const newId = incrRow(oldId);

  //switch head class from old head to new head
  let newHead = document.getElementById(newId);

  //if the function didn't returned null ( which only happens if the player tried to move out of bounds)
  if(newHead != null){
    newHead.classList.add('head');
    head.classList.remove('head');
  
    head = newHead;
  }
}

function moveUp(){
  const oldId = head.id;
  const newId = decRow(oldId);

  //switch head class from old head to new head
  let newHead = document.getElementById(newId);

  //if the function didn't returned null ( which only happens if the player tried to move out of bounds)
  if(newHead != null){
    newHead.classList.add('head');
    head.classList.remove('head');
  
    head = newHead;
  }
}

function moveLeft(){
  const oldId = head.id;
  const newId = decCol(oldId);

  //switch head class from old head to new head
  let newHead = document.getElementById(newId);

  //if the function didn't returned null ( which only happens if the player tried to move out of bounds)
  if(newHead != null){
    newHead.classList.add('head');
    head.classList.remove('head');
  
    head = newHead;
  }
}

function moveRight(){
  const oldId = head.id;
  const newId = incrCol(oldId);

  //switch head class from old head to new head
  let newHead = document.getElementById(newId);

  //if the function didn't returned null ( which only happens if the player tried to move out of bounds)
  if(newHead != null){
    newHead.classList.add('head');
    head.classList.remove('head');
  
    head = newHead;
  }
}



// four functions, one to increment row, one to decrement row, one to increment column, one to decrement column
function incrRow(id){
  const dashPos = id.indexOf('-');
  let rowValue = parseInt(id.substring(0, dashPos), 10);

  if(rowValue < 36){
    rowValue++;
    const altId = rowValue.toString() + id.substring(dashPos);
    return altId;
  }
}

function decRow(id){
  const dashPos = id.indexOf('-');
  let rowValue = parseInt(id.substring(0, dashPos), 10);

  if(rowValue > 1){
    rowValue--;
    const altId = rowValue.toString() + id.substring(dashPos);
    return altId;
  }
}

function incrCol(id){
  const dashPos = id.indexOf('-');
  let colValue = parseInt(id.substring(dashPos + 1), 10); //get the value after the dash (the column number)

  if(colValue < 50){
    colValue++;
    const altId = id.substring(0, dashPos + 1) + colValue.toString();
    return altId;
  }
}

function decCol(id){
  const dashPos = id.indexOf('-');
  let colValue = parseInt(id.substring(dashPos + 1), 10); //get the value after the dash (the column number)

  if(colValue > 1){
    colValue--;
    const altId = id.substring(0, dashPos + 1) + colValue.toString();
    return altId;
  }
}