export const AppRoutePaths = {
  Dashboard: '/dashboard',
  Login: '/',
}

export const getRouteNamesByPath = (path: string) => {
  return Object.fromEntries(Object.entries(AppRoutePaths).map(([k, v]) => [v, k]))[path]
}
