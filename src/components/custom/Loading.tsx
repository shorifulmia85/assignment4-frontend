import { Loader2 } from "lucide-react";
const Loading = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
