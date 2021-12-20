import tvm from './tvm_api.png';

const logo = document.querySelector('.logo');

const headerLogo = () => {
  const myIcon = new Image();
  myIcon.src = tvm;
  return logo.append(myIcon);
};

export default { headerLogo };