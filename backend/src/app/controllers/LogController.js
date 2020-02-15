import * as Yup from 'yup';
import Log from '../models/Log';
import User from '../models/User';

class LogController {
  async index(req, res) {
    const logs = await Log.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(logs);
  }

  async show(req, res) {
    const { log_id } = req.params;
    const log = await Log.findByPk(log_id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!log) {
      return res.status(400).json({ error: 'O log não existe' });
    }
    return res.json(log);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      log_environment: Yup.string().required(),
      log_source: Yup.string().required(),
      log_date: Yup.date().required(),
      log_type: Yup.string(),
      log_title: Yup.string().required(),
      log_description: Yup.string(),
      log_quantity: Yup.number().positive(),
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
      log_quantity: Yup.number().positive(),
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

    return res.status(200).json({ ok: 'Log excluído com sucesso' });
  }
}

export default new LogController();
