"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, X } from 'lucide-react'

interface ScanUpload {
  id: number
  file: File | null
  patientName: string
  modality: string
}

export function MultiScanUpload() {
  const [scans, setScans] = useState<ScanUpload[]>([
    { id: 1, file: null, patientName: "", modality: "" }
  ])

  const addScan = () => {
    const newId = scans.length > 0 ? Math.max(...scans.map(s => s.id)) + 1 : 1
    setScans([...scans, { id: newId, file: null, patientName: "", modality: "" }])
  }

  const removeScan = (id: number) => {
    setScans(scans.filter(scan => scan.id !== id))
  }

  const updateScan = (id: number, field: keyof ScanUpload, value: string | File) => {
    setScans(scans.map(scan => 
      scan.id === id ? { ...scan, [field]: value } : scan
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting scans:", scans)
    // Here you would typically send the data to your backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {scans.map((scan, index) => (
        <Card key={scan.id}>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Scan {index + 1}</h3>
              {scans.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeScan(scan.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="grid gap-4">
              <div>
                <Label htmlFor={`file-${scan.id}`}>Scan File</Label>
                <Input
                  id={`file-${scan.id}`}
                  type="file"
                  onChange={(e) => updateScan(scan.id, "file", e.target.files?.[0] || "null")}
                />
              </div>
              <div>
                <Label htmlFor={`patient-${scan.id}`}>Patient Name</Label>
                <Input
                  id={`patient-${scan.id}`}
                  value={scan.patientName}
                  onChange={(e) => updateScan(scan.id, "patientName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor={`modality-${scan.id}`}>Modality</Label>
                <Input
                  id={`modality-${scan.id}`}
                  value={scan.modality}
                  onChange={(e) => updateScan(scan.id, "modality", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button type="button" onClick={addScan} className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add Another Scan
      </Button>
      <Button type="submit" className="w-full">Upload Scans</Button>
    </form>
  )
}

