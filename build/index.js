var element = document.querySelector('.price-range-dropdown');
element.classList.add('hide');

document.querySelector('.price-range-button').addEventListener('click', showDropdown);

function showDropdown(e) {
  document.querySelector('.price-range-dropdown').classList.toggle('hide');
  document.querySelector('.price-range-dropdown__input').focus();
  e.preventDefault();
}

document.querySelector('.price-range__column .price-range__list').addEventListener('click', choose);

function choose(e) {
  e.preventDefault();
  this.previousSibling.value = e.target.value;
  document.querySelector('#price-range-finish').focus();
}