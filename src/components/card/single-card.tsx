import {Item} from "@/data/data.ts";
import CardBody from "@/components/card/card-body.tsx";
import CardHeader from "@/components/card/card-header.tsx";

type SingleCardProps = {
    item: Item
}

export default function SingleCard({item} : SingleCardProps) {
    return (
        <div className={'h-full w-full bg-card rounded-md'}>
            <CardHeader item={item}/>
            <CardBody item={item}/>
        </div>
    )
}