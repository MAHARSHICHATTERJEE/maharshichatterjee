  function checkTheForm(){
        var name=document.getElementById('title').value;
            var money=document.getElementById('price').value;
            var launchdate=document.getElementById('dateofLaunch').value;
            var category=document.forms["menu-items"]["category"].value;
           if (name == "") {
    alert("Name must be filled out");
    return false;

            }
            if(name.length<2 || name.length>65){
                alert("name shoulde be between 2 to 65 letters");
                 return false;
            }
      if(money=="")
          {
              alert("price is required");
               return false;
          }
            if( isNaN(money))
                {alert("price has to be a number");
                return false;}
            if (launchdate ==""){
                alert("date of launch is required");
            return false;}
   
    
            if (category =="elect") {
            
            alert("Please select an option!");
            return false; }
  }