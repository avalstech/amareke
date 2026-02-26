import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="container-edge py-16">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Page not found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
