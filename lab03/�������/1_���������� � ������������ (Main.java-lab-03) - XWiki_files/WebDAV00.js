var XWiki=(function(B){function A(C){C.down("a[class*='editlink']").removeClassName("hidden")}B.WebDAV={displayDavLinks:function(C){if(window.ActiveXObject||window.InstallTrigger){C.select(".attachment").each(A)}},davEdit:function(G){if(window.ActiveXObject){var E;try{E=new window.ActiveXObject("SharePoint.OpenDocuments")}catch(F){window.alert("Ошибка инициализации требуемого ActiveX объекта.");return }if(E){E.EditDocument(G)}else{window.alert("Ошибка инициализации редактора Share Point.");return }}else{if(window.InstallTrigger){if("createEvent" in document){var D=document.createElement("FoXWikiDomEventData");D.setAttribute("davURL",G);D.setAttribute("foxwiki","false");document.documentElement.appendChild(D);var C=document.createEvent("Events");C.initEvent("FoXWikiDomEvent",true,false);D.dispatchEvent(C);if(D.getAttribute("foxwiki")=="false"){if(window.confirm("Для выполнения данного действия требуется расширение Firefox. Установить?")){window.InstallTrigger.install({"FoXWiki":"https://addons.mozilla.org/en-US/firefox/downloads/file/39674/foxwiki-1.0b-fx.xpi"})}}}else{window.alert("Упс! Что-то пошло не так.... Попробуйте еще раз.")}}else{window.alert("Извините, для использования этой функции Вам необходим Firefox или Internet Explorer. ")}}}};return B}(XWiki||{}))