import { cleanup } from '@testing-library/react';
import reducer from '../redux/reducers/registrationReducer';
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL} from "../redux/types/registrationTypes";

describe('REDUCERS', () => {
  const initialState = {
    loading: 'none',
    data: [],
    error: '',
  };
  const payload = {
    status: 201,
    message: 'Registered successfully',
    data: {
      email: 'example@email.com',
      firstname: 'Grand mopao',
      lastname: 'maestro',
      gender: 'Malee',
      address: 'kacyiru',
      roleError: 'This role',
      dateofbirth: '12/12/1993',
    },
  };

  afterEach(cleanup);

  it('The initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('REGISTER', () => {
    expect(reducer(initialState, { type: REGISTER })).toEqual({
        ...initialState,
        loading: 'block'
    });
  });

  it('REGISTER_FAIL', () => {
    const action = {
      type: REGISTER_FAIL,
      payload: 'Fail to register',
    };

    expect(reducer(initialState, action)).toEqual({
        loading: 'none',
        data: [],
        error: 'Fail to register'
    });
  });
});
