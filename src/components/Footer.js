export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-brand-light text-sm">kvm.dev</span>
        <p className="text-gray-600 text-sm text-center">
          Designed & built by{' '}
          <span className="text-gray-400">Vignesh Moorthy K</span>
          {' '}· React + Tailwind CSS
        </p>
        <p className="text-gray-700 text-xs font-mono">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
