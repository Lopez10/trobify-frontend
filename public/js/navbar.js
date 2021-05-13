export function logout() {
	document.cookie = 'mail=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	window.location.replace("/public/index.html");
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie(cname) {
  return getCookie(cname) != "";
}

export function isLogged() {
  return checkCookie("mail");
}

export function setNavbar() {
	var l = document.querySelectorAll(isLogged() ? "[logged='false']" : "[logged='true']");
	l.forEach( i => {
		i.remove();
	});
	if (isLogged()) document.getElementById("logout").addEventListener("click", logout, false);
}

export function loggedToIndex() {
	if (isLogged()) {
		window.location.replace("/public/index.html");
	}
}

export function protectFromAnon() {
	if (!isLogged()) {
		window.location.replace("/public/index.html");
	}
}