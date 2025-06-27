import { Router } from "express";
import { PostController } from "../controllers/PostsController.controller";

export const postController = Router();

postController.get('/', PostController.getPosts)
postController.post('/', PostController.createPost)
postController.delete('/:id', PostController.deletePost)
