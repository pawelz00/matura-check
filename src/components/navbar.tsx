import {Button} from "@/components/ui/button.tsx";

export default function Navbar() {
    return (
        <nav>
            <ul className={'flex justify-between items-center bg-primary px-2 h-12 w-fit rounded-2xl gap-x-1'}>
                <_Button>Podstawa</_Button>
                <_Button>Rozszerzenie</_Button>
                <_Button>Ustna</_Button>
            </ul>
        </nav>
    )
}

function _Button({children}: {children: string}) {
    return (
        <Button className={'hover:cursor-pointer rounded-xl'} variant={'ghost'}>{children}</Button>
    )
}