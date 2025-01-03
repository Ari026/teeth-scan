"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from 'lucide-react'
import { sampleStudies } from "@/lib/sample-data"
import { Study } from "@/types/study"
import { Progress } from "@/components/ui/progress"
import { getConfidenceColor } from "@/lib/utils"

export default function StudiesPage() {
  const [studies, setStudies] = useState<Study[]>(sampleStudies)

  const handleAccept = (id: string) => {
    setStudies(studies.map(study => 
      study.id === id ? { ...study, status: 'accepted' } : study
    ))
  }

  const handleReject = (id: string) => {
    setStudies(studies.map(study => 
      study.id === id ? { ...study, status: 'rejected' } : study
    ))
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((study) => (
          <Card key={study.id}>
            <CardContent className="p-4">
              <Link href={`/dashboard/studies/${study.id}`}>
                <div className="space-y-2 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{study.patientName}</h3>
                    <span className="text-sm text-gray-500">{study.date}</span>
                  </div>
                  <div className="aspect-square relative">
                    <img
                      src={study.imageUrl}
                      alt={`Scan for ${study.patientName}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <p className="text-sm text-gray-500">{study.modality}</p>
                  <p className={`text-sm font-semibold ${
                    study.status === 'accepted' ? 'text-green-600' :
                    study.status === 'rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    {study.status.charAt(0).toUpperCase() + study.status.slice(1)}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Reusability Confidence</p>
                    <Progress 
                      value={study.confidence} 
                      className="w-full" 
                      indicatorClassName={getConfidenceColor(study.confidence)}
                    />
                    <p className="text-sm text-right">{study.confidence}%</p>
                  </div>
                </div>
              </Link>
              {study.status === 'pending' && (
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="default"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => handleAccept(study.id)}
                  >
                    <Check className="mr-2 h-4 w-4" /> Accept
                  </Button>
                  <Button
                    variant="default"
                    className="flex-1 bg-red-600 hover:bg-red-700"
                    onClick={() => handleReject(study.id)}
                  >
                    <X className="mr-2 h-4 w-4" /> Reject
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

