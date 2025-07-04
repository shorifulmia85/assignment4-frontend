import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/heroImage.png";
import ContainerBox from "@/components/container/Container";

const Hero = () => {
  return (
    <ContainerBox>
      <div className="h-[50%] lg:h-[70%]  flex flex-col lg:flex-row items-center  justify-between  p-3">
        {/* left side  */}
        <section className="w-full lg:w-[50%] space-y-5 my-10">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            <span>Dive into the words</span> <br />
            <span>Of over 10,000</span> <br />
            <span>Books</span>
          </h1>

          <p className="lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            mollitia quidem ratione cumque architecto aliquam ipsam ad accusamus
            recusandae eos voluptas consequuntur, aliquid nam, ducimus optio.
            Dignissimos et necessitatibus sit!
          </p>

          <Button>Explore Now</Button>
        </section>

        {/* right side  */}
        <section className="w-full lg:w-[50%]">
          <img
            className="w-[80%] mx-auto lg:w-[80%]"
            src={HeroImage}
            alt="Hero Image"
          />
        </section>
      </div>
    </ContainerBox>
  );
};

export default Hero;
