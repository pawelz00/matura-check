import {Button} from "@/components/ui/button.tsx";

export default function FilterBar() {
    return (
        <div className={'flex items-center bg-primary px-2 h-8 w-fit rounded-full gap-x-1 min-w-1/2'}>
            <_Button>Epoka</_Button>
            <_Button>Motyw</_Button>
            <_Button>Autor</_Button>
        </div>
    )
}

function _Button({children}: {children: string}) {
    return <Button className={'hover:cursor-pointer h-6 rounded-xl'} variant={'ghost'} size={'sm'}>{children}</Button>
}