function Home() {
  return (
    <div className="h-screen max-h-screen flex flex-col items-center bg-violet-900 justify-between">
      <div className="flex flex-col space-y-2 p-8 items-center md:h-1/5 landscape:h-2/5 justify-center box-border">
        <p className="text-yellow-400 text-sm md:text-2xl lg:text-xl text-center">
          Design e desenvolvimento por{" "}
          <a className="underline" href="https://www.lauramelo.com.br" target="_blank">
            Laura Melo
          </a>
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold text-zinc-50 text-center w-3/4 lg:w-full">
          Qual animal você seria?
        </h1>
        <p className="text-yellow-400 text-sm md:text-2xl lg:text-xl text-center">
          Quiz de personalidade
        </p>
      </div>

      <div className=" w-full space-y-0 flex flex-col flex-1 justify-end">
        <img
          className="w-full portrait:flex landscape:hidden"
          src="/cat-shadow.svg"
          alt="Imagem silhueta gato"
        />

        <img
          className="w-full portrait:hidden landscape:flex"
          src="/shadow.svg"
          alt="Imagem silhueta gato"
        />

        <div className="bg-zinc-950 p-8 pt-0 md:pt-8 flex flex-1 flex-col items-center justify-between md:justify-center space-y-8">
          <h2 className="text-zinc-50 text-3xl md:text-4xl text-center w-full md:w-3/4">
            Baseado em dados 10
            <strong className="text-yellow-400 font-bold">0%</strong> verídicos
            comprovados cientificamente
          </h2>
          <button
            type="button"
            className="bg-violet-900 text-zinc-50 py-4 px-8 md:px-12 w-full md:w-auto text-xl md:text-3xl rounded-full"
          >
            Começar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
