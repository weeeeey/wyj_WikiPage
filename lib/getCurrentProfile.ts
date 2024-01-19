import { auth, redirectToSignIn, currentUser } from '@clerk/nextjs';
import { db } from './db';
import { Profile } from '@prisma/client';

const getCurrentProfile = async (): Promise<Profile> => {
    const { userId } = auth();
    if (!userId) {
        return redirectToSignIn();
    }
    let currentProfile = await db.profile.findUnique({
        where: {
            userId,
        },
    });
    if (!currentProfile) {
        const user = await currentUser();
        if (!user) {
            return redirectToSignIn();
        }
        currentProfile = await db.profile.create({
            data: {
                userId: userId,
                name: `${user.username} `,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });
    }
    return currentProfile!;
};

export default getCurrentProfile;
