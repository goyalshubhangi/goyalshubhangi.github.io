let texts = ["Shubhangi", "UX-UI Designer", "Web Developer"], i = 0;

var writeCursor, writeText,
	eraseText, eraseCursor

function write() {
	if (writeCursor < writeText.length) {
		document.querySelector(".cursor").classList.remove("blink")
		if(writeText.charAt(writeCursor)!="/")	document.querySelector("#sex").innerHTML += writeText.charAt(writeCursor)
										else	document.querySelector("#sex").innerHTML += "<br>"
		writeCursor++
		setTimeout(write, 100)
	} else {
		document.querySelector(".cursor").classList.add("blink")
		setTimeout(erase, 2000)
	}
}

function erase() {
	if(eraseCursor > 0) {
		document.querySelector(".cursor").classList.remove("blink")
		document.querySelector("#sex").innerHTML = document.querySelector("#sex").innerHTML.substring(0,document.querySelector("#sex").innerHTML.length-1)
		eraseCursor--
		setTimeout(erase, 100)
	} else {
		document.querySelector(".cursor").classList.add("blink")
		setTimeout( function() {
			initiateSequence(texts[(i++)%3])
		}, 500)
	}
}

function initiateSequence(txt) {
	writeCursor = 0
	writeText = txt
	eraseText = writeText
	eraseCursor = writeText.length
	write()
}

initiateSequence(texts[i++])

function changeTheme() {
	document.querySelector("body").classList.toggle("dark")
	if(document.querySelector("body").classList.contains("dark")) {
		document.querySelector(".changeTheme").classList.remove("fa-sun")
		document.querySelector(".changeTheme").classList.add("fa-moon")
	} else {
		document.querySelector(".changeTheme").classList.add("fa-sun")
		document.querySelector(".changeTheme").classList.remove("fa-moon")
	}
}

isInViewport = (faisal,x)=>{
	var bounding = faisal.getBoundingClientRect()
	return (
		bounding.height>0 &&
		bounding.width>0 &&
		bounding.top<=(100+x) &&
		bounding.bottom>=100
	)
}

function visibleDiv () {
	var mi = document.querySelector("header ul")
	for (var i=0;i<mi.childElementCount;i++)
		mi.children[i].children[0].classList.remove("active")

	if(isInViewport( document.querySelector('#home'), 100)) {
		mi.children[0].children[0].classList.add("active")
	}
	else if(isInViewport( document.querySelector('#about'), 100)) {
		mi.children[1].children[0].classList.add("active")
	}
	else if(isInViewport( document.querySelector('#services'), 100)) {
		mi.children[2].children[0].classList.add("active")
	}
	else if(isInViewport( document.querySelector('#tools'), 100)) {
		mi.children[3].children[0].classList.add("active")
	}
	else if(isInViewport( document.querySelector('#work'), 100)) {
		mi.children[4].children[0].classList.add("active")
	}
	else if(isInViewport( document.querySelector('#reachme'), 100)) {
		mi.children[5].children[0].classList.add("active")
	}
}

window.onscroll = function() {
	visibleDiv()
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		document.querySelector("nav").classList.add("scrolled")
	}
	else {
		document.querySelector("nav").classList.remove("scrolled")
	}
}

var swiper = new Swiper('.swiper-container', {
	effect: 'cube',
	grabCursor: true,
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	keyboard: {
		enabled: true
	},navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true
	}
});

function toggleMenu() {
	document.querySelector(".toggleMenu").classList.toggle("opened")
	document.querySelector("header").classList.toggle("visible")
}
