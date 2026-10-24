# Synthetic data generation
**Type:** Behavior  
**Referenced in:** 18 papers  
**Also known as:** Synthetic claim generation, Synthetic demonstration generation, Synthetic example generation, Ghost example construction, Synthetic label generation, Synthetic dataset generation  

## State of the Field

Across the surveyed literature, synthetic data generation is most commonly described as the process of using a language model to produce labeled examples for training or data augmentation. This approach is frequently presented as a practical solution to "mitigate the shortage of training data" or avoid the need for large, manually labeled datasets. The behavior is typically operationalized by prompting an LLM with few-shot examples, such as providing "8-shot examples from the development set" to generate new input text, or creating new question-SQL pairs to help a model understand a database schema. While most papers focus on creating training data, a few distinct applications are also described. These include generating "synthetic demonstrations" for in-context learning, sometimes under differential privacy constraints, and producing "synthetic labels" for model evaluation where an AI model acts as a judge. One paper also details a specialized use, "ghost example construction," to generate prompts that replicate a model's behavior for analytical purposes. This behavior is studied alongside `Generation diversity` and `Generalization`, and some work reports that it boosts performance on downstream tasks like `Text classification` and `Code generation`.

## Sources

**[Auto-GDA: Automatic Domain Adaptation for Efficient Grounding Verification in Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eb6233e02f7d9efbb84acd839a996fb-Paper-Conference.pdf) (as "Synthetic claim generation")**
> Generating new claim sentences from evidence and a desired label, often in the style of example claims.

**[Data-adaptive Differentially Private Prompt Synthesis for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/96d00450ed65531ffe2996daed487536-Paper-Conference.pdf) (as "Synthetic demonstration generation")**
> Creating few-shot example pairs from private data for later use as prompt demonstrations.

**[CHASE-SQL: Multi-Path Reasoning and Preference Optimized Candidate Selection in Text-to-SQL](https://proceedings.iclr.cc/paper_files/paper/2025/file/974ff7b5bf08dbf9400b5d599a39c77f-Paper-Conference.pdf) (as "Synthetic example generation")**
> The task of generating new, synthetic pairs of natural language questions and corresponding SQL queries to be used as examples for in-context learning.

**[Not All LLM-Generated Data Are Equal: Rethinking Data Weighting in Text Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/03dfa2a7755635f756b160e9f4c6b789-Paper-Conference.pdf)**
> Producing labeled training examples from prompts, few-shot examples, and a language model.

**[Scale-Free Graph-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ce3e23a212815cc1f9b7cf2b3490d715-Paper-Conference.pdf) (as "Pseudo-label generation")**
> The process of assigning inferred labels to unlabeled data points to augment the training set for a supervised model.

**[In-Context Learning as Conditioned Associative Memory Retrieval](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25k/wu25k.pdf) (as "Ghost example construction")**
> The process of generating synthetic prompt examples that replicate the behavior of a model without in-context learning, used to isolate the effect of memory reshaping.

**[AutoEval Done Right: Using Synthetic Data for Model Evaluation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/boyeau25a/boyeau25a.pdf) (as "Synthetic label generation")**
> Using an AI model to produce predicted labels or preferences on unlabeled data for the purpose of model evaluation.

**[Measuring Diversity in Synthetic Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhu25ac/zhu25ac.pdf) (as "Synthetic dataset generation")**
> The process by which an LLM produces a collection of input-output pairs or textual samples intended for use as training or augmentation data in downstream tasks.

## Relationships

### Synthetic data generation →
- **Text classification** (behaviors tasks) — *causes*
  > synthetic data plays a crucial role in boosting the performance of LLMs across a variety of downstream tasks, including text classification... (Section 2.2)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > synthetic data plays a crucial role in boosting the performance of LLMs across a variety of downstream tasks, including... code generation... (Section 2.2)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)
- **Faithfulness** (constructs) — *causes*
  > ...eliminating uncertainty during synthetic data generation leads to more generalization ability. ... thereby enhancing the faithfulness of the synthetic data. (Section 4.3)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)

### Associated with
- **Generalization** (constructs)
  > This analysis serves as a theoretical foundation for synthetic data generation and further highlights its connection with the generalization capability of post-trained models... (Section 1)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)
- **Generation diversity** (constructs)
  > As emphasized in (Long et al., 2024), the generation of synthetic data typically focuses on two primary objectives: faithfulness and diversity. (Section 4.3)
  - [Towards a Theoretical Understanding of Synthetic Data in LLM Post-Training: A Reverse-Bottleneck Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/1e0bfe8bbaa0e70809f0a8ccd9c2ff3e-Paper-Conference.pdf)
