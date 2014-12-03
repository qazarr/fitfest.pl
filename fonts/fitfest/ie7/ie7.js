/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fitfest\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-chat': '&#xe602;',
		'icon-clipboard2': '&#xe603;',
		'icon-compass': '&#xe604;',
		'icon-paperplane': '&#xe605;',
		'icon-pil': '&#xe606;',
		'icon-pin': '&#xe607;',
		'icon-ico_arrow_left': '&#xe608;',
		'icon-ico_arrow_right': '&#xe609;',
		'icon-ico_menu': '&#xe601;',
		'icon-fitfest_logo': '&#xe600;',
		'icon-fb': '&#xe610;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
