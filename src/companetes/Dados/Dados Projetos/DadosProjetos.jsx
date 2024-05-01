function DadosProjetos({ tituloprojeto, linkAcesso, descricao, textA  }) {
    return (
        <>
            <a
                href="#"
                className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
            >
                {tituloprojeto}
            </a>
            <a
                href={linkAcesso}
                className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
            >
                Kahoot Educação, Saúde e Diversão
            </a>
            <p className="mb-4">{descricao}</p>
            
            <br />
            <a href="#"
           class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">{textA} </a>
        </>
    );
}

export default DadosProjetos;
