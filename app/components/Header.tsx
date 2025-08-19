import { IconBriefcase, IconId, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
import { ElementType } from 'react';

interface NavLinkProps {
    href: string;
    icon: ElementType;
    text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, text }) => (
    <Link href={href} className="group relative z-10 flex cursor-pointer items-center gap-1">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">{text}</span>
    </Link>
);

export default function Header() {
    return (
        <header className="absolute top-0 z-40 flex w-full flex-col items-center justify-between gap-2 p-4 font-light text-white sm:p-9 md:flex-row md:gap-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 rounded-full border border-gray-100/20 p-2 text-xs leading-tight sm:p-3 sm:text-sm">
                <span className="relative flex items-center justify-center">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white sm:h-3 sm:w-3"></span>
                </span>
                <span>Insani.</span>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex items-center">
                <div className="flex items-center gap-4 rounded-full border border-gray-100/20 px-3 py-2 text-xs leading-tight sm:gap-10 sm:px-5 sm:py-3 sm:text-sm md:ml-4">
                    <NavLink href="#" icon={IconBriefcase} text="Work" />
                    <NavLink href="#" icon={IconId} text="About" />
                    <NavLink href="#" icon={IconMail} text="Contact" />
                </div>
            </nav>
        </header>
    );
}