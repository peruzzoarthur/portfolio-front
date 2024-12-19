export const LayoutWithBars = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      {/* Left bar */}
      <div className="hidden md:block w-1/12 h-full"></div>
      
      {/* Main content */}
      <div className="flex-1 max-w-3xl">{children}</div>
      
      {/* Right bar */}
      <div className="hidden md:block w-1/12 h-full"></div>
    </div>
  );
};
