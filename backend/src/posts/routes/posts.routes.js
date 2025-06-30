"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const express_1 = require("express");
const PostsController_controller_1 = require("../controllers/PostsController.controller");
exports.postController = (0, express_1.Router)();
exports.postController.get('/', PostsController_controller_1.PostController.getPosts);
exports.postController.post('/', PostsController_controller_1.PostController.createPost);
exports.postController.delete('/:id', PostsController_controller_1.PostController.deletePost);
