//Alumno: Tobias Juan Cruz Cisneros
//Legajo: 118995/3
//https://www.youtube.com/watch?v=8OzCU0P91I0

let img;
let colorFondo;
let reiniciar = false;
let tamCuadroBase = 2;
let offsetX;

function preload() {
  img = loadImage("assets/obra_agv.jpg");
}

function setup() {
  createCanvas(800, 400);
  colorFondo = color(139, 69, 19);
  offsetX = img.width;
}

function draw() {
  background(255);
  image(img, 0, 0);
  dibujarCuadricula(offsetX, (height - 15 * (tamCuadroBase + 5)) / 2 - 100, 1, 1);
  
  if (reiniciar) {
    colorFondo = color(139, 69, 19);
    reiniciar = false;
  }
  
  if (offsetX > img.width) {
    offsetX = img.width;
  }
}

function dibujarCuadricula(posX, posY, incrementoI, incrementoK) {
  for (let fila = 0; fila < 25; fila++) {
    for (let columna = 0; columna < 25; columna++) {
      let tamCuadro = tamCuadroBase;
      
      if (columna > 12) {
        if (fila > 12) {
          fill(colorFondo);
          rect(posX, posY, tamCuadro + 12 - incrementoI, tamCuadro + 12 - incrementoK);
        } else {
          fill(colorFondo);
          rect(posX, posY, tamCuadro + 12 - incrementoI, tamCuadro + fila);
        }
        incrementoI += 1;
        posX += tamCuadroBase + 12 - incrementoI + 5;
      } else {
        if (fila > 12) {
          fill(colorFondo);
          rect(posX, posY, tamCuadro + columna, tamCuadro + 12 - incrementoK);
        } else {
          fill(colorFondo);
          rect(posX, posY, tamCuadro + columna, tamCuadro + fila);
        }
        posX += tamCuadroBase + columna + 5;
      }
    }
    if (fila > 12) {
      incrementoK++;
    }
    incrementoI = 1;
    posX = offsetX;
    if (fila > 12) {
      posY += tamCuadroBase + 12 - incrementoK + 5;
    } else {
      posY += tamCuadroBase + fila + 5;
    }
  }
}

function verificarPosicionMouse(mouseX, mouseY) {
  if (mouseX > 400 && mouseX < 800) {
    colorFondo = colorAleatorio();
  }
}

function mousePressed() {
  verificarPosicionMouse(mouseX, offsetX);
}

function colorAleatorio() {
  return color(random(255), random(255), random(255));
}

function keyPressed() {
  if (key === 'r') {
    reiniciarPrograma();
  }
}

function reiniciarPrograma() {
  reiniciar = true;
}
