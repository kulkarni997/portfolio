import Image from "next/image";
import Link from "next/link";

function AchievementCard({ achievement, priority = false }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">

      {/* Image */}
      <div className="h-44 lg:h-52 w-auto overflow-hidden rounded-t-lg">
        <Image
          src={achievement.image}
          height={1080}
          width={1920}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          alt={achievement.title}
          priority={priority}
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 flex flex-col">

        {/* Type + Date */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{achievement.type}</p>
          <p>{achievement.date}</p>
        </div>

        {/* Title */}
        {achievement.link ? (
          <Link
            target="_blank"
            href={achievement.link}
          >
            <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
              {achievement.title}
            </p>
          </Link>
        ) : (
          <p className="my-2 lg:my-3 text-lg text-white sm:text-xl font-medium">
            {achievement.title}
          </p>
        )}

        {/* Description */}
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {achievement.description}
        </p>

      </div>
    </div>
  );
}

export default AchievementCard;