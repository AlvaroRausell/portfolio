import React from "react"
import Sketch from "react-p5"

export default props => {
  let NUM_OF_PARTICLES = props.numParticles
  let particles = []
  let MIN_DISTANCE = 3
  let MAX_DISTANCE = 50

  const setup = (p5, canvasParentRef) => {
    // console.log()
    canvasParentRef.setAttribute("height", "100%")
    p5.createCanvas(window.innerWidth - 20, window.innerHeight - 20).parent(
      canvasParentRef
    )
    p5.background("white")
    for (let index = 0; index < NUM_OF_PARTICLES; index++) {
      particles.push(
        new Particle(p5.random(p5.width), p5.random(p5.height), p5)
      )
    }
  }

  const draw = p5 => {
    p5.background(255)
    particles.forEach(particle => {
      particle.update()
      particle.display(p5)
    })
  }

  class Particle {
    constructor(positionX, positionY, p5) {
      this.colour = "black"
      this.size = 4
      this.p5 = p5
      this.neighbours = []
      this.initialSpeed = 1
      this.position = {
        x: positionX,
        y: positionY,
      }
      this.motion = {
        velocity: {
          x: p5.random(-this.initialSpeed, this.initialSpeed),
          y: p5.random(-this.initialSpeed, this.initialSpeed),
        },
        acceleration: { x: 0, y: 0 },
      }
    }
    drawNeighbours = () => {
      this.p5.strokeWeight(1)
      this.neighbours.forEach(neighbour => {
        this.p5.line(
          this.position.x,
          this.position.y,
          neighbour.position.x,
          neighbour.position.y
        )
      })
    }
    update() {
      //Update acceleration
      this.motion.acceleration = {
        x: this.p5.random(-0.001, 0.001),
        y: this.p5.random(-0.001, 0.001),
      }
      //Update speed
      this.motion.velocity = addDictValues(
        this.motion.velocity,
        this.motion.acceleration
      )
      //Update position
      this.position = addDictValues(this.position, this.motion.velocity)
      if (this.position.x < 0 || this.position.x > this.p5.width) {
        this.motion.velocity.x *= -1
      }
      if (this.position.y < 0 || this.position.y > this.p5.height) {
        this.motion.velocity.y *= -1
      }
      this.age += 1 / 60 // Equivalent of seconds based on framerate
      this.neighbours = findNeighbours(
        this.position,
        MIN_DISTANCE,
        MAX_DISTANCE
      )
    }

    display = p5 => {
      p5.stroke(this.colour)
      p5.strokeWeight(this.size)
      p5.point(this.position.x, this.position.y)
      this.drawNeighbours()
    }
  }
  // Some helper functions because I'm very lazy
  const addDictValues = (dict1, dict2) => {
    let sum = {}
    Object.keys(dict1).forEach(key => {
      if (dict2[key]) {
        sum[key] = dict1[key] + dict2[key]
      }
    })
    return sum
  }

  const findNeighbours = (particlePosition, minDistance, maxDistance) => {
    let neighbours = []
    particles.forEach(particle => {
      let distance = getDistance(particlePosition, particle.position)
      if (distance >= minDistance && distance <= maxDistance)
        neighbours.push(particle)
    })
    return neighbours
  }

  const getDistance = (positionOne, positionTwo) => {
    return Math.sqrt(
      Math.pow(positionOne.x - positionTwo.x, 2) +
        Math.pow(positionOne.y - positionTwo.y, 2)
    )
  }

  return <Sketch setup={setup} draw={draw}></Sketch>
}
