var op1 = 0, op2 = 0;
var oper = 0;

function start()
{
    $("td").on("click", function () {
        var val = $(this).html();
        press(val);
    });   
}

function press(val)
{
    var res = $("#output").attr("value");

    if ((val >= '0') && (val <= '9'))
    {
        res += val;
    }
    else if ((val == '.') && (res != ""))
    {
        if (res.indexOf('.') == -1)
        {
            res += '.';
        }
    }
    else if (val == 'C')
    {
        op1 = op2 = 0;
        oper = 0;
        res = "";
    }
    else if (val == '+')
    {
        op1 = parseFloat(res);
        oper = 1;
        res = "";
    }
    else if (val == '-')
    {
        op1 = parseFloat(res);
        oper = 2;
        res = "";
    }
    else if (val == 'x')
    {
        op1 = parseFloat(res);
        oper = 3;
        res = "";
    }
    else if (val == '/')
    {
        op1 = parseFloat(res);
        oper = 4;
        res = "";
    }
    else if (val == 'x<sup>2</sup>')
    {
        op1 = parseFloat(res);
        op1 = op1 * op1;
        res = "" + op1;
    }
    else if (val == '<sup>1</sup>/<sub>x</sub>')
    {
        op1 = parseFloat(res);
        op1 = 1 / op1;
        res = "" + op1;
    }
    else if (val == '√x')
    {
        op1 = parseFloat(res);
        op1 = Math.sqrt(op1);
        res = "" + op1;
    }
    else if (val == '+/-')
    {
        op1 = parseFloat(res);
        op1 *= (-1);
        res = "" + op1;
    }    
    else if (val == '=')
    {
        op2 = parseFloat(res);
        if (oper == 1) op1 = op1 + op2;
        if (oper == 2) op1 = op1 - op2;
        if (oper == 3) op1 = op1 * op2;
        if (oper == 4) op1 = op1 / op2;
        res = ""+op1;
    }
    
    $("#output").attr("value", res);

}