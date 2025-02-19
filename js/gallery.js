/*Name this external file gallery.js*/


function addTabIndexes() {
    // Images with class name 'preview'
    var images = document.getElementsByClassName('preview')
    
    for(let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0')
    }    
}


function upDate(previewPic) {
    /*  In this function you should 
        1) change the url for the background image of the div with the id = "image" 
        to the source file of the preview image
        
        2) Change the text  of the div with the id = "image" 
        to the alt text of the preview image 
    */

    var hoverImageContainer = document.getElementById('image') // id="image" Element
    // 1
    hoverImageContainer.style.backgroundImage = "url('" + previewPic.src + "')"
    // 2
    hoverImageContainer.innerHTML = previewPic.alt

}

function unDo() {
    /*  In this function you should 
        1) Update the url for the background image of the div with the id = "image" 
        back to the orginal-image.  You can use the css code to see what that original URL was
        
        2) Change the text  of the div with the id = "image" 
        back to the original text.  You can use the html code to see what that original text was
    */
    var hoverImageContainer = document.getElementById('image') // id="image" Element
    // 1
    hoverImageContainer.style.backgroundImage = "url('')" // Blank
    // 2
    hoverImageContainer.innerHTML = "Hover over an image below to display here."

}