let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let tab = document.getElementById("tab")
languages.forEach (element => tab.innerHtml += `<p>${element}</p>`)
