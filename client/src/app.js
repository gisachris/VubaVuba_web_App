//pages
import homePage from "./modules/pages/home";
import aboutPage from "./modules/pages/about";

//components
import webPageIntro from "./modules/components/intro";
import headerComponent from "./modules/components/header";
import navigation from "./modules/components/navigation";

//helpers
import dataFetch from "./modules/helpers/dataHelpers";
import { componentCleanUp  } from '../src/modules/helpers/componentHelpers';

//styles
import './styles/css/index.css';

window.addEventListener('DOMContentLoaded', async () => {
  try {
    webPageIntro()

    await dataFetch()
    
    //remove intro after data fetch
    componentCleanUp()
    
    //introduce page components
    headerComponent()
    navigation()

  //Application Routing Setup

  //make viable routes
    const VIABLE_ROUTES = {
      home: 'home',
      categories: 'categories',
      checkout: 'checkout',
      about: 'about',
    }


    const handleRouting = () => {
      //page cleanUp
      componentCleanUp()

      //gather new Url
      const urlPath = window.location.hash.substring(1).toLowerCase();

      switch(urlPath) {
        case VIABLE_ROUTES.home:
          homePage()
          break;
        case VIABLE_ROUTES.categories:
          // Handle categories route
          break;
        case VIABLE_ROUTES.checkout:
          // Handle checkout route
          break;
        case VIABLE_ROUTES.about:
          aboutPage(); // Show about page
          break;
        default:
          homePage()
          break;
      }
    };

    // Initial routing
    handleRouting();

    // Listen for hash change events
    window.addEventListener('hashchange', handleRouting);
    
  } catch (error) {
    console.error(error)
  }
})