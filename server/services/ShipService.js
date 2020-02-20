import mongoose from "mongoose";
import Ship from "../models/Ship";

const _repository = mongoose.model("Ship", Ship);

class ShipService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    return await _repository.findById(id);
  }
  async create(body) {
    return await _repository.create(body);
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
}

const shipService = new ShipService();
export default shipService;
