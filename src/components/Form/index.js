import { Button } from '@mui/material';
import React, {useState} from 'react';
import './Form.css';

const Form = () => {
  const [number, setNumber] = useState(null);
  const [text, setText] = useState('');
  const [british, setBritish] = useState(false);
  const digits = [];
  const arrDig = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arrTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrTy = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

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
    if (number < 0) {
      setText('number must be positive');
      return;
    };

    if (!Number.isInteger(number)) {
      setText('number must be integer');
      return;
    };

    if (number>1000000000000000) {
      setText('number must be smaller then 1.000.000.000.000.000');
      return;
    };

    let n  = number;
    let text2 = '';

    while (n > 0) {
      digits.push(n % 10);
      n = Math.trunc(n / 10);
    }

    if (british && number > 1000 && number < 2000) {
      if (digits[0] !== 0 || digits[1] !==0) {
        text2 = arrTeen[digits[2]] + ' hundred and ';
      } else {
        text2 = arrTeen[digits[2]] + ' hundred';
      }
      if (digits[1] === 1) {
        text2 = text2 + arrTeen[digits[0]];
      } else if (digits[1] === 0) {
        if (digits[0] !== 0) {
          text2 = text2 + arrDig[digits[0]];
        }
      } else if (digits[0] === 0) {
        text2 = text2 + arrTy[digits[1]-2];
      } else {
        text2 = text2 + arrTy[digits[1]-2] + '-' + arrDig[digits[0]];
      }
    } else {

      if (number === 0) {
        text2 = 'zero';
      } else {

        for (let i=0; i < digits.length; i++) {

          if (i % 3 === 0 && (digits[i] !== 0 || digits[i+1] !== 0 || digits[i+2] !== 0)) {
            if ( i === 3) {
              text2 = ' thousand ' + text2;
            } else if (i === 6) {
              text2 = ' million ' + text2;
            } else if (i === 9) {
              text2 = ' billion ' + text2;
            } else if (i === 12) {
              text2 = ' trillion ' + text2;
            }
          }
          
          if (digits[i] !== 0) {

            if (i % 3 === 0) {
              if (i < digits.length && digits[i+1] === 1) {
                text2 = arrTeen[digits[i]] + text2;
              } else {
                text2 = arrDig[digits[i]] + text2;
              };
            
            } else if (i % 3 === 1) {
              if (digits[i] !== 1) {
                if (digits[i-1] > 0) {
                  text2 = arrTy[digits[i]-2] + '-' + text2;
                } else {
                  text2 = arrTy[digits[i]-2] + text2;
                }
              }

            } else if (i % 3 === 2) {
              if (digits[i-1] !== 0 || digits[i-2] !== 0) {
                text2 = arrDig[digits[i]] + ' hundred and ' + text2;
              } else {
                text2 = arrDig[digits[i]] + ' hundred' + text2;
              }
            }
          } else {
            if (i % 3 === 0 && digits[i+1] === 1) {
              text2 = arrTeen[0] + text2;
            }
          }

          if (i === 2 && digits.length > 3 && digits[2] === 0) {
            text2 = ' and ' + text2;
          }
        }
      }
    }
    setText(text2);
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