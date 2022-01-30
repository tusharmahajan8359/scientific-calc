let screen=document.getElementById('screen');
buttons=document.querySelectorAll('.num');
let m=0;
     
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
    
       switch(buttonText){
           case 'del':
              
                break;

            case 'C':
                 screen.value=null; 
                 break;    
             
             case '=':
                 if(screen.value.includes('^')){
                     equal();
                 }else if(screen.value.includes('π')){
                     screen.value=screen.value.replace("π","*3.14159");
                     screen.value=eval(screen.value);
                 }else{
                    screen.value=eval(screen.value);
                 }
                 break;
             case '10x':   
                
                 break;
             case 'x2':   
                 
                 break;    
             case '√x':
                  screen.value=Math.sqrt(screen.value);
                  break; 
             case 'n!':
                  screen.value=factorial(screen.value);  
                  break;  
             case 'π':
                 screen.value+='π';
                 break;         
             default:
                 if(buttonText==='X'){
                     buttonText='*';
                 }else if(buttonText==='mod'){
                    buttonText='%';
                }
                 screen.value+=buttonText;
                 break;  
       }
       
    
    })   
        
   
}

function ms(){
    m=parseInt(screen.value);
    screen.value=null;
}
function mc(){
    m=0;
    screen.value=null;
}
function mplus(){
    m+=parseInt(screen.value);
    screen.value=null;
}
function msub(){
    m-=parseInt(screen.value);
    screen.value=null;
}
function mr(){
   screen.value+=m;
}
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      screen.value=answer;
    }  
  }

  function root(){
    screen.value=Math.sqrt(screen.value);
}

function power(){
    screen.value+='^';
}
function tenpow(){
    screen.value=Math.pow(10,screen.value); 
}
function sqr(){
    screen.value=Math.pow(screen.value,2); 
}
function inverse(){
    screen.value=1/(screen.value); 
}

function clr(){
    screen.value=null; 
}
function del(){
    screen.value=screen.value.substring(0,screen.value.length-1);
}

function equal(){
    let s=screen.value.split('^');
    screen.value=Math.pow(s[0],s[1]);
}
function mod(){
    screen.value+='%';
}