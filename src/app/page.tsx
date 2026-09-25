import BannerSection from "@/components/Banner/BannerSection";
import LibrarySection from "@/components/LibrarySection/LibrarySection";

const page = () => {
  return (
    <div className="container mx-auto">
      <BannerSection />
      <LibrarySection />
    </div>
  );
};

export default page;