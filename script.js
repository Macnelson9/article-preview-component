'use strict';

const shareBtn = document.querySelector('.share');
const shareBtn2 = document.querySelector('.share2');
const namesContainer = document.querySelector('.names-container');
const socialContainer = document.querySelector('.social-container');

shareBtn2.addEventListener('click', function () {
  socialContainer.classList.remove('hidden');
  namesContainer.classList.add('hidden');
});

shareBtn.addEventListener('click', function () {
  namesContainer.classList.remove('hidden');
  socialContainer.classList.add('hidden');
});
