import getCurrentProfile from '@/actions/getCurrentProfile';
import { SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react';

export const NavUser = async () => {
    const currentProfile = await getCurrentProfile();
    return (
        <>
            {currentProfile.id ? (
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 45,
                                width: 45,
                            },
                        },
                    }}
                />
            ) : (
                <SignInButton>
                    <button className="bg-white px-4 py-2 rounded-md text-sm">
                        로그인
                    </button>
                </SignInButton>
            )}
        </>
    );
};
