export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Campus", href: "#campus" },
  { label: "Achievements", href: "#achievements" },
  { label: "Student Life", href: "#student-life" },
];

// Local, verified AJCE visual assets. Sources and licences are recorded in
// public/images/ajce/SOURCES.md.
export const heroImageUrl = "/images/ajce/campus/hero-campus-2024.jpg";

export const ajceImages = {
  campus: "/images/ajce/campus/campus-approach-2024.jpg",
  researchSquare: "/images/ajce/campus/research-square-2024.jpg",
  canteen: "/images/ajce/facilities/canteen.jpg",
  labs: "/images/ajce/academics/labs-workshops.jpg",
  spaceExpo: "/images/ajce/innovation/space-expo.jpg",
  iedc: "/images/ajce/innovation/iedc-summit.jpg",
  sports: "/images/ajce/student-life/annual-sports-meet.jpg",
  homeDay: "/images/ajce/student-life/home-day.jpg",
  basketball: "/images/ajce/facilities/basketball-court-2024.jpg",
};

export const aboutImageUrl = ajceImages.campus;

export const aboutStats = [
  { value: 25, suffix: " years", label: "of excellence" },
  { value: 68, suffix: " acres", label: "of campus" },
  { value: 3500, suffix: "+", label: "students" },
  { value: 240, suffix: "+", label: "faculty" },
];

export const programCategories = [
  {
    id: "btech",
    label: "B.Tech",
    detail: "4 years · 12 programmes",
    programmes: [
      "AI & Data Science", "Chemical Engineering", "Civil Engineering", "Computer Science & Engineering",
      "CSE – Artificial Intelligence", "CSE – Cyber Security", "Electronics & Communication Engineering",
      "Electrical & Electronics Engineering", "Food Technology", "Mechanical Engineering",
      "Mechanical Engineering (Automobile)", "Metallurgical & Materials Engineering",
    ],
  },
  {
    id: "mtech",
    label: "M.Tech",
    detail: "2 years · 6 specialisations",
    programmes: ["Computer Science & Engineering", "Energy Systems", "Structural Engineering & Construction Management", "Environmental Engineering", "Electric Vehicle Technology", "VLSI & Embedded Systems"],
  },
  { id: "applications", label: "Computer Applications", detail: "BCA · MCA Regular · MCA Integrated", programmes: ["BCA", "MCA Regular", "MCA Integrated"] },
  { id: "business", label: "Business", detail: "4 years", programmes: ["BBA Honours"] },
  { id: "doctoral", label: "Research", detail: "Doctoral programmes", programmes: ["Ph.D programmes"] },
];

export const facilities = [
  { number: "01", title: "Academic Spaces", description: "Classrooms, seminar halls, and conference facilities support focused learning and exchange.", image: ajceImages.researchSquare },
  { number: "02", title: "Labs & Workshops", description: "Practical spaces for engineering exploration, making, and discovery.", image: ajceImages.labs },
  { number: "03", title: "Central Library", description: "A place to research, reflect, and follow curiosity beyond the classroom.", image: ajceImages.researchSquare },
  { number: "04", title: "Innovation Spaces", description: "Startups Valley, the AICTE IDEA Lab, and technology environments for experimentation.", image: ajceImages.iedc },
  { number: "05", title: "Student & Recreation", description: "Hostel, sports, cultural, and social spaces that support campus life.", image: ajceImages.basketball },
  { number: "06", title: "Campus Environment", description: "A 68-acre campus with 1.26 lakh sq.m. of built-up area, as stated by AJCE.", image: heroImageUrl },
];

export const achievementHighlights = [
  { number: "01", category: "Accreditation", value: "A+", suffix: "", title: "NAAC grade", description: "AJCE is listed by the institution as NAAC A+." },
  { number: "02", category: "Accreditation", value: 7, suffix: "", title: "NBA programmes", description: "Seven programmes are listed as NBA accredited by AJCE." },
  { number: "03", category: "Kerala Institutional Ranking Framework", value: 4, suffix: "", title: "KIRF rank in Kerala", description: "KIRF Rank 4 in Kerala (2026), as stated by AJCE." },
  { number: "04", category: "Innovation ecosystem", value: 95, suffix: "+", title: "Startups incubated", description: "AJCE states that its TBI ecosystem has incubated 95+ startups." },
];

export const studentLifeStories = [
  { number: "01", category: "Flagship Technical Fest", title: "Aithra brings ideas to life.", description: "AJCE’s inter-college technical fest brings together competitions, workshops, hackathons, the Auto Expo, and campus energy.", image: ajceImages.spaceExpo, imagePosition: "center" },
  { number: "02", category: "Cultural Festival", title: "Azure takes the stage.", description: "Music, dance, fine arts, literary events, and performances shape AJCE’s annual cultural festival.", image: ajceImages.homeDay, imagePosition: "left center" },
  { number: "03", category: "Sports & Teamwork", title: "Bring your whole game.", description: "Sports tournaments and shared challenges offer room for energy, team spirit, and campus connection.", image: ajceImages.sports, imagePosition: "right center" },
  { number: "04", category: "Clubs & Chapters", title: "Keep the conversation moving.", description: "Selected communities include ACM Asterisk, IEEE, Robotics, AI, Cyber, IoT, FOSS, NSS, NCC, and Shutterbugs.", image: ajceImages.iedc, imagePosition: "center" },
];

export const innovationHighlights = [
  { value: 2, suffix: "", label: "technology business incubators" },
  { value: 95, suffix: "+", label: "startups incubated" },
  { value: 22, suffix: "+", label: "patents published & granted" },
];

export const admissions = [
  { label: "B.Tech admissions", phone: "+919072661600", display: "+91 90726 61600" },
  { label: "M.Tech admissions", phone: "+919516666000", display: "+91 95166 66000" },
  { label: "BBA admissions", phone: "+919074557708", display: "+91 90745 57708" },
  { label: "BCA / MCA admissions", phone: "+918606309393", display: "+91 86063 09393" },
];
