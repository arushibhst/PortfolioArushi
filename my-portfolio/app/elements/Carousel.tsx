import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComponent(){
    return (
        <div className="w-full flex justify-center object-center mt-10">
            <Carousel className="w-full max-w-xl">
                <CarouselContent>
                    <CarouselItem className="flex justify-center">
                        <img src="/recapp.png" alt="Logo of recapp app" className="rounded-3xl w-169 h-125" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/mountain.png" alt="Mountain Hikers video game" className="object-cover rounded-3xl w-169 h-125" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/avc.jpg" alt="Autonomous Vehicle following obstacle course" className="object-cover rounded-3xl w-169 h-125" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/penguin.png" alt="Logo of Project Kororā" className="object-cover rounded-3xl w-169 h-125" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute bg-indigo-700" />     
                <CarouselNext className="absolute bg-indigo-700" />
            </Carousel>
            </div>
    );
}