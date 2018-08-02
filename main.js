var file = document.querySelector('[type="file"]')

file.addEventListener('change', function(){
    previewImage(this);
})

function previewImage(input) {
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            var image = document.createElement('img')
            image.src = e.target.result;

            input.parentNode.insertBefore(image, input)
        }

        reader.readAsDataURL(input.files[0]);
    } 
}