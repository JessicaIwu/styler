
	let allprops = document.getElementsByName("cssProp");
	
	let modifyDiv = document.getElementById("modify");
	
function set () {

	for (var i = 0; i < allprops.length; i++) {


		let cssProp = allprops[i].getAttribute("id");
		let cssVal = allprops[i].value;

		// console.log(cssProp, cssVal);

		modifyDiv.style[cssProp] = cssVal;
	}
};
var element = document.getElementById('set');
element.addEventListener('click', set);