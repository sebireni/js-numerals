import { Button } from '@mui/material';
import React, {useState} from 'react';
import './Form.css';

export const convert = (n, british) => {
  const arrDig = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arrTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrTy = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';
  const digits = [];
  
  if (n < 0) {
    result = 'number must be positive';
    return;
  };

  if (!Number.isInteger(n)) {
    result = 'number must be integer';
    return;
  };

  if (n>1000000000000000) {
    result = 'number must be smaller then 1.000.000.000.000.000';
    return;
  };

  let splitnumber = n;

  while (splitnumber > 0) {
    digits.push(splitnumber % 10);
    splitnumber = Math.trunc(splitnumber / 10);
  }

  if (british && n > 1000 && n < 2000) {
    if (digits[0] !== 0 || digits[1] !==0) {
      result = arrTeen[digits[2]] + ' hundred and ';
    } else {
      result = arrTeen[digits[2]] + ' hundred';
    }
    if (digits[1] === 1) {
      result = result + arrTeen[digits[0]];
    } else if (digits[1] === 0) {
      if (digits[0] !== 0) {
        result = result + arrDig[digits[0]];
      }
    } else if (digits[0] === 0) {
      result = result + arrTy[digits[1]-2];
    } else {
      result = result + arrTy[digits[1]-2] + '-' + arrDig[digits[0]];
    }
  } else {

    if (n === 0) {
      result = 'zero';
    } else {

      for (let i=0; i < digits.length; i++) {

        if (i % 3 === 0 && (digits[i] !== 0 || digits[i+1] !== 0 || digits[i+2] !== 0)) {
          if ( i === 3) {
            result = ' thousand ' + result;
          } else if (i === 6) {
            result = ' million ' + result;
          } else if (i === 9) {
            result = ' billion ' + result;
          } else if (i === 12) {
            result = ' trillion ' + result;
          }
        }
        
        if (digits[i] !== 0) {

          if (i % 3 === 0) {
            if (i < digits.length && digits[i+1] === 1) {
              result = arrTeen[digits[i]] + result;
            } else {
              result = arrDig[digits[i]] + result;
            };
          
          } else if (i % 3 === 1) {
            if (digits[i] !== 1) {
              if (digits[i-1] > 0) {
                result = arrTy[digits[i]-2] + '-' + result;
              } else {
                result = arrTy[digits[i]-2] + result;
              }
            }

          } else if (i % 3 === 2) {
            if (digits[i-1] !== 0 || digits[i-2] !== 0) {
              result = arrDig[digits[i]] + ' hundred and ' + result;
            } else {
              result = arrDig[digits[i]] + ' hundred' + result;
            }
          }
        } else {
          if (i % 3 === 0 && digits[i+1] === 1) {
            result = arrTeen[0] + result;
          }
        }

        if (i === 2 && digits.length > 3 && digits[2] === 0 && (digits[0] !== 0 || digits[0] !== 0)) {
          result = ' and ' + result;
        }
      }
    }
  }

  return result;
};

const Form = () => {
  const [number, setNumber] = useState(null);
  const [text, setText] = useState('');
  const [british, setBritish] = useState(false);

  const getNumberValue = (e) => {
    setNumber(Number(e.target.value));
    setText('');
  };

  const toggleBritish = () => {
    setBritish(current => !current);
  };

  const validator = () => {
    if (number < 0 || !Number.isInteger(number) || number>1000000000000000) {
      alert('number must be positive and integer and smaller then 1000000000000');
      return;
    }
  };

  const handleSubmit = () => {
    setText(convert(number, british));
  };

  return (
    <div data-testid='form1' className='calculator'>
      
      <label htmlFor='number' className='calculator__form__number--label'>Convert this number:</label>
      <input
        className='calculator__form__number--input'
        type='number'
        step='1'
        min='0'
        onChange={getNumberValue}
      />

      <div className='calculator__form__number--British'>
        <input
          className='calculator__form__number--British__checkbox'
          type='checkbox'
          id='British'
          onChange={toggleBritish}
        />
        <label htmlFor='British'>British English counting</label>
      </div>

      <Button
        onClick={() => { validator(); handleSubmit()}}
        variant='contained'
        type='submit'
        size='large'
        sx={{ fontSize: '1.4rem', marginBottom: '16px', marginTop: '12px', width: '100px' }}
        >
        Convert
      </Button>

      <div className='calculator__output'>
        <div className='calculator__output__title'>English phrase of the number:</div>
        <span className='calculator__output__number--English'>{text}</span>
      </div>  
    </div>
  );
};

export default Form;