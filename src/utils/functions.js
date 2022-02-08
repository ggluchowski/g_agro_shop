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

exports.sum = function (quantity, price) {
  return parseInt(quantity) * parseFloat(price);
};

exports.pricePrint = function(price) {
  return price.toFixed(2);
};
