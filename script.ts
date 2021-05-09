type numOrstring = number | string;
type stringnrOrboolean = string | boolean;

const logdetails = (address: numOrstring, zip: number) => {
  console.log(address);
};

const EmpDetails = (
  Ename: numOrstring,
  Married: stringnrOrboolean,
  Age: numOrstring,
  contacNo: numOrstring
) => {
  console.log(`${Ename} ${Married} ${Age} ${contacNo}`);
};
EmpDetails("vaibhav", false, 25, 9158402302);

// In above i had made allias instead of definig the trypes for variables this is called allias.
