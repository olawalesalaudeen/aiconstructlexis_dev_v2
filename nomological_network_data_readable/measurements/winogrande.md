# WinoGrande
**Type:** Measurement  
**Referenced in:** 331 papers  
**Also known as:** Winogrande, WinoGrade, Winograde, Wino  

## State of the Field

**What it is.** Across papers, WinoGrande is most commonly described as a large-scale Winograd-schema-style commonsense reasoning benchmark or dataset. The prevailing description centers on pronoun or coreference resolution over ambiguous sentences, often in fill-in-the-blank or multiple-choice form with binary options; several papers also describe it as adversarially mined or filtered and designed to be hard for models that rely on statistical cues, with some definitions also mentioning minimal gender or dataset-specific bias. A smaller number of papers use variant names such as Winogrande, WinoGrade, Winograde, or Wino, and a few frame it more generally as a language understanding or reasoning benchmark.

**What it is claimed to measure.** Papers use WinoGrande to measure 15 constructs and 12 behavioral indicators. The dominant framing is that it measures Commonsense reasoning, though papers also report it as evaluating Reasoning, General ability, Logical reasoning, Natural language understanding, and other constructs, so the claims extend beyond a single construct even while commonsense reasoning remains the prevailing use. At the behavioral-indicator level, it is most often linked to Coreference resolution, followed by Language understanding task performance, Zero-shot question answering, Multiple-choice question answering, and Zero-shot task performance, with further links to other indicators as well.

**Space of uses.** Papers usually position WinoGrande as one task inside broader evaluation suites, commonly alongside HellaSwag, PIQA, ARC-E or ARC-C, BoolQ, and OpenBookQA, and most often report zero-shot accuracy. A smaller line of work uses few-shot settings, validation splits, or presents it as part of language understanding, downstream task, or general-domain benchmark suites. It is linked to 4 other measurement instruments, with lm-evaluation-harness the most frequently linked, followed by OLMES, Open LLM Leaderboard, and OpenCompass; papers say WinoGrande is evaluated with lm-evaluation-harness and OpenCompass, included in the OLMES multiple-choice suite, and related to the Open LLM Leaderboard.

**Concerns raised.** Only a small line of work raises an explicit concern through benchmark overfitting or contamination studies: one paper uses WinoGrande to evaluate the impact of data contamination. Separately, several descriptions emphasize that the benchmark is adversarially mined or filtered and designed to reduce statistical, dataset-specific, or gender bias.

## Sources

**[Efficient Streaming Language Models with Attention Sinks](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e5fd18f863cbe6d8ae392a93fd271c9-Paper-Conference.pdf) (as "Winogrande")**
> A commonsense reasoning benchmark included in the expanded evaluation set.

**[AffineQuant: Affine Transformation Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/ddfb58b61e7213dfb9e06c695475b2bd-Paper-Conference.pdf)**
> A large-scale dataset for commonsense reasoning that involves resolving pronouns in sentences designed to be challenging for models.

**[Sparse Learning for State Space Models on Mobile](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf7fa39d65e2983d724ff7da57f00ac-Paper-Conference.pdf) (as "WinoGrade")**
> Benchmark dataset used to evaluate winograd schema challenge reasoning.

**[SIMPLEMIX: Frustratingly Simple Mixing of Off- and On-policy Data in Language Model Preference Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25au/li25au.pdf) (as "Winograde")**
> A benchmark for commonsense reasoning based on the Winograd Schema Challenge, which involves resolving pronoun ambiguities.

**[Sketch to Adapt: Fine-Tunable Sketches for Efficient LLM Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25bs/zhang25bs.pdf) (as "Wino")**
> A benchmark based on the Winograd Schema Challenge, designed to test commonsense reasoning through pronoun resolution problems.

## Relationships

