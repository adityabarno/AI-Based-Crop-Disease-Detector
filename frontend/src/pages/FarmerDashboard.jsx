export default function FarmerDashboard() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">

      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        🌱 Crop Disease Detector
      </h1>

      <div className="w-full max-w-sm space-y-4">

        <button className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 active:scale-95 transition">
          📷 Upload Leaf Image
        </button>

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 active:scale-95 transition">
          📊 View My Results
        </button>

        <button className="w-full bg-yellow-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-yellow-600 active:scale-95 transition">
          🌤 Disease Risk Today
        </button>

      </div>

      <p className="mt-8 text-gray-500 text-sm text-center">
        Simple AI detection for farmers
      </p>

    </div>
  );
}
