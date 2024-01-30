import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { environment } from './lib/environment.js';
import { handler404, handlerError } from './lib/handlers.js';
import { logger } from './lib/logger.js';
import { indexRouter } from './routes/index-routes.js';

const env = environment(process.env, logger);

if (!env) {
  process.exit(1);
}

const { port } = env;
const path = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('views', join(path, '../views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(path, '../public')));
app.use(handler404);
app.use(handlerError);

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
