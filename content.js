var clickedEl = null;

document.addEventListener("mousedown", function(event) {
    // right click
    if (event.button == 2) {
        clickedEl = event.target;
    }
});

document.addEventListener("contextmenu", function(event) {
	if (event.target.tagName == "path") {
		clickedEl = event.target.parentNode;
	} else {
	    clickedEl = event.target;
	}
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "getClickedEl") {
        sendResponse({value: clickedEl.outerHTML});
    }
});