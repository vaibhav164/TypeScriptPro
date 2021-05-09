# Vesion Command:-

1. to know the version of typescript just run command `tsc -v`.
2. to install TS run command `npm install -g typescript`.
3. to compile the TS file run command `tsc <filename with or without extension>`.
4. to run the TS file we can use node as well as brouser. for node run command `node <file name with or without extension>`.

**to run the TS file automaticaly after change in in run command** `tsc main --watch` this will act as nodemon module of node.

### Variable declaration in TypeScript:-

1. in TS variable can be declared using <kbd>let</kbd> and <kbd>const</kbd>
   or <kbd>var</kbd>

- to asign type to a variable use syntax `let <variable name>:<variable type> = value;` or `let <variable name>:<variable type> ;` we have 2 more datatype which are null and undefined.
  e.g., let x:number= 10;
  let b:string= 'vaibhav';
  let c:boolean=false;
  let a:string;

# any type:-

- if we declare a variable of type any then its type will get ignored and it will not show errro even when we use it as function name or any other format.

# unknow type:-

- the issue of variable type any gets resolved by using it unknown type. by declaring type of variable as unknown we can use the vaiable but can't change or access the property of this kind of variable.

# Type Inference:-

In this if we asign value to a variable during its declaration we cannot assign value to it of another type but if we just initialy declare the value and if we want to asign value of any data type we can use it .
e.g. ,
![inference](./Insertion.png)

**In Typescript if we call a function without a parameter it throws an error**

---

# Mosh Lecture content:-

- using var for variable initialisation ti make the varibale scope accross the whole function but using let makes the scope of variable to the respective block.

```
function add(){
  for(var i=1; i<10; i++)
    {console.log(i);}
    console.log('Finamly'+i);

}

```

now in above i valid for finaly console as well but if we had used let then it showed an error the resp[ective js file would had created but TS syntax must showed an erro that i is not defined for second console.log;

If we dont setup the type of variable its default type becones any.
