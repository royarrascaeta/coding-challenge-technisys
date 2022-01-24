import { useState } from 'react';
import { formValidations } from '../helpers/formValidations';

export const useForm = (initialForm) => {

  const [form, setForm] = useState( initialForm );
  const [error, setError] = useState( {} );
  const [loading, setLoading] = useState( false );
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value
    })
  };

  const handleSelectChange = (val) => {
    const {value} = val;

    setForm({
      ...form,
      dni_type: value
    })
  }
  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    const errors = formValidations(form);

    setError(errors);

    if(errors.validations){
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setResponse({
          error: "El nombre de usuario o la contraseña son incorrectos"
        })
      }, 2000);
    }
  };

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleSelectChange,
    handleSubmit
  }

};
