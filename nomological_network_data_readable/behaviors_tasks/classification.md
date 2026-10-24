# Classification
**Type:** Behavior  
**Referenced in:** 42 papers  
**Also known as:** Label inference, Event categorization, Multi-class categorization, Supervised classification  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats classification as choosing a label or category from a predefined set for a given input, usually in a fixed output space. Papers describe this as scoring candidate labels and returning the highest-scoring choice, or as a text-to-text mapping in which classes are encoded as strings; success is commonly framed as producing the correct choice, and some papers explicitly evaluate it with accuracy. A smaller line of work broadens this to inferring one or more labels from a natural-language description, or to judging whether a response meets a stated criterion.

**Variants.** Variants range from binary and multiclass settings to tasks with larger label spaces. Papers mention answerability classification, cause-effect classification, object classification from images, movie-tag assignment, and structural-knowledge binary classification; other variants include multi-label label inference, hierarchical event categorization from meteorological data, multi-item waste categorization in cluttered scenes, and supervised classification where each prompt has a ground-truth label from a valid option set.

**Space of elicitation and scores.** Papers link classification by measured_by relations to 12 instruments. These include ARC-Challenge, ARC-Easy, HellaSwag, MMLU-Pro, and MathQA, along with other linked instruments; the linked instruments are mostly described as classification datasets or benchmarks, and one paper also links classification to the lm-evaluation-harness framework.

**What it is taken as evidence of.** Papers do not link classification to any construct as what it is evidence of.

## Sources

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)**
> Assigning a label from a predefined set based on input context, treated as a text-to-text mapping in this work.

**[MuHBoost: Multi-Label Boosting For Practical Longitudinal Human Behavior Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/ca2963d1cfb25e93362e86fb427a9524-Paper-Conference.pdf) (as "Label inference")**
> Inferring one or more labels for an unseen sample from its natural-language description.

**[CLLMate: A Multimodal Benchmark for Weather and Climate Events Forecasting](https://aclanthology.org/2025.emnlp-main.886.pdf) (as "Event categorization")**
> The observable task of selecting the most probable event category from a predefined hierarchical classification system based on given meteorological data.

**[Waste-Bench: A Comprehensive Benchmark for Evaluating VLLMs in Cluttered Environments](https://aclanthology.org/2025.emnlp-main.1578.pdf) (as "Multi-class categorization")**
> The task of classifying multiple waste items within a single complex scene into more than one category.

**[To Steer or Not to Steer? Mechanistic Error Reduction with Abstention for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hedstrom25a/hedstrom25a.pdf) (as "Supervised classification")**
> The task of predicting a discrete label from a set of valid options for a given input prompt, based on labeled training examples.

## Relationships

### Classification →
- **SuperGLUE** (measurements) — *measured_by*
  > examine BAdam's capability in classification tasks by training RoBERTa-large on SuperGLUE benchmarks.
  - [BAdam: A Memory Efficient Full Parameter Optimization Method for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2c570b0f9938c7a58a612e5b00af9cc0-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **PIQA** (measurements) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **MathQA** (measurements) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > ...six classification datasets... with the LM-Evaluation-Harness framework (Gao et al., 2023).
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > The classification benchmarks include ARC-Challenge (Clark et al., 2018), MMLU-Pro (Wang et al., 2024), and MixEval (Ni et al., 2024). (Section 5.2)
  - [A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > The classification benchmarks include ARC-Challenge (Clark et al., 2018), MMLU-Pro (Wang et al., 2024), and MixEval (Ni et al., 2024). (Section 5.2)
  - [A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)
- **MixEval** (measurements) — *measured_by*
  > The classification benchmarks include ARC-Challenge (Clark et al., 2018), MMLU-Pro (Wang et al., 2024), and MixEval (Ni et al., 2024). (Section 5.2)
  - [A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)
