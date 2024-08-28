const mainContainer = document.querySelector(".main-container");
const mainContent = document.querySelector(".main-content-container");
const shareButton = document.querySelector(".sharing-section__share-image-container");
// const socialMediaShareButton = document.querySelector(".social-media__share-container");
const sharingSection = document.querySelector(".main-content__sharing-section");
const profileImage = document.querySelector(".sharing-section__profile-image-container");
const paragraphContainer = document.querySelector(".sharing-section__paragraph-container");
const p = document.createElement("p");
const divContainer = document.createElement("div");
// const shareParagraph = sharingSection.appendChild(p);
const newElement = document.createElement("div");
// const socialMediaSection = document.querySelector(".social-media-section");
console.log(shareButton);

shareButton.addEventListener("click", changeSharingSection);

function changeSharingSection() {
    //tengo que poner una condicion que a partir de un width de 660px, no se le quite la clase de main-content__sharing-section
    profileImage.classList.toggle("inactive");
    paragraphContainer.classList.toggle("inactive");
    const profileImageHidden = profileImage.classList.contains("inactive");
    const paragraphContainerHidden = paragraphContainer.classList.contains("inactive");
    
    if(profileImageHidden && paragraphContainerHidden) {
        //muestra la seccion de redes sociales
        sharingSection.classList.remove("main-content__sharing-section");
        sharingSection.classList.add("social-media-section");

        const shareParagraph = sharingSection.appendChild(p);
        shareParagraph.textContent = "SHARE";
        shareParagraph.classList.add("social-media-section__paragraph");
    
        const socialMediaIconsContainer = sharingSection.appendChild(divContainer);
        socialMediaIconsContainer.classList.add("social-media__icons-container");
        socialMediaIconsContainer.innerHTML = `<a href="/"><img src="./article-preview-component-master/images/icon-facebook.svg" alt="facebook-image"></a>
            
        <a href="/"><img src="./article-preview-component-master/images/icon-twitter.svg" alt="twitter-image"></a>
    
        <a href="/"><img src="./article-preview-component-master/images/icon-pinterest.svg" alt="pinterest-image"></a>
            `

        if(mainContainer.offsetWidth >= 488) {
            sharingSection.classList.remove("social-media-section");
            sharingSection.classList.add("main-content__sharing-section");
            profileImage.classList.add("active");
            paragraphContainer.classList.add("active");

            mainContent.appendChild(newElement);
            newElement.classList.add("social-media-section");
            newElement.appendChild(shareParagraph);
            newElement.appendChild(socialMediaIconsContainer);

            console.log(newElement);
            
        }

     } else if (!profileImageHidden && !paragraphContainerHidden){
        //aqui hay que borrar la social media section
        const shareParagraphStyles = document.querySelector(".social-media-section__paragraph");
        const socialMediaIconsStyles = document.querySelector(".social-media__icons-container");
        shareParagraphStyles.remove();
        socialMediaIconsStyles.remove();
        newElement.remove();
        
        sharingSection.classList.remove("social-media-section");
        sharingSection.classList.add("main-content__sharing-section");
    }
}