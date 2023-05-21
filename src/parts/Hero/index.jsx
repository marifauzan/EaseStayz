import ImageHero from "../../assets/images/img-hero.jpg";
import ImageHero_ from "../../assets/images/img-hero-frame.jpg";
import IconCities from "../../assets/images/icons/icon_cities.svg";
import IconTraveler from "../../assets/images/icons/icon_traveler.svg";
import IconTreasure from "../../assets/images/icons/icon_treasure.svg";
import Button from "../../elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container mx-auto pt-4 mt-[70px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col pr-5 w-[460px]">
          <h1 className="text-5xl font-bold leading-tight mb-5">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="mb-8 text-base font-light text-gray-500 w-3/4">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="w-[210px] h-[50px] text-lg"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>

          <div className="flex flex-row mt-20">
            <div className="flex flex-col mr-14">
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="flex flex-col mr-14">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
            <div className="flex flex-col mr-14">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="flex flex-col pl-5">
          <div className="w-[620px] h-[410px]">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="w-[600px] h-auto absolute mt-[-30px] ml-[-30px] z-10"
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              className="w-[600px] h-auto absolute mr-[-15px] mb-[-15px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
