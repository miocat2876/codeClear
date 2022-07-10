export default function(data){
    return '?' + Object.entries(data).map(item => item.join('=')).join('&');
}