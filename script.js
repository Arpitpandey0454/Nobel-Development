  
  
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
  
  

  
  // Rendering Contact Info
  const contactList = document.getElementById("contact-info");
  contactInfo.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${c.title}:</strong> ${c.content}`;
    contactList.appendChild(li);
  });
  