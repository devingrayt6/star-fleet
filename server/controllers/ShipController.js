import express from "express";
import shipService from "../services/ShipService";
import logService from "../services/LogService";

export default class ShipController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/logs", this.getLogByShipId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await shipService.getAll()
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await shipService.getById(req.params.id)
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async getLogByShipId(req, res, next) {
    try {
      // This is our ship Id being passed to service
      let data = await logService.getLogByShipId(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await shipService.create(req.body)
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await shipService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await shipService.delete(req.params.id)
      return res.send("deleted")
    } catch (error) {
      next(error)
    }
  }

}
