const mainContainer = document.querySelector(".main-container");
const shareButton = document.querySelector(".sharing-section__share-image-container");
// const socialMediaShareButton = document.querySelector(".social-media__share-container");
const sharingSection = document.querySelector(".main-content__sharing-section");
const profileImage = document.querySelector(".sharing-section__profile-image-container");
const paragraphContainer = document.querySelector(".sharing-section__paragraph-container");
// const socialMediaSection = document.querySelector(".social-media-section");
console.log(shareButton);

shareButton.addEventListener("click", changeSharingSection);

function changeSharingSection() {
    //tengo que poner una condicion que a partir de un width de 660px, no se le quite la clase de main-content__sharing-section
    profileImage.classList.toggle("inactive");
    paragraphContainer.classList.toggle("inactive");
    const profileImageHidden = profileImage.classList.contains("inactive");
    const paragraphContainerHidden = paragraphContainer.classList.contains("inactive");
    const shareParagraph = sharingSection.appendChild(document.createElement("p"));
    const socialMediaIconsContainer = sharingSection.appendChild(document.createElement("div"));
    
    if(profileImageHidden && paragraphContainerHidden) {
        //muestra la seccion de redes sociales
        sharingSection.classList.remove("main-content__sharing-section");
        sharingSection.classList.add("social-media-section");

        //creando elementos en la seccion de redes sociales
        console.log(shareParagraph);
        
        shareParagraph.textContent = "SHARE"
        shareParagraph.classList.add("social-media-section__paragraph");
    
        socialMediaIconsContainer.classList.add("social-media__icons-container");
        socialMediaIconsContainer.innerHTML = `<a href="/"><img src="./article-preview-component-master/images/icon-facebook.svg" alt="facebook-image"></a>
            
            <a href="/"><img src="./article-preview-component-master/images/icon-twitter.svg" alt="twitter-image"></a>
    
            <a href="/"><img src="./article-preview-component-master/images/icon-pinterest.svg" alt="pinterest-image"></a>
            `
     } else if (!profileImageHidden && !paragraphContainerHidden){
        //aqui hay que borrar la social media section
        const shareParagraphStyles = document.querySelector(".social-media-section__paragraph");
        const socialMediaIconsStyles = document.querySelector(".social-media__icons-container");
        shareParagraphStyles.remove();
        socialMediaIconsStyles.remove();
        shareParagraph.remove();
        socialMediaIconsContainer.remove();
        
        sharingSection.classList.remove("social-media-section");
        sharingSection.classList.add("main-content__sharing-section");
    }
}