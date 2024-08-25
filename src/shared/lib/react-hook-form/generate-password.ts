export function generatePassword() {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const getRandomChar = (chars: string) => chars[Math.floor(Math.random() * chars.length)];

  const generate = () => {
    const capitalLetter = getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const numberOrSpecialChar = getRandomChar("0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=");
    const remainingLength = length - 2;
    const remainingChars = Array.from({ length: remainingLength }, () => getRandomChar(charset)).join('');

    return capitalLetter + numberOrSpecialChar + remainingChars;
  };

  let password = generate();

  // Ensure the password meets all criteria
  while (
    !/[A-Z]/.test(password) || // contains at least one capital letter
    !(/\d/.test(password) || /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)) // contains at least one number or special character
  ) {
    password = generate();
  }

  return password;
}