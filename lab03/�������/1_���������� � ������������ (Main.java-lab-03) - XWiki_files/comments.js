var XWiki=(function(B){var A=B.viewers=B.viewers||{};
A.Comments=Class.create({xcommentSelector:".xwikicomment",initialize:function(){if($("commentscontent")){this.startup()
}if($("Commentstab")){this.container=$("Commentspane");
this.generatorTemplate="commentsinline.vm"
}else{if($$(".main.layoutsubsection").size()>0&&$$(".main.layoutsubsection").first().down("#commentscontent")){this.container=$$(".main.layoutsubsection").first();
this.generatorTemplate="comments.vm"
}}this.addTabLoadListener()
},startup:function(){if($("commentform")){this.form=$("commentform").up("form")
}else{this.form=undefined
}this.loadIDs();
this.addDeleteListener();
this.addReplyListener();
this.addSubmitListener(this.form);
this.addCancelListener();
this.addEditListener();
this.addPreview(this.form)
},loadIDs:function(){$$(this.xcommentSelector).each(function(D){var C=D.id;
D._x_number=C.substring(C.lastIndexOf("_")+1)-0
})
},addDeleteListener:function(){$$(this.xcommentSelector).each(function(C){C=C.down("a.delete");
if(!C){return 
}C.observe("click",function(D){C.blur();
D.stop();
if(C.disabled){return 
}else{new B.widgets.ConfirmedAjaxRequest(C.readAttribute("href")+(Prototype.Browser.Opera?"":"&ajax=1"),{onCreate:function(){C.disabled=true
},onSuccess:function(){var E=C.up(this.xcommentSelector);
if(this.form&&this.form.descendantOf(E.next(".commentthread"))){this.resetForm()
}E.replace(this.createNotification("Комментарий удален"));
this.updateCount()
}.bind(this),onComplete:function(){C.disabled=false
}},{confirmationText:"Вы уверены, что хотите удалить этот комментарий?",progressMessageText:"Удаление...",successMessageText:"Комментарий удален",failureMessageText:"Ошибка удаления комментария:"})
}}.bindAsEventListener(this))
}.bind(this))
},addEditListener:function(){$$(this.xcommentSelector).each(function(C){C=C.down("a.edit");
if(!C){return 
}C.observe("click",function(D){C.blur();
D.stop();
if(C.disabled){return 
}else{if(C._x_editForm){var E=C.up(this.xcommentSelector);
E.hide();
C._x_editForm.show()
}else{new Ajax.Request(C.readAttribute("href").replace("viewer=comments","xpage=xpart&vm=commentsinline.vm"),{onCreate:function(){C.disabled=true;
C._x_notification=new B.widgets.Notification("Retrieving comment source...","inprogress")
},onSuccess:function(F){if(this.editing){this.cancelEdit(false,this.editing)
}var G=C.up(this.xcommentSelector);
G.insert({before:F.responseText});
C._x_editForm=G.previous();
this.addSubmitListener(C._x_editForm);
this.addPreview(C._x_editForm);
C._x_editForm.down("a.cancel").observe("click",this.cancelEdit.bindAsEventListener(this,C));
G.hide();
C._x_notification.hide();
this.editing=C
}.bind(this),onFailure:function(F){var G=F.statusText;
if(F.statusText==""||F.status==12031){G="Server not responding"
}C._x_notification.replace(new B.widgets.Notification("Failed to retrieve comment: "+G,"error"))
}.bind(this),on0:function(F){F.request.options.onFailure(F)
},onComplete:function(){C.disabled=false
}})
}}}.bindAsEventListener(this))
}.bind(this))
},cancelEdit:function(D,C){if(D){D.stop()
}var E=C.up(this.xcommentSelector);
C._x_editForm.hide();
E.show();
this.cancelPreview(C._x_editForm);
this.editing=false
},addReplyListener:function(){if(this.form){$$(this.xcommentSelector).each(function(C){C=C.down("a.commentreply");
if(!C){return 
}C.observe("click",function(D){C.blur();
D.stop();
if(this.form.up(".commentthread")){this.form.up(".commentthread").previous(this.xcommentSelector).down("a.commentreply").show()
}C.up(this.xcommentSelector).next(".commentthread").insert({top:this.form});
this.form["XWiki.XWikiComments_replyto"].value=C.up(this.xcommentSelector)._x_number;
this.form["XWiki.XWikiComments_comment"].value="";
this.form["XWiki.XWikiComments_comment"].focus();
C.hide()
}.bindAsEventListener(this))
}.bind(this))
}else{$$(this.xcommentSelector+" a.commentreply").each(function(C){C.hide()
})
}},addSubmitListener:function(C){if(C){C.down("input[type='submit']").observe("click",function(E){E.stop();
if(C.down("textarea").value!=""){var F=new Hash(C.serialize(true));
F.set("xredirect",window.docgeturl+"?xpage=xpart&vm="+this.generatorTemplate);
F.set("xpage","xpart");
F.set("vm",this.generatorTemplate);
var D=C.action.replace(/\?.*/,"");
F.unset("action_cancel");
C._x_notification=new B.widgets.Notification("Добавление комментария...","inprogress");
C.disable();
this.restartNeeded=false;
new Ajax.Request(D,{method:"post",parameters:F,onSuccess:function(){this.restartNeeded=true;
this.editing=false;
C._x_notification.replace(new B.widgets.Notification("Комментарий добавлен","done"))
}.bind(this),onFailure:function(G){var H=G.statusText;
if(G.statusText==""||G.status==12031){H="Server not responding"
}C._x_notification.replace(new B.widgets.Notification("Ошибка добавления комментария:"+H,"error"))
}.bind(this),on0:function(G){G.request.options.onFailure(G)
},onComplete:function(G){if(this.restartNeeded){this.container.update(G.responseText);
document.fire("xwiki:docextra:loaded",{id:"Comments",element:this.container});
this.updateCount()
}else{C.enable()
}}.bind(this)})
}}.bindAsEventListener(this))
}},addCancelListener:function(){if(this.form){this.initialLocation=new Element("span",{className:"hidden"});
$("_comments").insert(this.initialLocation);
this.form.down("a.cancel").observe("click",this.resetForm.bindAsEventListener(this))
}},addPreview:function(E){if(!E){return 
}var C="/xwiki/bin/preview/__space__/__page__".replace("__space__",encodeURIComponent($$("meta[name=space]")[0].content)).replace("__page__",encodeURIComponent($$("meta[name=page]")[0].content));
E.commentElt=E.down("textarea");
var D=E.down("input[type=submit]").up("div");
E.previewButton=new Element("span",{"class":"buttonwrapper"}).update(new Element("input",{type:"button","class":"button",value:"Preview"}));
E.previewButton._x_modePreview=false;
E.previewContent=new Element("div",{"class":"commentcontent commentPreview"});
E.commentElt.insert({before:E.previewContent});
E.previewContent.hide();
D.insert({top:E.previewButton});
E.previewButton.observe("click",function(){if(!E.previewButton._x_modePreview&&!E.previewButton.disabled){E.previewButton.disabled=true;
var F=new B.widgets.Notification("Generating preview...","inprogress");
new Ajax.Request(C,{method:"post",parameters:{xpage:"plain",content:E.commentElt.value},onSuccess:function(G){this.doPreview(G.responseText,E);
F.hide()
}.bind(this),on400:function(G){this.doPreview("&nbsp;",E);
F.hide()
}.bind(this),onFailure:function(G){var H=G.statusText;
if(G.statusText==""||G.status==12031){H="Server not responding"
}F.replace(new B.widgets.Notification("Failed to generate preview: "+H,"error"))
},on0:function(G){G.request.options.onFailure(G)
},onComplete:function(G){E.previewButton.disabled=false
}.bind(this)})
}else{this.cancelPreview(E)
}}.bindAsEventListener(this))
},doPreview:function(D,C){C.previewButton._x_modePreview=true;
C.previewContent.update(D);
C.previewContent.show();
C.commentElt.hide();
C.previewButton.down("input").value="Back"
},cancelPreview:function(C){C.previewButton._x_modePreview=false;
C.previewContent.hide();
C.previewContent.update("");
C.commentElt.show();
C.previewButton.down("input").value="Preview"
},resetForm:function(C){if(C){C.stop()
}if(this.form.up(".commentthread")){this.form.up(".commentthread").previous(this.xcommentSelector).down("a.commentreply").show();
this.initialLocation.insert({after:this.form})
}this.form["XWiki.XWikiComments_replyto"].value="";
this.form["XWiki.XWikiComments_comment"].value="";
this.cancelPreview(this.form)
},updateCount:function(){if($("Commentstab")&&$("Commentstab").down(".itemCount")){$("Commentstab").down(".itemCount").update("(__number__)".replace("__number__",$$(this.xcommentSelector).size()))
}if($("commentsshortcut")&&$("commentsshortcut").down(".itemCount")){$("commentsshortcut").down(".itemCount").update("(__number__)".replace("__number__",$$(this.xcommentSelector).size()))
}},addTabLoadListener:function(C){var D=function(E){if(E.memo.id=="Comments"){this.startup()
}}.bindAsEventListener(this);
document.observe("xwiki:docextra:loaded",D)
},createNotification:function(C){var D=new Element("div",{"class":"notification"});
D.update(C);
return D
}});
return B
}(XWiki||{}));
document.observe("xwiki:dom:loaded",function(){new XWiki.viewers.Comments()
});