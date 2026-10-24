# Closed-book question answering
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Closed-book retrieval  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats closed-book question answering as answering knowledge-intensive or factual questions from the model's internal or parametric knowledge, without external documents, evidence, supporting context, or reference materials. Several papers describe it as recalling parametric memory or information from the weights, and the common setup is simply to give the model a question and have it provide an answer with no supporting evidence in the prompt. A smaller usage extends this from question answering to closed-book retrieval, where a query is answered or information is retrieved without any external knowledge source.

**Variants.** Papers most often study it under the names closed-book QA or CBQA, usually on factual or knowledge-intensive question answering tasks. The examples named across papers include TriviaQA, WebQuestions, Natural Questions, and EntityQuestions, with EntityQuestions described as a CBQA-specific dataset covering knowledge across 24 topics from Wikipedia, and Natural Questions and WebQuestions described as datasets sourced from natural web queries. A smaller variant is memory-intensive closed-book retrieval, including a phone-book retrieval task.

**Space of elicitation and scores.** Three measurement instruments are linked to it, all through measured_by relations: EntityQuestions, TriviaQA, and WebQuestions. These linked instruments are all question answering datasets, and papers use them to elicit answering from internal knowledge rather than from supplied evidence.

**What it is taken as evidence of.** At the construct level, papers link it only to Task generalization, and that link is recorded as related rather than as a direct measurement or causal claim: one paper describes closed/open-book QA as task types used alongside question prefixes in a task generalization setting. Separately, papers relate it to Hallucination, describing hallucinations in CBQA as incorrect or fabricated answers. Beyond these related links, no additional construct link is recorded.

## Sources

**[Adaptive Chameleon  or Stubborn Sloth: Revealing the Behavior of Large Language Models in Knowledge Conflicts](https://proceedings.iclr.cc/paper_files/paper/2024/file/99261adc8a6356b38bcf999bba9a26dc-Paper-Conference.pdf)**
> The task of answering questions based on general knowledge stored in the model's parameters, without access to external documents.

**[Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf) (as "Closed-book retrieval")**
> The task of answering a query or retrieving information without access to any external context or knowledge source.

## Relationships

### Closed-book question answering →
- **TriviaQA** (measurements) — *measured_by*
  > Closed book QA: TriviaQA (Joshi et al., 2017), web_questions (Berant et al., 2013) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > Closed book QA: TriviaQA (Joshi et al., 2017), web_questions (Berant et al., 2013) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **EntityQuestions** (measurements) — *measured_by*
  > we use the ENTITYQUESTIONS (Sciavolino et al., 2021) to construct the training and testing datasets for our experiments, which is a CBQA-specific dataset containing knowledge across 24 topics extracted from Wikipedia (Section 3.1).
  - [Analyzing the Effects of Supervised Fine-Tuning on Model Knowledge from Token and Parameter Levels](https://aclanthology.org/2025.emnlp-main.25.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > One significant challenge in CBQA is addressing hallucinations-instances where the model generates incorrect or fabricated answers (Section 2).
  - [Analyzing the Effects of Supervised Fine-Tuning on Model Knowledge from Token and Parameter Levels](https://aclanthology.org/2025.emnlp-main.25.pdf)
