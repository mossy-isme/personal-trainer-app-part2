export interface Client {
  isVIP: boolean;
  clientID: number;
  name: string;
  DOB: Date;
  gender: 'Male' | 'Female' | 'Unspecified';
  fitnessProgram:
    | 'fat loss'
    | 'senior fitness'
    | 'muscle gain'
    | 'pre/postnatal fitness'
    | 'contest preparation'
    | 'overall fitness';
  contactInfo: {
    phoneNumber: string;
    address: string;
    email?: string;
  };
  joinedDate: Date;
  endingDate: Date;
  specialHealthNotes?: string;
}
