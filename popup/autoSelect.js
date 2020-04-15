function openItem() {
  var res;
  var lines;
  console.log("open");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    for(let i=1;i<=12;i++) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "document.querySelector('#custom_step_results_table > tbody > tr:nth-child(" + i+") > td.step-result.result > div > select').value = 1"
          });
        }
  });    
}
document.querySelector("#open").addEventListener("click", openItem);
