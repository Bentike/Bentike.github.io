let button = document.querySelector('#sign-up-btn');
let form = document.getElementById('contact-form');
let mobile = document.querySelector('.fa-2x');
let nav = document.querySelector('nav');
let close = document.getElementById('close');

mobile.addEventListener('click', function(e){
	mobile.style.display = 'none';
    nav.style.display = 'block';
})

close.addEventListener('click', function(){
	nav.style.display = 'none';
	mobile.style.display = 'block';
})


form.addEventListener('submit', event =>{
	let name = form.elements['name'];
	let email = form.elements['email'];
	let number = form.elements['number'];
	let address = form.elements['address'];
	let message = form.elements['message'];
	console.log(`Name: ${name.value}`)
	console.log(`Email: ${email.value}`)
	console.log(`Number: ${number.value}`)
	console.log(`Address: ${address.value}`)
	console.log(`Message: ${message.value}`)
	event.preventDefault();
})
 var isGrey = false;
 setInterval(function(){
 	if (isGrey){
 		button.style.background = 'orange';
 	} else {
 		button.style.background = '#F4F4F4';
 		button.style.color = "Black";
 	}
 	isGrey = !isGrey;
 },1000)
