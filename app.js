function display(num){
    var result = document.getElementById('result')
        result.value += num
        console.log(result.value)
      
}

function answer(){

    try{

    var a = result.value;
    result.value= eval(a)
   
    
    }
    catch(err){
           alert("  INVALID STATEMENT!  ")
     
    }
            

       
    }
    
    function Clear(){
        document.getElementById('result').value=''
        
    }
    