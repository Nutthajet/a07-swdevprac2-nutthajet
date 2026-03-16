import Image from "next/image";

export default async function CardDetailPage({params}:{params:Promise<{vid:string}>}){
    const {vid} = await params;

    const mockCardRepo = new Map()
    mockCardRepo.set("001", {name:"The Bloom Pavilion", image:"/img/bloom.jpg"})
    mockCardRepo.set("002", {name:"Spark Space", image:"/img/sparkspace.jpg"})
    mockCardRepo.set("003", {name:"The Grand Table", image:"/img/grandtable.jpg"})    

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Car ID {vid}</h1>
            <div className="flex flex-row my-5">
                <Image src={(mockCardRepo.get(vid)).image}
                alt="Product Picture"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"
                />
                <div className="text-md mx-5">{(mockCardRepo.get(vid)).name}</div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return [{vid:"001"},{vid:"002"},{vid:"003"}]
}