function WatermarkFocus(txtElem, strWatermark) { if (txtElem.value == strWatermark) { txtElem.value = ''; } }
function WatermarkBlur(txtElem, strWatermark) { if (txtElem.value == '') { txtElem.value = strWatermark; } }
function changeOpac(opacity, id) {
    var object = document.getElementById(id).style;
    object.opacity = (opacity / 100);
    object.MozOpacity = (opacity / 100);
    object.KhtmlOpacity = (opacity / 100);
    object.filter = "alpha(opacity=" + opacity + ")";
}
function showDiv(thediv) {
    divelm = (document.getElementById) ? document.getElementById(thediv) : document.all(thediv);
    if (divelm.style.visibility == "visible") { vis = "hidden"; hg = "1px"; }
    else { vis = "visible"; hg = "auto"; }
    divelm.style.visibility = vis;
    divelm.style.height = hg;
}

function AddToFavorite() {
    var url = location.href;
    var title = document.title;
    if (window.sidebar) // firefox
        window.sidebar.addPanel(title, url, "");
    else if (document.all)// ie
        window.external.AddFavorite(url, title);
    else if (window.opera && window.print) { // opera
        var elem = document.createElement('a');
        elem.setAttribute('href', url);
        elem.setAttribute('title', title);
        elem.setAttribute('rel', 'sidebar');
        elem.click();
    }
}

var min = 6;
var max = 22;
function increaseFontSize() {
    var p = document.getElementsByTagName('p');
    var span = document.getElementsByTagName('span');
    for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
            var s = 12;
        }
        if (s != max) {
            s += 1;
        }
        p[i].style.fontSize = s + "px"
    }
    for (i = 0; i < span.length; i++) {
        if (span[i].style.fontSize) {
            var s = parseInt(span[i].style.fontSize.replace("px", ""));
        } else {
            var s = 12;
        }
        if (s != max) {
            s += 1;
        }
        span[i].style.fontSize = s + "px"
    }
}
function decreaseFontSize() {
    var p = document.getElementsByTagName('p');
    var span = document.getElementsByTagName('span');
    for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
            var s = 12;
        }
        if (s != min) {
            s -= 1;
        }
        p[i].style.fontSize = s + "px"
    }
    for (i = 0; i < span.length; i++) {
        if (span[i].style.fontSize) {
            var s = parseInt(span[i].style.fontSize.replace("px", ""));
        } else {
            var s = 12;
        }
        if (s != min) {
            s -= 1;
        }
        span[i].style.fontSize = s + "px"
    }
}
function AddToFavorites(url, title) {
    if (window.sidebar) /* Mozilla Firefox Bookmark. */ window.sidebar.addPanel(title, url, "");
    else if (window.external) /* IE Favorite. */ window.external.AddFavorite(url, title);
    else if (window.opera && window.print) /* Opera Hotlist. */ return true;
}

function AtpMenus_Strip_Init(cssClassId) {
    var l_i = new Array(), lis = g_css('.' + cssClassId + ' ul.lvl_1 li');
    function swapClass(cur, cls, remove) {
        if (remove || g_rgx_split(cur, cls)) return (' ' + cur + ' ').replace(' ' + cls + ' ', ' ').replace(/^\s+|\s+$/g, "");
        else return (cur + ' ' + cls).replace(/^\s+|\s+$/g, "");
    }
    function setEvent(idx, li, li_a, li_ul) {
        l_i[idx] = { 'li': li, 'a': li_a, 'ul': li_ul }; li_a.onmouseover = function () {
            hideStripes();
            li.className = swapClass(li.className, 'shw');
            li_a.className = swapClass(li_a.className, 'shw');
            li_ul.className = swapClass(li_ul.className, 'shw');
            return false;
        };
    }
    function hideStripes() {
        for (var i = 0; i < l_i.length; i++) {
            if (typeof (l_i[i]) == 'undefined') continue;
            l_i[i]['li'].className = swapClass(l_i[i]['li'].className, 'shw', true);
            l_i[i]['a'].className = swapClass(l_i[i]['a'].className, 'shw', true);
            l_i[i]['ul'].className = swapClass(l_i[i]['ul'].className, 'shw', true);
        } 
    }
    for (var i = 0; i < lis.length; i++) {
        var li_a = '', li_ul = '', li_c = lis[i].childNodes;
        li_ul = g_css('.' + cssClassId + ' ul.' + g_rgx_split(lis[i].className, 'mp*'))[0];
        for (var i2 = 0; i2 < li_c.length; i2++)
            if (li_c[i2].nodeName == 'A') li_a = li_c[i2];
        if (li_a != '' && typeof (li_ul) != 'undefined') setEvent(i, lis[i], li_a, li_ul);
        else li_a.onmouseover = hideStripes;
    }
}

