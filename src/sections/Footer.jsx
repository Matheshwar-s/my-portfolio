export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-300">
      &copy; {new Date().getFullYear()} Mathesh. All rights reserved.
    </footer>
  );
}