export type Feature = {
  title: string,
  description: string,
  child: () => JSX.Element
}

export type Organisation = {
  title: string;
  logo: string
  link: string
}

export type Candinate = {
  name: string,
  position: string,
  photo: string,
  skills: string[],
  verified?: boolean
}

export type Benefit = {
  title: string,
  description: string,
  icon: string
}

export type Tab = {
  title: string,
  child: JSX.Element
}

export type Testimonial = {
  name: string,
  photo: string,
  position: string,
  review: string
}

export type Task = {
  text: string,
  done: boolean
}