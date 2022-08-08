const onevalue_operate = (value, operator) => {
     value = Number(value)
     switch (operator) {
          case 'Cos()':
               return Math.cos(value);

          case 'Sin()':
               return Math.sin(value);

          case 'Tan()':
               return Math.tan(value);

          case '-/+':
               return -value;

          case 'AC':
               return ' ';

          case '>':
               return (value.toString()).slice(0, -1)||' ';

          case '%':
               return value / 100;

          case '√':
               return value <=0 ? 'Error':Math.sqrt(value);
          default:
               return false
     }
};
const twovalue_operate = (valueone, valuetwo, operator ) => {
     const one = Number(valueone);
     const two = Number(valuetwo);
     switch (operator) {
          case "X":
               return one * two;

          case "/":
               return one / two;

          case "-":
               return +one -two;

          case "+":
               return one +two;
          default:
               return false

     }

};

var previoussoperator;
export const Calculate = (values) => {
     
     console.log(previoussoperator)
     if (values.firstvalue !== null && values.secondValue !== null && values.operator === 'Enter' ) {
         
          if(twovalue_operate(values.firstvalue, values.secondValue, previoussoperator)===0){
               return '0'
          };
          return twovalue_operate(values.firstvalue, values.secondValue, previoussoperator);
         
          
          
     }
     else if (values.firstvalue !== null && values.operator !== null) {
          previoussoperator = values.operator;
          
          if(onevalue_operate(values.firstvalue, values.operator)===0){
               return '0'
          };
          return onevalue_operate(values.firstvalue, values.operator);
     };
     
    
     return false;
};
export const getcalchistory = (values) =>{
     if (values.firstvalue !== null && values.secondValue !== null && values.operator === 'Enter' ) {
         
         
          return [values.firstvalue, previoussoperator,values.secondValue ].join(' ');
         
          
          
     }
     else if (values.firstvalue !== null && values.operator !== null && (values.operator !=='AC'&&values.operator !=='>')){
          previoussoperator = values.operator
          
         
          return [values.firstvalue, values.operator].join(' ');
     };
     return false;

};
