export default function PackageCard() {
    const packageData = [
        {
            packageName: "Solo",
            persons: "1",
            duration: "Three nights Two days",
            roomType: "1 AC room",
            price: "200"
        },
        {
            packageName: "2 Person",
            persons: "2",
            duration: "Three nights Two days",
            roomType: "1 AC room",
            price: "300"
        },
        {
            packageName: "Family",
            persons: "Upto 4",
            duration: "Three nights Two days",
            roomType: "1 AC room",
            price: "600"
        }
    ];

    return (
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mt-8 mb-8">
            <h2 className="text-3xl text-blue-500 font-bold underline py-3 mb-2 text-center decoration-blue-500 decoration-2 underline-offset-8">Our packagaes</h2>
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-center gap-6">
                {packageData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-green-300 rounded-lg bg-white shadow-lg hover:shadow-xl duration-300 p-6 text-center transform transition-transform"
                    >
                        <p className="text-2xl font-bold text-green-600 mb-4">{item.packageName}</p>
                        <div className="space-y-3">
                            <p className="text-gray-700">
                                <span className="font-semibold">Travelers count:</span>
                                <span className="text-blue-500 font-bold">{item.persons}</span>
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Duration:</span> <span className="text-blue-500 font-bold">{item.duration}</span>
                            </p>
                            <p >
                                <span className="text-gray-700 font-semibold">Room Type:</span> <span className="text-blue-500 font-bold">{item.roomType}</span>
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Price:</span>
                                <span className="text-green-600 font-bold">${item.price}</span>
                            </p>
                        </div>
                        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden overflow-x-auto whitespace-nowrap scroll-smooth">
                <div className="inline-flex gap-6">
                    {packageData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-green-300 rounded-lg bg-white shadow-lg hover:shadow-xl duration-300 w-72 p-6 text-center transform hover:scale-105 transition-transform inline-block"
                        >
                            <p className="text-2xl font-bold text-green-600 mb-4">{item.packageName}</p>
                            <div className="space-y-3">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Person count:</span>
                                    <span className="text-blue-500 font-bold">{item.persons}</span>
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Duration:</span> {item.duration}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Room Type:</span> {item.roomType}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Price:</span>
                                    <span className="text-green-600 font-bold">${item.price}</span>
                                </p>
                            </div>
                            <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}