


### Function Expression vs Function statement vs IIFE
![](https://i.ibb.co/sHfgNL4/image.png)
![](https://i.ibb.co/WkWqdDZ/image.png)

### iffe `(xyz()) is same as ((xyz)())`

## THIS
#### When 'This' is defined in object, it refers to object's env & everywhere else it refers to global variable
*   but but but if function is inside an object, it again refers to global this
*   so output
`updated c object`
 `updated c object`
![](https://i.ibb.co/XkPPsMJ/image.png)
*   to resolve above problem put this = self above console.log
Below is an screenshot
![](https://i.ibb.co/SsVmdYc/image.png)


### *Functions are first class members in JS*
#### Functions are plain JS objects with added superpowers : it can do allobject things +
*   the code you write iniside fun sits in a special property called 'code' which is invocable - meaning  , will have an execution context
*   when we call fun() -> it inovkes the code we have written
*   it has an optional name property to distiguish from other functions

![](https://i.ibb.co/X30RRRG/image.png)


### Coersion

![](https://i.ibb.co/gPRCQZ4/image.png)

`console.log(3<2<1) \\true`
Why?
 * Coz if you see above table it starts reading from ltr in case of < & >
 * so it meas it will be evaluated as `(3<2) <1` , 3<2 == false , so `false <1 `, 
 * Coersion takes place here meaning `Number(false) <1`=> 0 <1 ==> *True*

### Operator Precedence


### a+b*c/d : Precendence is decided by below table
![](https://i.ibb.co/74gLNYD/image.png)

![](https://i.ibb.co/XYGB2ZC/image.png)

Answer: 4,4,4 
This happens because of precendence. it goes from right to left.
if precendence was from LtoR asnwer would be 2,2,2

![](https://i.ibb.co/XpgCrTP/image.png)

## [View All precedence here MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Notations

####  +( 3, 4) //Pre fix notation
####  ( 3, 4)+ //Post fix notation
####  3 + 4 // In fix notation - JS makes it eaasy for us to write code in this way using In fix notation

## Async Functioning
![Async Functioning](https://i.ibb.co/N3g5sWK/image.png)

In the above code, when cliked immediatedly after page reload, result is below:

![Async Functioning](https://i.ibb.co/h8241jK/image.png)

 🤔 Reason?
 
 JS first finish processing 
 ||  Stack 
 and then goes to queue =
 
 so all the events like clicks etc are placed in queue and js takes times to finish all execution context (functions) and then go to queue.


## Objects & Functions
* Both are same



