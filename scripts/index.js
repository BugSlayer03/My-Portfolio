const text=["a Frontend Developer","Turning ideas into code.."];
let i=0;
let j=0;
let currentText="";
let isDeleting = false;

function type(){
    if(i<text.length){
        if(!isDeleting && j<=text[i].length){
            currentText=text[i].substring(0,j++);
        }
        else if(isDeleting && j>=0){
            currentText=text[i].substring(0,j--);
        }

        document.getElementById("typewriter").innerText="I am "+currentText;

        if(j==text[i].length){
            isDeleting=true;
        }
        if(j==0){
            isDeleting=false;
            i=(i+1)%text.length;
        }
    }

    setTimeout(type,isDeleting?150:120);
}

type();