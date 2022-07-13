const screenSize = 1440;

const calc = (value) => `${(value * (100 / screenSize) * 1).toFixed(4)}vw`;
const vw = (attribute, value) => {
  if (Number.isInteger(value)) {
    return `
      ${attribute}: ${value}px;
      @media (max-width: ${screenSize}px) {
        ${attribute}: ${calc(value)};
      }
    `;
  }

  if (Array.isArray(value)) {
    const itemList = value.map((item) => (Number.isInteger(item) ? `${item}px` : item));
    const tabletItemList = value.map((item) => (Number.isInteger(item) ? calc(item) : item));

    return `
      ${attribute}: ${itemList.join(' ')};
      @media (max-width: ${screenSize}px) {
        ${attribute}: ${tabletItemList.join(' ')};
      }
    `;
  }

  return '';
};

export { vw, calc };
