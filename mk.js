function printResults (years) {
    document.getElementById('years').innerHTML = years;
}


function getAge(dateString) {
    var today = new Date();
    //var today = new Date("2024/1/11 10:00:00");
    var birthDate = new Date(dateString);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = months + 12;
    } 
    printResults(years);
    return years;
}

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


window.onload = getAge("1995/02/05 09:33:00");

