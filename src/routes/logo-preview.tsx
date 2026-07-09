import { createFileRoute } from '@tanstack/react-router';
import SearchResultFavicon from '@/components/ui/SearchResultFavicon';

export const Route = createFileRoute('/logo-preview')({
  component: LogoPreview,
});

function LogoPreview() {
  const sizes = [16, 32, 48, 64, 128];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Logo Preview</h1>
          <p className="text-muted-foreground">
            Visual replication of the website favicon/logo across different sizes.
          </p>
        </div>

        {/* Light Mode Preview */}
        <div className="space-y-6 bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-black">Light Background</h2>
          <div className="flex flex-wrap items-end gap-12">
            {sizes.map((size) => (
              <div key={`light-${size}`} className="flex flex-col items-center gap-3">
                <SearchResultFavicon size={size} />
                <span className="text-sm font-medium text-gray-500">{size}px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Mode Preview */}
        <div className="space-y-6 bg-black p-8 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold text-white">Dark Background</h2>
          <div className="flex flex-wrap items-end gap-12">
            {sizes.map((size) => (
              <div key={`dark-${size}`} className="flex flex-col items-center gap-3">
                <SearchResultFavicon size={size} />
                <span className="text-sm font-medium text-gray-400">{size}px</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Transparent Background with Pattern */}
        <div className="space-y-6 p-8 rounded-xl border border-border relative overflow-hidden" 
             style={{
               backgroundImage: 'repeating-conic-gradient(#8080801a 0% 25%, transparent 0% 50%)',
               backgroundSize: '20px 20px'
             }}>
          <h2 className="text-xl font-semibold text-foreground relative z-10">Transparent Pattern</h2>
          <div className="flex flex-wrap items-end gap-12 relative z-10">
            {sizes.map((size) => (
              <div key={`pattern-${size}`} className="flex flex-col items-center gap-3">
                <SearchResultFavicon size={size} className="bg-transparent" />
                <span className="text-sm font-medium text-foreground">{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
