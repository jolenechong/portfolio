import TechStackBox from "../techstackBox";

interface IProps {
    techStackList: string[];
}

export default function IntroSection({ techStackList }: IProps) {

    return (
        <>
            <section className="bg-gradient-to-tr to-primaryBG via-gradientRed from-primaryBG">
                <div className="flex h-screen flex-col justify-center items-center m-auto">

                    <div>
                        <div className="max-w-[500px] flex flex-col justify-center items-center m-auto">
                            <h1 className="text-4xl font-semibold">Hi, I’m <span className="text-primary">Jolene</span></h1>
                            <p className="text-center">I design and develop interfaces & AI models. Based in Singapore,
                                remotely available at <a href="mailto:jolenechong7@gmail.com">
                                    jolenechong7@gmail.com</a></p>
                            <div className="text-center pt-4 text-sm">
                                <p>Freelance Web Developer</p>
                                <p>Software Engineer at Great Health Technologies</p>
                            </div>
                        </div>

                        <div className="flex justify-center flex-wrap pt-8 max-w-[600px]">
                            {
                                techStackList.map((techStack, index) => {
                                    return <TechStackBox text={techStack} key={index} />
                                })
                            }
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}