//imports
//styles
import '../../styles/css/loader.css'
import '../../styles/css/intro.css'
//images
import applogo from '../../assets/applogo_light.webp'
import deliveryImage from '../../assets/human_delivery.png'

export default function webPageIntro() {
    //get the container element
    const bodyContainer = document.getElementById('container')

    //create app logo
    const appLogo = document.createElement('img')
    appLogo.src = applogo
    appLogo.classList.add('app_logo')

    //create the customer image
    const customerImg = document.createElement('img')
    customerImg.src = deliveryImage
    customerImg.alt = 'delivery_guy imagery'
    customerImg.classList.add('intro_image')

    //create loader div
    const loaderDiv = document.createElement('div')
    loaderDiv.classList.add('loader')

    //create the status bar && status bar holder
    const statusBar = document.createElement('p')
    statusBar.classList.add('statusBar')
    statusBar.innerHTML = 'Please wait while App begins Loading...'

    const statusBarHolder = document.createElement('div')
    statusBarHolder.classList.add('statusBarHolder')
    statusBarHolder.appendChild(statusBar)


    //create the intro holder
    const introHolder = document.createElement('div')
    introHolder.classList.add('introHolder')

    //add the elements to the introholder
    introHolder.append(appLogo, customerImg, loaderDiv, statusBarHolder)

    //attach the introholder to the document container
    bodyContainer.appendChild(introHolder)
}