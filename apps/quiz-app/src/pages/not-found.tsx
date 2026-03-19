import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button, Card } from "@/components/ui-elements";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-md p-12 text-center border-dashed border-2">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-destructive opacity-80" />
        </div>
        <h1 className="text-3xl font-display font-bold text-foreground mb-4">404 - Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="w-full">
            Return to Dashboard
          </Button>
        </Link>
      </Card>
    </div>
  );
}
