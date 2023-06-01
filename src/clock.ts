import { format } from "date-fns"

export const initClock = () => {
  const clockElement = document.querySelector(
    "[data-clock]"
  ) as HTMLHeadingElement

  const updateClock = () => {
    clockElement.textContent = format(new Date(), "HH:mm")
  }

  updateClock()
  setInterval(updateClock, 1000)

  setTimeout(() => clockElement.classList.remove("initial"), 0)
}
