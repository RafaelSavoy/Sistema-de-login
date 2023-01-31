export function getUserToken(): string | null {
  const token = document.cookie
  return token
}
