// src/Redux_State/slices/lmsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    teachers: [
      {
        id: 1,
        name: "Ali Khan",
        email: "ali@example.com",
        contact: "+92 300 1234567",
        qualification: "M.Sc Physics",
        position: "Senior Physics Lecturer",
        department: "Science Department",
        status: "Active",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        experience: 5, // years
      },
      {
        id: 2,
        name: "Sara Ahmed",
        email: "sara@example.com",
        contact: "+92 301 7654321",
        qualification: "M.A English",
        position: "Head of English Department",
        department: "Arts Department",
        status: "On Leave",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        experience: 8, // years
      },
      {
        id: 3,
        name: "Usman Raza",
        email: "usman@example.com",
        contact: "+92 302 9876543",
        qualification: "M.Phil Mathematics",
        position: "Mathematics Instructor",
        department: "Science Department",
        status: "Active",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        experience: 10, // years
      },
    ],

    courses: [
      {
        id: 1,
        title: "Calculus III",
        description:
          "Advanced calculus covering multivariable functions, partial derivatives, and multiple integrals.",
        department: "Mathematics",
        category: "Undergraduate",
        status: "Published",
        enrolledStudents: 120,
      },
      {
        id: 2,
        title: "Introduction to AI",
        description:
          "Foundations of artificial intelligence including search algorithms, knowledge representation, and basic machine learning concepts.",
        department: "Computer Science",
        category: "Graduate",
        status: "Draft",
        enrolledStudents: 85,
      },
      {
        id: 3,
        title: "Quantum Physics",
        description:
          "Core concepts in quantum mechanics, including wave-particle duality, Schrödinger's equation, and quantum states.",
        department: "Physics",
        category: "Postgraduate",
        status: "On Hold",
        enrolledStudents: 60,
      },
    ],
    students: [
      {
        id: 1,
        name: "zain Raza Khan",
        program: "BS Computer Science",
        department: "Computer Science",
        email: "ali.raza@edu.pk",
        phone: "+92 300 1234567",
        status: "active",
        admissionDate: "2021-09-15",
        address: "House 123, Street 45, Lahore",
        bio: "Top-performing student with interest in AI and Machine Learning. Winner of PIAIC Hackathon 2023.",
        performance: {
          gpa: 3.8,
          attendance: 92,
          completedCourses: 24,
          growth: 15,
        },
        avatar: "https://randomuser.me/portraits/men/31.jpg",
      },
      {
        id: 2,
        name: "Fatima Zahra",
        program: "BS Psychology",
        department: "Social Sciences",
        email: "fatima.zahra@edu.pk",
        phone: "+92 301 2345678",
        status: "active",
        admissionDate: "2022-01-10",
        address: "House 45, Street 12, Islamabad",
        bio: "Highly motivated student specializing in behavioral studies. Volunteered for multiple mental health awareness campaigns.",
        performance: {
          gpa: 3.6,
          attendance: 88,
          completedCourses: 18,
          growth: 12,
        },
        avatar: "https://randomuser.me/portraits/women/42.jpg",
      },
      {
        id: 3,
        name: "Hamza Yousaf",
        program: "BBA",
        department: "Business Administration",
        email: "hamza.yousaf@edu.pk",
        phone: "+92 302 3456789",
        status: "inactive",
        admissionDate: "2020-08-20",
        address: "House 89, Street 9, Karachi",
        bio: "Business-minded student with focus on entrepreneurship and startups. Founded two small-scale online ventures.",
        performance: {
          gpa: 3.4,
          attendance: 75,
          completedCourses: 20,
          growth: 10,
        },
        avatar: "https://randomuser.me/portraits/men/65.jpg",
      },
    ],

    hr: [
      {
        id: 201,
        name: "Maria Ahmed",
        position: "HR Manager",
        department: "PR",
        email: "maria@example.com",
        status: "Active",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        experience: 5, // years
      },
      {
        id: 202,
        name: "Usman Khan",
        position: "Recruitment Specialist",
        department: "Hiring",
        email: "usman.khan@example.com",
        status: "Active",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        experience: 8, // years
      },
      {
        id: 203,
        name: "Sana Malik",
        position: "Payroll Officer",
        department: "Finance",
        email: "sana.malik@example.com",
        status: "On Leave",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        experience: 10, // years
      },
    ],
    contacts: [
      {
        id: 1,
        name: "Prof. Ahmed Raza",
        position: "Director of Education",
        department: "Higher Education Commission",
        email: "ahmed.raza@edu.gov.pk",
        phone: "+92 51 111 119 119",
        address: "Sector H-9, Islamabad, Pakistan",
        joinDate: "15-03-2018",
        avatar: "https://randomuser.me/portraits/men/45.jpg",
        color: "from-cyan-200 to-blue-600",
        accent: "bg-blue-600",
        textColor: "text-blue-600",
        responsibilities: [
          "Oversee all educational institutions",
          "Policy implementation",
          "Faculty development programs",
          "Curriculum supervision",
        ],
      },
      {
        id: 2,
        name: "Dr. Fatima Khan",
        position: "Deputy Director",
        department: "College Education",
        email: "fatima.khan@college.edu.pk",
        phone: "+92 51 925 0123",
        address: "Sector G-7/2, Islamabad, Pakistan",
        joinDate: "22-08-2020",
        avatar: "https://randomuser.me/portraits/women/24.jpg",
        color: "from-indigo-200 to-violet-600",
        accent: "bg-violet-600",
        textColor: "text-indigo-600",
        responsibilities: [
          "College accreditation",
          "Faculty training",
          "Student affairs",
          "Examination supervision",
        ],
      },
      {
        id: 3,
        name: "Mr. Ali Hassan",
        position: "Administrative Officer",
        department: "School Education",
        email: "ali.hassan@schools.gov.pk",
        phone: "+92 51 921 1111",
        address: "Sector F-8/4, Islamabad, Pakistan",
        joinDate: "05-01-2022",
        avatar: "https://randomuser.me/portraits/men/40.jpg",
        color: "from-lime-200 to-green-600",
        accent: "bg-green-600",
        textColor: "text-green-600",
        responsibilities: [
          "School inspections",
          "Instructor recruitment",
          "Infrastructure development",
          "Budget management",
        ],
      },
    ],

    admin: [
      {
        id: 301,
        name: "Ahmed Raza",
        role: "System Admin",
        contact: "ahmed@example.com",
      },
    ],
  },
  reducers: {
    // ---------- GET DATA ----------
    getData: (state, action) => {
      const category = action.payload;
      return state[category] || [];
    },

    // ---------- ADD DATA ----------
    addData: (state, action) => {
      const { category, item } = action.payload;
      if (state[category]) {
        state[category].push(item);
      }
    },

    // ---------- UPDATE DATA ----------
    updateData: (state, action) => {
      const { category, item } = action.payload;
      if (state[category]) {
        const index = state[category].findIndex((el) => el.id === item.id);
        if (index !== -1) {
          state[category][index] = { ...state[category][index], ...item };
        }
      }
    },

    // ---------- DELETE DATA ----------
    deleteData: (state, action) => {
      const { category, id } = action.payload;
      if (state[category]) {
        state[category] = state[category].filter((el) => el.id !== id);
      }
    },
  },
});

export const { getData, addData, updateData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
