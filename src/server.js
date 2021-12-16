const cors = require('cors');
const express = require('express');
const cursos = require('./cursos.json')

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server is listening on port ${port}`));


app.get('/cursos-edu', (req, res) => {
  res.json({ cursos });
})