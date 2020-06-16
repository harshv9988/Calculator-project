var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var operand1 = 0;
var operand2 = null;
var operator = null;


for(var i=0;i<buttons.length;i++)
{   let clr = buttons[i];
    buttons[i].addEventListener('click',function(){
        clr.style.backgroundColor = "#66676e";
        function gray(){
            clr.style.backgroundColor = "#c1c2cc";
        }
        function red(){
            clr.style.backgroundColor = "#f25252b5"
        }
        var value = this.getAttribute('data-value');  //Alternative buttons[i].getAttribute but in for loop it should be let instead of var i
        if(value=='+')
        {
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText="";
            setTimeout(red,150);
        }
        else if(value=='-')
        {
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText="";
            setTimeout(red,150);
        }
        else if(value=='*')
        {
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText="";
            setTimeout(red,150);
        }
        else if(value=='/')
        {
            operator = '/';
            operand1 =  parseFloat(display.textContent);
            display.innerText="";
            setTimeout(red,150);
        }
        else if(value=='%')
        {
            operand2 =  parseFloat(display.textContent);
            display.innerText="";
            var result = eval(operand2/100 + "*" + operand1);
            display.innerText = result;
            setTimeout(gray,150);
        }
        else if(value=='+/-')
        {
            var temp =  parseFloat(display.textContent);
             display.innerText = -temp;
             setTimeout(gray,150);
        }
        else if(value=='AC')
        {
            display.innerText = "";
            setTimeout(gray,150);
        }
        else if(value=='=')
        {
            operand2 =  parseFloat(display.textContent);
            display.innerText="";
            var result = eval(operand1 + " " + operator + " " +operand2);
            display.innerText = result;
            setTimeout(red,150);
        }
        else{
            display.innerText+=value;
            setTimeout(gray,150);
        }
    }) 
}

