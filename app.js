function display(num){
    var result = document.getElementById('result')
        result.value += num
        console.log(result.value)
      
}

function answer(){

    var result= document.getElementById('result')
            // result.value= eval(result.value)   //eval wil sort out by itself all calc functions 
   try{

    var a = result.value
       result.value= eval(a)
    result.value = a;
    
    }
    catch(err){
        result.value = " Error"
     
    }
            

       
    }
    
    function Clear(){
        document.getElementById('result').value=''
        
    }
    