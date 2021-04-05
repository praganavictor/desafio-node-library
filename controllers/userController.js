const User = require("../models/User");
const Book = require("../models/Book");
const authConfig = require("../config");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(req, res) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email }))
        res.status(400).send({ error: "Usuario já existe" });

      const user = await User.create(req.body);

      user.password = undefined;

      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400,
      });

      return res.json({ user, token });
    } catch (error) {
      console.log("error", error);
      res.status(400).send({ msg: "Falha ao registrar", error });
    }
  },

  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "Usuario não encontrado" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Verifique o email e a senha." });

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    return res.json({ user, token });
  },

  async index(req, res) {
    try {
      const users = await User.find({}).populate("favbooks");

      return res.json(users);
    } catch (error) {
      return res
        .status(400)
        .send({ msg: `Erro ao carregar os usuarios`, error });
    }
  },

  async show(req, res) {
    try {
      const user = await User.findById(req.params.id);

      return res.json(user);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao carregar a usuario`, error });
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(user);
    } catch (error) {
      return res
        .status(400)
        .send({ msg: `Erro ao atualizar o usuario`, error });
    }
  },

  async destroy(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);

      return res.send({ msg: "Apagado com sucesso" });
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao destruir a usuario`, error });
    }
  },

  async favBook(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.params.book);

      user.favbooks.push(book);

      await user.save();
      await user.populate("favbooks");

      return res.json(user);
    } catch (error) {
      return res
        .status(400)
        .send({ msg: `Erro ao atualizar o usuario`, error });
    }
  },
};
