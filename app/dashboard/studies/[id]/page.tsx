"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sampleStudies } from "@/lib/sample-data"

export default function StudyDetailPage() {
  const params = useParams()
  const study = sampleStudies.find(s => s.id === params.id)

  if (!study) {
    return <div className="p-6">Study not found</div>
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Study Details</h2>
      <Card>
        <CardHeader>
          <CardTitle>{study.patientName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={study.imageUrl}
                alt={`Scan for ${study.patientName}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="space-y-4">
              <p><strong>Date:</strong> {study.date}</p>
              <p><strong>Modality:</strong> {study.modality}</p>
              <p><strong>Status:</strong> <span className={`font-semibold ${
                study.status === 'accepted' ? 'text-green-600' :
                study.status === 'rejected' ? 'text-red-600' :
                'text-yellow-600'
              }`}>
                {study.status.charAt(0).toUpperCase() + study.status.slice(1)}
              </span></p>
              <div className="space-y-2">
                <h3 className="font-semibold">Additional Information</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.</p>
              </div>
              {study.status === 'pending' && (
                <div className="flex gap-2 mt-4">
                  <Button variant="default" className="flex-1 bg-green-600 hover:bg-green-700">
                    Accept
                  </Button>
                  <Button variant="default" className="flex-1 bg-red-600 hover:bg-red-700">
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

