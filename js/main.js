const randomNumber = function(min, max) {
  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert(randomNumber(110, 100));

const RandomNumberPoint = function (min, max, point) {

  if (min < 0 || max < 0 || min == max) {
    throw new Error('Некорректное значение');
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  let number = min + Math.random() * (max - min);
  return +number.toFixed(point)
}

alert(RandomNumberPoint(1.2, 1.21, 2))
