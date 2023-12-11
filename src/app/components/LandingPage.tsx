import { Button, Link } from "@nextui-org/react";
import LandingPageImage from "./LandingPageImage";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const images = [
  {
    src: "/image1.jpg",
    alt: "Vacant lot in Philadelphia",
    captionTitle: "Search",
    captionBody:
      "Look up specific properties to find out information about them.",
  },
  {
    src: "/image2.jpg",
    alt: "Vacant lot in Philadelphia",
    captionTitle: "Filter",
    captionBody:
      "Filter by neighborhood to find which properties could be cleaned to make a big impact.",
  },
  {
    src: "/image3.jpg",
    alt: "Vacant lot in Philadelphia",
    captionTitle: "Download",
    captionBody: "Download this data to analyze with Excel or other tools.",
  },
];

const LandingPage = () => (
  <div className="container flex flex-col mx-auto pt-10">
    <div className="text-left sm:text-3xl my-10">
      <p className="default"><span className="font-bold">Cleaning and greening vacant properties can reduce <br /> gun violence as much as 29%.</span> This tool can empower<br />anyone to find properties that would make a significant<br/>impact in philadelphia and take action.</p>
    </div>
    <dl className="flex flex-col w-full relative bottom-8">
      <div className="text-right md:absolute bottom-0 right-0">
        <dd className=""><span className="font-bold">Search</span> by address to find lots in your <br />neighborhood.</dd>
         <dd className=""><span className="font-bold">Filter</span> by neighborhood, gun crime rate, <br /> tree canopy,and many other criteria.</dd>
         <dd className=""><span className="font-bold">Download</span> this data to analyze in other <br /> tools like Excel.</dd>
      </div>
    </dl>
    <div className="flex justify-between space-x-2.5">
      {images.map(({ src, alt, captionTitle, captionBody }) => (
        <LandingPageImage
          key={src}
          src={src}
          alt={alt}
          captionTitle={captionTitle}
          captionBody={captionBody}
        />
      ))}
    </div>
    <div className="flex justify-center mt-20">
      <Link href="/map">
        <Button size="lg" className="bg-green-60">
          Use the Map
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Button>
      </Link>
      <div className="ml-4">
        <Link href="/about">
          <Button size="lg" color="default">
            Learn More about the Project
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
