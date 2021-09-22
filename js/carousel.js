var showcaseImage = document.getElementById('showcase-image')
var showcaseItem1 = document.getElementById('showcase-item-1')
var showcaseItem2 = document.getElementById('showcase-item-2')
var showcaseItem3 = document.getElementById('showcase-item-3')
var showcaseItem4 = document.getElementById('showcase-item-4')

var selectedShowcaseItem = 0
var carouselInterval = setInterval(carouselTimer, 7000)

function carouselTimer(){
    showcaseItem(selectedShowcaseItem += 1)

}


function showcaseItem(x){

  clearInterval(carouselInterval)
  carouselInterval = setInterval(carouselTimer, 7000)

  
    if (selectedShowcaseItem <= 0){
        selectedShowcaseItem = 4
    }else if(selectedShowcaseItem > 4){
        selectedShowcaseItem = 1

    }
   

    switch(selectedShowcaseItem){
    
        case 1:
            showcaseImage.src = '../images/showcase-cyberpunk.jpg'
            showcaseImage.title = 'Cyberpunk 2077'
            showcaseItem1.style.backgroundColor =  '#a7a8a8'
            showcaseItem2.style.backgroundColor =  '#3a3a3a'
            showcaseItem3.style.backgroundColor =  '#3a3a3a'
            showcaseItem4.style.backgroundColor =  '#3a3a3a'
            showcaseImage.style.animationName ='fade-in'
            showcaseImage.style.animationDuration ='1s'
            break
        case 2:
            showcaseImage.src = '../images/showcase-death-stranding.jpg'
            showcaseImage.title = 'Death Stranding'
            showcaseItem1.style.backgroundColor =  '#3a3a3a'
            showcaseItem2.style.backgroundColor =  '#a7a8a8'
            showcaseItem3.style.backgroundColor =  '#3a3a3a'
            showcaseItem4.style.backgroundColor =  '#3a3a3a'
            showcaseImage.style.animationName ='fade-in'
            showcaseImage.style.animationDuration ='1s'
            break
        case 3:
            showcaseImage.src = '../images/showcase-demon-souls.jpg'
            showcaseImage.title = "Demon's Souls"
            showcaseItem1.style.backgroundColor =  '#3a3a3a'
            showcaseItem2.style.backgroundColor =  '#3a3a3a'
            showcaseItem3.style.backgroundColor =  '#a7a8a8'
            showcaseItem4.style.backgroundColor =  '#3a3a3a'
            break
        case 4:
            showcaseImage.src = '../images/showcase-hades.jpg'
            showcaseImage.title = 'Hades'
            showcaseItem1.style.backgroundColor =  '#3a3a3a'
            showcaseItem2.style.backgroundColor =  '#3a3a3a'
            showcaseItem3.style.backgroundColor =  '#3a3a3a'
            showcaseItem4.style.backgroundColor =  '#a7a8a8'
            break
        
    }

}
