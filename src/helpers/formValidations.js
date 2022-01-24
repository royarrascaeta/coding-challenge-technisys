export const formValidations = (form) => {
  
  let errors = {};

  for (let value in form) {
    if (!form[value].trim()) {
      errors = {
        ...errors,
        [value]: "Este campo no debe estar vacío"
      }
    }
  }

  if(Object.keys(errors).length === 0){
    errors = {
      validations: true
    }
  }
  
  return errors;

};
