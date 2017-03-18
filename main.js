//console.log("Funciona!");
document.body.style.border = "5px solid blue";

// browser.tabs.query({currentWindow: true, active: true}, function(tab){
//   console.log(tab[0]);
// });

function logTabs(tabs) {

  console.log('Texto', tabs[0].url);
}
// console.log(browser.tabs.query({currentWindow: true}));
browser.tabs.query({currentWindow: true}, logTabs);
