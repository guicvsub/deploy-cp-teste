function DadosProjetos({ tituloprojeto, linkAcesso, descricao, textA, Titulo2 }) {
    return (
        <>
            <a
                href="#"
                className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-purple-600 hover:text-purple-600"
            >
                {tituloprojeto}
            </a>
            <a
                href={linkAcesso}
                className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-purple-600"
            >
                
            </a>
            <p className="mb-4">{descricao}</p>
            
            <br />
            <a href="#"
                className="inline-block pb-1 mt-2 text-base font-black text-purple-600 uppercase border-b border-transparent hover:border-purple-600">{textA}</a>
        </>
    );
}


export default DadosProjetos;
