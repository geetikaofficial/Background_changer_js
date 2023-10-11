const Buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");
const h2=document.querySelector("h2")


Buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        switch (e.target.id){
            case "grey":
                body.style.backgroundColor="gray";
                break;
            case "white":
                 body.style.backgroundColor="white";
                 break;
            case "blue":
                body.style.backgroundColor="blue";
     
                break;
            case "yellow":
                body.style.backgroundColor="yellow"
                break;
            
            default:
                body.style.backgroundColor="white"     
            
            }

    


    })
})