import { Benefit } from "./types";
import EditIcon from '../assets/images/edit-spark.svg'
import PortraitIcon from '../assets/images/portrait-spark.svg'
import CloudIcon from '../assets/images/cloud-spark.svg'

export const benefits:Benefit[] = [
  {
    title: 'Automate Processes',
    description: 'Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.',
    icon: EditIcon
  },
  {
    title: 'Provide Instant Information',
    description: 'Quickly access relevant candidate data, ensuring no talent is overlooked in your search.',
    icon: CloudIcon
  },
  {
    title: 'Make Data-Driven Decisions',
    description: 'Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.',
    icon: PortraitIcon
  }
]