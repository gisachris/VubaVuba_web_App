//subComponents
import emailComponent from './sub_components/emailComponent';
import socialComponent from './sub_components/socialsComponent';

//imagery
import companyLogo from '../../assets/applogo_light.webp';
// import companyEmailImage from '../../assets/email.webp';

//styles
import '../../styles/css/header.css'

const headerComponent = () => {
  //select the document body
  const documentBody = document.body

  //create the header element
  const headerSection = document.createElement('header')
  headerSection.id = 'header'

  //create the logo section in the header element
  const logoSection = document.createElement('section')
  logoSection.classList.add('logoSection')

  //create a link for the image
  const logoLink = document.createElement('a');
  logoLink.href = '/#home';
  logoLink.classList.add('logoLink');

  //create the logo image
  const logoImage = document.createElement('img')
  logoImage.src = companyLogo
  logoImage.alt = 'company Logo'

  //append the logo image to the logolink then to the logo section
  logoLink.append(logoImage);

  logoSection.appendChild(logoLink);


  //create headerInformationSection 
  const headerInformationSection = document.createElement('section')
  headerInformationSection.classList.add('headerInfoSection')

  //create email section
  const emailSection = emailComponent()
  
  //create Socials section
  const socialsSection = socialComponent()
  
  //add sections to the headerInformationSection
  headerInformationSection.append(emailSection, socialsSection)

  //add header sections to the header
  headerSection.append(logoSection, headerInformationSection)

  //add the header section to the document flow above the container
  const containerNode = document.getElementById('container')
  documentBody.insertBefore(headerSection, containerNode)
}

export default headerComponent