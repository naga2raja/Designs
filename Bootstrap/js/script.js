/* Script.js */

function ShowAdvControls() {
        if (document.getElementById('adv_controls').checked) {
          document.getElementById("advanced-controls-row").style.display = "block";
            
        } else {
          document.getElementById("advanced-controls-row").style.display = "none";
        }
}
  
function DisplayResults() {
        if (document.getElementById('search_text').value=="") {
               alert("Please enter the text to search");            
        } else {
          document.getElementById("result-row").style.display = "block";
        }
}

function DisplayAnalyticalResults() {
        if (document.getElementById('search_text').value=="") {
               alert("Please enter the text to search");            
        } else {
				var term= document.getElementById('search_text').value;
				window.location.href = "analytical_results.html?val="+term;      
 		}
}