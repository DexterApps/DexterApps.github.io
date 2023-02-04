var nameApp = 'Dexter Play-er';
	var description = nameApp;
	var author = nameApp;
	
	var link_telegram = 'https://t.me/DexterPlayer';
	var link_facebook = '';
	var link_app = ''
	
	var main_name = nameApp + '『』';
	var main_text_connector = 'poderoso';
	var main_text_middle_rotating = 'REPRODUCTOR ONLINE, MÙLTIPLES FORMATOS, SUPER LIGERO';
	var main_text_end = '¡ Enserio te lo perderás ? - Que esperas !';

	var terms_company_name = nameApp + ' Apps';
	var copyright_company_name = terms_company_name;

	
	function changeHead() {
		document.head.querySelector('meta[name="description"]').content = description;
		document.head.querySelector('meta[name="author"]').content = author;
		document.title = nameApp;	


	}
	function changeBody(){
		document.getElementById('contact_telegram').href = link_telegram;
		document.getElementById('contact_facebook').href = link_facebook;
		document.getElementById('social_telegram').href = link_telegram;
		document.getElementById('social_facebook').href = link_facebook;
		
		document.getElementById('main_name').firstChild.nodeValue = main_name + '\n' + main_text_connector;
		document.getElementById('js-rotating').textContent = main_text_middle_rotating;		
		document.getElementById('main_text_end').innerHTML  = main_text_end;		
		document.getElementById('link_app').href = link_app;
		document.getElementById('terms_company_name').textContent = terms_company_name;
		document.getElementById('copyright_company_name').textContent = copyright_company_name;

	}
		
	changeHead();
	changeBody();
