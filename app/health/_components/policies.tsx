const policies = [
  {
    id: 1,
    name: "Responsibility",
    description: "This policy is diligently implemented by management, who are tasked with making certain that all health and safety procedures are followed and that necessary resources and training are provided. Our employees, contractors, and subcontractors are required to respect all safety guidelines, use necessary protective equipment, and promptly report any hazards or unsafe conditions.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 2,
    name: "Risk Assessment and Planning",
    description: "We conduct regular risk assessments to identify potential hazards. Mitigation plans are then developed and implemented in order to minimize any identified risks.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 3,
    name: "Training and Awareness",
    description: "To ensure ongoing awareness and compliance, all staff members will receive comprehensive health and safety training relevant to their roles. Regular updates and refresher courses will also be provided.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 4,
    name: "Accident and Incident Reporting",
    description: "We insist on the timely reporting and documentation of all accidents, incidents, and near misses. Investigations will be carried out to determine the cause and to prevent recurrences.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 5,
    name: "Health and Safety Audits",
    description: "Regular audits will be conducted to verify compliance with health and safety policies and identify areas for improvement.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 6,
    name: "Emergency Preparedness and Response",
    description: "We establish and regularly review emergency procedures. Employees are trained in emergency response, including first aid and evacuation procedures.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 7,
    name: "Equipment and Machinery",
    description: "All equipment and machinery are inspected and maintained regularly to ensure their safety. Employees will receive training in the proper use of such equipment.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 8,
    name: "Personal Protective Equipment",
    description: "We provide appropriate PPE to employees and strictly enforce its use in all relevant situations.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 9,
    name: "Health and Wellness",
    description: "LR Projects promotes general health and wellness among our employees, understanding the integral role a healthy workforce plays in creating a safe working environment.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 10,
    name: "Policy Review",
    description: "This policy will be reviewed annually and updated as necessary to maintain its effectiveness and relevance.",
    image: "/images/policy-statement.webp",
  },
  {
    id: 10,
    name: "Commitment to Continuous Improvement",
    description: "At LR Projects, we are dedicated to the continuous improvement of our health and safety practices, aiming for an incident-free workplace.",
    image: "/images/policy-statement.webp",
  },
]

const Policies = () => {
  return (
    <section className="mt-8">
         <div className="container p-0 bg-white rounded-3xl">
          <div className="w-full p-8">
             <h2 className="text-3xl md:text-5xl">Policies</h2>
             <div className="grid grid-cols-1 gap-6 mt-8 md:gap-8 sm:grid-cols-2">
              {policies.map((policy) => (
                <div key={policy.id}>
                  <h3 className="text-2xl font-thin">{policy.name}</h3>
                  <p className="mt-4 text-sm font-thin">{policy.description}</p>
                </div>
              ))}
             </div>
          </div>
         </div>
    </section>
  );
};
export default Policies;
