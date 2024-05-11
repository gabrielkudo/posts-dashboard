import { SvgIconComponent } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter, usePathname } from 'next/navigation'

interface DashboardSideBarLinkItemProps {
  to: string
  icon: SvgIconComponent
  label: string
  onClick: (() => void) | undefined
}

export function DashboardSideBarLinkItem({
  to,
  icon,
  label,
  onClick,
}: DashboardSideBarLinkItemProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    onClick?.()
    router.push(to)
  }

  const Icon = icon

  return (
    <ListItemButton selected={pathname === to} onClick={handleClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
