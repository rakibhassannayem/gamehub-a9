import { FaStar, FaExternalLinkAlt } from "react-icons/fa";

export default function GameCard({ game }) {
  if (!game) return null;

  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;

  const fullStars = Math.floor(ratings);
  const hasHalf = ratings - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <article className="card md:card-side bg-base-100 shadow-lg overflow-hidden">
      <figure className="w-full md:w-1/4 h-48 md:h-auto">
        <img
          src={coverPhoto}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </figure>

      <div className="card-body p-4 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="card-title text-lg md:text-xl">{title}</h3>
              <p className="text-sm text-muted-foreground">by {developer}</p>
            </div>

            <div className="text-right">
              <span className="badge badge-outline">{category}</span>
            </div>
          </div>

          <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="flex items-center"
              aria-label={`Rating: ${ratings} out of 5`}
            >
              {Array.from({ length: fullStars }).map((_, i) => (
                <FaStar key={`full-${i}`} className="w-4 h-4" />
              ))}

              {hasHalf && <FaStar className="w-4 h-4 opacity-60" />}

              {Array.from({
                length: totalStars - fullStars - (hasHalf ? 1 : 0),
              }).map((_, i) => (
                <FaStar key={`empty-${i}`} className="w-4 h-4 opacity-30" />
              ))}
            </div>

            <span className="text-sm font-medium">{ratings.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">/ 5</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={downloadLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              Download
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>

            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="View details"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
