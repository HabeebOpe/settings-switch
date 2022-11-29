const tog = document.querySelectorAll("span");
const body = document.querySelector("body");
const status = document.querySelector(".status");
const tog1 = document.querySelector(".s-one");
const tog2 = document.querySelector(".s-two");
const tog3 = document.querySelector(".s-three");


tog.forEach(togg => {
    
    if(togg.classList.contains("one")) {
        togg.addEventListener("click", ()=>{
             
            if(body.classList.contains("move-one")){
                body.classList.remove("move-one");
                status.innerText = "Wi-Fi is turned off";
                status.classList.add("notif");
                
               setTimeout(()=>{
                status.classList.remove("notif");
                status.innerText = " ";
                }, 9000);
                
            }else{
                body.classList.add("move-one")
                status.innerText = "Wi-Fi is turned on";
                status.classList.add("notif");
                
                setTimeout(()=>{
                status.classList.remove("notif");
                status.innerText = " ";
                }, 9000);
            }
    })
        
    }
    else if(togg.classList.contains("two")) {
        togg.addEventListener("click", ()=>{
             
            if(body.classList.contains("move-two")){
                body.classList.remove("move-two");
                status.innerText = " Bluetooth is turned off";
                status.classList.add("notif");
                
               setTimeout(()=>{
                status.classList.remove("notif");
                status.innerText = " ";
                }, 9000);
                
            }else{
                body.classList.add("move-two")
                status.innerText = "Bluetooth is turned on";
                status.classList.add("notif");
                
                setTimeout(()=>{
                status.classList.remove("notif");
                status.innerText = " ";
                }, 9000);
            }
    })
        
    }
    else if(togg.classList.contains("three")) {
        togg.addEventListener("click", ()=>{
             
            if(body.classList.contains("move-three")){
                body.classList.remove("move-three");
                status.innerText = "Wi-Fi hotspot is turned off";
                status.classList.add("notif");
                
               setTimeout(()=>{
                status.classList.remove("notif");
                status.innerText = " ";
                }, 9000);
                
            }else{
                body.classList.add("move-three")
                status.innerText = "Wi-Fi hotspot is turned on";
                status.classList.add("notif");
                
                setTimeout(()=>{
                status.classList.remove("notif");
                status.innerText = " ";
                }, 9000);
            }
    })
}
})
