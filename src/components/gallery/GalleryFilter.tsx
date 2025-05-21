interface GalleryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function GalleryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'bg-emerald-600 text-white'
            : 'bg-neutral-100 text-gray-600 hover:bg-neutral-200'
        }`}
      >
        All Projects
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-emerald-600 text-white'
              : 'bg-neutral-100 text-gray-600 hover:bg-neutral-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 