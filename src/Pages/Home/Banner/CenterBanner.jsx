import bgImage from "../../../assets/home/chef-service.jpg";

const CenterBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="w-full bg-fixed max-w-screen-2xl mx-auto flex justify-center bg-cover items-center"
      >
        <div className="max-w-screen-xl overflow-hidden m-20 h-96 text-center bg-white flex flex-col justify-center p-14">
          <h1 className="card-title font-extrabold text-center  mx-auto mb-5">
            Bistro Boss
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            consequuntur culpa molestias debitis nemo autem? Nisi tempore
            reprehenderit aut iure, quibusdam atque mollitia dolores est sed
            unde consectetur debitis, eius possimus quis minus sapiente dolor
            voluptas molestias eum voluptatem minima ea corporis! Pariatur non
            accusamus corporis impedit deleniti nostrum odit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenterBanner;
