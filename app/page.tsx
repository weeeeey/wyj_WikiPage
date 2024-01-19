import { UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <div>
            aaa
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
