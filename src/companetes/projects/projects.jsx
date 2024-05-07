import DadosProjetos from "../../Dados/Dados Projetos/DadosProjetos"

function Projects(){
    return(
        <>
   
            
   <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 -mt-16000000000000000000000">
    <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
            Projetos
        </h2>
    </div>

    <div className="flex flex-wrap -mx-4">
        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <a href="https://deploy-challege.vercel.app/"><img src="https://deploy-challege.vercel.app/imgs/banner%20medico2.jpg" alt="Card img" className="object-cover object-center w-full h-48" /></a>
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                        <DadosProjetos
                            tituloprojeto={"Plataforma icr "}
                            linkAcesso={""}
                            descricao={"Plataforma Ludica com quiz e videos interativos para os pacientes do icr stacks utilizadas HTML, CSS e JS"}
                        />
                    </div>
                    <div>
                        <a href="#"
                            className="inline-block pb-1 mt-2 text-base font-black text-purple-600 uppercase  border-transparent hover:border-purple-600"> Github
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <a href="https://wokwi.com/projects/394081962231636993"><img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1s-dVAuJnecU4ixmBeK7roNkS2ZzBy7xRwILNSVUDyA&s"}
                alt="Card img"
                className="object-cover object-center w-full h-48"
            /></a>
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                        <DadosProjetos
                            tituloprojeto={"Quiz iot "}
                            linkAcesso={""}
                            descricao={"Quiz game com arduino educativo stacks c++"}
                            />
                    </div>
                    <div>
                        <a href="https://github.com/guicvsub/challege-iot"
                            className="inline-block pb-1 mt-2 text-base font-black text-purple-600 uppercase border-transparent hover:border-purple-600">GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
            src="https://cdn.mos.cms.futurecdn.net/oRMtEHPj8CxAvJ5P9BUp36-1200-80.jpg"
                alt="Card img"
                className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                        <DadosProjetos
                            tituloprojeto={"kahhot saude "}
                            linkAcesso={"https://create.kahoot.it/share/hospital-das-clinicas-icr/7ac4832b-5574-42d5-9c00-39dc7ef1217"}
                            descricao={"quiz infantil educativo utilizando kahoot   platoforma icr "}
                        />
                    </div>
                    <a href="https://kahoot.it/challenge/?quiz-id=7ac4832b-5574-42d5-9c00-39dc7ef1217b&single-player=true"
                        className="inline-block pb-1 mt-2 text-base font-black text-purple-600 uppercase  border-transparent hover:border-purple-600">jogue agora </a>
                </div>
            </div>
        </div>
    </div>
</section>

       
        </>
    )
}
export default Projects