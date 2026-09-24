export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-4xl font-bold">Bienvenido a NordFitness</h2>
      <p className="text-lg">Tu gimnasio de CrossFit y entrenamiento funcional.</p>
      <a
        href="/membresias"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Conoce nuestras membresías
      </a>
    </div>
  )
}