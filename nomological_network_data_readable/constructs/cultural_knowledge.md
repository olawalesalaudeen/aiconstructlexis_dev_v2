# Cultural knowledge
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Understanding of Indian culture, Cultural literacy  

## State of the Field

**Definition agreement:** Consensus. Most papers define cultural knowledge as a model's latent or stored understanding of culture-specific facts, norms, values, concepts, and practices, often with the function of correctly interpreting prompts and generating contextually appropriate responses. A few definitions narrow the scope to particular domains or communities, and one describes the underlying shared knowledge of a community rather than the model's representation of it, but the dominant usage is the same core phenomenon.

**Space of definitions.** Across the surveyed work, the prevailing usage treats cultural knowledge as a latent or internal model property: stored, implicit, or retrievable understanding of culture-specific facts, norms, values, practices, beliefs, and local context that supports interpreting queries or producing contextually appropriate responses. Most definitions stay close to this framing, though they vary in scope, from broad coverage of history, religion, cuisine, and social norms to narrower settings such as food-related knowledge or culturally specific factual recall in Filipino contexts. One paper instead uses the label cultural literacy for a shared, translinguistic body of community-specific cultural and factual knowledge, and then treats models' knowledge of culturally embedded facts as a proxy for that notion.

**Space of facets.** When papers spell out the construct, they usually do so by listing domains rather than by proposing formal subtypes. The recurring domains are norms and values, history, cuisine or food, art, religion, legal frameworks, geographical markers, and region-specific practices, and one paper says its coverage spans a wide range of 11 domains. Several papers also describe this as the knowledge component within broader culture-focused evaluation, while a contrasting line separates it from meta-cultural competence, arguing that doing well on culture-specific test beds shows knowledge of the cultures tested, not the ability to operate in a new culture.

**Space of measurement.** Operationalization is benchmark-heavy: papers link cultural knowledge to four measurement instruments, Candle, FilBench, INCLUDE, and M3Exam, and to one behavioral indicator overall. The named instruments make the construct concrete through general cultural benchmarks, a Filipino-centric benchmark whose cultural knowledge category tests factual and culturally specific recall, multilingual exam questions that require cultural knowledge, and collections of license or certification exams plus non-translated humanities and social science content intended to capture regional and cultural knowledge. These operationalizations mostly align with definitions centered on stored or retrievable knowledge, although the cultural literacy framing explicitly treats knowledge of culturally embedded facts as a proxy.

**Links.** Beyond measurement, only causal links are reported. One paper claims a causal relationship from cultural knowledge to Harmful content detection, stating that more comprehensive knowledge about Chinese culture is part of effectively detecting harmful memes, and another claims a causal relationship from cultural knowledge to Cultural understanding, with evidence that cultural awareness leverages cultural knowledge to detect inappropriate interactions; no correlational or generic related links are reported.

## Sources

**[Is Translation All You Need? A Study on Solving Multilingual Tasks with Large Language Models](https://aclanthology.org/2025.naacl-long.485.pdf)**
> The latent trait reflecting an LLM's internalized understanding of cultural norms, values, and practices, which may be accessed when contextual cues such as country or value are provided.

**[Do You Know About My Nation? Investigating Multilingual Language Models' Cultural Literacy Through Factual Knowledge](https://aclanthology.org/2025.emnlp-main.756.pdf) (as "Cultural literacy")**
> The shared body of translinguistic cultural and factual knowledge specific to a community or nation, which is essential for effective communication and understanding within that context.

## Relationships

### Cultural knowledge →
- **Harmful content detection** (behaviors tasks) — *causes*
  > introducing more comprehensive knowledge about Chinese culture are both crucial for effectively detecting harmful memes. (Section 5.4)
  - [Towards Comprehensive Detection of Chinese Harmful Memes](https://proceedings.neurips.cc/paper_files/paper/2024/file/17fc467c11997914127c001fdc801bea-Paper-Datasets_and_Benchmarks_Track.pdf)
- **INCLUDE** (measurements) — *measured_by*
  > Our data collection focuses on license and certification exams that capture regional knowledge of specific countries (in their official languages), and non-translated academic content from the humanities and social sciences to capture cultural knowledge. (Section 3.1)
  - [INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ced46a50befedcb884ccf0cbe8c3ad23-Paper-Conference.pdf)
- **M3Exam** (measurements) — *measured_by*
  > we choose M3Exam (Zhang et al., 2023a), as the questions are real-world natural data from different languages instead of translating from English and require strong multilingual proficiency and cultural knowledge to perform well. (Section 3.3)
  - [Is Translation All You Need? A Study on Solving Multilingual Tasks with Large Language Models](https://aclanthology.org/2025.naacl-long.485.pdf)
- **Candle** (measurements) — *measured_by*
  > Fine-tuning with CULTUREINSTRUCT outperforms the base LLMs significantly on multiple types of cultural benchmarks, including: (i) benchmarks for general cultural knowledge - CULTURALBENCH (Chiu et al., 2024), CANDLE (Nguyen et al., 2023), and ETICOR (Dwivedi et al., 2023) (Section 4.1)
  - [CultureInstruct: Curating Multi-Cultural Instructions at Scale](https://aclanthology.org/2025.naacl-long.465.pdf)
- **FilBench** (measurements) — *measured_by*
  > “FILBENCH, a Filipino-centric benchmark designed to evaluate LLMs across a diverse set of tasks and capabilities in Filipino, Tagalog, and Cebuano. We carefully curate the tasks in FILBENCH to reflect the priorities and trends of NLP research in the Philippines such as Cultural Knowledge”
  - [FilBench: Can LLMs Understand and Generate Filipino?](https://aclanthology.org/2025.emnlp-main.127.pdf)

### Associated with
- **Cultural understanding** (constructs)
  > Cultural Awareness, which leverages cultural knowledge to detect inappropriate interactions.
  - [SocialCC: Interactive Evaluation for Cultural Competence in Language Agents](https://aclanthology.org/2025.acl-long.1594.pdf)
