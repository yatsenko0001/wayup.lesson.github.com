


var btn = document.getElementById('btn');
btn.onclick = function () { 
 var text = document.querySelector('p.intro');
 text.classList.add('red');
 var img = document.querySelector('desktop');
 img.style.display = 'none';

 document.querySelector('word3').style.marginLeft ='50px'
}



$(window).scroll(function() {
	$('word3').each(function(){
		var imagePos = $(this).offest().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInLet");
		}
	});
});