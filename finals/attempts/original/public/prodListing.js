document.addEventListener("DOMContentLoaded", function(event) {

	var productListing = document.querySelector('.prodGrid');

	var items = [
		"{{#each products}}"
	];

	for (var i=0; i < items.length; i++){
		var images = document.createElement("item");
		items.className = "items";
		items.src = items[i];
		prodGrid.appendChild(items);
	}
});