import { fetchCategoryBySlug, type PageProps } from "lib/docs/getCategories";
import BuggyButton from "ui/docs/BuggyButton";
import { SkeletonCard } from "ui/docs/SkeletonCard";

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-between space-x-3">
        <div className="text-xl font-medium text-gray-500">
          All {category.name}
        </div>

        <BuggyButton />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
