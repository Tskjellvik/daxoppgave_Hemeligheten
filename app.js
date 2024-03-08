const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Sets default rout to Public folder
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('/views/index.ejs');
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});