import React from 'react';
import { cn } from '@/lib/utils';

interface SearchResultFaviconProps {
  size?: number;
  className?: string;
}

const SearchResultFavicon = ({
  size = 48,
  className,
}: SearchResultFaviconProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-transparent shrink-0',
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src="/favicon.ico"
        alt="Sanjeevora Vidya Mission Logo"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        loading="lazy"
      />
    </div>
  );
};

export default SearchResultFavicon;
