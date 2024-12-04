export const albums = [{
  image:'album1.jpg',
  contact:'07528890'
},
{
  image:'album2.jpg',
  contact:'0756675433'
},
{
  image:'mus.JPG',
  contact:'0774953786'
}
 ]
 
 displayAll()
export function displayAll() {
 
 let html='';
 
 albums.forEach( (photo)=>{
   
 html+=`
  <div><img src="${photo.image}" alt="">
  <span class="photo-contact">${photo.contact}</span>
  </div>`
 })
 
 const display = document.querySelector('.photos');
 
display.innerHTML = html;
 
 console.log(html)
} 
 



