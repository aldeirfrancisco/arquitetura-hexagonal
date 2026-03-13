import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import menuFundamentos from "./menuFundamentos";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu principal');
    const [index] = await TerminalUtil.menu(['1. Fundamento', 'Sair'])

    switch (index) {
        case 0: await menuFundamentos(); break
        case 1: process.exit(0)
    }

    menuPrincipal();
}