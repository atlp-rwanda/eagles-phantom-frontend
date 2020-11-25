import React from "react";
import { Provider } from "react-redux";
import registrationReducer from '../redux/reducers/registrationReducer';
import { render, cleanup ,waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Registration from '../components/registration/Registration';
import store from '../redux/store';
const onSubmit = jest.fn();

const RegisterComponent = () => {
    return render(
      <Provider store={store}>
        <Registration onSubmit={onSubmit} />
      </Provider>
    );
  };

describe('testing the reducer', () => {
    afterEach(cleanup);
    it('should return the initial state', () => {
        expect(registrationReducer(undefined, {})).toEqual(
            {
                loading: 'none',
                data: [],
                error: ''
            }
        )
    });
    it("should render the register component", () => {
        const { asFragment } = RegisterComponent();
        expect(asFragment(<Registration />)).toMatchSnapshot();
      });

      it('should change state/value of the different input field', () => {
        const { getByLabelText } = RegisterComponent();
        const email = getByLabelText('email');
        const fistname = getByLabelText('firstname');
        const lastname = getByLabelText('lastname');
        const address = getByLabelText('address');
        const role = getByLabelText('role');
    
        userEvent.type(email, 'example@email.com');
        userEvent.type(fistname, 'Allybaba');
        userEvent.type(lastname, 'Bomayee');
        userEvent.type(address, 'Kigali');
        userEvent.type(role, 'operator');
    
        expect(email.value).toBe('example@email.com');
        expect(fistname.value).toBe('Allybaba');
        expect(lastname.value).toBe('Bomayee');
        expect(address.value).toBe('Kigali');
        expect(role.value).toBe('operator');
      });

      it('should return error if email is not provided', async () => {
        const { getByLabelText, container, getByText, debug } = RegisterComponent();
        const email = getByLabelText('email');
        const form = container.querySelector('form');
    
        userEvent.type(email, 'example@email.com');
    
        form.dispatchEvent(new Event('submit'));
    
        waitFor(() => expect(getByText('Provide a password')).toBeTruthy());
      });

      it('should return error if email is already in the system', async () => {
        const { getByLabelText, container, getByText, debug } = RegisterComponent();
        const email = getByLabelText('email');
        const button = getByLabelText('signup');
    
        userEvent.type(email, 'email@gmail.com');
    
        button.click(button);
    
        waitFor(() =>
          expect(getByText('email is already in the system')).toBeTruthy()
        );
      });
})