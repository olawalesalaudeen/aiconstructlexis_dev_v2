# Legal question answering
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Legal open-ended question answering, Legal compliance question answering, Legal reading comprehension  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats it as answering legal-domain questions with relevant and accurate responses based on legal knowledge. Some papers make this more explicit as retrieving and applying, or synthesizing, relevant legal knowledge and reasoning patterns for user-submitted questions. Smaller strands narrow the task to open-ended questions arising in actual legal scenarios, where responses draw on understanding, analysis, and judgment, to reading-comprehension questions answered from a provided legal text, or to compliance questions whose success criterion is the correct label, permitted, prohibited, or not applicable, under a stated regulation.

**Variants.** Papers use several task labels and settings for this behavior. Alongside the generic legal question answering label, variants include legal open-ended question answering, legal reading comprehension, and legal compliance question answering; the settings mentioned include international citizenship questions, real-world legal Q&A data from JUSTIA, questions based on provided legal texts, and compliance cases under regulations such as GDPR, HIPAA, or the EU AI Act. Some work also places the task in an examination setting described as evaluating the professional skills of legal practitioners.

**Space of elicitation and scores.** Only one measurement instrument is linked to it, Human evaluation, a human-judged instrument. One paper reports that legal question answering is measured by Human evaluation on legal generation tasks, and no other instrument is linked.

**What it is taken as evidence of.** No paper links this behavior to a construct. The papers therefore do not specify which construct it is taken to indicate.

## Sources

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal open-ended question answering")**
> Responding to questions that arise in actual legal scenarios, requiring understanding, analysis, and judgment.

**[BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)**
> The observable task of answering questions based on legal knowledge, specifically related to international citizenship.

**[Context Reasoner: Incentivizing Reasoning Capability for Contextualized Privacy and Safety Compliance via Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.44.pdf) (as "Legal compliance question answering")**
> Producing correct classifications of whether a given legal case is permitted, prohibited, or not applicable under specific regulations such as GDPR, HIPAA, or EU AI Act.

**[LexEval: A Comprehensive Chinese Legal Benchmark for Evaluating Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2cb40fc022ca7bdc1a9a78b793661284-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Legal reading comprehension")**
> Answering questions that require understanding and extracting information from a provided legal text.

## Relationships

### Legal question answering →
- **Human evaluation** (measurements) — *measured_by*
  > Human evaluation on legal generation tasks. (Table 5)
  - [UniLR: Unleashing the Power of LLMs on Multiple Legal Tasks with a Unified Legal Retriever](https://aclanthology.org/2025.acl-long.584.pdf)
