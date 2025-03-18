const translations = {
  es: {
    profileTitle: "Doctor en Tecnología Educativa | Investigador Docente en EDIT | Especialista en Tecnologías Inmersivas",
    tags: ["Tecnología Educativa", "Mundos Virtuales", "Realidad Virtual", "Investigación", "IA Aplicada"],
    socialMedia: "Redes Sociales",
    linkedinSubtext: "Perfil profesional",
    twitterSubtext: "@ecoonis1",
    facebookSubtext: "Página oficial",
    instagramSubtext: "Fotos y actualizaciones",
    youtubeSubtext: "@ChristianJonathanAngelRueda",
    programming: "Programación",
    githubSubtext: "@ecoonis",
    research: "Investigación",
    researchgateSubtext: "Publicaciones académicas",
    googleScholarSubtext: "Citas y artículos",
    academiaSubtext: "Perfil académico",
    orcidSubtext: "0000-0002-4780-874X",
    footerMessage: "Gracias por visitar mi página personal. Si deseas contactarme para colaboraciones, proyectos o cualquier consulta, no dudes en hacerlo a través de mis redes sociales."
  },
  en: {
    profileTitle: "PhD in Educational Technology | Researcher and Educator in EDIT | Specialist in Immersive Technologies",
    tags: ["Educational Technology", "Virtual Worlds", "Virtual Reality", "Research", "Applied AI"],
    socialMedia: "Social Media",
    linkedinSubtext: "Professional profile",
    twitterSubtext: "@ecoonis1",
    facebookSubtext: "Official page",
    instagramSubtext: "Photos and updates",
    youtubeSubtext: "@ChristianJonathanAngelRueda",
    programming: "Programming",
    githubSubtext: "@ecoonis",
    research: "Research",
    researchgateSubtext: "Academic publications",
    googleScholarSubtext: "Citations and articles",
    academiaSubtext: "Academic profile",
    orcidSubtext: "0000-0002-4780-874X",
    footerMessage: "Thank you for visiting my personal page. If you want to contact me for collaborations, projects, or any inquiry, feel free to do so through my social networks."
  },
  ja: {
    profileTitle: "教育技術博士 | EDITの研究者・教育者 | イマーシブテクノロジー専門家",
    tags: ["教育技術", "バーチャルワールド", "バーチャルリアリティ", "研究", "応用AI"],
    socialMedia: "ソーシャルメディア",
    linkedinSubtext: "プロフェッショナルプロフィール",
    twitterSubtext: "@ecoonis1",
    facebookSubtext: "公式ページ",
    instagramSubtext: "写真とアップデート",
    youtubeSubtext: "@ChristianJonathanAngelRueda",
    programming: "プログラミング",
    githubSubtext: "@ecoonis",
    research: "研究",
    researchgateSubtext: "学術出版物",
    googleScholarSubtext: "引用と記事",
    academiaSubtext: "学術プロフィール",
    orcidSubtext: "0000-0002-4780-874X",
    footerMessage: "個人ページへのご訪問ありがとうございます。コラボレーション、プロジェクト、またはお問い合わせについては、ソーシャルネットワークを通じてお気軽にご連絡ください。"
  },
  de: {
    profileTitle: "Doktor der Bildungstechnologie | Forscher und Dozent in EDIT | Spezialist für immersive Technologien",
    tags: ["Bildungstechnologie", "Virtuelle Welten", "Virtuelle Realität", "Forschung", "Angewandte KI"],
    socialMedia: "Soziale Medien",
    linkedinSubtext: "Berufliches Profil",
    twitterSubtext: "@ecoonis1",
    facebookSubtext: "Offizielle Seite",
    instagramSubtext: "Fotos und Updates",
    youtubeSubtext: "@ChristianJonathanAngelRueda",
    programming: "Programmierung",
    githubSubtext: "@ecoonis",
    research: "Forschung",
    researchgateSubtext: "Akademische Publikationen",
    googleScholarSubtext: "Zitate und Artikel",
    academiaSubtext: "Akademisches Profil",
    orcidSubtext: "0000-0002-4780-874X",
    footerMessage: "Vielen Dank für den Besuch meiner persönlichen Seite. Wenn Sie mich für Zusammenarbeit, Projekte oder Anfragen kontaktieren möchten, können Sie dies gerne über meine sozialen Netzwerke tun."
  }
};

 
 function changeLanguage(lang) {
   document.querySelectorAll('.lang-btn').forEach(btn => {
     btn.classList.remove('active');
   });
   document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
   
   document.querySelector('.profile-description').textContent = translations[lang].profileTitle;
   
   const tagElements = document.querySelectorAll('.tag');
   for (let i = 0; i < tagElements.length && i < translations[lang].tags.length; i++) {
     tagElements[i].textContent = translations[lang].tags[i];
   }
   
   document.querySelector('.social-header h2').innerHTML = `<i class="fas fa-share-alt"></i> ${translations[lang].socialMedia}`;
   document.querySelector('.programming-header h2').innerHTML = `<i class="fas fa-code"></i> ${translations[lang].programming}`;
   document.querySelector('.research-header h2').innerHTML = `<i class="fas fa-flask"></i> ${translations[lang].research}`;
   
   const linkSubtexts = document.querySelectorAll('.link-subtext');
   linkSubtexts[0].textContent = translations[lang].linkedinSubtext;
   linkSubtexts[1].textContent = translations[lang].twitterSubtext;
   linkSubtexts[2].textContent = translations[lang].facebookSubtext;
   linkSubtexts[3].textContent = translations[lang].instagramSubtext;
   linkSubtexts[4].textContent = translations[lang].youtubeSubtext;
   linkSubtexts[5].textContent = translations[lang].githubSubtext;
   linkSubtexts[6].textContent = translations[lang].researchgateSubtext;
   linkSubtexts[7].textContent = translations[lang].googleScholarSubtext;
   linkSubtexts[8].textContent = translations[lang].academiaSubtext;
   linkSubtexts[9].textContent = translations[lang].orcidSubtext;
   
   document.querySelector('.footer p:first-child').textContent = translations[lang].footerMessage;
   
   localStorage.setItem('preferredLanguage', lang);
 }
 
 document.querySelectorAll('.lang-btn').forEach(btn => {
   btn.addEventListener('click', () => {
     changeLanguage(btn.getAttribute('data-lang'));
   });
 });
 
 document.addEventListener('DOMContentLoaded', () => {
   const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
   changeLanguage(savedLanguage);
 });