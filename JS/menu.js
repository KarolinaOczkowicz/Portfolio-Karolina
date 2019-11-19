var theToggle = document.getElementById('toggle')

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass (elem, className) {
return new RegExp('' + className + '').test('' + elem.className + '')
}
// addClass
// toggleClass
function toggleClass (elem, className) {
var newClass = '' + elem.className.replace(/[\t\r\n]/g, '') + ''
if (hasClass(elem, className)) {
while (newClass.indexOf('' + className + '') >= 0) {
newClass = newClass.replace(' ' + className + ' ', ' ')
}
elem.className = newClass.replace(/^\s+|\s+$/g, '')
} else {
elem.className += ' ' + className
}
}

theToggle.onclick = function () {
toggleClass(this, 'on')
return false
}
