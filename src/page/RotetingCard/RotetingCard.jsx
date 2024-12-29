import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const RotetingCard = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/front-view-young-woman-with-basketball-ball_23-2148666433.jpg?ga=GA1.1.2015771831.1686906543&semt=ais_hybrid",
      name: "Player 1",
    },
    {
      src: "https://img.freepik.com/free-photo/young-girl-holding-basketball_23-2148617461.jpg?ga=GA1.1.2015771831.1686906543&semt=ais_hybrid",
      name: "Player 2",
    },
    {
      src: "https://img.freepik.com/premium-photo/woman-playing-basketball-isolated-wall_1368-74173.jpg?ga=GA1.1.2015771831.1686906543&semt=ais_hybrid",
      name: "Player 3",
    },
    {
      src: "https://img.freepik.com/free-photo/smiley-girl-holding-basketball-ball_23-2148478712.jpg?ga=GA1.1.2015771831.1686906543&semt=ais_hybrid",
      name: "Player 4",
    },
    {
      src: "https://img.freepik.com/premium-photo/young-caucasian-woman-playing-basketball_1368-132009.jpg?ga=GA1.1.2015771831.1686906543&semt=ais_hybrid",
      name: "Player 5",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-white">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="w-full max-w-4xl mb-8"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden shadow-lg w-[300px] h-[200px]">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
              {image.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="text-center text-xl font-semibold text-gray-800 max-w-3xl mx-auto">
        Bij GMK Dakonderhoud combineren we vakmanschap met passie voor daken. Onze specialisten zijn deskundig in het aanbrengen en onderhouden van diverse soorten dakbedekkingen, waaronder dakpannen, bitumen en EPDM. Of het nu gaat om dakisolatie, dakreiniging of het repareren van lekkages, wij behandelen elke klus met de hoogste zorg en aandacht.
      </h1>
    </div>
  );
};

export default RotetingCard;
