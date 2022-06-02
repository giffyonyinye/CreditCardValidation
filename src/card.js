
import React from 'react';
import UseForm from './useForm';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';



const Card = () => {
    const {handleChange, handleFocus, handleSubmit, values, errors} = UseForm();
    const input = [
      {
        placeholder:"Cardholder Name",
        type:"text",
        name:"name",
        id:"name",
        value:values.name,
        isValid:errors.cname
      },
      {
        placeholder:"Card number",
        type:"number",
        name:"number",
        id:"number",
        value:values.number,
        isValid:errors.cnumber
      },
      {
        placeholder:"Card Expiry Date",
        type:"number",
        name:"expiry",
        id:"expiry",
        value:values.expiry,
        isValid:errors.cexp
      },
      {
        placeholder:"CVV",
        type:"number",
        name:"cvv",
        id:"cvv",
        value:values.cvc,
        isValid:errors.ccvc
      },
    ]
   
    return (
      <div className='form'>
      <div id="PaymentForm" >
        <div>
        <Cards
          cvc={values.cvc}
          expiry={values.expiry}
          focused={values.focus}
          name={values.name}
          number={values.number}
        />
        </div>
        <div style={{marginInlineStart:"2rem"}} >
          <form onSubmit={handleSubmit}> 
            { input.map((field, index) => (
              <div  key={index}>
                <input
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                value={field.value}
                isValid={field.isValid}
                />
              </div>
            ))}
            <br/>
            <button id='validateButton' type='submit'>Validate</button>
          </form>
          <p>{errors.message}</p>
        </div>
      </div>
      </div>
    );
};

export default Card;