import Image from 'next/image';

export default function Banner(){
                return (
                                <section className="w-full overflow-hidden mb-6">
                                        <div className="max-w-6xl mx-auto px-6 py-2">
                                                <div className="relative w-full h-[1200px] md:h-[600px] overflow-hidden rounded-2xl">
                                                        <Image
                                                                src="/images/deputado.jpg"
                                                                alt="Deputado Amadeu Oliveira"
                                                                width={1400}
                                                                height={700}
                                                                priority
                                                                className="rounded-2xl shadow-lg mx-auto w-full object-cover h-full"
                                                        />

                                                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                                                                <h2 className="sr-only md:not-sr-only text-3xl md:text-5xl font-display font-bold drop-shadow-lg"></h2>
                                                                <p className="sr-only md:not-sr-only text-lg md:text-xl mt-3 max-w-2xl drop-shadow"> </p>
                                                        </div>
                                                </div>
                                        </div>
                                </section>
                );
}
