// Services
const services = [
    {
      title: "Venture Capital for Utilities",
      description: "Funding and scaling new-age utility startups in the UAE.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Innovation Labs",
      description: "Building R&D hubs to reimagine how energy and resources are managed.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Sustainability Consulting",
      description: "Helping organizations align with UAE’s green economy vision.",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Energy Solutions",
      description: "Providing modern, efficient, and socially responsible utility models.",
      color: "from-purple-500 to-purple-600"
    }
  ];
  
  // Core Values
  const values = [
    { title: "Sustainability", description: "Protecting the environment while creating progress.", color: "from-green-500 to-green-600" },
    { title: "Innovation", description: "Embracing bold ideas and disruptive technologies.", color: "from-blue-500 to-blue-600" },
    { title: "Integrity", description: "Building trust through transparency and ethical practices.", color: "from-rose-500 to-rose-600" },
    { title: "Social Impact", description: "Prioritizing communities alongside profits.", color: "from-amber-500 to-amber-600" },
    { title: "Growth", description: "Delivering long-term value for stakeholders and society.", color: "from-indigo-500 to-indigo-600" }
  ];
  
  // Blog Articles
  const blogPosts = [
    { title: "Social Capitalism: The Future of UAE Utilities" },
    { title: "Why Sustainability is the New Currency of Growth" },
    { title: "Richard Menezes: Lessons from a $130 Million Deal" },
    { title: "The Role of Venture Capital in Energy Innovation" }
  ];
  
  // Contact Info
  const contactInfo = [
    { title: "Call Us", content: "+971 (XXX) XXX XXXX" },
    { title: "Email Us", content: "info@nobledev.ae" },
    { title: "Visit Us", content: "Noble Development – UAE" }
  ];
  
  // Rendering Services
  const servicesGrid = document.getElementById("services-grid");
  services.forEach(s => {
    const div = document.createElement("div");
    div.className = `p-6 bg-gradient-to-br ${s.color} text-white rounded-lg shadow`;
    div.innerHTML = `<h3 class="text-xl font-bold mb-2">${s.title}</h3><p>${s.description}</p>`;
    servicesGrid.appendChild(div);
  });
  
  // Rendering Values
  const valuesGrid = document.getElementById("values-grid");
  values.forEach(v => {
    const div = document.createElement("div");
    div.className = `p-6 bg-gradient-to-br ${v.color} text-white rounded-lg shadow`;
    div.innerHTML = `<h3 class="text-lg font-bold mb-2">${v.title}</h3><p>${v.description}</p>`;
    valuesGrid.appendChild(div);
  });
  
  // Rendering Blog
  const blogGrid = document.getElementById("blog-grid");
  blogPosts.forEach(b => {
    const div = document.createElement("div");
    div.className = "p-6 bg-white rounded-lg shadow text-left";
    div.innerHTML = `<h3 class="text-lg font-semibold mb-2">${b.title}</h3><a href="#" class="text-emerald-600 hover:underline">Read More</a>`;
    blogGrid.appendChild(div);
  });
  
  // Rendering Contact Info
  const contactList = document.getElementById("contact-info");
  contactInfo.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${c.title}:</strong> ${c.content}`;
    contactList.appendChild(li);
  });
  