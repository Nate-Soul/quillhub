import Image from "next/image";

const Clients = () => {

    const clients = [
        {
            name: "Write better",
            imageUrl: "/media/images/partners/write-better.jpg"
        },
        {
            name: "The write Academy",
            imageUrl: "/media/images/partners/the-write-academy.png"
        },
        {
            name: "The Writing Room",
            imageUrl: "/media/images/partners/the-writing-room.jpg"
        },
        {
            name: "The Writer",
            imageUrl: "/media/images/partners/the-writer.png"
        },
    ];

  return (
    <div className="py-8 bg-light-50">
        <div className="container">
            <div className="grid grid-cols-12 gap-y-6 md:gap-y-0">
                <div className="col-span-full md:col-span-2">
                    <h6 className="uppercase font-extrabold text-sm">
                        We're Trusted by Top writing firms
                    </h6>
                </div>
                <div className="col-span-full md:col-span-10 flex items-center justify-evenly gap-4 sm:gap-0 flex-wrap sm:flex-nowrap">
                    {clients?.map((client, clientIndex) => (
                        <figure key={clientIndex}>
                            <Image 
                                src={client.imageUrl} 
                                alt={client.name} 
                                height={41} 
                                width={103}
                                className="aspect-ratio" 
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients