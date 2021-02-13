const getRandomNumber = function(min, max) {
  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

const getRandomNumberPoint = function (min, max, point) {

  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return +(min + Math.random() * (max - min)).toFixed(point);
}

export {getRandomNumber, getRandomNumberPoint};
