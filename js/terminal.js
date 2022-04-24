 

// Tested By ./<font color="00fafe"> rr.M30W </font color="00fafe">

TypingText = function(element, interval, cursor, finishedCallback) {

if((typeof document.getElementById == "undefined") || (typeof 



element.innerHTML == "undefined")) {

this.running = true;

return;

}

this.element = element;

this.finishedCallback = (finishedCallback ? finishedCallback : function() { 



return; });

this.interval = (typeof interval == "undefined" ? 100 : interval);

this.origText = this.element.innerHTML;

this.unparsedOrigText = this.origText;

this.cursor = (cursor ? cursor : "");

this.currentText = "";

this.currentChar = 0;

this.element.typingText = this;

if(this.element.id == "") this.element.id = "typingtext" + 



TypingText.currentIndex++;

TypingText.all.push(this);

this.running = false;

this.inTag = false;

this.tagBuffer = "";

this.inHTMLEntity = false;

this.HTMLEntityBuffer = "";

}

TypingText.all = new Array();

TypingText.currentIndex = 0;

TypingText.runAll = function() {

for(var i = 0; i < TypingText.all.length; i++) TypingText.all[i].run();

}

TypingText.prototype.run = function() {

if(this.running) return;

if(typeof this.origText == "undefined") {

setTimeout("document.getElementById('" + this.element.id + 



"').typingText.run()", this.interval);

return;

}

if(this.currentText == "") this.element.innerHTML = "";

if(this.currentChar < this.origText.length) {

if(this.origText.charAt(this.currentChar) == "<" && !this.inTag) {

this.tagBuffer = "<";

this.inTag = true;

this.currentChar++;

this.run();

return;

} else if(this.origText.charAt(this.currentChar) == ">" && this.inTag) {

this.tagBuffer += ">";

this.inTag = false;

this.currentText += this.tagBuffer;

this.currentChar++;

this.run();

return;

} else if(this.inTag) {

this.tagBuffer += this.origText.charAt(this.currentChar);

this.currentChar++;

this.run();

return;

} else if(this.origText.charAt(this.currentChar) == "&" && !



this.inHTMLEntity) {

this.HTMLEntityBuffer = "&";

this.inHTMLEntity = true;

this.currentChar++;

this.run();

return;

} else if(this.origText.charAt(this.currentChar) == ";" && 



this.inHTMLEntity) {

this.HTMLEntityBuffer += ";";

this.inHTMLEntity = false;

this.currentText += this.HTMLEntityBuffer;

this.currentChar++;

this.run();

return;

} else if(this.inHTMLEntity) {

this.HTMLEntityBuffer += this.origText.charAt(this.currentChar);

this.currentChar++;

this.run();

return;

} else {

this.currentText += this.origText.charAt(this.currentChar);

}

this.element.innerHTML = this.currentText;

this.element.innerHTML += (this.currentChar < this.origText.length - 1 ? 



(typeof this.cursor == "function" ? this.cursor(this.currentText) : this.cursor) : 



"");

this.currentChar++;

setTimeout("document.getElementById('" + this.element.id + 



"').typingText.run()", this.interval);

} else {

this.currentText = "";

this.currentChar = 0;

this.running = false;

this.finishedCallback();

}

}
