let screen=document.getElementById('screen');
buttons=document.querySelectorAll('.num');
let m=null;


  
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
                     screen.value=screen.value.replace("π","*"+Math.PI+"");
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
function toDegree(){
    screen.value=screen.value* (Math.PI / 180);
}
let status2nd=-1;
function second(){
    status2nd=status2nd*-1;
    if(status2nd===1){
        document.getElementById("qub").innerHTML="x<sup>3</sup>";
        document.getElementById("root").innerHTML=" &#8731x";
        // document.getElementById("yrootx").innerHTML="<sup>y</sup>&#8730x";
        document.getElementById("sq10").innerHTML="2<sup>x</sup>";
        // document.getElementById("qub").innerHTML="x<sup>3</sup>";
        // document.getElementById("qub").innerHTML="x<sup>3</sup>";
    }
    else{
        document.getElementById("qub").innerHTML="x<sup>2</sup>";
        document.getElementById("root").innerHTML="<span>&#8730;x</span>";
        document.getElementById("yrootx").innerHTML="x<sup>y</sup>";
        document.getElementById("sq10").innerHTML="10<sup>x</sup>";
        // document.getElementById("qub").innerHTML="x<sup>3</sup>";
        // document.getElementById("qub").innerHTML="x<sup>3</sup>";
    }
    
}
function floor(){
    screen.value=Math.floor(screen.value)
}
function ceil(){
    screen.value=Math.ceil(screen.value)
}
function e(){
    screen.value=2.71828182846;
}
function exp(){
    screen.value=Math.exp(screen.value);
}
function ms(){
    m=Number(screen.value);
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

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}
function toRadians () {
    screen.value=screen.value * (Math.PI /180);
}
function sin(){
 screen.value=Math.sin(screen.value);
}
function cos(){
 screen.value=Math.cos(screen.value);   
}
function tan(){
    screen.value=Math.tan(screen.value);     
}
function cosec(){
    screen.value=1/(Math.sin(screen.value));
 }
 function sec(){
    screen.value=1/(Math.cos(screen.value));
}
function cot(){
    screen.value=1/(Math.tan(screen.value));
}
function abs(){
    screen.value=Math.abs(screen.value);
}
function logg(){
    screen.value=Math.log10(screen.value);
}
function ln(){
    screen.value=Math.log(screen.value);
}
function sinchange(){
    screen.value=screen.value*-1;
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
      if(status2nd===1){
        screen.value=Math.cbrt(screen.value);
      }else{
        screen.value=Math.sqrt(screen.value);
      }
   
}

function power(){
    screen.value+='^';
}
function tenpow(){
   if(status2nd===1){
    screen.value=Math.pow(2,screen.value); 
   }else{
    screen.value=Math.pow(10,screen.value); 
   }
}
function sqr(){
    if(status2nd===1){
        screen.value=Math.pow(screen.value,3);   
    }else{
        screen.value=Math.pow(screen.value,2); 
    }
    
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