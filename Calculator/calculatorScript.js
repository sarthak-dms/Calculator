var boxes = document.getElementsByClassName('boxes');
var display = document.getElementById('display');

var arr=[];

for (var i = 0; i < boxes.length; i++) 
{
    boxes[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == '+')
        {
            arr.push(value);
            
            display.innerText=" ";
        }
        else if(value == '-')
        {
            arr.push(value);
            
            display.innerText=" ";
        }
        else if(value == '/')
        {
            arr.push(value);
            
            display.innerText=" ";
        }
        else if(value == '*')
        {
            arr.push(value);
            
            display.innerText=" ";
        }
        else if(value == '=')
        {
            console.log(arr);
            var cnt=0;
            cnt = eval(arr[0] + arr[1] + arr[2]);
            for(var i=3;i<arr.length ; i+=2)
            {
                cnt = eval(cnt + arr[i] + arr[i+1]);
            }
            if(cnt==NaN) 
                display.innerText = "Error";
            else
                display.innerText = cnt;
            
        }
        else if(value=="AC")
        {
            arr=[];
            display.innerText = "";
            
        }
        else if(value == "+/-")
        {
            display.innerText = parseFloat(display.innerText)*-1;
        }
        else
        {
            if(arr.length==0)
                arr.push(parseFloat(value));
            else 
            {
                if(Number.isInteger(arr[arr.length -1]))
                {
                    arr[arr.length -1] = arr[arr.length -1]*10 + parseFloat(value);
                }
                else 
                {
                    arr.push(parseFloat(value));
                }
            }
            
            display.innerText += value;
        }
    });
}
