import { Button } from '@mui/material';
import React, {useState} from 'react';
import './Form.css';

const Form = () => {
  const [number, setNumber] = useState(null);
  const [text, setText] = useState('');
  // const [submit, setSubmit] = useState(false);
  const digits = [];
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tento19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const prefixes = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const sufixes = ['', 'houndred', 'thousand', 'million', 'billion', 'trillion'];

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

    if (number>1000000000000) {
      setText('number must be smaller then 1000000000000');
      return;
    };

    if (number < 10) {
      setText(ones[number]);
      return;
    } else if (number < 20) {
      setText(tento19[number-10]);
      return;
    };

    var n  = number;

    while (n > 0) {
      digits.push(n % 10);
      n = Math.trunc(n / 10);
    }
    digits.reverse();

    console.log(digits);


    // for (let i=digits.length; i>=0; i--) {

    // };
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