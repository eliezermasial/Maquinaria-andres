import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import image from "@/public/ImageHero.png";
import { Wishlist } from "../type/Wishlist";
import { typography } from "@/lib/theme/typography";
import { Card, CardContent, CardHeader, CardParagraphy, CardTitle } from "@/components/ui/card";


type WishlistProps = {
    favorite: Wishlist;
}

export function Wishlistcard({favorite}: WishlistProps) {

    return(
        <Card className="flex  gap-10 md:w-200 bg-white border-white md:px-6 md:py-2">
            <CardHeader className="flex p-4 justify-around gap-10 md:gap-5">
                <Image
                    src={image}
                    alt={favorite.title}
                    className="md:h-36 md:w-36 rounded-xl rounded-b-none md:rounded-xl object-cover"
                />
            </CardHeader>

            <CardContent className="flex flex-col gap-3  max-md:px-3 max-md:py-3">
                <div className="flex flex-col gap-2 max-md:px-3">
                                    <CardTitle className={cn(typography.h3, "text-gray-900/55")}>
                        {favorite.title}
                    </CardTitle>
                    <CardParagraphy className={cn(typography.body,"text-gray-900/55")}>
                        {favorite.description}
                    </CardParagraphy>
                    
                    <div className="flex justify-between items-center md:hidden gap-2">
                        <CardParagraphy className={cn(typography.body, "text-gray-900/55")}>
                            Quantity : 
                            <span className="ml-5 text-gray-900/55 font-bold">
                                machine.quantity
                            </span>
                        </CardParagraphy>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}