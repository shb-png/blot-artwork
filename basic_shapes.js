
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

function yourShape(n, sideLength) {
  const t = new bt.Turtle()
  const angle = 180-((n - 2) * 180 / n)
  for (let i=0; i<n; i++) {
      t.forward(sideLength)
      t.left(angle)
  }
  let finalPolygon = bt.originate(t.lines())
  bt.translate(finalPolygon, [width/2, height/2])
  return finalPolygon
};

function yourCos(yourValue) {
  let finalNum = Math.cos(yourValue*(Math.PI/90))
  return finalNum

}

// function yourCircle(radius) {
//   const t = new bt.Turtle()
//   const sideLength = 2*radius/yourCos((50 - 2) * 180 / 50)
//   const angle = 180-((50 - 2) * 180 / 50)
//   for (let i=0; i<50; i++) {
//       t.forward(sideLength)
//       t.left(angle)
//   }
//   let finalCircle = bt.originate(t.lines())
//   bt.translate(finalCircle, [width/2, height/2])
//   return finalCircle
// }


  const c = new bt.Turtle()
  const radius = 30 //distance from a corner to the center
  const sideRes = 10
  const innerAngle = ((sideRes - 2) * 180 / sideRes)
  const rotateAngle = 180-innerAngle
  let sideLength = 2*radius/yourCos(innerAngle/2)
  console.log(`cos angle: ${yourCos(innerAngle/2)} inner angle: ${innerAngle}`)
  for (let i=0; i<sideRes; i++) {
      c.forward(sideLength)
      c.left(rotateAngle)
  }
  const finalCircle = bt.originate(c.lines())
  bt.translate(finalCircle, [width/2, height/2])

// draw it
drawLines(finalCircle)