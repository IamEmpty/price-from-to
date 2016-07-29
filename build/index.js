var element = document.querySelector('.price-range-dropdown');
element.classList.add('hide');

document.querySelector('.price-range-button').addEventListener('click', showDropdown);

function showDropdown() {
  document.querySelector('.price-range-dropdown').classList.toggle('hide');
  document.querySelector('.price-range-dropdown__input').focus();
  return false
}

document.querySelector('.price-range__list').addEventListener('click', choose);

function choose(e) {
  e.preventDefault();
  console.log(e.target.value);
}