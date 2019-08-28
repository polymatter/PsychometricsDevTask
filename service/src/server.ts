import app from './app';

app.listen(app.get('port'), () => {
  console.log('Running at http://127.0.0.1:%d', app.get('port'));
});
