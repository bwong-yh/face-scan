
const calculateFaceLocation = (data) => {
  const image = document.getElementById('inputImage')
  const width = Number(image.width)
  const height = Number(image.height)

  const face = data[0].region_info.bounding_box

  return {
    leftCol: face.left_col * width,
    topRow: face.top_row * height,
    rightCol: width - (face.right_col * width),
    bottomRow: height - (face.bottom_row * height),
  }
}

export default calculateFaceLocation