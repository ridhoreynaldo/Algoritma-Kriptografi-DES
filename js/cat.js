<!--// Method-5 animation script (compressed)
         /***** initialize global film variables ******/
         var frames = 31; // <---- total number of pictures in film
         var delay = 90; // <---- delay after each frame
         var color = "aqua"; // <---- Color of cat
         var changecol = true; // <---- Randomly change color of cat? If true the cat will change colors if false the color of the cat will be the value of the color variable.
         var move_cat = true; // <---- Move cat? If true the cat will move side to side. If false the cat will stay in one place.
         var cat_fontsize = 5; // <---- In pixels
         
         /***** initialize anim screen position (in pixels) *****/
         
         var topp = 1; // <---- window position bottom
         var left = (move_cat)?14:-10; // <---- window position right
         var width = 0; // <---- window width
         var height = 0; // <---- window height
         
         
         /***** initialize anim control variables *****/
         
         var posi = 0; // <---- actual picture position (frame counter)
         var prev = 1; // <---- previous picture number
         var run = true; // <---- boolean : true (?????) or !true (?????)
         
         
         /***** initialize style sheets ****/
         
         document.write("<" + "style type='text/css'><" + "!-- ");
         for (i = 0; i <= frames; i++) {
             if (move_cat) {
                 left = left + 1;
             }
             document.write("#cat" + i + " {position:absolute; color:" + color + "; font-size:" + cat_fontsize + "px; left:" + left + "%; top:" + topp + "px; width:" + width + "px; height:" + height + "px; z-index:" + i + "; visibility:hidden}");
         }
         document.write("--" + "><" + "/style>");
         
         /******* animation module ******/
         function change_color() {
             var colors = new Array("white", "aqua", "lime", "yellow", "magenta", "blue", "aqua", "gold", "yellow", "white", "lime", "aqua", "green", "aqua", "lime", "white", "yellow");
             var randomnum = Math.floor(Math.random() * 17)
             var random_color = colors[randomnum];
         	for(i=0;i<=frames;i++) {
         		if(i==0) {
         		
         		}
         		else {
         			document.getElementById('cat' + i).style.color = random_color;
         		}
         	}
         }
         
         function animate() {
             posi = posi + 1;
             if (posi > frames) {
                 if (run) {
                     if (changecol && move_cat) {
                         setTimeout("animate2(posi-1, prev); change_color();", delay);
                     } else if (changecol && !move_cat) {
                         posi = 1;
                         setTimeout("animate(); change_color();", delay);
                     } else if (!changecol && move_cat) {
                         setTimeout("animate2(posi-1, prev);", delay);
                     } else if (!changecol && !move_cat) {
                         posi = 1;
                         setTimeout("animate();", delay);
                     }
                 }
             } else {
                 document.getElementById("cat"+ prev).style.visibility = 'hidden';
                 document.getElementById("cat"+ posi).style.visibility = 'visible';
                 prev = posi;
                 if (run) setTimeout("animate()", delay);
             }
         }
         
         function animate2(posi2, prev2) {
             posi = posi2 - 1;
             if (posi < 1) {
                 if (run) {
                     if (changecol) {
                         setTimeout("animate(); change_color();", delay);
                     } else {
                         setTimeout("animate();", delay);
                     }
                 }
             } else {
                 document.getElementById("cat"+ prev).style.visibility = 'hidden';
                 document.getElementById("cat"+ posi).style.visibility = 'visible';
                 prev = posi;
                 if (run) setTimeout("animate2(posi, prev-1)", delay);
             }
         }


