import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user || (session.user as any).role !== "PROFESSOR") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId, title, description, dueDate } = await req.json();

    if (!courseId || !title || !dueDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify the professor owns this course
    const course = await prisma.course.findUnique({
      where: { id: courseId, professorId: session.user.id }
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found or unauthorized" }, { status: 403 });
    }

    const homework = await prisma.homework.create({
      data: {
        courseId,
        title,
        description,
        dueDate: new Date(dueDate)
      }
    });

    return NextResponse.json({ message: "Homework posted", homework }, { status: 201 });
  } catch (error) {
    console.error("Homework creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
