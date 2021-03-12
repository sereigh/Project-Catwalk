const generateDescription = (characteristic, rating) => {
  const sizeDescriptions = [
    'A size too small',
    '1/2 a size too small',
    'Perfect',
    '1/2 a size too big',
    'A size too wide'
  ];

  const widthDescriptions = [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide'
  ];

  const comfortDescriptions = [
    'Uncomfortable',
    'Slightly uncomfortable',
    'Ok',
    'Comfortable',
    'Perfect'
  ];

  const qualityDescriptions = [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect'
  ];

  const lengthDescriptions = [
    'Runs short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long'
  ];

  const fitDescriptions = [
    'Runs tight',
    'Runs slightly tight',
    'Perfect',
    'Runs slightly long',
    'Runs long'
  ];

  return characteristic === 'Size' ? sizeDescriptions[rating - 1]
    : characteristic === 'Width' ? widthDescriptions[rating - 1]
    : characteristic === 'Comfort' ? comfortDescriptions[rating - 1]
    : characteristic === 'Quality' ? qualityDescriptions[rating - 1]
    : characteristic === 'Length' ? lengthDescriptions[rating - 1]
    : characteristic === 'Fit' ? fitDescriptions[rating - 1]
    : 'None Selected';
}

test("generateDescription produces the correct description", () => {
  expect(generateDescription('Size', 1)).toEqual('A size too small');
  expect(generateDescription('Size', 2)).toEqual('1/2 a size too small');
  expect(generateDescription('Size', 3)).toEqual('Perfect');
  expect(generateDescription('Size', 4)).toEqual('1/2 a size too big');
  expect(generateDescription('Size', 5)).toEqual('A size too wide');

  expect(generateDescription('Width', 1)).toEqual('Too narrow');
  expect(generateDescription('Width', 2)).toEqual('Slightly narrow');
  expect(generateDescription('Width', 3)).toEqual('Perfect');
  expect(generateDescription('Width', 4)).toEqual('Slightly wide');
  expect(generateDescription('Width', 5)).toEqual('Too wide');

  expect(generateDescription('Comfort', 1)).toEqual('Uncomfortable');
  expect(generateDescription('Comfort', 2)).toEqual('Slightly uncomfortable');
  expect(generateDescription('Comfort', 3)).toEqual('Ok');
  expect(generateDescription('Comfort', 4)).toEqual('Comfortable');
  expect(generateDescription('Comfort', 5)).toEqual('Perfect');

  expect(generateDescription('Quality', 1)).toEqual('Poor');
  expect(generateDescription('Quality', 2)).toEqual('Below average');
  expect(generateDescription('Quality', 3)).toEqual('What I expected');
  expect(generateDescription('Quality', 4)).toEqual('Pretty great');
  expect(generateDescription('Quality', 5)).toEqual('Perfect');

  expect(generateDescription('Length', 1)).toEqual('Runs short');
  expect(generateDescription('Length', 2)).toEqual('Runs slightly short');
  expect(generateDescription('Length', 3)).toEqual('Perfect');
  expect(generateDescription('Length', 4)).toEqual('Runs slightly long');
  expect(generateDescription('Length', 5)).toEqual('Runs long');

  expect(generateDescription('Fit', 1)).toEqual('Runs tight');
  expect(generateDescription('Fit', 2)).toEqual('Runs slightly tight');
  expect(generateDescription('Fit', 3)).toEqual('Perfect');
  expect(generateDescription('Fit', 4)).toEqual('Runs slightly long');
  expect(generateDescription('Fit', 5)).toEqual('Runs long');

  expect(generateDescription('foo', 5)).toEqual('None Selected');
  expect(!generateDescription('Size', 0));
});