export function reloadIfNotFound(to:any, from:any, next:any) {
  const matched = to.matched;
  if (matched && matched[0] && matched[0].path === '*') {
    // 如果是从初始路由过来的，说明的确是404
    if (from && from.path === '/' && from.matched.length === 0) {
      next();
    } else {
      window.location.reload();
    }
  } else {
    next()
  }
}