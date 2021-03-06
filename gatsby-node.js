const createNodeHelpers = require("gatsby-node-helpers").default

const {
  createNodeFactory,
  generateNodeId,
  ganerateTypeName,
} = createNodeHelpers({ typePrefix: `vizlab` })

/* const DataNode = createNodeFactory("vislab", node => {
  if(node.id){
    
  }
}) */

const DataNode = createNodeFactory("vislab")

const dataProfessors = [
  {
    id: 1,
    name: "Carla Dal Sasso Freitas",
    descripion:
      "Carla Freitas obtained her M.Sc. and Ph.D. degrees in Computer Science from UFRGS, in 1982 and 1994, respectively. Since 1980, she is a professor at the Institute of Informatics (UFRGS), teaching data visualization courses at undergraduate and graduate levels. During most of her career, she gave courses on computer graphics at the undergraduate level, and visualization, for graduate students. For some time, she taught also human-computer interaction and object-oriented programming. In 1996, she was a visiting scholar at International Computer Science Institute and Ernest O. Lawrence Berkeley Laboratory, Berkeley, CA, working in the development of a collaborative system for supporting physicists' experiments at the ALS. Her current research interests are designing and developing interactive visualization techniques for desktop or immersive environments aiming at improving the comprehension of large and/or complex datasets. Application domains she is currently targeting are government open data (roll calls data from the Brazilian Chamber of Deputies, the Brazilian federal budget data), geochemical simulations results (joint work with Petrobras and UFRGS Geosciences Institute) and confocal microscopy images (mice bile ducts provided by partner researchers from Cincinnati Children's Hospital and Hospital de Clinicas de Porto Alegre). ",
  },
  {
    id: 2,
    name: "Anderson Maciel",
    descripion:
      "I'm interested in a broad range of topics in Graphics, Visualization and Human-computer Interaction. This includes virtual reality, augmented reality, physically plausible animation, haptics, interactive visualization, medical applications in graphics and VR, wearable and handheld interaction among others.",
  },
]

exports.sourceNodes = ({ actions: { createNode } }) => {
  dataProfessors.forEach(data => {
    const _data = DataNode(data)
    createNode(_data)
  })
}
