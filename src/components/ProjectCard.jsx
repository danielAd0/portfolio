export default function ProjectCard({ title, desc, tags }) {
  return (
    <div
      className="
        group relative p-6 rounded-xl 
        bg-floral-white-50 dark:bg-carbon-black-800 
        border border-dust-grey-200 dark:border-carbon-black-600
        shadow-md hover:shadow-xl transition-all duration-300
        hover:-translate-y-2 hover:rotate-1 
        cursor-pointer
      "
    >
      {/* Glow on hover */}
      <div
        className="
          absolute inset-0 rounded-xl 
          opacity-0 group-hover:opacity-100 
          blur-xl transition-opacity duration-300
          bg-spicy-paprika-400/20 dark:bg-spicy-paprika-500/30
          pointer-events-none
        "
      />

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-dust-grey-800 dark:text-floral-white-200">
        {title}
      </h3>

      <p className="text-dust-grey-600 dark:text-dust-grey-300 mb-4">
        {desc}
      </p>

      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span
            key={t}
            className="
              text-sm px-3 py-1 rounded-full 
              bg-dust-grey-200 dark:bg-carbon-black-600 
              text-dust-grey-700 dark:text-dust-grey-200
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0 rounded-xl 
          bg-spicy-paprika-600/90 dark:bg-spicy-paprika-700/90
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <p className="text-floral-white-50 text-lg font-medium">
          View Project →
        </p>
      </div>
    </div>
  );
}
