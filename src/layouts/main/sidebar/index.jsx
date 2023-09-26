import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menu";
import Account from "./account";

export default function Sidebar () {
    return (
        <aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col">
            <Logo />
            <Menu />
            <Account />
        </aside>
    )
}