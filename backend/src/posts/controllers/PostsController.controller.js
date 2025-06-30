"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostController {
}
exports.PostController = PostController;
_a = PostController;
PostController.getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getting posts');
    try {
        const posts = yield prisma.post.findMany({});
        console.log(posts);
        res.status(200).json(posts);
    }
    catch (error) {
        next(error);
    }
});
PostController.deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield prisma.post.findUnique({
            where: { id: id }
        });
        if (!post) {
            throw new Error('Post not found with id: ' + id);
        }
        yield prisma.post.delete({
            where: { id: id }
        });
        res.status(200).json(post);
    }
    catch (error) {
        next(error);
    }
});
PostController.createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    try {
        const newPost = yield prisma.post.create({
            data: post
        });
        res.status(201).json(newPost);
    }
    catch (error) {
        next(error);
    }
});
