import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';

declare const google: any;

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [DatePipe, NgClass],
  styleUrls: ['./app.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mapElement', { static: false }) mapElement!: ElementRef;

  pseudo = 'Guilbert';
  name = 'Guilbert Kamgaing';
  title = 'Développeur Full-Stack & Freelance';
  bio =
    "Développeur passionné basé à Yaoundé, Cameroun. Spécialisé dans les technologies web modernes, le développement mobile et les solutions innovantes pour l'Afrique.";

  uploadStatus: string = '';
  activeSkillFilter: string = 'all';
  activeProjectFilter: string = 'all';

  private lat: number = 3.8772;
  private lon: number = 11.5167;

  // Toutes les compétences avec catégories
  allSkills: Skill[] = [
    // Langages
    { name: 'TypeScript/JavaScript', level: 90, category: 'langages' },
    { name: 'Python', level: 85, category: 'langages' },
    { name: 'Java', level: 80, category: 'langages' },
    { name: 'PHP', level: 75, category: 'langages' },
    { name: 'Dart', level: 82, category: 'langages' },
    { name: 'HTML5/CSS3', level: 95, category: 'langages' },
    { name: 'SQL', level: 85, category: 'langages' },
    { name: 'C#', level: 70, category: 'langages' },
    // Frameworks
    { name: 'Angular', level: 88, category: 'frameworks' },
    { name: 'React', level: 82, category: 'frameworks' },
    { name: 'Vue.js', level: 75, category: 'frameworks' },
    { name: 'Node.js/Express', level: 85, category: 'frameworks' },
    { name: 'Django', level: 75, category: 'frameworks' },
    { name: 'Laravel', level: 70, category: 'frameworks' },
    { name: 'Spring Boot', level: 65, category: 'frameworks' },
    { name: 'Flutter', level: 80, category: 'frameworks' },
    { name: 'Bootstrap/Tailwind', level: 90, category: 'frameworks' },
    // Bases de données
    { name: 'MySQL', level: 85, category: 'databases' },
    { name: 'PostgreSQL', level: 80, category: 'databases' },
    { name: 'MongoDB', level: 78, category: 'databases' },
    { name: 'Firebase', level: 75, category: 'databases' },
    { name: 'Redis', level: 65, category: 'databases' },
    { name: 'SQLite', level: 70, category: 'databases' },
    // Outils
    { name: 'Git/GitHub/GitLab', level: 90, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS/Azure', level: 65, category: 'tools' },
    { name: 'Jenkins/CI/CD', level: 60, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
    { name: 'Postman', level: 85, category: 'tools' },
    { name: 'Linux/Ubuntu', level: 80, category: 'tools' },
  ];

  filteredSkills: Skill[] = this.allSkills;

  // Parcours
  parcours = [
    {
      date: '2024 - Présent',
      title: 'Master Génie Logiciel et Réseau',
      organization: 'Université de Yaoundé I',
      description:
        'Spécialisation en architecture logicielle, cloud computing et sécurité réseau. Projets collaboratifs en Agile.',
      tags: ['Architecture Microservices', 'Cloud', 'Sécurité', 'Agile'],
    },
    {
      date: '2022 - 2024',
      title: 'Licence Professionnelle Développement Web',
      organization: 'Institut Universitaire de Technologie (IUT) Douala',
      description:
        "Formation intensive au développement web et mobile. Projets e-commerce et applications d'entreprise.",
      tags: ['Angular', 'Flutter', 'Node.js', 'MongoDB'],
    },
    {
      date: '2021 - 2022',
      title: 'Stage Développeur Full-Stack',
      organization: 'Startup Hub Cameroon - Yaoundé',
      description:
        "Développement d'applications web pour des startups locales. Intégration d'API REST et paiement mobile.",
      tags: ['React', 'Django', 'API REST', 'Mobile Money'],
    },
    {
      date: '2019 - 2022',
      title: 'BTS SIO - Option SLAM',
      organization: 'Lycée Technique de Yaoundé',
      description:
        'Solutions Logicielles et Applications Métiers. Réalisation de projets complets pour entreprises locales.',
      tags: ['Java', 'SQL', 'PHP', 'UML'],
    },
  ];

  // Projets
  allProjects = [
    {
      name: 'EmaPay - Paiement Mobile',
      description:
        'Application de paiement mobile intégrant Orange Money, MTN Mobile Money et carte bancaire pour les commerçants camerounais.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Mobile Money API'],
      github: 'https://github.com/NKOUAM/emapay',
      category: ['Angular', 'Node'],
    },
    {
      name: 'Yaoundé Event Hub',
      description:
        "Plateforme de réservation et promotion d'événements culturels à Yaoundé avec géolocalisation et billetterie.",
      tech: ['React', 'Django', 'PostgreSQL', 'Leaflet'],
      github: 'https://github.com/NKOUAM/yaounde-event-hub',
      category: ['React', 'Python'],
    },
    {
      name: 'AgriTech Cameroon',
      description:
        'Application mobile et web pour les agriculteurs camerounais : météo, prix des cultures, conseils agricoles.',
      tech: ['Flutter', 'Firebase', 'Node.js', 'OpenWeather API'],
      github: 'https://github.com/NKOUAM/agritech-cm',
      category: ['Flutter'],
    },
    {
      name: 'JobBoard Africa',
      description:
        "Plateforme d'emploi pour l'Afrique centrale avec matching CV/offres et messagerie intégrée.",
      tech: ['Angular', 'Laravel', 'MySQL', 'WebSocket'],
      github: 'https://github.com/NKOUAM/jobboard-africa',
      category: ['Angular', 'Node'],
    },
    {
      name: 'Real Estate Yaoundé',
      description:
        'Application immobilière pour la location et vente de biens à Yaoundé avec visites virtuelles.',
      tech: ['React', 'Express', 'MongoDB', 'Google Maps API'],
      github: 'https://github.com/NKOUAM/realestate-yde',
      category: ['React', 'Node'],
    },
    {
      name: 'E-Learning Academy',
      description:
        'Plateforme e-learning pour les étudiants camerounais avec cours vidéo, quiz et certifications.',
      tech: ['Flutter', 'Django', 'PostgreSQL', 'WebRTC'],
      github: 'https://github.com/NKOUAM/elearning-academy',
      category: ['Flutter', 'Python'],
    },
  ];

  filteredProjects = this.allProjects;

  // Données API temps réel
  locationData: any = null;
  weatherData: any = null;
  airQualityData: any = null;
  moonData: any = null;
  elevationData: any = null;
  timezoneData: any = null;

  // Coordonnées de contact
  contact = {
    email: 'angeguilbert10@gmail.com',
    phone: '+237658364422',
    phoneDisplay: '+237 658 364 422',
    github: 'https://github.com/NKOUAM',
    gitlab: 'https://gitlab.com/angeguilbert10',
    facebook: 'https://facebook.com/guilbert.kamgaing',
    tiktok: 'https://tiktok.com/@just_baham',
  };

  ngAfterViewInit() {
    this.initMap();
    this.fetchAllAPIData();
  }

  filterSkills(category: string) {
    this.activeSkillFilter = category;
    if (category === 'all') {
      this.filteredSkills = this.allSkills;
    } else {
      this.filteredSkills = this.allSkills.filter((skill) => skill.category === category);
    }
  }

  filterProjects(category: string) {
    this.activeProjectFilter = category;
    if (category === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.allProjects.filter((project) =>
        project.category.includes(category),
      );
    }
  }

  async fetchAllAPIData() {
    await Promise.all([
      this.fetchLocation(),
      this.fetchWeather(),
      this.fetchAirQuality(),
      this.fetchMoonPhase(),
      this.fetchElevation(),
      this.fetchTimezone(),
    ]);
  }

  async fetchLocation() {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${this.lat}&lon=${this.lon}`,
      );
      const data = await response.json();
      this.locationData = {
        city: data.address.city || data.address.town || data.address.village || 'Yaoundé',
        quartier: 'Emana',
        country: 'Cameroun',
        lat: this.lat,
        lon: this.lon,
      };
    } catch (error) {
      console.error('Erreur localisation:', error);
      this.locationData = {
        city: 'Yaoundé',
        quartier: 'Emana',
        country: 'Cameroun',
        lat: this.lat,
        lon: this.lon,
      };
    }
  }

  async fetchWeather() {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lon}&current_weather=true&timezone=auto`,
      );
      const data = await response.json();
      // Ajout d'humidité approximative car l'API gratuite ne la fournit pas toujours
      this.weatherData = {
        weather: [{ description: this.getWeatherDescription(data.current_weather.weathercode) }],
        main: { temp: data.current_weather.temperature, humidity: 78 },
        wind: { speed: data.current_weather.windspeed },
      };
    } catch (error) {
      console.error('Erreur météo:', error);
      this.weatherData = {
        weather: [{ description: 'Climat tropical humide' }],
        main: { temp: 26, humidity: 80 },
        wind: { speed: 5 },
      };
    }
  }

  async fetchAirQuality() {
    try {
      const response = await fetch(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${this.lat}&longitude=${this.lon}&current=us_aqi`,
      );
      const data = await response.json();
      const aqi = data.current?.us_aqi || 2;
      this.airQualityData = {
        list: [{ main: { aqi: Math.round(aqi) } }],
      };
    } catch (error) {
      console.error('Erreur qualité air:', error);
      this.airQualityData = { list: [{ main: { aqi: 2 } }] };
    }
  }

  async fetchMoonPhase() {
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const response = await fetch(
        `https://www.icalendar37.net/lunar-api/?year=${year}&month=${month}&day=${day}&lang=fr`,
      );
      const data = await response.json();
      const moonData =
        data[`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`];
      this.moonData = {
        phase: this.getMoonPhaseName(moonData?.phase || 0),
        illumination: moonData?.illumination || Math.floor(Math.random() * 100),
        age: moonData?.age || 7,
      };
    } catch (error) {
      console.error('Erreur phase lunaire:', error);
      this.moonData = { phase: '🌕 Pleine Lune', illumination: 100, age: 15 };
    }
  }

  async fetchElevation() {
    try {
      const response = await fetch(
        `https://api.open-elevation.com/api/v1/lookup?locations=${this.lat},${this.lon}`,
      );
      const data = await response.json();
      const elevation = data.results?.[0]?.elevation || 720;
      this.elevationData = { elevation: Math.round(elevation) };
    } catch (error) {
      console.error('Erreur altitude:', error);
      this.elevationData = { elevation: 726 };
    }
  }

  async fetchTimezone() {
    try {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/Africa/Douala`);
      const data = await response.json();
      this.timezoneData = {
        timezone: 'Afrique/Douala (WAT)',
        datetime: new Date(data.datetime),
      };
    } catch (error) {
      console.error('Erreur timezone:', error);
      this.timezoneData = {
        timezone: 'Afrique/Douala (WAT)',
        datetime: new Date(),
      };
    }
  }

  getWeatherDescription(code: number): string {
    const weatherCodes: Record<number, string> = {
      0: 'Ciel dégagé',
      1: 'Principalement dégagé',
      2: 'Partiellement nuageux',
      3: 'Nuageux',
      45: 'Brumeux',
      51: 'Bruine légère',
      61: 'Pluie modérée',
      63: 'Pluie',
      71: 'Neige légère',
      80: 'Averses de pluie',
      95: 'Orage',
    };
    return weatherCodes[code] || 'Conditions tropicales humides';
  }

  getMoonPhaseName(phase: number): string {
    const phases = [
      '🌑 Nouvelle Lune',
      '🌒 Premier Croissant',
      '🌓 Premier Quartier',
      '🌔 Gibbeuse Croissante',
      '🌕 Pleine Lune',
      '🌖 Gibbeuse Décroissante',
      '🌗 Dernier Quartier',
      '🌘 Dernier Croissant',
    ];
    return phases[Math.floor(phase * 8)] || phases[0];
  }

  getElevationDescription(elevation: number): string {
    if (elevation < 200) return 'Plaine - Terrain plat';
    if (elevation < 600) return 'Collines basses';
    if (elevation < 1200) return 'Collines de Yaoundé - Relief vallonné';
    return 'Plateau - Montagne';
  }

  getAQIClass(aqi: number): string {
    if (aqi <= 1) return 'aqi-good';
    if (aqi <= 2) return 'aqi-moderate';
    if (aqi <= 3) return 'aqi-unhealthy';
    if (aqi <= 4) return 'aqi-bad';
    return 'aqi-severe';
  }

  getAQIMessage(aqi: number): string {
    if (aqi <= 1) return 'Qualité excellente - Bon pour les activités extérieures';
    if (aqi <= 2) return 'Qualité modérée - Satisfaisante';
    if (aqi <= 3) return 'Sensible - Réduisez les efforts prolongés';
    if (aqi <= 4) return 'Mauvaise santé - Masque recommandé';
    return 'Dangereuse - Évitez de sortir';
  }

  initMap() {
    if (typeof google !== 'undefined' && this.mapElement) {
      const location = { lat: this.lat, lng: this.lon };
      const map = new google.maps.Map(this.mapElement.nativeElement, {
        center: location,
        zoom: 14,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#1a0b2e' }],
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#2a1a4e' }],
          },
        ],
      });

      new google.maps.Marker({
        position: location,
        map: map,
        title: 'Quartier Emana - Yaoundé, Cameroun',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png',
        },
      });
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  downloadCV() {
    const content = `
      === CV DE GUILBERT KAMGAING ===

      📍 Yaoundé, Quartier Emana - Cameroun
      📞 +237 658 364 422
      📧 angeguilbert10@gmail.com

      🎯 DÉVELOPPEUR FULL-STACK

      === COMPÉTENCES ===
      ${this.allSkills.map((s) => `- ${s.name}: ${s.level}%`).join('\n')}

      === LANGAGES MAÎTRISÉS ===
      ${this.allSkills
        .filter((s) => s.category === 'langages')
        .map((s) => `- ${s.name}: ${s.level}%`)
        .join('\n')}

      === FRAMEWORKS ===
      ${this.allSkills
        .filter((s) => s.category === 'frameworks')
        .map((s) => `- ${s.name}: ${s.level}%`)
        .join('\n')}

      === PROJETS ===
      ${this.allProjects.map((p) => `- ${p.name}: ${p.tech.join(', ')}`).join('\n')}

      === FORMATION ===
      ${this.parcours.map((p) => `- ${p.title} (${p.date}) - ${p.organization}`).join('\n')}

      === CONTACT ===
      GitHub: https://github.com/NKOUAM
      GitLab: https://gitlab.com/angeguilbert10
      Facebook: guilbert.kamgaing
      TikTok: @just_baham
    `;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Guilbert_Kamgaing.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  triggerFileUpload() {
    const fileInput = document.querySelector('.file-input') as HTMLInputElement;
    fileInput?.click();
  }

  onCVUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.uploadStatus = `📄 "${file.name}" téléchargé avec succès ! (${(file.size / 1024).toFixed(2)} KB)`;
      setTimeout(() => {
        this.uploadStatus = '';
      }, 5000);
    }
  }
}
