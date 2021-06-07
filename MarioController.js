class State {
  constructor(){
    this.currentState = "normal"
    this.x = 0;
    this.y = 0;
  }

  get currentState() {
    return this.currentState;
  }

  set cureentState(value){
    this.currentState = value;
  }

  left(){
    return this.x--;
  }

  right(){
    return this.x++;
  }
}

const mario = new Mario();

window.addEventListener("keydown", function (event) {
  console.log(event.keyCode)

  const right = event.keyCode === 39
  const left = event.keyCode === 37

  let DOM_Mario_x = "translate(calc(-50% + "+ mario.x * 8 +"px), -50%)";

  if(right){
    mario.right();
    document.getElementById("mario").style.transform = DOM_Mario_x;
  }

  if(left){
    mario.left();
    document.getElementById("mario").style.transform = DOM_Mario_x;
  }
})
