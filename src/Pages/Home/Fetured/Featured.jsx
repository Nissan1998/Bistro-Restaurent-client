import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${featured})`,
      }}
      className=" bg-cover bg-fixed p-24"
    >
      <div className="bg-black bg-opacity-30 p-10 w-full">
        <SectionHeader
          textWhite={"text-white"}
          title1={"Check it out"}
          title={"From Our Menu"}
        ></SectionHeader>
        <div className="md:flex justify-center items-center align-middle gap-4 p-12">
          <div className="md:max-w-lg">
            <img className="rounded-xl w-full" src={featured} alt="featured" />
          </div>
          <div className="font-semibold text-lg  w-[700px] text-white ">
            <h2>March 20,2023</h2>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>
              orem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              debitis molestiae rerum saepe velit amet sunt eius sed nostrum
              eos.L orem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum debitis molestiae rerum saepe velit amet sunt eius sed
              nostrum eos.L orem ipsum dolor sit amet consectetur adipisicing
              elit. Dolorum debitis molestiae rerum saepe velit amet sunt eius
              sed nostrum eos.L
            </p>

            <button className="bg-transparent bg-black bg-opacity-30 border-b-4 rounded-lg text-white btn-outline p-3">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
