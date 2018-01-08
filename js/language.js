{
	if(sessionStorage.userLang === undefined) {
		let userLang = navigator.language || navigator.userLanguage;

		if (userLang.indexOf("pt") !== -1)
			location.pathname = "ptBR.html";

		if (userLang.indexOf("en") !== -1)
			location.pathname = "enUS.html";
	}
}