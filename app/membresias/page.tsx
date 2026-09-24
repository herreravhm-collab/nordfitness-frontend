export default function Membresias() {
  const planes = [
    {
      nombre: "Plan Mensual",
      precio: "$1000",
      descripcion: "Membresía mensual total"
    },
    {
      nombre: "Plan 12 Clases",
      precio: "$850",
      descripcion: "12 clases con vigencia de 1 mes"
    },
    {
      nombre: "Plan Dúo",
      precio: "$1800",
      descripcion: "Para parejas o dúos"
    },
    {
      nombre: "Plan Estudiantil",
      precio: "$800",
      descripcion: "Estudiantes hasta licenciatura"
    }
  ]

  return (
    <div className="max-w-xl mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold">Opciones de Inversión</h2>
      <p>Elige el plan que se adapta a ti y empieza tu transformación.</p>

      <div className="flex flex-col gap-6">
        {planes.map((plan, index) => (
          <div
            key={index}
            className="border p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold">{plan.nombre}</h3>
            <p className="text-2xl font-bold mt-2">{plan.precio}</p>
            <p className="text-gray-600 mt-2">{plan.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}