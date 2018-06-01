// JavaScript Document
$(function () {
    var pull            = $('#pull');
        menu            = $('nav ul');
        menuHeight      = menu.height();
        
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    } );
} );

$(window).resize(function() {
   var w = $(window).width();
   if(w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
   }
});

//fadeEffect script
var ma = ["dropmenu1","dropmenu2","dropmenu3"];
function dropMenu(x){
	for (var m in ma) {
		if(ma[m] != x){
			document.getElementById(ma[m]).style.display = "none";
		}
	}
	if(document.getElementById(x).style.display == 'block'){
		fadeOut(x);
	} else {
		fadeIn(x);
	}
}

// Real Time Text Filtering function (while user types)
//filter message
function stripmsg(message){
	var textfield = document.getElementById(message);
	var regexmsg = /[^a-z 0-9!.,?]/gi; //"gi" g means globally, i means noncase sensitive
	if(textfield.value.search(regexmsg) > -1) {
    document.getElementById('ta').innerHTML = "Field accepts only Aa-Zz 0-9 ! ? . , Space";
		textfield.value = textfield.value.replace(regexmsg, "");  //Replaces the unaccepted character in regex with nothing
    }
}

//filter firstname
function stripnameF(nameF){
	var textfield = document.getElementById(nameF);
	var regexname = /[^a-z ]/gi;
	if(textfield.value.search(regexname) > -1) {
    document.getElementById('first').innerHTML = "Field accepts only Aa-Zz, and Space";
		textfield.value = textfield.value.replace(regexname, ""); 
    }
}

//filter lastname
function stripnameL(nameL){
	var textfield = document.getElementById(nameL);
	var regexname = /[^a-z ]/gi;
	if(textfield.value.search(regexname) > -1) {
    document.getElementById('last').innerHTML = "Field accepts only Aa-Zz, and Space";
		textfield.value = textfield.value.replace(regexname, ""); 
    }
}

//filter organization
function stripnameO(org){
	var textfield = document.getElementById(org);
	var regexname = /[^a-z ]/gi;
	if(textfield.value.search(regexname) > -1) {
    document.getElementById('orgs').innerHTML = "Field accepts only Aa-Zz, and Space";
		textfield.value = textfield.value.replace(regexname, ""); 
    }
}

//filter position
function stripnameP(pos){
	var textfield = document.getElementById(pos);
	var regexname = /[^a-z ]/gi;
	if(textfield.value.search(regexname) > -1) {
    document.getElementById('position').innerHTML = "Field accepts only Aa-Zz, and Space";
		textfield.value = textfield.value.replace(regexname, ""); 
    }
}

//filter city
function stripcity(city){
	var textfield = document.getElementById(city);
	var regexname = /[^a-z ]/gi;
	if(textfield.value.search(regexname) > -1) {
    document.getElementById('CS').innerHTML = "Field accepts only Aa-Zz, and Space";
		textfield.value = textfield.value.replace(regexname, ""); 
    }
}

//filter email
function stripemail(email){
	var textfield = document.getElementById(email);
	var regexemail = /[^a-z0-9@_.-]/gi;
	if(textfield.value.search(regexemail) > -1) {
    document.getElementById('ea').innerHTML = "Character not accepted";
		textfield.value = textfield.value.replace(regexemail, ""); 
    }
}

//filter address1
function stripname1(add1){
	var textfield = document.getElementById(add1);
	var regexsub = /[^a-z 0-9]/gi;
	if(textfield.value.search(regexsub) > -1) {
    document.getElementById('address1').innerHTML = "field accepts text and numbers only";
		textfield.value = textfield.value.replace(regexsub, ""); 
    }
}

//filter address2
function stripname2(add2){
	var textfield = document.getElementById(add2);
	var regexsub = /[^a-z 0-9]/gi;
	if(textfield.value.search(regexsub) > -1) {
    document.getElementById('address2').innerHTML = "field accepts text and numbers only";
		textfield.value = textfield.value.replace(regexsub, ""); 
    }
}

//filter address3
function stripname3(add3){
	var textfield = document.getElementById(add3);
	var regexsub = /[^a-z 0-9]/gi;
	if(textfield.value.search(regexsub) > -1) {
    document.getElementById('address3').innerHTML = "field accepts text and numbers only";
		textfield.value = textfield.value.replace(regexsub, ""); 
    }
}

//filter phone
function stripphone(tel){
	var textfield = document.getElementById(tel);
	var regexsub = /[^0-9+]/gi;
	if(textfield.value.search(regexsub) > -1) {
    document.getElementById('phone').innerHTML = "field accepts digits and + (plus sign) only";
		textfield.value = textfield.value.replace(regexsub, ""); 
    }
}

//speaker1
function speaker1() {
   var el = document.getElementById("speaker1");
   if (el.style.display =='block') {
   el.style.display = "none";
   } else {
      el.style.display = "block";
   }
}

//speaker2
function speaker2() {
   var el = document.getElementById("speaker2");
   if (el.style.display =='block') {
   el.style.display = "none";
   } else {
      el.style.display = "block";
   }
}

//speaker3
function speaker3() {
   var el = document.getElementById("speaker3");
   if (el.style.display =='block') {
   el.style.display = "none";
   } else {
      el.style.display = "block";
   }
}

//speaker4
function speaker4() {
   var el = document.getElementById("speaker4");
   if (el.style.display =='block') {
   el.style.display = "none";
   } else {
      el.style.display = "block";
   }
}

//fees 
function fees() {
  var el = document.getElementById("fees");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

//travelLinks 
function travelLinks() {
  var el = document.getElementById("travelLinks");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

//hotels 
function sokos1() {
  var el = document.getElementById("sokos1");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

 
function sokos2() {
  var el = document.getElementById("sokos2");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

 
function sokos3() {
  var el = document.getElementById("sokos3");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

 
function radisson() {
  var el = document.getElementById("radisson");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

//presentation guidelines & Paper templates
function guidelines() {
  var el = document.getElementById("guidelines");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

function guidelines2() {
  var el = document.getElementById("guidelines2");
  if (el.style.display == 'block') {
  el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}