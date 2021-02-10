
function growDiv() {
    var growDiv = document.getElementById('grow');
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
    }
   // document.getElementById("more-button").value = document.getElsementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
    
  }




/* CSS
body{
    text-align: center;
  }
  #more-button {
      border-style: none;
      background: orange;
    border-radius: 5px;
      font: 20px Serif;
      color: blue;
      padding: 7px;
      margin: 20px 0 10px 0;
    letter-spacing: 2px;
    }
    
    #grow input:checked {
      color: red;
    }
      
    #grow {
      -moz-transition: height .5s;
      -ms-transition: height .5s;
      -o-transition: height .5s;
      -webkit-transition: height .5s;
      transition: height .5s;
      height: 0;
      overflow: hidden;
  }
  
  
      .active-z{
          z-index: 1;
      }


    */

/* HTML
<input type="button" onclick="growDiv()" value="Toggle Button" id="more-button">
 
<div id='grow'>
        <div class='measuringWrapper'>
         <div class="text">Testing toggle Testing toggle Testing toggle Testing toggle Testing toggle Testing toggle Testing toggle Testing toggle</div>
      </div>
    </div>

*/
