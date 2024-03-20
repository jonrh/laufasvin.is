export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Laufás Vín
        </h2>

        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Vín & Vínkynningar 🍷<br />
          laufasvin@laufasvin.is<br />
          846 7421<br />
        </p>
      </div>
    </main>
  );
}
