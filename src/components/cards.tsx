import { useDataStore } from "@/store/useDataStore";
import SingleCard from "@/components/card/single-card.tsx";
import { useFiltersStore } from "@/store/useFiltersStore";
import {cn} from "@/lib/utils.ts";

export default function Cards() {

    const { data, filteredData, filterBy } = useDataStore();
    const { view } = useFiltersStore();

    const classNames = {
        'grid': 'grid grid-cols-2 gap-6',
        'list': 'flex flex-col gap-6'
    }

    if(!filterBy) {
        return (
            <main className={cn('w-1/2 mt-12 items-center', classNames[view])}>
                {data.map((item) => <SingleCard key={item.id} item={item}/>)}
            </main>
        )
    }

    return (
        <main className={'flex flex-col gap-12 w-1/2 mt-12 items-center'}>
            {Object.entries(filteredData ?? {}).map(([key, value]) => {
                return (
                    <section key={key} className={'flex flex-col shadow-md rounded-xl w-full bg-white'}>
                        <span className={'text-2xl tracking-wide px-4 py-2 bg-black rounded-t-xl text-white'}>{key}</span>
                        <div className={cn(classNames[view], 'px-8 py-8')}>
                            {value.map((item) => <SingleCard key={item.id} item={item}/>)}
                        </div>
                    </section>
                )
            })}
        </main>
    )
}