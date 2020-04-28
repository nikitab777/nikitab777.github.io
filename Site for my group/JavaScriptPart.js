function ClickInformNikita() { jQuery('#member_inform').html("Никита"); }
function ClickInformArtur() { jQuery('#member_inform').html("Артур"); }
function ClickInformRuslan() { jQuery('#member_inform').html("Руслан"); }
function ClickInformAnsar() { jQuery('#member_inform').html("Ансар"); }
function ClickInformMotya() { jQuery('#member_inform').html("Матвей"); }
function ClickInformLesha() { jQuery('#member_inform').html("Лёша"); }
function ClickInformKarim() { jQuery('#member_inform').html("Карим"); }
function ClickInformBatynur() { jQuery('#member_inform').html("Батыйнур"); }
function ClickInformSanya() { jQuery('#member_inform').html("Саня"); }
function ClickInformDanya() { jQuery('#member_inform').html("Данил"); }
function ClickInformGenady() { jQuery('#member_inform').html("Генрих"); }
function ClickInformRamyla() { jQuery('#member_inform').html("Рамиля"); }
function ClickInformAnnya() { jQuery('#member_inform').html("Анна"); }
function ClickInformNail() { jQuery('#member_inform').html("Наиль"); }



function MotyaMemes()
{	$('#memes').empty();
	$('#memes').append('<img class="MemImg" src="Motya1Mem.jpg" width=20% height=26%> <br/> <img class="MemImg" src="Motya2Mem.jpg" width=20% height=26%> <br/> <img class="MemImg" src="Motya3Mem.jpg" width=20% height=26%> <br/> <img class="MemImg" src="Motya4Mem.jpg" width=20% height=26%>');
}

function ArturMemes()
{
	
}






jQuery('document').ready(function() {
	
	var name = prompt("Введите ваше имя пользователя"), Password = prompt("Пожалуйста, введите ваш пароль");
	
	if ((Password == "КОММУНИЗМ") || (Password == "КОММУНИЗМ "))
	{	
		if (name.length <= 12) jQuery('#Hello').html("Приветствуем тебя, товарищ" + " " + name + "!!!");
		else jQuery('#Hello').html("Слишком длинное имя пользователя");
		
		if (name.length <= 12) alert("Добро пожаловать, товарищ " + name + "!!!"); else alert("Добро пожаловать, товарищ!!!");
		
		
	}
	else
	{
		jQuery('#base').remove();
		$('body').append('<img src="Albert_Lovyshka.png" id="Albert_Lovyshka"/>');
	}
	
	
	
	
});