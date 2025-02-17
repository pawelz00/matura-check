import {Item} from "@/data/data.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {VideoIcon} from "lucide-react";

type SingleCardProps = {
    item: Item
}

export default function SingleCard({item} : SingleCardProps) {
    return (
        <div className={'h-full w-full bg-card rounded-md'}>
            <div key={item.id} className={'px-4 py-1.5 bg-card-foreground rounded-t-md flex justify-between items-center gap-x-3'}>
                <div className={'flex gap-x-3 items-center'}>
                    <span className={'font-semibold text-lg tracking-wide text-accent-foreground'}>
                        {item.title}
                    </span>
                    <span className={'text-md tracking-tight text-accent-foreground'}>
                        {item.author}
                    </span>
                </div>
                <Badge variant={'outline'} className={'text-card font-medium'}>{item.period}</Badge>
            </div>
            <div className={'px-6 py-3 rounded-b-md flex flex-col gap-y-4'}>
               <section className={'flex gap-y-1.5 flex-col'}>
                    <h3 className={'text-md font-medium'}>Krótki opis dzieła:</h3>
                    <span className={'text-md'}>
                        {item.description}
                    </span>
               </section>
               <section className={'flex gap-y-2 flex-col'}>
                    <h3 className={'text-md font-medium'}>Motywy:</h3>
                    <div className={'flex flex-wrap gap-3'}>
                        {item?.questions?.map((item) => {
                            return <Badge variant={'outline'} className={'bg-background text-xs'} key={item.question}>
                                {item.motive}
                            </Badge>
                        })}
                    </div>
                </section>
                <section className={'flex gap-y-2 flex-col tracking-normal'}>
                    <h3 className={'text-md font-medium'}>Źródła:</h3>
                    <div>
                        {item?.externalResources?.map((item) => {
                            return (
                                <a href={item.url} target={'_blank'} rel={'noreferrer'} key={item.url} className={'flex gap-x-1.5 items-center text-md hover:underline'}>
                                    <span>
                                        {item.title}
                                    </span>
                                    <VideoIcon className={'size-5 text-card-foreground/50'}/>
                                </a>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}