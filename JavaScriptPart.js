jQuery('document').ready(function() {
	
	var name = prompt("Введите ваше имя пользователя"), password = "КОММУНИЗМ", PasswordTest = prompt("Пожалуйста, введите ваш пароль");
	
	if (password == PasswordTest)
	{	
		if (name.length <= 15) { jQuery('#UserName').html(name); jQuery('#Hello').html("Приветствуем тебя, товарищ" + " " + name + "!!!"); }
		else { jQuery('#UserName').html("Слишком длинное имя пользователя"); }
		
		alert("Вход в аккаунт успешно выполнен. Добро пожаловать!");
		
		
	}
	else
	{
		alert("Неверный пароль");
		jQuery('body').remove();
	}
	
});