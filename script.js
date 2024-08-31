const mainContainer = document.querySelector(".main-container");
const mainContent = document.querySelector(".main-content-container");
const shareButton = document.querySelector(".sharing-section__share-button");
const sharingSection = document.querySelector(".main-content__sharing-section");
const profileImage = document.querySelector(".sharing-section__profile-image-container");
const paragraphContainer = document.querySelector(".sharing-section__paragraph-container");
const p = document.createElement("p");
const divContainer = document.createElement("div");
const newContainer = document.createElement("div");
console.log(shareButton);

shareButton.addEventListener("click", changeSharingSection);

function changeSharingSection() {
    profileImage.classList.toggle("inactive");
    paragraphContainer.classList.toggle("inactive");
    const profileImageHidden = profileImage.classList.contains("inactive");
    const paragraphContainerHidden = paragraphContainer.classList.contains("inactive");
    
    if(profileImageHidden && paragraphContainerHidden) {
        sharingSection.classList.remove("main-content__sharing-section");
        sharingSection.classList.add("social-media-section");

        const shareParagraph = sharingSection.appendChild(p);
        shareParagraph.textContent = "SHARE";
        shareParagraph.classList.add("social-media-section__paragraph");
    
        const socialMediaIconsContainer = sharingSection.appendChild(divContainer);
        socialMediaIconsContainer.classList.add("social-media__icons-container");
        socialMediaIconsContainer.innerHTML = `<a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img src="./article-preview-component-master/images/icon-facebook.svg" alt="facebook-image"></a>
            
        <a href="https://twitter.com/?lang=es" target="_blank"><img src="./article-preview-component-master/images/icon-twitter.svg" alt="twitter-image"></a>
    
        <a href="https://es.pinterest.com/" target="_blank"><img src="./article-preview-component-master/images/icon-pinterest.svg" alt="pinterest-image"></a>
        `
        if(mainContainer.offsetWidth >= 488) {
            //leaving the main content sharing section
            sharingSection.classList.remove("social-media-section");
            sharingSection.classList.add("main-content__sharing-section");
            profileImage.classList.add("active");
            paragraphContainer.classList.add("active");
            // new container element for the social media section 
            mainContent.appendChild(newContainer);
            newContainer.classList.add("social-media-section");
            newContainer.appendChild(shareParagraph);
            newContainer.appendChild(socialMediaIconsContainer);
            console.log(newContainer);
        }
     } else if (!profileImageHidden && !paragraphContainerHidden){
        const shareParagraphStyles = document.querySelector(".social-media-section__paragraph");
        const socialMediaIconsStyles = document.querySelector(".social-media__icons-container");
        shareParagraphStyles.remove();
        socialMediaIconsStyles.remove();
        newContainer.remove();
        sharingSection.classList.remove("social-media-section");
        sharingSection.classList.add("main-content__sharing-section");
    }
}