import express from "express";
import CommentService from "../services/CommentService";

export default class CommentController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await CommentService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await CommentService.getById(req.params.id)
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await CommentService.create(req.body)
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await CommentService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      let data = await CommentService.delete(req.params.id)
      return res.send("deleted")
    } catch (error) {
      next(error)
    }
  }
}
