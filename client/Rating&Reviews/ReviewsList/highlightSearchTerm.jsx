import React from "react";

const highlightSearchTerm = (string, searchTerm) => {
  if (searchTerm === "") {
    return string;
  }

  const splitString = string.split(searchTerm);
  const newString = [];

  for (let i = 0; i < splitString.length; i += 1) {
    newString.push(splitString[i]);
    newString.push(<mark key={i}>{searchTerm}</mark>);
  }

  newString.pop();

  return <>{newString}</>;
};

export default highlightSearchTerm;
