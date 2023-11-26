function e(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2")}document.querySelectorAll("input").forEach(function(n){var a=document.createElement("label");a.classList.add("field-label"),a.htmlFor=n.id,a.innerHTML=e(n.name);var l=n.name[0].toUpperCase()+n.name.slice(1);n.placeholder=e(l),n.parentElement.prepend(a)});
//# sourceMappingURL=index.fdc9d39c.js.map
