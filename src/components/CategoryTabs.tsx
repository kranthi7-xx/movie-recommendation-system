
interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'popular', name: 'Popular', description: 'Most loved by audiences' },
  { id: 'recent', name: 'Recent Releases', description: 'Latest movies' },
  { id: 'trending', name: 'Trending Now', description: 'Hot picks this week' }
];

export const CategoryTabs = ({ selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 border border-slate-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
