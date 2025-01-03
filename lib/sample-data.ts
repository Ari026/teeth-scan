import { Study } from "@/types/study"

export const sampleStudies: Study[] = [
  {
    id: "1",
    patientName: "John Doe",
    date: "2023-05-15",
    modality: "CT",
    status: "pending",
    imageUrl: "/placeholder.svg?height=400&width=400",
    confidence: 85,
  },
  {
    id: "2",
    patientName: "Jane Smith",
    date: "2023-05-16",
    modality: "X-Ray",
    status: "accepted",
    imageUrl: "/placeholder.svg?height=400&width=400",
    confidence: 92,
  },
  {
    id: "3",
    patientName: "Bob Johnson",
    date: "2023-05-17",
    modality: "MRI",
    status: "rejected",
    imageUrl: "/placeholder.svg?height=400&width=400",
    confidence: 45,
  },
  {
    id: "4",
    patientName: "Alice Brown",
    date: "2023-05-18",
    modality: "CT",
    status: "pending",
    imageUrl: "/placeholder.svg?height=400&width=400",
    confidence: 78,
  },
  {
    id: "5",
    patientName: "Charlie Wilson",
    date: "2023-05-19",
    modality: "X-Ray",
    status: "pending",
    imageUrl: "/placeholder.svg?height=400&width=400",
    confidence: 88,
  },
]

