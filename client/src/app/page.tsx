import Link from "next/link";

const menus = [
    {
        link : "login",
        title : "Login"

    },
    {
        link : "sign_up",
        title : "Sign_up"
    },
];

export default function Home() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="flex gap-4">
                {menus.map((menu , index) => (
                    <Link key={menu.link + index} href={menu.link}>
                        {menu.title}
                    </Link>
                ))}
            </header>
        </main>
    )
}

