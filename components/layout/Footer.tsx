export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-8 text-center">
        <p className="text-sm text-slate-400">
          © 2026{" "}
          <span className="font-semibold text-white">
            Meeraj Mathin
          </span>
          . Built with{" "}
          <span className="text-red-500">❤️</span>{" "}
          using{" "}
          <span className="font-medium text-cyan-400">
            Next.js
          </span>{" "}
          &{" "}
          <span className="font-medium text-cyan-400">
            Tailwind CSS
          </span>
          .
        </p>
      </div>
    </footer>
  );
}