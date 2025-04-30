import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem as NavItemType } from '@/types/navigation' // Assuming this type defines href, label, icon, and potentially count
import { isExternalRoute } from '@/lib/routes'
// Remove the import for allPosts if count is passed via props
// import { allPosts } from 'contentlayer/generated'

/**
 * Props for the NavigationItem component.
 * Expects an 'item' object conforming to NavItemType.
 * Optionally accepts 'count' for displaying post numbers dynamically.
 */
interface NavigationItemProps {
  item: NavItemType
  count?: number // Add count prop here to receive dynamically calculated count
}

/**
 * Renders a single navigation item.
 * Handles internal/external links, active state, icon, label, and optional count display.
 * @param {NavigationItemProps} props - Component props including the navigation item data and optional count.
 * @returns {JSX.Element} The rendered navigation item.
 */
export function NavigationItem({ item, count }: NavigationItemProps) { // Add count to destructuring
  const pathname = usePathname()
  // Use properties from the 'item' object
  const { href, label, icon: Icon } = item // Remove count from here if it's passed separately
  const isActive = pathname === href
  const isExternal = isExternalRoute(href)

  const className = cn(
    'flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-base font-medium transition-colors', // Added transition-colors
    isActive
      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' // Updated active styles
      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/50' // Updated hover styles
  )

  const content = (
    <>
      {Icon && ( // Check if Icon exists before rendering
        <span className="flex items-center justify-center w-4">
          {/* Ensure Icon is treated as a component */}
          <Icon className="w-4 h-4" />
        </span>
      )}
      <span className="flex-1">{label}</span>
      {/* Use the passed 'count' prop */}
      {typeof count === 'number' && count > 0 && (
        <span className="ml-auto text-xs text-gray-500 dark:text-gray-400 tabular-nums bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
      {isExternal && (
        <span className="ml-1 flex items-center justify-center w-4 text-gray-400 dark:text-gray-500"> {/* Adjusted margin and color */}
          {/* External link icon SVG */}
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00195 6.32617V0.824219C9.00195 0.490234 8.79102 0.267578 8.45117 0.267578L2.94922 0.279297C2.62109 0.279297 2.41016 0.519531 2.41016 0.794922C2.41016 1.07031 2.65039 1.30469 2.92578 1.30469H4.66602L7.45508 1.19922L6.39453 2.13672L1.16211 7.38086C1.05664 7.48633 0.998047 7.61523 0.998047 7.73828C0.998047 8.01367 1.24414 8.27734 1.53125 8.27734C1.66602 8.27734 1.78906 8.22461 1.89453 8.11914L7.13281 2.875L8.07617 1.81445L7.96484 4.48047V6.34961C7.96484 6.61914 8.19922 6.86523 8.48633 6.86523C8.76172 6.86523 9.00195 6.63672 9.00195 6.32617Z" fill="currentColor"/>
          </svg>
        </span>
      )}
    </>
  )

  if (isExternal) {
    return (
      <a
        href={href} // href comes from item
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  // Use Link for internal navigation, passing the href from item
  // Ensure item.href has the correct type (UrlObject | RouteImpl<string>)
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}

// Remove the duplicate definitions and the default export for the removed component