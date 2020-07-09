
class VAClock extends HTMLElement {
   connectedCallback(){
     let image = this.getRandomImage();
     this.appendChild(image);
   }
   getRandomImage=() =>{
        let image = new Image();
        let container = document.createElement('div');
        image.src = "https://picsum.photos/200";
        container.innerHTML="loading...";
        image.onload=()=>{
            container.innerHTML = "";
            container.appendChild(image);
        }
        return container;
   }
}

window.customElements.define('va-clock', VAClock);