### → WinoGrande
- **Commonsense reasoning** (constructs) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **Coreference resolution** (behaviors tasks) — *measured_by*
  > WinoGrande (Sakaguchi et al., 2019) for conference resolution (Section 4.1).
  - [Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > To demonstrate the effectiveness of SPA in the natural language understanding domain, we evaluate its performance on several diverse tasks, including Big-Bench Hard (BBH) (Suzgun et al., 2022), GPQA (Rein et al., 2023), MMLU (Hendrycks et al., 2020), and WinoGrande (Sakaguchi et al., 2019).
  - [Synthesize, Partition, then Adapt: Eliciting Diverse Samples from Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e2861dabad3fe21a71914ccfbfff976-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > For zero-shot evaluation, we employ BoolQ (Clark et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Keisuke et al., 2019), and TruthfulQA (Lin et al., 2022). (Section 5.4)
  - [PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > Our evaluations on the NLP benchmarks of Wikitext [27], Lambada [32], Piqa [4], Hella [51], Winogrande [38], Arc-E, and Arc-C [10] demonstrate that Selective Attention noticeably improves language modeling performance.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > "We also re-examined data collected during the Pythia training runs [5] on the SciQ [73], PIQA [8], WinoGrande [60], and ARC Easy [18] datasets. Each of these consist of a wide range of questions with multiple-choice answers"
  - [LLM Circuit Analyses Are Consistent Across Training and Scale](https://proceedings.neurips.cc/paper_files/paper/2024/file/47c7edadfee365b394b2a3bd416048da-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... winogrande
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > Reasoning: The model’s capacity for commonsense and logical reasoning is measured using Winogrande (Sakaguchi et al., 2021) and ARC (easy and challenge subsets) (Clark et al., 2018). (Section 4.1)
  - [Mixture-of-Clustered-Experts: Advancing Expert Specialization and Generalization in Instruction Tuning](https://aclanthology.org/2025.emnlp-main.718.pdf)
- **Commonsense question answering** (behaviors tasks) — *measured_by*
  > ...we list in Table 4 (b–c) the accuracy of our quantized Llama-2 models on the ARC-C, -E (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019) and Winogrande (Sakaguchi et al., 2021) common sense question answering... (Section 4)
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > Besides, to verify whether HRA can better retain pre-training knowledge, we fine-tune LLaMA-2 7B on the MATHQA dataset by LoRA and HRA, respectively, and check the degradation of model performance on classic NLP tasks, including typical language tasks in ARC [55], HellaSwag [58], MMLU [17], Winogrande [42], and a coding task in HumanEval [6]. (Section 4.2)
  - [Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdd0640218a27e9e2c0e52e324e25db0-Paper-Conference.pdf)
- **Zero-shot classification** (behaviors tasks) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > For knowledge reasoning, we utilize Winogrande (Sakaguchi et al., 2019) (abbreviated as Wino) and CommonsenseQA (Talmor et al., 2019) (abbreviated as Comm). (Section 4)
  - [Think Thrice Before You Act: Progressive Thought Refinement in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6882dbdc34bcd094e6f858c06ce30edb-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > For short-context evaluation, we employ MMLU (Hendrycks et al., 2021), ARC-C (Clark et al., 2018), Hellaswag (Zellers et al., 2019) and Winogrande (Sakaguchi et al., 2019)...
  - [LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > Specifically, we calculate prediction accuracies on the following three benchmarks: (1) HellaSwag (Zellers et al., 2019): inference the most plausible continuation for daily events (70K problems); (2) WinoGrande (Sakaguchi et al., 2019): assesses commonsense reasoning (44K problems); (3) ARC-Challenge (Clark et al., 2018): complex reasoning and understanding of scientific concepts (7.8K problems)... to investigate the extent of forgetting
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Natural language inference** (behaviors tasks) — *measured_by*
  > Natural Language Inference (NLI) using PIQA (Bisk et al., 2020) and WinoGrande (Sakaguchi et al., 2020) (Section 4).
  - [It Helps to Take a Second Opinion: Teaching Smaller LLMs To Deliberate Mutually via Selective Rationale Optimisation](https://proceedings.iclr.cc/paper_files/paper/2025/file/bc12914d66b41b6bfc2d3a5decdb498b-Paper-Conference.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Benchmark overfitting** (constructs) — *measured_by*
  > We evaluate the impact of data contamination using a mix of seven different benchmarks: ARC-Easy (Clark et al., 2018), Social-I-QA (Sap et al., 2019), WinoGrande (Sakaguchi et al., 2021), PiQA (Bisk et al., 2020), BoolQ (Clark et al., 2019), MMLU (Hendrycks et al., 2021), and HellaSwag (Zellers et al., 2019). (Section 3.2)
  - [How Much Can We Forget about Data Contamination?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bordt25a/bordt25a.pdf)
- **Disambiguation ability** (constructs) — *measured_by*
  > Winogrande: a large-scale dataset focused on common sense reasoning, designed to improve and evaluate AI models on ambiguity resolution tasks (Sakaguchi et al., 2019) (Section 5.1).
  - [What Limits Bidirectional Model’s Generative Capabilities? A Uni-Bi-Directional Mixture-of-Expert Method For Bidirectional Fine-tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25y/li25y.pdf)
- **Knowledge application** (constructs) — *measured_by*
  > We evaluated these models on six different benchmarks ... including PIQA (Bisk et al., 2020), hellaswag (Zellers et al., 2019), BoolQ (Clark et al., 2019), ARC (Clark et al., 2018), winogrande (Sakaguchi et al., 2021) and SIQA (Sap et al., 2019). These tasks examine models’ language understanding, logical reasoning, knowledge utilization, and social awareness capabilities.
  - [HMoE: Heterogeneous Mixture of Experts for Language Modeling](https://aclanthology.org/2025.emnlp-main.1115.pdf)
- **Functional linguistic competence** (constructs) — *measured_by*
  > To assess this, we use six benchmarks covering... common-sense reasoning (WINOGRANDE (Sakaguchi et al., 2019), HELLASWAG (Zellers et al., 2019)). (Section 3.3)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > zero-shot downstream performance on 6 common-sense reasoning domains from the language model evaluation harness (Gao et al., 2024): HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2019), PIQA (Bisk et al., 2019), ARC-E (Clark et al., 2018), SciQ (Welbl et al., 2017), LogiQA2 (Liu et al., 2023) and LAMBADA (Paperno et al., 2016). (Section 4)
  - [Adaptive Data Optimization: Dynamic Sample Selection with Scaling Laws](https://proceedings.iclr.cc/paper_files/paper/2025/file/923285deb805c3e14e1aeebc9854d644-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **OpenCompass** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... BoolQ (Clark et al., 2019), and WinoGrande (Sakaguchi et al., 2020)."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
