import type { ReadingWritingQuestionSet } from '../types/diagnosticTest';
import { gdpTableChart, internetSpeedChart, greenhouseGasChart } from './images';

export const readingWritingQuestions: ReadingWritingQuestionSet[] = [
  {
    questionType: 'CENTRAL IDEAS AND DETAILS',
    easy: {
      id: 'rw_central_easy',
      section: 'reading-writing',
      questionType: 'CENTRAL IDEAS AND DETAILS',
      difficulty: 'easy',
      question: 'Which choice best states the main idea of the text?',
      passage: 'The following text is adapted from The Art of Travel by Francis Galton (1855). When a new country has to be traversed, a compass is, of course, the primary requisite; but it is useless without a knowledge of the magnetic variations. This is given on all good maps. The chronometer is also an essential, as without it the longitude cannot be determined. Then comes the problem of finding the latitude, which is done by observing the altitude of the sun at noon or of the pole star. All these instruments are useless, however, without the skill to use them and the ability to interpret their readings. Travel in unknown lands is as much an art as a science, requiring adaptability and keen observation.',
      options: [
        'Navigating unexplored territories requires not only instruments but also the expertise to utilize them effectively.',
        'The chronometer and compass are the most crucial tools for accurately determining one\'s position in new countries.',
        'Understanding magnetic variations is more important than knowing how to read a compass when exploring new lands.',
        'The challenges of travel in new countries are primarily scientific, involving complex calculations of latitude and longitude.'
      ],
      correctAnswer: 0
    },
    medium: {
      id: 'rw_central_medium',
      section: 'reading-writing',
      questionType: 'CENTRAL IDEAS AND DETAILS',
      difficulty: 'medium',
      question: 'Which choice best states the main idea of the text?',
      passage: 'The following text is adapted from The Interpretation of Dreams by Sigmund Freud (1899). Dreams have long been a subject of fascination and speculation, often viewed as prophetic messages or divine insights. However, the scientific approach to dreams began to emerge with the recognition that they are not arbitrary occurrences but rather products of the human mind, reflecting internal states and hidden processes. Early psychological theories, including my own, posited that dreams serve as a disguised fulfillment of repressed wishes, offering a unique pathway to understanding the unconscious. While the specific interpretations may vary, the fundamental idea that dreams hold psychological significance, rather than merely being random neural firings, remains a cornerstone of modern dream research.',
      options: [
        'Dreams are primarily a means by which the unconscious mind communicates repressed desires and internal conflicts.',
        'Early psychological theories dismissed the idea of dreams having any prophetic or divine significance.',
        'The shift from viewing dreams as supernatural phenomena to understanding them as psychologically meaningful mental products marked a key development.',
        'Modern dream research has definitively proven that dreams are disguised fulfillments of repressed wishes, as Freud suggested.'
      ],
      correctAnswer: 2
    },
    hard: {
      id: 'rw_central_hard',
      section: 'reading-writing',
      questionType: 'CENTRAL IDEAS AND DETAILS',
      difficulty: 'hard',
      question: 'Which choice best states the main idea of the text?',
      passage: 'The following text is from Walden by Henry David Thoreau (1854). I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practice resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms, and, if it proved to be mean, why then to get the whole and genuine meanness of it, and publish its meanness to the world; or if it were sublime, to know it by experience, and be able to give a true account of it in my next excursion.',
      options: [
        'The author seeks a simplified existence in nature to confront the fundamental realities of life and gain profound personal understanding.',
        'The pursuit of a profound and authentic life requires escaping the mundane complexities of society and embracing solitude.',
        'Living deliberately necessitates rejecting all forms of resignation and pursuing a life of extreme austerity and self-sufficiency.',
        'The author believes that the true essence of life can only be uncovered through a rigorous examination of its inherent virtues and defects.'
      ],
      correctAnswer: 0
    }
  },
  {
    questionType: 'INFERENCES',
    easy: {
      id: 'rw_inferences_easy',
      section: 'reading-writing',
      questionType: 'INFERENCES',
      difficulty: 'easy',
      question: 'Which quotation from The Adventures of Sherlock Holmes most effectively illustrates the claim?',
      passage: 'The Adventures of Sherlock Holmes is an 1892 collection of stories by Arthur Conan Doyle. In one story, the narrator describes Sherlock Holmes\'s exceptional deductive abilities, indicating that his conclusions are based on meticulous observation rather than mere guesswork, saying ___________.',
      options: [
        '"Data! Data! Data! I can\'t make bricks without clay."',
        '"It is an old maxim of mine that when you have excluded the impossible, whatever remains, however improbable, must be the truth."',
        '"My mind is like a motor-car: it wants to be kept in condition by hard work."',
        '"I am a brain, Watson. The rest of me is a mere appendix."'
      ],
      correctAnswer: 1
    },
    medium: {
      id: 'rw_inferences_medium',
      section: 'reading-writing',
      questionType: 'INFERENCES',
      difficulty: 'medium',
      question: 'Which quotation from a historical analysis of the Industrial Revolution would most effectively support the historian\'s claim?',
      passage: 'In an article discussing the societal impact of the Industrial Revolution, a historian claims that the rise of factories and mechanized production, by centralizing labor and requiring rigid schedules, fundamentally altered the traditional family unit, whose structure had previously been organized around the rhythms of household or localized agricultural work, thereby creating a distinct separation between the domestic sphere and the realm of economic activity.',
      options: [
        '"The burgeoning urban centers of the Industrial Age saw an unprecedented influx of laborers from rural areas, leading to significant challenges in housing and sanitation within densely populated areas, which in turn fostered new forms of social organization and public health initiatives."',
        '"Prior to industrialization, the household often functioned as the primary unit of production, with all family members, from the youngest children to the eldest adults, contributing to tasks such as weaving, spinning, or farming, thereby integrating economic activity directly into daily domestic life."',
        '"With the establishment of large-scale factories and the demand for a disciplined workforce, individuals, including women and children, increasingly left the familial home for fixed hours in noisy, often dangerous, work environments, disrupting traditional patterns of shared labor and familial oversight."',
        '"While some small-scale cottage industries and artisan workshops persisted well into the nineteenth century, their economic viability was severely undermined by the efficiency and mass-production capabilities of machine-driven manufacturing, leading to a gradual but inevitable decline in their prevalence."'
      ],
      correctAnswer: 2
    },
    hard: {
      id: 'rw_inferences_hard',
      section: 'reading-writing',
      questionType: 'INFERENCES',
      difficulty: 'hard',
      question: 'Which finding, if true, would most directly support the second research team\'s hypothesis?',
      passage: 'To detect information about minute changes in ocean currents, a team of oceanographers led by Dr. Evelyn Reed and Dr. Javier Moreno conducted experiments on a species of deep-sea squid (Onycoteuthis horribilis). Their research focused on the specialized dermal cells near the mantle, hypothesizing that these cells are hypersensitive to extremely subtle pressure differentials caused by micro-turbulences in the water, which in turn allows the squid to precisely locate and ambush prey in the abyssal zone where visual cues are negligible. They theorize that the ratio of mantle circumference to cell density plays a critical role, as increased density in areas of greater circumference theoretically amplifies sensitivity. Based on initial observations suggesting that pressure differential detection is most pronounced in areas with the highest ratio, a second team of researchers further hypothesized that the specific regions of the mantle where information acquisition is paramount are likely endowed with a significantly higher concentration of these mechanoreceptive dermal cells than other, less critical areas.',
      options: [
        'O. horribilis specimens with naturally occurring higher dermal cell densities across their entire mantle exhibit a statistically significant improvement in prey capture rates in laboratory simulations compared to specimens with average densities.',
        'In dissected O. horribilis mantle tissue, the regions furthest from the main feeding appendages show a lower overall density of dermal cells, yet still possess some capacity to detect very broad and consistent pressure gradients.',
        'The most effective O. horribilis hunters in competitive feeding trials are found to possess a specialized patch of dermal cells on the dorsal mantle that exhibits an average cell density 2.5 times greater than the density found in any other region of the mantle or in other, less successful squid.',
        'When O. horribilis are exposed to simulated micro-turbulences, neural activity mapping reveals that the initial and most intense signals originate from a widespread network of dermal cells across the entire mantle, rather than being localized to specific, high-density areas.'
      ],
      correctAnswer: 2
    }
  },
  {
    questionType: 'CROSS TEXT CONNECTIONS',
    easy: {
      id: 'rw_cross_easy',
      section: 'reading-writing',
      questionType: 'CROSS TEXT CONNECTIONS',
      difficulty: 'easy',
      question: 'The author of Text 1 and the author of Text 2 both discuss which topic?',
      passage: 'Text 1: The domestication of the horse, a pivotal event in human history, is widely believed to have begun in the Eurasian Steppe around 3500 BCE. Archaeological evidence, including bit wear on ancient horse teeth and the presence of horse bones in human settlements, supports this timeline. This development profoundly impacted transportation, warfare, and agriculture, leading to more efficient travel and the ability to cultivate larger areas of land. The widespread adoption of horses facilitated trade and communication across vast distances, enabling the rise of complex societies.\n\nText 2: While the traditional narrative places horse domestication squarely in the Eurasian Steppe, recent genetic studies on ancient horse DNA suggest a more complex picture. Some researchers now propose that domestication might have occurred independently in multiple locations or that the initial domestication event was followed by significant genetic contributions from wild horse populations across a broader geographical range. This ongoing research challenges the idea of a single, definitive origin point for the domesticated horse.',
      options: [
        'The historical impact of horse domestication on human societies.',
        'The earliest methods used to domesticate wild horses.',
        'The genetic differences between ancient and modern horse breeds.',
        'The geographical origin and timeline of horse domestication.'
      ],
      correctAnswer: 3
    },
    medium: {
      id: 'rw_cross_medium',
      section: 'reading-writing',
      questionType: 'CROSS TEXT CONNECTIONS',
      difficulty: 'medium',
      question: 'Based on the texts, the author of Text 1 and the author of Text 2 would most likely agree with which statement about modern theatrical staging?',
      passage: 'Text 1: In the history of theatrical performance, the proscenium stage, characterized by its "picture frame" arch, largely dominated Western theater from the Renaissance well into the 20th century. This architectural feature creates a clear separation between the audience and the performers, fostering an illusionistic experience where the audience views the action as if through an invisible fourth wall. This design choice, while excellent for spectacle and grand scenery, often limited audience engagement to passive observation, prioritizing visual perspective and elaborate stagecraft over direct interaction or shared space.\n\nText 2: Contemporary theater, reacting against the perceived limitations of traditional proscenium staging, has increasingly explored alternative configurations. Thrust stages, with their audience on three sides, and arena stages (theater-in-the-round), where the audience encircles the performance space, deliberately blur the boundary between actor and spectator. This shift aims to create a more immersive and communal experience, encouraging active participation and diminishing the illusion of a separate, contained world on stage, thereby fostering a different relationship between the performance and its viewers.',
      options: [
        'Modern theatrical staging techniques primarily seek to reintroduce the concept of elaborate spectacle into dramatic productions.',
        'Contemporary stage designs aim to alter the relationship between the performers and the audience by reducing physical and conceptual barriers.',
        'The historical dominance of the proscenium stage has made it difficult for audiences to adapt to newer, more interactive theatrical forms.',
        'Current trends in stage design often prioritize the aesthetic beauty of the set over the audience\'s direct experience of the performance.'
      ],
      correctAnswer: 1
    },
    hard: {
      id: 'rw_cross_hard',
      section: 'reading-writing',
      questionType: 'CROSS TEXT CONNECTIONS',
      difficulty: 'hard',
      question: 'Based on the texts, how would Dr. Anya Petrova and colleagues (Text 2) most likely respond to the information presented in Text 1?',
      passage: 'Text 1: "Ocean Worlds," a class of exoplanets beyond our solar system, are theorized to possess vast subsurface oceans, making them prime candidates for harboring extraterrestrial life. Computer models developed by Dr. Alistair Finch and Dr. Beatrice Chen have determined that for potentially habitable ocean worlds, the range of the "tidal heating zone" (THZ)—the distance from a star where gravitational forces are sufficient to maintain liquid water via internal heating—begins at about 2 Astronomical Units (AU) for icy moons orbiting gas giants. In 2023, Dr. Nikko Mandalay and her team identified Kepler-186 f, an exoplanet orbiting a red dwarf star, as a leading "ocean world" candidate, suggesting its location at the inner edge of the THZ.\n\nText 2: In a 2024 paper, Dr. Anya Petrova and her colleagues claimed that the unique atmospheric composition of certain "ocean world" candidates, specifically those with elevated levels of methane and ammonia, leads to an increased greenhouse effect and greater surface temperatures compared to planets with more typical hydrogen-rich atmospheres. Unlike earlier assessments, Petrova et al.\'s calculations therefore placed the inner edge for these potentially habitable ocean worlds\' THZ as far out as 3.5 AU, significantly extending the predicted boundary for their habitability based purely on tidal heating considerations, while also suggesting a broader array of atmospheric conditions could support liquid water.',
      options: [
        'By arguing that Kepler-186 f and other proposed ocean world candidates are unlikely to support life because their atmospheric composition is too sparse to retain sufficient heat.',
        'By stating that the chemical composition of the atmosphere of the ocean world candidate Kepler-186 f suggests that its habitability is contingent upon a more nuanced understanding of its internal heat generation.',
        'By maintaining that Dr. Mandalay and her team relied on a model whose estimates of the "tidal heating zone" for certain ocean world candidates might be underestimating the actual range of habitability.',
        'By observing that unlike the ocean world candidates Dr. Mandalay\'s team identified, most other types of planets with high methane and ammonia atmospheres are actually located closer to their host stars.'
      ],
      correctAnswer: 2
    }
  },
  {
    questionType: 'INFORMATION AND IDEAS',
    easy: {
      id: 'rw_info_easy',
      section: 'reading-writing',
      questionType: 'INFORMATION AND IDEAS',
      difficulty: 'easy',
      question: 'According to the text, what is one way that non-Indigenous museums typically differ from the cultural centers operated by the Bribri people and the Maleku Nation?',
      passage: 'In what is now Costa Rica, the Bribri people operate the Bribri Cultural Center. Relying on ancestral knowledge to guide the design of exhibits, this institution presents Bribri history and cultural traditions to the tribe\'s citizens. The Maleku Nation, a tribe in a different region of Costa Rica, employs a similar strategy in its own cultural center. Both centers contrast with museums that are not Indigenous-led; when displaying Indigenous artifacts, such museums tend to anticipate mainly non-Indigenous audiences and rely on Eurocentric strategies for designing exhibits.',
      options: [
        'The museums feature fewer ancient artifacts in their exhibits.',
        'The museums are often somewhat larger in size.',
        'The museums focus on national history rather than tribal culture.',
        'The museums are largely aimed at non-Indigenous audiences.'
      ],
      correctAnswer: 3
    },
    medium: {
      id: 'rw_info_medium',
      section: 'reading-writing',
      questionType: 'INFORMATION AND IDEAS',
      difficulty: 'medium',
      question: 'Which choice best describes the function of the reference to the camp as Professor Eldridge\'s "personal redoubt"?',
      passage: 'The following text is from a historical analysis of 19th-century scientific expeditions. It was evening when the geologists completed their field notes. Professor Eldridge had already traversed the rugged terrain numerous times to confirm that his assistants had departed yet. The remote camp, nestled amidst the formidable peaks, had always been his personal redoubt, as he utilized it for undisturbed contemplation. Now, every evening, it transformed into a bustling field laboratory, as his apprentices unpacked their samples, and it was never in order for its reversion to a serene observatory the following dawn.',
      options: [
        'It reveals that Professor Eldridge feels as if his authority has been challenged by allowing his apprentices into a space he considers his own.',
        'It indicates the satisfaction that Professor Eldridge feels when he uses his outdoor camp for varying scientific purposes.',
        'It characterizes the camp as a place where Professor Eldridge can retreat for solitary intellectual pursuits.',
        'It introduces an idea that helps explain Professor Eldridge\'s apparent eagerness for his apprentices to leave the field site.'
      ],
      correctAnswer: 2
    },
    hard: {
      id: 'rw_info_hard',
      section: 'reading-writing',
      questionType: 'INFORMATION AND IDEAS',
      difficulty: 'hard',
      question: 'Which choice best describes the function of the reference to the Piazza Navona as Cardinal Pamphili\'s "singular aesthetic dominion" and the importance of its "sheer scale and intricate ornamentation"?',
      passage: 'The following text is from a monograph on the architectural evolution of Baroque-era urban planning. In the grand urban schemes of 17th-century Rome, the public piazza was not merely an open space but a meticulously orchestrated theatrical stage for the populace. Cardinal Pamphili, a formidable patron of the arts, considered the Piazza Navona his singular aesthetic dominion, as he frequently directed its iterative renovations to reflect his familial prestige and theological convictions. Every evening, its vibrant markets transformed into a resplendent arena for nocturnal promenades, and it was never entirely devoid of the animated throngs that constituted its dynamic, albeit transient, population. The sheer scale and intricate ornamentation of its fountains, particularly Bernini\'s Fountain of Four Rivers, were paramount in conveying the Papacy\'s temporal and spiritual authority to both the city\'s inhabitants and its esteemed visitors, thus ensuring that the piazza functioned as a potent symbol of power.',
      options: [
        'It suggests that Cardinal Pamphili viewed the piazza as a private estate, thereby indicating a burgeoning shift toward secular patronage in the arts, despite its elaborate religious symbolism.',
        'It underscores Cardinal Pamphili\'s profound personal investment in the piazza\'s artistic development, while simultaneously highlighting how its design features were instrumental in projecting an intended image of authority.',
        'It implies that the piazza\'s aesthetic appeal was primarily a consequence of its organic evolution rather than a result of deliberate, centralized planning under Cardinal Pamphili\'s direction.',
        'It reveals Cardinal Pamphili\'s autocratic control over the city\'s public spaces, which inadvertently led to the neglect of other, less centrally located urban areas and their artistic embellishments.'
      ],
      correctAnswer: 1
    }
  },
  {
    questionType: 'OVERALL STRUCTURE',
    easy: {
      id: 'rw_structure_easy',
      section: 'reading-writing',
      questionType: 'OVERALL STRUCTURE',
      difficulty: 'easy',
      question: 'Which choice best describes the overall structure of the text?',
      passage: 'In Zulu, an Indigenous language from Southern Africa, the word ukudla means "to eat," whereas ukudlada is used to refer to "eating a small amount or repeatedly." This phenomenon, in which an element of a root word is repeated, sometimes with modification, within another word that is related to the root word, is called reduplication. In this case, the element "dla" in ukudla gets repeated in ukudlada. There are many examples of this type of reduplication in Zulu.',
      options: [
        'It describes the relationship between Zulu and several other languages, raises a question about the nature of that relationship, and then answers that question.',
        'It identifies the most frequently occurring words in Zulu, explains why it is difficult to translate those words into English, and then provides examples of languages other than English into which those words can be translated.',
        'It presents some specific words in Zulu, describes the general linguistic phenomenon exemplified by those words, and then states that this phenomenon occurs frequently in Zulu.',
        'It explains the phenomenon of reduplication, discusses why reduplication has been controversial among scholars, and then argues that an analysis of Zulu could help resolve that controversy.'
      ],
      correctAnswer: 2
    },
    medium: {
      id: 'rw_structure_medium',
      section: 'reading-writing',
      questionType: 'OVERALL STRUCTURE',
      difficulty: 'medium',
      question: 'Which choice best describes the overall structure of the text?',
      passage: 'Dr. Eleanor Vance and colleagues relied on historical ecological data (hED)—genomic data incidentally preserved in museum specimens housed in natural history collections—to reconstruct the dietary habits of extinct megafauna. Although this methodological approach can yield invaluable insights into past ecosystems, it remains a relatively underutilized resource, primarily because hED is often to some extent degraded, a situation not easily remediable under current analytical paradigms and with extant DNA amplification technologies. Consequently, despite its promise, its widespread application in paleoecological studies is currently constrained.',
      options: [
        'It presents a scientific study that relied on a particular approach, then describes a barrier to the widespread adoption of that approach.',
        'It evaluates a research methodology used in a particular study, then explains how scientists may overcome difficulties inherent to that methodology.',
        'It summarizes the findings of a scientific study, then discusses the possibility of other researchers replicating those findings in future studies.',
        'It exemplifies a common method of genomic data analysis, then details the difficulties in adapting that method to new circumstances.'
      ],
      correctAnswer: 0
    },
    hard: {
      id: 'rw_structure_hard',
      section: 'reading-writing',
      questionType: 'OVERALL STRUCTURE',
      difficulty: 'hard',
      question: 'Which choice best states the overall structure of the text?',
      passage: 'The following text is from George Eliot\'s 1866 novel Felix Holt, The Radical. In the text, the narrator provides a discursive commentary on the protagonist\'s intellectual disposition, directly alluding to an unarticulated internal struggle concerning his public perception versus his private convictions. It was to be hoped that Mr. Transome, the younger, had not, in his arduous legal education, entirely divested himself of that ingenuous perspicacity which enables one to discern the unvarnished reality beneath the veneer of societal approbation. We are, alas, often beguiled by the airy-vessels of our own conceits; for if we but gather a few negligible morsels that seem to nourish our windy self-subsistence! The very faculty for genuine discernment, for truly apprehending another\'s essence, tends to dissipate. Indeed, it was fortunate for the younger Mr. Transome that he remained oblivious, or at least strategically indifferent, to the prevailing sentiments expressed by his more seasoned parliamentary colleagues regarding his burgeoning reformist zeal.',
      options: [
        'The narrator expresses a lamentation concerning the pervasive self-deception inherent in human nature and subsequently implies that a character\'s unawareness of external judgments may, fortuitously, preserve his intellectual integrity.',
        'The narrator comments on the fact that a character remains ostensibly oblivious to how his nascent political endeavors are appraised by others and then generalizes about the pervasive human susceptibility to self-flattery.',
        'The narrator summarizes an earlier ideological conflict involving a specific character and then anticipates the subsequent ramifications this conflict will precipitate in that character\'s political career.',
        'The narrator intimates that a character is not highly regarded by his associates and then employs an intricate metaphorical comparison to elucidate why this collective negative assessment is ultimately justified.'
      ],
      correctAnswer: 1
    }
  },
  {
    questionType: 'PURPOSE',
    easy: {
      id: 'rw_purpose_easy',
      section: 'reading-writing',
      questionType: 'PURPOSE',
      difficulty: 'easy',
      question: 'Which choice best states the main purpose of the text?',
      passage: 'Pluto is the first dwarf planet in our solar system to be observed with a dynamic atmosphere that sometimes collapses. A team of astrophysicists using the Atacama Large Millimeter/submillimeter Array (ALMA) in Chile detected significant seasonal changes in Pluto\'s atmospheric pressure, which were previously too subtle or too distant to measure accurately. Pluto now provides unique insights into the behavior of volatile atmospheres on distant celestial bodies.',
      options: [
        'To note a new finding about the atmospheric conditions on Pluto.',
        'To explain how the ALMA telescope works.',
        'To describe the geological features of dwarf planets.',
        'To discuss the history of astronomy in Chile.'
      ],
      correctAnswer: 0
    },
    medium: {
      id: 'rw_purpose_medium',
      section: 'reading-writing',
      questionType: 'PURPOSE',
      difficulty: 'medium',
      question: 'Which choice best describes the main purpose of the text?',
      passage: 'The following text is from Edward Bellamy\'s 1888 utopian novel Looking Backward. The novel depicts a society transformed by technological and social progress. In the context of this excerpt, the narrator is describing the remarkable efficiency of the new economic system. Under this system, every citizen receives an equal share of the nation\'s resources, and all work contributes to the collective good. The elimination of competition and the pursuit of individual profit has resulted in unprecedented levels of cooperation and productivity. The transformation has been so complete that the chaotic struggles and inequalities of the late 19th century now seem like the fevered dreams of a bygone era.',
      options: [
        'To contrast the narrator\'s idealized society with the economic conditions of Bellamy\'s own time.',
        'To demonstrate how technological advancement naturally leads to social equality.',
        'To argue that competition is essential for maintaining high levels of productivity.',
        'To illustrate the practical challenges of implementing a utopian economic system.'
      ],
      correctAnswer: 0
    },
    hard: {
      id: 'rw_purpose_hard',
      section: 'reading-writing',
      questionType: 'PURPOSE',
      difficulty: 'hard',
      question: 'Which choice best describes the function of the concluding sentence in the context of the passage as a whole?',
      passage: 'The following text is from Virginia Woolf\'s 1925 novel Mrs. Dalloway. In this passage, the protagonist reflects on the nature of memory and personal identity. Clarissa had always been struck by the discontinuity, rather than the unity, of the mind. How strange it was that people should be so different from what they had been even five minutes before! The self seemed to be nothing more than a collection of impressions, constantly shifting and reforming. Yet there was something permanent beneath all these surface changes—a core that remained, however altered the external circumstances. Sometimes she could almost catch a glimpse of this essential self, like seeing one\'s reflection in troubled water before the wind disturbs it again. This fleeting recognition of her true nature filled her with both exhilaration and melancholy, for it confirmed that she was both more and less than she had ever imagined.',
      options: [
        'It resolves the apparent contradiction between the discontinuity and continuity of personal identity by suggesting that both aspects are simultaneously true.',
        'It provides a concrete example of how external circumstances can fundamentally alter one\'s sense of self.',
        'It emphasizes the difficulty of achieving any meaningful understanding of one\'s own psychological complexity.',
        'It introduces a new concern about the reliability of memory that undermines the previous discussion of identity.'
      ],
      correctAnswer: 0
    }
  },
  {
    questionType: 'COMMAND OF EVIDENCE - QUANTITATIVE',
    easy: {
      id: 'rw_evidence_quant_easy',
      section: 'reading-writing',
      questionType: 'COMMAND OF EVIDENCE - QUANTITATIVE',
      difficulty: 'easy',
      question: 'Which choice most effectively uses data from the table to complete the statement?',
      passage: 'A researcher analyzing global economic development compiled data on GDP per capita for five countries. The data shows significant variations in economic development levels across different regions.',
      figureImage: gdpTableChart,
      options: [
        'India has the lowest GDP per capita at $2,600, which is significantly lower than the other countries.',
        'Norway has the highest GDP per capita, exceeding Spain\'s by more than double.',
        'The GDP per capita increases steadily from India to Norway without any exceptions.',
        'Mexico and Spain have similar GDP per capita levels, both falling in the middle range.'
      ],
      correctAnswer: 0
    },
    medium: {
      id: 'rw_evidence_quant_medium',
      section: 'reading-writing',
      questionType: 'COMMAND OF EVIDENCE - QUANTITATIVE',
      difficulty: 'medium',
      question: 'Which choice most effectively uses data from the table to illustrate the digital divide between regions?',
      passage: 'A telecommunications analyst studied internet connectivity across global regions, examining download speeds, upload speeds, and latency to understand regional digital infrastructure differences. The findings reveal substantial disparities in internet performance worldwide.',
      figureImage: internetSpeedChart,
      options: [
        'North America leads in download speed at 180 Mbps, while Africa has the slowest at 40 Mbps, creating a 140 Mbps gap.',
        'All regions show consistently high upload speeds, with North America and Europe exceeding 50 Mbps.',
        'Latency remains relatively uniform across all regions, ranging only from 15ms to 50ms.',
        'Asia (Excluding China) demonstrates the most balanced performance across all three metrics.'
      ],
      correctAnswer: 0
    },
    hard: {
      id: 'rw_evidence_quant_hard',
      section: 'reading-writing',
      questionType: 'COMMAND OF EVIDENCE - QUANTITATIVE',
      difficulty: 'hard',
      question: 'Which choice most effectively uses data from the graph to support the claim that greenhouse gas emissions have been decoupled from economic growth?',
      passage: 'Environmental economists studying the relationship between economic development and emissions analyzed U.S. data from 1990 to 2020. The research aims to determine whether economic growth can occur without proportional increases in greenhouse gas emissions, a concept known as "decoupling."',
      figureImage: greenhouseGasChart,
      options: [
        'Real GDP grew steadily while total emissions remained relatively flat, demonstrating absolute decoupling.',
        'Population growth paralleled GDP growth, indicating that per capita metrics are more reliable indicators.',
        'Emissions per capita and emissions per GDP both declined significantly, showing improved efficiency.',
        'The convergence of all trend lines by 2020 suggests that economic and environmental factors have reached equilibrium.'
      ],
      correctAnswer: 2
    }
  },
  {
    questionType: 'RHETORICAL SYNTHESIS',
    easy: {
      id: 'rw_synthesis_easy',
      section: 'reading-writing',
      questionType: 'RHETORICAL SYNTHESIS',
      difficulty: 'easy',
      question: 'The student wants to contrast stratus clouds and cumulus clouds. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      passage: 'While researching different types of clouds, a student has taken the following notes:\nClouds are formed when water vapor condenses around microscopic particles.\nStratus clouds are characterized by horizontal, sheet-like layers.\nStratus clouds often produce a light mist or drizzle.\nCumulus clouds are characterized by fluffy, vertically developed shapes.\nCumulus clouds are typically associated with fair weather.\nStratus clouds form close to the ground, often covering entire areas.\nCumulus clouds form at higher altitudes, appearing as distinct, separated masses.',
      notes: '• Clouds form when water vapor condenses around microscopic particles\n• Stratus clouds have horizontal, sheet-like layers\n• Stratus clouds produce light mist or drizzle\n• Cumulus clouds have fluffy, vertically developed shapes\n• Cumulus clouds are associated with fair weather\n• Stratus clouds form close to ground, covering entire areas\n• Cumulus clouds form at higher altitudes as distinct masses',
      options: [
        'Stratus clouds are formed when water vapor condenses around microscopic particles, as are cumulus clouds.',
        'Stratus clouds are characterized by horizontal, sheet-like layers, whereas cumulus clouds are characterized by fluffy, vertically developed shapes.',
        'Stratus clouds often produce a light mist or drizzle, while cumulus clouds are typically associated with fair weather.',
        'Two types of clouds, stratus and cumulus, are both formed when water vapor condenses, but they appear at different altitudes.'
      ],
      correctAnswer: 1
    },
    medium: {
      id: 'rw_synthesis_medium',
      section: 'reading-writing',
      questionType: 'RHETORICAL SYNTHESIS',
      difficulty: 'medium',
      question: 'The student wants to compare the density of granite and basalt. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      passage: 'While researching a topic, a student has taken the following notes:\nGranite is an intrusive igneous rock, meaning it forms from magma cooling slowly beneath Earth\'s surface.\nBasalt is an extrusive igneous rock, meaning it forms from lava cooling quickly on Earth\'s surface.\nGranite typically has large, visible mineral grains.\nBasalt typically has fine-grained or microscopic mineral grains.\nThe average density of granite is 2.7 grams per cubic centimeter (g/cm³).\nThe average density of basalt is 3.0 g/cm³.\nGranite is lighter in color, often pink, white, or gray.\nBasalt is darker in color, usually black or dark gray.',
      notes: '• Granite is intrusive igneous rock (magma cooling slowly beneath surface)\n• Basalt is extrusive igneous rock (lava cooling quickly on surface)\n• Granite has large, visible mineral grains\n• Basalt has fine-grained or microscopic mineral grains\n• Granite density: 2.7 g/cm³\n• Basalt density: 3.0 g/cm³\n• Granite is lighter in color (pink, white, gray)\n• Basalt is darker in color (black, dark gray)',
      options: [
        'Granite is an intrusive igneous rock, while basalt is an extrusive igneous rock, and they have different densities.',
        'Both granite and basalt are types of igneous rock, but granite is lighter in color, and basalt is darker.',
        'Granite has large, visible mineral grains, whereas basalt has fine-grained or microscopic mineral grains, despite their differing densities.',
        'The average density of granite is 2.7 grams per cubic centimeter, while the average density of basalt is 3.0 grams per cubic centimeter, indicating basalt is denser.'
      ],
      correctAnswer: 3
    },
    hard: {
      id: 'rw_synthesis_hard',
      section: 'reading-writing',
      questionType: 'RHETORICAL SYNTHESIS',
      difficulty: 'hard',
      question: 'The student wants to make a precise generalization about the central philosophical debate concerning artificial intelligence as reflected in these notes. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      passage: 'While researching the philosophical implications of artificial intelligence, a student has taken the following notes:\nThe Turing Test, devised by Alan Turing, posits that if a machine\'s conversational responses are indistinguishable from a human\'s, it exhibits intelligence.\nThe Chinese Room argument, proposed by John Searle, contends that mere symbol manipulation, as demonstrated by a machine passing the Turing Test, does not constitute genuine understanding or consciousness.\nSearle\'s thought experiment illustrates a scenario where a person, lacking knowledge of Chinese, processes Chinese symbols purely by following rules, thus mimicking understanding without possessing it.\nProponents of strong AI assert that a sufficiently programmed digital computer genuinely possesses cognitive states, akin to human minds.\nConversely, critics of strong AI maintain that syntactic operations, however complex, are insufficient to generate semantic content or phenomenal consciousness.',
      notes: '• Turing Test: machine intelligence if responses indistinguishable from human\n• Chinese Room argument: symbol manipulation ≠ genuine understanding/consciousness\n• Searle\'s experiment: following rules can mimic understanding without possession\n• Strong AI proponents: programmed computers have genuine cognitive states\n• Strong AI critics: syntactic operations insufficient for semantic content/consciousness',
      options: [
        'The debate centers on whether artificial intelligence can ever truly achieve cognitive states and genuine understanding, or if its apparent intelligence is merely a sophisticated simulation of human thought.',
        'Alan Turing\'s and John Searle\'s differing views on machine intelligence have profoundly influenced the trajectory of contemporary artificial intelligence research and development.',
        'The philosophical discourse surrounding artificial intelligence is predominantly concerned with establishing empirical benchmarks for machine performance, such as the Turing Test, to define intelligence.',
        'Strong AI advocates primarily focus on the pragmatic utility of symbol manipulation, while their detractors prioritize the development of machines capable of conscious experience.'
      ],
      correctAnswer: 0
    }
  }
];