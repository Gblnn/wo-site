import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ClientsSection() {
  //   const usenavigate = useNavigate();
  return (
    <>
      <div
        // onClick={() => usenavigate("")}
        className="page"
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          paddingTop: "",
          height: "15rem",
          border: "",
          alignItems: "center",
          flexFlow: "column",
          gap: "1.5rem",
          boxShadow: "1px 1px 20px rgba(0 0 0/ 50%)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "" }}>
          OUR
          <br /> <strong style={{ fontWeight: 600 }}>CLIENTS</strong>
        </h1>
        <Carousel
          className="clients"
          style={{ border: "" }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent style={{ display: "flex", alignItems: "center" }}>
            <CarouselItem className="basis-1/3 ">
              <img
                alt="vale"
                src="https://www.albawaba.com/sites/default/files/styles/default/public/2019-05/SA%20Logo%20-%20Website%20388x84%20pixels-01-01.png?itok=4oQVOdHg"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="jindal"
                src="/Clients/jal.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="oarc"
                src="https://mazayagroupom.com/wp-content/uploads/2021/09/logo1.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="mak" src="/Clients/imc.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="odc"
                src="https://image.pitchbook.com/KxEGV4MgRLAYxsouRSVm6m3CvlZ1617775252199_200x200"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="majis"
                src="/Clients/inco.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="sts"
                src="/Clients/majan.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img alt="bec" src="/Clients/msc.png" style={{ width: "6rem" }} />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="sanvira"
                src="https://www.atifoman.com/wp-content/uploads/2017/04/atifc.jpg"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="mhd"
                src="/Clients/cabrol.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            <CarouselItem className="basis-1/3 ">
              <img
                alt="toshiba"
                src="/Clients/oarc.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>

            {/* <CarouselItem className="basis-1/3 ">
              <img
                alt="ote"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfB22IkiJLWE8S_NIH9LV3heHJEAxuYcABRg&s"
                style={{ width: "6rem" }}
              />
            </CarouselItem> */}

            <CarouselItem className="basis-1/3 ">
              <img
                alt="oryz metals"
                src="https://apip.online/wp-content/uploads/2020/05/Oryx-Logo-Header-1.png"
                style={{ width: "6rem" }}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
