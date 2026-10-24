# Multilingual understanding
**Type:** Construct  
**Referenced in:** 12 papers  
**Also known as:** Cross-lingual understanding, Multilingual comprehension, Multilingual perception and comprehension, Multilingual language understanding  

## State of the Field

**Definition agreement:** Consensus. Most papers define multilingual understanding as a model's latent ability to process, comprehend, and answer or respond accurately across multiple languages, often stressing performance beyond a single dominant language and including low-resource languages. A few papers narrow this to transfer, tabular data, multimodal inputs, or preserving nuance, but these read as settings or emphases of the same core capability rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats multilingual understanding as a latent model ability to process, comprehend, and answer accurately across multiple languages, rather than only a single dominant language. Many definitions widen the coverage to local, underrepresented, understudied, high-resource, or low-resource languages. A smaller line of work uses the near label cross-lingual understanding for performing tasks across languages through transfer from one language to another, or for responding in a language different from the model's training-dominant language, and some papers broaden the construct to multimodal perception and comprehension or to multilingual response generation with linguistic and cultural nuance.

**Space of facets.** Papers organize the construct mainly by setting and coverage. Recurring facets are native usage versus cross-lingual and cross-cultural competence, question answering versus table reasoning, and text understanding versus multimodal perception and comprehension; some papers also pair it with regional knowledge or culturally specific video comprehension. The naming varies, with multilingual understanding, cross-lingual understanding, multilingual comprehension, multilingual perception and comprehension, and multilingual language understanding used for overlapping abilities, though the cross-lingual label more explicitly foregrounds transfer across languages.

**Space of measurement.** Operationalization is through five measurement instruments, C-Eval, CSRT, CVQA, Chatbot Arena, and INCLUDE, and no behavioral indicators are linked. The linked operationalizations are benchmark-style evaluation instruments: CVQA and INCLUDE are explicitly benchmarks, C-Eval appears in a broad benchmark suite, CSRT is used for evaluation that also includes safety, and Chatbot Arena evaluates multilingual understanding alongside other tasks using user queries. These measures mostly track the dominant definitions by testing whether models can answer or perform tasks across languages, while some narrow the setting to local languages, regional resources, or multilingual prompts.

**Links.** In these papers, the only explicit links are measurement links: multilingual understanding is measured by C-Eval, CSRT, CVQA, Chatbot Arena, and INCLUDE. No papers report causal, correlational, or other related-construct links for it.

## Sources

**[CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The latent capacity to process and answer questions accurately across multiple languages, including underrepresented and understudied ones.

**[Multi-Head Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab05dc8bf36a9f66edbff6992ec86f56-Paper-Conference.pdf) (as "Cross-lingual understanding")**
> The ability to comprehend and perform tasks involving multiple languages, particularly by transferring knowledge from one language to another.

**[A Culturally-diverse Multilingual Multimodal Video Benchmark & Model](https://aclanthology.org/2025.emnlp-main.1012.pdf) (as "Multilingual comprehension")**
> The latent ability of a model to understand and generate responses in multiple languages, particularly across both high- and low-resource languages, while preserving linguistic and cultural nuance.

**[TVQACML: Benchmarking Text-Centric Visual Question Answering in Multilingual Chinese Minority Languages](https://aclanthology.org/2025.emnlp-main.705.pdf) (as "Multilingual perception and comprehension")**
> The model's capability to process and understand information presented in multiple languages, especially in a multimodal context.

**[INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ced46a50befedcb884ccf0cbe8c3ad23-Paper-Conference.pdf) (as "Multilingual language understanding")**
> The latent ability of an LLM to comprehend and answer questions accurately across multiple languages rather than only in one dominant language.

## Relationships

### Multilingual understanding →
- **CVQA** (measurements) — *measured_by*
  > “CVQA is written in both English and local languages, enabling us to benchmark multilingual MLLMs and English-only MLLMs.”
  - [CVQA: Culturally-diverse Multilingual Visual Question Answering Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1568882ba1a50316e87852542523739c-Paper-Datasets_and_Benchmarks_Track.pdf)
- **INCLUDE** (measurements) — *measured_by*
  > we design a pipeline to collect a large multilingual language understanding benchmark (i.e., INCLUDE) by collecting regional resources (e.g., educational, professional, and practical tests) that are specific to countries and originally created by native speakers of each country’s official languages. (Section 1)
  - [INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/ced46a50befedcb884ccf0cbe8c3ad23-Paper-Conference.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > The most popular one is the Chatbot Arena (Chiang et al., 2024b), which contains over one million user queries and evaluates models in various tasks such as code, math, and multilingual understanding. (Section 5)
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)
- **CSRT** (measurements) — *measured_by*
  > The CSRT enables LLM evaluation in terms of both safety and multilingual understanding. (Figure 1)
  - [Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://aclanthology.org/2025.acl-long.657.pdf)
- **C-Eval** (measurements) — *measured_by*
  > a broad suite of general benchmarks—...CEval...—that cover ... multilingual understanding. (Section 4.1)
  - [Dynamic Expert Specialization: Towards Catastrophic Forgetting-Free Multi-Domain MoE Adaptation](https://aclanthology.org/2025.emnlp-main.932.pdf)
- **XNLI** (measurements) — *measured_by*
  > We use the widely adopted XNLI dataset (Conneau et al., 2018) for evaluation, which assesses sentence understanding in multiple languages by determining the relationship between sentence pairs. (Section 3.3)
  - [From Neurons to Semantics: Evaluating Cross-Linguistic Alignment Capabilities of Large Language Models via Neurons Alignment](https://aclanthology.org/2025.acl-long.1406.pdf)
