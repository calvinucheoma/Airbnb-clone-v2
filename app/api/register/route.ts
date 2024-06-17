import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body = await request.json();

  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          msg: 'User email already exists. Please enter another email address',
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: 'Something went wrong...' },
      { status: 500 }
    );
  }
};
