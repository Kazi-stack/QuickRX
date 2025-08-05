import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu.jsx'
import { Menu, Phone } from 'lucide-react'

function MobileMenu() {
  const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/copay-assistance", label: "Copay Assistance" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/transfer", label: "Transfer" },
    { to: "/blog", label: "Blog" },
    { to: "/newsletter", label: "Newsletter" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {navigationItems.map(({ to, label }) => (
          <DropdownMenuItem key={to} asChild>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium"
                  : "text-gray-700 font-medium"
              }
              end
            >
              {label}
            </NavLink>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild>
          <div className="flex items-center space-x-2 p-2">
            <Phone className="h-4 w-4 text-green-600" />
            <span className="text-gray-700 font-medium text-sm">914-449-1218</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 w-full" asChild>
            <Link to="/refill">Online Refill</Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileMenu 