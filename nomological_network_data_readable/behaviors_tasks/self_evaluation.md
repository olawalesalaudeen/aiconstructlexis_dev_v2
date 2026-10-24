# Self-evaluation
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Inconsistency identification, Self-review, Self-assessment, Self-grading  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats self-evaluation as a model judging its own output, usually for correctness or quality, after generating a summary, answer, reasoning step, solution, or other text. What counts as the behavior is typically an explicit self-judgment, such as a score, a correctness decision, a confidence level, a likelihood like P(true), or written feedback about issues and advice; some papers also use it to decide which of two answers is better. A smaller line of work narrows the task to checking dialogue responses against their context, rating generated definitions, formulations, and code from execution results, pre-checking an abstract's novelty against a paper database, or asking whether the model's own output is an instance of a concept.

**Variants.** Papers use several nearby labels for this behavior, including inconsistency identification, self-review, self-assessment, and self-grading. The settings vary widely, with recurring examples in summarization, reasoning and search, harmlessness-oriented text appraisal, instruction-following uncertainty, dialogue consistency reflection, scientific abstract novelty checks, and execution-based evaluation of generated code and formulations. In broader workflows, individual papers also claim causal relationships from self-evaluation to self-correction, describing that the model can abandon erroneous paths and select the correct one, and from self-evaluation to text generation, stating that evaluation can potentially improve the quality of generated text.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers usually operationalize it through prompts that ask the model to score or judge its own output, emit a confidence level, produce a true or false likelihood, assign self-rewards, or return ratings and feedback paragraphs that report issues and advice. In summarization, one paper further defines a self-evaluation bias rate as the difference between an LLM's score for its own summaries and the average score assigned by other evaluators.

**What it is taken as evidence of.** Papers give little direct evidence about what broader construct self-evaluation indicates. The only linked construct is Confidence, and that connection is framed through measured_by claims in both directions: one paper states both that Confidence is measured by Self-evaluation and that Self-evaluation is measured by Confidence, using the model's score and the probability of the token it responds with to self-evaluate. No other construct link appears in the surveyed papers.

## Sources

**[Towards Multi-dimensional Evaluation of LLM Summarization across Domains and Languages](https://aclanthology.org/2025.acl-long.702.pdf)**
> An LLM assessing the quality of its own generated summary, potentially exhibiting bias in scoring.

**[Enhancing Goal-oriented Proactive Dialogue Systems via Consistency Reflection and Correction](https://aclanthology.org/2025.acl-long.1050.pdf) (as "Inconsistency identification")**
> The observable behavior of a model analyzing its own output against a context and explicitly identifying and categorizing types of inconsistencies.

**[Many Heads Are Better Than One: Improved Scientific Idea Generation by A LLM-Based Multi-Agent System](https://aclanthology.org/2025.acl-long.1368.pdf) (as "Self-review")**
> A final check where an agent assesses the novelty of a generated abstract by comparing it against a database of existing papers.

**[Planning Anything with Rigor: General-Purpose Zero-Shot Planning with LLM-based Formalized Programming](https://proceedings.iclr.cc/paper_files/paper/2025/file/a1c8a68e52499c9396854e3f967e37c0-Paper-Conference.pdf) (as "Self-assessment")**
> Evaluating whether the generated definition, formulation, and code are correct based on the execution result.

**[Potemkin Understanding in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mancoridis25a/mancoridis25a.pdf) (as "Self-grading")**
> Evaluating whether a generated response or answer to a question is correct according to the model's own understanding of a concept.

## Relationships

### Self-evaluation →
- **Self-correction** (behaviors tasks) — *causes*
  > Since the model possesses self-evaluation and exploration capabilities, it can abandon erroneous paths and select the correct one (Figure 1).
  - [GRAT: Guiding Retrieval-Augmented Reasoning through Process Rewards Tree Search](https://aclanthology.org/2025.acl-long.1352.pdf)
- **Entropy** (measurements) — *measured_by*
  > Traditional methods include token probability (Jiang et al., 2021), perplexity (Si et al., 2022), and entropy (Huang et al., 2023). (Section 2)
  - [Large Language Models Have Intrinsic Meta-Cognition, but Need a Good Lens](https://aclanthology.org/2025.emnlp-main.171.pdf)
- **Text generation quality** (constructs) — *causes*
  > This result suggests that evaluation can potentially improve the quality of the generated text, which serves as a stepping stone for building RLC method. (Section 4.3)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)

### Associated with
- **Confidence** (constructs)
  > We define confidence by utilizing the score and the probability of the token responded by the LLM to self-evaluate.
  - [Enhancing Graph Of Thought: Enhancing Prompts with LLM Rationales and Dynamic Temperature Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/c87245c9e8882bc1b6d4ec343d430e71-Paper-Conference.pdf)
