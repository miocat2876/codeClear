export default function(data){
    let result = '';
    if(typeof(data) === 'object' && !Array.isArray(data)){
        result = '?' + Object.entries(data).map(item => item.join('=')).join('&');
    }else{
        result = '';
    }
    return result;
}