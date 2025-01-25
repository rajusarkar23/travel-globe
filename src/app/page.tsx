import ImageSlider from "@/components/ImageSlider"
import PackageCard from "@/components/PackageCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-green-600">TravelInEase</h1>
        </div>
      </header>
      <main>
        <ImageSlider />
        <section className="mt-8 border border-green-200 rounded-lg shadow-xl shadow-green-400/50 max-w-2xl mx-auto bg-white hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center py-6">
            <h1 className="text-3xl font-extrabold text-green-600 underline decoration-green-500 decoration-2 underline-offset-8">
              About Sundarban
            </h1>
          </div>
          <div className="mx-auto flex justify-center mt-4 px-6">
            <img
              src="https://pub-367a5b1b28f9415dae5b51f69d042dff.r2.dev/istockphoto-1370857601-612x612.jpg"
              alt="tiger-image"
              width={500}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="mx-auto max-w-lg px-6 mt-6 mb-8">
            <p className="text-lg font-medium text-gray-700 leading-relaxed">
              The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins, spanning parts of Bangladesh and the Indian state of West Bengal. It is one of the largest such forests in the world and is renowned for its rich biodiversity.
            </p>
          </div>
        </section>
        <section>
          <PackageCard />
        </section>
      </main>
      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 TravelEase. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  )
}

