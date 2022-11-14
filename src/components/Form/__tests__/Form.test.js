import React from 'react';
import ReactDOM from 'react-dom';
import Form from './../index';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
//import 'jest-dom/extend-expect';

//v2
// afterEach(cleanup);

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Form></Form>, div);
// });

// it('renders form correctly', () => {
//     const {getByTestId} = render(<Form prop='testingtasting'></Form>);
//     expect(getByTestId('form1')).toHaveTextContent('testingtesting'); //?
//     expect(screen.getByTestId('form1')).toHaveTextContent('testingtesting'); //?

// });

//v1
test('should render form component', () => {
    render(<Form/>);
    const FormElement = screen.getByTestId('form1');
    expect(FormElement).toBeinTheDocument();
    expect(FormElement).toHaveTextContent('Convert');
});

// test('matches snapshot', () => {
//     const form = {};
//     const tree = renderer.create(<Form form={}/>).toJSON();
//     expect(tree).toMatchSnapshot();
// });