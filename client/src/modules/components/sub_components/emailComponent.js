import emailImg from '../../../assets/email_light.png'

export default function emailComponent() {
  //create email section
  const emailSection = document.createElement('section')
  emailSection.classList.add('emailSection')

  //email Icon
  const emailIcon = document.createElement('img')
  emailIcon.src = emailImg
  emailIcon.alt = 'email icon'

  //email text
  const emailText = document.createElement('p')
  emailText.textContent = 'info@vubavuba.rw'

  emailSection.append(emailIcon, emailText)

  return emailSection
}