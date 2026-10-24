# CosmosQA
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Cosmos QA  

## State of the Field

**What it is.** Across papers, the prevailing description is a large-scale dataset or benchmark for commonsense-based reading comprehension. Most definitions present it as multiple-choice questions based on reading comprehension passages that require commonsense reasoning, while one paper specifies four answer options and highlights questions about human behaviors, intentions, and social interactions. A smaller line of work describes it more broadly as a real-world NLP classification dataset or as a resource for narrative understanding and inference.

**What it is claimed to measure.** Papers use CosmosQA to measure one construct, commonsense reasoning, and three behavioral indicators, chain of thought, machine reading comprehension, and question answering. The construct-level usage is concentrated on commonsense reasoning, while the behavioral-indicator links are spread across several framings rather than converging on one. In these claims, papers variously describe it as an evaluation dataset for machine reading comprehension, a common sense reasoning dataset used when measuring chain of thought, and one of the question answering datasets in a broader task collection.

**Space of uses.** Across papers, it appears as one component of broader evaluation suites. Authors place it alongside Social IQA and QuAIL in question answering setups, with BoolQ and SciQ in NLP classification settings, and with GSM8K plus medical QA datasets in mixed reasoning evaluations. In these contexts, papers position it as an evaluation dataset, a question answering task, or a common sense reasoning dataset for out-of-distribution and weak-to-strong generalization experiments.

## Sources

**[Relating Misfit to Gain in Weak-to-Strong Generalization Beyond the Squared Loss](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mulgund25a/mulgund25a.pdf)**
> A large-scale dataset of commonsense-based reading comprehension questions, used to evaluate NLP classification performance.

**[Representations Shape Weak-to-Strong Generalization: Theoretical Insights and Empirical Predictions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xue25d/xue25d.pdf) (as "Cosmos QA")**
> Reading comprehension dataset involving commonsense reasoning, used to evaluate W2SG in narrative understanding and inference.

## Relationships

### → CosmosQA
- **Commonsense reasoning** (constructs) — *measured_by*
  > Common sense Q&A (CosmosQA) (Huang et al., 2019): Common sense questions ... to demonstrate how common sense reasoning is affected by writing style.
  - [Persona-Augmented Benchmarking: Evaluating LLMs Across Diverse Writing Styles](https://aclanthology.org/2025.emnlp-main.1155.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > These datasets encompass diverse tasks, covering three Question Answering datasets: Huang et al.’s (2019) Cosmos QA, Sap et al.’s (2019) Social IQA, and Rogers et al.’s (2020) QuAIL; (Section 5.2)
  - [To See a World in a Spark of Neuron: Disentangling Multi-Task Interference for Training-Free Model Merging](https://aclanthology.org/2025.emnlp-main.793.pdf)
