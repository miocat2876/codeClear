let URL         = '';
const DEV_URL   = 'https://cc.miocat.synology.me';
const LOCAL_URL = 'http://192.168.0.24:9997';

if(location.hostname === 'code-clear.synology.me'){
  URL = DEV_URL;
}else{
  URL = LOCAL_URL;
}

export default () =>{
  return URL;
}