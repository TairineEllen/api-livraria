const app = require('./src/app');
const port = 8000;

app.listen(port, () => {
  console.info(`API rodando na porta ${port}`);
});