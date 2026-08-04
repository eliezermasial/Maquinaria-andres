import Image from "next/image";
import image from "@/public/ImageHero.png";
import { CartItem } from "../type/CartItem";
import { Delete, Heart, MinusCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardParagraphy, CardTitle } from "@/components/ui/card";
import { typography } from "@/lib/theme/typography";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


type CartItemCardProps = {
    machine: CartItem,
    removeFromCart:(id: number) => void,
    increaseQuantity: (id: number)=> void,
    desIncreaseQuantity: (id: number) => void
}

export function CartItemCard({machine, removeFromCart, increaseQuantity, desIncreaseQuantity}: CartItemCardProps)
{
    console.log("removeFromCart :",removeFromCart);
    console.log("increaseQuantity :",increaseQuantity)

    const subTotal= Math.ceil(machine.price * machine.quantity)

    return(
        <Card className="flex max-md:flex-col justify-between bg-white border-white md:px-6 md:py-6">
            <CardHeader className="flex max-md:flex-col justify-around gap-10 md:gap-5">
                <Image
                    src={image}
                    alt={machine.title}
                    className="md:h-36 md:w-36 rounded-xl rounded-b-none md:rounded-xl object-cover"
                />
                <div className="flex flex-col gap-2 max-md:px-3">
                    <CardTitle className={cn(typography.h3, "text-gray-900/55")}>
                        {machine.title}
                    </CardTitle>
                    <CardParagraphy className={cn(typography.body,"text-gray-900/55")}>
                        Modèle haute performance - 410 ch
                    </CardParagraphy>
                    <CardParagraphy className={cn(typography.body, "hidden md:block text-gray-900/55")}>
                        Quantity : 
                        <span className="ml-5 text-gray-900/55 font-bold">
                            {machine.quantity}
                        </span>
                    </CardParagraphy>
                    
                    <div className="hidden md:flex gap-2">
                        <Button className="bg-surface hover:bg-primary transition cursor-pointer
                            hover:text-yelloAccent p-0 shadow border border-surface h-6 rounded-md"
                            disabled={machine.quantity <= 1}
                            onClick={() => desIncreaseQuantity(machine.id)}
                        >
                            <MinusCircle size={15}/>
                        </Button >
                        <Button className="bg-surface hover:bg-primary cursor-pointer transition p-0 shadow
                            hover:text-yelloAccent border border-surface h-6 rounded-md"
                            disabled={machine.quantity >= 20}
                            onClick={() => increaseQuantity(machine.id)}
                        >
                            <PlusCircle size={15}/>
                        </Button>
                    </div>
                    
                    <div className="flex justify-between md:hidden gap-2">
                        <CardParagraphy className={cn(typography.body, "text-gray-900/55")}>
                            Quantity : 
                            <span className="ml-5 text-gray-900/55 font-bold">
                                {machine.quantity}
                            </span>
                        </CardParagraphy>
                        <div className="flex gap-2">
                            <Button className="bg-surface hover:bg-primary transition cursor-pointer
                                hover:text-yelloAccent p-0 shadow border border-surface h-6 rounded-md">
                                <MinusCircle size={15}/>
                            </Button >
                            <Button className="bg-surface hover:bg-primary cursor-pointer transition p-0 shadow
                                hover:text-yelloAccent border border-surface h-6 rounded-md"
                                onClick={() => console.log(machine.quantity + 1)}
                            >
                                <PlusCircle size={15}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <div className="flex justify-between max-md:my-4 gap-3 items-center px-3">
                <Badge className=" max-md:flex md:hidden bg-yelloAccent h-5 max-md:w-52 rounded-md border-yelloAccent
                    px-3 py-3 text-xs uppercase text-onBackground"
                >
                    EN STOCK
                </Badge>
                <div>
                    <Button className="bg-transparent hover:bg-primary transition  hover:text-yelloAccent
                        p-0 shadow border border-surface h-10 rounded-md cursor-pointer">
                        <Heart size={20} />
                    </Button >
                    <Button className="bg-transparent hover:bg-surface-danger transition cursor-pointer
                        px-3 shadow border border-surface h-10 rounded-lg"
                        onClick={() => removeFromCart(machine.id)}
                    >
                        <Delete size={20} />
                    </Button>
                </div>
            </div>

            <CardContent className="flex flex-col gap-3  max-md:px-3 max-md:py-3">
                <Badge className=" max:hidden bg-yelloAccent h-5 rounded-md border-yelloAccent
                    px-3 py-3 text-xs uppercase text-onBackground"
                >
                    EN STOCK
                </Badge>
                <div className="flex justify-between gap-3 md:block">
                    <CardParagraphy className={cn(typography.body, "text-gray-900/55")}>
                        Prix unitaire
                        <br/>
                        <span className="text-background font-bold">
                            {machine.price} $
                        </span>
                    </CardParagraphy>
                    <CardParagraphy className={cn(typography.body, "text-gray-900/55 mt-0")}>
                        Sous-total
                        <br/>
                        <span className="text-background font-bold">
                            {subTotal} $
                        </span>
                    </CardParagraphy>
                </div>
            </CardContent>
        </Card>
    )
}