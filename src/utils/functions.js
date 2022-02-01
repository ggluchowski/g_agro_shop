exports.toPriceFormat = function (price) {
  if (isNaN(price)) {
    return '';
  } else {
    return price.toLocaleString('en', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: '2',
      maxFractionDigits: '2',
    });
  }
};
