
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function LoginFirst() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">404 - Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
        You must login first to access this page.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/login">
              Login
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/signup">
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}