function generateRandomValues(length)
{
let output = "";
 for(let index = 0;index<length;index++){
 
 const x = Math.floor(Math.random()*document.documentElement.clientWidth);
 const y = Math.floor(Math.random()*document.documentElement.clientHeight + (Math.random()*2000));
 
 if(index<length-1)
 output += `${x}px ${y}px #FFF , `;
 else
 output += `${x}px ${y}px #FFF`
 
 }
 return output;
}

const values = generateRandomValues(1500);

document.documentElement.style.setProperty('--value',values);