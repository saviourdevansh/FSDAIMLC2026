const div=document.getElementById('container')
const button=document.getElementById('btn')

console.log(div);
function display(){
//div.innerHTML='<h2>Hello ussing DOm</h2>';
const server=fetch('https://chatgpt.com/c/6a7e9780-790c-83e8-9863-bb8494674236')
console.log(serverdata)
}
button.addEventListener('click',display);