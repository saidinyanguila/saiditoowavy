import { Heart } from "lucide-react";

const Index = () => {
    const links = [
        {
            "name" : "", 
            "url" : "#",
            "icon" : <Heart />,
        },
        {
            "name" : "", 
            "url" : "#",
            "icon" : <Heart />,
        },
        {
            "name" : "", 
            "url" : "#",
            "icon" : <Heart />,
        },
    ];


    return (
        <div className="bg-col-bg min-h-screen max-w-[1920px] mx-auto md:pt-10">
            <div className="bg-col-6 md:max-w-[550px] w-full mx-auto min-h-screen md:rounded-tr-3xl md:rounded-tl-3xl overflow-hidden">
                {/* Header */}
                <div className="relative mb-6">
                    <div className="bg-col-1 w-full aspect-[5/2]">
                        <button className="absolute bg-black/50 top-6 right-6 w-[40px] h-[40px] rounded-full cursor-pointer"></button>
                    </div>
                    
                    <div className="px-2 w-full -mt-[75px]">
                        <div className="w-[150px] h-[150px] bg-red-200 rounded-full overflow-hidden"></div>
                    </div>
                </div>

                <div className="px-4">
                    <p className="text-col-1 text-2xl font-[400] mb-3">saiditoowavy</p>

                    <div className="text-col-1 flex items-center gap-4">
                        {links.map((link, key) => (
                            <a key={key} href={link.url}>{link.icon}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;