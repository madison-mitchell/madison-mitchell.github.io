import { createStore } from 'vuex'

export default createStore({
  state: {
    techSkills: [
      'C# .NET',
      'Java',
      'SQL',
      'JavaScript / Vue.js',
      'Tailwind CSS',
      'Bootstrap',
      'Object-Oriented Design',
      'Cloud (Azure)',
      'CI/CD tool sets (GIT, Azure, DevOps',
      'Salesforce Development',
    ],
    profSkills: [
      'Effective Communication',
      'Team Player',
      'Strong Problem Solver',
      'Good Time Management',
    ],
    education: {
      cert: 'Software Development',
      date: 'April 2022',
      school: 'We Can Code IT',
      location: 'Cleveland, OH',
    },
    interests: [
      'Photography',
      'Creating w/3D Printer',
      'Building PCs',
      'Reading Fantasy Novels',
      'Honda Grom Riding',
      'Exploring New Places',
    ],
    projects: {
      portfolio: {
        title: 'Portfolio Website',
        paragraph: [
          'Hope you\'re enjoying it thus far!'
        ],
        date: 'June 2023',
        url: 'http://madison-mitchell.github.io',
        img: 'PortfolioWebsite.png'
      },
      ohioansCare: {
        title: 'Ohioans Care',
        paragraph: [
          'Ohioans Care is a comprehensive platform that aims to provide integrated support for all Ohioans, addressing the challenges they face in accessing essential resources and information. It offers a centralized space for users to search and suggest local services, as well as engage with their community through discussions and coordination efforts.',
        ],
        description: [
          'Ohioans Care is a groundbreaking website developed by our innovative team, dedicated to providing comprehensive support and resources to the residents of Ohio. Designed with a user-centric approach, this platform aims to alleviate the burdens faced by individuals in accessing vital assistance throughout the state.',
          'At its core, Ohioans Care seeks to streamline the information landscape, ensuring that no Ohioan is left behind in their pursuit of help and support. Our visionary founder, Jo, drew inspiration from her firsthand experience as a social service worker, witnessing the struggles of her clients who missed out on available resources due to the disorganized nature of support systems across the state.',
          'With Ohioans Care, finding the assistance you need has never been easier. Our intuitive search functionality allows users to explore a diverse range of services tailored to their specific zip code. Furthermore, we empower our users to contribute to the platform by suggesting hidden gems and often overlooked resources in their local communities. Together, we can create a comprehensive network of support that leaves no one behind.',
          'Beyond its practical features, Ohioans Care fosters a vibrant and compassionate community. Our interactive community page serves as a hub for engaging discussions among neighbors. Whether you\'re a newcomer seeking to introduce yourself or a passionate advocate organizing collective efforts, Ohioans Care provides a platform where hearts are always in the right place.',
          'Discover the power of Ohioans Care as it revolutionizes the way Ohioans access and offer support for all aspects of life. Join us in creating a brighter future where no one is burdened by the complexities of navigating the support system alone.',
        ],
        date: 'April 2022',
        url: 'https://github.com/madison-mitchell/ohioans-care',
        img: 'OhioansCare.gif'
      },
      mysteryEducator: {
        title: 'Mystery Educator',
        paragraph: [
          'JAC Enterprises\' Mystery Educator is a captivating educational app designed for children aged 6 to 13. It offers an interactive and immersive experience, introducing kids to various areas of interest such as science, art, and history, aligning with the diverse adventures.'
        ],
        description: [
          'JAC Enterprises is an organization that specializes in offering niche adventures dedicated to learning about Earth\'s various ecosystems and unique terrains. Our motto is, “Vincit Qui Se Vincit” which means, “He/she conquers who conquers him/herself.”',
          'JAC prides itself on educating all their customers on what adventures are provided and what can be expected on a chosen adventure. Past applications built highlighted JAC\'s Spelunking!, EYA! bka Experience Your Aquarium!, Skip 2 My Cay! aka Island Hopping, and JT,B! bka Just Trek Baby! adventures.',
          'JAC\'s marketing department has been inundated by their clients, both past and present, with the fact that their children and children of their friends have been intrigued and interested in the places that they have ventured. In order to meet this interest, marketing has decided to create for children, aged 6 to 13, an education application that exposes children to the various aspects science, art, and history. All of these areas of studies encompasses the offerings provided by JAC Enterprises.',
          'JAC Enterprises has decided to open up a bidding/design competition to allow 3rd party consulting organizations to create a mystery educator application that will entertain and educate children about areas of interest that are exposed based upon the offerings of JAC Enterprises.',
        ],
        date: 'March 2022',
        url: 'https://github.com/madison-mitchell/mystery-educator',
        img: 'MysteryEducator.gif'
      },
      donutClicker: {
        title: 'Donut Clicker',
        paragraph: [
          'In Donut Clicker, you strive to gather as many donuts as possible by clicking on them repeatedly. Use the earned donuts to unlock upgrades, automate production, and expand your donut empire in this addictive and rewarding incremental game.'
        ],
        date: 'February 2022',
        url: 'https://github.com/madison-mitchell/Donut-Maker',
        img: 'DonutClicker.png'
      },
      islandHopping: {
        title: 'Island Hopping Adventures!',
        paragraph: [
          'JAC Enterprises offers exciting and educational adventures, allowing you to explore Earth\'s diverse ecosystems and terrains while promoting self-discovery. With their motto "Vincit Qui Se Vincit" - "He/she conquers who conquers him/herself" - they empower you through thrilling experiences like Spelunking!, EYA! bka Experience Your Aquarium!, and Just Trek adventures.'
        ],
        description: [
          'JAC Enterprises is an organization that specializes in offering niche adventures dedicated to learning about Earth\'s various ecosystems and unique terrains. Our motto is, “Vincit Qui Se Vincit” which means, “He/she conquers who conquers him/herself.”',
          'JAC prides itself on educating all their customers on what adventures are provided and what can be expected on a chosen adventure. Past applications built highlighted JAC\'s Spelunking! and EYA! bka Experience Your Aquarium! and Just Trek adventures.',
          'Recently, JAC\'s island hopping business has had considerable interest thus creating substantial growth in bookings and revenue and thus JAC Enterprises has decided to open up a bidding/design competition to allow 3rd party consulting organizations to create an application that will educate current and future clientele of what island hopping is and island hopping adventures offered by JAC Enterprises.',
        ],
        date: 'January 2022',
        url: 'https://github.com/madison-mitchell/JAC-Island-Hopping-Adventures',
        img: 'IslandHopping.gif'
      }
    },
    workExp: {
      progressive: {
        name: 'Progressive',
        dates: 'May 2022 - Present',
        jobTitle: 'IT Apps Programmer',
        location: 'Hybrid | Mayfield Village',
        bullets: [
          'Administer and maintain the Salesforce Org, ensuring its optimal performance and stability',
          'Perform Salesforce development tasks, including customization, configuration, and coding, to support business requirements',
          'Collaborate with cross-functional teams to gather and analyze project requirements for Salesforce implementation',
          'Assist in the creation and management of Salesforce projects, ensuring alignment with business goals and best practices',
          'Stay up-to-date with Salesforce updates, features, and industry trends to recommend improvements and drive innovation within the Salesforce ecosystem',
        ]
      },
      apple: {
        name: 'Apple',
        dates: 'July 2014 - May 2022',
        jobTitle: 'Team Manager Apprentice',
        location: 'Remote',
        bullets: [
          'Able to multitask within 5+ applications/systems, while communicating with co-workers and 3+ customers at once',
          'Able to analyze and resolve a variety of complex technical issues',
          'Excellent, effective communication skills using written and verbal skills',
          'Strong time management skills with the ability to work on multiple projects on a deadline',
          'Able to adopt to different communication styles',
          'Average 92% Customer Satisfaction Score, 10% above the role average',
          'Supports 10 Team Leads responsible for 35+ Advisors each with the transition to remote Customer Support from Retail',
        ]
      },
      bestBuy: {
        name: 'Best Buy',
        dates: 'February 2012 - July 2014',
        jobTitle: 'Sales Lead | Apple Expert',
        location: 'North Canton, OH',
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
