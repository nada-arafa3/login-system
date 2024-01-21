var layer =
	document.getElementById(
		"layer"
	);
var creat =
	document.getElementById(
		"creat"
	);
var login =
	document.getElementById(
		"in"
	);
var imag =
	document.getElementById(
		"img"
	);
var txt =
	document.getElementById(
		"txt"
	);
var btnUp =
	document.getElementById(
		"btnup"
	);

var btnin =
	document.getElementById(
		"btnin"
	);
var emailRegex =
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var membersList =
	[];
var upName =
	document.getElementById(
		"upname"
	);
var upPassword =
	document.getElementById(
		"uppassword"
	);
var upEmail =
	document.getElementById(
		"upemail"
	);
var mailv =
	document.getElementById(
		"mail"
	);
var inPassword =
	document.getElementById(
		"inpassword"
	);
var inemail =
	document.getElementById(
		"inemail"
	);
var wrong =
	document.getElementById(
		"wrong"
	);
let btn =
	document.querySelector(
		"#bbtn"
	);
/*****************styleing******************* */
creat?.addEventListener(
	"click",
	function () {
		layer.style.backgroundColor =
			"#A1D7F1";
		layer.style.right =
			"50%";
		layer.style.bottom =
			"";
		layer.style.top =
			"0%";
		layer.style.height =
			"";

		layer.style.borderRadius =
			"200px ";

		imag.src =
			"assets/images/new.png";
		txt.innerHTML = `WOW NEW MEMBER <br>
  
  `;
	}
);

login?.addEventListener(
	"click",
	logInpage
);
function logInpage() {
	layer.style.backgroundColor =
		"";
	layer.style.right =
		"0%";
	layer.style.bottom =
		"0px";
	layer.style.top =
		"";
	layer.style.borderRadius =
		"";
	layer.style.height =
		"";
	imag.src =
		"assets/images/sign in.png";
	txt.innerHTML = ` HELLO <br>
    nice to have you again </h2>
  
  `;
}
/******************sign up functions****************/

btnUp?.addEventListener(
	"click",
	function (
		e
	) {
		e.preventDefault();
		if (
			emailRegex.test(
				upEmail.value
			) == true
		) {
			let person =
				{
					name: upName.value,
					pass: upPassword.value,
					mail: upEmail.value,
				};
			membersList.push(
				person
			);

			localStorage.setItem(
				"user",
				JSON.stringify(
					membersList
				)
			);

			clear();
			logInpage();
			logInpageAgain();
		} else {
			mailv.innerHTML = `<p>the E-mail isn't valid</p>`;
		}
	}
);
function clear() {
	upName.value =
		"";
	upPassword.value =
		"";
	upEmail.value =
		"";
	mailv.innerHTML = ``;
}

function logInpageAgain() {
	imag.src =
		"assets/images/3d-casual-life-happy-woman-jumping-with-confetti.png";
	txt.innerHTML = ` HELLO <br>
    nice to have you here </br>
    NOW Login</h2>
  
  `;
}
/**********************sign in function*********************** */
btnin?.addEventListener(
	"click",
	function (
		e
	) {
		wrong.innerHTML = ``;
		e.preventDefault();
		let x =
			JSON.parse(
				localStorage.getItem(
					"user"
				)
			);
		for (
			let i = 0;
			x.length;
			i++
		) {
			if (
				x[i]
					.mail ===
					inemail.value &&
				x[i]
					.pass ===
					inpassword.value
			) {
				localStorage.setItem(
					"namevalue",
					x[i]
						.name
				);
				window.location.href =
					"in.html";
			} else {
				wrong.innerHTML = ` HEY it looks like ther is something wrong with your password or the e-mail  `;
			}
		}
	}
);

logged.innerHTML = `HELLO ${localStorage.getItem(
	"namevalue"
)}`;

btn.addEventListener(
	"click",
	function () {
		window.location.href =
			"index.html";
		localStorage.removeItem(
			"namevalue"
		);
	}
);
