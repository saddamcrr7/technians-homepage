const supportClassList = 'classList' in document.createElement('div')

function classReg(c) {
    return new RegExp("(^|\\s+)" + c + "(\\s+|$)");
}

const  HasClass = supportClassList ? function HasClass(el, c) {
    return el.classList.contains(c)
  } : function (el, c) {
    return classReg(c).test(el.className)
}

export default HasClass
