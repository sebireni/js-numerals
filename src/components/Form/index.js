import { Button } from '@mui/material';
import React, {useState} from 'react';
import './Form.css';

const Form = () => {
  const [number, setNumber] = useState(null);
  const [text, setText] = useState('');
  const digits = [];
  const arrDig = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arrTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrTy = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  //const sufixes = ['houndred', 'thousand', 'million', 'billion', 'trillion'];

  const getNumberValue = (e) => {
    setNumber(Number(e.target.value));
    setText('');
  };

  const validator = () => {
    if (number < 0 || !Number.isInteger(number) || number>1000000000000) {
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

    var n  = number;
    var text2 = '';

    while (n > 0) {
      digits.push(n % 10);
      n = Math.trunc(n / 10);
    }
    digits.reverse();

    if (number === 0) {
      text2 = 'zero';
    } else {

      for (let i=digits.length-1; i >= 0; i--) {
        
        if (digits[i] !== 0) {

          if (digits.length-i-1 % 3 === 0) {
            if (digits.length - i === 4) {
              text2 = ' thousand ' + text2;
            } else if (digits.length - i === 7) {
              text2 = ' million ' + text2;
            } else if (digits.length - i === 10) {
              text2 = ' billion ' + text2;
            } else if (digits.length - i === 13) {
              text2 = ' trillion ' + text2;
            }

            if (digits[i-1] === 1) { //amikor i 0 azt kezelni meg!?
              text2 = arrTeen[digits[i]] + text2;
            } else {
              text2 = arrDig[digits[i]] + text2;
            };
          
          } else if (digits.length-i-1 % 3 === 1) {
            if (digits[i+1] > 0) {
              text2 = arrTy[digits[i]-2] + '-' + text2;
            } else {
              text2 = arrTy[digits[i]-2] + text2;
            }

          } else if (digits.length-i-1 % 3 === 2) {
            if (digits[digits.length-1] !== 0 || digits[digits.length-2] !== 0) {
              text2 = arrDig[digits[i]] + ' houndred and ' + text2;
            } else {
              text2 = arrDig[digits[i]] + ' houndred' + text2;
            }
          }
        }
        console.log(text2); // 3. kör után nem ad hozza a text2höz!?   
        //kotojel meg hianyzik!
      }
    };

    setText(text2);
  };

  return (
    <div className='calculator'>
      
      <label htmlFor='number' className='calculator__form__number--label'>Convert this number:</label>
      <input
        className='calculator__form__number--input'
        type='number'
        step='1'
        min='0'
        onChange={getNumberValue}
      />

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