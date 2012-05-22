var XWiki=(function(B){var A=B.viewers=B.viewers||{};
A.Attachments=Class.create({counter:1,initialize:function(){if($("attachform")){this.addDeleteListener();
this.prepareForm()
}else{this.addTabLoadListener()
}},addDeleteListener:function(){$$(".attachment a.deletelink").each(function(C){C.observe("click",function(D){C.blur();
D.stop();
if(C.disabled){return 
}else{new B.widgets.ConfirmedAjaxRequest(C.readAttribute("href")+(Prototype.Browser.Opera?"":"&ajax=1"),{onCreate:function(){C.disabled=true
},onSuccess:function(){C.up(".attachment").remove();
this.updateCount()
}.bind(this),onComplete:function(){C.disabled=false
}},{confirmationText:"Вы уверены, что хотите удалить этот файл?",progressMessageText:"Удаление...",successMessageText:"Файл удален",failureMessageText:"Ошибка при удалении файла: "})
}}.bindAsEventListener(this))
}.bind(this))
},updateCount:function(){if($("Attachmentstab")&&$("Attachmentstab").down(".itemCount")){$("Attachmentstab").down(".itemCount").update("(__number__)".replace("__number__",$("Attachmentspane").select(".attachment").size()))
}if($("attachmentsshortcut")&&$("attachmentsshortcut").down(".itemCount")){$("attachmentsshortcut").down(".itemCount").update("(__number__)".replace("__number__",$("Attachmentspane").select(".attachment").size()))
}},prepareForm:function(){if(!$("attachform")){return 
}this.form=$("attachform").up("form");
this.defaultFileDiv=this.form.down("input[type='file']").up("div");
this.inputSize=this.form.down("input[type='file']").size;
this.addInitialRemoveButton();
this.addAddButton();
this.blockEmptySubmit();
this.resetOnCancel()
},addInitialRemoveButton:function(){this.defaultFileDiv.appendChild(this.createRemoveButton())
},addAddButton:function(){var C=new Element("input",{type:"button",value:"Добавить еще один файл",className:"attachmentActionButton add-file-input"});
this.addDiv=new Element("div");
this.addDiv.appendChild(C);
Event.observe(C,"click",this.addField.bindAsEventListener(this));
this.defaultFileDiv.up().insertBefore(this.addDiv,this.defaultFileDiv.next())
},blockEmptySubmit:function(){Event.observe(this.form,"submit",this.onSubmit.bindAsEventListener(this))
},resetOnCancel:function(){Event.observe(this.form,"reset",this.onReset.bindAsEventListener(this));
Event.observe(this.form.down(".cancel"),"click",this.onReset.bindAsEventListener(this))
},addField:function(F){var E=new Element("input",{type:"file",name:"filepath_"+this.counter,size:this.inputSize,className:"uploadFileInput"});
var C=new Element("input",{type:"hidden",name:"filename_"+this.counter});
var D=this.createRemoveButton();
var G=new Element("div");
G.insert(C).insert(E).insert(D);
this.addDiv.parentNode.insertBefore(G,this.addDiv);
F.element().blur();
this.counter++
},removeField:function(C){C.element().up("div").remove()
},createRemoveButton:function(){var C=new Element("input",{type:"button",value:"Удалить",title:"Удалить этот файл",className:"attachmentActionButton remove-file-input"});
Event.observe(C,"click",this.removeField.bindAsEventListener(this));
return C
},onSubmit:function(D){var C=false;
this.form.getInputs("file").each(function(E){if(E.value!=""){C=true
}});
if(!C){D.stop()
}},onReset:function(C){if(C){C.stop()
}this.form.getInputs("file").each(function(D){D.up().remove()
});
this.counter=1;
this.addField(C)
},addTabLoadListener:function(C){var D=function(E){if(E.memo.id=="Attachments"){this.addDeleteListener();
this.prepareForm();
document.stopObserving("xwiki:docextra:loaded",D);
delete D
}}.bindAsEventListener(this);
document.observe("xwiki:docextra:loaded",D)
}});
return B
}(XWiki||{}));
document.observe("xwiki:dom:loaded",function(){new XWiki.viewers.Attachments()
});