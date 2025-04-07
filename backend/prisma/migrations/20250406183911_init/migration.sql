-- CreateTable
CREATE TABLE "LoveResult" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "crush" TEXT NOT NULL,
    "result" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoveResult_pkey" PRIMARY KEY ("id")
);
