import Categories from "@/sections/Categories"
import Devices from "@/sections/Devices"
import Hero from "@/sections/Hero"
import Plans from "@/sections/Plans"
import Questions from "@/sections/Questions"

export const metadata = {
  title: 'Home',
  isHeaderFixed: true
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Plans />
    </>
  )
}
