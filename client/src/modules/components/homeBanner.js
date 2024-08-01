//styles
import '../../styles/css/banner.css'

//imagery
import designOne from '../../assets/site_banners/im1.webp'

export default function homeBanner(){
  //select the container element
  const container = document.getElementById('container');

  //create the bannerSection and banner holder
  //banner section
  const bannerSection = document.createElement('section');
  bannerSection.classList.add('bannerSection');

  //bannerHolder
  const bannerHolder = document.createElement('div');
  bannerHolder.classList.add('bannerHolder');

  //banner
  const bannerImage = document.createElement('img');
  bannerImage.classList.add('bannerImage');
  bannerImage.src = designOne;
  bannerHolder.alt = 'designOne';

  //append materials
  bannerHolder.append(bannerImage);
  bannerSection.append(bannerHolder);
  container.appendChild(bannerSection);
}