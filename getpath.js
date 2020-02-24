function getPath(a) {
    let str = '';
    while (a.offsetParent) {
        strTag = a.tagName.toLowerCase()
        strAttrs = []
        for (key in a.attributes) {
            if (a.attributes[key].textContent) {
                strAttrs.push(`${a.attributes[key].name}="${a.attributes[key].textContent}"`)
            }
        }
        // console.log( `${strTag}[${strAttrs.join('][')}] `)
        str = `${strTag}[${strAttrs.join('][')}] ${str}`;
        a = a.offsetParent
    }
    // console.log(str);
    console.log(document.querySelector(`${str}`));
}