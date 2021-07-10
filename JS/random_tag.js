const textArea = document.querySelector(".text-area");
const mainBox = document.querySelector(".main-box");
const again = document.querySelector(".again");
const start = document.querySelector(".start");

class RandomText {
    constructor(area, parent, again){
        this.area = area;
        this.parent = parent;
        this.again = again;
        this.readTag();
        this.randomSelection();
    }
    clear(){
        this.textTags = [];
        let tagss = document.querySelectorAll(".tag");
        tagss.forEach(function(e) {
            e.remove();
        });
    }
    close(){
        this.again.classList.add("block");
        this.area.classList.remove("block");
    }
    readTag(){
        this.area.classList.remove("hidden");
        this.again.classList.remove("block");
        this.h1Element = document.createElement("h1");
        this.area.addEventListener("input", (e)=> {
            const val = e.target.value;
            const arr = val.split(/[\n\r]/g);
            const count = arr.length-1;
            if (count<1){
                if(e.target.value.match(/,/g)){
                    e.target.value = e.target.value.replace(",","");
                    if (e.target.value){
                        this.writeTag(e.target.value);
                        e.target.value = "";
                    } 
                }
            }
           
        });
           
    };
    writeTag(text){
            this.tagElement = document.createElement("h1");
            this.tagElement.classList.add("tag");
            this.tagElement.innerText = text.replace(",","");
            this.parent.appendChild(this.tagElement);        
    }
    random(max) {  
        let num = Math.floor(Math.random() * (max - 0) ) + 0;
        return num;
    }
    randomSelection(){
        document.addEventListener("keypress", (e)=>{
            if (e.key == "Enter"){
                    this.textTags = document.querySelectorAll(".tag");
                    this.textTags.forEach(e=> e.classList.remove("winner"));
                    this.area.value = "";
                    let count = this.textTags.length;
                    this.textTags.forEach((e, i) => {
                            setTimeout(() => {
                                    let randomCL = this.random(count);
                                    this.textTags.forEach(f=> {f.classList.remove("activated");});
                                    this.textTags[randomCL].classList.add("activated");
                                    randomCL = "";
                                }, (i*300));
                    }); 
                    setTimeout(()=>{ 
                        let rand = this.random(count);
                        this.textTags.forEach(f=> {
                            f.classList.remove("activated");
                            f.classList.remove("winner");
                        });
                        this.textTags[rand].classList.add("winner");
                    }, count*500); 
                    setTimeout(()=>{ 
                        this.close();
                        this.clear();
                    }, count*1000); 
                }
        })
    }
}

start.addEventListener("click", (e)=>{
    e.preventDefault();
    textArea.classList.add("block");
    start.classList.remove("block");
    textArea.value = "";
    let text = new RandomText(textArea, mainBox, again);
});
again.addEventListener("click", (e)=>{
    e.preventDefault();
    textArea.classList.add("block");
    start.classList.remove("block");
    textArea.value = "";
    let text2 = new RandomText(textArea, mainBox, again);
});




















// boxes.forEach(e=> {
        
// });