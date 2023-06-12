import { log } from 'console';
import app from '@shared/http/server';
import { Connection } from '@shared/typeorm';

const port = 3000;

// Connection.initialize()
//   .then(() => log('Conectou'))
//   .catch(error => log(error));

app.listen(port, () => log(`Rodando em: http://localhost:${port}`));
