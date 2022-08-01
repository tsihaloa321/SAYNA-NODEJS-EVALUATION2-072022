const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const routeApp = require('./public/routes/routeApp');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname +'/public'));
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(routeApp);




app.listen(port, function(error){
  if(error) throw error
  console.log("Server is running on http://localhost:"+port);
});



app.use(function(req, res, next) {
    next(createError(404));
  });

  
app.use(function(err, req, res, next) {
    
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    
    res.status(err.status || 500);
    res.render('error');
  });
