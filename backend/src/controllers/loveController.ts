import { Request, Response } from "express";
import prisma from "../lib/prismaClient.js";

export const getLove = async (req: Request, res: Response) => {
  try {
    const allResult = await prisma.loveResult.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(allResult);
  } catch (error) {
    console.error("Error in fetching results", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const postLove = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, crush, result } = req.body;

    if (!name || !crush || result === undefined) {
      res.status(400).json({ message: "All fields are required" });
    }

    const loveResult = await prisma.loveResult.create({
      data: {
        name,
        crush,
        result: Number(result),
      },
    });

    res.status(201).json(loveResult);
  } catch (error) {
    console.error("Error in creating result", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
