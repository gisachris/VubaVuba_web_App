//imports

//images
import home_image from '../../assets/home.png'
import categories_image from '../../assets/shopping.png'
import cart_image from '../../assets/checkout.png'
import about_image from '../../assets/about.png'

//styles
import '../../styles/css/navigations.css'

//navigation bar
export const linkCreator = (href, text, image) => {
  const link = document.createElement('a');
  link.classList.add('link', `${text}_link`);
  link.href = href;
  link.dataset.name = text
  link.innerHTML = 
  `
  <img src=${image} alt="${text}" class="${text}_image nav_image">
  `;
  return link;
}

export const shopItemNumberUpdater = (itemNumber = 0) => {
  const navigationShoppingCart = document.querySelector('nav .Checkout_link')
  navigationShoppingCart.dataset.items = itemNumber
}

export default function navigation() {
  //create a nav holder
  const navHolder = document.createElement('div')
  navHolder.classList.add('navHolder')
  
  //create a nav bar
  const navBar = document.createElement('nav');
  navBar.classList.add('navBar');

  //create different page links
  const home_page = linkCreator('#home', 'Home', home_image);
  const categories_page = linkCreator('#categories', 'Categories', categories_image);
  const checkout_page = linkCreator('#checkout', 'Checkout', cart_image);
  const about_page = linkCreator('#about', 'AboutUs', about_image);

  //bring all links together in the nav bar
  navBar.append(home_page, categories_page, checkout_page, about_page);

  //append the navBar to the navHolder
  navHolder.appendChild(navBar)

  //introduce navigation to the page body
  document.body.appendChild(navHolder);

  //update the shopping cart number
  shopItemNumberUpdater()
}