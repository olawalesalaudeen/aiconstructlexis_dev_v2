# MathQA
**Type:** Measurement  
**Referenced in:** 50 papers  
**Also known as:** MQA  

## State of the Field

**What it is.** Across papers, MathQA is most commonly described as a math question answering benchmark or dataset of math word problems used to assess multi-step quantitative or mathematical reasoning. Definitions usually present it as multiple-choice, and one paper notes that it "contains more diverse problems in geometry, physics, probability, and algebra" and "provides 5 options to choose from for each problem." Some authors also emphasize operation-based or interpretable formalisms, while a smaller line of work, under the name MQA, describes a benchmark containing GRE and GMAT exam questions for more diverse and complex quantitative reasoning.

**What it is claimed to measure.** Papers link MathQA to 6 constructs and 2 behavioral indicators. The prevailing usage is to measure Mathematical reasoning, and one paper also reports MathQA as related to Mathematical reasoning; smaller lines of work use it to measure Commonsense reasoning and Reasoning. The two recorded behavioral indicators are Mathematical problem solving and Classification, and papers also link it to 3 other constructs.

**Space of uses.** Papers do not link MathQA directly to another measurement instrument. In practice, they frequently place it alongside GSM8K, MATH, SVAMP, AQuA, and ASDiv in broader mathematical reasoning evaluations, while some position it in wider reasoning, commonsense, classification, or general validation suites. Some papers use the default lm-evaluation-harness protocol, and one definition describes it as used in instruction tuning and retriever fine-tuning.

**Concerns raised.** A concern that appears is contamination: one paper includes MathQA among mathematical reasoning benchmarks used to detect data contamination.

## Sources

**[RA-DIT: Retrieval-Augmented Dual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/536d18fbb454f80221465f1a42c6f389-Paper-Conference.pdf)**
> A math question answering dataset used in instruction tuning and retriever fine-tuning.

**[Ensembling Large Language Models with Process Reward-Guided Tree Search for Better Complex Reasoning](https://aclanthology.org/2025.naacl-long.515.pdf) (as "MQA")**
> Mathematical reasoning benchmark containing GRE and GMAT exam questions that test complex quantitative reasoning abilities.

## Relationships

### → MathQA
- **Mathematical reasoning** (constructs) — *measured_by*
  > For evaluation, we employ a range of benchmarks - GSM8K, MATH, MMLU-MATH, AGIEval-SAT-MATH, MathQA, AQuA - to assess varying levels of mathematical reasoning abilities, comparing all models using the same few-shot prompting with greedy decoding. (Section 4.2)
  - [MathPile: A Billion-Token-Scale Pretraining Corpus for Math](https://proceedings.neurips.cc/paper_files/paper/2024/file/2d0be3cd5173c10b6ec075d1c393a13d-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > For mathematic QA tasks (MathQA and GSM8K)... (Section 3.1)
  - [DIVE into MoE: Diversity-Enhanced Reconstruction of Large Language Models from Dense into Mixture-of-Experts](https://aclanthology.org/2025.acl-long.951.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Seven reasoning datasets used in the experiments include OpenbookQA (Banerjee et al., 2020), WinoGrande (Sakaguchi et al., 2021) HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019), ARC-e, ARC-c (Clark et al., 2018). (Section 4.1)
  - [Basis Sharing: Cross-Layer Parameter Sharing for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/238c98450b1d9e8055f94d22f303bb57-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > along with 7 common sense reasoning datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019), ARC-e, and ARC-c (Clark et al., 2018)) (Section 4.1).
  - [MoE-SVD: Structured Mixture-of-Experts LLMs Compression via Singular Value Decomposition](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25az/li25az.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Problem-solving ability** (constructs) — *measured_by*
  > It consists of questions that test numerical reasoning and problem-solving skills, requiring models to both understand the text of a word problem and perform mathematical operations to arrive at the correct solution. (Section 3.2.1)
  - [NESTFUL: A Benchmark for Evaluating LLMs on Nested Sequences of API Calls](https://aclanthology.org/2025.emnlp-main.1702.pdf)