function AtpTabs_Init(cssClassId, mode) {
    //var tabTs = g_css('.' +cssClassId+ ' ul.tabTs a', tabCs = g_css('.' +cssClassId+ ' div.tabC'));
    var tabTs = g_css('.' + cssClassId + ' ul.tabTs li');
    var tabCs = g_css('.' + cssClassId + ' div.tabC');

    function swapClass(cur, cls, remove) {
        if (remove || g_rgx_split(cur, cls)) return (' ' + cur + ' ').replace(' ' + cls + ' ', ' ').replace(/^\s+|\s+$/g, "");
        else return (cur + ' ' + cls).replace(/^\s+|\s+$/g, "");
    }
    function setEvent(tabT, tabC) {
        var f = function () {
            hideStripes();
            tabT.className = swapClass(tabT.className, 'shw');
            tabC.className = swapClass(tabC.className, 'shw');
            return false;
        };
        if (mode == 'click') tabT.onclick = f;
        else tabT.onmouseover = f;
    }
    function hideStripes() {
        for (var i = 0; i < tabTs.length; i++) {
            tabTs[i].className = swapClass(tabTs[i].className, 'shw', true);
            tabCs[i].className = swapClass(tabCs[i].className, 'shw', true);
        } 
    }
    for (var i = 0; i < tabTs.length; i++) {
        setEvent(tabTs[i], tabCs[i]);
    }
}

function AtpTabsCookies_Init(cssClassId, mode) {
    var tabTs = g_css('.' + cssClassId + ' ul.tabTs li', tabCs = g_css('.' + cssClassId + ' div.tabC'));
    function swapClass(cur, cls, remove) {
        if (remove || g_rgx_split(cur, cls)) return (' ' + cur + ' ').replace(' ' + cls + ' ', ' ').replace(/^\s+|\s+$/g, "");
        else return (cur + ' ' + cls).replace(/^\s+|\s+$/g, "");
    }
    function setEvent(tabT, tabC) {
        var f = function () {
            hideStripes();
            tabT.className = swapClass(tabT.className, 'shw');
            tabC.className = swapClass(tabC.className, 'shw');
            g_Cookies.set('CurrentAtpTab', tabC.id, 1, '', '', '');
            return false;
        };
        if (mode == 'click') tabT.onclick = f;
        else tabT.onmouseover = f;
    }
    function hideStripes() {
        for (var i = 0; i < tabTs.length; i++) {
            tabTs[i].className = swapClass(tabTs[i].className, 'shw', true);
            tabCs[i].className = swapClass(tabCs[i].className, 'shw', true);
        }
    }
    var CurrentAtpTab = g_Cookies.get('CurrentAtpTab');
    if (CurrentAtpTab == null) {
        hideStripes();
        tabTs[0].className = swapClass(tabTs[0].className, 'shw');
        tabCs[0].className = swapClass(tabCs[0].className, 'shw');
    }
    for (var i = 0; i < tabTs.length; i++) {
        setEvent(tabTs[i], tabCs[i]);
        if (CurrentAtpTab != null && (parseInt(CurrentAtpTab) - 1) == i) {
            hideStripes();
            tabTs[i].className = swapClass(tabTs[i].className, 'shw');
            tabCs[i].className = swapClass(tabCs[i].className, 'shw');
        }
    }

}
function SetUniqueRadioButton(nameregex, current) {
    re = new RegExp(nameregex);
    for (i = 0; i < document.forms[0].elements.length; i++) {
        elm = document.forms[0].elements[i]
        if (elm.type == 'radio') {
            if (re.test(elm.name)) {
                elm.checked = false;
            }
        }
    }
    current.checked = true;
}