var clickedEl = null;

document.addEventListener("mousedown", function(event) {
    // right click
    if (event.button == 2) {
        clickedEl = event.target;
    }
});

document.addEventListener("contextmenu", function(event) {
	var currentElement = event.target;
	
	// Loop through parents until we find a svg
	while (currentElement) {
		if (currentElement.tagName == "svg") {
			clickedEl = currentElement;
			break;
		} else {
			currentElement = currentElement.parentNode;
		}
	}

	// Default to our target if none were found
	if (!currentElement) {
	    currentElement = event.target;
	}
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "getClickedEl") {
        sendResponse({value: clickedEl.outerHTML});
    }
});