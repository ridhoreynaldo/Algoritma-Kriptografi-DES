new TypingText(document.getElementById("message"), 50, function(i){ var ar 
= new Array(""); return " " + ar[i.length % ar.length]; });
//Type out examples:
TypingText.runAll();