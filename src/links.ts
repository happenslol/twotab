type ItemOptions = {
  alt: string
  icon: string
  href: string
  keymap: string
}

export const initLinks = () => {
  const items: ItemOptions[] = [
    {
      alt: "Fastmail",
      icon: "icon-[mdi--email-outline]",
      href: "https://app.fastmail.com",
      keymap: "q",
    },
    {
      alt: "Twitch",
      icon: "icon-[ph--twitch-logo]",
      href: "https://twitch.tv",
      keymap: "w",
    },
    {
      alt: "Youtube",
      icon: "icon-[ph--youtube-logo]",
      href: "https://youtube.com",
      keymap: "e",
    },
    {
      alt: "GitHub",
      icon: "icon-[eva--github-outline]",
      href: "https://github.com",
      keymap: "r",
    },
    {
      alt: "GitLab",
      icon: "icon-[ri--gitlab-line]",
      href: "https://gitlab.com",
      keymap: "t",
    },
  ]

  const createItem = (opts: ItemOptions) => {
    const linkElement = document.createElement("a")
    linkElement.textContent = opts.alt
    linkElement.href = opts.href
    linkElement.classList.add(opts.icon)

    document.addEventListener("keydown", (ev) => {
      if (ev.key === opts.keymap) linkElement.click()
    })

    return linkElement
  }

  const linksContainer = document.querySelector(
    "[data-links]"
  ) as HTMLDivElement

  for (const item of items) {
    linksContainer.appendChild(createItem(item))
  }

  setTimeout(() => linksContainer.classList.remove("initial"), 0)
}
