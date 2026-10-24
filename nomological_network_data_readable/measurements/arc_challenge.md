# ARC-Challenge
**Type:** Measurement  
**Referenced in:** 267 papers  
**Also known as:** ARC Challenge, ARC-challenge, ARC-C, ARC-c, Arc-C, ARC (Challenge), Arc Challenge, Arc-Challenge, Arc-challenge, ArcChallenge, ARCC, ARC_C, Arc-c  

## State of the Field

**What it is.** Across the surveyed work, ARC-Challenge is most commonly treated as the harder challenge split of the AI2 Reasoning Challenge, a multiple-choice science question answering benchmark built from scientific or grade-school exams and designed to be difficult for simple retrieval or word co-occurrence methods. Papers refer to it under several spellings, including ARC-Challenge, ARC-C, ARC-c, ARCC, and ARC_C, and usually contrast it with ARC-Easy. Descriptions vary slightly: some emphasize commonsense or scientific reasoning, some describe it as open-book QA, and another frames it as a closed-set reasoning dataset.

**What it is claimed to measure.** Across papers, ARC-Challenge is linked to 16 constructs and 14 behavioral indicators, so the reported measurement claims are spread across many targets rather than concentrated on a single one. The prevailing use is to measure commonsense reasoning and broader reasoning, with recurring claims that it also measures general ability, generalization, natural language understanding, and scientific reasoning. On the behavioral side, papers most often use it for multiple-choice question answering, language understanding task performance, question answering, scientific question answering, and zero-shot task performance.

**Space of uses.** Most papers position ARC-Challenge as one component of a broader benchmark suite rather than as a standalone instrument. It is frequently evaluated in zero-shot settings, though some work uses few-shot or chain-of-thought prompting, and papers also use it as a downstream or benign-performance check after interventions such as fine-tuning, unlearning, alignment, or compression. It is linked to 3 other instruments, most often lm-evaluation-harness, and also OLMES and OpenCompass.

**Concerns raised.** Concerns raised about ARC-Challenge focus on contamination. Papers use it to probe for contamination and report slight evidence of contamination in a tested model, and a smaller line of work considered it for a benchmark suite but did not include it because of contamination concerns.

## Sources

**[Dynamic Sparse No Training:  Training-Free Fine-tuning for Sparse LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/0147d967a5db3b8dde08d2a327b24568-Paper-Conference.pdf) (as "ARC Challenge")**
> The challenge set of the AI2 Reasoning Challenge (ARC), a benchmark consisting of difficult, multiple-choice science questions that are hard to answer with simple retrieval or word co-occurrence.

**[SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf) (as "ARC-challenge")**
> A subset of the AI2 Reasoning Challenge (ARC) dataset containing difficult science questions, used to evaluate question answering ability in a zero-shot setting.

**[Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)**
> A multiple-choice reasoning dataset created from scientific exams used to evaluate closed-set reasoning performance.

**[Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf) (as "ARC-C")**
> The AI2 Reasoning Challenge (Challenge Set), a multiple-choice question-answering dataset of difficult science questions intended to test commonsense reasoning.

