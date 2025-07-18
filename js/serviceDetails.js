// js/serviceDetails.js

const queryParams = new URLSearchParams(window.location.search);
const selectedServiceId = queryParams.get("service") || "ai-ml";

const services = {
  "ai-ml": {
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Transforming Businesses with Smart, Scalable AI Solutions",
    img: "images/resource/MainAI.png",
    programImage: "images/resource/AI.png",
    intro:
      "At LeadIT Group, we deliver AI-powered solutions that go beyond automation. We help businesses make smarter decisions, create personalized experiences, and unlock operational efficiencies.",
    brandHeading:
      "With intelligent, business-aligned AI & Machine Learning solutions woven throughout your operations, you will:",
    innercoloumn1:
      "Automate complex processes and reduce manual effort with smart, adaptive algorithms",
    innercoloumn2:
      "Deliver hyper-personalized customer experiences using real-time data and behavior insights",
    innercoloumn3:
      "Predict trends, risks, and outcomes with greater accuracy using deep analytics",
    innercoloumn4:
      "Make faster, smarter decisions that drive measurable business growth",
    innercoloumn5:
      "Unlock new revenue streams through AI-driven innovation and automation",
    innertextcoloumn:
      "Our AI/ML solutions aren’t just technical tools—they’re strategic enablers …",
    detailSections: [
      {
        heading: "Generative AI Integration",
        text: "Build intelligent chatbots, content generators, and customer support systems using GPT-based models and other LLMs",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "Natural Language Processing (NLP)",
        text: "Enable your systems to understand and interpret human language with sentiment analysis, translation, and conversational AI.",

        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Predictive Analytics & Forecasting",
        text: "Make data-driven decisions with algorithms that predict trends, behavior, and outcomes across sales, operations, and risk",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "AI-Driven Process Automation",
        text: "Automate back-office workflows, document classification, and data extraction with intelligent automation.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Audience Research",
      "User Behavioural Research",
      "Customer Journey Mapping",
      "Information Architecture",
      "Interactive Prototyping",
      "User Testing",
      "Speed Improvements",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level3  CMMI for Service Excellence",
    ],
    ctaHead: "Let’s Build Smarter Together",
    ctatesx:
      "Whether you're looking to implement a chatbot, launch a custom AI platform, or optimize your existing systems—LeadIT is your trusted AI partner.",
  },
  cloud: {
    title: "Cloud Computing & Infrastructure",
    subtitle: "Scalable. Secure. Seamless.",
    img: "images/resource/MainCloud computing.png", // Replace with actual image path
    programImage: "images/resource/ProgrameCloud computing.png", // Replace with actual image path
    intro:
      "At LeadIT Group, we help businesses unlock the full potential of the cloud with agile, secure, and cost-efficient infrastructure solutions. Whether you're migrating to the cloud, optimizing a hybrid environment, or building cloud-native applications, our certified experts deliver seamless deployments across AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
    brandHeading:
      "With deep cloud expertise and global delivery capabilities, we support organizations at every stage of their cloud journey:",
    innercoloumn1: "Accelerate cloud adoption with minimal disruption",
    innercoloumn2:
      "Optimize infrastructure for speed, scalability, and reliability",
    innercoloumn3:
      "Reduce operational costs with automated resource management",
    innercoloumn4:
      "Enhance business agility with DevOps and continuous delivery",
    innercoloumn5:
      "Secure your cloud environments with advanced threat protection",
    innertextcoloumn:
      "From strategy and design to deployment and management, LeadIT ensures your cloud investments drive measurable ROI.",
    detailSections: [
      {
        heading: "Cloud Migration & Modernization",
        text: "Seamlessly migrate applications, databases, and workloads to the cloud with minimal downtime—across IaaS, PaaS, and SaaS models.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "Hybrid & Multi-Cloud Management",
        text: "Design and manage environments that leverage multiple cloud providers while maintaining centralized governance and performance.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Cloud Security & Compliance",
        text: "Implement cloud-native security frameworks including identity and access management, encryption, compliance automation (HIPAA, GDPR), and threat monitoring.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "Cloud Monitoring & Cost Optimization",
        text: "Track performance, detect anomalies, and control costs with tools like CloudWatch, Azure Monitor, and cost management dashboards.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Cloud Readiness Assessment",
      "Architecture Design & Optimization",
      "Platform Selection (AWS, Azure, GCP)",
      "CI/CD & Automation Strategy",
      "Compliance Mapping & Policy Setup",
      "Resource Tagging & Cost Control",
      "24/7 Monitoring & Support",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Let’s Power Your Cloud Strategy",
    ctatesx:
      "Whether you’re just beginning your cloud journey or optimizing a mature environment, LeadIT is your trusted partner for building a future-proof digital foundation.",
  },
  data_analytics: {
    title: "Advanced Data Analytics & Data Science",
    subtitle: "Turn Your Data Into a Competitive Advantage",
    img: "images/resource/MainData Anylitics.png", // Replace with actual image
    programImage: "images/resource/ProgramData Anylitics.png", // Replace with actual image
    intro:
      "At LeadIT Group, we help organizations unlock the true value of their data through powerful analytics, intelligent automation, and real-time insights. Our data science solutions enable smarter decisions, improved performance, and innovation at scale.",
    brandHeading:
      "From data engineering to AI-powered analytics, we deliver end-to-end services that transform raw information into strategic, actionable intelligence.",
    innercoloumn1: "Unify structured & unstructured data for holistic analysis",
    innercoloumn2:
      "Gain real-time visibility with custom dashboards and reports",
    innercoloumn3:
      "Predict trends, customer behavior, and business risks with ML models",
    innercoloumn4: "Ensure data quality, security, and compliance",
    innercoloumn5: "Accelerate decision-making with intelligent automation",
    innertextcoloumn:
      "Whether you're modernizing your BI stack or deploying predictive analytics, LeadIT is your data partner for growth.",
    detailSections: [
      {
        heading: "Data Engineering & Architecture",
        text: "Design robust data pipelines and scalable architectures for ingestion, transformation, and storage across cloud and hybrid environments.",
        icon: "images/resource/iconbrand-1 (1).png", // Replace with custom icon if needed
      },
      {
        heading: "Real-Time & Streaming Analytics",
        text: "Implement real-time analytics platforms for rapid event processing, live monitoring, and time-sensitive decision support.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Predictive & Prescriptive Modeling",
        text: "Leverage machine learning to forecast outcomes, recommend actions, and automate high-value processes across departments.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
    ],
    programs: [
      "Data Discovery & Assessment",
      "Data Lake & Warehouse Implementation",
      "KPI Definition & Metric Alignment",
      "ETL/ELT Pipeline Development",
      "Machine Learning Model Design & Training",
      "Self-Service BI Enablement",
      "Compliance (GDPR, HIPAA, SOC 2)",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Let’s Transform Your Data into Growth",
    ctatesx:
      "Whether you're starting your analytics journey or scaling advanced AI-driven insights, LeadIT is your trusted data partner.",
  },
  cybersecurity: {
    title: "Cybersecurity & Risk Management",
    subtitle: "Defend. Detect. Comply. Thrive.",
    img: "images/resource/MainCybersecurity & Risk Management.png", // Replace with actual main banner image path
    programImage: "images/resource/ProgramCyber security.png", // Replace with actual program image path
    intro:
      "At LeadIT Group, we safeguard your business with next-generation cybersecurity solutions designed to detect threats, minimize risk, and ensure compliance in a constantly evolving digital world. We go beyond traditional protection—delivering AI-driven, proactive security strategies that protect your data, infrastructure, and reputation.",
    brandHeading:
      "Our cybersecurity experts combine advanced tools with deep industry knowledge to deliver enterprise-grade security programs that:",
    innercoloumn1: "Detect and respond to threats in real-time",
    innercoloumn2: "Enforce Zero Trust across users, devices, and applications",
    innercoloumn3: "Secure cloud, hybrid, and on-prem environments",
    innercoloumn4:
      "Ensure compliance with global regulations (GDPR, HIPAA, PCI-DSS)",
    innercoloumn5: "Reduce operational risks and build cyber resilience",
    innertextcoloumn:
      "With LeadIT, security becomes a strategic enabler—empowering innovation while protecting what matters most.",
    detailSections: [
      {
        heading: "Zero Trust Architecture Implementation",
        text: "Enforce strict access controls and continuous validation across your network to minimize vulnerabilities and eliminate trust assumptions.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "AI-Powered Threat Detection & Response",
        text: "Utilize machine learning and behavior analytics to detect anomalies, stop intrusions, and respond to incidents faster.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Cloud Security & Compliance",
        text: "Secure your AWS, Azure, and GCP environments with encryption, identity management, workload protection, and automated compliance tools.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "Risk Assessment & Regulatory Readiness",
        text: "Evaluate your risk landscape, align with ISO, NIST, and SOC 2 frameworks, and implement policies that ensure audit success.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Cybersecurity Maturity Assessments",
      "Security Architecture Design & Implementation",
      "Identity & Access Management (IAM)",
      "SIEM & SOAR Platform Deployment",
      "Endpoint Protection & Encryption",
      "Cloud Compliance Mapping",
      "Incident Response Planning & Testing",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Ready to Secure What Matters Most?",
    ctatesx:
      "Cyber threats evolve. So should your defense strategy. Partner with LeadIT for security that’s smart, scalable, and always-on.",
  },
  iot_edge: {
    title: "Connected Intelligence (IoT & Edge Computing)",
    subtitle: "Real-Time, Data-Driven, Always Connected.",
    img: "images/resource/MainIoT.png", // Update with correct image path
    programImage: "images/resource/programConnected Intelligence.png", // Update with correct image path
    intro:
      "At LeadIT Group, we empower businesses with smart connectivity by combining the power of the Internet of Things (IoT) and Edge Computing. Our solutions are built to collect, process, and act on data—right where it’s generated—enabling faster decisions, automation, and better outcomes. From industrial sensors to real-time analytics at the edge, we design intelligent systems that are connected, efficient, and responsive.",
    brandHeading:
      "With expertise across industries and ecosystems, we help organizations harness the power of connected devices and decentralized computing to:",
    innercoloumn1: "Monitor and manage assets remotely",
    innercoloumn2: "Reduce downtime with predictive maintenance",
    innercoloumn3: "Automate operations with sensor-based logic",
    innercoloumn4: "Process data in real-time for faster insights",
    innercoloumn5: "Improve safety, energy efficiency, and compliance",
    innertextcoloumn:
      "Our IoT & Edge services help transform physical operations into smart, self-aware ecosystems.",
    detailSections: [
      {
        heading: "IoT Device Integration & Management",
        text: "Connect and control smart sensors, machines, and systems across manufacturing, logistics, healthcare, and more.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "Edge Computing Solutions",
        text: "Process data close to the source—at the edge—to reduce latency, enable faster actions, and reduce cloud load.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Predictive Maintenance Systems",
        text: "Leverage real-time data and ML to forecast equipment failures and optimize maintenance schedules.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "5G-Enabled Connectivity",
        text: "Deploy high-speed, low-latency networks that support advanced IoT use cases like autonomous vehicles and smart cities.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Sensor Selection & Network Architecture",
      "IoT Gateway & Edge Device Deployment",
      "Data Pipeline Engineering (Edge → Cloud)",
      "AI/ML Models for Event Detection",
      "Custom Visualization & Alerts",
      "Device Security & Firmware Updates",
      "Remote Monitoring & Control Systems",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Let’s Connect Your World with Intelligence",
    ctatesx:
      "Harness the power of IoT and edge computing with LeadIT’s Connected Intelligence solutions. Let’s bring automation, insight, and control to the edge of your enterprise.",
  },
  blockchain: {
    title: "Blockchain & Distributed Ledger Technologies",
    subtitle: "Secure. Transparent. Decentralized.",
    img: "images/resource/MainBlock chain.png", // Update this with your actual banner image
    programImage: "images/resource/ProgramBlock chain.png", // Update this with your actual program image
    intro:
      "At LeadIT Group, we harness the power of blockchain to build trust-driven, decentralized systems that enable secure transactions, transparent operations, and innovative business models. From smart contracts to NFT platforms and decentralized applications (DApps), our blockchain solutions are tailored to meet the needs of modern enterprises across finance, supply chain, identity, and more.",
    brandHeading:
      "With deep expertise in emerging tech, we help businesses leverage blockchain and distributed ledgers to:",
    innercoloumn1: "Enhance security and data integrity",
    innercoloumn2: "Improve transparency and traceability",
    innercoloumn3: "Automate contracts and transactions",
    innercoloumn4: "Eliminate intermediaries and reduce operational costs",
    innercoloumn5:
      "Enable new business models with tokenization and decentralization",
    innertextcoloumn:
      "Our blockchain services empower organizations to move with confidence, compliance, and control in an increasingly digital world.",
    detailSections: [
      {
        heading: "Smart Contracts Development",
        text: "Automate and enforce agreements using Ethereum, Hyperledger, and other platforms—with secure, transparent logic.",
        icon: "images/resource/iconbrand-1 (1).png", // Update this as needed
      },
      {
        heading: "Digital Identity & Verification Systems",
        text: "Create tamper-proof, verifiable identity frameworks that reduce fraud and streamline user onboarding across industries.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Decentralized Applications (DApps)",
        text: "Design scalable DApps for use cases like asset tracking, payments, healthcare data sharing, and more.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "Blockchain Integration with Existing Systems",
        text: "Enable interoperability with ERPs, CRMs, and third-party apps using secure APIs and blockchain middleware.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Use Case Assessment & Feasibility Analysis",
      "Blockchain Architecture & Platform Selection",
      "Smart Contract Coding & Auditing",
      "Tokenomics & Governance Design",
      "Private vs. Public Network Design",
      "Integration & User Interface Development",
      "Security Testing & Deployment",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Explore the Power of Decentralization",
    ctatesx:
      "From idea to launch, LeadIT helps you build blockchain solutions that are secure, scalable, and built for impact.",
  },
  rpa: {
    title: "Robotic Process Automation (RPA) & Intelligent Automation",
    subtitle: "Automate Smarter. Operate Faster. Scale Effortlessly.",
    img: "images/resource/MainRobotics.png", // Update to actual banner image
    programImage: "images/resource/ProgramRobotic Process Automation.png", // Update to actual program section image
    intro:
      "At LeadIT Group, we help businesses transform operations by combining Robotic Process Automation (RPA) with AI-powered intelligent automation. Our solutions reduce manual effort, increase accuracy, and free up your teams to focus on strategic work. From document processing to rule-based workflows and advanced cognitive automation, we deliver end-to-end automation services that drive measurable impact across industries and business functions.",
    brandHeading: "Our intelligent automation solutions are designed to:",
    innercoloumn1: "Streamline repetitive, time-consuming tasks",
    innercoloumn2: "Improve speed, accuracy, and compliance",
    innercoloumn3: "Enable 24/7 digital workforce operations",
    innercoloumn4: "Reduce operational costs by up to 60%",
    innercoloumn5: "Enhance employee productivity and satisfaction",
    innertextcoloumn:
      "Whether you're automating a single task or scaling enterprise-wide transformation, LeadIT ensures automation that works—and delivers.",
    detailSections: [
      {
        heading: "Intelligent Document Processing (IDP)",
        text: "Extract and classify data from invoices, forms, and PDFs using AI-powered OCR and NLP technologies.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "Cognitive Automation",
        text: "Leverage machine learning and natural language understanding to automate decision-based and semi-structured processes.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Workflow Orchestration & Integration",
        text: "Design, automate, and monitor complex workflows across your ERP, CRM, and legacy systems using robust integration frameworks.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "RPA Bot Development & Management",
        text: "Develop attended and unattended bots using platforms like UiPath, Automation Anywhere, and Blue Prism to automate back-office and front-office tasks.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Process Discovery & Feasibility Analysis",
      "RPA Strategy & Roadmap Development",
      "Bot Design, Development & Testing",
      "AI/ML Integration with Automation",
      "Governance & Bot Lifecycle Management",
      "User Training & Change Management",
      "Ongoing Bot Support & Optimization",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Start Your Automation Journey with LeadIT",
    ctatesx:
      "Unlock the power of intelligent automation and reimagine your operations. From strategy to execution, LeadIT is your trusted automation partner.",
  },
  development: {
    title: "Development & Integration Capabilities",
    subtitle: "Full-Stack Excellence That Powers Digital Innovation",
    img: "images/resource/MainDevelopment & Integration.png", // Update with actual image
    programImage:
      "images/resource/ProgramDevelopment & Integration Capabilities.png", // Update with actual image
    intro:
      "At LeadIT Group, we design and develop high-performance, scalable applications using the latest in front-end, back-end, and mobile technologies. Our full-stack teams combine engineering expertise with agile delivery to bring your digital products to life—faster, smarter, and cleaner. Whether you're building customer-facing platforms, enterprise systems, or mobile experiences, our solutions are grounded in clean architecture, reusable code, and continuous integration and delivery (CI/CD) best practices.",
    brandHeading: "We work as your technology partner to:",
    innercoloumn1:
      "Build robust, secure, and scalable web and mobile applications",
    innercoloumn2:
      "Modernize legacy systems with API-first and cloud-native architectures",
    innercoloumn3:
      "Accelerate time-to-market with agile methodologies and DevOps pipelines",
    innercoloumn4:
      "Ensure seamless integration with third-party systems and enterprise tools",
    innercoloumn5:
      "Deliver outstanding user experiences with responsive and intuitive UI/UX",
    innertextcoloumn:
      "From MVP to enterprise-grade applications, we create solutions that adapt and scale as your business grows.",
    detailSections: [
      {
        heading: "Frontend Development",
        text: "Build fast, engaging user interfaces using modern frameworks like React, Angular, and Vue.js.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "Backend Development",
        text: "Develop powerful, secure APIs and microservices using Node.js, Python, Java, .NET Core, and more.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "Mobile App Development",
        text: "Create cross-platform and native mobile apps using Flutter, React Native, Swift, and Kotlin.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "API Development & Integration",
        text: "Design, build, and manage secure, scalable APIs for internal systems and third-party integrations.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Requirements Analysis & UI/UX Planning",
      "Frontend/Backend/API Development",
      "Mobile App Prototyping & Deployment",
      "Cloud Architecture & CI/CD Integration",
      "Legacy System Modernization",
      "API Gateway Configuration (Kong, Apigee, AWS API Gateway)",
      "Code Audits, QA & Performance Optimization",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Bring Your Ideas to Life with Full-Stack Experts",
    ctatesx:
      "Build modern apps that scale with your business. Partner with LeadIT to accelerate your development with confidence.",
  },
  integration: {
    title: "Enterprise Integration & API Management",
    subtitle: "Unified Systems. Real-Time Data. Seamless Operations.",
    img: "images/resource/Mainenterprise.png", // Replace with actual image path
    programImage:
      "images/resource/ProgramEnterprise Integration & API Management.png", // Replace with actual image path
    intro:
      "At LeadIT Group, we specialize in building connected digital ecosystems by integrating your applications, services, and data using modern, scalable, and secure architecture. Our enterprise integration and API management services ensure that your systems talk to each other—clearly, quickly, and reliably. Using Enterprise Service Buses (ESBs), API Gateways, and event-driven frameworks, we help your organization achieve real-time responsiveness, reduced complexity, and improved operational efficiency.",
    brandHeading:
      "We help you create a cohesive technology backbone that enables:",
    innercoloumn1:
      "Secure, scalable communication between internal and external systems",
    innercoloumn2: "Faster and more reliable data exchange across platforms",
    innercoloumn3: "Reduced operational silos with centralized API management",
    innercoloumn4: "Real-time processing with event-based integrations",
    innercoloumn5:
      "Increased agility and flexibility in digital transformation initiatives",
    innertextcoloumn:
      "Our integration-first mindset ensures your business moves faster—with fewer barriers.",
    detailSections: [
      {
        heading: "API Development & Management",
        text: "Design, build, and manage secure, scalable RESTful and GraphQL APIs with full lifecycle support, documentation, and versioning.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "Enterprise Application Integration (EAI)",
        text: "Connect core enterprise systems (ERP, CRM, SCM) using ESBs like MuleSoft, Dell Boomi, or Apache Camel.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "API Gateway Deployment",
        text: "Implement robust gateways (Apigee, Kong, AWS API Gateway) to control, secure, and analyze API traffic.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
      {
        heading: "Event-Driven Architecture (EDA)",
        text: "Enable real-time responsiveness using message queues, Kafka streams, and event brokers for asynchronous communication.",
        icon: "images/resource/iconbrand-1 (4).png",
      },
    ],
    programs: [
      "Systems & Data Integration Planning",
      "API Strategy & Governance Framework",
      "ESB Setup & Middleware Configuration",
      "API Gateway Design & Deployment",
      "Real-Time Data Streaming & Queue Management",
      "Integration Testing & Monitoring",
      "DevPortal Design for External Developer Access",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Connect Your Enterprise, End to End",
    ctatesx:
      "Let LeadIT unify your systems for greater speed, agility, and visibility. Transform your disconnected tools into an integrated digital platform.",
  },
  industry: {
    title: "Industry-Specific Solutions",
    subtitle: "Purpose-Built Technology for Your Industry's Unique Challenges",
    img: "images/resource/MainIndustry-Specific Solutions.png", // Replace with actual image path
    programImage: "images/resource/ProgramIndustry-Specific Solutions.png", // Replace with actual image path
    intro:
      "At LeadIT Group, we combine our deep domain expertise with cutting-edge technology to deliver solutions tailored to the unique needs of each industry we serve. Our team understands the regulatory, operational, and customer experience demands that different sectors face—and we build technology that fits them.",
    brandHeading:
      "We don’t believe in one-size-fits-all. We design custom, scalable, and compliant solutions that drive innovation, efficiency, and growth.",
    innercoloumn1: "Secure. Scalable. Regulatory-Ready. (FinTech)",
    innercoloumn2:
      "Connected Care. Compliant Infrastructure. Smarter Outcomes. (HealthTech)",
    innercoloumn3: "Modern Learning Powered by Technology. (EdTech)",
    innercoloumn4:
      "Tailored platforms built for industry workflows and regulatory needs",
    innercoloumn5:
      "Scalable, mobile-first design optimized for users and devices",
    innertextcoloumn:
      "We build smart solutions—customized to your industry’s demands, with security, compliance, and usability at the core.",
    detailSections: [
      {
        heading: "FinTech",
        text: "We help financial institutions and startups build trusted, high-performance digital banking platforms with speed and compliance in mind.",
        icon: "images/resource/iconbrand-1 (1).png",
      },
      {
        heading: "HealthTech",
        text: "We partner with healthcare providers, hospitals, and startups to build digital platforms that enhance care delivery and protect patient data.",
        icon: "images/resource/iconbrand-1 (2).png",
      },
      {
        heading: "EdTech",
        text: "We enable education institutions and learning platforms to scale content delivery, boost engagement, and personalize learning journeys.",
        icon: "images/resource/iconbrand-1 (3).png",
      },
    ],
    programs: [
      "Industry-specific consulting & solution design",
      "Regulatory compliance and security alignment",
      "Custom platform development & integrations",
      "Mobile-first UX/UI design tailored to end users",
      "Ongoing support, optimization & scale-out planning",
    ],
    whyChoose: [
      "30,000+ certified tech professionals and data scientists",
      "100% Domain-specific model training & fine-tuning",
      "Level 3 CMMI for Service Excellence",
    ],
    ctaHead: "Let's Build Something Made for Your Industry",
    ctatesx:
      "Your industry is unique. Your solution should be too. Partner with LeadIT to build smarter, compliant, and future-ready technology.",
  },
};

function renderServiceDetails(service) {
  document.title = `${service.title} | Service Detail`;
  const subtitleEl = document.querySelector("#serviceSubtitle");
  const introEl = document.querySelector("#serviceIntro");

  if (subtitleEl) subtitleEl.textContent = service.subtitle;
  if (introEl) introEl.textContent = service.intro;
  const bannerImg = document.querySelector("#bannerServiceImage");
  if (bannerImg) {
    bannerImg.src = service.img;
    bannerImg.alt = service.title;
  }

  const programImg = document.querySelector("#programImage");
  if (programImg && service.programImage) {
    programImg.src = service.programImage;
    programImg.alt = service.title + " program image";
  }

  document.querySelector("#brandHeading").textContent = service.brandHeading;
  document.querySelector("#innercoloumn1").textContent = service.innercoloumn1;
  document.querySelector("#innercoloumn2").textContent = service.innercoloumn2;
  document.querySelector("#innercoloumn3").textContent = service.innercoloumn3;
  document.querySelector("#innercoloumn4").textContent = service.innercoloumn4;
  document.querySelector("#innercoloumn5").textContent = service.innercoloumn5;
  document.querySelector("#innertextcoloumn").textContent =
    service.innertextcoloumn;

  const blocksOuter = document.querySelector(".blocks-outer");
  blocksOuter.innerHTML = "";
  service.detailSections.forEach((sec) => {
    const block = document.createElement("div");
    block.className = "design-block";
    block.innerHTML = `
      <div class="inner-box">
              <div class="icon"><img src="${sec.icon}" alt="${sec.heading}" /></div>

        <h3>${sec.heading}</h3>
        <div class="text">${sec.text}</div>
      </div>
    `;
    blocksOuter.appendChild(block);
  });

  const programList = document.querySelector(".program-list");
  programList.innerHTML = "";
  service.programs.forEach((prog) => {
    const li = document.createElement("li");
    li.textContent = prog;
    programList.appendChild(li);
  });

  const imgElement = document.querySelector("#serviceImage");
  if (imgElement) {
    imgElement.src = service.img;
    imgElement.alt = service.title;
  }

  const ctaContainer = document.querySelector("#ctaSectionContainer");
  if (ctaContainer && service.ctaHead && service.ctatesx) {
    const ctaDiv = document.createElement("div");
    ctaDiv.className = "column col-lg-12 col-md-12 col-sm-12";
    ctaDiv.innerHTML = `
  <div class="cta-box" style="margin: 60px auto 60px; padding: 20px 15px; max-width: 960px;">
    <h2 style="font-size: 28px; font-weight: 600; margin: 30px 0 20px; text-align: center;">
      ${service.ctaHead}
    </h2>
    <p style="font-size: 18px; line-height: 1.5; max-width: 800px; margin: 0 auto; text-align: center;">
      ${service.ctatesx}
    </p>
  </div>
`;

    ctaContainer.appendChild(ctaDiv);
  }

  // Map whyChoose to counter + quote section
  const countersContainer = document.querySelector("#whyChooseCounters");
  const quoteContainer = document.querySelector("#whyChooseQuote");

  if (countersContainer && quoteContainer && service.whyChoose.length >= 3) {
    // Clear containers
    countersContainer.innerHTML = "";
    quoteContainer.innerHTML = "";

    service.whyChoose.forEach((item, i) => {
      const match = item.match(/^([0-9A-Za-z,+%\\s]+)(.*)/i);
      const number = match ? match[1].trim() : "";
      const text = match ? match[2].trim() : item;

      const columnDiv = document.createElement("div");
      columnDiv.className = "column col-lg-6 col-md-6 col-md-12";
      columnDiv.innerHTML = `
      <h2>${number}</h2>
      <div class="text">${text}</div>
    `;

      if (i < 2) {
        countersContainer.appendChild(columnDiv);
      } else {
        quoteContainer.appendChild(columnDiv); // third block, identical styling
      }
    });
  }
}

// CTA Section injection

document.addEventListener("DOMContentLoaded", () => {
  if (services[selectedServiceId]) {
    renderServiceDetails(services[selectedServiceId]);
  } else {
    console.error("Service not found");
  }
});
