//immediately invoked function expression which helps protect scope of variables
(function() {
	//Creating hotel object using literal syntax
	var hotel = {
		name: 'Park',
		roomRate: 240,
		discount: 15,
		offerPrice: function(){
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	
	}
}

var hotelName, roomRate, specialRate; //Declaring variables

hotelName = document.getElementById('hotelName'); //Getting elements
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name; //writing to page elements
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent = '$ + hotel.offerPrice();

var expiryMsg;
var today;
var elEnds;

function offerExpires(today){
//Declaring variables in function for scope
	var weekFromToday, day, date, month, year, dayNames, monthNames;

	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 1000) //Added in milliseconds
	dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	
	//Creating the message
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);
//Finishing the immediately invoked function
}());

