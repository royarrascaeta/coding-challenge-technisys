import { useContext, useState } from 'react';
import { AppContext } from '../context/appContext';
import { formValidations } from '../helpers/formValidations';

export const useForm = (initialForm) => {

  const [ loader, setLoader ] = useContext(AppContext);

  const [form, setForm] = useState( initialForm );
  const [error, setError] = useState( {} );
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
      setLoader(true);

      setTimeout(() => {
        setLoader(false);
        setResponse({
          error: "El nombre de usuario o la contraseña son incorrectos"
        })
      }, 2000);
    }
  };

  return {
    form,
    error,
    loader,
    response,
    handleChange,
    handleSelectChange,
    handleSubmit
  }

};
