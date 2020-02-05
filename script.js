$(document).click(function(event){
	if ($(event.target).closest("#testDiv").length) return;
	$(".list").slideUp("slow");
	event.stopPropagation();
	kol = 0;
});

function EmblemClick(name)
{
	if (name =="Chevrolet") $('#EmblemListDiv').append('<ul class="EmblemList"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>');
}
var kol = 0;


function Click()
{
	kol++;
	if (kol <= 1) $('#testDiv').append('<div class="list"><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul></div>');
}



$('document').ready(function() {
	
	var w = window.innerWidth, h = window.innerHeight;
	var em = w / 90;

	$(".contacts").css({
		"font-size":em * 1.7 + "px"
	});
	
	$("h1").css({
		"font-size":em * 1.8 + "px"
	});
	
	$("p").css({
		"font-size":em + "px"
	});
	
	var ElementsArr = document.getElementsByClassName("EmblemScript");
	
	for (i = 0; i < ElementsArr.length; i++)
	{
		$(ElementsArr[i]).css({
			"left":i * (w * 0.14) + 40 + "px"
		});
	}
	
	

	
});


//a.style.margin = '100px';

//a.style.width = "100px";

//$("#inform_h").css("color","red");






//$('.hide').click(function() {
	//$(this).siblings(".list").slideToggle("slow");
	//return false;
//});


