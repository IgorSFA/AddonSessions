browser.runtime.onMessage.addListener((request) => {
	console.log(request.tabs);
	let lista = document.getElementById('tabs');
	request.tabs.forEach(function(el){
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(el.title + ' - '+ el.url));
		lista.appendChild(li);
	});
});