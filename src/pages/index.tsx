import { Card } from '../components/Card'
import { CardContent } from '../components/CardContent'
import { Image } from '../components/Image'
import { MainLayout } from '../layouts/Main'

export default function Home() {
  return (
    <>
      <MainLayout>
        <Card>
          <Image src="/thumbnail-0.png" />
          <CardContent>Hello world</CardContent>
        </Card>
      </MainLayout>
    </>
  )
}
