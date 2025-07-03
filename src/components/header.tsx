import type React from "react"

interface MenuItem {
  title: string
  icon?: string
  submenu?: { title: string; href: string }[]
}

const Header: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Audiobooks",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon1.jpg-ItxSUhwPpg6GzQ4l2WWqfJCGPCuA2u.jpeg",
      submenu: [
        { title: "Biblioteca", href: "/audiobooks/biblioteca" }, // ✅ CORRIGIDO
      ],
    },
    {
      title: "E-books",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-PAJokvIU3PAz85esWhlzvtodO71OPa.jpeg",
      submenu: [
        { title: "Biblioteca", href: "/e-books/biblioteca" }, // ✅ CORRIGIDO
      ],
    },
    {
      title: "Mais",
      submenu: [
        { title: "Nossa Missão", href: "/mais/nossa-missao" },
        { title: "Blog", href: "/mais/blog" },
        { title: "Depoimentos", href: "/mais/depoimentos" },
      ],
    },
  ]

  return (
    <header>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.icon && <img src={item.icon || "/placeholder.svg"} alt={item.title} />}
              <span>{item.title}</span>
              {item.submenu && (
                <ul>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.href}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
