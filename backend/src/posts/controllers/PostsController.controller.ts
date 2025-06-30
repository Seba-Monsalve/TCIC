import { NextFunction, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export class PostController {

    static getPosts = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        console.log('getting posts');
        try {
            const posts = await prisma.post.findMany({
            });
            console.log(posts);
            res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }


    static deletePost = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {

        const { id } = req.params;
        try {
            const post = await prisma.post.findUnique({
                where: { id: id }
            });

            if (!post) {
                throw new Error('Post not found with id: ' + id);
            }
            await prisma.post.delete({
                where: { id: id }
            });
            res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }

    static createPost = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {

        const post = req.body;
        try {
            const newPost = await prisma.post.create({
                data: post
            });
            res.status(201).json(newPost);
        } catch (error) {
            next(error);
        }
    }
}