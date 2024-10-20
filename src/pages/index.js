import Task from "./task";


export default function Home({ allTasks }) {
  return (
    <div>
      <Task allTasks={allTasks} />
    </div>
  );
}

export async function getServerSideProps() {
  // Static array of tasks
  const allTasks = [
    {
      id: 1,
      title: "Complete Project Report",
      description: "Finalize the project report for the client meeting.",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Email Updates to Team",
      description: "Send updates to the team about the new project milestones.",
      priority: "medium",
      completed: true,
    },
    {
      id: 3,
      title: "Schedule Doctor Appointment",
      description: "Schedule Doctor Appointment",
      priority: "high",
      completed: false,
    },
    {
      id: 4,
      title: "Buy Groceries",
      description:
        "Purchase groceries for the week, including fruits and vegetables.",
      priority: "medium",
      completed: false,
    },
    {
      id: 5,
      title: "Prepare for the Presentation",
      description: "Prepare slides and rehearse the presentation for Monday.",
      priority: "high",
      completed: false,
    },
    {
      id: 6,
      title: "Read a Book",
      description: "Finish reading 'The Alchemist' by Paulo Coelho.",
      priority: "low",
      completed: true,
    },
    {
      id: 7,
      title: "Clean the House",
      description: "Do a deep clean of the house this weekend.",
      priority: "medium",
      completed: false,
    },
    {
      id: 8,
      title: "Call Mom",
      description: "Catch up with mom and see how she's doing.",
      priority: "low",
      completed: true,
    },
    {
      id: 9,
      title: "Start New Course",
      description: "Enroll and start the new online course on React.",
      priority: "high",
      completed: false,
    },
    {
      id: 10,
      title: "Plan Weekend Trip",
      description: "Research and plan a weekend trip to the mountains.",
      priority: "medium",
      completed: false,
    },
  ];

  return {
    props: {
      allTasks,
    },
  };
}
