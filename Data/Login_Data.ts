export const loginData = [
  {
    testCase: 'Valid Email Login',
    username: 'ghazi.sham001@mailinator.com',
    password: 'SShaheen!021',
    expected: 'success',
    name: 'ghazi.sham001'
  },
  {
    testCase: 'Valid Username Login',
    username: 'ghazi.sham001',
    password: 'SShaheen!021',
    expected: 'success',
    name: 'ghazi.sham001'
  },
  {
    testCase: 'Invalid Password',
    username: 'ghazi.sham001',
    password: 'wrongpassword',
    expected: 'Error: The password you entered for the username ghazi.sham001 is incorrect. Lost your password?'
  },
  {
    testCase: 'Invalid Email',
    username: 'invalid.email@mailinator.com',
    password: 'SShaheen!021',
    expected: 'Error: A user could not be found with this email address.'
  }
];
