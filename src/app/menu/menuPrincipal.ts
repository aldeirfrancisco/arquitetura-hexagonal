import TerminalUtil from "@/util/TerminalUtil";
import { terminal } from "terminal-kit";
import menuFundamentos from "./menuFundamentos";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu principal');
    const resposta = await terminal.singleColumnMenu(['1. Fundamento', 'Sair']).promise

    switch (resposta.selectedIndex) {
        case 0: await menuFundamentos(); break
        case 1: process.exit(0)
    }

    menuPrincipal();
}