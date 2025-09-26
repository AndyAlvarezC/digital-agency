
export default function Form() {
  return (
    <section className="flex min-h-screen justify-center items-center">
      <div>
        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Estamos para ayudarte</h1>
        </div>
        <div>
          <form>
            <input placeholder="Nombre..." />
          </form>
        </div>
      </div>
    </section>
  );
}
