"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AddScansPage() {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" required />
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
              <Label htmlFor="file">Upload File</Label>
              <Input id="file" type="file" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

