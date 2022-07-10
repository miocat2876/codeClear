let URL         = '';
const DEV_URL   = 'https://cc.miocat.synology.me';
const LOCAL_URL = 'http://localhost:8080';

if(location.hostname === 'code-clear.miocat.synology.me'){
  URL = DEV_URL;
}else{
  URL = LOCAL_URL;
}

export default () =>{
  return URL;
}