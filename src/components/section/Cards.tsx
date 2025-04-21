// components/SimpleCard.tsx
export default function SimpleCard() {
  return (
    <div className="max-w-sm rounded-lg border p-4 shadow-md bg-white dark:bg-gray-900 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        Card Title
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        This is a simple card component in Next.js using Tailwind CSS.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Action
      </button>
    </div>
  );
}
