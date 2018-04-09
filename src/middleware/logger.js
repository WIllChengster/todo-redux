export default store => next => action => {
    //code goes here
    console.log( 'Logger Middleware:', action );
    return next(action);
}