import { Card } from '../components/Card'
import { CardContent } from '../components/CardContent'
import { Image } from '../components/Image'
import { MainLayout } from '../layouts/Main'

export default function Home() {
  return (
    <>
      <MainLayout>
        <Card>
          <Image src="/code.jpg" />
          <CardContent>Hello world</CardContent>
        </Card>
      </MainLayout>
    </>
  )
}
