import { CarouselComponent } from "./elements/Carousel";

export default function Home() {
  return (
    <div className="justify-center font-sans text-white">
      <div className="bg-indigo-700 p-20">
          <h1 className="text-5xl">( Arushi Bhatnagar-Stewart ) - {">"} {"{"}</h1>
          <p className="text-xl pt-5 pb-5 pl-10">
            return <br />
            “I am a second year Software Engineering Student studying at Victoria University of Wellington. 
            I have a strong interest in backend development, artificial intelligence, cybersecurity, and cloud engineering. 
            As a second-year Software Engineering student aiming to specialise in AI, I'm proficient in Java and C/C++. 
            I’m passionate about social and environmental justice and aim to build technology that addresses these challenges.” ;
          </p>
          <h1 className="text-5xl">{"}"}</h1>
      </div>
      <div className="bg-indigo-950 p-20">
        <h2 className="text-4xl pb-10">( Check Out Some of My Projects ) - {">"} {"{"}</h2>
        <div className="flex flex-wrap justify-center overflow-hidden">
          <CarouselComponent />
        </div>
      </div> 
    </div>
  );
}
