"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sampleStudies } from "@/lib/sample-data"
import { Plus, X } from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const today = new Date().toISOString().split('T')[0]
  const todayStudies = sampleStudies.filter(study => study.date === today)

  const pendingCount = sampleStudies.filter(study => study.status === 'pending').length
  const acceptedCount = sampleStudies.filter(study => study.status === 'accepted').length
  const rejectedCount = sampleStudies.filter(study => study.status === 'rejected').length

  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted with files:", files)
  }

  return (
    <div className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upload">Upload Scans</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
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
            <h2 className="text-2xl font-bold mb-4">Today's Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todayStudies.map(study => (
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
        </TabsContent>
        <TabsContent value="upload">
          <h2 className="text-2xl font-bold mb-6">Upload Scans</h2>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" id="date" defaultValue={today} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modality">Modality</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select modality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ct">CT</SelectItem>
                      <SelectItem value="xray">X-Ray</SelectItem>
                      <SelectItem value="mri">MRI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="scan-type">Scan Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Mouth</SelectItem>
                      <SelectItem value="partial">Partial</SelectItem>
                      <SelectItem value="single">Single Tooth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Enter tags separated by commas" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file">Upload Files</Label>
                  <Input id="file" type="file" multiple onChange={handleFileChange} className="mb-2" />
                  {files.length > 0 && (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                          <span>{file.name}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