**[Dobi-SVD: Differentiable SVD for LLM Compression and Some New Perspectives](https://proceedings.iclr.cc/paper_files/paper/2025/file/218ca0d92e6ed8f9db00621e103dc70c-Paper-Conference.pdf) (as "ARC-c")**
> An AI2 Reasoning Challenge evaluation set used for zero-shot commonsense question answering.

**[OmnixR: Evaluating Omni-modality Language Models on Reasoning across Modalities](https://proceedings.iclr.cc/paper_files/paper/2025/file/aa3e67220ca4cd50010165c950fc8056-Paper-Conference.pdf) (as "Arc-Challenge")**
> A question-answering benchmark based on science questions, considered as a potential source for the Omni×R suite but ultimately not used due to data contamination concerns.

**[Sparse Learning for State Space Models on Mobile](https://proceedings.iclr.cc/paper_files/paper/2025/file/adf7fa39d65e2983d724ff7da57f00ac-Paper-Conference.pdf) (as "Arc-challenge")**
> Benchmark dataset used to evaluate science question answering.

**[Train Small, Infer Large: Memory-Efficient LoRA Training for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d022216357816e483433914204aa80ee-Paper-Conference.pdf) (as "Arc Challenge")**
> A benchmark for commonsense reasoning that features challenging, grade-school-level science questions.

**[PolyPythias: Stability and Outliers across Fifty Language Model Pre-Training Runs](https://proceedings.iclr.cc/paper_files/paper/2025/file/d611d06e3207330555fbc10810e70163-Paper-Conference.pdf) (as "ARC (Challenge)")**
> AI2 Reasoning Challenge Challenge, a multiple-choice question-answering benchmark used to assess harder downstream reasoning performance.

**[Scaling FP8 training to trillion-token LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f48b5133e89854a9e97cc22a6db83f25-Paper-Conference.pdf) (as "Arc-C")**
> The AI2 Reasoning Challenge (Challenge Set), a benchmark of difficult, grade-school level science questions used to evaluate a model's question answering and reasoning abilities.

**[LoRA Done RITE: Robust Invariant Transformation Equilibration for LoRA Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcbc0f660d2dde42f9d1d0ecb14a6f9a-Paper-Conference.pdf) (as "ArcChallenge")**
> ARC-Challenge benchmark used to evaluate LLM performance on science question answering.

**[Cooperative or Competitive? Understanding the Interaction between Attention Heads From A Game Theory Perspective](https://aclanthology.org/2025.acl-long.688.pdf) (as "ARCC")**
> The AI2 Reasoning Challenge - Challenge Set (ARCC) is a difficult subset of the ARC dataset, containing science questions that are hard to answer with simple retrieval-based methods.

**[Scalable Language Model with Generalized Continual Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/79fe2c290c0566f88617e9c5bd593441-Paper-Conference.pdf) (as "Arc-c")**
> Open benchmark assessing commonsense reasoning through challenge sets in science questions.

**[True Knowledge Comes from Practice: Aligning Large Language Models with Embodied Environments via Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/ee60f53717bd9c2abdcca66dfbec65da-Paper-Conference.pdf) (as "ARC_C")**
> A benchmark from the Language Model Evaluation Harness used to evaluate zero-shot language understanding and reasoning.

## Relationships

### → ARC-Challenge
- **Commonsense reasoning** (constructs) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We conduct experiments on MMLU (Hendrycks et al., 2020), ARC-Challenge (Clark et al., 2018), and CommonsenseQA (CSQA) (Talmor et al., 2019), which are all MCQ benchmarks widely used for LLM evaluation.
  - [Large Language Models Are Not Robust Multiple Choice Selectors](https://proceedings.iclr.cc/paper_files/paper/2024/file/54dd9e0cff6d9214e20d97eb2a3bae49-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > A diverse set of benchmarks containing Piqa (Bisk et al., 2019), ARC-c, ARC-e (Clark et al., 2018), Hellaswag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021) and Winogrande (Sakaguchi et al., 2019), which collectively evaluate the language comprehension and reasoning faculties of LLMs. (Section 5.1)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Figure 4 shows the downstream performance on HellaSwag, MMLU Var3, ARC-Challenge, and SciQ. PolyNorm outperforms SwiGLU on all tasks, with notable improvements, demonstrating superior generalization capabilities.
  - [Polynomial Composition Activations: Unleashing the Dynamics of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/725f5e8036cc08adeba4a7c3bcbc6f2c-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > Concurrently, we assess the models’ general capabilities using representative NLP tasks including MMLU (Hendrycks et al., 2020), ARC-Challenge (Clark et al., 2018), and GSM8K (Cobbe et al., 2021), ensuring that safety improvements do not come at the cost of overall performance.
  - [Understanding and Enhancing Safety Mechanisms of LLMs via Safety-Specific Neuron](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d2666e2cf44088cc57204fbc5ef7f34-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > We select 8 short-context tasks commonly used for evaluating the general capabilities of models. These include... ARC-Challenge (ARC-C)... (Section 4.1)
  - [Make Your LLM Fully Utilize the Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/71c3451f6cd6a4f82bb822db25cea4fd-Paper-Conference.pdf)
- **Scientific question answering** (behaviors tasks) — *measured_by*
  > Comprehensive Examination: ... ARC-C (0-shot) (Clark et al., 2018), collected from standardized natural science tests (Section 5.1).
  - [Determine-Then-Ensemble: Necessity of Top-k Union for Large Language Model Ensembling](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbb10d319d44f8c3b4720873e4177c65-Paper-Conference.pdf)
- **Scientific reasoning** (constructs) — *measured_by*
  > we evaluate the proposed TOW on ... ARC-Challenge (Clark et al., 2018) for scientific reasoning.
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > Second, we consider standard academic benchmarks used to evaluate large language models, such as question answering or Cloze-style problems. We use the following datasets: ARC challenge (Clark et al., 2018)...
  - [Neutral residues: revisiting adapters for model extension](https://raw.githubusercontent.com/mlresearch/v267/main/assets/talla25a/talla25a.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > Our evaluations on the NLP benchmarks of Wikitext [27], Lambada [32], Piqa [4], Hella [51], Winogrande [38], Arc-E, and Arc-C [10] demonstrate that Selective Attention noticeably improves language modeling performance.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > "we evaluate our method and other methods on five well-known zero-shot tasks: PIQA [4]; WinoGrande [33]; HellaSwag [45]; ARC-e and ARC-c [6]."
  - [DISP-LLM: Dimension-Independent Structural Pruning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > World Knowledge (WK): Jeopardy-3-shots [3], ArcEasy-3-shots [13], ArcChallenge-3-shots [13], and WikiDataQA-3-shots [4]
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **Knowledge** (constructs) — *measured_by*
  > For track 1, we adopt commonly used MMLU [16], Arc-eacy [3], and Arc-challenge [3] to evaluate the knowledge ability of LLMs.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Zero-shot classification** (behaviors tasks) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **Few-shot task performance** (behaviors tasks) — *measured_by*
  > Interestingly, CREAM improves over Llama2-7B on ARC-C and HellaSwag. This is because these two tasks are few-shot tasks with longer prompts...
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > Specifically, we calculate prediction accuracies on the following three benchmarks: (1) HellaSwag (Zellers et al., 2019): inference the most plausible continuation for daily events (70K problems); (2) WinoGrande (Sakaguchi et al., 2019): assesses commonsense reasoning (44K problems); (3) ARC-Challenge (Clark et al., 2018): complex reasoning and understanding of scientific concepts (7.8K problems)... to investigate the extent of forgetting
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Data contamination** (constructs) — *measured_by*
  > We then apply this method on two other datasets (CommonsenseQA (Talmor et al., 2019) and ARC- Challenge (Clark et al., 2018)) to probe for evidence of contamination across our three target models (Table 5). (Section 4.3)
  - [Information-Guided Identification of Training Data Imprint in (Proprietary) Large Language Models](https://aclanthology.org/2025.naacl-long.99.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > The classification benchmarks include ARC-Challenge (Clark et al., 2018), MMLU-Pro (Wang et al., 2024), and MixEval (Ni et al., 2024). (Section 5.2)
  - [A Unified Approach to Routing and Cascading for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dekoninck25a/dekoninck25a.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > "Knowledge-Focused Tasks include ARC-Challenge and ARC-Easy (Clark et al., 2018), PIQA (Bisk et al., 2019), Winogrande (Sakaguchi et al., 2019), OpenBookQA (Mihaylov et al., 2018), and HellaSwag (Zellers et al., 2019). These benchmarks primarily assess factual knowledge"
  - [Understanding the Skill Gap in Recurrent Language Models: The Role of the Gather-and-Aggregate Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bick25a/bick25a.pdf)
- **Calibration** (constructs) — *measured_by*
  > We evaluate the ECE and Accuracy using four diverse datasets: MMLU, MedMCQA, OpenBookQA, Arc-Challenge... (Section 6.1)
  - [Restoring Calibration for Aligned Large Language Models: A Calibration-Aware Fine-Tuning Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25b/xiao25b.pdf)
- **Analogical reasoning** (constructs) — *measured_by*
  > “ARC-Challenge (Clark et al., 2018) which uses a 4-choice format” and “ARC-Challenge centers on Analogical and Inductive Reasoning”
  - [Benchmark Profiling: Mechanistic Diagnosis of LLM Benchmarks](https://aclanthology.org/2025.emnlp-main.789.pdf)
- **Functional linguistic competence** (constructs) — *measured_by*
  > To assess this, we use six benchmarks covering world knowledge (ARC-EASY, ARC-CHALLENGE (Clark et al., 2018)) (Section 3.3)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > We fine-tune the LLMs on OBQA (as the ID dataset) and test them on ARC-C, ARC-E, and CSQA (as OOD dataset).
  - [Calibrating LLMs with Information-Theoretic Evidential Deep Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/0cbdd1e6613c42fe975337671790f406-Paper-Conference.pdf)
- **Multilingual ability** (constructs) — *measured_by*
  > As shown in table 1, the resulting merged model surpasses each language-specific variant by up to 19% in accuracy on the ARC-Challenge dataset (Clark et al., 2018).
  - [MERGE$^3$: Efficient Evolutionary Merging on Consumer-grade GPUs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mencattini25a/mencattini25a.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > Table 2: Zero-shot performance on Language Model Evaluation Harness [56]... ARC_C
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **OpenCompass** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU ... ARC Challenge (Clark et al., 2018), ARC Easy ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
