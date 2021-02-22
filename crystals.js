

class Crystal {
  constructor() {
      this.sides = SIDES
      this.numShapes = this.sides
      this.angle = 360 / this.numShapes
      this.stepsOut = 8
      this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut
      this.thinStroke = 1
      this.thickStroke = 3
      this.strokeColor = getRandFromPalette()
  };
}

class Circles extends Crystal {
  constructor(){
    super()
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
    this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(1)
    push()
    translate(width/2, height/2)
    for(let i = 0; i <= this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }
    pop()
  }
}

class SimpleLines extends Crystal {
  constructor() {
    super()
    this.numSteps = randSelectOfTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
      }
}