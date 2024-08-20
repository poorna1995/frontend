import Image from "next/image";
import { Button } from "../ui/button";

export default function PromotionCard() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center p-5 bg-[#046E1B] rounded-2xl shadow-lg h-80">
        <div className="flex flex-col items-center justify-center flex-1 p-4 text-white">
          <h1 className="mb-4 text-5xl font-semibold leading-snug text-center">
            Embrace the joy of cooking. Your kitchen adventure begins now!
          </h1>
          <div className="mb-4">
            <Button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
              Contact us
            </Button>
          </div>
        </div>
        {/* Removed the image section */}
      </div>
    </div>
  );
}
