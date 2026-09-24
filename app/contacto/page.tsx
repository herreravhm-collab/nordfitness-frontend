export default function contacto() {
  return (
    <div className="max-w-lg mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold">Contáctanos</h2>
      <p>Escríbenos y te responderemos lo antes posible.</p>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Nombre" className="border p-2 rounded"/>
        <input type="email" placeholder="Email" className="border p-2 rounded"/>
        <textarea placeholder="Mensaje" className="border p-2 rounded"/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </div>
  )
}