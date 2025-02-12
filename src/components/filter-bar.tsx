import {Button} from "@/components/ui/button.tsx";
import {useDataStore} from "@/store/useDataStore.ts";

export default function FilterBar() {
    return (
        <div className={'flex items-center bg-primary px-2 h-8 w-fit rounded-full gap-x-1 min-w-1/2'}>
            <_Button filter={'period'}>Epoka</_Button>
            <_Button filter={'motive'}>Motyw</_Button>
            <_Button filter={'author'}>Autor</_Button>
        </div>
    )
}

function _Button({children, filter}: {children: string, filter: string}) {

    const {filterByField} = useDataStore();

    return <Button onClick={() => filterByField(filter)} className={'hover:cursor-pointer h-6 rounded-xl'} variant={'ghost'} size={'sm'}>{children}</Button>
}