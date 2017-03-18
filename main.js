//console.log("Funciona!");
document.body.style.border = "5px solid blue";

// browser.tabs.query({currentWindow: true, active: true}, function(tab){
//   console.log(tab[0]);
// });

function logTabs(tabs) {
  console.log('Texto', tabs[0]);
}

browser.browserAction.onClicked.addListener(function(){
  browser.tabs.query({currentWindow: true}).then(function(tabs){
    var newTab = browser.tabs.create({url: "popup.html"});
    newTab.then(function(tab){
      browser.tabs.sendMessage(tab.id, {tabs: tabs},function(){});
    });
  });
});