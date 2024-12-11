import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sampleStudies } from "@/lib/sample-data"

export default function DashboardPage() {
  const pendingCount = sampleStudies.filter(study => study.status === 'pending').length
  const acceptedCount = sampleStudies.filter(study => study.status === 'accepted').length
  const rejectedCount = sampleStudies.filter(study => study.status === 'rejected').length

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pendingCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Accepted Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{acceptedCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rejected Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{rejectedCount}</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStudies.slice(0, 3).map(study => (
            <Card key={study.id}>
              <CardContent className="p-4">
                <img src={study.imageUrl} alt={`Scan for ${study.patientName}`} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="font-semibold">{study.patientName}</h3>
                <p className="text-sm text-gray-500">{study.date}</p>
                <p className="text-sm text-gray-500">{study.modality}</p>
                <p className={`text-sm font-semibold mt-2 ${
                  study.status === 'accepted' ? 'text-green-600' :
                  study.status === 'rejected' ? 'text-red-600' :
                  'text-yellow-600'
                }`}>
                  {study.status.charAt(0).toUpperCase() + study.status.slice(1)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/dashboard/studies" className="text-blue-600 hover:underline">View all studies</Link>
        </div>
      </div>
    </div>
  )
}

