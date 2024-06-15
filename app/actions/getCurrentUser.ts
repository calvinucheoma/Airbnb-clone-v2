import { getServerSession } from "next-auth";
import { authOptions } from "../libs/auth";
import prisma from "../libs/prismadb";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null, // it is optional in our schema so we add '?'
      //   we configure all these date properties and change them to string properties so we wouldn't get any hydration
      // errors as we get the error "Only plain objects can be passed to Client Components from Server Components. Date objects are not supported"
    };
  } catch (error: any) {
    return null;
    // This is not an API call but a direct communication with our database through our server component, so we do
    // not want to throw any errors to unnecessary break it
  }
};

export default getCurrentUser;
