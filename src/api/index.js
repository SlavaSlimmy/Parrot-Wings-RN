/* eslint-disable import/prefer-default-export */
export const getUserInfo = async (token) => {
  const res = await fetch('http://193.124.114.46:3001/api/protected/user-info', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log('getUserInfo API', res);
  if (res.ok) {
    return res.json();
  }
  return res.text();
};

export const loginUser = async ({ email, password }) => {
  const res = await fetch('http://193.124.114.46:3001/sessions/create', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  // console.log('loginUser API', res);
  if (res.ok) {
    return res.json();
  }
  return res.text();
};

export const signupUser = async ({ username, password, email }) => {
  const res = await fetch('http://193.124.114.46:3001/users', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, email }),
  });
  // console.log('signupUser API', res);
  if (res.ok) {
    return res.json();
  }
  return res.text();
};

export const getTransactions = async (token) => {
  const res = await fetch('http://193.124.114.46:3001/api/protected/transactions', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log('getTransactions API', res);
  if (res.ok) {
    return res.json();
  }
  return res.text();
};
