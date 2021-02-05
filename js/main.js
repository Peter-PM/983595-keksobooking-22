const getRandomNumber = function(min, max) {
  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert(getRandomNumber(110, 100));

const getRandomNumberPoint = function (min, max, point) {

  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return +(min + Math.random() * (max - min)).toFixed(point);
}

alert(getRandomNumberPoint(1.2, 1.21, 2))
