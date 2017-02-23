//counter code
var button=document.getelementbyid('counter');
var couner=0; 

button.onclick=function(){
    
    //make a request to the counter endpoints
    
    //capture a response and store it in a variable
    
    //render the variable in the correct span
    counter=counter+1;
    var span=document.getelementid('counter');
    span.innerhtml= counter.tostring();
    
};