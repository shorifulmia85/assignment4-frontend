import ContainerBox from "@/components/container/Container";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, TrendingUp, Users } from "lucide-react";

const KeyFetaures = () => {
  return (
    <div className="p-3">
      <ContainerBox>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manage Books
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily add, edit, and organize your book collection with
                detailed information and cover images.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Track Borrowings
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep track of who borrowed which books and when they need to be
                returned.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get insights into your library usage, popular books, and
                borrowing patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContainerBox>
    </div>
  );
};

export default KeyFetaures;
