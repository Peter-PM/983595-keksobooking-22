const Keys = {
  ESCAPE: 'Escape',
  ESC: 'ESC',
}

//Заготовка для слушателя
const isEscEvent = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
};

export {isEscEvent};

