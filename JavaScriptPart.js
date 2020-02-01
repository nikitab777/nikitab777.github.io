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




jQuery('document').ready(function() {
	
	var name = prompt("Введите ваше имя пользователя"), password = "КОММУНИЗМ", PasswordTest = prompt("Пожалуйста, введите ваш пароль");
	
	if (password == PasswordTest)
	{	
		if (name.length <= 12) { jQuery('#UserName').html(name); jQuery('#Hello').html("Приветствуем тебя, товарищ" + " " + name + "!!!"); }
		else { jQuery('#UserName').html("Слишком длинное имя пользователя"); }
		
		alert("Вход в аккаунт успешно выполнен. Добро пожаловать!");
		
		
	}
	else
	{
		jQuery('#base').remove();
		$('body').append('<img src="Albert_Lovyshka.jpg" id="Albert_Lovyshka"/>');
	}
	
	
	
	
});