const Book = require("../models/Book");

module.exports = {
  async index(req, res) {
    try {
      const books = await Book.find({});

      return res.json(books);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao carregar os books`, error });
    }
  },

  async show(req, res) {
    try {
      const book = await Book.findById(req.params.id);

      return res.json(book);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao carregar a book`, error });
    }
  },

  async store(req, res) {
    try {
      const book = await Book.create(req.body);

      return res.json(book);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao criar a book`, error });
    }
  },

  async update(req, res) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(book);
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao atualizar a book`, error });
    }
  },

  async destroy(req, res) {
    try {
      await Book.findByIdAndDelete(req.params.id);

      return res.send({ msg: "Apagado com sucesso" });
    } catch (error) {
      return res.status(400).send({ msg: `Erro ao destruir a book`, error });
    }
  },
};
