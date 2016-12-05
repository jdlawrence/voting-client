export default socket => store => next => action => {
  console.log('in middle for socket: ', action);
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}