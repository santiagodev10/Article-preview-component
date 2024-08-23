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
    const profileImageHidden = profileImage.style.display = "none";
    const paragraphContainerHidden = paragraphContainer.style.display = "none";
    console.log(profileImageHidden);
    

    if(profileImageHidden && paragraphContainerHidden ) {
        //muestra la seccion de redes sociales
        sharingSection.classList.remove(".main-content__sharing-section");
        sharingSection.classList.add("social-media-section");

        //creando elementos en la seccion de redes sociales
        const newPSharingSection = sharingSection.appendChild(document.createElement("p"));
        newPSharingSection.textContent = "SHARE"
        newPSharingSection.classList.add("social-media-section__paragraph");

        const iconsContainer = sharingSection.appendChild(document.createElement("div"));
        iconsContainer.classList.add("social-media__icons-container");
        iconsContainer.innerHTML = `<a href="/"><img src="./article-preview-component-master/images/icon-facebook.svg" alt="facebook-image"></a>
        
        <a href="/"><img src="./article-preview-component-master/images/icon-twitter.svg" alt="twitter-image"></a>

        <a href="/"><img src="./article-preview-component-master/images/icon-pinterest.svg" alt="pinterest-image"></a>
        `
        



        // const iconFacebookSharingSection = sharingSection.appendChild(document.createElement("a"));
        // const iconTwitterSharingSection = sharingSection.appendChild(document.createElement("a"));
        // const iconPinterestSharingSection = sharingSection.appendChild(document.createElement("a"));
        // const facebookImg = new Image(10, 30);
        // const twitterImg = new Image(10, 30);
        // const pinterestImg = new Image(10, 30);
        // facebookImg.src = "./article-preview-component-master/images/icon-facebook.svg";
        // twitterImg.src = "./article-preview-component-master/images/icon-twitter.svg";
        // pinterestImg.src = "./article-preview-component-master/images/icon-pinterest.svg";
        // const imageInsideFacebookIcon = iconFacebookSharingSection.appendChild(facebookImg);
        // const imageInsideTwitterIcon = iconTwitterSharingSection.appendChild(twitterImg);
        // const imageInsidePinterestIcon = iconPinterestSharingSection.appendChild(pinterestImg);


    }
}