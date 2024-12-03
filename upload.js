  // Select the file input and the image preview elements
        const fileInput = document.getElementById('file-input');
        const imagePreview = document.getElementById('image-preview');

        // Add an event listener to the file input
        fileInput.addEventListener('change', function(event) {
            // Check if a file was selected
            if (event.target.files && event.target.files[0]) {
                // Create a FileReader to read the file
                const reader = new FileReader();
                
                // When the file is loaded, set the image preview source to the file data
                reader.onload = function(e) {
                    imagePreview.src = e.target.result; // Set the src to the file's data
                    imagePreview.style.display = 'block'; // Display the image
                }
                
                // Read the file as a Data URL (base64 encoded)
                reader.readAsDataURL(event.target.files[0]);
            }
        });
        
  const phone = document.querySelector('.phone');
  
  const inputImg = document.querySelector('.file-input');
        
  const uploadBtn = document.querySelector('.uploadBtn');
  
  import {albums,displayAll} from './album.js';
  
  uploadBtn.addEventListener('click',()=>{
    
    albums.push(
      {
        image:`${inputImg.value}`,
        contact:`${phone.value}`
      }
      )
    displayAll();
  })

  
  
  
  
  
  