// current date
thisDate = new Date();

// changeable month and year
thisMonth = thisDate.getMonth();
thisYear = thisDate.getFullYear();

// current month and year
currentM = thisDate.getMonth();
currentY = thisDate.getFullYear();

// month names
months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept",
		  "Oct", "Nov", "Dec"];

// calendar of current date
createCalendar(currentM, currentY);

// how many days in the month
function daysInMonth(month, year){
	return 32 - new Date(year, month, 32).getDate();
}

// create calendar of previous month and
// update the current month and year
function previous(){
	if(thisMonth == 0){
		thisMonth = 11;	
		thisYear = thisYear-1;	
		createCalendar(thisMonth, thisYear);
	}
	else{
	thisMonth = thisMonth-1;		
	createCalendar(thisMonth, thisYear);	
	}
}
// create calendar of next month and
// update the current month and year
function next(){
	
	if(thisMonth == 11){
		thisMonth = 0;
		thisYear = thisYear+1;			
		createCalendar(thisMonth, thisYear);		
	}
	else{
	thisMonth = thisMonth+1;		
	createCalendar(thisMonth, thisYear);		
	}
}

// create calender based on chosen month and year
function choose(){
	let year = document.getElementById("inputYear").value;
	let month = document.getElementById("inputMonth").value;
	let inputDate = new Date(year, month);
	thisMonth = inputDate.getMonth();
	thisYear = inputDate.getFullYear();
	createCalendar(thisMonth, thisYear);
}

// create calendar of given month and year
function createCalendar(month, year){
	// first day of the given month
	firstDay = (new Date(year, month)).getDay();
	
	// body of table to be used
	let tbl = document.getElementById("calBody");
	// clear old calendar
	tbl.innerHTML = "";
	
	// get display element and clear old value
	let display = document.getElementById("dateDisplay");
	display.innerHTML = "";
	
	// display current month and year
	let node = document.createTextNode(months[month]+" "+year);
	display.appendChild(node);
	
	
	let date = 1;
	let prevDate = daysInMonth(month-1, year);
	let nextDate = 1;
	for(let i = 0; i < 6; i++){
		// create row
		let row = document.createElement("tr");
		// create cells for each day
		for(let j = 0; j < 7; j++){
			// first row outside of month if the first day is a sunday
			if(i == 0 && firstDay == 0){
				let cell = document.createElement("td");
				let celTxt = document.createTextNode(prevDate - 6 + j);
				cell.style.backgroundColor = "#f0f0f0";
				cell.appendChild(celTxt);
				row.appendChild(cell);				
			}
			// fill cells before the month
			else if((i == 0 && j < firstDay)){
				let cell = document.createElement("td");
				let celTxt = document.createTextNode(prevDate - (firstDay-1) + j);
				cell.style.backgroundColor = "#f0f0f0";
				cell.appendChild(celTxt);
				row.appendChild(cell);
			}
			// fill cells after the month
			else if(date > daysInMonth(month, year)){
				let cell = document.createElement("td");
				let celTxt = document.createTextNode(nextDate);
				cell.style.backgroundColor = "#f0f0f0";
				cell.appendChild(celTxt);
				row.appendChild(cell);
				nextDate++
			}
			// give the cell the appropriate date
			else{
				let cell = document.createElement("td");
				let celTxt = document.createTextNode(date);
				// highlight cell if it is the current date
				if(date == thisDate.getDate() && month == currentM && year == currentY)
					cell.style.backgroundColor = "yellow";			
				cell.appendChild(celTxt);
				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}
}