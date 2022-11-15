import React from 'react';
import ReactDOM from 'react-dom';
import Form from './../index';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import convert from '../../Form/index';

let tests = {
    '7': 'seven',
    '42': 'forty-two',
    '1999': 'one thousand nine hundred and ninety-nine',
    '2001': 'two thousand and one',
    '17999': 'seventeen thousand nine hundred and ninety-nine',
    '100001': 'one hundred thousand and one',
    '342251': 'three hundred and forty-two thousand two hundred and fifty-one',
    '1300420': 'one million three hundred thousand four hundred and twenty'
}

test('7', () =>  {
    const convertedNumber = convert(7);
    expect(convertedNumber).toEqual(tests[7]);
} );

test('42', () =>  {
    const convertedNumber = convert(42);
    expect(convertedNumber).toEqual(tests[42]);
} );

test('2001', () =>  {
    const convertedNumber = convert(2001);
    expect(convertedNumber).toEqual(tests[2001]);
} );

test('17999', () =>  {
    const convertedNumber = convert(17999);
    expect(convertedNumber).toEqual(tests[17999]);
} );

test('100001', () =>  {
    const convertedNumber = convert(100001);
    expect(convertedNumber).toEqual(tests[100001]);
} );

test('342251', () =>  {
    const convertedNumber = convert(342251);
    expect(convertedNumber).toEqual(tests[342251]);
} );

test('1300420', () =>  {
    const convertedNumber = convert(1300420);
    expect(convertedNumber).toEqual(tests[1300420]);
} );