import React from "react";

const NewsCard = ({
  title,
  description,
  label,
  date,
  link,
}: {
  title: string;
  description: string;
  label: string;
  date: string;
  link: string;
}) => {
  return (
    <a href={link} className="h-full">
      <div className="text-gray-50 px-5 py-5 space-y-9 h-full flex flex-col">
        <h3 className="text-2xl line-clamp-2">{title}</h3>
        <p className="line-clamp-3 font-medium">{description}</p>

        <div className="flex justify-between font-medium mt-auto">
          <div className="text-center w-32 bg-gray-400 text-brand-blue-dark [clip-path:polygon(0%_15%,5%_0%,100%_0%,100%_85%,95%_100%,0%_100%)]">
            {label}
          </div>
          <p>{date}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
