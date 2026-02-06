import Banner from '../../../components/Banner/Banner';
import BloodDonationFeatured from '../../../components/BloodDonationFeatured/BloodDonationFeatured';
import ContactUs from '../../../components/ContactUs/ContactUs';
import hero from '../../../assets/images/hero.jpg';

function HomePage() {
  return (
    <>
      <Banner
        title="Donate Blood, Save Lives"
        subtitle="Be a hero, donate blood today"
        image={hero}
        buttonText1="Join as a donor"
        buttonText2="Search Donors"
      />
      <BloodDonationFeatured />
      <ContactUs
        contactNumber="01745032466"
        emailAddress="saifulnhk@gmail.com"
      />
    </>
  );
}

export default HomePage;
