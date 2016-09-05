var $ = require('jquery');

var tasks = [];


function getInput() {

	var input = document.getElementById('newItem');
	var	itemValue = input.value;

	var urgency = document.getElementById('urgencyLvl');
	var urgencyValue = urgency.options[urgency.selectedIndex].value;


    if (itemValue != "") {

    	var listItem = {};

    	listItem.itemValue = itemValue;
    	// listItem.urgencyValue = urgencyValue;


    	tasks.push(listItem);

        // addToList();
        clearField(input);

        console.table(tasks);

    } else {
        console.log("many bad code");
        input.focus();
    }
}

function clearField(field) {
	field.value = "";
}

function addToList() {
	var itemList = document.getElementById('itemList'); //ul
	var result = '';

	for (var i = 0; i < tasks.length; i++) {

		result += '<li class="list-group-item">' + tasks[i].itemValue + '</li>'
	}

	itemList.innerHTML = result;
}



document.getElementById("newItemBtn").onclick = function(e) {
	getInput();
}
