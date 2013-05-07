/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ArtNation\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-clock' : '&#xe00b;',
			'icon-search' : '&#xe00e;',
			'icon-mail' : '&#xe00f;',
			'icon-paperplane' : '&#xe010;',
			'icon-pencil' : '&#xe011;',
			'icon-paperclip' : '&#xe012;',
			'icon-reply' : '&#xe013;',
			'icon-reply-all' : '&#xe014;',
			'icon-forward' : '&#xe015;',
			'icon-user' : '&#xe016;',
			'icon-users' : '&#xe017;',
			'icon-user-add' : '&#xe018;',
			'icon-vcard' : '&#xe019;',
			'icon-export' : '&#xe01a;',
			'icon-location' : '&#xe01b;',
			'icon-heart' : '&#xe01c;',
			'icon-heart-2' : '&#xe01d;',
			'icon-star' : '&#xe01e;',
			'icon-star-2' : '&#xe01f;',
			'icon-thumbs-up' : '&#xe020;',
			'icon-thumbs-down' : '&#xe021;',
			'icon-tag' : '&#xe022;',
			'icon-book' : '&#xe023;',
			'icon-graduation' : '&#xe024;',
			'icon-newspaper' : '&#xe025;',
			'icon-eye' : '&#xe026;',
			'icon-briefcase' : '&#xe027;',
			'icon-hourglass' : '&#xe028;',
			'icon-key' : '&#xe029;',
			'icon-brush' : '&#xe02a;',
			'icon-suitcase' : '&#xe02b;',
			'icon-earth' : '&#xe02c;',
			'icon-clipboard' : '&#xe02d;',
			'icon-checkmark' : '&#xe02e;',
			'icon-cross' : '&#xe02f;',
			'icon-minus' : '&#xe030;',
			'icon-plus' : '&#xe031;',
			'icon-cross-2' : '&#xe032;',
			'icon-minus-2' : '&#xe033;',
			'icon-plus-2' : '&#xe034;',
			'icon-info' : '&#xe035;',
			'icon-warning' : '&#xe036;',
			'icon-cycle' : '&#xe037;',
			'icon-shuffle' : '&#xe038;',
			'icon-pictures' : '&#xe039;',
			'icon-folder' : '&#xe03a;',
			'icon-bookmarks' : '&#xe03b;',
			'icon-disk' : '&#xe03c;',
			'icon-resize-enlarge' : '&#xe03d;',
			'icon-play' : '&#xe03e;',
			'icon-next' : '&#xe03f;',
			'icon-previous' : '&#xe040;',
			'icon-first' : '&#xe041;',
			'icon-last' : '&#xe042;',
			'icon-arrow-left' : '&#xe043;',
			'icon-arrow-down' : '&#xe044;',
			'icon-arrow-up' : '&#xe045;',
			'icon-arrow-right' : '&#xe046;',
			'icon-arrow-left-2' : '&#xe047;',
			'icon-arrow-down-2' : '&#xe048;',
			'icon-arrow-up-2' : '&#xe049;',
			'icon-arrow-right-2' : '&#xe04a;',
			'icon-arrow-left-3' : '&#xe04b;',
			'icon-arrow-down-3' : '&#xe04c;',
			'icon-arrow-up-3' : '&#xe04d;',
			'icon-untitled' : '&#xe04e;',
			'icon-twitter' : '&#xe04f;',
			'icon-facebook' : '&#xe050;',
			'icon-pinterest' : '&#xe051;',
			'icon-linkedin' : '&#xe052;',
			'icon-docs' : '&#xe000;',
			'icon-cog' : '&#xe001;',
			'icon-flag' : '&#xe002;',
			'icon-palette' : '&#xe003;',
			'icon-lock' : '&#xe004;',
			'icon-trash' : '&#xe005;',
			'icon-network' : '&#xe006;',
			'icon-text' : '&#xe007;',
			'icon-megaphone' : '&#xe008;',
			'icon-share' : '&#xe009;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};