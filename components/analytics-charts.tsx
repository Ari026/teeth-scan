"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const dailyScansData = [
  { date: "2023-05-01", scans: 12 },
  { date: "2023-05-02", scans: 19 },
  { date: "2023-05-03", scans: 15 },
  { date: "2023-05-04", scans: 22 },
  { date: "2023-05-05", scans: 18 },
  { date: "2023-05-06", scans: 14 },
  { date: "2023-05-07", scans: 10 },
]

const modalityDistributionData = [
  { modality: "CT", count: 45 },
  { modality: "X-Ray", count: 30 },
  { modality: "MRI", count: 25 },
  { modality: "Ultrasound", count: 15 },
  { modality: "PET", count: 10 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Daily Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyScansData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="scans" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Modality Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modalityDistributionData}>
              <XAxis dataKey="modality" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

