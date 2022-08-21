setInterval(() => {
	d = new Date(); //object of date()
	day = d.getDate();
	month = d.getMonth()+1;
	year = d.getFullYear();
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;
	hr_show = (hr<10)?"0"+hr:hr;
	min_show= (min<10)?"0"+min:min;
	sec_show= (sec<10)?"0"+sec:sec;
	day_show = (day<10)?"0"+day:day;
	month_show= (month<10)?"0"+month:month;
	year_show= (year<10)?"0"+year:year;
	
	document.getElementById("digitalContainer").innerHTML = hr_show+":"+min_show+":"+sec_show;
	document.getElementById("dateContainer").innerHTML = day_show+"."+month_show+"."+year_show;
	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
