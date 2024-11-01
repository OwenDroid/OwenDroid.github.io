window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
       return false;
    };
 };

 //Definitly not taken from tutorial 7