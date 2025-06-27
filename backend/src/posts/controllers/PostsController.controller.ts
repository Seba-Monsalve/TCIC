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


    static deletePost = async () => {
        return

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