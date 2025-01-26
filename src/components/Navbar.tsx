"use client"
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";

export const TravelInEaseLogo = () => {
    return (
        <svg
            fill="green"
            height="36"
            viewBox="0 0 36 36"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Plane Icon */}
            <path
                d="M18 4L22 8H16L18 4Z"
                fill="currentColor"
            />
            <path
                d="M18 4L14 8H20L18 4Z"
                fill="currentColor"
            />
            <path
                d="M18 4L22 12H16L18 4Z"
                fill="currentColor"
            />
            <path
                d="M18 4L14 12H20L18 4Z"
                fill="currentColor"
            />

            {/* Waves */}
            <path
                d="M2 24C4 22 8 20 12 20C16 20 20 22 22 24C24 26 28 28 32 28C36 28 36 28 36 28V32H0V28C0 28 0 26 2 24Z"
                fill="currentColor"
            />
            <path
                d="M2 28C4 26 8 24 12 24C16 24 20 26 22 28C24 30 28 32 32 32C36 32 36 32 36 32V36H0V32C0 32 0 30 2 28Z"
                fill="currentColor"
            />
        </svg>
    );
};
export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Links 1",
        "Links 2",
        "Links 3",
        "Links 4",
        "Links 5",
        "Links 6",
    
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <TravelInEaseLogo />
                    <p className="font-bold text-inherit">TravelInEase</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Navlink 1
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Navlink 2
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Navlink 3
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="success" href="#" variant="flat" className="font-bold">
                        Signin
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

