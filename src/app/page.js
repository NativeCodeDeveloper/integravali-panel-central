export default function Home() {
  const profesionales = [
    {
      id: "01",
      nombre: "Ariela Viviana Ruiz Paredes",
      especialidad: "Fonoaudióloga",
      href: "https://integravali01.beauty/agendaEspecificaProfersional/22",
    },
    {
      id: "02",
      nombre: "Benjamín Núñez Rojas",
      especialidad: "Terapeuta ocupacional",
      href: "https://integravali02.buzz/agendaEspecificaProfersional/23",
    },
    {
      id: "03",
      nombre: "Pamela Bustamante López",
      especialidad: "Educadora diferencial",
      href: "https://integravali03.space/agendaEspecificaProfersional/22",
    },
    {
      id: "04",
      nombre: "Karina Torres León",
      especialidad: "Terapeuta ocupacional",
      href: "https://integravali05.space/agendaEspecificaProfersional/22",
    },
      {
          id: "05",
          nombre: "Matías Fredes Madariaga",
          especialidad: "Kinesiologo",
          href: "https://integravali04.angendaclinica.boats/agendaEspecificaProfersional/25",
      },
      {
          id: "06",
          nombre: "Johane Fuentealba Díaz",
          especialidad: "Terapeuta Ocupacional",
          href: "https://integravali06.angendaclinica.xyz/agendaEspecificaProfersional/25",
      },
  ];



  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef8f7_0%,#ffffff_28%,#f7fbf5_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[2rem] border border-[#d2ece6] bg-white/90 p-6 shadow-[0_20px_60px_rgba(71,150,150,0.16)] backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-[#cfe7e2] pb-6">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[#1ea7b1]" />
            <span className="h-3 w-3 rounded-full bg-[#69b76d]" />
            <span className="h-3 w-3 rounded-full bg-[#9bc915]" />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#5f9b9d]">
                Integravali
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f5f63] sm:text-4xl">
                Selecciona al profesional con quien quieres agendar
              </h1>
            </div>
            <a
              href="https://www.integravali.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#8bc9c3] bg-[#edf8f6] px-5 py-3 text-sm font-semibold text-[#2f6c71] transition duration-300 hover:border-[#5eaaaf] hover:bg-[#dff2ef] hover:text-[#234b51]"
            >
              Volver a pagina principal
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profesionales.map((profesional, index) => (
            <a
              key={profesional.href}
              href={profesional.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#d8eeea] bg-white p-6 shadow-[0_18px_36px_rgba(75,139,137,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#7dc0ba] hover:shadow-[0_24px_48px_rgba(75,139,137,0.18)]"
            >
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full bg-[#edf8f6] px-3 py-1 text-xs font-semibold tracking-[0.3em] text-[#4f989b] uppercase">
                    {profesional.id}
                  </span>
                  <span
                    className={`h-11 w-11 rounded-2xl ${
                      index % 3 === 0
                        ? "bg-[#1ea7b1]"
                        : index % 3 === 1
                          ? "bg-[#69b76d]"
                          : "bg-[#9bc915]"
                    }`}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-[#234b51]">
                    {profesional.nombre}
                  </h2>
                  <p className="mt-3 text-base font-medium text-[#63979a]">
                    {profesional.especialidad}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-[#5eaaaf] px-4 py-3 text-white transition duration-300 group-hover:bg-[#4a999e]">
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Ir a su agenda
                </span>
                <span className="text-2xl leading-none">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
