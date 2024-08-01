//styles
import '../../styles/css/about.css'

const aboutPage = () => {
  //select the body element
  const bodyContainer = document.getElementById('container')

  //create about page header section and its parts
  const aboutPageHeaderSection = document.createElement('section')
  aboutPageHeaderSection.classList.add('about_header_section')
  
  const aboutPageHeader = document.createElement('h1')
  aboutPageHeader.classList.add('page_header')
  aboutPageHeader.textContent = 'About Us'

  aboutPageHeaderSection.appendChild(aboutPageHeader)
  
  
  //create about page paragraph section and its parts
  const aboutSection = document.createElement('section')
  aboutSection.classList.add('about_section')
  
  const paragraphText = document.createElement('p')
  paragraphText.classList.add('paragraph_text')
  paragraphText.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla perspiciatis laboriosam eveniet assumenda enim praesentium nihil eum eligendi minus qui impedit, magni quae deleniti illo explicabo sapiente dolores? Accusamus, fugiat?
  Sequi, aperiam autem quibusdam cumque, in tempora vel ab, eveniet totam et dignissimos quae! Voluptas, quidem aut! Iusto, quia molestias quos a modi vero nam cupiditate architecto, itaque aut reiciendis!
  Omnis error, a ea, architecto magni quod earum suscipit atque velit animi fugit autem id quia soluta, quae vitae ipsum fugiat fuga! Numquam consequatur, nobis ad voluptates quos aliquid. Odio.`

  aboutSection.appendChild(paragraphText)

  //append the about page sections to the page container
  bodyContainer.append(aboutPageHeaderSection, aboutSection)
}

export default aboutPage