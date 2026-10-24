# Binary classification
**Type:** Behavior  
**Referenced in:** 15 papers  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is a task where a model must assign one of exactly two labels to an input. Definitions most often describe either a categorical decision over text or a constrained output space with only two allowed outputs, for example "True" and "False"; other papers give domain-specific pairs such as real or fake, offensive or non-offensive, entailment or non-entailment, and positive or negative. Some descriptions place the same pattern in tabular prediction or image forgery detection, but the common criterion remains choosing one of two predefined classes.

**Variants.** Papers study this behavior in several settings and use nearby names such as "BC" and "binary task." The reported variants include instruction-identified binary classification, natural language inference, sentiment analysis, paraphrase detection, positive versus negative review tasks, tabular prediction, face forgery detection, and offensive language detection. One paper also discusses an in-context binary classification setting and describes it as a special case of general multi-class classification.

**Space of elicitation and scores.** Papers link binary classification to two measurement instruments, ETHICS and RTE. Both linked instruments are described as datasets: ETHICS through its "Justice" and "Commonsense" datasets, which involve binary classification based on basic moral concepts, and RTE as a binary classification NLI dataset.

**What it is taken as evidence of.** No construct is linked to binary classification, so the papers do not present it as evidence of a higher-level construct. The only other linked behavior is in-context classification, which one paper treats as related, stating that in-context binary classification is a special case of general multi-class classification.

## Sources

**[Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf)**
> An observable output pattern where the model is constrained to generate one of two predefined labels, such as "True" or "False".

## Relationships

### Binary classification →
- **RTE** (measurements) — *measured_by*
  > Output comparison of pretrained and fine-tuned mT5 models vs. fine-tuned with ProMoT on the RTE binary classification NLI dataset (Table 1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)
- **ETHICS** (measurements) — *measured_by*
  > We use the “Justice” and “Commonsense” datasets from ETHICS (Hendrycks et al., 2020), which involve binary classification based on basic moral concepts. (Section 5.3)
  - [Representations Shape Weak-to-Strong Generalization: Theoretical Insights and Empirical Predictions](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xue25d/xue25d.pdf)

### Associated with
- **In-context classification** (behaviors tasks)
  > In this section, we study the learning dynamics of a single-layer transformer for in-context binary classification. It is a special case of the general multi-class classification.
  - [On the Training Convergence of Transformers for In-Context Classification of Gaussian Mixtures](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25q/shen25q.pdf)
