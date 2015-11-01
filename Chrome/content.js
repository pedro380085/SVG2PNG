var clickedEl = null;

document.addEventListener("mousedown", function(event) {
    // right click
    if (event.button == 2) {
        clickedEl = event.target;
    }
});

document.addEventListener("contextmenu", function(event) {
	var currentElement = event.target;
	while (currentElement) {
		if (currentElement.tagName == "svg") {
			clickedEl = currentElement;
			break;
		} else {
			currentElement = currentElement.parentNode;
		}
	}
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "getClickedEl") {
        sendResponse({value: clickedEl.outerHTML});
    }
});