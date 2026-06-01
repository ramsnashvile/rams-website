export type Shloka = {
  id: string;
  title: string;
  devanagari?: string;
  kannada?: string;
  transliteration: string;
  translation: string;
  source?: string;
};

export const shlokas: Shloka[] = [
  {
    id: "raghavendra-guru",
    title: "Guru Raghavendra",
    transliteration:
      "Poojyaaya Raghavendraaya satyadharma rathaaaya cha | Bhajataam kalpavrikshaaya namataam kaamadhenave ||",
    translation:
      "Salutations to worshipful Raghavendra, charioteer of truth and dharma, wish-fulfilling tree and celestial cow to those who adore Him.",
    source: "Raghavendra Stotra",
  },
  {
    id: "krishnarpana",
    title: "Krishnarpanamastu",
    transliteration:
      "Bharathi RamaNa mukhya PraNaantargata Sri Krishnaarpanamastu",
    translation:
      "Dedicated to Sri Krishna, who resides in the life-breath of Sri Raghavendra Swami.",
  },
  {
    id: "gurustotram",
    title: "Guru Stotram",
    transliteration:
      "Gurur Brahma Gurur Vishnu Gurur Devo Maheshwara | Guruh Sakshaat Param Brahma Tasmai Shri Gurave Namah ||",
    translation:
      "The Guru is Brahma, Vishnu, and Shiva; the Guru is the Supreme Brahman — salutations to that Guru.",
  },
];
