// hover for add to cart button icon
const addToCartBTN = document.getElementsByClassName('add_to_cart');
const atcIcon = document.getElementsByClassName('atc-icon');
for(let i=0; i<addToCartBTN.length; i++){
    for(let i=0; i<atcIcon.length; i++){
        addToCartBTN[i].addEventListener('mouseover', function(){
            atcIcon[i].style.color = '#31c8dc';      
        })
        addToCartBTN[i].addEventListener('mouseout', function(){
            atcIcon[i].style.color = '#fff';
        })
    }  
}

// discount counter
const countDownDate = new Date('2026-01-01 23:59:59').getTime();
const timer = setInterval(function(){
    const currentDate = new Date().getTime();
    const result = countDownDate - currentDate;

    const days = Math.floor(result / (1000 * 60 * 60 * 24));
    const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((result % (1000 * 60)) / 1000);

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
}, 1000);

// hamburger menu
function hamburger() {
    const hamLinks = document.getElementById('hamLinks');
    if (hamLinks.style.display === 'block') {
        hamLinks.style.display = 'none';
    } else {
        hamLinks.style.display = 'block';
    }
}