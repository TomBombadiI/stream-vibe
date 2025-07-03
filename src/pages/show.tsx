import Seasons from "@/components/Seasons"
import MovieDetails from "@/sections/MovieDetails"
import ShowBanner from "@/sections/ShowBanner"

export const metadata = {
  title: 'Show - Stranger Things'
}

export default () => {
  return (
    <>
      <ShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
