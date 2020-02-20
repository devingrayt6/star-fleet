import mongoose from "mongoose";
import Log from "../models/Log";

const _repository = mongoose.model("Log", Log);

class LogService {
  async getAll(author) {
    return await _repository.find({})
      .populate("shipId")
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async getLogByShipId(shipId) {
    return await _repository.find({ shipId: shipId })
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

const logService = new LogService();
export default logService;
