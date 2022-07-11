const screenSize = 1440;

const calc = (value) => {
  if (window.innerWidth > screenSize) {
    return `${value}px`;
  }

  return `${(value * (100 / screenSize) * 1).toFixed(4)}vw`;
};
const vw = (attribute, value) => {
  if (Number.isInteger(value)) {
    return `${attribute}: ${calc(value)};`;
  }

  if (Array.isArray(value)) {
    const itemList = value.map((item) => (Number.isInteger(item) ? calc(item) : item));

    return `${attribute}: ${itemList.join(' ')};`;
  }

  return '';
};

export { vw, calc };
