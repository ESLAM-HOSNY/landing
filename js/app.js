
// Define Global Variables
const sections =  document.querySelectorAll("section");
const naveUl=document.getElementById("navbar__list");
const navBar= document.querySelector(".navbar__menu") ;
// creat the function of the list iteam work
const creatSectionLi= window.onscroll = () =>  {
    "use strict";
for (let i = 1; i < sections.length +1; i++) {
    const sectionIdAttr  = "section";
    const secstionNameAtrr = "section ";
    let  li =document.createElement("li");
    li.innerHTML = '<a class="menu__link"'+'href="#'+sectionIdAttr+i+'">'+secstionNameAtrr+i+"</a>" ;
    naveUl.append(li) ;
    };
};
// call  the function of the  add  list iteam
creatSectionLi()
// make  all page move smooth
const html = document.querySelector("html");
html.style.scrollBehavior="smooth";

// add style to 
navBar.style.padding= "18px";  
// add button function TO MAKE button display none on the top of the bage 
// and go up on page
const upButton = document.getElementById("up");
window.onscroll=function(){
    "use strict";
    if(window.pageYOffset>=401){
        upButton.style.display="block"; 
    }else{
        upButton.style.display="none" ;
    };
};
upButton.onclick  =function(){
    window.scrollTo(0,0);
};
//  make  a function to see if the section is on window view 
// and active section background and navbar
// creat list to li in avarbel 
const li = document.getElementsByTagName("li")

const activeSectionAndNanBarClasss = window.onscroll= function () {
    "use strict";
    if (window.pageYOffset>=185 && window.pageYOffset<=874) {
        sections[0].classList.add("your-active-class")   
        li[0].firstChild.classList.add("hiligth")
    } else  {
        sections[0].classList.remove("your-active-class")   
        li[0].firstChild.classList.remove("hiligth")
    }  
    if(window.pageYOffset>=875 && window.pageYOffset<=1600) {
        sections[1].classList.add("your-active-class")   
        li[1].firstChild.classList.add("hiligth")
    } else {
        sections[1].classList.remove("your-active-class")   
        li[1].firstChild.classList.remove("hiligth")
    } if(window.pageYOffset>=1601&&  window.pageYOffset<=2300) {
        sections[2].classList.add("your-active-class")   
        li[2].firstChild.classList.add("hiligth")
    } else{ 
        sections[2].classList.remove("your-active-class")   
        li[2].firstChild.classList.remove("hiligth")

    }if(window.pageYOffset>=2301&&  window.pageYOffset<=2900) {
        sections[3].classList.add("your-active-class")   
        li[3].firstChild.classList.add("hiligth")
    } else{ 
        sections[3].classList.remove("your-active-class")   
        li[3].firstChild.classList.remove("hiligth")
    }if(window.pageYOffset>=2901 &&  window.pageYOffset<=4500) {
            sections[4].classList.add("your-active-class")   
            li[4].firstChild.classList.add("hiligth")
        } else{ 
            sections[4].classList.remove("your-active-class")   
            li[4].firstChild.classList.remove("hiligth")
    };
}; 

// call the active  class 
activeSectionAndNanBarClasss()
