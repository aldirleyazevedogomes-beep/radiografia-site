import Image from 'next/image';

export default function Banner(){
    return (
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden mb-16">
            <Image
                src="/images/deputado.jpg"
                alt="Deputado Amadeu Oliveira"
                layout="fill"
                priority
                className="rounded-2xl shadow-lg mx-auto w-full md:w-3/4 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-center text-white px-6">
                <h2 className="text-exl md:text-5xl font-display font bold drop-shadow-lg"></h2>
                <p className="text-lg md:text-xl mt-3 max-w-2lx drop-shadow">l</p>
            
            </div>    
        </section>
    );
}
