var activeTab = 'start';
var catchphrasePos = 0;
var catchphraseStep = 2;
var maxCatchphrasePos = 30;

if (probablyNetscape) {
	window.onerror = function(message, file, line) {
		alert('JavaScript error!\nFile: ' + file + '\nLine: ' + line + '\nMessage: ' + message);
	}
}

function animateCatchphrase() {
	if (Math.abs(catchphrasePos) >= maxCatchphrasePos) {
		if (catchphraseStep > 0) {
			catchphraseStep = -1;
		} else {
			catchphraseStep = 1;
		}
	}

	catchphrasePos = catchphrasePos + catchphraseStep;

	if (probablyNetscape) {
		document.layers.catchphrase.left = catchphrasePos;
	} else {
		document.getElementById('catchphrase').style.left = catchphrasePos + 'px';
	}
}

setInterval(animateCatchphrase, 100)

function tabLinkClickHandler(tab, fromAnchor) {
	if (tab === activeTab) return;

	if (probablyNetscape && fromAnchor) {
		document.layers[activeTab].visibility = 'hide'
		document.layers[tab].visibility = 'show'

		activeTab = tab;
	} else if (!fromAnchor) {
		document.getElementById(activeTab).style.display = 'none';
		document.getElementById(activeTab + '-link').className = 'tab-control';
		document.getElementById(tab).style.display = 'block';
		document.getElementById(tab + '-link').className = 'tab-control-active';
		activeTab = tab;
	}
}