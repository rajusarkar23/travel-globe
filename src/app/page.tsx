import AboutSundarban from "@/components/AboutSundarban"
import CustomPackageForm from "@/components/CustomPackageForm"
import ImageSlider from "@/components/ImageSlider"
import PackageCard from "@/components/PackageCard"
import BestServices from "@/components/Services"
import Testimonials from "@/components/Tetimonials"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <ImageSlider />
        <section>
          <PackageCard />
        </section>
        <section>
          <CustomPackageForm />
        </section>
        <section >
            <AboutSundarban />
        </section>
        <section>
          <WhyChooseUs />
          <BestServices />
        </section>
        <section>
          <Testimonials />
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

