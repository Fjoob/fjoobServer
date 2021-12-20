class BaseServise {
  Model = null;
  constructor(Model) {
    this.Model = Model;
  }

  list(query) {
    return this.Model.find(query || {})
  }

  insert(data) {
    const model = new this.Model(data);
    return model.save();
  }

  modify(query, data) {
    return Model.findOneAndUpdate(query, data, { new: true });
  }
}

module.exports = BaseServise;
