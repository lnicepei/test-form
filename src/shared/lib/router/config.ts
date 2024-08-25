export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root
  },
  login() {
    return pathKeys.root.concat('login/')
  },
  register() {
    return pathKeys.root.concat('register/')
  },
  page404() {
    return pathKeys.root.concat('404/')
  },
}
