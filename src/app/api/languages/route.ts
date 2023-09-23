import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

import { prisma } from "@/lib/prisma";

export const GET = async () => {
  const languages = await prisma.languages.findMany({});

  return NextResponse.json({ languages }, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const bodySchema = z.object({
    name: z.string().min(2).max(50),
    creatorName: z.string().min(2).max(50),
    popularity: z.number().min(0).max(5),
    typingLevel: z.number().min(0).max(5),
  });

  const payload = await request.json();

  const { name, creatorName, popularity, typingLevel } =
    bodySchema.parse(payload);

  await prisma.languages.create({
    data: {
      creator_name: creatorName,
      name,
      popularity,
      typing_level: typingLevel,
    },
  });

  return NextResponse.json({ status: 201 });
};
