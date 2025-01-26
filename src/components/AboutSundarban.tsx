export default function AboutSundarban() {
    return (
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mt-8 mb-8">
            <div className="text-center py-6">
                <h1 className="text-3xl font-extrabold text-blue-500 underline decoration-blue-500 decoration-2 underline-offset-8">
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
        </div>

    )
}