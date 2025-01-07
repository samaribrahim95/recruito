import Candidates from "../pages/Home/components/features/candidates";
import Resumes from "../pages/Home/components/features/resumes";
import ShortList from "../pages/Home/components/features/shortList";
import Tasks from "../pages/Home/components/features/tasks";
import VideoInterview from "../pages/Home/components/features/videoInterview";
import { Feature } from "./types";

export const features:Feature[] = [
  {
    title: 'Candidate Sourcing & Job Posting',
    description: 'Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.',
    child: Candidates
  },
  {
    title: 'Automated Resume Screening & Filtering',
    description: 'Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants.',
    child: Resumes
  },
  {
    title: 'Online Assessment',
    description: 'Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated.',
    child: Tasks
  },
  {
    title: 'AI Video Interviews',
    description: 'An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free.',
    child: VideoInterview
  },
  {
    title: 'Final Shortlist for the Line Manager',
    description: 'Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision.',
    child: ShortList
  }
]