var file = document.querySelector('[type="file"]')
var imagePreviewContainer = document.querySelector('.image-preview')

file.addEventListener('change', function(){
    previewImage(this);
})

function previewImage(input) {
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
           imagePreviewContainer.classList.add('is-active');
           imagePreviewContainer.style.backgroundImage = 'url(' + e.target.result + ')';
        }

        reader.readAsDataURL(input.files[0]);
    } 
}