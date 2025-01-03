export type StudyStatus = 'pending' | 'accepted' | 'rejected';

export interface Study {
  id: string;
  patientName: string;
  date: string;
  modality: string;
  status: StudyStatus;
  imageUrl: string;
  confidence: number;

}

