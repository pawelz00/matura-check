import { useDataStore } from "@/store/useDataStore";
import SingleCard from "@/components/single-card.tsx";

export default function Cards() {

    const { data, filteredData, filterBy } = useDataStore();

    if(!filterBy) {
        return (
            <main className={'flex flex-col gap-12 w-1/2 mt-12 items-center'}>
                {data.map((item) => <SingleCard item={item}/>)}
            </main>
        )
    }

    return (
        <main className={'flex flex-col gap-12 w-1/2 mt-12 items-center'}>
            {Object.entries(filteredData ?? {}).map(([key, value]) => {
                return (
                    <section key={key} className={'flex flex-col gap-6 p-6 shadow-md rounded-xl bg-primary/20 w-full'}>
                        <span className={'text-xl tracking-wide'}>{key}</span>
                        <div className={'flex flex-col gap-6'}>
                            {value.map((item) => <SingleCard item={item}/>)}
                        </div>
                    </section>
                )
            })}
        </main>
    )
}