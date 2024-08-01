import facebookImg from '../../../assets/socials/facebook.png'
import twitterImg from '../../../assets/socials/twitter.png'
import webImg from '../../../assets/socials/web.png'
import linkedinImg from '../../../assets/socials/linkedin.png'
import assistantImg from '../../../assets/assistant.png'

export default function socialComponent() {
  //create social section
  const socialSection = document.createElement('section')
  socialSection.classList.add('socialsSection')

  //create social images section
  const iconsSection = document.createElement('section')
  iconsSection.classList.add('iconsSection')

  const facebook = document.createElement('img')
  facebook.src = facebookImg
  facebook.alt = 'facebook image'
  
  const twitter = document.createElement('img')
  twitter.src = twitterImg
  twitter.alt = 'twitter image'

  const web = document.createElement('img')
  web.src = webImg
  web.alt = 'web image'

  const linkedin = document.createElement('img')
  linkedin.src = linkedinImg
  linkedin.alt = 'linkedin image'

  iconsSection.append(facebook, twitter, web, linkedin)

  //assistant center action
  const assistantSection = document.createElement('section')
  assistantSection.classList.add('assistantSection')

  const assistant = document.createElement('img')
  assistant.src = assistantImg
  assistant.alt = 'assistant image'

  assistantSection.appendChild(assistant)
  
  socialSection.append(iconsSection, assistantSection)

  return socialSection
}