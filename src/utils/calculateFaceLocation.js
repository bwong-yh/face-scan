const calculateFaceLocation = (data) => {
  const image = document.getElementById("inputImage");
  const width = image.width;
  const height = image.height;

  return data.map((person) => {
    const boundingBox = person.region_info.bounding_box;

    return {
      leftCol: boundingBox.left_col * width,
      topRow: boundingBox.top_row * height,
      rightCol: width - boundingBox.right_col * width,
      bottomRow: height - boundingBox.bottom_row * height,
    };
  });
};

export default calculateFaceLocation;
