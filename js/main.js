let randomNumber = getRandomNumber();

function getRandomNumber(min = 0, max = 100) {
  if (min == max) {
    return alert('Интервал недопустимо мал!');
  }

  if (min < 0 || max < 0) {
    return alert('Используйте положительные числа.');
  }

  if (min > max) {
    return Math.floor(max + Math.random() * (min + 1 - max));
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert(randomNumber);

function getRandomNumberPoint(min = 0, max = 100) {

  if (min == max) {
    return alert('Интервал недопустимо мал!');
  }

  if (min < 0 || max < 0) {
    return alert('Используйте положительные числа.');
  }

  if (min > max) {
    let number = max + Math.random() * (min - max);
    return +number.toFixed(4)
  }

  let number = min + Math.random() * (max - min);
  return +number.toFixed(4)
}

alert(getRandomNumberPoint(1.2111, 1.2112))
