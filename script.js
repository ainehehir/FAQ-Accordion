
let buttons = document.querySelectorAll('button');

//first accordion panel to be active & set the aria attributes
let first = buttons[0];
first.classList.add('active');
first.setAttribute("aria-expaned",true);

first.nextElementSibling.style.display ="block";
first.nextElementSibling.setAttribute("hidden",false)



buttons.forEach(button => button.addEventListener('click', (el) => {

	el.preventDefault;

	// console.log(el.currentTarget)

	if(!el.currentTarget.classList.contains('accordion-control')) return;

	let content = button.nextElementSibling;
	// console.log(content);

	//add the active class & change diplay to block for the content, & update the aria attributes on the clicked buttton
	el.currentTarget.classList.add('active');
	content.style.display = "block";
	el.currentTarget.setAttribute("aria-expanded", true);
	content.setAttribute("aria-hidden", false);


	for(var i = 0; i < buttons.length; i++){

		//if the button is clicked, skip it
		if(buttons[i] === el.currentTarget) continue;

		//remove the active class, make the content display none and update the aria attributes
		buttons[i].classList.remove('active');
		buttons[i].setAttribute("aria-expaned",false);
		buttons[i].nextElementSibling.style.display = 'none';
		buttons[i].nextElementSibling.setAttribute("aria-hidden", true);
	}


})
)