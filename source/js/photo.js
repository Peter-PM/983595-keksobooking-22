const AVATAR_SRC = document.querySelector('.ad-form-header__preview').querySelector('img').src;
const FILES_TYPE = ['gif', 'jpg', 'jpeg', 'png'];

const mainForm = document.querySelector('.ad-form');
const avatarInput = mainForm.querySelector('#avatar');
const avatarPreview = mainForm.querySelector('.ad-form-header__preview').querySelector('img');
const housingInput = mainForm.querySelector('#images');
const housingPreview = mainForm.querySelector('.ad-form__photo');


housingPreview.style.width = 'auto';
housingPreview.style.minWidth = '70px';
housingPreview.style.marginTop = '2px';

const showAvatar = (evt, preview) => {
  preview.src = evt.target.result;
}

const showHousePhoto = (evt, preview) => {
  const photosItem = document.createElement('img');
  photosItem.className = 'popup__photo';
  photosItem.width = '70';
  photosItem.alt = 'Фотография жилья';
  photosItem.src = evt.target.result;
  preview.appendChild(photosItem);
}

const showUserPhotos = (input, preview, funct) => {
  input.addEventListener('change', (evt) => {
    const file = evt.target.files[0];
    const fileType = file.type.toLowerCase();

    const conformity = FILES_TYPE.some((it) => {
      return fileType.endsWith(it)
    });

    if (conformity) {
      const reader = new FileReader();

      reader.addEventListener('load', (evt) => {
        funct(evt, preview);
      });

      reader.readAsDataURL(file);
    }
  });
}

const removeAvatar = () => {
  avatarPreview.src = AVATAR_SRC;
}

const removeHousePhoto = () => {
  housingPreview.innerHTML = '';
}

showUserPhotos(avatarInput, avatarPreview, showAvatar)
showUserPhotos(housingInput, housingPreview, showHousePhoto)

export {removeAvatar, removeHousePhoto}
