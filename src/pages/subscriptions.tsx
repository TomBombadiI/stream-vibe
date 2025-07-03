import PlansComparison from "@/components/PlansComparison"
import Plans from "@/sections/Plans"

export const metadata = {
  title: 'Subscriptions'
}

export default () => {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}
