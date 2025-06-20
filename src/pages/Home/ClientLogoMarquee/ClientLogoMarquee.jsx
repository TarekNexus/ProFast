import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png";
import google from "../../../assets/brands/google.webp";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import start from "../../../assets/brands/start.png";
import randstad from "../../../assets/brands/randstad.png";
import people from "../../../assets/brands/start.png";
const logos = [amazon, google, casio, moonstar, start, randstad, people];
const ClientLogoMarquee = () => {


  return (
  <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl text-primary font-bold text-center mb-12">We've helped thousands of sales teams</h2>
      <Marquee speed={50} gradient={false} direction="right">
        {logos.map((logo, index) => (
          <div key={index} className=" mx-24 flex items-center">
            <img src={logo} alt={`Client logo ${index+1}`} className="h-6 object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  </section>
  );
};

export default ClientLogoMarquee;
