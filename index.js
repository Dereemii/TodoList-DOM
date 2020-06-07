// Your code here
document.getElementById("addToDo").addEventListener("keyup", function todoList() {
	var item = document.getElementById("addToDo").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var span = document.createElement("span");
	var itag = document.createElement("i");
	itag.className = "fa fa-trash";
	span.appendChild(itag);
	newItem.appendChild(span);
	newItem.appendChild(text);

	if (event.keyCode === 13) {
		//keycode de tecla enter
		document.querySelector("ul").appendChild(newItem);
		removeElement();
	}
});

function removeElement() {
	let elements = document.querySelectorAll("li");
	let parent = document.querySelector("ul");

	for (let i = 0; i < elements.length; i++) {
		let item = elements[i];
		item.addEventListener("click", e => {
			//	elements.removeChild(elements[i]);
			e.target.parentNode.remove();
		});
	}
}
removeElement();
