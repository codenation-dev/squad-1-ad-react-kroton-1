import * as Yup from 'yup';
import Log from '../models/Log';
import User from '../models/User';

class LogController {
  async index(req, res) {
    const { page = 1, limit = 20 } = req.query;
    const logs = await Log.findAll({
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name'],
        },
      ],
      limit,
      offset: (page - 1) * 10,
    });

    return res.json(logs);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      log_environment: Yup.string().required(),
      log_source: Yup.string().required(),
      log_date: Yup.date().required(),
      log_type: Yup.string(),
      log_title: Yup.string().required(),
      log_description: Yup.string(),
      log_quantity: Yup.integer().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const log = await Log.create({
      ...req.body,
      user_id: req.userId,
    });
    return res.json(log);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      log_environment: Yup.string(),
      log_source: Yup.string(),
      log_date: Yup.date(),
      log_type: Yup.string(),
      log_title: Yup.string(),
      log_description: Yup.string(),
      log_quantity: Yup.integer().positive(),
      archived: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const log = await Log.findByPk(req.params.log_id);

    if (!log) {
      return res.status(400).json({ error: 'O log não existe' });
    }

    const logUpdated = await log.update({
      ...req.body,
      user_id: req.userId,
    });

    return res.json(logUpdated);
  }

  async delete(req, res) {
    const log = await Log.findByPk(req.params.log_id);

    if (!log) {
      return res.status(400).json({ error: 'O log não existe' });
    }

    await log.destroy();

    return res.status().json({ ok: 'Log excluído com sucesso' });
  }
}

export default new LogController();
