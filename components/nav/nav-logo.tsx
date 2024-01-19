import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const NavLogo = () => {
    return (
        <Link href="/" className=" rounded-full flex items-center gap-x-2">
            <Image
                src="/logo.png"
                className="rounded-full"
                width={45}
                height={45}
                alt="logo"
            />
            <div className="hidden sm:block">
                <h3 className="text-2xl">Wiki page</h3>
                <div className="text-xs text-slate-600 ">share your idea</div>
            </div>
        </Link>
    );
};
