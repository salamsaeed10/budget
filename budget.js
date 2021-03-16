        
      var budObj= [];
      function storeInSession(){
          sessionStorage.setItem("cname",cname)
          sessionStorage.setItem("pname",pname)
          sessionStorage.setItem("bname",bname)
      }     
      function retrieveFromSession(){
          var obj = sessionStorage.getItem("cname", "pname","bname");
          console.log (obj);
      } 
      
      function onFormSubmit () {
            var data=readFromData();
            insertNewRecord(data);
            budObj.push(data)
            restData();
        }

        function readFromData(){
            var obj= {}
            obj.cname=document.getElementById("cname").value;
            obj.pname=document.getElementById("pname").value;
            obj.bname=document.getElementById("budget").value;
            console.log(obj);
            return obj;


        }

        function insertNewRecord(data){
            var table= document.getElementById("budget")
            var body= table.getElementsByTagName("tbody")[0];
            var nerRow= body.insertRow(body.length);
            var cell1= newRow.insertCell(0);
            var cell2= newRow.insertCell(1);
            var cell3= newRow.insertCell(2)
            cell1.innerHTML=data.cname
            cell1.innerHTML=data.pname
            cell1.innerHTML=data.bname
        }

        var budObject = { cname: "client name", pname: "project name", bname: "budget" }

var budstring = JSON.stringify(budObject)

var budJson= JSON.parse(budstring)

 
    
    