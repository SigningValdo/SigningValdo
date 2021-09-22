var bouton0 = document.getElementById('bouton0')
var bouton1 = document.getElementById('bouton1')
var bouton2 = document.getElementById('bouton2')
var socio1 = document.getElementById('socio1')
var socio2 = document.getElementById('socio2')
var socio3 = document.getElementById('socio3')
var socio = document.getElementsByClassName('socio')
var grande_section = document.getElementById('grandesect')
var sociologo = document.getElementById('sociologo')
var sociologo2 = document.getElementById('sociologo2')
var sociologo3 = document.getElementById('sociologo3')
var page_id = "164249414233789";
const profil_page = "https://graph.facebook.com/"+page_id+"/picture"

bouton0.addEventListener("click", () =>{
    if(page.style.display  == "block" ){
        page.style.display = "none" 
        sociologo.style.display = "block"
        sociologo2.style.display = "block"
        sociologo3.style.display ="block"
        
        
    }else{
        page.style.display = "block" 
        sociologo.style.display = "none"
        sociologo2.style.display = "none"
        sociologo3.style.display = "none"
        grande_section.style.display = "flex"
    }
    
})
bouton1.addEventListener("click", () =>{
    if(page.style.display  == "block" ){
        page.style.display = "none" 
        sociologo.style.display = "block"
        sociologo2.style.display = "block"
        sociologo3.style.display ="block"
        
        
    }else{
        page.style.display = "block" 
        sociologo.style.display = "none"
        sociologo2.style.display = "none"
        sociologo3.style.display = "none"
        grande_section.style.display = "flex"
    }
    
})
bouton2.addEventListener("click", () =>{
    if(page.style.display  == "block" ){
        page.style.display = "none" 
        sociologo.style.display = "block"
        sociologo2.style.display = "block"
        sociologo3.style.display ="block"
        
        
    }else{
        page.style.display = "block" 
        sociologo.style.display = "none"
        sociologo2.style.display = "none"
        sociologo3.style.display = "none"
        grande_section.style.display = "flex"
    }
    
})
const profil = `<img style = "border-radius: 50%;" class="fit-picture" src=${profil_page}
alt="Grapefruit slice atop a pile of other slices">` 
const profil_id = document.getElementById('part1S').innerHTML=profil;
