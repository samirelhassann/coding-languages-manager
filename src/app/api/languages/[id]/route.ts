import { NextResponse } from "next/server";

import { z } from "zod";

import { prisma } from "@/lib/prisma";

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const languageId = params.id;

  const bodySchema = z.object({
    name: z.string().min(2).max(50),
    creatorName: z.string().min(2).max(50),
    popularity: z.number().min(0).max(5),
    typingLevel: z.number().min(0).max(5),
  });

  const payload = await request.json();

  const { name, creatorName, popularity, typingLevel } =
    bodySchema.parse(payload);

  await prisma.languages.update({
    where: { id: languageId },
    data: {
      creator_name: creatorName,
      name,
      popularity,
      typing_level: typingLevel,
    },
  });

  return NextResponse.json({ status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const languageId = params.id;

  await prisma.languages.delete({
    where: { id: languageId },
  });

  return NextResponse.json({ status: 200 });
};
