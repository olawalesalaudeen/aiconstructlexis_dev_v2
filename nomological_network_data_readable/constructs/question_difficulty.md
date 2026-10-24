# Question difficulty
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Question complexity, Example difficulty, Perceived difficulty, Query difficulty, Data hardness  

## State of the Field

The concept of question difficulty is broadly used to describe the inherent challenge a query or data point presents to a language model, though definitions vary on whether this is an intrinsic property of the data or relative to a model's capabilities. A prevalent view treats difficulty as model-dependent, where it is inversely correlated with a model's performance or represents a model's internal perception of task complexity inferred from failure rates. In contrast, a less common framing defines it as a latent trait of a question, independent of any single model and instead relative to a population of models, referred to as an 'item parameter' ("Reliable and Efficient Amortized Model-based Evaluation"). A distinct line of work focuses specifically on the difficulty of preference data for alignment, defining it as the challenge in distinguishing between preferred and rejected responses. Across these framings, the construct is most frequently operationalized through model performance metrics, such as validation loss or the distribution of failure probabilities. Other measurement approaches use proxies, such as the complexity of generated code for a task or CLIP-based similarity scores for preference pairs. In the provided literature, question difficulty is reported to influence human preference alignment and is studied alongside the general capabilities of models. Researchers use this construct to inform methods for adaptive compute allocation and to guide the selection of training samples for fine-tuning algorithms.

## Sources

**[BEST-Route: Adaptive LLM Routing with Test-Time Optimal Compute](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ding25d/ding25d.pdf) (as "Query difficulty")**
> The inherent complexity of a user query, determined by factors such as task requirements, ambiguity, and required depth of knowledge or reasoning.

**[Understanding Complexity in VideoQA via Visual Program Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/eyzaguirre25a/eyzaguirre25a.pdf) (as "Question complexity")**
> The inherent difficulty of a question for a machine learning model, which is inversely correlated with its performance.

**[Principled Data Selection for Alignment: The Hidden Risks of Difficult Examples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25f/gao25f.pdf) (as "Example difficulty")**
> The inherent level of challenge posed by a preference example in distinguishing the preferred from the rejected response, which depends on the model's capacity and is measurable via validation loss or learned step.

**[A Simple Model of Inference Scaling Laws](https://raw.githubusercontent.com/mlresearch/v267/main/assets/levi25a/levi25a.pdf) (as "Perceived difficulty")**
> The model's internal representation of task complexity, inferred from the distribution of failure probabilities across samples, where lower failure rates indicate easier tasks and higher rates indicate harder ones.

**[DAMA: Data- and Model-aware Alignment of Multi-modal LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lu25m/lu25m.pdf) (as "Data hardness")**
> The inherent difficulty of distinguishing between preferred and rejected responses in a preference pair, determined by the similarity gap between model outputs and the input image.

**[Reliable and Efficient Amortized Model-based Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/truong25c/truong25c.pdf)**
> The latent trait representing how hard a question is for the population of language models, independent of any single model's performance.

## Relationships

### Question difficulty →
- **Self-correction** (behaviors tasks) — *causes*
  > “Through iterative critique and correction, MCQG-SRefine significantly enhances the quality and difficulty of generated USMLE-style MCQs.”
  - [MCQG-SRefine: Multiple Choice Question Generation and Evaluation with Iterative Self-Critique, Correction, and Comparison Feedback](https://aclanthology.org/2025.naacl-long.538.pdf)
- **Alignment** (constructs) — *causes*
  > Preference data vary in difficulty, and overly difficult examples hinder alignment, by exceeding the model’s capacity. (Abstract)
  - [Principled Data Selection for Alignment: The Hidden Risks of Difficult Examples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25f/gao25f.pdf)

### → Question difficulty
- **Self-correction** (behaviors tasks) — *causes*
  > In terms of difficulty, MCQG-SRefine generates more challenging questions. Specifically, when provided with expert-identified topics and test points, there is an 80% reduction in easy questions, a 2.25-fold increase in medium questions, and a 4-fold increase in hard questions. (Section 1)
  - [MCQG-SRefine: Multiple Choice Question Generation and Evaluation with Iterative Self-Critique, Correction, and Comparison Feedback](https://aclanthology.org/2025.naacl-long.538.pdf)

### Associated with
- **Memorization** (constructs)
  > larger models can effectively learn from more difficult examples, confirming the direct relationship between model capacity and example difficulty threshold. (Section 4.4)
  - [Principled Data Selection for Alignment: The Hidden Risks of Difficult Examples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25f/gao25f.pdf)
