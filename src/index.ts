import { log } from 'console';
import app from '@shared/http/server';

const port = 3000;

app.listen(port, () => log(`Rodando em: http://localhost:${port}`));
