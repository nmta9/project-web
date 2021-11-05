var x = 3;
var x1 = 3;
function validated(){
	
	var email = document.forms['admin-form']['email'];
    var password = document.forms['admin-form']['password'];
	if(email.value == 'admin' && password.value == 'admin'){
		return true;
	}
	else {
	    x -= 1;
		document.getElementById('warring').style.display = 'block';
		if(x == 0){
			email.disabled = true;
			password.disabled = true;
			return false;
		}
		alert('Attentions your password or username is wrong! After more '+ x  + ' times you will no longer be able to login !');
		
		return false;
	}

}

function validated1(){
	
	var email = document.forms['staff-form']['email'];
    var password = document.forms['staff-form']['password'];
	if(email.value == 'admin' && password.value == 'admin'){
		return true;
	}
	else {
	    x1 -= 1;
		document.getElementById('warring1').style.display = 'block';
		if(x1 == 0){
			email.disabled = true;
			password.disabled = true;
			return false;
		}
		alert('Attentions  your password or username is wrong ! After more ' + x1 +' times you will no longer able to login !');
		return false;
	}

}

function Allclear(){
	var email = document.forms['admin-form']['email'];
    var password = document.forms['admin-form']['password'];
	email.value = '';
	password.value = '';
	document.getElementById('warring').style.display = 'none';

}
function Allclear1(){
	var email = document.forms['staff-form']['email'];
    var password = document.forms['staff-form']['password'];
	email.value = '';
	password.value = '';
	document.getElementById('warring1').style.display = 'none';

}

(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form1) {
		form1.addEventListener('submit', function (event) {
		  if (!form1.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		  }
  
		  form1.classList.add('was-validated')
		}, false)
	  })
  })()



  function openPage(pageName, elmnt, color) {
	// Hide all elements with class="tabcontent" by default */
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Remove the background color of all tablinks/buttons
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].style.backgroundColor = "";
	  tablinks[i].style.color = '#666';
	}

	if(pageName == 'Staff'){
		document.getElementById('right-btn1').style.display = 'flex';
		document.getElementById('right-btn').style.display = 'none';
		document.getElementById('Staff').style.display = 'block';
		document.getElementById('Students').style.display = 'none';
	}
	else {
		document.getElementById('right-btn').style.display = 'flex';
		document.getElementById('right-btn1').style.display = 'none';
		document.getElementById('Staff').style.display = 'none';
		document.getElementById('Students').style.display = 'block';
	}
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";
  
	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
	document.getElementById('header').style.background = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  var form = document.getElementById('add-form');
form.addEventListener('submit', (event) => {
	  event.preventDefault();
	  var firstname = form.first_name.value;
	  var lastname = form.last_name.value;
	  var reg_id = form.reg_id.value;
	  var email = form.email.value;
	  var birthday = form.birthday.value;
	  var gender = form.gender.value;
	  var department = form.dept.value;
	  if(firstname && reg_id && email && department && gender){
	  console.log(firstname + lastname + reg_id + email + birthday + gender + department);
	  var node = document.getElementById('list-group');
	  var row = document.createElement("ul"); 
	  row.setAttribute("class", 'list-group  list-group-horizontal');
	  row.setAttribute('id', reg_id);
	  var col = document.createElement("li");
	  col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	  col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	  col.innerHTML = reg_id;
	  row.appendChild(col)
	  row.appendChild(CreateCol(firstname + ' ' + lastname));
	  row.appendChild(CreateCol(gender));
	  col = document.createElement("li");
	  col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	  col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	  col.innerHTML = birthday;
	  row.appendChild(col);
	  col = document.createElement("li");
	  col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	  col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	  col.innerHTML = department;
	  row.appendChild(col);
	  col = document.createElement("li");
	  col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	  col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	  col.innerHTML = email;
	  row.appendChild(col);
	  node.appendChild(row);	
	  addStudentClear();
	  }

  });

  function addStudentClear(){
	form.first_name.value = '';
	form.last_name.value = '';
	form.reg_id.value = null;
	form.email.value = '';
	form.birthday.value = '';
	form.gender.value = '';
	form.dept.value = '';
  }

function CreateCol(val){
	var col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = val;
	return col;
  }
function deleleELement_staff(){
	var form1 = document.getElementById('delInf_staff');
	var id = form1.reg_id_staff.value;
    document.getElementById(id).remove();
}
function deleleELement(){
	var form1 = document.getElementById('delInf');
	var id = form1.reg_id.value;
    document.getElementById(id).remove();
}

var isDelete = 0;
function justDelete(xy){
	isDelete = xy;
}
function updElement()
{

	var form1  = document.getElementById('updInf1');
	var idx1 = form1.reg_id.value;
	if(isDelete != -1) document.getElementById('upd1').click();
	document.getElementById(idx1).remove();

}

var form_staff = document.getElementById('add-form_staff');

form_staff.addEventListener('submit', (event) => {
	event.preventDefault();
	var firstname = form_staff.first_name_staff.value;
	var lastname = form_staff.last_name_staff.value;
	var reg_id = form_staff.reg_id_staff.value;
	var email = form_staff.email_staff.value;
	var birthday = form_staff.birthday_staff.value;
	var gender = form_staff.gender_staff.value;
	var department = form_staff.dept_staff.value;
	if(firstname && reg_id && email && department && gender){
	console.log(firstname + lastname + reg_id + email + birthday + gender + department);
	var node = document.getElementById('list-group_staff');
	var row = document.createElement("ul"); 
	row.setAttribute("class", 'list-group  list-group-horizontal text-wrap');
	row.setAttribute('id', reg_id);
	var col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap')
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = reg_id;
	row.appendChild(col)
	col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = firstname + ' ' + lastname;
	row.appendChild(col);
	col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = gender;
	row.appendChild(col);
	col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = birthday;
	row.appendChild(col);
	col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = department;
	row.appendChild(col);
	col = document.createElement("li");
	col.setAttribute('class', 'list-group-item list-group-item-action text-wrap');
	col.setAttribute('style', "width: 20rem; overflow:hidden; box-sizing: border-box;");
	col.innerHTML = email;
	row.appendChild(col);
	node.appendChild(row);
	console.log(row);
	addStaffClear();
	}
	
});

function addStaffClear(){
	form_staff.first_name_staff.value = '';
	form_staff.last_name_staff.value = '';
	form_staff.reg_id_staff.value = null;
	form_staff.email_staff.value = '';
	form_staff.birthday_staff.value = '';
	form_staff.gender_staff.value = '';
	form_staff.dept_staff.value = '';
  }


function setloginpage(idx){
	var Admin = document.querySelectorAll('admin-btn');
	var Staff = document.querySelectorAll('admin-btn');
	for (let i = 0; i < admin.length; ++i){
		Admin[i].style.display = 'none';
		Staff[i].style.display = 'none';
	}
	if(idx == 1){

		for(let i = 0; i < Admin.length; ++i){
			Admin[i].style.display = 'block';
			
		}
		document.getElementById('admin').style.display='block';
		document.getElementById('staff').style.display='none';
		document.getElementById('admin-btn').active = true;
	}
	else {
		for(let i = 0; i < Staff.length; ++i){
			Staff[i].style.display = 'block';
			
		}
		document.getElementById('admin').style.display='none';
	    document.getElementById('staff').style.display='block';
		document.getElementById('staff-btn').style.active = 'true';
	}
}