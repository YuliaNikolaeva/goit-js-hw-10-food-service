import './styles.css';
import menuTemplate from './menu-template.hbs';
import menu from './menu.json';
import ref from './ref';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const createList = (arr, place) => {
  const templateList = arr.map(post => menuTemplate(post)).join('');
  place.insertAdjacentHTML('beforeend', templateList);
};

const toggleAndRememberClass = ([className, designationClass, elem, toDell]) => {
  if(toDell === null) {
    elem.classList.add(className);
    localStorage.setItem(designationClass, className);
  } else {
    elem.classList.remove(toDell);
    elem.classList.add(className);
    localStorage.setItem(designationClass, className);
  };
};


const getThema = () => {
  createList(menu, ref.menuList);
  
  if(localStorage.getItem('theme') === null) {
    toggleAndRememberClass(['light-theme', 'theme', ref.body, null]);
  } else {
    toggleAndRememberClass([localStorage.getItem('theme'), 'theme', ref.body, null]);
  };
};

const toogleTheme = () => {
  if (localStorage.getItem('theme') === 'light-theme') {
    toggleAndRememberClass(['dark-theme', 'theme', ref.body, 'light-theme']);
  } else {
    toggleAndRememberClass(['light-theme', 'theme', ref.body, 'dark-theme']);
  };
};


getThema();

ref.switchInput.addEventListener('change', toogleTheme);