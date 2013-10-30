// ==UserScript==
// @name       		Collapse Inline Photos
// @namespace		http://www.jaredwilliams.com.au
// @version			0.1
// @description		Hides inline Twitter photos from showing in your tweet stream UNTIL you click the tweet.
// @include			*twitter.com*
// @copyright		2012+, You
// ==/UserScript==

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

console.log('Hiding inline twitter photos...');

addGlobalStyle('.stream-item [data-card-type="photo"] .cards-media-container { display: none } ' + 
'.stream-item.open [data-card-type="photo"] .cards-media-container { display: block } ');