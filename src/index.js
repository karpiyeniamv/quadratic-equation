module.exports = function solveEquation(equation) {
    equation = equation.replace(/ /g,'');
    var regexp =  /x/ig;
    var pos = regexp.exec(equation);
    var a = parseInt(equation.slice(0,pos.index),10) ;
    regexp.lastIndex+=2;
    var fos = regexp.exec(equation);
    var b = parseInt(equation.slice(pos.index+3,fos.index-1),10) ;
    var c =  parseInt(equation.slice(fos.index+1,equation.length),10) ;
    var d = parseInt(b*b - (4*a*c));
    console.log (d);
    var res1 = Math.round(( (-1)*b + Math.sqrt(d))/(2*a));
    var res2 = Math.round (((-1)*b - Math.sqrt(d))/(2*a));
    if (res1< res2)
        return [res1,res2];
    else
        return [res2,res1];
};
