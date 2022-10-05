function saveToken(token: string): void {
  localStorage.setItem('mybinderToken', token);
}

function getToken(): string | null {
  return localStorage.getItem('mybinderToken');
}

function removeToken(): void {
  localStorage.removeItem('mybinderToken')
}

export { saveToken, getToken, removeToken };