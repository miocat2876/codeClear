const DEV_BACK_URL   = 'https://cc.miocat.synology.me';
const LOCAL_BACK_URL = 'http://localhost:8080';
const DEV_FRONT_URL  = 'https://code-clear.miocat.synology.me';

export default () =>{
  let URL = '';
  if(location.origin !== DEV_FRONT_URL){
    URL = DEV_BACK_URL;
  }else{
    URL = LOCAL_BACK_URL;
  }
  return URL;
}