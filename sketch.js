
const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)

  PALETTE = [
    color(32, 32, 32), 
    color(255, 52, 154), 
    'brown',
    'blue'
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {

  testLines()
  outlineShape()
  simpleLines()
  circles()

  let picker = random(1)
  if(picker > 0.3) {
    outlineShape
  }

  picker = random(1)
  if(picker > 0.3){
    simpleLines()
  }

  picker = random(1)
  if(picker > 0.3){
    circles()
  }
}

function circles () {
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (CRYSTAL_SIZE / 2) * 0.93
  const position = (CRYSTAL_SIZE / 2) - (shapeSize / 2)
  const strokeColor = getRandFromPalette()

  noFill()
  stroke(strokeColor)
  strokeWeight(1)
  push()
  translate(width/2, height/2)
  for(let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
}

function outlineShape () {
  const strokeColor = getRandFromPalette()
  const weight = randSelectOfTwo() ? 1 : 3
  const hexagonTrue = randSelectOfTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width/2, height/2)
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
  pop()
}

function testLines() {
  let numShapes = randSelectOfTwo() ? SIDES : SIDES * 2;
  const strokeColor = getRandFromPalette()

  noFill(0)
  stroke(PALETTE[1])
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

    stroke(strokeColor)
    const angle = 360 / numShapes
    for(let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE/2)
      rotate(angle)
    }
  pop()
}

function simpleLines() {
const stepsOut = 8
const numSteps = randSelectOfTwo() ? stepsOut : int(stepsOut * 1.25)
const step = (CRYSTAL_SIZE / 2) / numSteps
const start = floor(random(0, numSteps))
const stop = floor(random(start, numSteps + 1))

  let numShapes = randSelectOfTwo() ? SIDES : SIDES * 2;
  const strokeColor = getRandFromPalette()
  const weight = randSelectOfTwo() ? 1 : 3

  noFill(0)
  stroke(strokeColor)
  strokeWeight(weight)
  const angle = 360 / numShapes
  
  push()
    translate(width/2, height/2)

    for(let i = 0; i < numShapes; i++) {
      line(start * step, 0, stop * step, 0)
      rotate(angle)
    }
  pop()
}







