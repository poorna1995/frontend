import React from "react";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  rating: number;
  description: string;
  avatarSrc: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  rating,
  description,
  avatarSrc,
}) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Card Container */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        {/* Avatar and title */}
        <div className="px-5 pt-5">
          <div className="flex items-center mb-4 space-x-3">
            <img
              className="w-10 h-10 rounded-full"
              src={avatarSrc}
              alt="Avatar"
            />
            <div>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {title}
              </h5>
            </div>
          </div>
        </div>

        {/* Product image */}
        <Link href="#">
          <img
            className="object-cover w-full h-48 p-4 rounded-t-lg"
            src={imageSrc}
            alt="Product image"
          />
        </Link>

        <div className="px-5 pb-5">
          {/* Description and rating */}
          <p className="mt-1 text-sm text-gray-600 ">{description}</p>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {[...Array(fullStars)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              {[...Array(emptyStars)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-gray-200 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
              {rating}.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
