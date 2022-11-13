import axios from 'axios';
import baseUrl from './baseUrl';
import catchErrors from './catchErrors';
import Router from 'next/router';
import cookie from 'js-cookie';

export const createComplain = async (
  complain,
  evidence,
  setError,
  setLoading
) => {
  try {
    const token = cookie.get('token');

    const res = await axios.post(
      `${baseUrl}/api/v1/complain/createComplain`,
      { complain, evidence },
      { headers: { Authorization: token } }
    );

    Router.reload();
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }

  setLoading(false);
};
