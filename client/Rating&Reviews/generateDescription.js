const generateDescription = (characteristic, rating) => {
  const sizeDescriptions = [
    "A size too small",
    "1/2 a size too small",
    "Perfect",
    "1/2 a size too big",
    "A size too wide",
  ];

  const widthDescriptions = [
    "Too narrow",
    "Slightly narrow",
    "Perfect",
    "Slightly wide",
    "Too wide",
  ];

  const comfortDescriptions = [
    "Uncomfortable",
    "Slightly uncomfortable",
    "Ok",
    "Comfortable",
    "Perfect",
  ];

  const qualityDescriptions = [
    "Poor",
    "Below average",
    "What I expected",
    "Pretty great",
    "Perfect",
  ];

  const lengthDescriptions = [
    "Runs short",
    "Runs slightly short",
    "Perfect",
    "Runs slightly long",
    "Runs long",
  ];

  const fitDescriptions = [
    "Runs tight",
    "Runs slightly tight",
    "Perfect",
    "Runs slightly long",
    "Runs long",
  ];

  return characteristic === "Size"
    ? sizeDescriptions[rating - 1]
    : characteristic === "Width"
    ? widthDescriptions[rating - 1]
    : characteristic === "Comfort"
    ? comfortDescriptions[rating - 1]
    : characteristic === "Quality"
    ? qualityDescriptions[rating - 1]
    : characteristic === "Length"
    ? lengthDescriptions[rating - 1]
    : characteristic === "Fit"
    ? fitDescriptions[rating - 1]
    : "None Selected";
};

export default generateDescription;
