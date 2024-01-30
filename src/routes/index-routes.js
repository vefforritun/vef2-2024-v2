import express from 'express';

export const indexRouter = express.Router();

async function indexRoute(req, res) {
  return res.render('index', {
    title: 'Forsíða',
  });
}

indexRouter.get('/', indexRoute);
